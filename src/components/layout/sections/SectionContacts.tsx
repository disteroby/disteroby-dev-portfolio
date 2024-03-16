import { FormEvent, useRef } from "react";
import { saveDbMessage } from "../../../utils/FirebaseUtils.ts";
import EarthContainer from "../../threejs/scenes/EarthContainer.tsx";
import RoundInput from "../../UI/RoundInput/RoundInput.tsx";
import SectionTitle from "../../UI/SectionTitle.tsx";
import { BsSendCheckFill } from "react-icons/bs";
import { MdMail } from "react-icons/md";
import { RiSparkling2Line } from "react-icons/ri";
import { TbMessageCircle2Filled } from "react-icons/tb";
import { Bounce, toast, ToastContainer, ToastOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SectionContacts() {
    const emailRef = useRef<HTMLInputElement>(null!);
    const messageRef = useRef<HTMLInputElement>(null!);

    async function onSendMessage(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const email = emailRef.current.value.trim();
        const message = messageRef.current.value.trim();

        const toastOptions: ToastOptions = {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            pauseOnHover: true,
            closeOnClick: true,
            draggable: true,
            theme: "dark",
            transition: Bounce,
            className: "m-[1rem!important]",
        };

        if (email === "" || message === "") {
            toast.error("Please, fill out all fields!", toastOptions);
            return;
        }

        const id = toast.loading("I'm sending your message...", {
            ...toastOptions,
            autoClose: false,
            closeButton: false,
            hideProgressBar: true,
            closeOnClick: false,
            draggable: false,
        });

        const saveResult = await saveDbMessage(email, message);

        toast.update(id, {
            ...toastOptions,
            render: saveResult
                ? "Perfect! I'll reply shortly, thanks!🔥"
                : "Whops... something went wrong! Please, retry later🙁",
            type: saveResult ? "success" : "error",
            isLoading: false,
        });
    }

    return (
        <div className='flex flex-col items-center'>
            <SectionTitle title='Contacts' />
            <div className='flex w-full flex-col items-stretch pb-4 lg:flex-row lg:py-24'>
                <div className='relative aspect-square h-auto w-full hover:select-none max-lg:translate-y-[15%] lg:aspect-[15/14] lg:w-[60%]'>
                    <EarthContainer />
                    <div className='absolute -inset-[1rem] bg-gradient-to-b from-transparent from-40% via-dark-gray/80 via-70% to-dark-gray to-80% lg:hidden'></div>
                </div>
                <div className='relative z-10 grid place-items-center p-8 text-center lg:w-[40%]'>
                    <form
                        onSubmit={onSendMessage}
                        className='flex max-w-[23rem] flex-col justify-center gap-8 '>
                        <h3 className='mx-auto w-fit bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-4xl font-medium text-transparent lg:text-4xl xl:text-5xl'>
                            Get in touch!
                        </h3>
                        <span className='-mt-4 mb-4'>
                            Let's Discover Your Ideas Together and Create
                            Something Extraordinary{" "}
                            <RiSparkling2Line className='inline-block' />
                        </span>
                        <RoundInput
                            ref={emailRef}
                            label='Your Email'
                            icon={<MdMail />}
                            type='email'
                            placeholder='your.name@your.mail.com'
                            autocompleted='email'
                        />
                        <RoundInput
                            ref={messageRef}
                            label='Your Message'
                            icon={<TbMessageCircle2Filled />}
                            placeholder='Write me a message...'
                        />
                        <button
                            type='submit'
                            className='group relative mx-auto flex h-12 w-12 cursor-pointer items-center justify-center overflow-hidden rounded-[3rem] bg-white/10 outline outline-2 outline-transparent transition-all duration-300 ease-in-out hover:w-28 hover:bg-cyan-500 hover:shadow-[0_.15rem_2.5rem_rgba(6,182,212,.5),0_.15rem_.65rem_rgba(6,182,212,.75)] focus-visible:outline-white active:bg-cyan-400 active:duration-75'>
                            <span className='absolute -top-5 text-sm font-semibold tracking-wider opacity-15 transition-all duration-200 group-hover:top-2 group-hover:opacity-100'>
                                SEND
                            </span>
                            <BsSendCheckFill className='text-xl transition-all duration-200 group-hover:translate-y-[60%] group-hover:text-5xl' />
                        </button>
                    </form>
                </div>
            </div>
            <ToastContainer newestOnTop />
        </div>
    );
}

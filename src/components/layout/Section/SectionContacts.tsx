import { useRef } from "react";
import { PerspectiveCamera } from "@react-three/drei";
import { saveDbMessage } from "../../../utils/FirebaseUtils.ts";
import EarthModel from "../../model3D/EarthModel.tsx";
import PerformanceCanvas from "../../model3D/PerformanceCanvas.tsx";
import RoundInput from "../../UI/RoundInput/RoundInput.tsx";
import SectionTitle from "../../UI/SectionTitle.tsx";
import { MdMail } from "react-icons/md";
import { RiSparkling2Line } from "react-icons/ri";
import { TbMessageCircle2Filled } from "react-icons/tb";

export default function SectionContacts() {
    const emailRef = useRef<HTMLInputElement>(null!);
    const messageRef = useRef<HTMLInputElement>(null!);

    //TODO
    function onSendMessage() {
        const data = {
            email: emailRef.current.value.trim(),
            message: messageRef.current.value.trim(),
        };

        const options: RequestInit = {
            method: "POST",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        };

        console.log(data, options);

        saveDbMessage(data)
            .then(createdDoc => {
                console.log(createdDoc);
            })
            .catch(e => console.error(e));
    }

    return (
        <div className='flex min-h-screen flex-col items-center'>
            <SectionTitle title='Contacts Me' />
            <div className='flex w-full flex-col items-stretch border border-green-600/20 lg:flex-row'>
                <div className='aspect-square hover:select-none lg:aspect-[15/14] lg:w-[60%]'>
                    <PerformanceCanvas
                        id='canvas-earth'
                        className='h-auto w-full hover:select-none'>
                        <PerspectiveCamera
                            makeDefault
                            fov={90}
                            position={[0, 0, 4.5]}
                            zoom={4}
                        />
                        <EarthModel />
                    </PerformanceCanvas>
                </div>
                <div className='grid place-items-center p-8 lg:w-[40%]'>
                    <div className='flex max-w-[23rem] flex-col justify-center gap-8 '>
                        <h3
                            onClick={onSendMessage}
                            className='w-fit bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-3xl font-medium text-transparent lg:text-4xl xl:text-5xl'>
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
                            placeholder='your.name@your.mail.com'
                            autocompleted='email'
                        />
                        <RoundInput
                            ref={messageRef}
                            label='Your Message'
                            icon={<TbMessageCircle2Filled />}
                            placeholder='Write me a message...'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

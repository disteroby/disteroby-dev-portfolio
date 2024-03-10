import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

export default function Footer() {
    return (
        <div className='space-y-4 bg-black/50 p-4 py-8 lg:p-8'>
            <div className='mx-auto flex flex-row flex-wrap items-center justify-center gap-2 text-center'>
                <div className='shrink-0'>&copy; Crafted with love by</div>
                <div className='shrink-0 break-keep font-bold tracking-wide'>
                    Roberto Di Stefano
                </div>
            </div>
            <div className='mx-auto flex flex-row flex-wrap items-center justify-center gap-4 text-center'>
                <a
                    className='text-3xl'
                    href='https://github.com/disteroby'
                    target='_blank'>
                    <IoLogoGithub />
                </a>
                <a
                    className='text-3xl'
                    href='https://www.linkedin.com/in/disteroby1999'
                    target='_blank'>
                    <IoLogoLinkedin />
                </a>
            </div>
            <div className='mx-auto pt-4 text-center text-sm lg:pt-8'>
                <span className='opacity-75'>
                    Curious about how I designed this portfolio?
                    <br />
                    Feel free to explore the magic behind it by visiting my
                </span>{" "}
                <a
                    className='italic underline opacity-80'
                    href='https://github.com/disteroby/disteroby-dev-porfolio'
                    target='_blank'>
                    GitHub Repository
                </a>
            </div>
        </div>
    );
}

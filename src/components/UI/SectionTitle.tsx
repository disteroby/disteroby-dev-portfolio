import React from "react";
import GlowingText from "./GlowingText.tsx";

type SectionTitleProps = {
    title: string;
};

export default function SectionTitle({ title }: SectionTitleProps) {
    return (
        <div
            style={{
                transform: "translateZ(0)",
                perspective: "1000",
                backfaceVisibility: "hidden",
            }}
            className='flex w-full flex-col items-center justify-center gap-2 lg:gap-4'>
            <div className='flex w-full max-w-[18rem] grow flex-row items-center justify-center'>
                <div className='pointer-events-none h-px grow bg-gradient-to-l from-white/70 ' />
                <div className='text-md grow-0 px-2 font-light uppercase text-white/80 md:text-xl'>
                    section
                </div>
                <div className='pointer-events-none h-px grow bg-gradient-to-r from-white/70 ' />
            </div>
            <GlowingText
                text={title}
                className='text-3xl uppercase tracking-wide lg:text-5xl'
            />
            {/*<div className='relative mt-px h-[.065rem] w-full lg:h-[.1rem]'>*/}
            {/*    <div className='absolute -left-[15%] right-1/2 top-0 h-full bg-gradient-to-r from-fuchsia-500/0 via-fuchsia-500/40 to-fuchsia-500/60' />*/}
            {/*    <div className='absolute -right-[15%] left-1/2 top-0 h-full bg-gradient-to-r from-cyan-500/60 via-cyan-500/40 to-cyan-500/0' />*/}
            {/*    <div className='absolute inset-x-[20%] top-0 h-full bg-gradient-to-r from-fuchsia-500/0 via-indigo-500 to-cyan-500/0' />*/}
            {/*</div>*/}
        </div>
    );
}

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
                <div className='text-md grow-0 px-2 font-light uppercase tracking-wider text-white/80 md:text-xl'>
                    section
                </div>
                <div className='pointer-events-none h-px grow bg-gradient-to-r from-white/70 ' />
            </div>
            <GlowingText
                text={title}
                className='text-3xl uppercase tracking-wide lg:text-5xl'
            />
        </div>
    );
}

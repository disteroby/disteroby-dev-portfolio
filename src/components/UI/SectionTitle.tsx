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
            className='flex flex-col items-center justify-center gap-2 lg:gap-4'>
            <GlowingText text={title} />
            <div className='relative h-6 w-full'>
                <div className='absolute inset-x-[5%] top-0 h-[2px] bg-gradient-to-r from-fuchsia-500/10 via-indigo-500 to-cyan-500/10 blur-sm' />
                <div className='absolute -inset-x-[15%] top-0 h-px bg-gradient-to-r from-fuchsia-500/5 via-indigo-500 to-cyan-500/5' />
                <div className='absolute inset-x-[20%] top-0 h-[.1rem] bg-gradient-to-r from-fuchsia-500/5 via-indigo-500 to-cyan-500/5 blur-md' />
                <div className='absolute inset-x-[20%] top-0 h-px bg-gradient-to-r from-fuchsia-500/5 via-white/50 to-cyan-500/5' />
            </div>
        </div>
    );
}

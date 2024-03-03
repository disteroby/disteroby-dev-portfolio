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
            <div className='relative mt-px h-[.065rem] w-full lg:h-[.1rem]'>
                <div className='absolute -left-[15%] right-1/2 top-0 h-full bg-gradient-to-r from-fuchsia-500/0 via-fuchsia-500/40 to-fuchsia-500/80' />
                <div className='absolute -right-[15%] left-1/2 top-0 h-full bg-gradient-to-r from-cyan-500/80 via-cyan-500/40 to-cyan-500/0' />
                <div className='absolute inset-x-[10%] top-0 h-full bg-gradient-to-r from-fuchsia-500/0 via-indigo-500 to-cyan-500/0' />
                <div className='absolute -left-[15%] right-1/2 top-0 h-full bg-gradient-to-r from-fuchsia-500/0 via-fuchsia-500/40 to-fuchsia-500/80 blur-sm' />
                <div className='absolute -right-[15%] left-1/2 top-0 h-full bg-gradient-to-r from-cyan-500/80 via-cyan-500/40 to-cyan-500/0 blur-sm' />
            </div>
        </div>
    );
}

import { twMerge } from "tailwind-merge";

type SectionTitleProps = {
    text: string;
    className?: string;
};

export default function GlowingText({ text, className }: SectionTitleProps) {
    return (
        <div
            className={twMerge(
                "relative text-center text-4xl font-bold lg:text-6xl",
                className,
            )}>
            <div className='text-fuchsia-cyan-gradient absolute inset-0 bg-red-500 blur-2xl'>
                {text}
            </div>
            <div className='text-fuchsia-cyan-gradient absolute inset-0 bg-blue-700 blur-md'>
                {text}
            </div>
            <div className='relative text-white/90'>{text}</div>
        </div>
    );
}

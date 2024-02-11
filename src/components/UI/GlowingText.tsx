import { twJoin, twMerge } from "tailwind-merge";

type SectionTitleProps = {
    text: string;
    className?: string;
    blurs?: string[];
};

export default function GlowingText({
    text,
    className,
    blurs = ["blur-sm", "blur-lg", "blur-2xl"],
}: SectionTitleProps) {
    return (
        <div
            className={twMerge(
                "relative w-fit text-center text-4xl font-bold lg:text-6xl",
                className,
            )}>
            {blurs.map(blur => (
                <div
                    key={blur}
                    className={twJoin(
                        "text-fuchsia-cyan-gradient absolute inset-0",
                        blur,
                    )}>
                    {text}
                </div>
            ))}
            <div className='relative text-white/90'>{text}</div>
        </div>
    );
}

import { twJoin, twMerge } from "tailwind-merge";

type SectionTitleProps = {
    text: string;
    className?: string;
    blurs?: string[];
};

export default function GlowingText({
    text,
    className,
    blurs = ["blur-sm opacity-75", "blur-lg"],
}: SectionTitleProps) {
    return (
        <div
            style={{
                transform: "translateZ(0)",
                perspective: "1000",
                backfaceVisibility: "hidden",
            }}
            className={twMerge(
                "relative w-fit overflow-visible text-center font-bold tracking-wider",
                className,
            )}>
            {blurs.map(blur => (
                <div
                    key={blur}
                    className={twJoin(
                        "text-fuchsia-cyan-gradient pointer-events-none absolute inset-0",
                        blur,
                    )}>
                    {text}
                </div>
            ))}
            <div className='relative text-white/90 [text-shadow:_0_0_0.5rem_rgb(255_255_255_/_10%)]'>
                {text}
            </div>
        </div>
    );
}

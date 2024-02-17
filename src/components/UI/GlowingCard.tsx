import { AboutTopic } from "../../constants/AboutData.ts";
import { PiDotsNineBold } from "react-icons/pi";
import { RxTransparencyGrid } from "react-icons/rx";
import { twJoin } from "tailwind-merge";

type GlowingCardProps = {
    topic: AboutTopic;
    sideOnRight: boolean;
};

export default function GlowingCard({ topic, sideOnRight }: GlowingCardProps) {
    const { title, content } = topic;

    const shadows = {
        cyan: "shadow-[0_0_6rem_rgba(6,182,212,.2)]",
        fuchsia: "shadow-[0_0_6rem_rgba(217,70,239,.2)]",
    };

    return (
        <div
            className={twJoin(
                "relative w-full max-w-[35rem] overflow-hidden rounded-xl border bg-gradient-to-br from-dark-gray/50 to-dark-gray/10 p-8 pr-24 lg:pr-32",
                sideOnRight
                    ? "border-cyan-500 text-cyan-500"
                    : "border-fuchsia-500 text-fuchsia-500",
                sideOnRight ? shadows.cyan : shadows.fuchsia,
            )}>
            <div>
                <div
                    className={twJoin(
                        "mb-4 text-xl font-bold tracking-widest lg:mb-8 lg:text-2xl",
                    )}>
                    {title}
                </div>
                <div className='space-y-4 text-lg text-white/80'>
                    {content.map((paragraph, idx) => (
                        <div key={idx}>{paragraph}</div>
                    ))}
                </div>
            </div>
            <div className='absolute bottom-0 right-0 size-28 lg:size-36'>
                <div className='absolute bottom-0 right-0 grid place-content-center opacity-25'>
                    <RxTransparencyGrid
                        className={twJoin(
                            "origin-bottom-right text-[10rem]",
                            sideOnRight ? shadows.cyan : shadows.fuchsia,
                        )}
                    />
                </div>
                <div
                    className={twJoin(
                        "absolute -bottom-[20%] -right-[20%] grid h-full w-full place-content-center rounded-full border border-white bg-dark-gray/70 text-5xl lg:text-6xl",
                        sideOnRight ? shadows.cyan : shadows.fuchsia,
                        sideOnRight ? "border-cyan-500" : "border-fuchsia-500",
                    )}>
                    <topic.icon />
                </div>
            </div>
        </div>
    );
}

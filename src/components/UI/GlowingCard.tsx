import React from "react";
import { AboutTopic } from "../../constants/AboutData.tsx";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { twJoin } from "tailwind-merge";
import colors from "tailwindcss/colors";

type GlowingCardProps = {
    topic: AboutTopic;
    sideOnRight: boolean;
};

export default function GlowingCard({ topic, sideOnRight }: GlowingCardProps) {
    const { title, content } = topic;

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMovement({
        clientX,
        clientY,
        currentTarget,
    }: React.MouseEvent<HTMLElement>) {
        const { left, top } = currentTarget.getBoundingClientRect();

        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    const glowColor = sideOnRight
        ? `${colors.cyan["500"]}11`
        : `${colors.fuchsia["500"]}11`;

    const bgDarkGreyColor = "#0C0C0F";

    return (
        <motion.div
            onMouseMove={handleMouseMovement}
            className='h-full w-full'
            initial={{ opacity: 0, translateY: "2rem" }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.75, easings: ["easeOut"] }}
            viewport={{ once: true, amount: 0.5 }}>
            <div
                className={twJoin(
                    "group relative isolate h-full overflow-hidden rounded-xl border bg-dark-gray/50 p-8 pr-24 transition duration-300 lg:pr-32",
                    sideOnRight
                        ? "border-cyan-500/20 text-cyan-500 hover:border-cyan-500/40"
                        : "border-fuchsia-500/20 text-fuchsia-500 hover:border-fuchsia-500/40",
                )}>
                <motion.div
                    className='absolute inset-0 -z-10 bg-red-500 opacity-0 transition duration-300 group-hover:opacity-100'
                    style={{
                        background: useMotionTemplate`radial-gradient(50rem circle at ${mouseX}px ${mouseY}px, ${glowColor}, ${bgDarkGreyColor} 80%)`,
                    }}
                />
                <div>
                    <div
                        className={twJoin(
                            "mb-4 text-xl font-bold tracking-widest lg:mb-8 lg:text-2xl",
                        )}>
                        {title}
                    </div>
                    <div className='space-y-4 text-lg text-white/70'>
                        {content.map((paragraph, idx) => (
                            <div
                                key={idx}
                                className={twJoin(
                                    "text-opacity-80",
                                    sideOnRight
                                        ? "text-cyan-50 decoration-cyan-500"
                                        : "text-fuchsia-50 decoration-fuchsia-500",
                                )}>
                                {paragraph}
                            </div>
                        ))}
                    </div>
                </div>
                <div
                    className={twJoin(
                        "pattern-dots pointer-events-none absolute inset-0 -z-20 opacity-0 transition duration-100 pattern-bg-dark-gray pattern-size-4 group-hover:opacity-15 group-hover:duration-500",
                        sideOnRight
                            ? "pattern-cyan-500"
                            : "pattern-fuchsia-500",
                    )}
                />
                <div className='absolute bottom-0 right-0 size-28 lg:size-36'>
                    <div
                        className={twJoin(
                            "absolute -bottom-[15%] -right-[15%] grid h-full w-full place-content-center rounded-full border text-5xl transition duration-300 lg:text-6xl",
                            sideOnRight
                                ? "border-cyan-500/20 group-hover:border-cyan-500/40"
                                : "border-fuchsia-500/20 group-hover:border-fuchsia-500/40",
                        )}>
                        <topic.icon className='opacity-20 transition duration-300 ease-out group-hover:scale-110 group-hover:opacity-75' />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

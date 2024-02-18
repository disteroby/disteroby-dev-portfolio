import { AboutTopic } from "../../constants/AboutData.tsx";
import { motion } from "framer-motion";
import { twJoin } from "tailwind-merge";

type GlowingCardProps = {
    topic: AboutTopic;
    sideOnRight: boolean;
};

export default function GlowingCard({ topic, sideOnRight }: GlowingCardProps) {
    const { title, content } = topic;

    return (
        <motion.div
            variants={{
                init: { opacity: 0, translateY: "2rem" },
                inView: { opacity: 1, translateY: 0 },
            }}
            initial='init'
            whileInView='inView'
            transition={{ duration: 0.3, easings: ["easeOut"] }}
            viewport={{ once: true, amount: 0.5 }}
            className={twJoin(
                "relative h-auto w-full overflow-hidden rounded-xl border bg-gradient-to-br from-dark-gray/50 to-dark-gray/10 p-8 pr-24 transition duration-500 ease-out lg:pr-32",
                sideOnRight
                    ? "border-cyan-500 text-cyan-500"
                    : "border-fuchsia-500 text-fuchsia-500",
                sideOnRight
                    ? "hover:shadow-[0_0_6rem_rgba(6,182,212,.1)]"
                    : "hover:shadow-[0_0_6rem_rgba(217,70,239,.1)]",
            )}>
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
                                    ? "text-cyan-100  decoration-cyan-500"
                                    : "text-fuchsia-100 decoration-fuchsia-500",
                            )}>
                            {paragraph}
                        </div>
                    ))}
                </div>
            </div>
            <div
                style={{
                    maskImage:
                        "radial-gradient(30rem 30rem at bottom right, black 30%,transparent 100%)",
                }}
                className={twJoin(
                    "pattern-cross pattern-bg-dark-gray pattern-size-8 pattern-opacity-10 pointer-events-none absolute inset-0",
                    sideOnRight ? "pattern-cyan-500" : "pattern-fuchsia-500",
                )}
            />
            <div className='absolute bottom-0 right-0 size-28 lg:size-36'>
                <div
                    className={twJoin(
                        "absolute -bottom-[20%] -right-[20%] grid h-full w-full place-content-center rounded-full border text-5xl lg:text-6xl",
                        sideOnRight ? "border-cyan-500" : "border-fuchsia-500",
                        sideOnRight
                            ? "shadow-[0_0_10rem_rgba(6,182,212,.25)]"
                            : "shadow-[0_0_10rem_rgba(217,70,239,.25)]",
                    )}>
                    <topic.icon
                        className={
                            sideOnRight
                                ? "drop-shadow-[0_0_.2rem_rgba(6,182,212,.4)]"
                                : "drop-shadow-[0_0_.2rem_rgba(217,70,239,.4)]"
                        }
                    />
                </div>
            </div>
        </motion.div>
    );
}

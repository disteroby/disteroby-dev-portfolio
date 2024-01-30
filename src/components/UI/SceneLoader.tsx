import { motion } from "framer-motion";

export default function SceneLoader() {
    return (
        <motion.div
            role='status'
            className='flex flex-col items-center justify-center gap-24 text-2xl opacity-0'
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}>
            <div className='relative size-24 animate-spin'>
                {["", "blur-lg", "blur-2xl", "blur-3xl"].map(blurIntensity => (
                    <div
                        key={blurIntensity}
                        className={`absolute inset-0 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 ${blurIntensity}`}
                    />
                ))}
            </div>
            <div className='tracking-wider'>
                <span>Resources loading</span>
                {["0ms", "250ms", "500ms"].map(delay => (
                    <span
                        key={delay}
                        className='animate-pulse'
                        style={{ animationDelay: delay }}>
                        .
                    </span>
                ))}
            </div>
        </motion.div>
    );
}

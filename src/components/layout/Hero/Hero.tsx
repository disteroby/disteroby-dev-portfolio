import { GlowingButton, MutableText } from "../../UI";

function Hero() {
    return (
        <section className="flex h-screen flex-col items-center bg-hero-bg bg-cover bg-center bg-no-repeat pt-32 font-bold uppercase tracking-wide">
            <div className="text-center text-2xl font-light tracking-wider text-white md:text-3xl">
                Hi, I'm
                <br className="inline md:hidden" /> Roberto Di Stefano
            </div>
            <div className="mt-8 text-center text-5xl text-white md:text-8xl">
                I'm a <br className="inline md:hidden" />
                <MutableText words={["mobile", "web", "game"]} time={2000} />
            </div>
            <div className="text-center text-5xl text-white md:text-8xl">
                developer
            </div>
            <GlowingButton text="test" onClick={() => console.log("test")} />
        </section>
    );
}

export default Hero;

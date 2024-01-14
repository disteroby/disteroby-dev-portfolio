import MutableText from "../UI/MutableText/MutableText.tsx";

function Hero() {
    return <section
        className="bg-hero-bg bg-cover bg-center h-screen bg-no-repeat flex flex-col items-center pt-32 uppercase font-bold tracking-wide">
        <div className="text-white text-2xl md:text-3xl text-center font-light tracking-wider">Hi, I'm Roberto Di Stefano</div>
        <div className="text-white text-5xl md:text-8xl text-center mt-8">I'm a <br className="inline md:hidden"/>
            <MutableText words={["mobile", "web", "game"]} time={2000}/>
        </div>
        <div className="text-white text-5xl md:text-8xl text-center">developer</div>
    </section>;
}

export default Hero;
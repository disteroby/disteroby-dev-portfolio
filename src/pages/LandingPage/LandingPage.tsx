import { Suspense } from "react";
import Hero from "../../components/layout/Hero/Hero.tsx";
import HeroCarousel from "../../components/layout/HeroCarousel/HeroCarousel.tsx";

function LandingPage() {
    return (
        <div className='min-h-[200vh]'>
            <Suspense fallback={<div className='bg-red-500'>loading...</div>}>
                <HeroCarousel />
            </Suspense>
            <Hero />
            <div className='bg-gradient-to-b via-50% via-neutral-950/30 from-neutral-950 h-[15rem]'>
                <div className='bg-hero h-full w-full bg-contain'></div>
            </div>
        </div>
    );
}

export default LandingPage;

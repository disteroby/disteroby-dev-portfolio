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
        </div>
    );
}

export default LandingPage;

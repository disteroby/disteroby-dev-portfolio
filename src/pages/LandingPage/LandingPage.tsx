import { Suspense } from "react";
import HeroStage3D from "../../components/layout/HeroStage3D/HeroStage3D.tsx";
import SectionHero from "../../components/layout/sections/SectionHero.tsx";
import SectionProjects from "../../components/layout/sections/SectionProjects.tsx";
import Navbar from "../../components/UI/Navbar.tsx";
import { LinksData } from "../../constants/LinksData.ts";

function LandingPage() {
    return (
        <div className='min-h-[200vh]'>
            <Navbar links={LinksData} initialIdx={1} />
            <HeroStage3D />
            <SectionHero />
            <SectionProjects />
        </div>
    );
}

export default LandingPage;

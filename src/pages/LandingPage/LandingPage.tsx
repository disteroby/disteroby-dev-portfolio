import { createRef, LegacyRef, useRef } from "react";
import HeroStage3D from "../../components/layout/HeroStage3D/HeroStage3D.tsx";
import SectionHero from "../../components/layout/sections/SectionHero.tsx";
import SectionProjects from "../../components/layout/sections/SectionProjects.tsx";
import Navbar from "../../components/UI/Navbar.tsx";
import { carouselDevicesData } from "../../constants/DevicesData.ts";
import { LinksData } from "../../constants/LinksData.ts";
import { SectionRefsContext } from "../../hooks/useSectionRef.ts";

function LandingPage() {
    const heroRef = useRef(null!);
    const projectsRef = useRef(null!);

    const refs = new Map<string, LegacyRef<HTMLElement>>();
    refs.set("hero", heroRef);
    refs.set("projects", projectsRef);
    carouselDevicesData.forEach(device => {
        refs.set(device.href, createRef());
    });

    return (
        <SectionRefsContext.Provider value={refs}>
            <div ref={heroRef} className='min-h-[200vh]'>
                <Navbar links={LinksData} initialIdx={0} />
                <HeroStage3D />
                <SectionHero />
                <SectionProjects ref={projectsRef} />

                {carouselDevicesData.map(data => (
                    <div
                        ref={refs.get(data.href) as LegacyRef<HTMLDivElement>}
                        key={data.href}
                        className='min-h-screen'
                        id={data.href}>
                        {data.href}
                    </div>
                ))}
            </div>
        </SectionRefsContext.Provider>
    );
}

export default LandingPage;

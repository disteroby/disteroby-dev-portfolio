import { createRef, LegacyRef, Suspense, useRef } from "react";
import { useProgress } from "@react-three/drei";
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
        refs.set(device.project, createRef());
    });

    const { active: modelsAreLoading } = useProgress();

    return (
        <Suspense fallback={<div>provaaa</div>}>
            <SectionRefsContext.Provider value={refs}>
                <div ref={heroRef} className='min-h-[200vh]'>
                    <Navbar links={LinksData} initialIdx={0} />
                    <HeroStage3D />
                    <SectionHero pageIsLoaded={!modelsAreLoading} />
                    <SectionProjects ref={projectsRef} />

                    {carouselDevicesData.map(data => (
                        <div
                            ref={
                                refs.get(
                                    data.project,
                                ) as LegacyRef<HTMLDivElement>
                            }
                            key={data.project}
                            className='min-h-screen'
                            id={data.project}>
                            {data.project}
                        </div>
                    ))}
                </div>
            </SectionRefsContext.Provider>
        </Suspense>
    );
}

export default LandingPage;

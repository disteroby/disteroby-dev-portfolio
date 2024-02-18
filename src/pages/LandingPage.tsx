import { createRef, LegacyRef, useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import FragmentBelowHero from "../components/layout/Fragment/FragmentBelowHero.tsx";
import HeroStage3D from "../components/layout/HeroStage3D/HeroStage3D.tsx";
import LandingPageSection from "../components/layout/Section/LandingPageSection.tsx";
import SectionAbout from "../components/layout/Section/SectionAbout.tsx";
import SectionHeroOverlay from "../components/layout/Section/SectionHeroOverlay.tsx";
import SectionProjects from "../components/layout/Section/SectionProjects.tsx";
import SectionSkills from "../components/layout/Section/SectionSkills.tsx";
import Navbar from "../components/UI/Navbar.tsx";
import SceneLoader from "../components/UI/SceneLoader.tsx";
import { PROJECTS } from "../constants/ProjectsData.ts";
import useSceneProgress from "../hooks/useSceneProgress.ts";
import { SectionRefsContext, SectionTag } from "../hooks/useSectionRef.ts";
import { modelPath, texturePath } from "../utils/ResourcesUtils.ts";
import { AnimatePresence } from "framer-motion";
import { twJoin } from "tailwind-merge";

function LandingPage() {
    const heroRef = useRef(null!);
    const projectsRef = useRef(null!);
    const aboutRef = useRef(null!);
    const skillsRef = useRef(null!);
    const contactRef = useRef(null!);

    const refs = new Map<SectionTag, LegacyRef<HTMLElement>>();
    refs.set("overview", heroRef);
    refs.set("projects", projectsRef);
    refs.set("about-me", aboutRef);
    refs.set("skills", skillsRef);
    refs.set("contact", contactRef);
    PROJECTS.forEach(project => {
        refs.set(project.refName, createRef());
    });

    const minTimeout = 500;
    const extraTimeout = 2000;

    const pageIsLoaded = useSceneProgress(minTimeout, extraTimeout) === 100;

    return (
        <SectionRefsContext.Provider value={refs}>
            <div className='relative'>
                <div className='absolute inset-0 top-[170vh] bg-blurry bg-[length:100%_200rem] bg-repeat-y' />
                <div
                    className={twJoin(
                        "relative",
                        pageIsLoaded ? "h-auto" : "h-full overflow-hidden",
                    )}>
                    {pageIsLoaded && <Navbar initialIdx={0} />}
                    <div className='relative h-[100svh] w-full'>
                        <LandingPageSection
                            ref={heroRef}
                            className='pointer-events-none absolute inset-0 z-10 select-none'>
                            <SectionHeroOverlay pageIsLoaded={pageIsLoaded} />
                        </LandingPageSection>
                        <HeroStage3D />
                        <FragmentBelowHero />
                        <AnimatePresence>
                            {!pageIsLoaded && <SceneLoader />}
                        </AnimatePresence>
                    </div>
                </div>
                <div
                    className={twJoin(
                        "relative overflow-hidden",
                        pageIsLoaded ? "h-auto" : "h-0",
                    )}>
                    <LandingPageSection ref={projectsRef}>
                        <SectionProjects />
                    </LandingPageSection>
                    <LandingPageSection ref={aboutRef}>
                        <SectionAbout />
                    </LandingPageSection>
                    <LandingPageSection ref={skillsRef}>
                        <SectionSkills />
                    </LandingPageSection>
                </div>
            </div>
        </SectionRefsContext.Provider>
    );
}

useGLTF.preload(modelPath("laptop"));
useGLTF.preload(modelPath("smartphone"));
PROJECTS.forEach(({ device }) => {
    device.textures.forEach(texture => {
        useTexture.preload(texturePath(texture));
    });
});

export default LandingPage;

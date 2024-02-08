import { createRef, LegacyRef, useRef } from "react";
import FragmentBelowHero from "../components/layout/Fragment/FragmentBelowHero.tsx";
import HeroStage3D from "../components/layout/HeroStage3D/HeroStage3D.tsx";
import Section from "../components/layout/Section/Section.tsx";
import SectionAbout from "../components/layout/Section/SectionAbout.tsx";
import SectionHeroOverlay from "../components/layout/Section/SectionHeroOverlay.tsx";
import SectionProjects from "../components/layout/Section/SectionProjects.tsx";
import Navbar from "../components/UI/Navbar.tsx";
import SceneLoader from "../components/UI/SceneLoader.tsx";
import { carouselDevicesData } from "../constants/DevicesData.ts";
import { LinksData } from "../constants/LinksData.ts";
import useSceneProgress from "../hooks/useSceneProgress.ts";
import { SectionRefsContext, SectionTag } from "../hooks/useSectionRef.ts";
import { opacityVariants } from "../utils/FramerMotionUtils.ts";
import { AnimatePresence, motion } from "framer-motion";
import { twJoin } from "tailwind-merge";

function LandingPage() {
    const heroRef = useRef(null!);
    const projectsRef = useRef(null!);
    const aboutRef = useRef(null!);
    const contactRef = useRef(null!);

    const refs = new Map<SectionTag | string, LegacyRef<HTMLElement>>();
    refs.set("overview", heroRef);
    refs.set("projects", projectsRef);
    refs.set("about", aboutRef);
    refs.set("contact", contactRef);
    carouselDevicesData.forEach(device => {
        refs.set(device.project, createRef());
    });

    const pageIsLoaded = useSceneProgress(2000, 1000) === 100;

    return (
        <SectionRefsContext.Provider value={refs}>
            <div
                className={twJoin(
                    "relative",
                    pageIsLoaded ? "h-auto" : "h-screen overflow-hidden",
                )}>
                {pageIsLoaded && <Navbar links={LinksData} initialIdx={0} />}

                <div className='relative h-screen w-full'>
                    <Section
                        ref={heroRef}
                        className='pointer-events-none absolute inset-0 z-10 select-none'>
                        <SectionHeroOverlay pageIsLoaded={pageIsLoaded} />
                    </Section>
                    <HeroStage3D />
                    <FragmentBelowHero />
                    <AnimatePresence>
                        {!pageIsLoaded && (
                            <motion.div
                                style={{
                                    scrollbarGutter: "stable both-edges",
                                }}
                                className='absolute left-0 top-0 z-[999] flex h-screen w-screen flex-col items-center justify-center bg-dark-gray'
                                variants={opacityVariants}
                                transition={{ duration: 1 }}
                                animate='visible'
                                exit='invisible'>
                                <SceneLoader />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
            <div
                className={twJoin(
                    "relative overflow-hidden",
                    pageIsLoaded ? "h-auto" : "h-0",
                )}>
                <Section ref={projectsRef}>
                    <SectionProjects />
                </Section>
                <Section ref={aboutRef}>
                    <SectionAbout />
                </Section>
            </div>
        </SectionRefsContext.Provider>
    );
}

export default LandingPage;

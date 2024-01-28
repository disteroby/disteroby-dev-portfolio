import { createRef, LegacyRef, useDeferredValue, useRef } from "react";
import HeroStage3D from "../../components/layout/HeroStage3D/HeroStage3D.tsx";
import SectionHero from "../../components/layout/Sections/SectionHero.tsx";
import SectionProjects from "../../components/layout/Sections/SectionProjects.tsx";
import Navbar from "../../components/UI/Navbar.tsx";
import SceneLoader from "../../components/UI/SceneLoader.tsx";
import { carouselDevicesData } from "../../constants/DevicesData.ts";
import { LinksData } from "../../constants/LinksData.ts";
import useSceneProgress from "../../hooks/useSceneProgress.ts";
import { SectionRefsContext } from "../../hooks/useSectionRef.ts";
import { opacityVariants } from "../../utils/framerMotionUtils.ts";
import { AnimatePresence, motion } from "framer-motion";

function LandingPage() {
    const heroRef = useRef(null!);
    const projectsRef = useRef(null!);

    const refs = new Map<string, LegacyRef<HTMLElement>>();
    refs.set("hero", heroRef);
    refs.set("projects", projectsRef);
    carouselDevicesData.forEach(device => {
        refs.set(device.project, createRef());
    });

    const pageIsLoaded = useDeferredValue(useSceneProgress(2000));

    return (
        <SectionRefsContext.Provider value={refs}>
            <div ref={heroRef} className='min-h-screen relative'>
                {pageIsLoaded && <Navbar links={LinksData} initialIdx={0} />}

                <div className='relative h-screen w-full'>
                    <HeroStage3D />
                    <AnimatePresence>
                        {!pageIsLoaded && (
                            <motion.div
                                className='inset-0 bg-dark-gray absolute flex flex-col justify-center items-center'
                                variants={opacityVariants}
                                transition={{ duration: 1 }}
                                animate={"visible"}
                                exit={"invisible"}>
                                <SceneLoader />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
                <SectionHero pageIsLoaded={pageIsLoaded} />
            </div>
            {pageIsLoaded && (
                <>
                    <SectionProjects ref={projectsRef} />
                </>
            )}
        </SectionRefsContext.Provider>
    );
}

export default LandingPage;

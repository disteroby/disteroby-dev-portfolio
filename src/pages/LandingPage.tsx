import {
    createRef,
    LegacyRef,
    MutableRefObject,
    RefObject,
    useRef,
    useState,
} from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import FragmentBelowHero from "../components/layout/Fragment/FragmentBelowHero.tsx";
import HeroStage3D from "../components/layout/HeroStage3D/HeroStage3D.tsx";
import LandingPageSection from "../components/layout/Section/LandingPageSection.tsx";
import SectionAbout from "../components/layout/Section/SectionAbout.tsx";
import SectionContacts from "../components/layout/Section/SectionContacts.tsx";
import SectionHeroOverlay from "../components/layout/Section/SectionHeroOverlay.tsx";
import SectionProjects from "../components/layout/Section/SectionProjects.tsx";
import SectionSkills from "../components/layout/Section/SectionSkills.tsx";
import Navbar from "../components/UI/Navbar.tsx";
import SceneLoader from "../components/UI/SceneLoader.tsx";
import { PROJECTS } from "../constants/ProjectsData.ts";
import useSceneProgress from "../hooks/useSceneProgress.ts";
import {
    MainSectionTag,
    SectionRefsContext,
    SectionTag,
} from "../hooks/useSectionRef.ts";
import { modelPath, texturePath } from "../utils/ResourcesUtils.ts";
import { AnimatePresence } from "framer-motion";
import { twJoin } from "tailwind-merge";

type SectionData = {
    tag: MainSectionTag;
    ref: MutableRefObject<never>;
    jsx: JSX.Element;
};

function LandingPage() {
    const pageIsLoaded = useSceneProgress(100, 1000) === 100;
    //TODO Change 1000 with 5000

    const heroRef = useRef(null!);
    const projectsRef = useRef(null!);
    const aboutRef = useRef(null!);
    const skillsRef = useRef(null!);
    const contactRef = useRef(null!);

    const sections: SectionData[] = [
        {
            tag: "overview",
            ref: heroRef,
            jsx: <SectionHeroOverlay pageIsLoaded={pageIsLoaded} />,
        },
        {
            tag: "projects",
            ref: projectsRef,
            jsx: <SectionProjects />,
        },
        {
            tag: "about-me",
            ref: aboutRef,
            jsx: <SectionAbout />,
        },
        {
            tag: "skills",
            ref: skillsRef,
            jsx: <SectionSkills />,
        },
        {
            tag: "contact",
            ref: contactRef,
            jsx: <SectionContacts />,
        },
    ];

    const tags: SectionTag[] = sections.map(section => section.tag);

    const [activeIdxs, setActiveIdxs] = useState(tags.map(() => false));

    const refs = new Map<SectionTag, LegacyRef<HTMLElement>>();
    sections.forEach(section => {
        refs.set(section.tag, section.ref);
    });
    PROJECTS.forEach(project => {
        refs.set(project.refName, createRef());
    });

    function onItemClick(idx: number) {
        const selectedRef = refs.get(tags[idx]) as RefObject<HTMLElement>;
        selectedRef.current?.scrollIntoView({ inline: "start" });
    }

    function onView(tag: SectionTag, isInView: boolean) {
        const idx = tags.indexOf(tag);
        setActiveIdxs(oldArray => {
            const newArray = [...oldArray];
            newArray[idx] = isInView;
            return newArray;
        });
    }

    const currentSectionIdx = activeIdxs.findIndex(visible => visible);

    return (
        <SectionRefsContext.Provider value={refs}>
            <div className='relative'>
                <div className='absolute inset-0 top-[150vh] bg-blurry bg-[length:100%_200rem] bg-repeat-y' />
                <div
                    className={twJoin(
                        "relative",
                        pageIsLoaded ? "h-auto" : "h-full overflow-hidden",
                    )}>
                    {pageIsLoaded && (
                        <Navbar
                            activeIdx={currentSectionIdx}
                            onItemClick={onItemClick}
                        />
                    )}
                    <div className='relative h-[100svh] w-full'>
                        <LandingPageSection
                            ref={sections[0].ref}
                            tag={sections[0].tag}
                            onInView={onView}
                            className='pointer-events-none absolute inset-0 z-10 select-none'>
                            {sections[0].jsx}
                        </LandingPageSection>
                        <HeroStage3D inView={pageIsLoaded} />
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
                    {sections
                        .filter(sections => sections.tag !== "overview")
                        .map(({ tag, jsx, ref }) => (
                            <LandingPageSection
                                key={tag}
                                ref={ref}
                                tag={tag}
                                onInView={onView}>
                                {jsx}
                            </LandingPageSection>
                        ))}
                </div>
            </div>
        </SectionRefsContext.Provider>
    );
}

useGLTF.preload(modelPath("laptop"));
useGLTF.preload(modelPath("smartphone"));
PROJECTS.forEach(({ device }) => {
    useTexture.preload(texturePath(device.texture));
});

export default LandingPage;

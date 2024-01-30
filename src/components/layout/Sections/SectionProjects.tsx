import { forwardRef, LegacyRef } from "react";
import { carouselDevicesData } from "../../../constants/DevicesData.ts";
import { useSectionRefs } from "../../../hooks/useSectionRef.ts";
import HardSkill from "../../UI/HardSkill.tsx";
import UnderHero from "../HeroStage3D/UnderHero.tsx";
import { BiLogoSpringBoot } from "react-icons/bi";

const SectionProjects = forwardRef(
    (_props: unknown, ref: LegacyRef<HTMLElement>) => {
        const refs = useSectionRefs();

        return (
            <section ref={ref}>
                <UnderHero />

                {carouselDevicesData.map(data => (
                    <div
                        ref={
                            refs.get(data.project) as LegacyRef<HTMLDivElement>
                        }
                        key={data.project}
                        className='min-h-screen'
                        id={data.project}>
                        {data.project}
                        <div className='grid min-h-screen w-full place-items-center bg-red-500'>
                            <HardSkill className=''>
                                <BiLogoSpringBoot />
                            </HardSkill>
                        </div>
                    </div>
                ))}
            </section>
        );
    },
);

export default SectionProjects;

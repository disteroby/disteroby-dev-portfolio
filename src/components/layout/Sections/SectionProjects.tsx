import { forwardRef, LegacyRef } from "react";
import { carouselDevicesData } from "../../../constants/DevicesData.ts";
import { useSectionRefs } from "../../../hooks/useSectionRef.ts";
import UnderHero from "../HeroStage3D/UnderHero.tsx";

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
                    </div>
                ))}
            </section>
        );
    },
);

export default SectionProjects;

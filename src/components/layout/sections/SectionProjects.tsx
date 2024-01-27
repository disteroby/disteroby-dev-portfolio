import { forwardRef, LegacyRef } from "react";
import UnderHero from "../HeroStage3D/UnderHero.tsx";

const SectionProjects = forwardRef(
    (_props: unknown, ref: LegacyRef<HTMLElement>) => {
        return (
            <section ref={ref}>
                <UnderHero />
            </section>
        );
    },
);

export default SectionProjects;

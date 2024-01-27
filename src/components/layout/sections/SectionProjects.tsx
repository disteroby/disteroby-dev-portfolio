import { forwardRef, LegacyRef, useEffect } from "react";
import UnderHero from "../HeroStage3D/UnderHero.tsx";

const SectionProjects = forwardRef(
    (_props: unknown, ref: LegacyRef<HTMLElement>) => {
        useEffect(() => {
            console.log(ref);
        }, [ref]);

        return (
            <section ref={ref}>
                <UnderHero />
            </section>
        );
    },
);

export default SectionProjects;

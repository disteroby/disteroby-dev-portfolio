import { carouselDevicesData } from "../../../constants/DevicesData.ts";
import UnderHero from "../HeroStage3D/UnderHero.tsx";

export default function SectionProjects() {
    return (
        <section>
            <UnderHero />
            {carouselDevicesData.map(data => (
                <div key={data.href} className='min-h-screen' id={data.href}>
                    {data.href}
                </div>
            ))}
        </section>
    );
}

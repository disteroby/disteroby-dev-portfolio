import { PerspectiveCamera } from "@react-three/drei";
import EarthModel from "../../model3D/EarthModel.tsx";
import PerformanceCanvas from "../../model3D/PerformanceCanvas.tsx";
import SectionTitle from "../../UI/SectionTitle.tsx";

export default function SectionContacts() {
    return (
        <div className='flex min-h-screen flex-col items-center'>
            <SectionTitle title='Contacts Me' />
            <div className='aspect-square w-full max-w-[100rem] hover:select-none'>
                <PerformanceCanvas
                    gl={{ sortObjects: false }}
                    id='canvas-earth'
                    className='h-full w-full hover:select-none'>
                    <PerspectiveCamera
                        makeDefault
                        fov={90}
                        position={[0, 0, 5]}
                        zoom={4}
                    />
                    {/*<directionalLight intensity={0.8} position={[3, 3, 3]} />*/}
                    {/*<ambientLight intensity={0.2} />*/}
                    <EarthModel />
                </PerformanceCanvas>
            </div>
        </div>
    );
}

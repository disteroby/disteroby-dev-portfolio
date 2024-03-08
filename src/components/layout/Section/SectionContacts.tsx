import { PerspectiveCamera } from "@react-three/drei";
import EarthModel from "../../model3D/EarthModel.tsx";
import PerformanceCanvas from "../../model3D/PerformanceCanvas.tsx";
import SectionTitle from "../../UI/SectionTitle.tsx";

export default function SectionContacts() {
    return (
        <div className='flex min-h-screen flex-col items-center'>
            <SectionTitle title='Contacts Me' />
            <div className='flex w-full flex-col items-stretch bg-green-600/20 lg:flex-row'>
                <div className='aspect-square bg-blue-600/20 hover:select-none lg:w-2/3'>
                    <PerformanceCanvas
                        gl={{ sortObjects: false }}
                        id='canvas-earth'
                        className='h-auto w-full hover:select-none'>
                        <PerspectiveCamera
                            makeDefault
                            fov={90}
                            position={[0, 0, 4.5]}
                            zoom={4}
                        />
                        <EarthModel />
                    </PerformanceCanvas>
                </div>
                <div className='flex flex-col justify-center bg-red-600/20 p-8 lg:w-1/3'>
                    <div>vdsa</div>
                    <div>vdsa</div>
                    <div>vdsa</div>
                    <div>vdsa</div>
                </div>
            </div>
        </div>
    );
}

import { PerspectiveCamera } from "@react-three/drei";
import EarthModel from "../../model3D/EarthModel.tsx";
import PerformanceCanvas from "../../model3D/PerformanceCanvas.tsx";
import RoundInput from "../../UI/RoundInput/RoundInput.tsx";
import SectionTitle from "../../UI/SectionTitle.tsx";
import { MdMail } from "react-icons/md";
import { TbMessageCircle2Filled } from "react-icons/tb";

export default function SectionContacts() {
    return (
        <div className='flex min-h-screen flex-col items-center'>
            <SectionTitle title='Contacts Me' />
            <div className='flex w-full flex-col items-stretch border border-green-600/20 lg:flex-row'>
                <div className='aspect-square bg-blue-600/20 hover:select-none lg:w-2/3'>
                    <PerformanceCanvas
                        // gl={{ sortObjects: false }} //TODO Is useful?
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
                <div className='flex flex-col justify-center gap-8 p-8 lg:w-1/3'>
                    <RoundInput
                        label='Your Mail'
                        icon={<MdMail />}
                        placeholder='your.name@your.mail.com'
                        autocompleted='email'
                    />
                    <RoundInput
                        label='Your Message'
                        icon={<TbMessageCircle2Filled />}
                        placeholder='Write me a message...'
                    />
                </div>
            </div>
        </div>
    );
}

import HeroDevicesOnLaptop from "./HeroDevicesOnLaptop.tsx";
import HeroDevicesOnSmartphone from "./HeroDevicesOnSmartphone.tsx";
import { isMobileOnly } from "react-device-detect";

type HeroDevicesProps = {
    inView: boolean;
};
export default function HeroDevices({ inView }: HeroDevicesProps) {
    return isMobileOnly ? (
        <HeroDevicesOnSmartphone inView={inView} />
    ) : (
        <HeroDevicesOnLaptop inView={inView} />
    );
}

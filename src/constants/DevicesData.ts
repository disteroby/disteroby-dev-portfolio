export type IDevicesData = {
    texture: string;
    href: string;
} & (LaptopData | SmartphoneData);

type LaptopData = {
    type: "laptop";
};

type SmartphoneData = {
    type: "smartphone";
    deviceOrientation: "portrait" | "landscape";
};

export const carouselDevicesData: IDevicesData[] = [
    {
        type: "smartphone",
        deviceOrientation: "portrait",
        texture: "texture_codehunter_0.png", //TODO
        href: "motivapp",
    },
    {
        type: "smartphone",
        deviceOrientation: "portrait",
        texture: "texture_codehunter_0.png", //TODO
        href: "my-smart-opinion",
    },
    {
        type: "smartphone",
        deviceOrientation: "landscape",
        texture: "texture_codehunter_0.png", //TODO
        href: "slide-run",
    },
    {
        type: "smartphone",
        deviceOrientation: "portrait",
        texture: "texture_codehunter_0.png", //TODO
        href: "mind-blooming",
    },
    {
        type: "laptop",
        texture: "texture_unimiibo_0.png",
        href: "unimiibo",
    },
    {
        type: "laptop",
        texture: "texture_codehunter_0.png",
        href: "code-hunter",
    },
    {
        type: "laptop",
        texture: "texture_undertale3d_0.png",
        href: "undertale3d",
    },
];

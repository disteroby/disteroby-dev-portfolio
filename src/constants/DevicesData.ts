export type DeviceType = "laptop" | "smartphone";
export type DevicesData = {
    project: string;
    texture: string;
    type: DeviceType;
} & (LaptopData | SmartphoneData);

type LaptopData = {
    type: "laptop";
};

type SmartphoneData = {
    type: "smartphone";
    deviceOrientation: "portrait" | "landscape";
};

export const carouselDevicesData: DevicesData[] = [
    {
        project: "motivapp",
        texture: "texture_codehunter_0.webp", //TODO
        type: "smartphone",
        deviceOrientation: "portrait",
    },
    {
        project: "my-smart-opinion",
        texture: "texture_codehunter_0.webp", //TODO
        type: "smartphone",
        deviceOrientation: "portrait",
    },
    {
        project: "slide-run",
        texture: "texture_codehunter_0.webp", //TODO
        type: "smartphone",
        deviceOrientation: "landscape",
    },
    {
        project: "mind-blooming",
        texture: "texture_codehunter_0.webp", //TODO
        type: "smartphone",
        deviceOrientation: "portrait",
    },
    {
        project: "unimiibo",
        texture: "texture_unimiibo_0.webp",
        type: "laptop",
    },
    {
        project: "code-hunter",
        texture: "texture_codehunter_0.webp",
        type: "laptop",
    },
    {
        project: "undertale3d",
        texture: "texture_undertale3d_0.webp",
        type: "laptop",
    },
];

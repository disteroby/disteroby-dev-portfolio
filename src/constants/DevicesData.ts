export type IDevicesData = {
    type: "laptop" | "smartphone";
    deviceOrientation: "portrait" | "lanscape";
    texture: string;
    href: string;
};

export const carouselDevicesData: IDevicesData[] = [
    {
        type: "smartphone",
        deviceOrientation: "portrait",
        texture: "texture_codehunter_0.png", //TODO
        href: "#motivapp",
    },
    {
        type: "smartphone",
        deviceOrientation: "portrait",
        texture: "texture_codehunter_0.png", //TODO
        href: "#my-smart-opinion",
    },
    {
        type: "smartphone",
        deviceOrientation: "lanscape",
        texture: "texture_codehunter_0.png", //TODO
        href: "#slide-run",
    },
    {
        type: "smartphone",
        deviceOrientation: "portrait",
        texture: "texture_codehunter_0.png", //TODO
        href: "#mind-blooming",
    },
    {
        type: "laptop",
        deviceOrientation: "portrait",
        texture: "texture_unimiibo_0.png",
        href: "#unimiibo",
    },
    {
        type: "laptop",
        deviceOrientation: "portrait",
        texture: "texture_codehunter_0.png",
        href: "#code-hunter",
    },
    {
        type: "laptop",
        deviceOrientation: "portrait",
        texture: "texture_undertale3d_0.png",
        href: "#undertale3d",
    },
];

export type ProjectId =
    | "motivapp"
    | "my-smart-opinion"
    | "slide-run"
    | "mind-blooming"
    | "unimiibo"
    | "code-hunter"
    | "undertale-3d";

export type CtaType = "product" | "repository" | "store" | "video";

export type Cta = {
    type: CtaType;
    text: string;
    href: string;
};

export type DeviceType = "laptop" | "smartphone";

type LaptopData = {
    type: "laptop";
};

type SmartphoneData = {
    type: "smartphone";
    deviceOrientation: "portrait" | "landscape";
};

export type DeviceData = {
    mainTextureIndex: number;
    textures: string[];
    type: DeviceType;
} & (LaptopData | SmartphoneData);

export type ProjectData = {
    refName: ProjectId;
    title: string;
    isTeam: boolean;
    description: string[];
    tags?: string[];
    cta?: Cta[];
    device: DeviceData;
};

export const PROJECTS: ProjectData[] = [
    {
        refName: "motivapp",
        title: "MotivApp",
        isTeam: false,
        description: ["//TODO"],
        tags: ["android", "first-project"],
        cta: [
            {
                text: "Go to Play Store",
                type: "store",
                href: "https://play.google.com/store/apps/details?id=distefano.roberto.motivapp",
            },
            {
                text: "Promotional Video",
                type: "video",
                href: "https://www.youtube.com/watch?v=iI5p9j6cgUk",
            },
        ],
        device: {
            type: "smartphone",
            deviceOrientation: "portrait",
            mainTextureIndex: 0,
            textures: ["texture_codehunter_0.webp"],
        },
    },
    {
        refName: "my-smart-opinion",
        title: "My Smart Opinion",
        isTeam: true,
        description: ["//TODO"],
        tags: ["android", "real-world-project"],
        device: {
            type: "smartphone",
            deviceOrientation: "portrait",
            mainTextureIndex: 0,
            textures: ["texture_codehunter_0.webp"],
        },
    },
    {
        refName: "slide-run",
        title: "Slide Run",
        isTeam: false,
        description: ["//TODO"],
        tags: ["unity"],
        device: {
            type: "smartphone",
            deviceOrientation: "landscape",
            mainTextureIndex: 0,
            textures: ["texture_codehunter_0.webp"],
        },
    },
    {
        refName: "mind-blooming",
        title: "Mind Blooming",
        isTeam: false,
        description: ["//TODO"],
        tags: ["flutter", "university-project", "bachelor-thesis"],
        device: {
            type: "smartphone",
            deviceOrientation: "portrait",
            mainTextureIndex: 0,
            textures: ["texture_codehunter_0.webp"],
        },
    },
    {
        refName: "unimiibo",
        title: "Unimiibo",
        isTeam: false,
        description: ["//TODO"],
        tags: ["react", "university-project"],
        cta: [
            {
                text: "Visit the WebSite",
                type: "product",
                href: "https://disteroby.github.io/unimiibo/",
            },
            {
                text: "See the Source Code",
                type: "repository",
                href: "https://github.com/disteroby/unimiibo",
            },
        ],
        device: {
            type: "laptop",
            mainTextureIndex: 0,
            textures: ["texture_codehunter_0.webp"],
        },
    },
    {
        refName: "code-hunter",
        title: "Code:Hunter",
        isTeam: true,
        description: ["//TODO"],
        tags: ["react", "spring-boot", "university-project"],
        device: {
            type: "laptop",
            mainTextureIndex: 0,
            textures: ["texture_codehunter_0.webp"],
        },
    },
    {
        refName: "undertale-3d",
        title: "Undertale 3D",
        isTeam: false,
        description: ["//TODO"],
        tags: ["unreal-engine-5"],
        cta: [
            {
                text: "Promotional Video",
                type: "video",
                href: "https://www.youtube.com/watch?v=noz2mGBLV-4",
            },
        ],
        device: {
            type: "laptop",
            mainTextureIndex: 0,
            textures: ["texture_codehunter_0.webp"],
        },
    },
];

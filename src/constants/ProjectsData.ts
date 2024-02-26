export type ProjectTag =
    | "motivapp"
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
    refName: ProjectTag;
    title: string;
    isTeam: boolean;
    description: string[];
    tags?: string[];
    cta?: Cta[];
    device: DeviceData;
};

const lorem =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque esse est in, nulla provident ullam!, consectetur adipisicing elit. Atque esse est in, nulla provident ullam!";

export const PROJECTS: ProjectData[] = [
    {
        refName: "motivapp",
        title: "MotivApp",
        isTeam: false,
        description: [lorem, lorem, lorem, lorem],
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
            textures: ["texture_codehunter_0.webp"], //TODO
        },
    },
    {
        refName: "slide-run",
        title: "Slide Run",
        isTeam: false,
        description: [lorem, lorem, lorem, lorem],
        tags: ["unity"],
        device: {
            type: "smartphone",
            deviceOrientation: "landscape",
            mainTextureIndex: 0,
            textures: ["texture_codehunter_0.webp"], //TODO
        },
    },
    {
        refName: "mind-blooming",
        title: "Mind Blooming",
        isTeam: false,
        description: [lorem, lorem, lorem, lorem],
        tags: ["flutter", "university-project", "bachelor-thesis"],
        device: {
            type: "smartphone",
            deviceOrientation: "portrait",
            mainTextureIndex: 0,
            textures: ["texture_codehunter_0.webp"], //TODO
        },
    },
    {
        refName: "unimiibo",
        title: "Unimiibo",
        isTeam: false,
        description: [lorem, lorem, lorem, lorem],
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
            textures: ["texture_unimiibo_0.webp"],
        },
    },
    {
        refName: "code-hunter",
        title: "Code:Hunter",
        isTeam: true,
        description: [lorem, lorem, lorem, lorem],
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
        description: [lorem, lorem, lorem, lorem],
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
            textures: ["texture_undertale3d_0.webp"],
        },
    },
];

/**
 * Represents a tag for a project.
 */
export type ProjectTag =
    | "motivapp"
    | "slide-run"
    | "mind-blooming"
    | "unimiibo"
    | "code-hunter"
    | "undertale-3d";

/**
 * Represents the type of call-to-action (CTA).
 */
export type CtaType = "product" | "repository" | "store" | "video";

/**
 * Represents a call-to-action (CTA) item.
 */
export type Cta = {
    type: CtaType;
    text: string;
    href: string;
};

/**
 * Represents the type of device used in a project.
 */
export type DeviceType = "laptop" | "smartphone";

/**
 * Represents data specific to a laptop.
 */
export type LaptopData = {
    type: "laptop";
};

/**
 * Represents data specific to a smartphone.
 */
export type SmartphoneData = {
    type: "smartphone";
    deviceOrientation: "portrait" | "landscape";
};

/**
 * Represents data about the device used in a project.
 */
export type DeviceData = {
    type: DeviceType;
    texture: string;
    textureCount: number;
} & (LaptopData | SmartphoneData);

/**
 * Represents data about a project.
 */
export type ProjectData = {
    refName: ProjectTag;
    title: string;
    isTeam: boolean;
    description: string[];
    tags?: string[];
    cta?: Cta[];
    device: DeviceData;
};

/**
 * Complete list of Project data.
 */
export const PROJECTS: ProjectData[] = [
    {
        refName: "motivapp",
        title: "MotivApp",
        isTeam: false,
        description: [
            "Introducing MotivApp, a project that revolutionizes personal development!",
            "MotivApp stands as a testament to innovation, designed to empower individuals in their journey towards self-improvement. It serves as a comprehensive application aimed at helping users stay committed to their goals and aspirations.",
            "Whether it's quitting smoking, enhancing academic performance, hitting the gym regularly, saving money, or managing weight, MotivApp offers a diverse array of tools tailored to meet diverse needs. It embodies a fusion of technology and motivation, providing users with the support they need to turn aspirations into achievements.",
            "Available on the Android Play Store, MotivApp has garnered widespread acclaim, marked by an array of positive reviews and testimonials. With its intuitive interface and robust feature set, MotivApp emerges as a reliable companion on the path to personal growth and success. Experience the power of motivation at your fingertips with MotivApp.",
        ],
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
            textureCount: 3,
            texture: "texture_motivapp.jpg",
        },
    },
    {
        refName: "slide-run",
        title: "Slide Run",
        isTeam: false,
        description: [
            "Introducing Slide Run, the ultimate arcade adventure for your smartphone. Embark on an endless race where the goal is to navigate through a labyrinth of walls with lightning-fast reflexes.",
            "Engage in exhilarating competition with friends and rivals worldwide through the online leaderboard. See who reigns supreme, dominating the global ranks with unparalleled skill and precision.",
            "With over 15 captivating skins available, Slide Run offers customization options to personalize your marble. From sleek classics to rare finds, each skin is meticulously crafted to suit your style. Collect coins as you dash through the game to unlock a treasure trove of skins, elevating your marble to legendary status.",
            "Are you ready to seize the legendary marble and conquer the labyrinth? Slide into action and test your mettle with Slide Run!",
        ],
        tags: ["unity", "arcade-game"],
        cta: [
            {
                text: "Gameplay Video",
                type: "video",
                href: "https://youtu.be/yORUsGCqQpw",
            },
        ],
        device: {
            type: "smartphone",
            deviceOrientation: "landscape",
            textureCount: 3,
            texture: "texture_slide-run.jpg",
        },
    },
    {
        refName: "mind-blooming",
        title: "Mind Blooming",
        isTeam: false,
        description: [
            "Enter the realm of mental wellness with Mind Blooming,  an innovative initiative from the University of Milano-Bicocca's Psychology and Computer Science departments, aims to democratize access to psychological support",
            "Mind Blooming heralds a new era in mental health care by offering remote pathways for the treatment of various psychological disorders. Designed to combat afflictions such as anxiety, depression, burnout, psychosomatic disorders, sleep disturbances, and self-destructive thoughts, the application serves as a beacon of hope for those in need.",
            "Upon launch, users begin with a thorough questionnaire to identify prevalent psychological disorders. Week by week, Mind Blooming provides personalized lessons and exercises to empower users in reclaiming mental well-being.",
            "This visionary project, the focus of my bachelor thesis, exemplifies the intersection of psychology and technology, reshaping the landscape of mental health care for generations to come.",
        ],
        tags: ["flutter", "university-project", "bachelor-thesis"],
        device: {
            type: "smartphone",
            deviceOrientation: "portrait",
            textureCount: 3,
            texture: "texture_mind-blooming.jpg",
        },
    },
    {
        refName: "unimiibo",
        title: "Unimiibo",
        isTeam: false,
        description: [
            "Welcome to Unimiibo, your ultimate destination for discovering Nintendo's expansive collection of character figurines, known as Amiibo. These statuettes represent not only characters from Nintendo's iconic video games but also a variety of other franchises. Each figurine comes equipped with special NFC tags that unlock exclusive in-game bonuses when activated near Nintendo consoles.",
            'Derived from the fusion of "Unimib" - the abbreviation for the University of Milano-Bicocca - and "Amiibo", Unimiibo represents a harmonious blend of academia and gaming culture. Dive into a treasure trove of iconic characters and discover the magic of Amiibo through my user-friendly platform.',
            "Unimiibo goes beyond mere cataloging; it embodies transparency and accessibility. As an open-source project, its codebase is readily available on my GitHub profile. Explore the intersection of innovation and accessibility with me, only at Unimiibo!",
        ],
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
            textureCount: 3,
            texture: "texture_unimiibo.jpg",
        },
    },
    {
        refName: "code-hunter",
        title: "Code:Hunter",
        isTeam: true,
        description: [
            "Enter Code:Hunter, your go-to web platform for tackling an array of coding challenges.",
            "Inspired by services like LeetCode, this platform equips developers with the tools to prepare for even the most demanding tech interviews, featuring a curated collection of challenges drawn directly from interviews at top tech companies, including FAANG.",
            "Code:Hunter is more than just a ordinary project; it's a collaborative academic endeavor taken on by a group of students. Designed to foster teamwork and proficiency in handling complex projects, we adhere to agile methodologies, particularly Scrum, while also prioritizing Test-Driven Development and DevOps practices.",
            "With Code:Hunter, developers gain invaluable experience in navigating real-world coding scenarios, honing their skills, and mastering the art of problem-solving. Join us on this journey of growth and learning, where challenges become opportunities and teamwork reigns supreme.",
        ],
        tags: ["react", "spring-boot", "university-project"],
        device: {
            type: "laptop",
            textureCount: 3,
            texture: "texture_codehunter.jpg",
        },
    },
    {
        refName: "undertale-3d",
        title: "Undertale 3D",
        isTeam: false,
        description: [
            "Undertale 3D is a video game prototype aimed at recreating the beloved battles we've come to cherish in Undertale, the game born from the brilliant mind of Toby Fox and hailed as a massive success worldwide.",
            "Departing from the 'pixel-art' style of the original product and leveraging the full potential of Unreal Engine 5, this prototype faithfully recreates one of the most iconic battles: the showdown against Undine The Undying.",
            "Set to the magnificent OST 'Battle against a true hero', confront Undyne in a battle of wits and skill. Will you emerge victorious?",
            "With Undertale 3D, the excitement and intensity of battles come to life in a whole new dimension, offering players an immersive and thrilling experience. Prepare to challenge fate and discover if you have the courage and determination to prevail.",
        ],
        tags: ["unreal-engine-5"],
        cta: [
            {
                text: "Gameplay Video",
                type: "video",
                href: "https://www.youtube.com/watch?v=noz2mGBLV-4",
            },
        ],
        device: {
            type: "laptop",
            textureCount: 3,
            texture: "texture_undertale3d.jpg",
        },
    },
];

import {
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    vuejs,
    quasar,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    velo,
    OMDB,
    MoneyApp,
    tripguide,
    threejs,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Content Creator",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: 'Vue JS',
        icon: vuejs,
    },
    {
        name: 'Quasar',
        icon: quasar,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    }
];

const experiences = [
    {
        title: "Full-Stack Developer",
        company_name: "Velo",
        icon: velo,
        iconBg: "#383E56",
        date: "2024",
        points: [
            "Building front-end components to improve the functionality and interactivity of the app using Vue.js and Quasar while utilizing external tools such as Pinia To optimize the development process.",
            "Translating design guidelines and layout into functional tasks, adhering to planned requirements.",
            "Creating new features and enhancing the user interface for a seamless shopping experience.",
            "Collaborating on Git to streamline version control and code integration.",
            "Ensuring accurate and efficient data management by optimizing data feed into tables.",
            "Integrating built features into the website, improving the overall product. ",
            "Mastering a new programming language and Quasar framework quickly to deliver effective solutions.",
            "Liaising with the team manager and product manager to align technical tasks with business goals.",
            "Utilizing AI tools for efficient problem-solving and optimizing development processes"
        ],
    }
];

const projects = [
    {
        name: "OMBD - movie search",
        description: "An online application that allows users to search for movies and obtain information and descriptions about them. The app is connected to the OMDb API.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "bootstrap",
                color: "pink-text-gradient",
            },
        ],
        image: OMDB,
        source_code_link: "https://sielcoh.github.io/OMDB-vod/",
    },
    {
        name: "Money App",
        description:
            "In this app, we can add income & expense entries by entering a name and an amount. Income entries are in green & expense entries are in red.",
        tags: [
            {
                name: "Vue",
                color: "blue-text-gradient",
            },
            {
                name: "Quasar",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: MoneyApp,
        source_code_link: "https://sielcoh.github.io/MoneyApp/#/",
    },
    {
        name: "Trip Guide",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, projects };
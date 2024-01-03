import { technicalSkills } from "./skills";
import PortfolioImage from "../../public/Portfolio.webp";
import TechzyImage from "../../public/Techzy.webp";
import CourseHubImage from "../../public/CourseHub.webp";
import PhoneBookImage from "../../public/PhoneBook.webp";
import SocialApeImage from "../../public/SocialApe.webp";
import NotePadImage from "../../public/NotePad.webp";

export const projects = [
    {
        title: "Personal Portfolio",
        link: "https://github.com/lakshjadhwanilj/my-portfolio",
        image: PortfolioImage,
        description: 'My personal portfolio—journey through my projects and skills with an engaging design showcasing my professional capabilities.',
        skills: [
            technicalSkills.nextjs,
            technicalSkills.reactjs,
            technicalSkills.tailwindcss,
            technicalSkills.javascript,
            technicalSkills.html,
            technicalSkills.css,
            technicalSkills.git,
            technicalSkills.netlify
        ],
    },
    {
        title: "Techzy",
        link: "https://github.com/lakshjadhwanilj/Techzy",
        image: TechzyImage,
        description: 'An intuitive online shopping platform with secure authentication, seamless payment integration, and collaborative efficiency.',
        skills: [
            technicalSkills.angular,
            technicalSkills.typescript,
            technicalSkills.java,
            technicalSkills.springboot,
            technicalSkills.oracle,
            // technicalSkills.javascript,
            technicalSkills.html,
            technicalSkills.css,
            technicalSkills.bootstrap,
            technicalSkills.git,
        ],
    },
    {
        title: "CourseHub",
        link: "https://github.com/lakshjadhwanilj/CourseHub",
        image: CourseHubImage,
        description: 'A seamless e-learning platform with robust content delivery and scalable backend integration for an enriched user experience.',
        skills: [
            technicalSkills.reactjs,
            technicalSkills.nodejs,
            technicalSkills.mongodb,
            technicalSkills.expressjs,
            technicalSkills.ejs,
            technicalSkills.redux,
            technicalSkills.paypal,
            technicalSkills.aws,
            technicalSkills.javascript,
            technicalSkills.html,
            technicalSkills.bootstrap,
        ],
    },
    {
        title: "PhoneBook",
        link: "https://github.com/lakshjadhwanilj/PhoneBook-Angular",
        image: PhoneBookImage,
        description: 'Phonebook with full CRUD functionalities and data management powered by JSON-server—streamlined & efficient contact handling.',
        skills: [
            technicalSkills.angular,
            technicalSkills.typescript,
            technicalSkills.restapi,
            technicalSkills.bootstrap,
            technicalSkills.html,
            technicalSkills.css,
        ],
    },
    {
        title: "SocialApe",
        link: "https://github.com/lakshjadhwanilj/SocialApe",
        image: SocialApeImage,
        description: 'A social media web app with a user-friendly interface enabling image uploads and facilitating interactive comment posting.',
        skills: [
            technicalSkills.reactjs,
            technicalSkills.javascript,
            technicalSkills.materialui,
            technicalSkills.firebase,
            technicalSkills.html,
            technicalSkills.css
        ],
    },
    {
        title: "NotePad",
        link: "https://github.com/lakshjadhwanilj/NotePad-WebApp",
        image: NotePadImage,
        description: 'A user-friendly story-sharing web app empowering users with full CRUD functionality for seamless story creation and sharing..',
        skills: [
            technicalSkills.nodejs,
            technicalSkills.expressjs,
            technicalSkills.ejs,
            technicalSkills.mongodb,
            technicalSkills.javascript,
            technicalSkills.heroku,
            technicalSkills.html,
            technicalSkills.materializecss,
            technicalSkills.css
        ],
    },
]
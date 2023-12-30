import { FaAngular, FaAws, FaBootstrap, FaCss3, FaGitAlt, FaHtml5, FaJava, FaNode, FaPhp, FaPython, FaReact, FaSass } from "react-icons/fa";
import { IoLogoFirebase, IoLogoJavascript } from "react-icons/io5";
import { SiAndroidstudio, SiCanva, SiExpress, SiHeroku, SiMongodb, SiMui, SiMysql, SiNetlify, SiNextdotjs, SiOracle, SiRedux, SiTailwindcss, SiTypescript } from "react-icons/si";
import { TbApi, TbBrandCpp, TbBrandReactNative, TbHexagonLetterC, TbLetterB, TbSquareRoundedLetterJ } from "react-icons/tb";
import { IoLogoNodejs } from "react-icons/io";
import { DiMaterializecss } from "react-icons/di";
import { SiSpringboot } from "react-icons/si";

export const technicalSkills = {
    // Programming Languages
    java: { title: "Java", icon: <FaJava className="inline text-2xl"/> },
    javascript: { title: "JavaScript", icon: <IoLogoJavascript className="inline text-2xl"/> },
    python: { title: "Python", icon: <FaPython className="inline text-2xl"/> },
    typescript: { title: "TypeScript", icon: <SiTypescript className="inline text-2xl"/> },
    c: { title: "C", icon: <TbHexagonLetterC className="inline text-2xl"/> },
    cpp: { title: "C++", icon: <TbBrandCpp className="inline text-2xl"/> },
    php: { title: "PHP", icon: <FaPhp className="inline text-2xl"/> },
    
    // Web Development
    html: { title: "HTML", icon: <FaHtml5 className="inline text-2xl"/> },
    css: { title: "CSS", icon: <FaCss3 className="inline text-2xl"/> },
    // javascript: { title: "JavaScript", icon: <IoLogoJavascript className="inline text-2xl"/> },
    bootstrap: { title: "Bootstrap", icon: <FaBootstrap className="inline text-2xl"/> },
    sass: { title: "Sass", icon: <FaSass className="inline text-2xl"/> },
    tailwindcss: { title: "Tailwind CSS", icon: <SiTailwindcss className="inline text-2xl"/> },
    materializecss: { title: "Materialize CSS", icon: <DiMaterializecss className="inline text-2xl"/> },
    nodejs: { title: "Node.js", icon: <FaNode className="inline text-2xl"/> },
    reactjs: { title: "React.js", icon: <FaReact className="inline text-2xl"/> },
    materialui: { title: "Material UI", icon: <SiMui className="inline text-2xl"/> },
    nextjs: { title: "Next.js", icon: <SiNextdotjs className="inline text-2xl"/> },
    expressjs: { title: "Express.js", icon: <SiExpress className="inline text-2xl"/> },
    ejs: { title: "Ejs", icon: <IoLogoNodejs className="inline text-2xl"/> },
    redux: { title: "Redux", icon: <SiRedux className="inline text-2xl"/> },
    angular: { title: "Angular", icon: <FaAngular className="inline text-2xl"/> },
    // typescript: { title: "TypeScript", icon: <SiTypescript className="inline text-2xl"/> },
    reactnative: { title: "React Native", icon: <TbBrandReactNative className="inline text-2xl"/> },

    // Databases
    mysql: { title: "MySQL", icon: <SiMysql className="inline text-2xl"/> },
    mongodb: { title: "MongoDB", icon: <SiMongodb className="inline text-2xl"/> },
    firebase: { title: "Firebase", icon: <IoLogoFirebase className="inline text-2xl"/> },
    oracle: { title: "Oracle 11g", icon: <SiOracle className="inline text-2xl"/> },

    // Cloud Development
    git: { title: "Git", icon: <FaGitAlt className="inline text-2xl"/> },
    restapi: { title: "REST API", icon: <TbApi className="inline text-2xl"/> },
    aws: { title: "AWS", icon: <FaAws className="inline text-2xl"/> },
    heroku: { title: "Heroku", icon: <SiHeroku className="inline text-2xl"/> },
    netlify: { title: "Netlify", icon: <SiNetlify className="inline text-2xl"/> },

    // Tools & Softwares
    canva: { title: "Canva", icon: <SiCanva className="inline text-2xl"/> },
    springboot: { title: "Spring Boot", icon: <SiSpringboot className="inline text-2xl"/> },
    androidstudio: { title: "Android Studio", icon: <SiAndroidstudio className="inline text-2xl"/> },
    bootomlineTransform: { title: "Transform", icon: <TbLetterB className="inline text-2xl"/> },
    jde: { title: "JD Edwards", icon: <TbSquareRoundedLetterJ className="inline text-2xl"/> },
}
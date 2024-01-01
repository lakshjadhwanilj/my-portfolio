import { FaAngular, FaAws, FaBootstrap, FaCss3, FaGitAlt, FaHtml5, FaJava, FaNode, FaPaypal, FaPhp, FaPython, FaReact, FaSass } from "react-icons/fa";
import { IoLogoFirebase, IoLogoJavascript } from "react-icons/io5";
import { SiAndroidstudio, SiCanva, SiExpress, SiHeroku, SiMongodb, SiMui, SiMysql, SiNetlify, SiNextdotjs, SiOracle, SiRedux, SiTailwindcss, SiTypescript } from "react-icons/si";
import { TbApi, TbBrandCpp, TbBrandReactNative, TbHexagonLetterC, TbLetterB, TbSquareRoundedLetterJ } from "react-icons/tb";
import { IoLogoNodejs } from "react-icons/io";
import { DiMaterializecss } from "react-icons/di";
import { SiSpringboot } from "react-icons/si";

export const technicalSkills = {
    // Programming Languages
    java: { title: "Java", icon: <FaJava className="inline"/> },
    javascript: { title: "JavaScript", icon: <IoLogoJavascript className="inline"/> },
    python: { title: "Python", icon: <FaPython className="inline"/> },
    typescript: { title: "TypeScript", icon: <SiTypescript className="inline"/> },
    c: { title: "C", icon: <TbHexagonLetterC className="inline"/> },
    cpp: { title: "C++", icon: <TbBrandCpp className="inline"/> },
    php: { title: "PHP", icon: <FaPhp className="inline"/> },
    
    // Web Development
    html: { title: "HTML", icon: <FaHtml5 className="inline"/> },
    css: { title: "CSS", icon: <FaCss3 className="inline"/> },
    // javascript: { title: "JavaScript", icon: <IoLogoJavascript className="inline"/> },
    bootstrap: { title: "Bootstrap", icon: <FaBootstrap className="inline"/> },
    sass: { title: "Sass", icon: <FaSass className="inline"/> },
    tailwindcss: { title: "Tailwind CSS", icon: <SiTailwindcss className="inline"/> },
    materializecss: { title: "Materialize CSS", icon: <DiMaterializecss className="inline"/> },
    nodejs: { title: "Node.js", icon: <FaNode className="inline"/> },
    reactjs: { title: "React.js", icon: <FaReact className="inline"/> },
    materialui: { title: "Material UI", icon: <SiMui className="inline"/> },
    nextjs: { title: "Next.js", icon: <SiNextdotjs className="inline"/> },
    expressjs: { title: "Express.js", icon: <SiExpress className="inline"/> },
    ejs: { title: "Ejs", icon: <IoLogoNodejs className="inline"/> },
    redux: { title: "Redux", icon: <SiRedux className="inline"/> },
    angular: { title: "Angular", icon: <FaAngular className="inline"/> },
    // typescript: { title: "TypeScript", icon: <SiTypescript className="inline"/> },
    reactnative: { title: "React Native", icon: <TbBrandReactNative className="inline"/> },

    // Databases
    mysql: { title: "MySQL", icon: <SiMysql className="inline"/> },
    mongodb: { title: "MongoDB", icon: <SiMongodb className="inline"/> },
    firebase: { title: "Firebase", icon: <IoLogoFirebase className="inline"/> },
    oracle: { title: "Oracle 11g", icon: <SiOracle className="inline"/> },

    // Cloud Development
    git: { title: "Git", icon: <FaGitAlt className="inline"/> },
    restapi: { title: "REST API", icon: <TbApi className="inline"/> },
    aws: { title: "AWS", icon: <FaAws className="inline"/> },
    heroku: { title: "Heroku", icon: <SiHeroku className="inline"/> },
    netlify: { title: "Netlify", icon: <SiNetlify className="inline"/> },

    // Tools & Softwares
    canva: { title: "Canva", icon: <SiCanva className="inline"/> },
    springboot: { title: "Spring Boot", icon: <SiSpringboot className="inline"/> },
    androidstudio: { title: "Android Studio", icon: <SiAndroidstudio className="inline"/> },
    bootomlineTransform: { title: "Transform", icon: <TbLetterB className="inline"/> },
    jde: { title: "JD Edwards", icon: <TbSquareRoundedLetterJ className="inline"/> },
    paypal: { title: "PayPal", icon: <FaPaypal className="inline"/> },
}
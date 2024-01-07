import { FaAngular, FaAws, FaBootstrap, FaCcStripe, FaCss3, FaGitAlt, FaGithub, FaHtml5, FaJava, FaNode, FaPaypal, FaPhp, FaPython, FaReact, FaSass } from "react-icons/fa";
import { IoLogoFirebase, IoLogoJavascript } from "react-icons/io5";
import { SiAndroidstudio, SiCanva, SiExpress, SiHeroku, SiHibernate, SiMongodb, SiMongoose, SiMui, SiMysql, SiNetlify, SiNextdotjs, SiOracle, SiPostman, SiRedux, SiTailwindcss, SiTypescript } from "react-icons/si";
import { TbApi, TbBrandCpp, TbBrandDjango, TbBrandReactNative, TbHexagonLetterC, TbLetterB, TbSquareRoundedLetterJ } from "react-icons/tb";
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
    tailwindcss: { title: "Tailwind CSS", icon: <SiTailwindcss className="inline"/> },
    reactjs: { title: "React.js", icon: <FaReact className="inline"/> },
    nodejs: { title: "Node.js", icon: <FaNode className="inline"/> },
    angular: { title: "Angular", icon: <FaAngular className="inline"/> },
    nextjs: { title: "Next.js", icon: <SiNextdotjs className="inline"/> },
    expressjs: { title: "Express.js", icon: <SiExpress className="inline"/> },
    sass: { title: "Sass", icon: <FaSass className="inline"/> },
    materialui: { title: "Material UI", icon: <SiMui className="inline"/> },
    materializecss: { title: "Materialize CSS", icon: <DiMaterializecss className="inline"/> },
    ejs: { title: "Ejs", icon: <IoLogoNodejs className="inline"/> },
    // typescript: { title: "TypeScript", icon: <SiTypescript className="inline"/> },
    
    // Databases
    mysql: { title: "MySQL", icon: <SiMysql className="inline"/> },
    mongodb: { title: "MongoDB", icon: <SiMongodb className="inline"/> },
    firebase: { title: "Firebase", icon: <IoLogoFirebase className="inline"/> },
    oracle: { title: "Oracle DB", icon: <SiOracle className="inline"/> },
    
    // Frameworks & Libraries
    redux: { title: "Redux", icon: <SiRedux className="inline"/> },
    django: { title: "Django", icon: <TbBrandDjango className="inline"/> },
    springboot: { title: "Spring Boot", icon: <SiSpringboot className="inline"/> },
    hibernate: { title: "Hibernate", icon: <SiHibernate className="inline"/> },
    mongoose: { title: "Mongoose", icon: <SiMongoose className="inline"/> },
    reactnative: { title: "React Native", icon: <TbBrandReactNative className="inline"/> },
    
    // Cloud Development
    aws: { title: "AWS", icon: <FaAws className="inline"/> },
    heroku: { title: "Heroku", icon: <SiHeroku className="inline"/> },
    netlify: { title: "Netlify", icon: <SiNetlify className="inline"/> },
    paypal: { title: "PayPal", icon: <FaPaypal className="inline"/> },
    stripe: { title: "Stripe", icon: <FaCcStripe className="inline"/> },
    
    // Tools & Softwares
    bootomlineTransform: { title: "Transform", icon: <TbLetterB className="inline"/> },
    jde: { title: "JD Edwards", icon: <TbSquareRoundedLetterJ className="inline"/> },
    git: { title: "Git", icon: <FaGitAlt className="inline"/> },
    github: { title: "GitHub", icon: <FaGithub className="inline"/> },
    postman: { title: "Postman", icon: <SiPostman className="inline"/> },
    restapi: { title: "REST API", icon: <TbApi className="inline"/> },
    canva: { title: "Canva", icon: <SiCanva className="inline"/> },
    androidstudio: { title: "Android Studio", icon: <SiAndroidstudio className="inline"/> },
}
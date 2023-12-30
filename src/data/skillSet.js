import { FaLaptopCode, FaTools } from "react-icons/fa";
import { IoMdCloudy } from "react-icons/io";
import { SiWebpack } from "react-icons/si";
import { TbDatabaseStar } from "react-icons/tb";
import { technicalSkills } from "./skills";

const programmingLanguages = [ "java", "javascript", "python", "typescript", "c", "cpp", "php" ].map((skill) => technicalSkills[skill] || { title: skill, icon: null });

const webDevelopment = [ "html", "css", "javascript", "bootstrap", "sass", "tailwindcss", "materializecss", "nodejs", "reactjs", "materialui", "nextjs", "expressjs", "ejs", "redux", "angular", "typescript", "reactnative" ].map((skill) => technicalSkills[skill] || { title: skill, icon: null });

const databases = [ "mysql", "mongodb", "firebase", "oracle" ].map((skill) => technicalSkills[skill] || { title: skill, icon: null });

const cloudDevelopment = [ "git", "restapi", "aws", "heroku", "netlify" ].map((skill) => technicalSkills[skill] || { title: skill, icon: null });

const softwares = [ "canva", "springboot", "androidstudio", "bootomlineTransform", "jde" ].map((skill) => technicalSkills[skill] || { title: skill, icon: null });

export const skillSet = [
    {
        title: "Programming Languages",
        skills: programmingLanguages,
        icon: <FaLaptopCode className="inline" />,
    },
    {
        title: "Web Development",
        skills: webDevelopment,
        icon: <SiWebpack className="inline" />,
    },
    {
        title: "Databases",
        skills: databases,
        icon: <TbDatabaseStar className="inline" />,
    },
    {
        title: "Cloud Development",
        skills: cloudDevelopment,
        icon: <IoMdCloudy className="inline" />,
    },
    {
        title: "Software & Tools",
        skills: softwares,
        icon: <FaTools className="inline" />,
    },
]
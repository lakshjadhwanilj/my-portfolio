import { FaLaptopCode, FaTools } from "react-icons/fa";
import { IoMdCloudy } from "react-icons/io";
import { SiWebpack } from "react-icons/si";
import { TbDatabaseStar } from "react-icons/tb";
import { technicalSkills } from "./skills";
import { GrTechnology } from "react-icons/gr";

const programmingLanguages = [ "java", "javascript", "python", "typescript", "c", "cpp" ].map((skill) => technicalSkills[skill] || { title: skill, icon: null });

const webDevelopment = [ "html", "css", "javascript", "bootstrap", "tailwindcss",  "reactjs", "nodejs", "angular", "typescript", "nextjs", "expressjs", "sass", "materialui", "materializecss", "ejs" ].map((skill) => technicalSkills[skill] || { title: skill, icon: null });

const databases = [ "mysql", "mongodb", "firebase", "oracle" ].map((skill) => technicalSkills[skill] || { title: skill, icon: null });

const frameworks = [ "redux",  "springboot", "hibernate", "mongoose",  ].map((skill) => technicalSkills[skill] || { title: skill, icon: null });

const cloudDevelopment = [ "aws", "heroku", "netlify", "paypal", "stripe" ].map((skill) => technicalSkills[skill] || { title: skill, icon: null });

const softwares = [ "bootomlineTransform", "jde", "git", "github", "postman", "restapi", "reactnative", "django", "canva", "androidstudio" ].map((skill) => technicalSkills[skill] || { title: skill, icon: null });

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
        title: "Database Management",
        skills: databases,
        icon: <TbDatabaseStar className="inline" />,
    },
    {
        title: "Frameworks & Libraries",
        skills: frameworks,
        icon: <GrTechnology className="inline" />,
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
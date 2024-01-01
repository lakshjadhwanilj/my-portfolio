import { FaGithub, FaInstagram, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { EMAIL_ID, GITHUB_LINK, INSTAGRAM_LINK, LINKEDIN_LINK, LOCATION, PHONE_NUMBER } from "./constants";

export const socials = [
    {
        title: EMAIL_ID,
        icon: <MdEmail className="inline mb-1" />,
        content: 'mailto:' + EMAIL_ID,
        clickable: true,
    },
    {
        title: 'Github',
        icon: <FaGithub className="inline mb-1" />,
        content: GITHUB_LINK,
        clickable: true,
    },
    {
        title: 'LinkedIn',
        icon: <FaLinkedin className="inline mb-1" />,
        content: LINKEDIN_LINK,
        clickable: true,
    },
    {
        title: 'Instagram',
        icon: <FaInstagram className="inline mb-1" />,
        content: INSTAGRAM_LINK,
        clickable: true,
    },
    {
        title: PHONE_NUMBER,
        icon: <FaPhoneAlt className="inline mb-1" />,
        content: "",
        clickable: false,
    },
    {
        title: LOCATION,
        icon: <FaLocationDot className="inline mb-1" />,
        content: "",
        clickable: false,
    },
]
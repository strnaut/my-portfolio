import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";


export const Nav_items = [
  { name: "Home", path: "#hero" },
  { name: "Projects", path: "#projects" },
  { name: "Experience", path: "#experience" },
  { name: "Certifications", path: "#certifications" },
  { name: "Contact", path: "#contact" },
];

export const Social_links =[
    {
        id: 1,
        name: "Email",
        url: "mailto:farghali.rahman@gmail.com",
        icon: <IoMail />,
    },
    {
        id: 2,
        name: "whatsapp",
        url: "https://wa.me/62895392511022",
        icon: <FaWhatsapp />,
    },
    {
        id: 3,
        name: "LinkedIn",
        url: "https://www.Linkedin.com/in/farghali-syafyurrahman",
        icon: <FaLinkedin />,
    },
    {
        id: 4,
        name: "Instagram",
        url: "https://www.instagram.com/strnaut",
        icon: <FaInstagram />,
    },
    {
        id: 5,
        name: "Github",
        url: "https://github.com/strnaut",
        icon: <FaGithub />,
    },
    
]
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export const Nav_items = [
  { name: "Home", path: "#hero" },
  { name: "About", path: "#about" },
  { name: "Projects", path: "#projects" },
  { name: "Experience", path: "#experience" },
  { name: "Certifications", path: "#certifications" },
  { name: "Contact", path: "#contact" },
];

export const Social_links =[
    {
        id: 1,
        name: "Instagram",
        url: "https://www.instagram.com/strnaut",
        icon: <FaInstagram />,
    },
    {
        id: 2,
        name: "LinkedIn",
        url: "https://www.Linkedin.com/in/farghali-syafyurrahman",
        icon: <FaLinkedin />,
    },
    {
        id: 3,
        name: "Github",
        url: "https://github.com/strnaut",
        icon: <FaGithub />,
    },
]
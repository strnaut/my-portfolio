import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

// Item Navbar
export const Nav_items = [
  { name: "Skills", path: "#skills" },
  { name: "Projects", path: "#projects" },
  { name: "Experiences", path: "#experiences" },
  { name: "Contact", path: "#contact" },
];

// Item Sosmed
export const Social_links = [
  {
    name: "Email",
    url: "mailto:farghali.rahman@gmail.com",
    icon: <IoMail />,
  },
  {
    name: "whatsapp",
    url: "https://wa.me/62895392511022",
    icon: <FaWhatsapp />,
  },
  {
    name: "LinkedIn",
    url: "https://www.Linkedin.com/in/farghali-syafyurrahman",
    icon: <FaLinkedin />,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/strnaut",
    icon: <FaInstagram />,
  },
  {
    name: "Github",
    url: "https://github.com/strnaut",
    icon: <FaGithub />,
  },
];

// Item Skills&Tools
export const Skill_tools = [
  { name: "HTML", icon: "devicon:html5" },
  { name: "CSS", icon: "devicon:css3" },
  { name: "JavaScript", icon: "devicon:javascript" },
  { name: "TypeScript", icon: "devicon:typescript" },
  { name: "React", icon: "devicon:react" },
  { name: "Next.js", icon: "devicon:nextjs" },
  { name: "Tailwind", icon: "devicon:tailwindcss" },
  { name: "Laravel", icon: "devicon:laravel" },
  { name: "CodeIgniter 4", icon: "logos:codeigniter-icon" },
  { name: "Python", icon: "devicon:python" },
  { name: "C++", icon: "devicon:cplusplus" },
  { name: "MySQL", icon: "devicon:mysql" },
  { name: "PostgreSQL", icon: "devicon:postgresql" },
  { name: "Git", icon: "devicon:git" },
  { name: "Figma", icon: "devicon:figma" },
  { name: "Draw.io", icon: "vscode-icons:file-type-drawio" },
  { name: "VSCode", icon: "devicon:vscode" },
  { name: "Looker Studio", icon: "logos:looker-icon" },
  { name: "Google AppSheet", icon: "arcticons:appsheet" },
];

export const projects = [
  {
    name: "Rumah Makan Husnul Khatimah",
    description:
      "A modern restaurant website built with CodeIgniter 4, showcasing the menu and providing an online ordering system.",
    image: "/photos/projectRMHK.webp",
    url: "https://github.com/strnaut/rumah-makan-husnul-khatimah",
    techStack: "Final Project - #CodeIgniter4 #PHP #MySQL",
    type: "web",
  },
  {
    name: "Dashboard Working Condition Index & Operator Skill Check",
    description:
      "A monitoring dashboard integrating WCI (Working Condition Index) to evaluate mine site conditions, and OSC (Operator Skill Check) to assess operator performance and heavy equipment safety.",
    image: "/photos/projectDashboard.png",
    url: "https://drive.google.com/file/d/1oLJqWuUMH7o-KLCZy-LdttLF-sONRyzV/view?usp=sharing",
    techStack: "Internship Project - #LookerStudio #GoogleSpreadsheets",
    type: "web",
  },
  {
    name: "Working Condition Index & Operator Skill Check Mobile App",
    description: "A mobile application integrating WCI (Working Condition Index) to evaluate mine site conditions, and OSC (Operator Skill Check) to assess operator performance and heavy equipment safety.",
    image: "/photos/projectMobile.png",
    url: "https://drive.google.com/file/d/1oLJqWuUMH7o-KLCZy-LdttLF-sONRyzV/view?usp=sharing",
    techStack: "Internship Project - #AppSheet",
    type: "mobile",
  },
  {
    name: "Floine",
    description:
      "A modern florist e-commerce platform designed for seamless flower shopping, featuring a responsive cart system.",
    image: "/photos/projectFloine.webp",
    url: "https://github.com/strnaut/floine",
    techStack: "Project Based Learning - #Codeigniter4 #PHP #MySQL",
    type: "web",
  },
  {
    name: "UB Vocational Warehouse Inventory System",
    description:
      "An integrated inventory management system designed to streamline goods distribution, tracking, and stock control for the Vocational Faculty of Universitas Brawijaya.",
    image: "/photos/projectGudangVokasi.png",
    url: "https://github.com/strnaut/gudang-vokasi-ub",
    techStack: "Project Based Learning - #Codeigniter4 #PHP #MySQL",
    type: "web",
  },
  {
    name: "Portfolio Website",
    description:
      "This is a personal portfolio website built using Next.js and Tailwind CSS. It showcases my projects, skills, and experiences in a clean and modern design.",
    image: "/photos/projectPortfolio.webp",
    url: "/",
    techStack: "#NextJS #Tailwind #Laravel",
    type: "web",
  },
];

export const experiences = [
  {
    position: "Full-Stack Developer Intern",
    company: "PT Dwitunggal Jaya Pratama Maju (SG8Group)",
    date: "December 2025 - Present",
    description: [
      "Rebuilt the company's main website and CMS system using Laravel and React to improve operational efficiency and UI interactiv ity.",
      "Developed an e-commerce application integrated with a payment gateway to digitize and accelerate transaction processes.",
    ],
    type: "Intern",
  },
  {
    position: "System Analyst",
    company: "PT Bina Pertiwi",
    date: "August - December 2024",
    description: [
      "Developed the ESS 2.0 system to streamline administrative processes and improve digital accessibility to Human Capital (HC) services.",
      "Designing the HCIS architecture and KPI metrics as the strategic foundation for the company’s digitalization roadmap.",
      "Designing effective business workflows and visual communication to improve coordination efficiency among stakeholders.",
    ],
    type: "Intern",
  },
  {
    position: "Data Analyst",
    company: "PT United Tractors Tbk",
    date: "July - August 2023",
    description: [
      "Built an interactive dashboard in Looker Studio for real-time data visualization to support managerial decision-making.",
      "Optimizing database management using Google Spreadsheets to ensure a clean and consistent data input structure.",
      "Developed an AppSheet-based field assessment application to digitize the monitoring of mining operations.",
    ],
    type: "Intern",
  },
];

export const techs = [
  { name: "React", icon: "mdi:react" },
  { name: "Next.js", icon: "ri:nextjs-fill" },
  { name: "Tailwind", icon: "mdi:tailwind" },
  { name: "TypeScript", icon: "mdi:language-typescript" },
];

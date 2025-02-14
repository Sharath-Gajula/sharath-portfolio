import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  Doctors,
  Empl,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  
];

const experiences = [
  {
    title: "AI Intern",
    company_name: "AICTE & IBM SkillsBuild",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Nov 2024 - Dec 2024",
    points: [
      "Completed a 6-week internship focusing on AI concepts, tools, and applications.",
      "Gained hands-on experience in machine learning models.",
      "Worked on 'Employee Burnout Analysis and Prediction' project to analyze workplace stress factors.",
      "Developed predictive analytics using machine learning for accurate burnout detection."
  ]


  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Prescripto Web-App",
    description:
      "Prescripto Doctor Web Application is a React.js-based web app for managing medical prescriptions, featuring a dynamic, user-friendly interface with responsive design, utilizing React’s state and props for state management, and ensuring scalability through reusable components.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Doctors,
    source_code_link: "https://sharath-gajula.github.io/",
  },
  {
    name: "Employee Burnout Analysis and Prediction:",
    description:
      "The Employee Burnout Analysis and Prediction project uses machine learning to identify early signs of burnout based on employee data. By leveraging Python and regression models, it helps organizations detect risk factors like workload and mental fatigue, enabling proactive measures to enhance employee well-being and productivity.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "ml",
        color: "green-text-gradient",
      },
    ],
    image: Empl,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };

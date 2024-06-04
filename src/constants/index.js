import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

import imageecom from "../assets/Screenshot 2024-06-03 172704.png";
import imagecrud from "../assets/Screenshot 2024-06-03 173308.png";
import imagetinker from "../assets/Screenshot 2024-06-03 222452.png";

export const HERO_CONTENT = `I am a passionate full-stack developer with a knack for crafting robust and scalable web applications.I have experience with a diverse range of technologies, including React, Node.js, Express, Tailwind CSS, and MongoDB.My goal is to leverage my expertise to create innovative solutions that drive business growth and enhance user satisfaction. I am always excited to take on new challenges and collaborate with others to build impactful web applications.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full-stack developer with a passion for creating efficient and user-friendly web applications. My journey in web development began with a deep curiosity about how things work, which has evolved into a fulfilling career where I continuously strive to learn and adapt to new challenges.\n

One of my notable projects includes creating an E-commerce website using React, Node.js, and Express. Additionally, I have developed a user control system with Node.js, Express, EJS, and MongoDB. These experiences have honed my skills in both front-end and back-end development, enabling me to craft robust and scalable web applications.I thrive in collaborative environments where teamwork and innovation are key. I enjoy solving complex problems and delivering high-quality solutions that provide exceptional user experiences. My commitment to best practices and continuous self-learning ensures that I stay current with industry trends and technologies.\n

Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects. These activities not only enrich my personal life but also keep me engaged and inspired in my professional endeavors.`;

export const EXPERIENCES = [
  {
    image: imageecom,
    role: "StyleStreet ",
    company: " Fully E-commerce Website ",
    description: `> Designed and developed a comprehensive E-Commerce website for selling dresses online, ensuring a fully 
    responsive and user-friendly interface.
    > Developed a secure authentication system, including password encryption and user session management, 
    enabling users to register, login, and manage their accounts.
    > Implemented a seamless shopping cart functionality allowing users to add, update, and remove items.`,
    technologies: ["Express.js", "Node.js", "Reactjs", "mongoDB"],
  },
  {
    image: imagecrud,
    role: " CRUD User  ",
    company: "User Management System",
    description: `> Designed and developed a user management system with comprehensive CRUD (Create, Read, Update, Delete) 
    operations.
    > Added a search filter to enable quick and efficient searching.
    > Developed a secure authentication and authorization system to ensure that only admin users can perform certain 
    actions.`,
    technologies: ["EJS", "Node.js", "Express.js", "MongoDB"],
  },
  {
    image: imagetinker,
    role: "TinkerHub  ",
    company: "User Registration and Attendance System",
    description: `> Implemented a registration system allowing new users to sign up and create profiles.
    > Developed functionality for users to mark their attendance upon logging in.
    > Displayed the list of daily attendees in real-time, providing an overview of currently active users.
    > Developed a secure authentication system with encrypted passwords, ensuring user data privacy and security`,
    technologies: ["Node.js", "Express.js", "MongoDB","React.js"],
  },

];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "Kambalakkad(P.O) Wayanad(D) Kerala(S)",
  phoneNo: "7025609089",
  email: "hijaskallipparamban@gmail.com",
};


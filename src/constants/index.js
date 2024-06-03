import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

import imageecom from "../assets/Screenshot 2024-06-03 172704.png";
import imagecrud from "../assets/Screenshot 2024-06-03 173308.png";
import imagetinker from "../assets/Screenshot 2024-06-03 222452.png";

export const HERO_CONTENT = `I am a passionate full-stack developer with a knack for crafting robust and scalable web applications. I am experienced with self-learning and best practices in creating an E-commerce website using React, Node.js, Express, and another one user control system using node.js express, EJS, and  Mongodb. I have honed my skills in front-end and back-end technologies like React, as well as back-end technologies like Node.js,express and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences..`;

export const ABOUT_TEXT = `I am a dedicated and versatile full-stack developer with a passion for creating efficient and user-friendly web applications. I am experienced with self-learning and best practices in creating an E-commerce website using React, Node.js, Express, and created another one user control system using node.js express, EJS, and  Mongodb. overall the best practices make a parson to efficient developer I am working with variety of websites it will expand coding ideas .I have worked with a variety of technologies, including React, Node.js,express, tailwint-css, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    image: imageecom,
    role: "StyleStreet |",
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
    role: " CRUD User | ",
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
    role: "TinkerHub | ",
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
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};


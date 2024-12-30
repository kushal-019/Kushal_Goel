import project1 from "./Project1.webp";
import project2 from "./Project2.jpg";
import project3 from "./Project3.jpeg";
import project4 from "./Project4.jpeg";
import project5 from "./Project5.png";

export const HERO_CONTENT = `As a dedicated MERN stack developer with two years of hands-on experience, I specialize in building dynamic and efficient web applications. My expertise spans modern front-end technologies like React.js and Redux, combined with robust back-end frameworks such as Node.js and Express.js. With a focus on crafting seamless user experiences and scalable solutions, I strive to solve real-world problems through intuitive, full-stack development. Driven by a passion for learning, I continually enhance my skills to stay ahead in this ever-evolving tech landscape.`;

export const ABOUT_TEXT = `I am a passionate and goal-oriented MERN stack developer with a strong foundation in creating innovative, user-friendly web applications. With two years of experience, I have honed my skills in React.js, Redux, Node.js, Express.js, and MongoDB, allowing me to deliver full-stack solutions tailored to diverse requirements. My journey in web development began with a fascination for problem-solving, which has now transformed into a commitment to building scalable and impactful digital products. Beyond coding, I dedicate my time to exploring emerging technologies, improving my craft, and collaborating with peers to bring fresh ideas to life.`;

export const SERVICES = [
  {
    role: "Web Development",
    description: `I specialize in designing and developing full-stack web applications using modern frameworks, delivering responsive, user-focused solutions.`,
    technologies: ["JavaScript", "React.js", "Node.js", "MongoDB"],
  },
  {
    role: "Database Design and Management",
    description: `Expert in structuring scalable and efficient databases, ensuring optimal performance and data integrity for robust applications.`,
    technologies: ["MongoDB", "MySQL"],
  },
  {
    role: "Algorithm Development and Optimization",
    description: `Proficient in designing optimized algorithms to solve complex computational problems, reducing runtime and improving system efficiency.`,
    technologies: ["C++", "C", "Java"],
  },
];

export const PROJECTS = [
  {
    title: "Invento Mart",
    image: project1,
    description:
      "An inventory management system that streamlines operations for customers, retailers, and wholesalers. Includes features for adding, editing, and managing orders and inventory with a modern full-stack implementation.",
    technologies: ["Tailwind CSS", "JavaScript", "React.js", "Node.js", "MongoDB"],
    url: "https://github.com/kushal-019/Inventory-Management",
  },
  {
    title: "Chit Chat App",
    image: project4,
    description:
      "A real-time chat application enabling seamless communication between users, powered by modern web technologies and WebSocket integration.",
    technologies: ["Tailwind CSS", "JavaScript", "React.js", "Node.js", "MongoDB", "Socket.io"],
    url: "https://github.com/kushal-019/Chit-Chat-App",
  },
  {
    title: "Flappy Bird",
    image: project2,
    description:
      "A reimagined version of the popular Flappy Bird game built using Java and Swing for a desktop experience. Navigate the bird through obstacles in this addictive, interactive game.",
    technologies: ["Java", "Swing"],
    url: "https://github.com/kushal-019/Flappy-Bird-",
  },
  {
    title: "Chefs Pencil",
    image: project3,
    description:
      "An interactive web application where users can discover and share an extensive collection of recipes. Designed for culinary enthusiasts to explore and filter dishes based on preferences.",
    technologies: ["HTML", "CSS", "JavaScript"],
    url: "https://kushal-019.github.io/Chefs-Pencil",
  },
  {
    title: "Google Gemini",
    image: project5,
    description:
      "A sleek React-based interface for interacting with the Google Gemini API. Leverages generative AI to provide users with tailored responses to their input prompts, powered by the Generative AI SDK.",
    technologies: ["JavaScript", "React.js", "Redux", "Tailwind CSS"],
    url: "https://gemini-2-0-three.vercel.app",
  },
];

export const CONTACT = {
  address: "Sector 18, Panipat, Haryana (132103)",
  phoneNo: "+91 7056059847",
  email: "kgoel8451@gmail.com",
};

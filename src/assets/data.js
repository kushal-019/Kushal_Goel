import project1 from "./Project1.webp";
import project2 from "./Project2.jpg";
import project3 from "./Project3.jpeg";
import project4 from "./Project4.jpeg";

export const HERO_CONTENT = `I am a passionate MERN stack developer with a focus on building efficient and dynamic web applications. As a student with 2 years of hands-on experience, I have developed strong skills in front-end technologies like React.js and Redux, as well as back-end technologies like Node.js, Express.js, and MongoDB. My goal is to utilize my expertise in RESTful APIs and full stack development to create impactful solutions that enhance user experiences and solve real-world problems.`;


export const ABOUT_TEXT = `I am a dedicated MERN stack developer with 2 years of experience in creating innovative and user-friendly web applications. As a student, I have honed my skills in technologies like React.js, Redux, Node.js, Express.js, and MongoDB. My passion for web development began with a curiosity for problem-solving, which has grown into a commitment to building scalable and maintainable solutions. I enjoy working on RESTful APIs, collaborating with teams, and staying up-to-date with emerging technologies. Outside of coding, I explore new tools, enhance my knowledge, and participate in learning opportunities to continuously improve my craft.`;


export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Invento Mart",
    image: project1,
    description:
      "A repo to store code of project inventory management , customer , retailer, wholesaler allowing some crud operation to add , edit orders and inventory.",
    technologies: ["Tailwind CSS" , "JavaScript", "React.js", "Node.js", "MongoDB"],
    url : "https://github.com/kushal-019/Inventory-Management",
  },
  {
    title: "Chit Chat App",
    image: project4,
    description:
      "A chat application to enable diff users interact",
    technologies: ["Tailwind CSS" , "JavaScript", "React.js", "Node.js", "MongoDB" , "Sockit.io"],
    url : "https://github.com/kushal-019/Chit-Chat-App",
  },
  {
    title: "Flappy Bird",
    image: project2,
    description:
      "This is a sample code of the popular Flappy Bird game, developed using Java and Swing for the graphical user interface. The objective of the game is to control a bird, avoiding obstacles by flying between them.",
    technologies: ["Java" , "Swing"],
    url  :"https://github.com/kushal-019/Flappy-Bird-",
  },
  {
    title: "Chefs Pencil",
    image: project3,
    description:
      "Welcome to Chefs Pencil, a web application where users can discover, share, and contribute to an extensive collection of recipes. Whether you're a seasoned chef or a beginner, Chefs Pencil helps you explore exciting new dishes and easily filter them based on your preferences.",
    technologies: ["HTML", "CSS", "JavaScript"],
    url:"https://kushal-019.github.io/Chefs-Pencil",
  },
  
];

export const CONTACT = {
  address: "Sector 18 , Panipat , Haryana (132103)",
  phoneNo: "+91 7056059847",
  email: "kgoel8451@gmail.com",
};
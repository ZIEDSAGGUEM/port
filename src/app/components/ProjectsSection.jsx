"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "",
    image: "/images/projects/portfolio.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ZIEDSAGGUEM/ZIEDSGM",
  },

  {
    id: 2,
    title: "Code_Editor",
    description: "",
    image: "/images/projects/Editor.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ZIEDSAGGUEM/Code_Editor",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "",
    image: "/images/projects/ecommerce.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ZIEDSAGGUEM/PFE",
  },
  {
    id: 4,
    title: "Next-Auth",
    description: "",
    image: "/images/projects/auth.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ZIEDSAGGUEM/Next-Auth",
  },
  {
    id: 5,
    title: "WEBRTC",
    description: "",
    image: "/images/projects/webrtc.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ZIEDSAGGUEM/WEBRTC",
  },
  {
    id: 6,
    title: "Todo_nextjs_prisma_MySQL",
    description: "",
    image: "/images/projects/task.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ZIEDSAGGUEM/Todo_nextjs_prisma_MySQL",
  },
  {
    id: 7,
    title: "Cancer_Prediction",
    description: "",
    image: "/images/projects/cancer.png",
    tag: ["All", "IA"],
    gitUrl: "https://github.com/ZIEDSAGGUEM/Cancer_Prediction",
  },
  {
    id: 8,
    title: "Prediction_Diabetes",
    description: "",
    image: "/images/projects/diabetes.png",
    tag: ["All", "IA"],
    gitUrl: "https://github.com/ZIEDSAGGUEM/Prediction_Diabetes",
  },
  {
    id: 9,
    title: "Chat-App-using-React-and-Firebase",
    description: "",
    image: "/images/projects/chat.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ZIEDSAGGUEM/Chat-App-using-React-and-Firebases",
  },
  {
    id: 10,
    title: "Blog_App_MERN_Stack",
    description: "",
    image: "/images/projects/blog.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ZIEDSAGGUEM/Blog_App_MERN_Stack",
  },
  {
    id: 11,
    title: "HandWritten-Digit-Recognition",
    description: "",
    image: "/images/projects/hand.png",
    tag: ["All", "IA"],
    gitUrl: "https://github.com/ZIEDSAGGUEM/HandWritten-Digit-Recognition",
  },
  {
    id: 12,
    title: " Heart_Disease",
    description: "",
    image: "/images/projects/heart.png",
    tag: ["All", "IA"],
    gitUrl: "https://github.com/ZIEDSAGGUEM/Heart_Disease",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="IA"
          isSelected={tag === "IA"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;

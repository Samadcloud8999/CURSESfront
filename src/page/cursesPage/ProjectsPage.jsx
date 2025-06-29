import React from "react";
import { motion } from "framer-motion";
import { FaProjectDiagram } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Eleat Protein Cereal",
    description: "Яркий, динамичный React‑сайт с анимацией и современным UI.",
    url: "https://eleat.protein-cereal.com", // пример, замените на настоящий
  },
  {
    id: 2,
    title: "Art Gallery of Ballarat",
    description: "Интерактивная галерея: плавные переходы и отзывчивый дизайн.",
    url: "https://artgalleryofballarat.com.au",
  },
  {
    id: 3,
    title: "Repeat",
    description: "Сайт с повторяющимися покупками: анимация, 3D‑эффекты.",
    url: "https://repeat.com",
  },
  {
    id: 4,
    title: "Cavai",
    description: "Смелая цветовая схема, плавные микро‑взаимодействия.",
    url: "https://cavai.com",
  },
  {
    id: 5,
    title: "Mr. Pops",
    description: "Игровой сайт с анимацией и привлекательным дизайном.",
    url: "https://mr-pops.com",
  },
  {
    id: 6,
    title: "EverGreener",
    description: "Зелёная тема, экологичный, с утончённой эстетикой.",
    url: "https://evergreener.com",
  },
  {
    id: 7,
    title: "Bryant Smith",
    description: "Портфолио с 3D‑анимацией и креативным взаимодействием.",
    url: "https://bryantsmith.io",
  },
  {
    id: 8,
    title: "PUMA Velocity 2 Experience",
    description: "Интерактивный сайт обуви с эффектами ускорения при скролле.",
    url: "https://velocity2.puma.com",
  },
  {
    id: 9,
    title: "Soren Rose Studio",
    description: "Минималистичный ч/б дизайн, акцент на продуктах.",
    url: "https://sorenrose.studio",
  },
];

const cardVariants = {
  hover: {
    scale: 1.03,
    boxShadow: "0 8px 24px rgba(16, 185, 129, 0.3)",
    y: -4,
  },
};

export const ProjectsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900 text-white min-h-screen p-6"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-4xl font-bold flex items-center gap-3 mb-6 mt-10"
        >
          <FaProjectDiagram className="text-green-500" />
          Проекты с крутым дизайном
        </motion.h1>
        <motion.p
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-2 text-gray-300 text-lg"
        >
          Примеры живых сайтов с чистым и современным дизайном, сделанные на
          React или с его поддержкой.
        </motion.p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={cardVariants}
              whileHover="hover"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
              className="bg-gray-800 rounded-2xl p-6 transition-all duration-300 hover:text-green-400 border border-gray-700"
            >
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="text-green-400 font-medium">
                Перейти на сайт →
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsPage;

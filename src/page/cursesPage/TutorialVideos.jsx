import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaCss3Alt, FaJs, FaHtml5, FaYoutube } from "react-icons/fa";
import BackButton from "../../components/orginism/BackButton";

const videos = {
  ru: {
    react: [
      {
        title: "React для начинающих | Полный курс за 2 часа",
        link: "https://www.youtube.com/watch?v=GNrdg3PzpJQ",
      },
      {
        title: "React JS с нуля. Уроки React для начинающих",
        link: "https://www.youtube.com/watch?v=f55qeKGgB_M",
      },
      {
        title: "React + Redux - Полный курс для новичков",
        link: "https://www.youtube.com/watch?v=ukgq2ey8fL0",
      },
      {
        title: "React уроки. Создаем приложение с нуля",
        link: "https://www.youtube.com/watch?v=Ke90Tje7VS0",
      },
      {
        title: "React Hooks - Полное руководство",
        link: "https://www.youtube.com/watch?v=zvft3pWv2oQ",
      },
      {
        title: "React проект: To-Do List с нуля",
        link: "https://www.youtube.com/watch?v=LoYbN6qo6SA",
      },
      {
        title: "React Router v6 | Уроки",
        link: "https://www.youtube.com/watch?v=59eQ4W4V2e0",
      },
      {
        title: "React и TypeScript | Полный курс",
        link: "https://www.youtube.com/watch?v=JR8D6Yx3t4s",
      },
      {
        title: "React Context API | Уроки",
        link: "https://www.youtube.com/watch?v=5LrDIWkK_Bc",
      },
      {
        title: "React и Firebase | Создаем приложение",
        link: "https://www.youtube.com/watch?v=2hR-uWjBAgw",
      },
      {
        title: "React анимации с Framer Motion",
        link: "https://www.youtube.com/watch?v=2V1WK-3HQNk",
      },
      {
        title: "React тестирование с Jest",
        link: "https://www.youtube.com/watch?v=ajiAl5UNzBU",
      },
      {
        title: "React и GraphQL | Основы",
        link: "https://www.youtube.com/watch?v=7giZGFDGnkc",
      },
      {
        title: "React проект: E-Commerce сайт",
        link: "https://www.youtube.com/watch?v=0aPLq2q1qsg",
      },
      {
        title: "React оптимизация производительности",
        link: "https://www.youtube.com/watch?v=0gZ6a8yXI8M",
      },
      ...Array.from({ length: 45 }, (_, i) => ({
        title: `React Урок ${i + 16}: Практика и проекты (RU)`,
        link: `https://www.youtube.com/watch?v=react-ru-placeholder-${i + 16}`,
      })),
    ],
    js: [
      {
        title: "JavaScript для начинающих | Полный курс за 6 часов",
        link: "https://www.youtube.com/watch?v=zvH1L1OENAc",
      },
      {
        title: "JavaScript уроки с нуля | Практика",
        link: "https://www.youtube.com/watch?v=Bluxbh9CaQ0",
      },
      {
        title: "Асинхронный JavaScript | Async/Await",
        link: "https://www.youtube.com/watch?v=SHiUy6z3expQ",
      },
      {
        title: "JavaScript ES6+ | Современные возможности",
        link: "https://www.youtube.com/watch?v=udT4sG7qxt0",
      },
      {
        title: "JavaScript проекты для начинающих",
        link: "https://www.youtube.com/watch?v=3J5X5c5i5cY",
      },
      {
        title: "JavaScript DOM манипуляции",
        link: "https://www.youtube.com/watch?v=5fb2aPlgoys",
      },
      {
        title: "JavaScript замыкания | Уроки",
        link: "https://www.youtube.com/watch?v=pahO5M8IJFI",
      },
      {
        title: "JavaScript прототипы и наследование",
        link: "https://www.youtube.com/watch?v=s-OXme9Z3gM",
      },
      {
        title: "JavaScript события | Практика",
        link: "https://www.youtube.com/watch?v=1eGCE6gOuZY",
      },
      {
        title: "JavaScript Fetch API | Уроки",
        link: "https://www.youtube.com/watch?v=7A3YkKLuZPU",
      },
      {
        title: "JavaScript модули | ES Modules",
        link: "https://www.youtube.com/watch?v=cRHQNNcYf6s",
      },
      {
        title: "JavaScript регулярные выражения",
        link: "https://www.youtube.com/watch?v=rhzKDrUiJVk",
      },
      {
        title: "JavaScript Web API | Курс",
        link: "https://www.youtube.com/watch?v=GMd3PA2txoU",
      },
      {
        title: "JavaScript проект: Игра на JS",
        link: "https://www.youtube.com/watch?v=3uuQ3u1uC4Y",
      },
      {
        title: "JavaScript оптимизация кода",
        link: "https://www.youtube.com/watch?v=5z5z2p1Zm8A",
      },
      ...Array.from({ length: 45 }, (_, i) => ({
        title: `JavaScript Урок ${i + 16}: Практика и проекты (RU)`,
        link: `https://www.youtube.com/watch?v=js-ru-placeholder-${i + 16}`,
      })),
    ],
    css: [
      {
        title: "CSS для начинающих | Полный курс",
        link: "https://www.youtube.com/watch?v=Sp9ZfSvpf7A",
      },
      {
        title: "Flexbox CSS | Полное руководство",
        link: "https://www.youtube.com/watch?v=JJSoEo8JSnc",
      },
      {
        title: "CSS Grid | Уроки для новичков",
        link: "https://www.youtube.com/watch?v=9zBsdzdE4sM",
      },
      {
        title: "Анимации в CSS | Практика",
        link: "https://www.youtube.com/watch?v=YszONjKp5CM",
      },
      {
        title: "Адаптивная верстка с CSS",
        link: "https://www.youtube.com/watch?v=0uM0q_6S-Z4",
      },
      {
        title: "CSS переменные | Уроки",
        link: "https://www.youtube.com/watch?v=PVOaOCc2F5Q",
      },
      {
        title: "CSS псевдоклассы и псевдоэлементы",
        link: "https://www.youtube.com/watch?v=6z8q2b1a2gY",
      },
      {
        title: "CSS трансформации | Практика",
        link: "https://www.youtube.com/watch?v=8zTgTkL0gY4",
      },
      {
        title: "CSS медиа-запросы | Адаптив",
        link: "https://www.youtube.com/watch?v=2KL-z9A56SQ",
      },
      {
        title: "CSS анимации ключевых кадров",
        link: "https://www.youtube.com/watch?v=A71aqufiNtQ",
      },
      {
        title: "CSS проект: Адаптивная карточка",
        link: "https://www.youtube.com/watch?v=3z3z2p1Zm8A",
      },
      {
        title: "CSS Tailwind | Введение",
        link: "https://www.youtube.com/watch?v=ft30zcMlFao",
      },
      {
        title: "CSS SASS | Основы",
        link: "https://www.youtube.com/watch?v=Zz6eOVaaelI",
      },
      {
        title: "CSS проект: Лендинг",
        link: "https://www.youtube.com/watch?v=1Rs2ND1ryYc",
      },
      {
        title: "CSS оптимизация стилей",
        link: "https://www.youtube.com/watch?v=5z5z2p1Zm8A",
      },
      ...Array.from({ length: 45 }, (_, i) => ({
        title: `CSS Урок ${i + 16}: Практика и проекты (RU)`,
        link: `https://www.youtube.com/watch?v=css-ru-placeholder-${i + 16}`,
      })),
    ],
    html: [
      {
        title: "HTML для начинающих | Полный курс",
        link: "https://www.youtube.com/watch?v=DBrT2e6gZhw",
      },
      {
        title: "HTML5 уроки | Семантика и структура",
        link: "https://www.youtube.com/watch?v=mJ0X8dD2goQ",
      },
      {
        title: "HTML формы | Практика",
        link: "https://www.youtube.com/watch?v=6lGiHzEg-1Q",
      },
      {
        title: "HTML и доступность | Уроки",
        link: "https://www.youtube.com/watch?v=2o1GusgRo4Q",
      },
      {
        title: "HTML проекты для новичков",
        link: "https://www.youtube.com/watch?v=qz0O6261jsU",
      },
      {
        title: "HTML5 Canvas | Основы",
        link: "https://www.youtube.com/watch?v=EO6OkltgudE",
      },
      {
        title: "HTML семантические теги",
        link: "https://www.youtube.com/watch?v=6lGiHzEg-1Q",
      },
      {
        title: "HTML мета-теги | SEO",
        link: "https://www.youtube.com/watch?v=2o1GusgRo4Q",
      },
      {
        title: "HTML проект: Портфолио",
        link: "https://www.youtube.com/watch?v=qz0O6261jsU",
      },
      {
        title: "HTML и CSS | Комбинированный урок",
        link: "https://www.youtube.com/watch?v=Sp9ZfSvpf7A",
      },
      {
        title: "HTML валидация форм",
        link: "https://www.youtube.com/watch?v=6lGiHzEg-1Q",
      },
      {
        title: "HTML атрибуты | Уроки",
        link: "https://www.youtube.com/watch?v=2o1GusgRo4Q",
      },
      {
        title: "HTML проект: Лендинг",
        link: "https://www.youtube.com/watch?v=qz0O6261jsU",
      },
      {
        title: "HTML и JavaScript | Интеграция",
        link: "https://www.youtube.com/watch?v=zvH1L1OENAc",
      },
      {
        title: "HTML лучшие практики",
        link: "https://www.youtube.com/watch?v=2o1GusgRo4Q",
      },
      ...Array.from({ length: 45 }, (_, i) => ({
        title: `HTML Урок ${i + 16}: Практика и проекты (RU)`,
        link: `https://www.youtube.com/watch?v=html-ru-placeholder-${i + 16}`,
      })),
    ],
  },
  en: {
    react: [
      {
        title: "React Tutorial for Beginners",
        link: "https://www.youtube.com/watch?v=SqcY0GlETPk",
      },
      {
        title: "React JS Crash Course",
        link: "https://www.youtube.com/watch?v=w7ejDZ8SWv8",
      },
      {
        title: "Build a React App | Full Course",
        link: "https://www.youtube.com/watch?v=khJlrj3Y6Ls",
      },
      {
        title: "React Hooks Tutorial",
        link: "https://www.youtube.com/watch?v=TNhaISOUy6Q",
      },
      {
        title: "Advanced React Patterns",
        link: "https://www.youtube.com/watch?v=puXZmU3rXvU",
      },
      {
        title: "React Router v6 Tutorial",
        link: "https://www.youtube.com/watch?v=59IxY5idFhM",
      },
      {
        title: "React and Redux | Full Course",
        link: "https://www.youtube.com/watch?v=ukgq2ey8fL0",
      },
      {
        title: "React with TypeScript",
        link: "https://www.youtube.com/watch?v=JR8D6Yx3t4s",
      },
      {
        title: "React Context API Tutorial",
        link: "https://www.youtube.com/watch?v=5LrDIWkK_Bc",
      },
      {
        title: "React and Firebase Project",
        link: "https://www.youtube.com/watch?v=2hR-uWjBAgw",
      },
      {
        title: "React Animations with Framer Motion",
        link: "https://www.youtube.com/watch?v=2V1WK-3HQNk",
      },
      {
        title: "React Testing with Jest",
        link: "https://www.youtube.com/watch?v=ajiAl5UNzBU",
      },
      {
        title: "React and GraphQL Basics",
        link: "https://www.youtube.com/watch?v=7giZGFDGnkc",
      },
      {
        title: "React E-Commerce Project",
        link: "https://www.youtube.com/watch?v=0aPLq2q1qsg",
      },
      {
        title: "React Performance Optimization",
        link: "https://www.youtube.com/watch?v=0gZ6a8yXI8M",
      },
      ...Array.from({ length: 45 }, (_, i) => ({
        title: `React Lesson ${i + 16}: Practice and Projects (EN)`,
        link: `https://www.youtube.com/watch?v=react-en-placeholder-${i + 16}`,
      })),
    ],
    js: [
      {
        title: "JavaScript Full Course for Beginners",
        link: "https://www.youtube.com/watch?v=PkZNo7MFNFg",
      },
      {
        title: "JavaScript DOM Manipulation",
        link: "https://www.youtube.com/watch?v=5fb2aPlgoys",
      },
      {
        title: "Async JavaScript Tutorial",
        link: "https://www.youtube.com/watch?v=PoRJizFvM7s",
      },
      {
        title: "JavaScript ES6 Features",
        link: "https://www.youtube.com/watch?v=NCwa_xi0Uuc",
      },
      {
        title: "JavaScript Projects for Beginners",
        link: "https://www.youtube.com/watch?v=3PHXvlpOkf4",
      },
      {
        title: "JavaScript Closures Explained",
        link: "https://www.youtube.com/watch?v=pahO5M8IJFI",
      },
      {
        title: "JavaScript Prototypes and Inheritance",
        link: "https://www.youtube.com/watch?v=s-OXme9Z3gM",
      },
      {
        title: "JavaScript Events Tutorial",
        link: "https://www.youtube.com/watch?v=1eGCE6gOuZY",
      },
      {
        title: "JavaScript Fetch API",
        link: "https://www.youtube.com/watch?v=7A3YkKLuZPU",
      },
      {
        title: "JavaScript ES Modules",
        link: "https://www.youtube.com/watch?v=cRHQNNcYf6s",
      },
      {
        title: "JavaScript Regular Expressions",
        link: "https://www.youtube.com/watch?v=rhzKDrUiJVk",
      },
      {
        title: "JavaScript Web APIs Course",
        link: "https://www.youtube.com/watch?v=GMd3PA2txoU",
      },
      {
        title: "JavaScript Game Development",
        link: "https://www.youtube.com/watch?v=3uuQ3u1uC4Y",
      },
      {
        title: "JavaScript Code Optimization",
        link: "https://www.youtube.com/watch?v=5z5z2p1Zm8A",
      },
      {
        title: "JavaScript Functional Programming",
        link: "https://www.youtube.com/watch?v=BMUiFMZr7vk",
      },
      ...Array.from({ length: 45 }, (_, i) => ({
        title: `JavaScript Lesson ${i + 16}: Practice and Projects (EN)`,
        link: `https://www.youtube.com/watch?v=js-en-placeholder-${i + 16}`,
      })),
    ],
    css: [
      {
        title: "CSS Full Course for Beginners",
        link: "https://www.youtube.com/watch?v=1Rs2ND1ryYc",
      },
      {
        title: "CSS Flexbox Tutorial",
        link: "https://www.youtube.com/watch?v=JJSoEo8JSnc",
      },
      {
        title: "CSS Grid Crash Course",
        link: "https://www.youtube.com/watch?v=9zBsdzdE4sM",
      },
      {
        title: "CSS Animations Tutorial",
        link: "https://www.youtube.com/watch?v=YszONjKp5CM",
      },
      {
        title: "Responsive Web Design with CSS",
        link: "https://www.youtube.com/watch?v=0uM0q_6S-Z4",
      },
      {
        title: "CSS Variables Tutorial",
        link: "https://www.youtube.com/watch?v=PVOaOCc2F5Q",
      },
      {
        title: "CSS Pseudo-Classes and Elements",
        link: "https://www.youtube.com/watch?v=6z8q2b1a2gY",
      },
      {
        title: "CSS Transformations",
        link: "https://www.youtube.com/watch?v=8zTgTkL0gY4",
      },
      {
        title: "CSS Media Queries",
        link: "https://www.youtube.com/watch?v=2KL-z9A56SQ",
      },
      {
        title: "CSS Keyframe Animations",
        link: "https://www.youtube.com/watch?v=A71aqufiNtQ",
      },
      {
        title: "CSS Project: Responsive Card",
        link: "https://www.youtube.com/watch?v=3z3z2p1Zm8A",
      },
      {
        title: "CSS Tailwind Introduction",
        link: "https://www.youtube.com/watch?v=ft30zcMlFao",
      },
      {
        title: "CSS SASS Basics",
        link: "https://www.youtube.com/watch?v=Zz6eOVaaelI",
      },
      {
        title: "CSS Project: Landing Page",
        link: "https://www.youtube.com/watch?v=1Rs2ND1ryYc",
      },
      {
        title: "CSS Style Optimization",
        link: "https://www.youtube.com/watch?v=5z5z2p1Zm8A",
      },
      ...Array.from({ length: 45 }, (_, i) => ({
        title: `CSS Lesson ${i + 16}: Practice and Projects (EN)`,
        link: `https://www.youtube.com/watch?v=css-en-placeholder-${i + 16}`,
      })),
    ],
    html: [
      {
        title: "HTML Full Course for Beginners",
        link: "https://www.youtube.com/watch?v=pQN-pnXPaVg",
      },
      {
        title: "HTML5 Semantic Elements",
        link: "https://www.youtube.com/watch?v=OGe-ansE9go",
      },
      {
        title: "HTML Forms Tutorial",
        link: "https://www.youtube.com/watch?v=fNcJuPIZ2WE",
      },
      {
        title: "HTML Accessibility Best Practices",
        link: "https://www.youtube.com/watch?v=2o1GusgRo4Q",
      },
      {
        title: "HTML Beginner Projects",
        link: "https://www.youtube.com/watch?v=qz0O6261jsU",
      },
      {
        title: "HTML5 Canvas Tutorial",
        link: "https://www.youtube.com/watch?v=EO6OkltgudE",
      },
      {
        title: "HTML Semantic Tags",
        link: "https://www.youtube.com/watch?v=6lGiHzEg-1Q",
      },
      {
        title: "HTML Meta Tags for SEO",
        link: "https://www.youtube.com/watch?v=2o1GusgRo4Q",
      },
      {
        title: "HTML Portfolio Project",
        link: "https://www.youtube.com/watch?v=qz0O6261jsU",
      },
      {
        title: "HTML and CSS Combined",
        link: "https://www.youtube.com/watch?v=1Rs2ND1ryYc",
      },
      {
        title: "HTML Form Validation",
        link: "https://www.youtube.com/watch?v=6lGiHzEg-1Q",
      },
      {
        title: "HTML Attributes Tutorial",
        link: "https://www.youtube.com/watch?v=2o1GusgRo4Q",
      },
      {
        title: "HTML Landing Page Project",
        link: "https://www.youtube.com/watch?v=qz0O6261jsU",
      },
      {
        title: "HTML and JavaScript Integration",
        link: "https://www.youtube.com/watch?v=PkZNo7MFNFg",
      },
      {
        title: "HTML Best Practices",
        link: "https://www.youtube.com/watch?v=2o1GusgRo4Q",
      },
      ...Array.from({ length: 45 }, (_, i) => ({
        title: `HTML Lesson ${i + 16}: Practice and Projects (EN)`,
        link: `https://www.youtube.com/watch?v=html-en-placeholder-${i + 16}`,
      })),
    ],
  },
};

const VideoCard = ({ video }) => (
  <motion.a
    href={video.link}
    target="_blank"
    rel="noopener noreferrer"
    className="p-4 rounded-md shadow-lg bg-gray-800 hover:bg-gray-900 transition-colors duration-300 flex items-center gap-2 text-white"
    whileHover={{ scale: 1.03 }}
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
  >
    <FaYoutube className="text-red-500 text-2xl" />
    <span>{video.title}</span>
  </motion.a>
);

const Section = ({ title, icon, videos, language }) => (
  <motion.section
    className="mb-12"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <h2 className="text-3xl font-semibold mb-6 flex items-center text-white">
      {icon}
      <span className="ml-2">{title}</span>
    </h2>
    <h3 className="text-xl font-medium mb-4 text-gray-600">
      Видеоуроки ({language === "ru" ? "Русский" : "Английский"})
    </h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {videos.map((video, index) => (
        <VideoCard key={index} video={video} />
      ))}
    </div>
  </motion.section>
);

const TutorialsPage = () => {
  const [language, setLanguage] = useState("ru");

  return (
    <div className="bg-gray-900 min-h-screen p-6 text-gray-200">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="text-4xl font-bold mb-8 text-center text-gray-100  mt-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Видеоуроки по веб-разработке
        </motion.h1>

        <motion.div
          className="mb-8 flex justify-center gap-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <button
            onClick={() => setLanguage("ru")}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              language === "ru"
                ? "bg-blue-600 text-white"
                : "bg-gray-300 text-gray-800 hover:bg-gray-900"
            }`}
          >
            RU
          </button>
          <button
            onClick={() => setLanguage("en")}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              language === "en"
                ? "bg-blue-600 text-white"
                : "bg-gray-300 text-gray-800 hover:bg-gray-900"
            }`}
          >
            EN
          </button>
        </motion.div>
        <BackButton />
        <Section
          title="React уроки"
          icon={<FaReact className="text-blue-500 text-3xl" />}
          videos={videos[language].react}
          language={language}
        />
        <Section
          title="JavaScript уроки"
          icon={<FaJs className="text-yellow-500 text-3xl" />}
          videos={videos[language].js}
          language={language}
        />
        <Section
          title="CSS уроки"
          icon={<FaCss3Alt className="text-blue-600 text-3xl" />}
          videos={videos[language].css}
          language={language}
        />
        <Section
          title="HTML уроки"
          icon={<FaHtml5 className="text-red-600 text-3xl" />}
          videos={videos[language].html}
          language={language}
        />
      </div>
    </div>
  );
};

export default TutorialsPage;

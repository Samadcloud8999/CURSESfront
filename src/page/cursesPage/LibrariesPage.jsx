import React, { useState } from "react";
import { useSprings, animated } from "@react-spring/web";
import { motion } from "framer-motion";
import { FaReact, FaJs, FaCss3Alt, FaHtml5, FaSearch } from "react-icons/fa";
import BackButton from "../../components/orginism/BackButton";

const getRandom = (min, max) => Math.random() * (max - min) + min;

const bubbles = new Array(15).fill().map(() => ({
  left: getRandom(0, 90),
  top: getRandom(0, 90),
  size: getRandom(50, 100),
  color: `hsl(${getRandom(200, 280)}, 70%, 60%)`,
}));

const libraries = {
  react: [
    {
      name: "Framer Motion",
      description:
        "Мощная библиотека для создания анимаций и интерактивных жестов в React.",
      usage: "Анимация компонентов, переходы и управление жестами.",
      install: "npm install framer-motion",
      link: "https://www.framer.com/motion/",
      example: `import { motion } from 'framer-motion';
<motion.div animate={{ scale: 1.2 }} transition={{ duration: 0.5 }}>
  Анимированный блок
</motion.div>`,
    },
    {
      name: "React Router",
      description:
        "Библиотека для управления маршрутизацией в React-приложениях.",
      usage: "Создание SPA с навигацией без перезагрузки страницы.",
      install: "npm install react-router-dom",
      link: "https://reactrouter.com/",
      example: `import { BrowserRouter, Route, Routes } from 'react-router-dom';
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
</BrowserRouter>`,
    },
    {
      name: "Axios",
      description: "HTTP-клиент для выполнения асинхронных запросов к API.",
      usage: "Работа с REST API, перехват запросов и обработка ошибок.",
      install: "npm install axios",
      link: "https://axios-http.com/",
      example: `import axios from 'axios';
axios.get('/api/data').then(response => console.log(response.data));`,
    },
    {
      name: "React Hook Form",
      description:
        "Эффективная библиотека для управления формами с минимальной перерисовкой.",
      usage: "Валидация и обработка данных форм.",
      install: "npm install react-hook-form",
      link: "https://react-hook-form.com/",
      example: `import { useForm } from 'react-hook-form';
const { register, handleSubmit } = useForm();
<form onSubmit={handleSubmit(data => console.log(data))}>
  <input {...register('name')} />
</form>`,
    },
    {
      name: "Zustand",
      description: "Легковесное решение для управления глобальным состоянием.",
      usage: "Альтернатива Redux для управления состоянием.",
      install: "npm install zustand",
      link: "https://zustand-demo.pmnd.rs/",
      example: `import create from 'zustand';
const useStore = create(set => ({
  count: 0,
  increment: () => set(state => ({ count: state.count + 1 }))
}));`,
    },
    {
      name: "React Query",
      description:
        "Инструмент для управления серверным состоянием и кэширования данных.",
      usage: "Загрузка, синхронизация и обработка данных API.",
      install: "npm install @tanstack/react-query",
      link: "https://tanstack.com/query/",
      example: `import { useQuery } from '@tanstack/react-query';
const { data } = useQuery(['data'], () => fetch('/api/data').then(res => res.json()));`,
    },
    {
      name: "Redux Toolkit",
      description:
        "Официальный набор инструментов для упрощения работы с Redux.",
      usage: "Управление сложным глобальным состоянием.",
      install: "npm install @reduxjs/toolkit",
      link: "https://redux-toolkit.js.org/",
      example: `import { configureStore } from '@reduxjs/toolkit';
const store = configureStore({ reducer: {} });`,
    },
    {
      name: "React Spring",
      description: "Библиотека для создания физически реалистичных анимаций.",
      usage: "Сложные анимации с эффектами пружин.",
      install: "npm install @react-spring/web",
      link: "https://react.spring.dev/",
      example: `import { useSpring, animated } from '@react spring/web';
const props = useSpring({ opacity: 1, from: { opacity: 0 } });
<animated.div style={props}>Анимация</animated.div>`,
    },
    {
      name: "React Intl",
      description: "Библиотека для интернационализации React-приложений.",
      usage: "Локализация текста и форматирование сообщений.",
      install: "npm install react-intl",
      link: "https://formatjs.io/docs/react-intl/",
      example: `import { FormattedMessage } from 'react-intl';
<FormattedMessage id="welcome" defaultMessage="Welcome to the app!" />`,
    },
    {
      name: "React Testing Library",
      description: "Библиотека для тестирования React-компонентов.",
      usage: "Создание юнит-тестов для проверки поведения компонентов.",
      install: "npm install @testing-library/react",
      link: "https://testing-library.com/docs/react-testing-library/intro/",
      example: `import { render, screen } from '@testing-library/react';
render(<App />);
expect(screen.getByText('Hello')).toBeInTheDocument();`,
    },
  ],
  js: [
    {
      name: "Lodash",
      description:
        "Утилитарная библиотека для работы с массивами, объектами и функциями.",
      usage: "Манипуляции с данными и повышение читаемости кода.",
      install: "npm install lodash",
      link: "https://lodash.com/",
      example: `import _ from 'lodash';
const result = _.debounce(func, 1000);`,
    },
    {
      name: "Moment.js",
      description: "Библиотека для работы с датами и временем.",
      usage: "Парсинг, форматирование и манипуляция датами.",
      install: "npm install moment",
      link: "https://momentjs.com/",
      example: `import moment from 'moment';
const date = moment().format('MMMM Do YYYY');`,
    },
    {
      name: "GSAP",
      description: "Библиотека для создания высокопроизводительных анимаций.",
      usage: "Анимация DOM-элементов, SVG и других объектов.",
      install: "npm install gsap",
      link: "https://greensock.com/gsap/",
      example: `import { gsap } from 'gsap';
gsap.to('.box', { x: 100, duration: 1 });`,
    },
    {
      name: "D3.js",
      description: "Библиотека для создания интерактивных визуализаций данных.",
      usage: "Построение графиков и диаграмм с использованием SVG.",
      install: "npm install d3",
      link: "https://d3js.org/",
      example: `import * as d3 from 'd3';
d3.select('svg').append('circle').attr('r', 50);`,
    },
    {
      name: "Three.js",
      description: "Библиотека для создания 3D-графики в браузере.",
      usage: "Рендеринг 3D-сцен с WebGL.",
      install: "npm install three",
      link: "https://threejs.org/",
      example: `import * as THREE from 'three';
const scene = new THREE.Scene();`,
    },
    {
      name: "Ramda",
      description: "Функциональная утилитарная библиотека для JavaScript.",
      usage: "Работа с данными в функциональном стиле.",
      install: "npm install ramda",
      link: "https://ramdajs.com/",
      example: `import R from 'ramda';
const add = R.curry((a, b) => a + b);`,
    },
    {
      name: "RxJS",
      description:
        "Библиотека для реактивного программирования с использованием Observables.",
      usage: "Управление асинхронными событиями и потоками данных.",
      install: "npm install rxjs",
      link: "https://rxjs.dev/",
      example: `import { fromEvent } from 'rxjs';
fromEvent(document, 'click').subscribe(() => console.log('Clicked'));`,
    },
  ],
  css: [
    {
      name: "Tailwind CSS",
      description:
        "Утилитарный CSS-фреймворк для быстрого создания интерфейсов.",
      usage: "Стилизация через классы без пользовательского CSS.",
      install: "npm install tailwindcss",
      link: "https://tailwindcss.com/",
      example: `<div className="bg-blue-500 text-white p-4 rounded">
  Стилизованный блок
</div>`,
    },
    {
      name: "Styled Components",
      description: "CSS-in-JS библиотека для стилизации React-компонентов.",
      usage: "Создание стилизованных компонентов с динамическими стилями.",
      install: "npm install styled-components",
      link: "https://styled-components.com/",
      example: `import styled from 'styled-components';
const Button = styled.button\`
  background: blue;
  color: white;
\`;`,
    },
    {
      name: "Emotion",
      description: "Высокопроизводительная CSS-in-JS библиотека.",
      usage: "Гибкая стилизация компонентов с поддержкой тем.",
      install: "npm install @emotion/react",
      link: "https://emotion.sh/",
      example: `import { css } from '@emotion/react';
<div css={css\`background: blue; color: white;\`}>Стилизованный блок</div>`,
    },
    {
      name: "Sass",
      description: "Препроцессор CSS с поддержкой переменных и вложенности.",
      usage: "Упрощение написания сложных стилей.",
      install: "npm install sass",
      link: "https://sass-lang.com/",
      example: `$color: blue;
.button {
  background: $color;
}`,
    },
    {
      name: "PostCSS",
      description: "Инструмент для трансформации CSS с плагинами.",
      usage: "Добавление автопрефиксов и новых возможностей CSS.",
      install: "npm install postcss",
      link: "https://postcss.org/",
      example: `/* Input */
.element {
  display: grid;
}
/* Output with autoprefixer */
.element {
  display: -ms-grid;
  display: grid;
}`,
    },
    {
      name: "Bootstrap",
      description:
        "Популярный CSS-фреймворк для создания адаптивных интерфейсов.",
      usage: "Готовые компоненты и утилиты для быстрого прототипирования.",
      install: "npm install bootstrap",
      link: "https://getbootstrap.com/",
      example: `<button class="btn btn-primary">Кнопка</button>`,
    },
    {
      name: "Chakra UI",
      description:
        "Библиотека компонентов с акцентом на доступность и кастомизацию.",
      usage: "Создание стилизованных React-компонентов с темами.",
      install:
        "npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion",
      link: "https://chakra-ui.com/",
      example: `import { Button } from '@chakra-ui/react';
<Button colorScheme="blue">Кнопка</Button>`,
    },
  ],
  html: [
    {
      name: "React Helmet",
      description: "Библиотека для управления метаданными в head страницы.",
      usage: "Динамическое обновление заголовков и мета-тегов для SEO.",
      install: "npm install react-helmet",
      link: "https://github.com/nfl/react-helmet",
      example: `import { Helmet } from 'react-helmet';
<Helmet>
  <title>Моя страница</title>
</Helmet>`,
    },
    {
      name: "React Meta Tags",
      description: "Компонент для добавления мета-тегов в React.",
      usage: "Управление мета-тегами для социальных сетей и SEO.",
      install: "npm install react-meta-tags",
      link: "https://github.com/s-yadav/react-meta-tags",
      example: `import MetaTags from 'react-meta-tags';
<MetaTags>
  <meta name="description" content="Описание страницы" />
</MetaTags>`,
    },
    {
      name: "HTML React Parser",
      description: "Библиотека для парсинга HTML в React-компоненты.",
      usage: "Преобразование HTML-строк в JSX.",
      install: "npm install html-react-parser",
      link: "https://github.com/remarkablemark/html-react-parser",
      example: `import parse from 'html-react-parser';
const html = '<p>Текст</p>';
parse(html);`,
    },
    {
      name: "React Snap",
      description: "Инструмент для пререндеринга React-приложений для SEO.",
      usage: "Создание статических HTML-страниц для поисковых систем.",
      install: "npm install react-snap",
      link: "https://github.com/stereobooster/react-snap",
      example: `// package.json
"scripts": {
  "postbuild": "react-snap"
}`,
    },
  ],
};

const LibraryCard = ({ library }) => (
  <motion.div
    className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
    whileHover={{ scale: 1.03 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
  >
    <h3 className="text-xl font-semibold text-white mb-2 flex items-center">
      <span className="mr-2">{library.name}</span>
    </h3>
    <p className="text-gray-300 mb-4">{library.description}</p>
    <p className="text-gray-400 mb-2">
      <strong>Для чего:</strong> {library.usage}
    </p>
    <p className="text-gray-400 mb-2">
      <strong>Установка:</strong>{" "}
      <code className="bg-gray-700 p-1 rounded">{library.install}</code>
    </p>
    <pre className="bg-gray-700 p-4 rounded text-gray-300 text-sm overflow-x-auto mb-4">
      <code>{library.example}</code>
    </pre>
    <a
      href={library.link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-400 hover:text-blue-300 transition-colors flex items-center"
    >
      Документация <span className="ml-1">→</span>
    </a>
  </motion.div>
);

const Section = ({ title, icon, libraries }) => (
  <motion.section
    className="mb-16"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <h2 className="text-3xl font-bold mb-8 flex items-center">
      {icon} <span className="ml-2">{title}</span>
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {libraries.map((lib, index) => (
        <LibraryCard key={index} library={lib} />
      ))}
    </div>
  </motion.section>
);

const LibrariesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const animatedBubbles = useSprings(
    bubbles.length,
    bubbles.map(() => ({
      from: { x: 0, y: 0 },
      to: async (next) => {
        while (true) {
          await next({
            x: getRandom(-50, 50),
            y: getRandom(-50, 50),
            config: { tension: 2000, friction: 20, duration: 1000 },
          });
        }
      },
      loop: true,
    }))
  );

  const filteredLibraries = {
    react: libraries.react.filter((lib) =>
      lib.name.toLowerCase().includes(searchTerm.toLowerCase())
    ),
    js: libraries.js.filter((lib) =>
      lib.name.toLowerCase().includes(searchTerm.toLowerCase())
    ),
    css: libraries.css.filter((lib) =>
      lib.name.toLowerCase().includes(searchTerm.toLowerCase())
    ),
    html: libraries.html.filter((lib) =>
      lib.name.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-8 overflow-hidden">
      {animatedBubbles.map((style, i) => (
        <animated.div
          key={i}
          style={{
            ...style,
            width: bubbles[i].size,
            height: bubbles[i].size,
            backgroundColor: bubbles[i].color,
            position: "fixed",
            borderRadius: "50%",
            filter: "blur(30px)",
            left: `${bubbles[i].left}%`,
            top: `${bubbles[i].top}%`,
            opacity: 0.2,
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="text-5xl font-extrabold mb-8 text-center mt-9"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Библиотеки для веб-разработки
        </motion.h1>

        <motion.div
          className="mb-12 flex justify-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative w-full max-w-md">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Поиск библиотеки..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-400 transition-colors"
            />
          </div>
        </motion.div>
        <BackButton />
        {filteredLibraries.react.length > 0 && (
          <Section
            title="React библиотеки"
            icon={<FaReact className="text-blue-400 text-3xl" />}
            libraries={filteredLibraries.react}
          />
        )}
        {filteredLibraries.js.length > 0 && (
          <Section
            title="JavaScript библиотеки"
            icon={<FaJs className="text-yellow-400 text-3xl" />}
            libraries={filteredLibraries.js}
          />
        )}
        {filteredLibraries.css.length > 0 && (
          <Section
            title="CSS библиотеки и фреймворки"
            icon={<FaCss3Alt className="text-blue-600 text-3xl" />}
            libraries={filteredLibraries.css}
          />
        )}
        {filteredLibraries.html.length > 0 && (
          <Section
            title="HTML и метаданные"
            icon={<FaHtml5 className="text-orange-500 text-3xl" />}
            libraries={filteredLibraries.html}
          />
        )}

        {Object.values(filteredLibraries).every((arr) => arr.length === 0) && (
          <motion.p
            className="text-center text-gray-400 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Библиотеки не найдены. Попробуйте изменить запрос.
          </motion.p>
        )}
      </div>
    </div>
  );
};

export default LibrariesPage;

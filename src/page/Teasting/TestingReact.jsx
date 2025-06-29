import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheckCircle, FaTimesCircle, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const shuffleOptions = (options, correctIndex) => {
  const shuffled = [...options];
  const newOrder = [];
  const usedIndices = new Set();

  while (newOrder.length < options.length) {
    const randomIndex = Math.floor(Math.random() * options.length);
    if (!usedIndices.has(randomIndex)) {
      newOrder.push(shuffled[randomIndex]);
      usedIndices.add(randomIndex);
    }
  }

  const newCorrectIndex = newOrder.indexOf(options[correctIndex]);
  return { shuffledOptions: newOrder, newCorrectIndex };
};

const rawQuestions = {
  easy: [
    {
      id: 1,
      question: "Что такое React?",
      options: [
        "Библиотека JavaScript",
        "Фреймворк",
        "Язык программирования",
        "База данных",
      ],
      correct: 0,
    },
    {
      id: 2,
      question: "Кто разработал React?",
      options: ["Facebook", "Google", "Microsoft", "Amazon"],
      correct: 0,
    },
    {
      id: 3,
      question: "Что такое JSX?",
      options: [
        "Расширение синтаксиса",
        "Язык шаблонов",
        "CSS-препроцессор",
        "Библиотека",
      ],
      correct: 0,
    },
    {
      id: 4,
      question: "Какой метод рендерит компонент?",
      options: ["render()", "return()", "display()", "show()"],
      correct: 0,
    },
    {
      id: 5,
      question: "Как создать функциональный компонент?",
      options: [
        "function MyComponent()",
        "class MyComponent",
        "const MyComponent = () => {}",
        "Оба a и c",
      ],
      correct: 3,
    },
    {
      id: 6,
      question: "Что такое props?",
      options: ["Свойства компонента", "Состояние", "Хуки", "События"],
      correct: 0,
    },
    {
      id: 7,
      question: "Как передать props?",
      options: [
        "<Component prop={value} />",
        "Component.prop = value",
        "props(Component, value)",
        "setProps(value)",
      ],
      correct: 0,
    },
    {
      id: 8,
      question: "Что такое state?",
      options: [
        "Локальное состояние",
        "Глобальные данные",
        "Свойства",
        "Константы",
      ],
      correct: 0,
    },
    {
      id: 9,
      question: "Какой хук управляет состоянием?",
      options: ["useState", "useEffect", "useContext", "useReducer"],
      correct: 0,
    },
    {
      id: 10,
      question: "Что делает useEffect?",
      options: [
        "Побочные эффекты",
        "Управление состоянием",
        "Роутинг",
        "Стилизация",
      ],
      correct: 0,
    },
    {
      id: 11,
      question: "Как установить React?",
      options: [
        "npx create-react-app",
        "npm install react",
        "Оба a и b",
        "yarn add react",
      ],
      correct: 2,
    },
    {
      id: 12,
      question: "Что такое виртуальный DOM?",
      options: ["Копия DOM", "Реальный DOM", "CSS-модель", "База данных"],
      correct: 0,
    },
    {
      id: 13,
      question: "Какой тег используется в JSX?",
      options: ["<div>", "<view>", "<block>", "<section>"],
      correct: 0,
    },
    {
      id: 14,
      question: "Какой атрибут вместо class?",
      options: ["className", "class", "style", "id"],
      correct: 0,
    },
    {
      id: 15,
      question: "Как добавить событие click?",
      options: ["onClick", "onclick", "click", "onPress"],
      correct: 0,
    },
    {
      id: 16,
      question: "Что возвращает функциональный компонент?",
      options: ["JSX", "HTML", "CSS", "JSON"],
      correct: 0,
    },
    {
      id: 17,
      question: "Как импортировать React?",
      options: [
        "import React from 'react'",
        "import * as React",
        "require('react')",
        "Оба a и c",
      ],
      correct: 3,
    },
    {
      id: 18,
      question: "Что такое хук?",
      options: [
        "Функция для состояния",
        "Класс",
        "Метод рендеринга",
        "Свойство",
      ],
      correct: 0,
    },
    {
      id: 19,
      question: "Как обновить состояние?",
      options: ["setState", "useState", "updateState", "changeState"],
      correct: 0,
    },
    {
      id: 20,
      question: "Что делает ReactDOM.render?",
      options: [
        "Рендерит компонент",
        "Создает компонент",
        "Удаляет компонент",
        "Обновляет состояние",
      ],
      correct: 0,
    },
    {
      id: 21,
      question: "Какой файл точка входа?",
      options: ["index.js", "App.js", "main.js", "start.js"],
      correct: 0,
    },
    {
      id: 22,
      question: "Что такое React.Fragment?",
      options: ["Обертка без DOM", "Компонент", "Состояние", "Хук"],
      correct: 0,
    },
    {
      id: 23,
      question: "Какой метод жизненного цикла?",
      options: ["componentDidMount", "useEffect", "Оба", "Нет такого"],
      correct: 2,
    },
    {
      id: 24,
      question: "Что делает useState?",
      options: [
        "Управляет состоянием",
        "Рендерит компонент",
        "Обрабатывает события",
        "Стилизует",
      ],
      correct: 0,
    },
    {
      id: 25,
      question: "Как использовать CSS в React?",
      options: [
        "CSS-файлы",
        "CSS-модули",
        "Инлайн-стили",
        "Все вышеперечисленное",
      ],
      correct: 3,
    },
    {
      id: 26,
      question: "Что такое key в списках?",
      options: ["Уникальный идентификатор", "Стиль", "Событие", "Состояние"],
      correct: 0,
    },
    {
      id: 27,
      question: "Как рендерить список?",
      options: ["map()", "forEach()", "filter()", "reduce()"],
      correct: 0,
    },
    {
      id: 28,
      question: "Что такое controlled component?",
      options: [
        "Управляется состоянием",
        "Неуправляемый",
        "Статический",
        "Классовый",
      ],
      correct: 0,
    },
    {
      id: 29,
      question: "Что такое uncontrolled component?",
      options: [
        "Не управляется состоянием",
        "Управляется состоянием",
        "Статический",
        "Классовый",
      ],
      correct: 0,
    },
    {
      id: 30,
      question: "Как установить React Router?",
      options: [
        "npm install react-router-dom",
        "npm install router",
        "yarn add react",
        "npm add router",
      ],
      correct: 0,
    },
    {
      id: 31,
      question: "Что такое React.createElement?",
      options: [
        "Создает элемент",
        "Рендерит компонент",
        "Обновляет состояние",
        "Обрабатывает события",
      ],
      correct: 0,
    },
    {
      id: 32,
      question: "Какой хук для контекста?",
      options: ["useContext", "useState", "useEffect", "useReducer"],
      correct: 0,
    },
    {
      id: 33,
      question: "Что такое defaultProps?",
      options: ["Значения по умолчанию", "Состояние", "Хуки", "События"],
      correct: 0,
    },
    {
      id: 34,
      question: "Как импортировать CSS?",
      options: ["import './style.css'", "require('style.css')", "Оба", "Никак"],
      correct: 2,
    },
    {
      id: 35,
      question: "Что делает useRef?",
      options: [
        "Сохраняет ссылку",
        "Управляет состоянием",
        "Рендерит компонент",
        "Обрабатывает события",
      ],
      correct: 0,
    },
    {
      id: 36,
      question: "Как запустить React-приложение?",
      options: ["npm start", "npm run", "node start", "yarn build"],
      correct: 0,
    },
    {
      id: 37,
      question: "Что такое PropTypes?",
      options: ["Проверка типов", "Стилизация", "Роутинг", "Состояние"],
      correct: 0,
    },
    {
      id: 38,
      question: "Как установить PropTypes?",
      options: [
        "npm install prop-types",
        "npm add props",
        "yarn add react",
        "npm install types",
      ],
      correct: 0,
    },
    {
      id: 39,
      question: "Что такое children в props?",
      options: ["Дочерние элементы", "Состояние", "Хуки", "События"],
      correct: 0,
    },
    {
      id: 40,
      question: "Как создать контекст?",
      options: [
        "React.createContext",
        "React.useContext",
        "createContext()",
        "useContext()",
      ],
      correct: 0,
    },
    {
      id: 41,
      question: "Что такое useMemo?",
      options: [
        "Кэширует вычисления",
        "Управляет состоянием",
        "Рендерит компонент",
        "Обрабатывает события",
      ],
      correct: 0,
    },
    {
      id: 42,
      question: "Что такое useCallback?",
      options: [
        "Кэширует функции",
        "Управляет состоянием",
        "Рендерит компонент",
        "Обрабатывает события",
      ],
      correct: 0,
    },
    {
      id: 43,
      question: "Какой порт по умолчанию для React?",
      options: ["3000", "8080", "5000", "4000"],
      correct: 0,
    },
    {
      id: 44,
      question: "Что такое React.memo?",
      options: [
        "Мемоизация компонента",
        "Управление состоянием",
        "Роутинг",
        "Стилизация",
      ],
      correct: 0,
    },
    {
      id: 45,
      question: "Как обновить React?",
      options: [
        "npm install react@latest",
        "npm update react",
        "Оба",
        "yarn add react",
      ],
      correct: 2,
    },
    {
      id: 46,
      question: "Что такое React.StrictMode?",
      options: [
        "Режим строгой проверки",
        "Режим рендеринга",
        "Режим отладки",
        "Режим стилизации",
      ],
      correct: 0,
    },
    {
      id: 47,
      question: "Как использовать инлайн-стили?",
      options: ["style={{}}", "className", "css={}", "styles={}"],
      correct: 0,
    },
    {
      id: 48,
      question: "Что такое React Hooks?",
      options: [
        "Функции для функциональных компонентов",
        "Классовые методы",
        "Стили",
        "Роутинг",
      ],
      correct: 0,
    },
    {
      id: 49,
      question: "Как рендерить условно?",
      options: [
        "{condition && <Component />}",
        "if(condition) <Component />",
        "renderIf(condition)",
        "switch(condition)",
      ],
      correct: 0,
    },
    {
      id: 50,
      question: "Что такое ReactDOM?",
      options: ["Библиотека для DOM", "Компонент", "Хук", "Состояние"],
      correct: 0,
    },
    {
      id: 51,
      question: "Какой файл для рендеринга?",
      options: ["index.html", "App.js", "index.js", "main.html"],
      correct: 0,
    },
    {
      id: 52,
      question: "Что делает componentDidMount?",
      options: [
        "Выполняется после рендера",
        "До рендера",
        "При обновлении",
        "При удалении",
      ],
      correct: 0,
    },
    {
      id: 53,
      question: "Как использовать Tailwind CSS?",
      options: [
        "npm install -D tailwindcss",
        "npm add tailwind",
        "yarn add css",
        "npm install tailwind",
      ],
      correct: 0,
    },
    {
      id: 54,
      question: "Что такое React Router?",
      options: ["Библиотека роутинга", "Стилизация", "Состояние", "Хуки"],
      correct: 0,
    },
    {
      id: 55,
      question: "Какой компонент для маршрута?",
      options: ["Route", "Router", "Path", "Link"],
      correct: 0,
    },
    {
      id: 56,
      question: "Что делает Link?",
      options: [
        "Создает навигацию",
        "Рендерит компонент",
        "Управляет состоянием",
        "Стилизует",
      ],
      correct: 0,
    },
    {
      id: 57,
      question: "Что такое useReducer?",
      options: ["Управление состоянием", "Рендеринг", "Роутинг", "Стилизация"],
      correct: 0,
    },
    {
      id: 58,
      question: "Как установить Redux?",
      options: [
        "npm install redux react-redux",
        "npm add redux",
        "yarn add react",
        "npm install state",
      ],
      correct: 0,
    },
    {
      id: 59,
      question: "Что такое Redux store?",
      options: [
        "Глобальное состояние",
        "Локальное состояние",
        "Компонент",
        "Хук",
      ],
      correct: 0,
    },
    {
      id: 60,
      question: "Что делает useSelector?",
      options: [
        "Получает состояние",
        "Обновляет состояние",
        "Рендерит компонент",
        "Обрабатывает события",
      ],
      correct: 0,
    },
    {
      id: 61,
      question: "Что делает useDispatch?",
      options: [
        "Отправляет действия",
        "Получает состояние",
        "Рендерит компонент",
        "Обрабатывает события",
      ],
      correct: 0,
    },
    {
      id: 62,
      question: "Что такое React Context?",
      options: [
        "Глобальное состояние",
        "Локальное состояние",
        "Компонент",
        "Хук",
      ],
      correct: 0,
    },
    {
      id: 63,
      question: "Какой хук для побочных эффектов?",
      options: ["useEffect", "useState", "useContext", "useReducer"],
      correct: 0,
    },
    {
      id: 64,
      question: "Что такое React Developer Tools?",
      options: ["Расширение для отладки", "Библиотека", "Хук", "Состояние"],
      correct: 0,
    },
    {
      id: 65,
      question: "Как тестировать компоненты?",
      options: ["Jest", "React Testing Library", "Оба", "Mocha"],
      correct: 2,
    },
    {
      id: 66,
      question: "Что такое snapshot тестирование?",
      options: [
        "Сравнение UI",
        "Тестирование состояния",
        "Тестирование событий",
        "Тестирование стилей",
      ],
      correct: 0,
    },
    {
      id: 67,
      question: "Как установить Jest?",
      options: [
        "npm install --save-dev jest",
        "npm add jest",
        "yarn add react",
        "npm install test",
      ],
      correct: 0,
    },
    {
      id: 68,
      question: "Что такое CSS-модули?",
      options: [
        "Локальные стили",
        "Глобальные стили",
        "Инлайн-стили",
        "Библиотека",
      ],
      correct: 0,
    },
    {
      id: 69,
      question: "Как импортировать CSS-модуль?",
      options: [
        "import styles from './file.module.css'",
        "import './file.css'",
        "require('file.css')",
        "Оба a и b",
      ],
      correct: 0,
    },
    {
      id: 70,
      question: "Что такое styled-components?",
      options: ["Библиотека для стилизации", "Компонент", "Хук", "Состояние"],
      correct: 0,
    },
    {
      id: 71,
      question: "Как установить styled-components?",
      options: [
        "npm install styled-components",
        "npm add styles",
        "yarn add react",
        "npm install css",
      ],
      correct: 0,
    },
    {
      id: 72,
      question: "Что делает React.createContext?",
      options: [
        "Создает контекст",
        "Рендерит компонент",
        "Управляет состоянием",
        "Обрабатывает события",
      ],
      correct: 0,
    },
    {
      id: 73,
      question: "Какой метод для обновления?",
      options: ["componentDidUpdate", "useEffect", "Оба", "Нет такого"],
      correct: 2,
    },
    {
      id: 74,
      question: "Что такое React.Fragment shorthand?",
      options: ["<></>", "<Fragment>", "<div>", "<section>"],
      correct: 0,
    },
    {
      id: 75,
      question: "Как использовать useRef для DOM?",
      options: ["ref.current", "ref.value", "ref.element", "ref.dom"],
      correct: 0,
    },
    {
      id: 76,
      question: "Что такое React.PureComponent?",
      options: [
        "Оптимизированный компонент",
        "Функциональный компонент",
        "Хук",
        "Состояние",
      ],
      correct: 0,
    },
    {
      id: 77,
      question: "Как рендерить динамически?",
      options: ["map()", "forEach()", "filter()", "reduce()"],
      correct: 0,
    },
    {
      id: 78,
      question: "Что такое React.Children?",
      options: ["Управление детьми", "Стилизация", "Роутинг", "Состояние"],
      correct: 0,
    },
    {
      id: 79,
      question: "Как использовать PropTypes для массива?",
      options: [
        "PropTypes.array",
        "PropTypes.list",
        "PropTypes.arrayOf",
        "PropTypes.collection",
      ],
      correct: 2,
    },
    {
      id: 80,
      question: "Что такое React.lazy?",
      options: ["Ленивая загрузка", "Стилизация", "Роутинг", "Состояние"],
      correct: 0,
    },
    {
      id: 81,
      question: "Что такое Suspense?",
      options: [
        "Обертка для ленивой загрузки",
        "Компонент",
        "Хук",
        "Состояние",
      ],
      correct: 0,
    },
    {
      id: 82,
      question: "Как использовать Suspense?",
      options: [
        "<Suspense fallback={<div>Loading...</div>}>",
        "<Suspense><Component /></Suspense>",
        "Suspense()",
        "useSuspense()",
      ],
      correct: 0,
    },
    {
      id: 83,
      question: "Что такое React.StrictMode?",
      options: [
        "Выявляет проблемы",
        "Управляет состоянием",
        "Рендерит компонент",
        "Обрабатывает события",
      ],
      correct: 0,
    },
    {
      id: 84,
      question: "Какой метод для удаления компонента?",
      options: [
        "componentWillUnmount",
        "useEffect cleanup",
        "Оба",
        "Нет такого",
      ],
      correct: 2,
    },
    {
      id: 85,
      question: "Что делает create-react-app?",
      options: [
        "Создает проект",
        "Рендерит компонент",
        "Управляет состоянием",
        "Обрабатывает события",
      ],
      correct: 0,
    },
    {
      id: 86,
      question: "Как использовать Vite с React?",
      options: [
        "npm create vite@latest",
        "npm install vite",
        "yarn add vite",
        "npm add react-vite",
      ],
      correct: 0,
    },
    {
      id: 87,
      question: "Что такое React portal?",
      options: ["Рендеринг вне DOM", "Стилизация", "Роутинг", "Состояние"],
      correct: 0,
    },
    {
      id: 88,
      question: "Как создать portal?",
      options: [
        "ReactDOM.createPortal",
        "React.createPortal",
        "createPortal()",
        "usePortal()",
      ],
      correct: 0,
    },
    {
      id: 89,
      question: "Что такое useImperativeHandle?",
      options: [
        "Настройка ref",
        "Управление состоянием",
        "Рендеринг",
        "Обработка событий",
      ],
      correct: 0,
    },
    {
      id: 90,
      question: "Как использовать forwardRef?",
      options: [
        "React.forwardRef",
        "React.useRef",
        "ref.forward",
        "useForwardRef",
      ],
      correct: 0,
    },
    {
      id: 91,
      question: "Что такое key prop?",
      options: ["Уникальный идентификатор", "Стиль", "Событие", "Состояние"],
      correct: 0,
    },
    {
      id: 92,
      question: "Какой хук для оптимизации?",
      options: ["useMemo", "useState", "useContext", "useReducer"],
      correct: 0,
    },
    {
      id: 93,
      question: "Что делает useLayoutEffect?",
      options: [
        "Побочные эффекты до рендера",
        "После рендера",
        "Управляет состоянием",
        "Обрабатывает события",
      ],
      correct: 0,
    },
    {
      id: 94,
      question: "Какой метод для оптимизации классов?",
      options: [
        "shouldComponentUpdate",
        "useMemo",
        "useCallback",
        "componentDidMount",
      ],
      correct: 0,
    },
    {
      id: 95,
      question: "Что такое React.Children.map?",
      options: [
        "Перебирает детей",
        "Стилизует",
        "Рендерит",
        "Управляет состоянием",
      ],
      correct: 0,
    },
    {
      id: 96,
      question: "Как использовать ESLint с React?",
      options: [
        "npm install eslint --save-dev",
        "npm add lint",
        "yarn add react",
        "npm install lint",
      ],
      correct: 0,
    },
    {
      id: 97,
      question: "Что такое Prettier?",
      options: ["Форматирование кода", "Тестирование", "Роутинг", "Стилизация"],
      correct: 0,
    },
    {
      id: 98,
      question: "Как установить Prettier?",
      options: [
        "npm install prettier --save-dev",
        "npm add prettier",
        "yarn add react",
        "npm install format",
      ],
      correct: 0,
    },
    {
      id: 99,
      question: "Что такое React Testing Library?",
      options: [
        "Библиотека для тестирования",
        "Стилизация",
        "Роутинг",
        "Состояние",
      ],
      correct: 0,
    },
    {
      id: 100,
      question: "Как рендерить в тестах?",
      options: ["render()", "ReactDOM.render()", "testRender()", "useRender()"],
      correct: 0,
    },
  ],
  medium: [
    {
      id: 101,
      question: "Как работает useEffect cleanup?",
      options: [
        "Очищает эффекты",
        "Рендерит компонент",
        "Управляет состоянием",
        "Обрабатывает события",
      ],
      correct: 0,
    },
    {
      id: 102,
      question: "Что такое Context API?",
      options: [
        "Глобальное состояние",
        "Локальное состояние",
        "Компонент",
        "Хук",
      ],
      correct: 0,
    },
    {
      id: 103,
      question: "Как использовать useReducer?",
      options: [
        "Для сложного состояния",
        "Для рендеринга",
        "Для стилизации",
        "Для роутинга",
      ],
      correct: 0,
    },
    {
      id: 104,
      question: "Что такое Redux middleware?",
      options: ["Обработка действий", "Рендеринг", "Стилизация", "Состояние"],
      correct: 0,
    },
    {
      id: 105,
      question: "Как установить Redux Toolkit?",
      options: [
        "npm install @reduxjs/toolkit",
        "npm add redux",
        "yarn add react",
        "npm install toolkit",
      ],
      correct: 0,
    },
    {
      id: 106,
      question: "Что такое configureStore?",
      options: [
        "Создает store",
        "Рендерит компонент",
        "Управляет состоянием",
        "Обрабатывает события",
      ],
      correct: 0,
    },
    {
      id: 107,
      question: "Что делает createSlice?",
      options: [
        "Создает редьюсер",
        "Рендерит компонент",
        "Управляет состоянием",
        "Обрабатывает события",
      ],
      correct: 0,
    },
    {
      id: 108,
      question: "Как использовать useMemo?",
      options: [
        "Кэширует вычисления",
        "Управляет состоянием",
        "Рендерит компонент",
        "Обрабатывает события",
      ],
      correct: 0,
    },
    {
      id: 109,
      question: "Как работает useCallback?",
      options: [
        "Кэширует функции",
        "Управляет состоянием",
        "Рендерит компонент",
        "Обрабатывает события",
      ],
      correct: 0,
    },
    {
      id: 110,
      question: "Что такое React.memo?",
      options: [
        "Мемоизация компонента",
        "Управление состоянием",
        "Роутинг",
        "Стилизация",
      ],
      correct: 0,
    },
    {
      id: 111,
      question: "Как оптимизировать рендеринг?",
      options: ["React.memo, useMemo", "useState", "useContext", "useReducer"],
      correct: 0,
    },
    {
      id: 112,
      question: "Что такое useImperativeHandle?",
      options: [
        "Настройка ref",
        "Управление состоянием",
        "Рендеринг",
        "Обработка событий",
      ],
      correct: 0,
    },
    {
      id: 113,
      question: "Как использовать forwardRef?",
      options: [
        "React.forwardRef",
        "React.useRef",
        "ref.forward",
        "useForwardRef",
      ],
      correct: 0,
    },
    {
      id: 114,
      question: "Что такое React.lazy?",
      options: ["Ленивая загрузка", "Стилизация", "Роутинг", "Состояние"],
      correct: 0,
    },
    {
      id: 115,
      question: "Как работает Suspense?",
      options: [
        "Обертка для ленивой загрузки",
        "Компонент",
        "Хук",
        "Состояние",
      ],
      correct: 0,
    },
    {
      id: 116,
      question: "Что такое React portal?",
      options: ["Рендеринг вне DOM", "Стилизация", "Роутинг", "Состояние"],
      correct: 0,
    },
    {
      id: 117,
      question: "Как создать portal?",
      options: [
        "ReactDOM.createPortal",
        "React.createPortal",
        "createPortal()",
        "usePortal()",
      ],
      correct: 0,
    },
    {
      id: 118,
      question: "Что такое useLayoutEffect?",
      options: [
        "Побочные эффекты до рендера",
        "После рендера",
        "Управляет состоянием",
        "Обрабатывает события",
      ],
      correct: 0,
    },
    {
      id: 119,
      question: "Как использовать useDebugValue?",
      options: [
        "Отладочная информация",
        "Управление состоянием",
        "Рендеринг",
        "Обработка событий",
      ],
      correct: 0,
    },
    {
      id: 120,
      question: "Что такое React.Children.map?",
      options: [
        "Перебирает детей",
        "Стилизует",
        "Рендерит",
        "Управляет состоянием",
      ],
      correct: 0,
    },
    {
      id: 121,
      question: "Что такое React.Children.count?",
      options: [
        "Подсчитывает детей",
        "Стилизует",
        "Рендерит",
        "Управляет состоянием",
      ],
      correct: 0,
    },
    {
      id: 122,
      question: "Что такое React.isValidElement?",
      options: [
        "Проверяет элемент",
        "Рендерит компонент",
        "Управляет состоянием",
        "Обрабатывает события",
      ],
      correct: 0,
    },
    {
      id: 123,
      question: "Как использовать React.createRef?",
      options: [
        "Создает ссылку",
        "Управляет состоянием",
        "Рендерит компонент",
        "Обрабатывает события",
      ],
      correct: 0,
    },
    {
      id: 124,
      question: "Что такое ReactDOM.hydrate?",
      options: ["Гидратация SSR", "Рендеринг", "Стилизация", "Состояние"],
      correct: 0,
    },
    {
      id: 125,
      question: "Что такое React.PureComponent?",
      options: [
        "Оптимизированный компонент",
        "Функциональный компонент",
        "Хук",
        "Состояние",
      ],
      correct: 0,
    },
    {
      id: 126,
      question: "Как использовать shouldComponentUpdate?",
      options: [
        "Оптимизация рендера",
        "Управление состоянием",
        "Роутинг",
        "Стилизация",
      ],
      correct: 0,
    },
    {
      id: 127,
      question: "Что такое React.cloneElement?",
      options: [
        "Клонирует элемент",
        "Рендерит компонент",
        "Управляет состоянием",
        "Обрабатывает события",
      ],
      correct: 0,
    },
    {
      id: 128,
      question: "Как использовать useParams?",
      options: [
        "Получает параметры маршрута",
        "Рендерит компонент",
        "Управляет состоянием",
        "Обрабатывает события",
      ],
      correct: 0,
    },
    {
      id: 129,
      question: "Что такое useLocation?",
      options: [
        "Получает текущий URL",
        "Рендерит компонент",
        "Управляет состоянием",
        "Обрабатывает события",
      ],
      correct: 0,
    },
    {
      id: 130,
      question: "Что такое useHistory?",
      options: [
        "Управление историей",
        "Управление состоянием",
        "Рендеринг",
        "Стилизация",
      ],
      correct: 0,
    },
    {
      id: 131,
      question: "Как использовать NavLink?",
      options: [
        "Ссылка с активным классом",
        "Обычная ссылка",
        "Компонент",
        "Хук",
      ],
      correct: 0,
    },
    {
      id: 132,
      question: "Что такое React Router Route?",
      options: ["Компонент маршрута", "Стилизация", "Состояние", "Хук"],
      correct: 0,
    },
    {
      id: 133,
      question: "Как использовать CSS-модули?",
      options: [
        "import styles from './file.module.css'",
        "import './file.css'",
        "require('file.css')",
        "Оба a и b",
      ],
      correct: 0,
    },
    {
      id: 134,
      question: "Что такое styled-components?",
      options: ["Библиотека для стилизации", "Компонент", "Хук", "Состояние"],
      correct: 0,
    },
    {
      id: 135,
      question: "Как установить styled-components?",
      options: [
        "npm install styled-components",
        "npm add styles",
        "yarn add react",
        "npm install css",
      ],
      correct: 0,
    },
    {
      id: 136,
      question: "Что такое Redux Toolkit?",
      options: [
        "Упрощает Redux",
        "Рендерит компонент",
        "Управляет состоянием",
        "Обрабатывает события",
      ],
      correct: 0,
    },
    {
      id: 137,
      question: "Что такое createSlice?",
      options: [
        "Создает редьюсер",
        "Рендерит компонент",
        "Управляет состоянием",
        "Обрабатывает события",
      ],
      correct: 0,
    },
    {
      id: 138,
      question: "Что такое configureStore?",
      options: [
        "Создает store",
        "Рендерит компонент",
        "Управляет состоянием",
        "Обрабатывает события",
      ],
      correct: 0,
    },
    {
      id: 139,
      question: "Как использовать useSelector?",
      options: [
        "Получает состояние",
        "Обновляет состояние",
        "Рендерит компонент",
        "Обрабатывает события",
      ],
      correct: 0,
    },
    {
      id: 140,
      question: "Как использовать useDispatch?",
      options: [
        "Отправляет действия",
        "Получает состояние",
        "Рендерит компонент",
        "Обрабатывает события",
      ],
      correct: 0,
    },
    {
      id: 141,
      question: "Что такое React Context?",
      options: [
        "Глобальное состояние",
        "Локальное состояние",
        "Компонент",
        "Хук",
      ],
      correct: 0,
    },
    {
      id: 142,
      question: "Как использовать React.createContext?",
      options: [
        "Создает контекст",
        "Рендерит компонент",
        "Управляет состоянием",
        "Обрабатывает события",
      ],
      correct: 0,
    },
    {
      id: 143,
      question: "Что такое useContext?",
      options: [
        "Получает контекст",
        "Управляет состоянием",
        "Рендерит компонент",
        "Обрабатывает события",
      ],
      correct: 0,
    },
    {
      id: 144,
      question: "Как использовать React Testing Library?",
      options: [
        "Для тестирования UI",
        "Для стилизации",
        "Для роутинга",
        "Для состояния",
      ],
      correct: 0,
    },
    {
      id: 145,
      question: "Что такое fireEvent в тестах?",
      options: [
        "Имитирует события",
        "Рендерит компонент",
        "Управляет состоянием",
        "Стилизует",
      ],
      correct: 0,
    },
    {
      id: 146,
      question: "Как тестировать асинхронные компоненты?",
      options: ["waitFor", "setTimeout", "asyncTest", "useAsync"],
      correct: 0,
    },
    {
      id: 147,
      question: "Что такое getByRole?",
      options: [
        "Поиск по ARIA-роли",
        "Поиск по ID",
        "Поиск по классу",
        "Поиск по тегу",
      ],
      correct: 0,
    },
    {
      id: 148,
      question: "Как использовать queryByText?",
      options: [
        "Поиск текста, может вернуть null",
        "Поиск текста, всегда возвращает",
        "Рендерит компонент",
        "Обрабатывает события",
      ],
      correct: 0,
    },
    {
      id: 149,
      question: "Что такое act() в тестах?",
      options: [
        "Синхронизирует рендеринг",
        "Рендерит компонент",
        "Управляет состоянием",
        "Обрабатывает события",
      ],
      correct: 0,
    },
    {
      id: 150,
      question: "Как использовать mock в Jest?",
      options: ["jest.fn()", "mock()", "spyOn()", "Оба a и c"],
      correct: 3,
    },
    {
      id: 151,
      question: "Что такое Redux Thunk?",
      options: ["Асинхронные действия", "Рендеринг", "Стилизация", "Состояние"],
      correct: 0,
    },
    {
      id: 152,
      question: "Как установить Redux Thunk?",
      options: [
        "npm install redux-thunk",
        "npm add thunk",
        "yarn add react",
        "npm install middleware",
      ],
      correct: 0,
    },
    {
      id: 153,
      question: "Что такое Redux Saga?",
      options: [
        "Асинхронные действия с генераторами",
        "Рендеринг",
        "Стилизация",
        "Состояние",
      ],
      correct: 0,
    },
    {
      id: 154,
      question: "Как использовать useNavigate?",
      options: [
        "Для программной навигации",
        "Для рендеринга",
        "Для стилизации",
        "Для состояния",
      ],
      correct: 0,
    },
    {
      id: 155,
      question: "Что такое Outlet в React Router?",
      options: [
        "Рендерит дочерние маршруты",
        "Стилизует",
        "Управляет состоянием",
        "Обрабатывает события",
      ],
      correct: 0,
    },
    {
      id: 156,
      question: "Как использовать Outlet?",
      options: ["<Outlet />", "<Route />", "<Link />", "<NavLink />"],
      correct: 0,
    },
    {
      id: 157,
      question: "Что такое useRoutes?",
      options: [
        "Определяет маршруты",
        "Рендерит компонент",
        "Управляет состоянием",
        "Обрабатывает события",
      ],
      correct: 0,
    },
    {
      id: 158,
      question: "Как использовать useTransition?",
      options: [
        "Для плавных обновлений",
        "Для рендеринга",
        "Для стилизации",
        "Для состояния",
      ],
      correct: 0,
    },
    {
      id: 159,
      question: "Что такое startTransition?",
      options: [
        "Отмечает некритичные обновления",
        "Рендерит компонент",
        "Управляет состоянием",
        "Обрабатывает события",
      ],
      correct: 0,
    },
    {
      id: 160,
      question: "Как использовать useDeferredValue?",
      options: [
        "Откладывает значение",
        "Рендерит компонент",
        "Управляет состоянием",
        "Обрабатывает события",
      ],
      correct: 0,
    },
    {
      id: 161,
      question: "Что такое useId?",
      options: [
        "Генерирует уникальный ID",
        "Рендерит компонент",
        "Управляет состоянием",
        "Обрабатывает события",
      ],
      correct: 0,
    },
    {
      id: 162,
      question: "Как использовать PropTypes для функции?",
      options: [
        "PropTypes.func",
        "PropTypes.function",
        "Оба",
        "PropTypes.callback",
      ],
      correct: 2,
    },
    {
      id: 163,
      question: "Что такое React.Children.only?",
      options: [
        "Проверяет одного ребенка",
        "Перебирает детей",
        "Стилизует",
        "Рендерит",
      ],
      correct: 0,
    },
    {
      id: 164,
      question: "Как использовать PropTypes для объекта?",
      options: [
        "PropTypes.object",
        "PropTypes.shape",
        "Оба",
        "PropTypes.collection",
      ],
      correct: 2,
    },
    {
      id: 165,
      question: "Что такое React.forwardRef?",
      options: [
        "Передает ref в дочерний компонент",
        "Создает ref",
        "Управляет состоянием",
        "Обрабатывает события",
      ],
      correct: 0,
    },
    {
      id: 166,
      question: "Какой атрибут для событий мыши?",
      options: ["onMouseOver", "onHover", "onMouse", "onMouseEnter"],
      correct: 0,
    },
    {
      id: 167,
      question: "Что такое defaultValue в input?",
      options: ["Начальное значение", "Состояние", "Стиль", "Событие"],
      correct: 0,
    },
    {
      id: 168,
      question: "Как использовать value в controlled input?",
      options: [
        "value={state}",
        "value={props}",
        "defaultValue={state}",
        "setValue(state)",
      ],
      correct: 0,
    },
    {
      id: 169,
      question: "Что такое dangerouslySetInnerHTML?",
      options: [
        "Вставляет HTML",
        "Стилизует",
        "Рендерит",
        "Управляет состоянием",
      ],
      correct: 0,
    },
    {
      id: 170,
      question: "Какой риск у dangerouslySetInnerHTML?",
      options: [
        "XSS-атаки",
        "Ошибки рендеринга",
        "Потеря состояния",
        "Стилизация",
      ],
      correct: 0,
    },
    {
      id: 171,
      question: "Что такое React.Children.toArray?",
      options: [
        "Преобразует детей в массив",
        "Стилизует",
        "Рендерит",
        "Управляет состоянием",
      ],
      correct: 0,
    },
    {
      id: 172,
      question: "Как использовать aria-label?",
      options: [
        "Для доступности",
        "Для стилизации",
        "Для роутинга",
        "Для состояния",
      ],
      correct: 0,
    },
    {
      id: 173,
      question: "Что такое useReducer с initialState?",
      options: [
        "Инициализация состояния",
        "Рендеринг",
        "Стилизация",
        "События",
      ],
      correct: 0,
    },
    {
      id: 174,
      question: "Как использовать Redux с async?",
      options: ["Redux Thunk", "useEffect", "useState", "useContext"],
      correct: 0,
    },
    {
      id: 175,
      question: "Что такое Redux DevTools?",
      options: ["Отладка состояния", "Рендеринг", "Стилизация", "События"],
      correct: 0,
    },
    {
      id: 176,
      question: "Как установить Redux DevTools?",
      options: [
        "npm install redux-devtools-extension",
        "npm add devtools",
        "yarn add react",
        "npm install debug",
      ],
      correct: 0,
    },
    {
      id: 177,
      question: "Как использовать useRef для значения?",
      options: ["ref.current", "ref.value", "ref.element", "ref.dom"],
      correct: 0,
    },
    {
      id: 178,
      question: "Что такое React.cloneElement?",
      options: [
        "Клонирует элемент",
        "Рендерит компонент",
        "Управляет состоянием",
        "Обрабатывает события",
      ],
      correct: 0,
    },
    {
      id: 179,
      question: "Как использовать NavLink activeClassName?",
      options: [
        "activeClassName='active'",
        "className='active'",
        "style='active'",
        "useActive()",
      ],
      correct: 0,
    },
    {
      id: 180,
      question: "Что такое React.memo с props?",
      options: [
        "Сравнивает props",
        "Рендерит компонент",
        "Управляет состоянием",
        "Обрабатывает события",
      ],
      correct: 0,
    },
    {
      id: 181,
      question: "Как использовать React.memo с кастомной логикой?",
      options: ["areEqual функция", "useMemo", "useCallback", "useState"],
      correct: 0,
    },
    {
      id: 182,
      question: "Что такое React.Children.forEach?",
      options: [
        "Перебирает детей",
        "Стилизует",
        "Рендерит",
        "Управляет состоянием",
      ],
      correct: 0,
    },
    {
      id: 183,
      question: "Как использовать PropTypes.required?",
      options: ["isRequired", "required", "must", "need"],
      correct: 0,
    },
    {
      id: 184,
      question: "Что такое React.createRef vs useRef?",
      options: [
        "useRef для функциональных",
        "createRef для функциональных",
        "Оба одинаковы",
        "useRef для классов",
      ],
      correct: 0,
    },
    {
      id: 185,
      question: "Как использовать useEffect с зависимостями?",
      options: ["[deps]", "deps", "useDeps()", "setDeps()"],
      correct: 0,
    },
    {
      id: 186,
      question: "Что такое React.Fragment с key?",
      options: ["Список без DOM", "Рендеринг", "Стилизация", "Состояние"],
      correct: 0,
    },
    {
      id: 187,
      question: "Как использовать key в Fragment?",
      options: [
        "<Fragment key={id}>",
        "<Fragment id={id}>",
        "<KeyFragment>",
        "useFragment()",
      ],
      correct: 0,
    },
    {
      id: 188,
      question: "Что такое ReactDOM.createRoot?",
      options: [
        "Создает корень для рендеринга",
        "Рендерит компонент",
        "Управляет состоянием",
        "Обрабатывает события",
      ],
      correct: 0,
    },
    {
      id: 189,
      question: "Как использовать ReactDOM.createRoot?",
      options: [
        "createRoot(document.getElementById('root')).render()",
        "ReactDOM.render()",
        "createRoot()",
        "useRoot()",
      ],
      correct: 0,
    },
    {
      id: 190,
      question: "Что такое React 18 concurrent rendering?",
      options: [
        "Одновременный рендеринг",
        "Обычный рендеринг",
        "Стилизация",
        "Состояние",
      ],
      correct: 0,
    },
    {
      id: 191,
      question: "Какой хук для кастомных хуков?",
      options: ["Любой хук", "useCustom", "useState", "useEffect"],
      correct: 0,
    },
    {
      id: 192,
      question: "Что такое React.Children.only?",
      options: [
        "Проверяет одного ребенка",
        "Перебирает детей",
        "Стилизует",
        "Рендерит",
      ],
      correct: 0,
    },
    {
      id: 193,
      question: "Как использовать PropTypes для объекта?",
      options: [
        "PropTypes.object",
        "PropTypes.shape",
        "Оба",
        "PropTypes.collection",
      ],
      correct: 2,
    },
    {
      id: 194,
      question: "Что такое React.forwardRef?",
      options: [
        "Передает ref в дочерний компонент",
        "Создает ref",
        "Управляет состоянием",
        "Обрабатывает события",
      ],
      correct: 0,
    },
    {
      id: 195,
      question: "Какой атрибут для событий мыши?",
      options: ["onMouseOver", "onHover", "onMouse", "onMouseEnter"],
      correct: 0,
    },
    {
      id: 196,
      question: "Что такое defaultValue в input?",
      options: ["Начальное значение", "Состояние", "Стиль", "Событие"],
      correct: 0,
    },
    {
      id: 197,
      question: "Как использовать value в controlled input?",
      options: [
        "value={state}",
        "value={props}",
        "defaultValue={state}",
        "setValue(state)",
      ],
      correct: 0,
    },
    {
      id: 198,
      question: "Что такое dangerouslySetInnerHTML?",
      options: [
        "Вставляет HTML",
        "Стилизует",
        "Рендерит",
        "Управляет состоянием",
      ],
      correct: 0,
    },
    {
      id: 199,
      question: "Какой риск у dangerouslySetInnerHTML?",
      options: [
        "XSS-атаки",
        "Ошибки рендеринга",
        "Потеря состояния",
        "Стилизация",
      ],
      correct: 0,
    },
    {
      id: 200,
      question: "Что такое React.Children.toArray?",
      options: [
        "Преобразует детей в массив",
        "Стилизует",
        "Рендерит",
        "Управляет состоянием",
      ],
      correct: 0,
    },
  ],
  hard: [
    {
      id: 201,
      question: "Что такое Concurrent Rendering в React 18?",
      options: [
        "Параллельный рендеринг",
        "Обычный рендеринг",
        "Синхронный рендеринг",
        "Асинхронный рендеринг",
      ],
      correct: 0,
    },
    {
      id: 202,
      question: "Как использовать startTransition?",
      options: [
        "Отмечает некритичные обновления",
        "Рендерит компонент",
        "Управляет состоянием",
        "Обрабатывает события",
      ],
      correct: 0,
    },
    {
      id: 203,
      question: "Что такое useTransition?",
      options: ["Плавные обновления", "Рендеринг", "Стилизация", "Состояние"],
      correct: 0,
    },
    {
      id: 204,
      question: "Как работает useDeferredValue?",
      options: [
        "Откладывает значение",
        "Рендерит компонент",
        "Управляет состоянием",
        "Обрабатывает события",
      ],
      correct: 0,
    },
    {
      id: 205,
      question: "Что такое useId?",
      options: [
        "Генерирует уникальный ID",
        "Рендерит компонент",
        "Управляет состоянием",
        "Обрабатывает события",
      ],
      correct: 0,
    },
    {
      id: 206,
      question: "Что такое Server Components?",
      options: [
        "Рендеринг на сервере",
        "Клиентский рендеринг",
        "Стилизация",
        "Состояние",
      ],
      correct: 0,
    },
    {
      id: 207,
      question: "Как использовать Server Components?",
      options: [
        "'use server' directive",
        "'use client'",
        "useServer()",
        "useComponent()",
      ],
      correct: 0,
    },
    {
      id: 208,
      question: "Что такое React Suspense для данных?",
      options: [
        "Асинхронная загрузка данных",
        "Рендеринг",
        "Стилизация",
        "Состояние",
      ],
      correct: 0,
    },
    {
      id: 209,
      question: "Как тестировать Server Components?",
      options: [
        "Сложно, нужны серверные тесты",
        "Jest",
        "React Testing Library",
        "Оба b и c",
      ],
      correct: 0,
    },
    {
      id: 210,
      question: "Что такое useSyncExternalStore?",
      options: [
        "Синхронизация внешнего состояния",
        "Рендеринг",
        "Стилизация",
        "События",
      ],
      correct: 0,
    },
    {
      id: 211,
      question: "Как использовать useSyncExternalStore?",
      options: [
        "Для сторонних библиотек",
        "Для рендеринга",
        "Для стилизации",
        "Для состояния",
      ],
      correct: 0,
    },
    {
      id: 212,
      question: "Что такое React Fiber?",
      options: ["Механизм рендеринга", "Компонент", "Хук", "Состояние"],
      correct: 0,
    },
    {
      id: 213,
      question: "Как работает React Fiber?",
      options: [
        "Разделяет рендеринг",
        "Рендерит синхронно",
        "Управляет состоянием",
        "Обрабатывает события",
      ],
      correct: 0,
    },
    {
      id: 214,
      question: "Что такое Reconciliation?",
      options: ["Сравнение DOM", "Рендеринг", "Стилизация", "Состояние"],
      correct: 0,
    },
    {
      id: 215,
      question: "Как оптимизировать Reconciliation?",
      options: ["React.memo, keys", "useState", "useEffect", "useContext"],
      correct: 0,
    },
    {
      id: 216,
      question: "Что такое useImperativeHandle?",
      options: [
        "Настройка ref",
        "Управление состоянием",
        "Рендеринг",
        "Обработка событий",
      ],
      correct: 0,
    },
    {
      id: 217,
      question: "Как использовать useImperativeHandle?",
      options: ["С forwardRef", "С useRef", "С useState", "С useEffect"],
      correct: 0,
    },
    {
      id: 218,
      question: "Что такое React Profiler?",
      options: [
        "Измеряет производительность",
        "Рендерит компонент",
        "Управляет состоянием",
        "Обрабатывает события",
      ],
      correct: 0,
    },
    {
      id: 219,
      question: "Как использовать React Profiler?",
      options: ["<Profiler>", "<Profile>", "useProfiler()", "profile()"],
      correct: 0,
    },
    {
      id: 220,
      question: "Что такое hydration в SSR?",
      options: [
        "Привязка клиентского кода",
        "Рендеринг",
        "Стилизация",
        "Состояние",
      ],
      correct: 0,
    },
    {
      id: 221,
      question: "Как реализовать SSR?",
      options: [
        "ReactDOM.hydrate",
        "ReactDOM.render",
        "useSSR()",
        "serverRender()",
      ],
      correct: 0,
    },
    {
      id: 222,
      question: "Что такое static lifecycle methods?",
      options: ["Методы класса", "Функциональные методы", "Хуки", "События"],
      correct: 0,
    },
    {
      id: 223,
      question: "Как использовать getDerivedStateFromProps?",
      options: [
        "Для производного состояния",
        "Для рендеринга",
        "Для стилизации",
        "Для событий",
      ],
      correct: 0,
    },
    {
      id: 224,
      question: "Что такое getSnapshotBeforeUpdate?",
      options: [
        "Снимок перед обновлением",
        "Рендеринг",
        "Стилизация",
        "Состояние",
      ],
      correct: 0,
    },
    {
      id: 225,
      question: "Как использовать getSnapshotBeforeUpdate?",
      options: [
        "Перед componentDidUpdate",
        "После рендера",
        "До рендера",
        "При удалении",
      ],
      correct: 0,
    },
    {
      id: 226,
      question: "Что такое Error Boundaries?",
      options: ["Обработка ошибок", "Рендеринг", "Стилизация", "Состояние"],
      correct: 0,
    },
    {
      id: 227,
      question: "Как создать Error Boundary?",
      options: ["componentDidCatch", "useError", "catchError()", "useCatch()"],
      correct: 0,
    },
    {
      id: 228,
      question: "Что такое componentDidCatch?",
      options: [
        "Ловит ошибки рендера",
        "Рендерит компонент",
        "Управляет состоянием",
        "Обрабатывает события",
      ],
      correct: 0,
    },
    {
      id: 229,
      question: "Как использовать React.memo с props?",
      options: [
        "Сравнивает props",
        "Рендерит компонент",
        "Управляет состоянием",
        "Обрабатывает события",
      ],
      correct: 0,
    },
    {
      id: 230,
      question: "Что такое useReducer с lazy init?",
      options: ["Ленивая инициализация", "Рендеринг", "Стилизация", "События"],
      correct: 0,
    },
    {
      id: 231,
      question: "Как использовать lazy init в useReducer?",
      options: ["init функция", "useState", "useEffect", "useContext"],
      correct: 0,
    },
    {
      id: 232,
      question: "Что такое Redux Toolkit createAsyncThunk?",
      options: ["Асинхронные действия", "Рендеринг", "Стилизация", "Состояние"],
      correct: 0,
    },
    {
      id: 233,
      question: "Как использовать createAsyncThunk?",
      options: [
        "createAsyncThunk('type', fn)",
        "createThunk()",
        "asyncThunk()",
        "useThunk()",
      ],
      correct: 0,
    },
    {
      id: 234,
      question: "Что такое React DevTools Profiler?",
      options: [
        "Анализ производительности",
        "Рендеринг",
        "Стилизация",
        "Состояние",
      ],
      correct: 0,
    },
    {
      id: 235,
      question: "Как использовать React Suspense с данными?",
      options: [
        "С библиотеками данных",
        "С useState",
        "С useEffect",
        "С useContext",
      ],
      correct: 0,
    },
    {
      id: 236,
      question: "Что такое useTransition с Suspense?",
      options: ["Плавная загрузка", "Рендеринг", "Стилизация", "Состояние"],
      correct: 0,
    },
    {
      id: 237,
      question: "Как использовать useTransition с Suspense?",
      options: ["startTransition", "useState", "useEffect", "useContext"],
      correct: 0,
    },
    {
      id: 238,
      question: "Что такое React Concurrent Mode?",
      options: [
        "Режим параллельного рендеринга",
        "Рендеринг",
        "Стилизация",
        "Состояние",
      ],
      correct: 0,
    },
    {
      id: 239,
      question: "Как включить Concurrent Mode?",
      options: [
        "createRoot",
        "ReactDOM.render",
        "useConcurrent()",
        "useRoot()",
      ],
      correct: 0,
    },
    {
      id: 240,
      question: "Что такое React Hydration?",
      options: [
        "Привязка SSR к клиенту",
        "Рендеринг",
        "Стилизация",
        "Состояние",
      ],
      correct: 0,
    },
    {
      id: 241,
      question: "Как использовать ReactDOM.createPortal?",
      options: ["Рендеринг вне DOM", "Рендеринг", "Стилизация", "Состояние"],
      correct: 0,
    },
    {
      id: 242,
      question: "Что такое React Context Provider?",
      options: [
        "Предоставляет контекст",
        "Рендерит компонент",
        "Управляет состоянием",
        "Обрабатывает события",
      ],
      correct: 0,
    },
    {
      id: 243,
      question: "Как использовать Context Consumer?",
      options: ["<Context.Consumer>", "<Context>", "useContext()", "Оба a и c"],
      correct: 3,
    },
    {
      id: 244,
      question: "Что такое React.memo с кастомной логикой?",
      options: ["Сравнение props", "Рендеринг", "Стилизация", "Состояние"],
      correct: 0,
    },
    {
      id: 245,
      question: "Как использовать React.memo с кастомной логикой?",
      options: ["areEqual функция", "useMemo", "useCallback", "useState"],
      correct: 0,
    },
    {
      id: 246,
      question: "Что такое React StrictMode проверки?",
      options: [
        "Выявление устаревшего API",
        "Рендеринг",
        "Стилизация",
        "Состояние",
      ],
      correct: 0,
    },
    {
      id: 247,
      question: "Как использовать React.StrictMode?",
      options: ["<StrictMode>", "<Mode>", "useStrict()", "strictMode()"],
      correct: 0,
    },
    {
      id: 248,
      question: "Что такое React Fragment с key?",
      options: ["Список без DOM", "Рендеринг", "Стилизация", "Состояние"],
      correct: 0,
    },
    {
      id: 249,
      question: "Как использовать key в Fragment?",
      options: [
        "<Fragment key={id}>",
        "<Fragment id={id}>",
        "<KeyFragment>",
        "useFragment()",
      ],
      correct: 0,
    },
    {
      id: 250,
      question: "Что такое React Profiler onRender?",
      options: [
        "Callback производительности",
        "Рендеринг",
        "Стилизация",
        "Состояние",
      ],
      correct: 0,
    },
    {
      id: 251,
      question: "Как использовать onRender в Profiler?",
      options: [
        "onRender={(id, phase, duration) => {}}",
        "onRender={fn}",
        "useProfiler()",
        "profiler()",
      ],
      correct: 0,
    },
    {
      id: 252,
      question: "Что такое React Error Boundary fallback?",
      options: ["UI при ошибке", "Рендеринг", "Стилизация", "Состояние"],
      correct: 0,
    },
    {
      id: 253,
      question: "Как использовать Error Boundary fallback?",
      options: ["render fallback", "useError()", "catchError()", "useCatch()"],
      correct: 0,
    },
    {
      id: 254,
      question: "Что такое React SuspenseList?",
      options: [
        "Управление порядком загрузки",
        "Рендеринг",
        "Стилизация",
        "Состояние",
      ],
      correct: 0,
    },
    {
      id: 255,
      question: "Как использовать SuspenseList?",
      options: [
        "<SuspenseList>",
        "<Suspense>",
        "useSuspense()",
        "suspenseList()",
      ],
      correct: 0,
    },
    {
      id: 256,
      question: "Что такое React Concurrent Features?",
      options: [
        "Параллельные возможности",
        "Рендеринг",
        "Стилизация",
        "Состояние",
      ],
      correct: 0,
    },
    {
      id: 257,
      question: "Как использовать Concurrent Features?",
      options: [
        "createRoot, startTransition",
        "useState",
        "useEffect",
        "useContext",
      ],
      correct: 0,
    },
    {
      id: 258,
      question: "Что такое React Hydration Errors?",
      options: ["Несоответствие DOM", "Рендеринг", "Стилизация", "Состояние"],
      correct: 0,
    },
    {
      id: 259,
      question: "Как избежать Hydration Errors?",
      options: [
        "Синхронизация сервер-клиент",
        "useState",
        "useEffect",
        "useContext",
      ],
      correct: 0,
    },
    {
      id: 260,
      question: "Что такое React Server Components?",
      options: [
        "Компоненты на сервере",
        "Клиентские компоненты",
        "Стили",
        "Состояние",
      ],
      correct: 0,
    },
    {
      id: 261,
      question: "Как использовать Server Components?",
      options: [
        "'use server' directive",
        "'use client'",
        "useServer()",
        "useComponent()",
      ],
      correct: 0,
    },
    {
      id: 262,
      question: "Что такое React Streaming SSR?",
      options: ["Потоковый рендеринг", "Рендеринг", "Стилизация", "Состояние"],
      correct: 0,
    },
    {
      id: 263,
      question: "Как использовать Streaming SSR?",
      options: [
        "createRoot(), <Suspense>",
        "useState",
        "useEffect",
        "useContext",
      ],
      correct: 0,
    },
    {
      id: 264,
      question: "Что такое React Context displayName?",
      options: ["Имя для отладки", "Рендеринг", "Стилизация", "Состояние"],
      correct: 0,
    },
    {
      id: 265,
      question: "Как использовать Context displayName?",
      options: [
        "Context.displayName = 'Name'",
        "Context.name = 'Name'",
        "useContextName()",
        "contextName()",
      ],
      correct: 0,
    },
    {
      id: 266,
      question: "Что такое React.memo с forwardRef?",
      options: ["Мемоизация с ref", "Рендеринг", "Стилизация", "Состояние"],
      correct: 0,
    },
    {
      id: 267,
      question: "Как использовать memo с forwardRef?",
      options: [
        "React.memo(forwardRef())",
        "forwardRef(memo())",
        "useMemo()",
        "useForwardRef()",
      ],
      correct: 0,
    },
    {
      id: 268,
      question: "Что такое React Suspense для SSR?",
      options: ["Потоковая загрузка", "Рендеринг", "Стилизация", "Состояние"],
      correct: 0,
    },
    {
      id: 269,
      question: "Как использовать Suspense для SSR?",
      options: [
        "<Suspense fallback>",
        "<Suspense>",
        "useSuspense()",
        "suspenseSSR()",
      ],
      correct: 0,
    },
    {
      id: 270,
      question: "Что такое React DevTools?",
      options: ["Инструмент отладки", "Рендеринг", "Стилизация", "Состояние"],
      correct: 0,
    },
    {
      id: 271,
      question: "Как установить React DevTools?",
      options: [
        "Расширение браузера",
        "npm install devtools",
        "yarn add devtools",
        "npm add react",
      ],
      correct: 0,
    },
    {
      id: 272,
      question: "Что такое React Concurrent Scheduler?",
      options: ["Планировщик задач", "Рендеринг", "Стилизация", "Состояние"],
      correct: 0,
    },
    {
      id: 273,
      question: "Как работает Concurrent Scheduler?",
      options: [
        "Приоритизирует рендер",
        "Рендерит синхронно",
        "Управляет состоянием",
        "Обрабатывает события",
      ],
      correct: 0,
    },
    {
      id: 274,
      question: "Что такое React Hydration Partial?",
      options: ["Частичная гидратация", "Suspense", "createRoot", "useState"],
      correct: 0,
    },
    {
      id: 275,
      question: "Как использовать Partial Hydration?",
      options: ["Suspense, createRoot", "useState", "useEffect", "useContext"],
      correct: 0,
    },
    {
      id: 276,
      question: "Что такое React Context defaultValue?",
      options: ["Значение по умолчанию", "Рендеринг", "Стилизация", "События"],
      correct: 0,
    },
    {
      id: 277,
      question: "Как использовать Context defaultValue?",
      options: [
        "createContext(defaultValue)",
        "useContext()",
        "contextValue()",
        "useDefaultValue()",
      ],
      correct: 0,
    },
    {
      id: 278,
      question: "Что такое React.memo с children?",
      options: ["Мемоизация с детьми", "Рендеринг", "Стилизация", "Состояние"],
      correct: 0,
    },
    {
      id: 279,
      question: "Как использовать memo с children?",
      options: [
        "React.memo(Component)",
        "useMemo()",
        "useCallback()",
        "useState()",
      ],
      correct: 0,
    },
    {
      id: 280,
      question: "Что такое React Profiler id?",
      options: [
        "Уникальный ID компонента",
        "Рендеринг",
        "Стилизация",
        "Состояние",
      ],
      correct: 0,
    },
    {
      id: 281,
      question: "Как использовать Profiler id?",
      options: [
        '<Profiler id="name">',
        "<Profile>",
        "useProfiler()",
        "profiler()",
      ],
      correct: 0,
    },
    {
      id: 282,
      question: "Что такое React Suspense revealOrder?",
      options: ["Порядок загрузки", "Рендеринг", "Стилизация", "Состояние"],
      correct: 0,
    },
    {
      id: 283,
      question: "Как использовать revealOrder?",
      options: [
        "<SuspenseList revealOrder>",
        "<Suspense>",
        "useSuspense()",
        "suspenseList()",
      ],
      correct: 0,
    },
    {
      id: 284,
      question: "Что такое React Error Boundary static?",
      options: [
        "Статические методы обработки",
        "Рендеринг",
        "Стилизация",
        "Состояние",
      ],
      correct: 0,
    },
    {
      id: 285,
      question: "Как использовать Error Boundary static?",
      options: [
        "getDerivedStateFromError",
        "componentDidCatch",
        "Оба а и b",
        "useError()",
      ],
      correct: 2,
    },
    {
      id: 286,
      question: "Что такое React Concurrent Features?",
      options: [
        "Параллельные возможности",
        "Рендеринг",
        "Стилизация",
        "Состояние",
      ],
      correct: 0,
    },
    {
      id: 287,
      question: "Как использовать Concurrent Features?",
      options: [
        "createRoot, startTransition",
        "useState",
        "useEffect",
        "useContext",
      ],
      correct: 0,
    },
    {
      id: 288,
      question: "Что такое React Hydration Errors?",
      options: ["Несоответствие DOM", "Рендеринг", "Стилизация", "Состояние"],
      correct: 0,
    },
    {
      id: 289,
      question: "Как избежать Hydration Errors?",
      options: [
        "Синхронизация сервер-клиент",
        "useState",
        "useEffect",
        "useMemo",
      ],
      correct: 0,
    },
    {
      id: 290,
      question: "Что такое React Server Components?",
      options: [
        "Компоненты на сервере",
        "Клиентские компоненты",
        "Стили",
        "Состояние",
      ],
      correct: 0,
    },
    {
      id: 291,
      question: "Как использовать Server Components?",
      options: [
        "'use server' directive",
        "'use client'",
        "useServer()",
        "useComponent()",
      ],
      correct: 0,
    },
    {
      id: 292,
      question: "Что такое React Streaming SSR?",
      options: ["Потоковый рендеринг", "Рендеринг", "Стилизация", "Состояние"],
      correct: 0,
    },
    {
      id: 293,
      question: "Как использовать Streaming SSR?",
      options: [
        "createRoot, <Suspense>",
        "useState",
        "useEffect",
        "useContext",
      ],
      correct: 0,
    },
    {
      id: 294,
      question: "Что такое React Context displayName?",
      options: ["Имя для отладки", "Рендеринг", "Стилизация", "Состояние"],
      correct: 0,
    },
    {
      id: 295,
      question: "Как использовать Context displayName?",
      options: [
        "Context.displayName = 'Name'",
        "Context.name = 'Name'",
        "useContextName()",
        "contextName()",
      ],
      correct: 0,
    },
    {
      id: 296,
      question: "Что такое React.memo с forwardRef?",
      options: ["Мемоизация с ref", "Рендеринг", "Стилизация", "Состояние"],
      correct: 0,
    },
    {
      id: 297,
      question: "Как использовать memo с forwardRef?",
      options: [
        "React.memo(forwardRef())",
        "forwardRef(memo())",
        "useMemo()",
        "useForwardRef()",
      ],
      correct: 0,
    },
    {
      id: 298,
      question: "Что такое React Suspense для SSR?",
      options: ["Потоковая загрузка", "Рендеринг", "Стилизация", "Состояние"],
      correct: 0,
    },
    {
      id: 299,
      question: "Как использовать Suspense для SSR?",
      options: [
        "<Suspense fallback>",
        "<Suspense>",
        "useSuspense()",
        "suspenseSSR()",
      ],
      correct: 0,
    },
    {
      id: 300,
      question: "Что такое React DevTools?",
      options: ["Инструмент отладки", "Рендеринг", "Стилизация", "Состояние"],
      correct: 0,
    },
  ],
};

const TestingReact = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [showResults, setShowResult] = useState(false);
  const [difficulty, setDifficulty] = useState("easy");
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const selectedQuestions = rawQuestions[difficulty].map((q) => ({
      ...q,
      ...shuffleOptions(q.options, q.correct),
    }));
    setQuestions(selectedQuestions);
    setCurrentQuestionIndex(0);
    setSelectedAnswers([]);
    setShowResult(false);
    setShowCorrectAnswer(false);
  }, [difficulty]);

  const handleAnswerSelect = (index) => {
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = index === currentQuestion.newCorrectIndex;

    setSelectedAnswers([
      ...selectedAnswers,
      {
        questionId: currentQuestion.id,
        selectedAnswer: index,
        isCorrect: isCorrect,
      },
    ]);

    if (!isCorrect) {
      setShowCorrectAnswer(true);
      setTimeout(() => {
        setShowCorrectAnswer(false);
        if (currentQuestionIndex < questions.length - 1) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
          setShowResult(true);
        }
      }, 1000);
    } else {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setShowResult(true);
      }
    }
  };

  const calculateScore = () => {
    return selectedAnswers.reduce(
      (score, answer) => score + (answer.isCorrect ? 1 : 0),
      0
    );
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers([]);
    setShowResult(false);
    setShowCorrectAnswer(false);
    const shuffledQuestions = rawQuestions[difficulty].map((q) => ({
      ...q,
      ...shuffleOptions(q.options, q.correct),
    }));
    setQuestions(shuffledQuestions);
  };

  const handleDifficultyChange = (newDifficulty) => {
    setDifficulty(newDifficulty);
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl w-full"
      >
        <div className="flex items-center mb-4">
          <FaArrowLeft
            className="text-2xl cursor-pointer hover:text-blue-400"
            onClick={() => navigate(-1)}
          />
          <h1 className="text-3xl font-bold ml-auto text-center">
            React Testing
          </h1>
        </div>

        {!showResults && currentQuestion && (
          <div className="bg-gray-800 p-8 rounded-lg shadow-xl">
            <div className="flex justify-between mb-6">
              <span>
                Вопрос {currentQuestionIndex + 1} / {questions.length}
              </span>
              <span>
                Сложность:{" "}
                {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
              </span>
            </div>

            <h2 className="text-xl mb-6">{currentQuestion.question}</h2>

            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => {
                const isSelected =
                  selectedAnswers.find(
                    (a) => a.questionId === currentQuestion.id
                  )?.selectedAnswer === index;
                const isCorrect = selectedAnswers.find(
                  (a) => a.questionId === currentQuestion.id
                )?.isCorrect;
                const isCorrectOption =
                  showCorrectAnswer &&
                  index === currentQuestion.newCorrectIndex;

                return (
                  <motion.button
                    key={index}
                    className={`w-full p-4 text-left rounded-md transition-all duration-300 
          ${isSelected && isCorrect ? "bg-green-600" : ""} 
          ${isSelected && !isCorrect ? "bg-red-600" : ""} 
          ${isCorrectOption ? "bg-green-500 font-semibold" : ""} 
          ${
            !isSelected && !isCorrectOption
              ? "bg-gray-700 hover:bg-gray-600"
              : ""
          }`}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={!!isSelected || showCorrectAnswer}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {option}
                  </motion.button>
                );
              })}
            </div>
          </div>
        )}

        {showResults && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gray-800 p-8 rounded-lg shadow-xl text-center"
          >
            <h2 className="text-2xl font-bold mb-4">Результаты</h2>
            <p className="text-xl mb-6">
              Ваш результат: {calculateScore()} из {questions.length}
            </p>

            <div className="space-y-6 mb-6 text-left">
              {questions.map((q, qIdx) => {
                const userAnswer = selectedAnswers.find(
                  (a) => a.questionId === q.id
                );
                return (
                  <div key={q.id}>
                    <p className="font-semibold">
                      {qIdx + 1}. {q.question}
                    </p>
                    <p
                      className={`mt-2 ${
                        userAnswer?.isCorrect
                          ? "text-green-400"
                          : "text-red-400"
                      }`}
                    >
                      Ваш ответ:{" "}
                      {userAnswer
                        ? q.options[userAnswer.selectedAnswer]
                        : "Нет ответа"}
                    </p>
                    {!userAnswer?.isCorrect && (
                      <p className="text-green-400">
                        Правильный ответ: {q.options[q.correct]}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            <motion.button
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition-all duration-300"
              onClick={handleRestart}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Начать заново
            </motion.button>
          </motion.div>
        )}

        {!showResults && (
          <div className="mt-6 flex justify-center gap-4">
            <button
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                difficulty === "easy"
                  ? "bg-blue-600"
                  : "bg-gray-600 hover:bg-blue-500"
              }`}
              onClick={() => handleDifficultyChange("easy")}
            >
              Easy
            </button>
            <button
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                difficulty === "medium"
                  ? "bg-blue-600"
                  : "bg-gray-600 hover:bg-blue-500"
              }`}
              onClick={() => handleDifficultyChange("medium")}
            >
              Medium
            </button>
            <button
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                difficulty === "hard"
                  ? "bg-blue-600"
                  : "bg-gray-600 hover:bg-blue-500"
              }`}
              onClick={() => handleDifficultyChange("hard")}
            >
              Hard
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default TestingReact;

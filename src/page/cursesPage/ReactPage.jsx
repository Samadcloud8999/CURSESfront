import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaReact,
  FaCode,
  FaCogs,
  FaSync,
  FaDatabase,
  FaArrowRight,
  FaWindowMaximize,
  FaServer,
  FaRocket,
  FaShieldAlt,
  FaPuzzlePiece,
  FaUsers,
  FaStar,
} from "react-icons/fa";

const Section = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className="mt-8"
    >
      {children}
    </motion.div>
  );
};

const ReactPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto text-white p-6 bg-gray-900"
    >
      <motion.a
        href="/testra"
        initial={{ scale: 0.8 }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed top-12 sm:top-16 right-4 bg-black hover:bg-blue-900 text-white font-bold py-1.5 px-3 sm:py-2 sm:px-4 rounded-lg text-xs sm:text-sm md:text-base z-50 shadow-lg"
      >
        Пройти тест
      </motion.a>

      <div className="content">
        <motion.h1
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="text-3xl md:text-5xl font-bold mb-6 flex items-center gap-2"
        >
          <FaReact className="text-cyan-400" /> React
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-base"
        >
          React — это библиотека JavaScript с открытым исходным кодом,
          разработанная Facebook в 2013 году, предназначенная для создания
          интерактивных пользовательских интерфейсов, особенно для
          одностраничных приложений (SPA). React использует компонентный подход,
          позволяя разработчикам создавать переиспользуемые элементы интерфейса,
          которые обновляются эффективно благодаря виртуальному DOM. React
          популярен благодаря своей простоте, производительности и гибкости, а
          также поддержке огромного сообщества и экосистемы.
        </motion.p>

        <Section>
          <h2 className="text-2xl md:text-3xl font-semibold">История React</h2>
          <p className="mt-4 text-base">
            React был создан Джорданом Уолком, инженером Facebook, для решения
            проблем с производительностью интерфейсов. Впервые он был
            представлен в 2013 году на JSConf US. В 2015 году был выпущен React
            Native для мобильной разработки. С выходом React 16 (2017) появились
            волокна (Fiber), улучшившие рендеринг. React 18 (2022) ввел
            конкурентный рендеринг, улучшив производительность и отзывчивость
            приложений.
          </p>
          <p className="mt-4 text-base">
            React стал стандартом для веб-разработки благодаря поддержке таких
            компаний, как Airbnb, Netflix и Instagram. Согласно опросам Stack
            Overflow, React остается одной из самых популярных библиотек среди
            разработчиков.
          </p>
          <div className="flex justify-center mt-4">
            <FaCode className="text-cyan-400 text-6xl" />
          </div>
        </Section>

        <Section>
          <h2 className="text-2xl md:text-3xl font-semibold">
            Установка и настройка React
          </h2>
          <p className="mt-4 text-base">
            Для начала работы с React необходимо установить Node.js
            (рекомендуется версия LTS) и npm (или yarn/pnpm). Основной способ
            создания React-приложения — использование инструмента Create React
            App (CRA) или современных альтернатив, таких как Vite или Next.js.
          </p>
          <h3 className="text-xl font-semibold mt-4">
            Шаги установки с Create React App:
          </h3>
          <ol className="list-decimal ml-6 mt-2 text-base">
            <li>
              Убедитесь, что Node.js установлен: <code>node -v</code> и{" "}
              <code>npm -v</code>.
            </li>
            <li>
              Установите Create React App глобально:{" "}
              <code>npm install -g create-react-app</code>.
            </li>
            <li>
              Создайте новое приложение:{" "}
              <code>npx create-react-app my-app</code>.
            </li>
            <li>
              Перейдите в папку проекта: <code>cd my-app</code>.
            </li>
            <li>
              Запустите приложение: <code>npm start</code>.
            </li>
          </ol>
          <pre className="bg-gray-800 p-4 rounded mt-4 text-sm overflow-x-auto">
            {`# Установка Node.js (пример для Ubuntu)
sudo apt update
sudo apt install nodejs npm

# Создание нового React-приложения
npx create-react-app my-app
cd my-app
npm start`}
          </pre>
          <h3 className="text-xl font-semibold mt-4">Альтернатива: Vite</h3>
          <p className="mt-2 text-base">
            Vite — это более быстрый инструмент для создания React-приложений.
            Установка:
          </p>
          <pre className="bg-gray-800 p-4 rounded mt-4 text-sm overflow-x-auto">
            {`npm create vite@latest my-app -- --template react
cd my-app
npm install
npm run dev`}
          </pre>
          <h3 className="text-xl font-semibold mt-4">
            Необходимые плагины и инструменты
          </h3>
          <p className="mt-2 text-base">
            Для эффективной работы с React рекомендуется установить следующие
            плагины и расширения:
          </p>
          <ul className="list-disc ml-6 mt-2 text-base">
            <li>
              <strong>ESLint</strong>: Плагин для проверки кода. Установка:{" "}
              <code>npm install eslint --save-dev</code>, затем{" "}
              <code>npx eslint --init</code>.
            </li>
            <li>
              <strong>Prettier</strong>: Форматирование кода. Установка:{" "}
              <code>npm install prettier --save-dev</code>.
            </li>
            <li>
              <strong>React Developer Tools</strong>: Расширение для браузера
              (Chrome/Firefox) для отладки компонентов.
            </li>
            <li>
              <strong>Tailwind CSS</strong> (опционально): Для стилизации.
              Установка: <code>npm install -D tailwindcss</code>, затем
              настройка конфигурации.
            </li>
            <li>
              <strong>VS Code Extensions</strong>: "ESLint", "Prettier",
              "JavaScript (ES6) code snippets".
            </li>
          </ul>
          <p className="mt-4 text-base">
            После установки проекта структура выглядит так:
          </p>
          <pre className="bg-gray-800 p-4 rounded mt-4 text-sm overflow-x-auto">
            {`my-app/
├── node_modules/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md`}
          </pre>
          <p className="mt-4 text-base">
            Основной файл для работы — <code>src/App.js</code>, где вы пишете
            компоненты. Точка входа — <code>src/index.js</code>, где React
            рендерит приложение в <code>index.html</code>.
          </p>
          <div className="flex justify-center mt-4">
            <FaCogs className="text-blue-400 text-6xl" />
          </div>
        </Section>

        <Section>
          <h2 className="text-2xl md:text-3xl font-semibold">
            Компоненты в React
          </h2>
          <p className="mt-4 text-base">
            Компоненты — это строительные блоки React. Они могут быть
            функциональными или классовыми. Функциональные компоненты (с хуками)
            — современный стандарт.
          </p>
          <h3 className="text-xl font-semibold mt-4">
            Функциональный компонент
          </h3>
          <pre className="bg-gray-800 p-4 rounded mt-4 text-sm overflow-x-auto">
            {`import React from "react";

const Welcome = ({ name }) => {
  return <h1>Привет, {name}!</h1>;
};

export default Welcome;`}
          </pre>
          <h3 className="text-xl font-semibold mt-4">Классовый компонент</h3>
          <pre className="bg-gray-800 p-4 rounded mt-4 text-sm overflow-x-auto">
            {`import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return <h1>Привет, {this.props.name}!</h1>;
  }
}

export default Welcome;`}
          </pre>
          <p className="mt-4 text-base">
            Компоненты принимают props (свойства) для передачи данных. Они
            должны быть чистыми функциями, не изменяющими входные данные.
          </p>
          <div className="flex justify-center mt-4">
            <FaPuzzlePiece className="text-green-400 text-6xl" />
          </div>
        </Section>

        <Section>
          <h2 className="text-2xl md:text-3xl font-semibold">JSX</h2>
          <p className="mt-4 text-base">
            JSX — это расширение синтаксиса JavaScript, похожее на HTML, но с
            возможностью использовать JavaScript-выражения. JSX компилируется в
            вызовы <code>React.createElement</code>.
          </p>
          <pre className="bg-gray-800 p-4 rounded mt-4 text-sm overflow-x-auto">
            {`const element = <h1 className="title">Hello, World!</h1>;

// Компилируется в:
const element = React.createElement("h1", { className: "title" }, "Hello, World!");`}
          </pre>
          <p className="mt-4 text-base">
            Правила JSX:
            <ul className="list-disc ml-6 mt-2 text-base">
              <li>
                Все теги должны быть закрыты: <code>&lt;img /&gt;</code>.
              </li>
              <li>
                Используйте <code>className</code> вместо <code>class</code>.
              </li>
              <li>
                JS-выражения пишутся в фигурных скобках: <code>expression</code>
                .
              </li>
              <li>Компоненты начинаются с заглавной буквы.</li>
            </ul>
          </p>
          <div className="flex justify-center mt-4">
            <FaCode className="text-yellow-400 text-6xl" />
          </div>
        </Section>

        <Section>
          <h2 className="text-2xl md:text-3xl font-semibold">Хуки</h2>
          <p className="mt-4 text-base">
            Хуки, представленные в React 16.8, позволяют использовать состояние
            и другие возможности React в функциональных компонентах. Основные
            хуки: <code>useState</code>, <code>useEffect</code>,{" "}
            <code>useContext</code>.
          </p>
          <h3 className="text-xl font-semibold mt-4">useState</h3>
          <pre className="bg-gray-800 p-4 rounded mt-4 text-sm overflow-x-auto">
            {`import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Счетчик: {count}</p>
      <button onClick={() => setCount(count + 1)}>Увеличить</button>
    </div>
  );
};

export default Counter;`}
          </pre>
          <h3 className="text-xl font-semibold mt-4">useEffect</h3>
          <p className="mt-2 text-base">
            Хук <code>useEffect</code> используется для побочных эффектов, таких
            как запросы данных или подписки.
          </p>
          <pre className="bg-gray-800 p-4 rounded mt-4 text-sm overflow-x-auto">
            {`import React, { useState, useEffect } from "react";

const DataFetcher = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://api.example.com/data")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []); // Пустой массив зависимостей — выполняется один раз

  return <div>{data ? JSON.stringify(data) : "Загрузка..."}</div>;
};

export default DataFetcher;`}
          </pre>
          <div className="flex justify-center mt-4">
            <FaSync className="text-purple-400 text-6xl" />
          </div>
        </Section>

        <Section>
          <h2 className="text-2xl md:text-3xl font-semibold">
            Управление состоянием
          </h2>
          <p className="mt-4 text-base">
            React предоставляет встроенные механизмы управления состоянием через{" "}
            <code>useState</code> и <code>useReducer</code>. Для сложных
            приложений используют библиотеки, такие как Redux, Zustand или MobX.
          </p>
          <h3 className="text-xl font-semibold mt-4">useReducer</h3>
          <pre className="bg-gray-800 p-4 rounded mt-4 text-sm overflow-x-auto">
            {`import React, { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Счетчик: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>Увеличить</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Уменьшить</button>
    </div>
  );
};

export default Counter;`}
          </pre>
          <h3 className="text-xl font-semibold mt-4">Redux</h3>
          <p className="mt-2 text-base">
            Redux — популярная библиотека для глобального состояния. Установка:{" "}
            <code>npm install redux react-redux</code>.
          </p>
          <pre className="bg-gray-800 p-4 rounded mt-4 text-sm overflow-x-auto">
            {`import { createStore } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";

const initialState = { count: 0 };

function reducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    default:
      return state;
  }
}

const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Счетчик: {count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Увеличить</button>
    </div>
  );
};

export default App;`}
          </pre>
          <div className="flex justify-center mt-4">
            <FaDatabase className="text-red-400 text-6xl" />
          </div>
        </Section>

        <Section>
          <h2 className="text-2xl md:text-3xl font-semibold">Роутинг</h2>
          <p className="mt-4 text-base">
            Для навигации в React-приложениях используется библиотека React
            Router. Установка: <code>npm install react-router-dom</code>.
          </p>
          <pre className="bg-gray-800 p-4 rounded mt-4 text-sm overflow-x-auto">
            {`import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

const App = () => (
  <BrowserRouter>
    <nav>
      <Link to="/">Главная</Link> | <Link to="/about">О нас</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>
);

const Home = () => <h1>Главная</h1>;
const About = () => <h1>О нас</h1>;

export default App;`}
          </pre>
          <div className="flex justify-center mt-4">
            <FaArrowRight className="text-blue-400 text-6xl" />
          </div>
        </Section>

        <Section>
          <h2 className="text-2xl md:text-3xl font-semibold">Стилизация</h2>
          <p className="mt-4 text-base">
            React поддерживает несколько подходов к стилизации: CSS-файлы,
            CSS-модули, инлайн-стили, библиотеки, такие как Tailwind CSS или
            styled-components.
          </p>
          <h3 className="text-xl font-semibold mt-4">CSS-модули</h3>
          <pre className="bg-gray-800 p-4 rounded mt-4 text-sm overflow-x-auto">
            {`// Button.module.css
.button {
  background-color: #4caf50;
  color: white;
  padding: 10px;
}

// Button.js
import styles from "./Button.module.css";

const Button = () => <button className={styles.button}>Нажми</button>;

export default Button;`}
          </pre>
          <h3 className="text-xl font-semibold mt-4">Styled-components</h3>
          <p className="mt-2 text-base">
            Установка: <code>npm install styled-components</code>.
          </p>
          <pre className="bg-gray-800 p-4 rounded mt-4 text-sm overflow-x-auto">
            {`import styled from "styled-components";

const Button = styled.button\`
  background-color: #4caf50;
  color: white;
  padding: 10px;
\`;

const App = () => <Button>Нажми</Button>;

export default App;`}
          </pre>
          <div className="flex justify-center mt-4">
            <FaWindowMaximize className="text-purple-400 text-6xl" />
          </div>
        </Section>

        <Section>
          <h2 className="text-2xl md:text-3xl font-semibold">
            Оптимизация производительности
          </h2>
          <p className="mt-4 text-base">
            React предоставляет инструменты для оптимизации, такие как{" "}
            <code>React.memo</code>, <code>useCallback</code>, и{" "}
            <code>useMemo</code>.
          </p>
          <h3 className="text-xl font-semibold mt-4">React.memo</h3>
          <pre className="bg-gray-800 p-4 rounded mt-4 text-sm overflow-x-auto">
            {`import React, { memo } from "react";

const Child = memo(({ value }) => {
  console.log("Рендер Child");
  return <div>{value}</div>;
});

const Parent = () => {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Увеличить</button>
      <Child value="Константа" />
    </div>
  );
};

export default Parent;`}
          </pre>
          <h3 className="text-xl font-semibold mt-4">useCallback и useMemo</h3>
          <pre className="bg-gray-800 p-4 rounded mt-4 text-sm overflow-x-auto">
            {`import React, { useState, useCallback, useMemo } from "react";

const ExpensiveComponent = ({ compute }) => {
  const result = useMemo(() => compute(), [compute]);
  return <div>Результат: {result}</div>;
};

const Parent = () => {
  const [count, setCount] = useState(0);
  const compute = useCallback(() => {
    // Дорогостоящая операция
    return count * 2;
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Увеличить</button>
      <ExpensiveComponent compute={compute} />
    </div>
  );
};

export default Parent;`}
          </pre>
          <div className="flex justify-center mt-4">
            <FaRocket className="text-cyan-400 text-6xl" />
          </div>
        </Section>

        <Section>
          <h2 className="text-2xl md:text-3xl font-semibold">Тестирование</h2>
          <p className="mt-4 text-base">
            React-приложения тестируются с использованием библиотек, таких как
            Jest и React Testing Library. Установка:{" "}
            <code>npm install --save-dev @testing-library/react jest</code>.
          </p>
          <pre className="bg-gray-800 p-4 rounded mt-4 text-sm overflow-x-auto">
            {`import { render, screen } from "@testing-library/react";
import Button from "./Button";

test("рендерит кнопку", () => {
  render(<Button>Нажми</Button>);
  const buttonElement = screen.getByText(/Нажми/i);
  expect(buttonElement).toBeInTheDocument();
});`}
          </pre>
          <div className="flex justify-center mt-4">
            <FaShieldAlt className="text-green-400 text-6xl" />
          </div>
        </Section>

        <Section>
          <h2 className="text-2xl md:text-3xl font-semibold">
            Следующие шаги после установки
          </h2>
          <p className="mt-4 text-base">
            После создания проекта начните с редактирования{" "}
            <code>src/App.js</code>. Создайте новые компоненты в папке{" "}
            <code>src/components</code>. Для стилизации добавьте CSS-файлы или
            используйте Tailwind/styled-components. Для маршрутизации установите
            React Router. Для управления состоянием подключите Redux или Context
            API. Для тестирования настройте Jest и React Testing Library.
          </p>
          <p className="mt-4 text-base">
            Пример структуры проекта:
            <ul className="list-disc ml-6 mt-2 text-base">
              <li>
                <code>src/components/</code> — для компонентов.
              </li>
              <li>
                <code>src/pages/</code> — для страниц (если используется
                роутинг).
              </li>
              <li>
                <code>src/styles/</code> — для CSS-файлов.
              </li>
              <li>
                <code>src/tests/</code> — для тестов.
              </li>
            </ul>
          </p>
          <div className="flex justify-center mt-4">
            <FaStar className="text-yellow-400 text-6xl" />
          </div>
        </Section>

        <Section>
          <h2 className="text-2xl md:text-3xl font-semibold">Пройдите тест</h2>
          <p className="mt-4 text-base">
            Проверьте свои знания React с помощью теста из 350 вопросов,
            разделенных на три уровня сложности: легкий, средний и сложный. Тест
            охватывает компоненты, хуки, роутинг, управление состоянием и другие
            аспекты React.
          </p>
          <div className="flex justify-center mt-4">
            <FaStar className="text-yellow-400 text-6xl" />
          </div>
        </Section>
      </div>
    </motion.div>
  );
};

export default ReactPage;

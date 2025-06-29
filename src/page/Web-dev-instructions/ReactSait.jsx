import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt, FaReact } from "react-icons/fa";

const ReactSait = () => {
  const [userCode, setUserCode] = useState({
    html: "<div id='root'></div>",
    css: ".preview-container body {\n  font-family: 'Inter', sans-serif;\n  text-align: center;\n  background-color: #f3f4f6;\n  margin: 0;\n}\n.preview-container h1 {\n  color: #ff5733;\n}\n.preview-container p {\n  color: #374151;\n}",
    react:
      "import React from 'react';\nimport ReactDOM from 'react-dom/client';\n\nconst App = () => {\n  return (\n    <div>\n      <h1>Мой первый React сайт</h1>\n      <p>Добро пожаловать!</p>\n    </div>\n  );\n};\n\nReactDOM.createRoot(document.getElementById('root')).render(<App />);",
    terminal: "",
  });
  const [currentStep, setCurrentStep] = useState(0);
  const [suggestions, setSuggestions] = useState([]);
  const [activeInput, setActiveInput] = useState(null);
  const [terminalOutput, setTerminalOutput] = useState("");
  const htmlInputRef = useRef(null);
  const cssInputRef = useRef(null);
  const reactInputRef = useRef(null);
  const terminalInputRef = useRef(null);

  const htmlSuggestions = [
    "<div>",
    "<p>",
    "<h1>",
    "<h2>",
    "<a>",
    "<img>",
    "<ul>",
    "<li>",
    "<nav>",
    "<footer>",
    "<button>",
    "<input>",
  ];
  const cssSuggestions = [
    "color",
    "background-color",
    "font-size",
    "margin",
    "padding",
    "display",
    "flex",
    "justify-content",
    "align-items",
    "border",
  ];
  const reactSuggestions = [
    "useState",
    "useEffect",
    "useRef",
    "import",
    "export",
    "return",
    "props",
    "ReactDOM",
    "createRoot",
    "render",
  ];

  const steps = [
    {
      title: "Установка React с Vite",
      description:
        "Настройте окружение для разработки React-приложения с помощью Vite.",
      code: `# Установите Node.js и npm (если не установлены)
# Скачайте Node.js с https://nodejs.org/
# Проверьте установку:
node -v
npm -v

# Создайте React-проект с Vite:
npm create vite@latest my-react-app -- --template react

# Перейдите в папку проекта:
cd my-react-app

# Установите зависимости:
npm install

# Запустите проект:
npm run dev`,
      tip: "Vite — это быстрый инструмент для создания современных React-приложений.",
    },
    {
      title: "Создание первого React-компонента",
      description: "Создайте базовый функциональный компонент.",
      code: `import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  return (
    <div>
      <h1>Мой первый React сайт</h1>
      <p>Добро пожаловать!</p>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);`,
      css: `.preview-container body {
  font-family: 'Inter', sans-serif;
  background-color: #f3f4f6;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  margin: 0;
}
.preview-container h1 {
  color: #ff5733;
  font-size: 1.8rem;
}
.preview-container p {
  color: #374151;
  font-size: 1rem;
}`,
      tip: "React-компоненты — это функции, возвращающие JSX (HTML-подобный синтаксис).",
    },
    {
      title: "Использование состояния (useState)",
      description: "Добавьте интерактивность с помощью хука useState.",
      code: `import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Счётчик: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Увеличить</button>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Counter />);`,
      css: `.preview-container button {
  padding: 8px 16px;
  background-color: #ff5733;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}
.preview-container button:hover {
  background-color: #e04e2c;
}`,
      tip: "useState позволяет управлять состоянием компонента.",
    },
    {
      title: "Работа с пропсами",
      description: "Передайте данные в компонент через пропсы.",
      code: `import React from 'react';
import ReactDOM from 'react-dom/client';

const Greeting = ({ name }) => {
  return <h1>Привет, {name}!</h1>;
};

const App = () => {
  return (
    <div>
      <Greeting name="Алексей" />
      <Greeting name="Мария" />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);`,
      tip: "Пропсы — это способ передачи данных от родительского компонента к дочернему.",
    },
    {
      title: "Создание формы с состоянием",
      description: "Создайте форму с управляемым вводом через useState.",
      code: `import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const Form = () => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Введено: ' + input);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Введите имя"
      />
      <button type="submit">Отправить</button>
    </form>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Form />);`,
      css: `.preview-container form {
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 100%;
  margin: 16px auto;
}
.preview-container input {
  padding: 8px;
  border: 1px solid #d1d5db;
  border-radius: 5px;
}
.preview-container button {
  background-color: #ff5733;
  color: white;
  padding: 8px;
  border: none;
  border-radius: 5px;
}`,
      tip: "Управляемые компоненты синхронизируют ввод с состоянием.",
    },
    {
      title: "Адаптивный компонент с Tailwind",
      description:
        "Создайте адаптивный компонент с использованием Tailwind CSS.",
      code: `import React from 'react';
import ReactDOM from 'react-dom/client';
import 'tailwindcss/tailwind.css';

const Card = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg max-w-sm mx-auto">
      <h2 className="text-xl font-semibold text-orange-500">Карточка</h2>
      <p className="text-gray-600">Это пример адаптивной карточки с Tailwind.</p>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Card />);`,
      tip: "Tailwind CSS упрощает стилизацию с помощью утилитных классов.",
    },
  ];

  const tasks = [
    "Создайте React-компонент с кнопкой, меняющей текст при клике.",
    "Добавьте форму с двумя полями ввода и валидацией.",
    "Создайте список, который добавляет элементы через useState.",
    "Создайте адаптивное меню с Tailwind CSS и React.",
    "Создайте компонент с пропсами для отображения карточек товаров.",
  ];

  const handleCodeChange = (type, value) => {
    setUserCode((prev) => ({ ...prev, [type]: value }));
    if (type === "html") {
      const lastWord = value
        .split(/[\s\n>]+/)
        .pop()
        .toLowerCase();
      if (lastWord.startsWith("<")) {
        setSuggestions(
          htmlSuggestions.filter((s) => s.toLowerCase().startsWith(lastWord))
        );
      } else {
        setSuggestions([]);
      }
    } else if (type === "css") {
      const lastWord = value
        .split(/[\s\n:;{]+/)
        .pop()
        .toLowerCase();
      setSuggestions(
        cssSuggestions.filter((s) => s.toLowerCase().startsWith(lastWord))
      );
    } else if (type === "react") {
      const lastWord = value
        .split(/[\s\n.;()]+/)
        .pop()
        .toLowerCase();
      setSuggestions(
        reactSuggestions.filter((s) => s.toLowerCase().startsWith(lastWord))
      );
    } else if (type === "terminal") {
      setSuggestions([]);
      if (value === "npm create vite@latest") {
        setTerminalOutput(
          `✔ Project name: … my-react-app
✔ Select a framework: › React
✔ Select a variant: › JavaScript
Scaffolding project in ./my-react-app...
Done. Now run:
  cd my-react-app
  npm install
  npm run dev`
        );
      } else if (value === "npm i" || value === "npm install") {
        setTerminalOutput("Installing dependencies...\nDone!");
      } else if (value === "npm run dev") {
        setTerminalOutput(
          "Vite dev server running at:\n> Local: http://localhost:5173/\n> Network: http://192.168.1.100:5173/"
        );
      } else {
        setTerminalOutput(
          "Команда не распознана. Попробуйте npm create vite@latest, npm i, или npm run dev."
        );
      }
    }
    setActiveInput(type);
  };

  const applySuggestion = (suggestion) => {
    if (activeInput === "html") {
      const lines = userCode.html.split("\n");
      const lastLine = lines[lines.length - 1];
      const lastWordIndex = lastLine.lastIndexOf("<");
      lines[lines.length - 1] =
        lastLine.substring(0, lastWordIndex) + suggestion;
      setUserCode((prev) => ({ ...prev, html: lines.join("\n") }));
    } else if (activeInput === "css") {
      const lines = userCode.css.split("\n");
      const lastLine = lines[lines.length - 1];
      const lastWordIndex = lastLine.lastIndexOf(" ") + 1;
      lines[lines.length - 1] =
        lastLine.substring(0, lastWordIndex) + suggestion;
      setUserCode((prev) => ({ ...prev, css: lines.join("\n") }));
    } else if (activeInput === "react") {
      const lines = userCode.react.split("\n");
      const lastLine = lines[lines.length - 1];
      const lastWordIndex = lastLine.lastIndexOf(" ") + 1;
      lines[lines.length - 1] =
        lastLine.substring(0, lastWordIndex) + suggestion;
      setUserCode((prev) => ({ ...prev, react: lines.join("\n") }));
    }
    setSuggestions([]);
    if (activeInput === "html") htmlInputRef.current.focus();
    else if (activeInput === "css") cssInputRef.current.focus();
    else if (activeInput === "react") reactInputRef.current.focus();
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setSuggestions([]);
    }
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      setSuggestions([]);
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { scale: 1.03, transition: { duration: 0.3 } },
  };

  const suggestionVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05 },
    }),
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        {/* Заголовок */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">
            Создание сайта на React, HTML и CSS
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
            Научитесь создавать современные веб-приложения с React, используя
            интерактивный редактор и терминал.
          </p>
        </motion.div>

        {/* Инструкция по настройке React */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          className="bg-gray-800 rounded-xl p-6 shadow-xl mb-10"
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-orange-400 mb-4">
            Как настроить и запустить React-проект
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-300 text-sm sm:text-base">
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-pink-400 mb-2">
                1. Установка Node.js и npm
              </h3>
              <p>
                Скачайте и установите Node.js с{" "}
                <a href="https://nodejs.org/" className="text-orange-400">
                  nodejs.org
                </a>
                . Проверьте установку:
              </p>
              <pre className="bg-gray-900 p-3 rounded-md text-xs sm:text-sm text-gray-200 font-mono overflow-x-auto">
                node -v npm -v
              </pre>
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-pink-400 mb-2">
                2. Создание проекта
              </h3>
              <p>Используйте Vite для создания React-приложения:</p>
              <pre className="bg-gray-900 p-3 rounded-md text-xs sm:text-sm text-gray-200 font-mono overflow-x-auto">
                npm create vite@latest my-react-app -- --template react
              </pre>
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-pink-400 mb-2">
                3. Установка зависимостей
              </h3>
              <p>Перейдите в папку проекта и установите зависимости:</p>
              <pre className="bg-gray-900 p-3 rounded-md text-xs sm:text-sm text-gray-200 font-mono overflow-x-auto">
                cd my-react-app npm install
              </pre>
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-pink-400 mb-2">
                4. Запуск проекта
              </h3>
              <p>Запустите сервер разработки:</p>
              <pre className="bg-gray-900 p-3 rounded-md text-xs sm:text-sm text-gray-200 font-mono overflow-x-auto">
                npm run dev
              </pre>
              <p>
                Откройте <code>http://localhost:5173</code> в браузере.
              </p>
            </div>
            <div className="sm:col-span-2">
              <h3 className="text-base sm:text-lg font-semibold text-pink-400 mb-2">
                5. Структура проекта
              </h3>
              <p>После создания проекта вы получите:</p>
              <pre className="bg-gray-900 p-3 rounded-md text-xs sm:text-sm text-gray-200 font-mono overflow-x-auto">
                my-react-app/ ├── node_modules/ ├── public/ │ └── index.html ├──
                src/ │ ├── App.jsx │ ├── main.jsx │ └── index.css ├──
                package.json └── vite.config.js
              </pre>
              <p>
                <code>main.jsx</code> — точка входа, <code>App.jsx</code> —
                главный компонент, <code>index.html</code> — базовый HTML.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Пошаговое руководство */}
        <div className="mb-10">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            className="bg-gray-800 rounded-xl p-6 shadow-xl"
          >
            <h2 className="text-xl sm:text-2xl font-semibold text-orange-400 mb-4">
              Шаг {currentStep + 1}: {steps[currentStep].title}
            </h2>
            <p className="text-gray-300 mb-4 text-sm sm:text-base">
              {steps[currentStep].description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-2">
                <h3 className="text-base sm:text-lg font-semibold text-pink-400 mb-2">
                  Код:
                </h3>
                <div className="bg-gray-900 p-4 rounded-md overflow-x-auto">
                  <pre className="text-xs sm:text-sm text-gray-200 font-mono bg-gray-950 p-3 rounded-md whitespace-pre-wrap">
                    {steps[currentStep].code}
                  </pre>
                  {steps[currentStep].css && (
                    <>
                      <h3 className="text-base sm:text-lg font-semibold text-pink-400 mt-4 mb-2">
                        CSS:
                      </h3>
                      <pre className="text-xs sm:text-sm text-gray-200 font-mono bg-gray-950 p-3 rounded-md whitespace-pre-wrap">
                        {steps[currentStep].css}
                      </pre>
                    </>
                  )}
                </div>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-teal-400 mb-2">
                  Подсказка:
                </h3>
                <p className="text-gray-300 italic bg-gray-900 p-4 rounded-md text-sm sm:text-base">
                  {steps[currentStep].tip}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Навигация по шагам */}
          <div className="flex justify-between mt-4">
            <button
              onClick={prevStep}
              disabled={currentStep === 0}
              className="bg-gray-700 text-white py-2 px-4 rounded-full disabled:opacity-50 hover:bg-gray-600 transition text-xs sm:text-sm"
            >
              Назад
            </button>
            <button
              onClick={nextStep}
              disabled={currentStep === steps.length - 1}
              className="bg-gradient-to-r from-orange-500 to-pink-500 text-white py-2 px-4 rounded-full disabled:opacity-50 hover:from-orange-600 hover:to-pink-600 transition text-xs sm:text-sm"
            >
              Далее
            </button>
          </div>
        </div>

        {/* Редактор кода и терминал */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10 relative">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-xl sm:text-2xl font-semibold text-orange-400 mb-4">
              Интерактивный редактор
            </h2>
            <div className="space-y-4">
              <div className="relative">
                <label className="flex items-center gap-2 text-gray-300 mb-2 text-sm sm:text-base">
                  <AiFillHtml5 className="text-orange-500" /> HTML
                </label>
                <textarea
                  ref={htmlInputRef}
                  value={userCode.html}
                  onChange={(e) => handleCodeChange("html", e.target.value)}
                  onFocus={() => setActiveInput("html")}
                  className="w-full h-28 sm:h-36 bg-gray-950 text-white p-3 rounded-md border border-gray-700 font-mono text-xs sm:text-sm focus:outline-none focus:border-orange-500"
                  placeholder="Введите ваш HTML-код..."
                />
                <AnimatePresence>
                  {activeInput === "html" && suggestions.length > 0 && (
                    <motion.ul
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute z-10 bg-gray-800 border border-gray-700 rounded-md mt-1 w-full max-h-28 overflow-y-auto"
                    >
                      {suggestions.map((suggestion, index) => (
                        <motion.li
                          key={index}
                          custom={index}
                          variants={suggestionVariants}
                          className="px-3 py-1 text-gray-300 hover:bg-gray-700 cursor-pointer text-xs sm:text-sm"
                          onClick={() => applySuggestion(suggestion)}
                        >
                          {suggestion}
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
              <div className="relative">
                <label className="flex items-center gap-2 text-gray-300 mb-2 text-sm sm:text-base">
                  <FaCss3Alt className="text-blue-500" /> CSS
                </label>
                <textarea
                  ref={cssInputRef}
                  value={userCode.css}
                  onChange={(e) => handleCodeChange("css", e.target.value)}
                  onFocus={() => setActiveInput("css")}
                  className="w-full h-28 sm:h-36 bg-gray-950 text-white p-3 rounded-md border border-gray-700 font-mono text-xs sm:text-sm focus:outline-none focus:border-blue-500"
                  placeholder="Введите ваш CSS-код..."
                />
                <AnimatePresence>
                  {activeInput === "css" && suggestions.length > 0 && (
                    <motion.ul
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute z-10 bg-gray-800 border border-gray-700 rounded-md mt-1 w-full max-h-28 overflow-y-auto"
                    >
                      {suggestions.map((suggestion, index) => (
                        <motion.li
                          key={index}
                          custom={index}
                          variants={suggestionVariants}
                          className="px-3 py-1 text-gray-300 hover:bg-gray-700 cursor-pointer text-xs sm:text-sm"
                          onClick={() => applySuggestion(suggestion)}
                        >
                          {suggestion}
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
              <div className="relative">
                <label className="flex items-center gap-2 text-gray-300 mb-2 text-sm sm:text-base">
                  <FaReact className="text-cyan-400" /> React (JSX)
                </label>
                <textarea
                  ref={reactInputRef}
                  value={userCode.react}
                  onChange={(e) => handleCodeChange("react", e.target.value)}
                  onFocus={() => setActiveInput("react")}
                  className="w-full h-28 sm:h-36 bg-gray-950 text-white p-3 rounded-md border border-gray-700 font-mono text-xs sm:text-sm focus:outline-none focus:border-cyan-400"
                  placeholder="Введите ваш React-код..."
                />
                <AnimatePresence>
                  {activeInput === "react" && suggestions.length > 0 && (
                    <motion.ul
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute z-10 bg-gray-800 border border-gray-700 rounded-md mt-1 w-full max-h-28 overflow-y-auto"
                    >
                      {suggestions.map((suggestion, index) => (
                        <motion.li
                          key={index}
                          custom={index}
                          variants={suggestionVariants}
                          className="px-3 py-1 text-gray-300 hover:bg-gray-700 cursor-pointer text-xs sm:text-sm"
                          onClick={() => applySuggestion(suggestion)}
                        >
                          {suggestion}
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
              <div className="relative">
                <label className="flex items-center gap-2 text-gray-300 mb-2 text-sm sm:text-base cursor-text">
                  <span className="text-green-400">{">_"}</span> Терминал
                </label>

                <textarea
                  ref={terminalInputRef}
                  value={userCode.terminal}
                  onChange={(e) => handleCodeChange("terminal", e.target.value)}
                  onFocus={() => setActiveInput("terminal")}
                  className="w-full h-20 sm:h-24 bg-gray-950 text-white p-3 rounded-md border border-gray-700 font-mono text-xs sm:text-sm focus:outline-none focus:border-green-400"
                  placeholder="Введите команду (например, npm create vite@latest)..."
                />
                {terminalOutput && (
                  <pre className="bg-gray-900 p-3 rounded-md text-xs sm:text-sm text-gray-200 font-mono mt-2 overflow-x-auto">
                    {terminalOutput}
                  </pre>
                )}
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-xl sm:text-2xl font-semibold text-orange-400 mb-4">
              Превью результата
            </h2>
            <div className="preview-container bg-white p-4 rounded-md shadow-lg min-h-[150px] sm:min-h-[200px] border border-gray-300 overflow-x-auto">
              <style>{userCode.css}</style>
              <div dangerouslySetInnerHTML={{ __html: userCode.html }} />
            </div>
            <div className="flex gap-4 mt-4 flex-wrap">
              <button
                onClick={() =>
                  setUserCode({
                    html: "<div id='root'></div>",
                    css: "",
                    react: "",
                    terminal: "",
                  })
                }
                className="bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-600 transition text-xs sm:text-sm"
              >
                Очистить код
              </button>
            </div>
          </motion.div>
        </div>

        {/* Задания */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          className="bg-gray-800 rounded-xl p-6 shadow-xl"
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-orange-400 mb-4">
            Практические задания
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {tasks.map((task, index) => (
              <li
                key={index}
                className="flex items-start gap-3 bg-gray-900 p-4 rounded-md"
              >
                <FaReact className="text-cyan-400 text-xl mt-1" />
                <span className="text-gray-300 text-sm sm:text-base">
                  {task}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default ReactSait;

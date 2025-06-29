import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt, FaJsSquare } from "react-icons/fa";

const JsSait = () => {
  const [userCode, setUserCode] = useState({
    html: "<h1>Мой динамический сайт</h1>\n<p id='welcome'>Нажми кнопку!</p>\n<button onclick='changeText()'>Изменить текст</button>",
    css: ".preview-container body {\n  font-family: 'Inter', sans-serif;\n  text-align: center;\n  background-color: #f3f4f6;\n  margin: 0;\n}\n.preview-container h1 {\n  color: #ff5733;\n}\n.preview-container p {\n  color: #374151;\n}\n.preview-container button {\n  padding: 8px 16px;\n  background-color: #ff5733;\n  color: white;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n}\n.preview-container button:hover {\n  background-color: #e04e2c;\n}",
    js: "function changeText() {\n  document.getElementById('welcome').innerText = 'Текст изменен!';\n}",
  });
  const [currentStep, setCurrentStep] = useState(0);
  const [suggestions, setSuggestions] = useState([]);
  const [activeInput, setActiveInput] = useState(null);
  const htmlInputRef = useRef(null);
  const cssInputRef = useRef(null);
  const jsInputRef = useRef(null);

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
  const jsSuggestions = [
    "function",
    "document.getElementById",
    "addEventListener",
    "innerText",
    "innerHTML",
    "querySelector",
    "console.log",
    "alert",
  ];

  const steps = [
    {
      title: "Создание базовой структуры HTML",
      description:
        "Создайте основу HTML-документа и подключите CSS и JS файлы.",
      code: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Мой динамический сайт</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>Мой динамический сайт</h1>
  <p id="welcome">Нажми кнопку!</p>
  <button onclick="changeText()">Изменить текст</button>
  <script src="script.js"></script>
</body>
</html>`,
      tip: "Размещайте <script> в конце <body> для оптимальной загрузки.",
    },
    {
      title: "Добавление стилей CSS",
      description: "Задайте стили для центрирования и оформления страницы.",
      code: `.preview-container body {
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
}
.preview-container button {
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
      tip: "Flexbox центрирует контент, а transition добавляет плавность.",
    },
    {
      title: "Первая функция JavaScript",
      description: "Создайте функцию для изменения текста на странице.",
      code: `function changeText() {
  document.getElementById("welcome").innerText = "Текст изменен!";
}`,
      tip: "Используйте document.getElementById для доступа к элементам по ID.",
    },
    {
      title: "Обработка событий",
      description:
        "Добавьте обработчик событий для кнопки через addEventListener.",
      code: `<button id="actionButton">Кликни меня</button>`,
      css: `.preview-container #actionButton {
  padding: 8px 16px;
  background-color: #ff5733;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.2s;
}
.preview-container #actionButton:hover {
  transform: scale(1.05);
}`,
      js: `document.getElementById("actionButton").addEventListener("click", () => {
  alert("Кнопка нажата!");
});`,
      tip: "addEventListener более гибок, чем атрибут onclick.",
    },
    {
      title: "Создание динамического списка",
      description: "Создайте список, в который добавляются элементы через JS.",
      code: `<div id="listContainer">
  <ul id="myList"></ul>
  <button id="addItem">Добавить элемент</button>
</div>`,
      css: `.preview-container #listContainer {
  max-width: 100%;
  margin: 16px auto;
}
.preview-container #myList {
  list-style: none;
  padding: 0;
}
.preview-container #myList li {
  background-color: #ffffff;
  padding: 8px;
  margin: 4px 0;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.preview-container #addItem {
  background-color: #ff5733;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}`,
      js: `document.getElementById("addItem").addEventListener("click", () => {
  const li = document.createElement("li");
  li.innerText = "Новый элемент " + (document.querySelectorAll("#myList li").length + 1);
  document.getElementById("myList").appendChild(li);
});`,
      tip: "document.createElement создает элементы динамически.",
    },
    {
      title: "Создание формы с валидацией",
      description: "Создайте форму с проверкой ввода через JS.",
      code: `<form id="myForm">
  <input type="text" id="username" placeholder="Имя пользователя">
  <button type="submit">Отправить</button>
</form>
<p id="error" style="color: red;"></p>`,
      css: `.preview-container #myForm {
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 100%;
  margin: 16px auto;
}
.preview-container #username {
  padding: 8px;
  border: 1px solid #d1d5db;
  border-radius: 5px;
}
.preview-container #myForm button {
  background-color: #ff5733;
  color: white;
  padding: 8px;
  border: none;
  border-radius: 5px;
}`,
      js: `document.getElementById("myForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  if (username.length < 3) {
    document.getElementById("error").innerText = "Имя должно быть длиннее 2 символов!";
  } else {
    document.getElementById("error").innerText = "Успешно отправлено!";
  }
});`,
      tip: "e.preventDefault() предотвращает перезагрузку страницы.",
    },
  ];

  const tasks = [
    "Создайте страницу с заголовком, параграфом и кнопкой, меняющей цвет текста.",
    "Добавьте CSS-стили для градиентного фона и анимации кнопки.",
    "Создайте список, добавляющий элементы через JavaScript по клику.",
    "Добавьте форму с валидацией email и отображением ошибки.",
    "Создайте меню, подсвечивающее активный пункт через JS.",
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
    } else if (type === "js") {
      const lastWord = value
        .split(/[\s\n.;()]+/)
        .pop()
        .toLowerCase();
      setSuggestions(
        jsSuggestions.filter((s) => s.toLowerCase().startsWith(lastWord))
      );
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
    } else if (activeInput === "js") {
      const lines = userCode.js.split("\n");
      const lastLine = lines[lines.length - 1];
      const lastWordIndex = lastLine.lastIndexOf(" ") + 1;
      lines[lines.length - 1] =
        lastLine.substring(0, lastWordIndex) + suggestion;
      setUserCode((prev) => ({ ...prev, js: lines.join("\n") }));
    }
    setSuggestions([]);
    if (activeInput === "html") htmlInputRef.current.focus();
    else if (activeInput === "css") cssInputRef.current.focus();
    else if (activeInput === "js") jsInputRef.current.focus();
  };

  const runJavaScript = () => {
    try {
      const script = document.createElement("script");
      script.text = userCode.js;
      document.body.appendChild(script);
      document.body.removeChild(script);
    } catch (e) {
      console.error("Ошибка в JavaScript:", e);
    }
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
            Создание динамических сайтов с HTML, CSS и JS
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
            Научитесь создавать интерактивные сайты с помощью HTML, CSS и
            JavaScript через пошаговое руководство.
          </p>
        </motion.div>

        {/* Инструкция по созданию и подключению файлов */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          className="bg-gray-800 rounded-xl p-6 shadow-xl mb-10"
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-orange-400 mb-4">
            Как создать и подключить HTML, CSS и JavaScript
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-300 text-sm sm:text-base">
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-pink-400 mb-2">
                1. Создание HTML
              </h3>
              <p>
                Создайте файл <code>index.html</code> в редакторе (например, VS
                Code) с базовой структурой HTML.
              </p>
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-pink-400 mb-2">
                2. Создание CSS
              </h3>
              <p>
                Создайте файл <code>styles.css</code> для стилизации вашей
                страницы.
              </p>
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-pink-400 mb-2">
                3. Создание JS
              </h3>
              <p>
                Создайте файл <code>script.js</code> для добавления
                интерактивности.
              </p>
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-pink-400 mb-2">
                4. Подключение файлов
              </h3>
              <p>
                В <code>&lt;head&gt;</code> добавьте CSS:
              </p>
              <pre className="bg-gray-900 p-3 rounded-md text-xs sm:text-sm text-gray-200 font-mono overflow-x-auto">
                {`<link rel="stylesheet" href="styles.css">`}
              </pre>
              <p>
                В конце <code>&lt;body&gt;</code> добавьте JS:
              </p>
              <pre className="bg-gray-900 p-3 rounded-md text-xs sm:text-sm text-gray-200 font-mono overflow-x-auto">
                {`<script src="script.js"></script>`}
              </pre>
            </div>
            <div className="sm:col-span-2">
              <h3 className="text-base sm:text-lg font-semibold text-pink-400 mb-2">
                5. Проверка
              </h3>
              <p>
                Откройте <code>index.html</code> в браузере и используйте
                DevTools (F12) для отладки.
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
                  {steps[currentStep].js && (
                    <>
                      <h3 className="text-base sm:text-lg font-semibold text-pink-400 mt-4 mb-2">
                        JavaScript:
                      </h3>
                      <pre className="text-xs sm:text-sm text-gray-200 font-mono bg-gray-950 p-3 rounded-md whitespace-pre-wrap">
                        {steps[currentStep].js}
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

        {/* Редактор кода и превью */}
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
                  <FaJsSquare className="text-yellow-400" /> JavaScript
                </label>
                <textarea
                  ref={jsInputRef}
                  value={userCode.js}
                  onChange={(e) => handleCodeChange("js", e.target.value)}
                  onFocus={() => setActiveInput("js")}
                  className="w-full h-28 sm:h-36 bg-gray-950 text-white p-3 rounded-md border border-gray-700 font-mono text-xs sm:text-sm focus:outline-none focus:border-yellow-400"
                  placeholder="Введите ваш JavaScript-код..."
                />
                <AnimatePresence>
                  {activeInput === "js" && suggestions.length > 0 && (
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
              <script dangerouslySetInnerHTML={{ __html: userCode.js }} />
            </div>
            <div className="flex gap-4 mt-4 flex-wrap">
              <button
                onClick={() => setUserCode({ html: "", css: "", js: "" })}
                className="bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-600 transition text-xs sm:text-sm"
              >
                Очистить код
              </button>
              <button
                onClick={runJavaScript}
                className="bg-yellow-500 text-white py-2 px-4 rounded-full hover:bg-yellow-600 transition text-xs sm:text-sm"
              >
                Запустить JS
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
                <FaJsSquare className="text-yellow-400 text-xl mt-1" />
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

export default JsSait;

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";

const HtmlSait = () => {
  const [userCode, setUserCode] = useState({
    html: "<h1>Мой первый сайт</h1>\n<p>Добро пожаловать!</p>",
    css: "body {\n  font-family: 'Inter', sans-serif;\n  text-align: center;\n  background-color: #f3f4f6;\n}\nh1 {\n  color: #ff5733;\n}\np {\n  color: #374151;\n}",
  });
  const [currentStep, setCurrentStep] = useState(0);
  const [suggestions, setSuggestions] = useState([]);
  const [activeInput, setActiveInput] = useState(null);
  const htmlInputRef = useRef(null);
  const cssInputRef = useRef(null);

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

  const steps = [
    {
      title: "Создание базовой структуры HTML",
      description: "Создайте основу HTML-документа с правильной структурой.",
      code: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Мой сайт</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>Мой первый сайт</h1>
  <p>Добро пожаловать!</p>
</body>
</html>`,
      tip: "Используйте <!DOCTYPE html> и <meta name='viewport'> для адаптивности.",
    },
    {
      title: "Добавление базовых стилей CSS",
      description: "Задайте базовые стили для страницы.",
      code: `body {
  font-family: 'Inter', sans-serif;
  background-color: #f3f4f6;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  margin: 0;
}
h1 {
  color: #ff5733;
  font-size: 1.8rem;
}
p {
  color: #374151;
  font-size: 1rem;
}`,
      tip: "Flexbox помогает центрировать содержимое страницы.",
    },
    {
      title: "Создание навигационного меню",
      description: "Добавьте адаптивное меню с помощью <nav>.",
      code: `<nav>
  <ul>
    <li><a href="#home">Главная</a></li>
    <li><a href="#about">О нас</a></li>
    <li><a href="#contact">Контакты</a></li>
  </ul>
</nav>`,
      css: `nav {
  background-color: #1f2937;
  padding: 0.8rem;
  width: 100%;
}
nav ul {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
}
nav ul li a {
  color: #ffffff;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s;
}
nav ul li a:hover {
  color: #ff5733;
}`,
      tip: "Используйте gap для равномерных отступов в меню.",
    },
    {
      title: "Создание карточки контента",
      description: "Создайте стилизованную карточку для контента.",
      code: `<div class="card">
  <h2>Заголовок карточки</h2>
  <p>Это описание карточки.</p>
</div>`,
      css: `.card {
  background-color: #ffffff;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  max-width: 100%;
  margin: 0.8rem auto;
}
.card h2 {
  color: #ff5733;
  font-size: 1.4rem;
}
.card p {
  color: #374151;
  font-size: 0.9rem;
}`,
      tip: "Box-shadow добавляет глубину карточкам.",
    },
    {
      title: "Добавление формы",
      description: "Создайте простую форму с полями ввода.",
      code: `<form class="contact-form">
  <input type="text" placeholder="Имя" class="form-input">
  <input type="email" placeholder="Email" class="form-input">
  <button type="submit" class="form-button">Отправить</button>
</form>`,
      css: `.contact-form {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  max-width: 100%;
  margin: 0.8rem auto;
}
.form-input {
  padding: 0.6rem;
  border: 1px solid #d1d5db;
  border-radius: 0.25rem;
  font-size: 0.9rem;
}
.form-button {
  background-color: #ff5733;
  color: white;
  padding: 0.6rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background-color 0.3s;
}
.form-button:hover {
  background-color: #e04e2c;
}`,
      tip: "Используйте тип input для разных полей формы.",
    },
    {
      title: "Создание футера",
      description: "Добавьте футер с текстом и ссылками.",
      code: `<footer>
  <p>© 2025 Мой сайт. Все права защищены.</p>
  <div class="social-links">
    <a href="#">Twitter</a>
    <a href="#">GitHub</a>
    <a href="#">LinkedIn</a>
  </div>
</footer>`,
      css: `footer {
  background-color: #111827;
  color: #9ca3af;
  text-align: center;
  padding: 1.5rem;
  width: 100%;
}
.social-links a {
  color: #ff5733;
  margin: 0 0.8rem;
  text-decoration: none;
}
.social-links a:hover {
  text-decoration: underline;
}`,
      tip: "Футер должен быть простым и информативным.",
    },
  ];

  const tasks = [
    "Создайте HTML-страницу с заголовком, параграфом и изображением с атрибутом alt.",
    "Добавьте CSS-стили для установки градиентного фона и кастомного шрифта.",
    "Создайте адаптивное навигационное меню с пятью пунктами.",
    "Стилизуйте кнопку с эффектом наведения и нажатия (active).",
    "Добавьте футер с текстом и четырьмя ссылками на социальные сети.",
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
    }
    setSuggestions([]);
    if (activeInput === "html") htmlInputRef.current.focus();
    else if (activeInput === "css") cssInputRef.current.focus();
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      setSuggestions([]);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
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
            Создание сайта на HTML и CSS
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
            Пройдите пошаговое руководство с интерактивным редактором кода,
            чтобы создать современный и адаптивный сайт.
          </p>
        </motion.div>

        {/* Инструкция по созданию файлов */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          className="bg-gray-800 rounded-xl p-6 shadow-xl mb-10"
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-orange-400 mb-4">
            Как создать и подключить HTML и CSS
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-300 text-sm sm:text-base">
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-pink-400 mb-2">
                1. Создание HTML-файла
              </h3>
              <p>
                Создайте файл <code>index.html</code> в текстовом редакторе
                (например, VS Code). Добавьте базовую структуру HTML.
              </p>
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-pink-400 mb-2">
                2. Создание CSS-файла
              </h3>
              <p>
                Создайте файл <code>styles.css</code> и напишите стили для
                вашего HTML.
              </p>
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-pink-400 mb-2">
                3. Подключение CSS к HTML
              </h3>
              <p>
                В секции <code>&lt;head&gt;</code> добавьте:
              </p>
              <pre className="bg-gray-900 p-3 rounded-md text-xs sm:text-sm text-gray-200 font-mono overflow-x-auto">
                {`<link rel="stylesheet" href="styles.css">`}
              </pre>
              <p>Убедитесь, что файлы находятся в одной папке.</p>
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-pink-400 mb-2">
                4. Проверка результата
              </h3>
              <p>
                Откройте <code>index.html</code> в браузере. Используйте
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
            <div className="bg-white p-4 rounded-md shadow-lg min-h-[150px] sm:min-h-[200px] border border-gray-300 overflow-x-auto">
              <style>{userCode.css}</style>
              <div dangerouslySetInnerHTML={{ __html: userCode.html }} />
            </div>
            <button
              onClick={() => setUserCode({ html: "", css: "" })}
              className="mt-4 bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-600 transition text-xs sm:text-sm"
            >
              Очистить код
            </button>
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
                <AiFillHtml5 className="text-orange-500 text-xl mt-1" />
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

export default HtmlSait;

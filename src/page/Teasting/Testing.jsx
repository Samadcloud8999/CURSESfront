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
      question: "Какой тег используется для заголовка первого уровня?",
      options: ["<h1>", "<header>", "<title>", "<h6>"],
      correct: 0,
    },
    {
      id: 2,
      question: "Какой тег создает абзац текста?",
      options: ["<p>", "<div>", "<span>", "<text>"],
      correct: 0,
    },
    {
      id: 3,
      question: "Какой тег добавляет изображение на страницу?",
      options: ["<img>", "<picture>", "<image>", "<svg>"],
      correct: 0,
    },
    {
      id: 4,
      question: "Какой атрибут указывает источник изображения?",
      options: ["src", "href", "alt", "link"],
      correct: 0,
    },
    {
      id: 5,
      question: "Что делает тег <br>?",
      options: [
        "Перенос строки",
        "Горизонтальная линия",
        "Жирный текст",
        "Курсив",
      ],
      correct: 0,
    },
    {
      id: 6,
      question: "Какой тег создает нумерованный список?",
      options: ["<ol>", "<ul>", "<li>", "<dl>"],
      correct: 0,
    },
    {
      id: 7,
      question: "Какой тег создает маркированный список?",
      options: ["<ul>", "<ol>", "<li>", "<list>"],
      correct: 0,
    },
    {
      id: 8,
      question: "Какой тег используется для гиперссылки?",
      options: ["<a>", "<link>", "<href>", "<url>"],
      correct: 0,
    },
    {
      id: 9,
      question: "Какой атрибут указывает адрес ссылки?",
      options: ["href", "src", "link", "target"],
      correct: 0,
    },
    {
      id: 10,
      question: "Что делает тег <title>?",
      options: [
        "Задает заголовок страницы",
        "Создает заголовок текста",
        "Добавляет подзаголовок",
        "Определяет мета-данные",
      ],
      correct: 0,
    },
    {
      id: 11,
      question: "Где обычно размещается тег <meta>?",
      options: ["В <head>", "В <body>", "В <footer>", "В <main>"],
      correct: 0,
    },
    {
      id: 12,
      question: "Какой тег обозначает основной контент страницы?",
      options: ["<main>", "<section>", "<article>", "<div>"],
      correct: 0,
    },
    {
      id: 13,
      question: "Что делает тег <strong>?",
      options: [
        "Выделяет текст жирным",
        "Курсивный текст",
        "Подчеркивает текст",
        "Добавляет отступ",
      ],
      correct: 0,
    },
    {
      id: 14,
      question: "Какой тег используется для курсивного текста?",
      options: ["<em>", "<i>", "<b>", "<u>"],
      correct: 0,
    },
    {
      id: 15,
      question: "Какой тег создает горизонтальную линию?",
      options: ["<hr>", "<line>", "<br>", "<border>"],
      correct: 0,
    },
    {
      id: 16,
      question: "Какой атрибут добавляет альтернативный текст для изображения?",
      options: ["alt", "title", "desc", "caption"],
      correct: 0,
    },
    {
      id: 17,
      question: "Какой тег используется для создания таблицы?",
      options: ["<table>", "<grid>", "<tbody>", "<tr>"],
      correct: 0,
    },
    {
      id: 18,
      question: "Какой тег обозначает строку таблицы?",
      options: ["<tr>", "<td>", "<th>", "<table>"],
      correct: 0,
    },
    {
      id: 19,
      question: "Какой тег обозначает ячейку таблицы?",
      options: ["<td>", "<tr>", "<th>", "<cell>"],
      correct: 0,
    },
    {
      id: 20,
      question: "Что делает тег <caption>?",
      options: [
        "Добавляет заголовок таблицы",
        "Создает ячейку",
        "Определяет строку",
        "Добавляет границу",
      ],
      correct: 0,
    },
    {
      id: 21,
      question: "Какой тег используется для формы?",
      options: ["<form>", "<input>", "<button>", "<label>"],
      correct: 0,
    },
    {
      id: 22,
      question: "Какой атрибут формы указывает метод отправки данных?",
      options: ["method", "action", "type", "submit"],
      correct: 0,
    },
    {
      id: 23,
      question: "Какой тег создает текстовое поле ввода?",
      options: ["<input>", "<textarea>", "<text>", "<field>"],
      correct: 0,
    },
    {
      id: 24,
      question: "Какой атрибут <input> задает тип поля?",
      options: ["type", "value", "name", "id"],
      correct: 0,
    },
    {
      id: 25,
      question: "Какой тег используется для кнопки?",
      options: ["<button>", "<input>", "<submit>", "<click>"],
      correct: 0,
    },
    {
      id: 26,
      question: "Какой тег создает выпадающий список?",
      options: ["<select>", "<option>", "<dropdown>", "<list>"],
      correct: 0,
    },
    {
      id: 27,
      question: "Какой тег задает варианты для выпадающего списка?",
      options: ["<option>", "<select>", "<item>", "<value>"],
      correct: 0,
    },
    {
      id: 28,
      question: "Что делает тег <label>?",
      options: [
        "Связывает текст с элементом формы",
        "Создает кнопку",
        "Задает заголовок",
        "Добавляет поле ввода",
      ],
      correct: 0,
    },
    {
      id: 29,
      question: "Какой атрибут связывает <label> с элементом формы?",
      options: ["for", "id", "name", "type"],
      correct: 0,
    },
    {
      id: 30,
      question: "Какой тег задает нижнюю часть страницы?",
      options: ["<footer>", "<bottom>", "<end>", "<base>"],
      correct: 0,
    },
  ],
  medium: [
    {
      id: 31,
      question: "Что делает атрибут 'charset' в теге <meta>?",
      options: [
        "Задает кодировку",
        "Указывает язык",
        "Определяет стиль",
        "Добавляет описание",
      ],
      correct: 0,
    },
    {
      id: 32,
      question: "Какой атрибут тега <a> открывает ссылку в новой вкладке?",
      options: [
        "target='_blank'",
        "rel='noopener'",
        "href='new'",
        "open='tab'",
      ],
      correct: 0,
    },
    {
      id: 33,
      question: "Что делает тег <article>?",
      options: [
        "Определяет независимый контент",
        "Создает раздел",
        "Задает заголовок",
        "Добавляет список",
      ],
      correct: 0,
    },
    {
      id: 34,
      question: "Какой тег используется для семантического раздела?",
      options: ["<section>", "<div>", "<span>", "<block>"],
      correct: 0,
    },
    {
      id: 35,
      question: "Что делает атрибут 'rel' в теге <link>?",
      options: [
        "Указывает отношение к ресурсу",
        "Задает путь",
        "Определяет тип",
        "Добавляет стиль",
      ],
      correct: 0,
    },
    {
      id: 36,
      question: "Какой атрибут <img> улучшает доступность?",
      options: ["alt", "src", "width", "height"],
      correct: 0,
    },
    {
      id: 37,
      question: "Что делает тег <nav>?",
      options: [
        "Создает навигационное меню",
        "Задает заголовок",
        "Определяет футер",
        "Добавляет контент",
      ],
      correct: 0,
    },
    {
      id: 38,
      question: "Какой атрибут формы указывает URL для отправки данных?",
      options: ["action", "method", "target", "enctype"],
      correct: 0,
    },
    {
      id: 39,
      question: "Что делает атрибут 'required' в <input>?",
      options: [
        "Требует заполнения поля",
        "Задает тип",
        "Указывает имя",
        "Добавляет значение",
      ],
      correct: 0,
    },
    {
      id: 40,
      question: "Какой тип <input> создает переключатель?",
      options: ["radio", "checkbox", "button", "text"],
      correct: 0,
    },
    {
      id: 41,
      question: "Какой тип <input> создает флажок?",
      options: ["checkbox", "radio", "submit", "file"],
      correct: 0,
    },
    {
      id: 42,
      question: "Что делает тег <thead>?",
      options: [
        "Задает заголовок таблицы",
        "Создает тело таблицы",
        "Определяет строку",
        "Добавляет ячейку",
      ],
      correct: 0,
    },
    {
      id: 43,
      question: "Что делает тег <tbody>?",
      options: [
        "Создает тело таблицы",
        "Задает заголовок",
        "Определяет футер",
        "Добавляет строку",
      ],
      correct: 0,
    },
    {
      id: 44,
      question: "Какой атрибут <td> объединяет ячейки по горизонтали?",
      options: ["colspan", "rowspan", "span", "merge"],
      correct: 0,
    },
    {
      id: 45,
      question: "Какой атрибут <td> объединяет ячейки по вертикали?",
      options: ["rowspan", "colspan", "merge", "span"],
      correct: 0,
    },
    {
      id: 46,
      question: "Что делает тег <aside>?",
      options: [
        "Создает боковой контент",
        "Задает заголовок",
        "Определяет футер",
        "Добавляет список",
      ],
      correct: 0,
    },
    {
      id: 47,
      question: "Какой атрибут улучшает SEO в <meta>?",
      options: ["description", "charset", "viewport", "author"],
      correct: 0,
    },
    {
      id: 48,
      question: "Что делает атрибут 'placeholder' в <input>?",
      options: [
        "Показывает подсказку",
        "Задает значение",
        "Требует заполнения",
        "Указывает тип",
      ],
      correct: 0,
    },
    {
      id: 49,
      question: "Какой тег используется для встраивания видео?",
      options: ["<video>", "<media>", "<embed>", "<object>"],
      correct: 0,
    },
    {
      id: 50,
      question: "Какой атрибут <video> включает автопроигрывание?",
      options: ["autoplay", "play", "loop", "start"],
      correct: 0,
    },
    {
      id: 51,
      question: "Что делает тег <source> в <video>?",
      options: [
        "Указывает источник видео",
        "Задает субтитры",
        "Определяет формат",
        "Добавляет контролы",
      ],
      correct: 0,
    },
    {
      id: 52,
      question: "Какой тег используется для встраивания аудио?",
      options: ["<audio>", "<sound>", "<media>", "<track>"],
      correct: 0,
    },
    {
      id: 53,
      question: "Что делает атрибут 'controls' в <audio>?",
      options: [
        "Добавляет элементы управления",
        "Включает автопроигрывание",
        "Задает громкость",
        "Определяет источник",
      ],
      correct: 0,
    },
    {
      id: 54,
      question: "Какой тег улучшает доступность навигации?",
      options: ["<nav>", "<menu>", "<ul>", "<div>"],
      correct: 0,
    },
    {
      id: 55,
      question: "Что делает атрибут 'lang' в <html>?",
      options: [
        "Задает язык страницы",
        "Указывает кодировку",
        "Определяет регион",
        "Добавляет стиль",
      ],
      correct: 0,
    },
    {
      id: 56,
      question: "Какой тег используется для цитаты?",
      options: ["<blockquote>", "<q>", "<cite>", "<quote>"],
      correct: 0,
    },
    {
      id: 57,
      question: "Что делает тег <figure>?",
      options: [
        "Группирует медиа и подпись",
        "Создает изображение",
        "Задает заголовок",
        "Определяет список",
      ],
      correct: 0,
    },
    {
      id: 58,
      question: "Какой тег добавляет подпись к <figure>?",
      options: ["<figcaption>", "<caption>", "<title>", "<label>"],
      correct: 0,
    },
    {
      id: 59,
      question: "Что делает атрибут 'tabindex'?",
      options: [
        "Задает порядок фокуса",
        "Указывает тип",
        "Определяет ID",
        "Добавляет стиль",
      ],
      correct: 0,
    },
    {
      id: 60,
      question: "Какой тег используется для определения списка?",
      options: ["<dl>", "<ul>", "<ol>", "<list>"],
      correct: 0,
    },
  ],
  hard: [
    {
      id: 61,
      question: "Что делает атрибут 'contenteditable'?",
      options: [
        "Позволяет редактировать содержимое",
        "Задает контент",
        "Определяет стиль",
        "Добавляет фокус",
      ],
      correct: 0,
    },
    {
      id: 62,
      question: "Какой тег используется для интерактивного контента?",
      options: ["<details>", "<dialog>", "<summary>", "<section>"],
      correct: 0,
    },
    {
      id: 63,
      question: "Что делает тег <summary>?",
      options: [
        "Задает заголовок для <details>",
        "Создает подпись",
        "Определяет список",
        "Добавляет контент",
      ],
      correct: 0,
    },
    {
      id: 64,
      question:
        "Какой атрибут улучшает производительность загрузки изображений?",
      options: ["loading='lazy'", "srcset", "sizes", "decoding"],
      correct: 0,
    },
    {
      id: 65,
      question: "Что делает атрибут 'srcset' в <img>?",
      options: [
        "Указывает разные источники изображения",
        "Задает размер",
        "Определяет формат",
        "Добавляет подпись",
      ],
      correct: 0,
    },
    {
      id: 66,
      question: "Какой тег используется для адаптивных изображений?",
      options: ["<picture>", "<img>", "<source>", "<figure>"],
      correct: 0,
    },
    {
      id: 67,
      question: "Что делает атрибут 'data-*'?",
      options: [
        "Хранит пользовательские данные",
        "Задает стиль",
        "Определяет ID",
        "Указывает тип",
      ],
      correct: 0,
    },
    {
      id: 68,
      question: "Какой тег используется для прогрессивного улучшения?",
      options: ["<noscript>", "<script>", "<style>", "<meta>"],
      correct: 0,
    },
    {
      id: 69,
      question: "Что делает тег <template>?",
      options: [
        "Хранит скрытый контент",
        "Создает форму",
        "Задает стиль",
        "Определяет скрипт",
      ],
      correct: 0,
    },
    {
      id: 70,
      question: "Какой атрибут <form> задает кодировку данных?",
      options: ["enctype", "method", "action", "type"],
      correct: 0,
    },
    {
      id: 71,
      question: "Что делает тег <dialog>?",
      options: [
        "Создает модальное окно",
        "Задает форму",
        "Определяет меню",
        "Добавляет контент",
      ],
      correct: 0,
    },
    {
      id: 72,
      question: "Какой атрибут улучшает доступность для экранных читалок?",
      options: ["aria-label", "alt", "title", "role"],
      correct: 0,
    },
    {
      id: 73,
      question: "Что делает атрибут 'role'?",
      options: [
        "Задает семантическую роль",
        "Указывает стиль",
        "Определяет ID",
        "Добавляет фокус",
      ],
      correct: 0,
    },
    {
      id: 74,
      question: "Какой тег используется для встраивания внешнего контента?",
      options: ["<iframe>", "<embed>", "<object>", "<video>"],
      correct: 0,
    },
    {
      id: 75,
      question: "Что делает атрибут 'async' в <script>?",
      options: [
        "Загружает скрипт асинхронно",
        "Блокирует рендеринг",
        "Задает порядок",
        "Указывает тип",
      ],
      correct: 0,
    },
    {
      id: 76,
      question: "Что делает атрибут 'defer' в <script>?",
      options: [
        "Откладывает выполнение скрипта",
        "Загружает сразу",
        "Задает тип",
        "Указывает путь",
      ],
      correct: 0,
    },
    {
      id: 77,
      question: "Какой тег используется для субтитров в видео?",
      options: ["<track>", "<caption>", "<subtitle>", "<source>"],
      correct: 0,
    },
    {
      id: 78,
      question: "Что делает атрибут 'crossorigin' в <script>?",
      options: [
        "Указывает политику CORS",
        "Задает путь",
        "Определяет тип",
        "Добавляет стиль",
      ],
      correct: 0,
    },
    {
      id: 79,
      question: "Какой тег используется для прогресс-бара?",
      options: ["<progress>", "<meter>", "<bar>", "<status>"],
      correct: 0,
    },
    {
      id: 80,
      question: "Что делает тег <meter>?",
      options: [
        "Показывает измеряемое значение",
        "Создает прогресс-бар",
        "Задает форму",
        "Определяет список",
      ],
      correct: 0,
    },
    {
      id: 81,
      question: "Какой атрибут <input> поддерживает автозаполнение?",
      options: ["autocomplete", "autofill", "complete", "fill"],
      correct: 0,
    },
    {
      id: 82,
      question: "Что делает тег <output>?",
      options: [
        "Показывает результат вычислений",
        "Создает поле ввода",
        "Задает форму",
        "Определяет кнопку",
      ],
      correct: 0,
    },
    {
      id: 83,
      question: "Какой атрибут улучшает производительность <iframe>?",
      options: ["loading='lazy'", "srcdoc", "sandbox", "allow"],
      correct: 0,
    },
    {
      id: 84,
      question: "Что делает атрибут 'sandbox' в <iframe>?",
      options: [
        "Ограничивает функциональность",
        "Задает источник",
        "Указывает размер",
        "Добавляет стиль",
      ],
      correct: 0,
    },
    {
      id: 85,
      question: "Какой тег используется для микроразметки?",
      options: ["<meta>", "<link>", "<data>", "<span>"],
      correct: 0,
    },
    {
      id: 86,
      question: "Что делает атрибут 'itemscope'?",
      options: [
        "Задает область микроразметки",
        "Указывает тип",
        "Определяет ID",
        "Добавляет стиль",
      ],
      correct: 0,
    },
    {
      id: 87,
      question: "Какой атрибут <meta> управляет масштабированием?",
      options: ["viewport", "charset", "description", "keywords"],
      correct: 0,
    },
    {
      id: 88,
      question: "Что делает тег <base>?",
      options: [
        "Задает базовый URL",
        "Создает ссылку",
        "Определяет стиль",
        "Добавляет контент",
      ],
      correct: 0,
    },
    {
      id: 89,
      question: "Какой атрибут <a> улучшает безопасность?",
      options: ["rel='noopener'", "target='_blank'", "hreflang", "download"],
      correct: 0,
    },
    {
      id: 90,
      question: "Что делает тег <slot> в Web Components?",
      options: [
        "Задает место для контента",
        "Создает шаблон",
        "Определяет стиль",
        "Добавляет скрипт",
      ],
      correct: 0,
    },
  ],
};

// Рандомизация вопросов при загрузке
const randomizeQuestions = (questions) => {
  return Object.keys(questions).reduce((acc, level) => {
    acc[level] = questions[level].map((q) => {
      const { shuffledOptions, newCorrectIndex } = shuffleOptions(
        q.options,
        q.correct
      );
      return { ...q, options: shuffledOptions, correct: newCorrectIndex };
    });
    return acc;
  }, {});
};

const Testing = () => {
  const [level, setLevel] = useState("easy");
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState(
    randomizeQuestions(rawQuestions)
  );
  const navigate = useNavigate();

  useEffect(() => {
    const savedAnswers = localStorage.getItem("quizAnswers");
    if (savedAnswers) setAnswers(JSON.parse(savedAnswers));
  }, []);

  useEffect(() => {
    localStorage.setItem("quizAnswers", JSON.stringify(answers));
  }, [answers]);

  const handleAnswer = (questionId, optionIndex) => {
    setAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
  };

  const calculateScore = () => {
    let correct = 0;
    const currentQuestions = shuffledQuestions[level];
    currentQuestions.forEach((q) => {
      if (answers[q.id] === q.correct) correct++;
    });
    return {
      correct,
      incorrect: currentQuestions.length - correct,
      score: Math.round((correct / currentQuestions.length) * 10),
    };
  };

  const { correct, incorrect, score } = calculateScore();

  const resetQuiz = () => {
    setAnswers({});
    setShowResults(false);
    localStorage.removeItem("quizAnswers");
    setShuffledQuestions(randomizeQuestions(rawQuestions));
  };

  const handleBack = () => {
    navigate("/courses/html");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900 text-white min-h-screen p-6 flex flex-col items-center"
    >
      <div className="max-w-3xl w-full">
        <motion.h1
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          className="text-4xl font-bold text-center mb-6"
        >
          Тест по HTML
        </motion.h1>
        <p className="text-center mb-8">
          Проверьте свои знания HTML на разных уровнях сложности!
        </p>

        <div className="flex justify-center space-x-4 mb-8">
          {["easy", "medium", "hard"].map((lvl) => (
            <motion.button
              key={lvl}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setLevel(lvl);
                setShowResults(false);
              }}
              className={`px-4 py-2 rounded-lg font-semibold capitalize ${
                level === lvl ? "bg-green-600" : "bg-gray-800 hover:bg-gray-700"
              }`}
            >
              {lvl === "easy"
                ? "Легкий"
                : lvl === "medium"
                ? "Средний"
                : "Сложный"}
            </motion.button>
          ))}
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleBack}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg flex items-center space-x-2"
        >
          <FaArrowLeft className="text-white" />
          <span>Назад</span>
        </motion.button>

        <AnimatePresence>
          <motion.div
            key={level}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-6"
          >
            {shuffledQuestions[level].map((q) => (
              <motion.div
                key={q.id}
                initial={{ x: -20 }}
                animate={{ x: 0 }}
                className="bg-gray-800 p-4 rounded-lg shadow-lg"
              >
                <h2 className="text-xl font-semibold">{q.question}</h2>
                <div className="grid grid-cols-1 gap-2 mt-4">
                  {q.options.map((option, index) => {
                    const isSelected = answers[q.id] === index;
                    const isCorrect = index === q.correct;
                    const isDisabled = answers[q.id] !== undefined;

                    return (
                      <motion.button
                        key={index}
                        whileHover={{ scale: !isDisabled ? 1.02 : 1 }}
                        whileTap={{ scale: !isDisabled ? 0.98 : 1 }}
                        onClick={() => !isDisabled && handleAnswer(q.id, index)}
                        className={`flex items-center space-x-2 p-3 rounded-lg text-left ${
                          isSelected && isCorrect
                            ? "bg-green-600 shadow-lg shadow-green-600/50"
                            : isSelected && !isCorrect
                            ? "bg-red-600 shadow-lg shadow-red-600/50"
                            : "bg-gray-700 hover:bg-gray-600"
                        } ${isDisabled ? "cursor-not-allowed" : ""}`}
                        disabled={isDisabled}
                      >
                        <span>
                          {String.fromCharCode(97 + index)}. {option}
                        </span>
                        {isSelected && (
                          <span>
                            {isCorrect ? (
                              <FaCheckCircle className="text-green-300" />
                            ) : (
                              <FaTimesCircle className="text-red-300" />
                            )}
                          </span>
                        )}
                      </motion.button>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-between mt-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowResults(true)}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg"
          >
            Проверить ответы
          </motion.button>
        </div>

        <AnimatePresence>
          {showResults && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
            >
              <motion.div
                className="bg-gray-800 p-6 rounded-lg shadow-xl text-center max-w-sm w-full"
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-2xl font-semibold mb-4">Результаты</h2>
                <p className="mb-2">Правильных: {correct}</p>
                <p className="mb-2">Неправильных: {incorrect}</p>
                <p className="text-xl mb-4">Оценка: {score}/10</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={resetQuiz}
                  className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg"
                >
                  Сбросить тест
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Testing;

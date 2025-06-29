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
      question: "Что означает CSS?",
      options: [
        "Cascading Style Sheets",
        "Creative Style System",
        "Computer Style Sheets",
        "Colorful Style System",
      ],
      correct: 0,
    },
    {
      id: 2,
      question: "Как подключить CSS к HTML?",
      options: [
        "<link rel='stylesheet' href='style.css'>",
        "<style src='style.css'>",
        "<css href='style.css'>",
        "<script src='style.css'>",
      ],
      correct: 0,
    },
    {
      id: 3,
      question: "Какой селектор выбирает элемент по ID?",
      options: ["#id", ".class", "element", "[id]"],
      correct: 0,
    },
    {
      id: 4,
      question: "Какой селектор выбирает элемент по классу?",
      options: [".class", "#id", "element", "[class]"],
      correct: 0,
    },
    {
      id: 5,
      question: "Какое свойство задает цвет текста?",
      options: ["color", "background-color", "font-color", "text-color"],
      correct: 0,
    },
    {
      id: 6,
      question: "Какое свойство задает размер шрифта?",
      options: ["font-size", "text-size", "size", "font-height"],
      correct: 0,
    },
    {
      id: 7,
      question: "Какое свойство задает отступ внутри элемента?",
      options: ["padding", "margin", "border", "spacing"],
      correct: 0,
    },
    {
      id: 8,
      question: "Какое свойство задает внешний отступ элемента?",
      options: ["margin", "padding", "border", "gap"],
      correct: 0,
    },
    {
      id: 9,
      question: "Какое свойство задает границу элемента?",
      options: ["border", "outline", "box", "edge"],
      correct: 0,
    },
    {
      id: 10,
      question: "Какое свойство центрирует текст?",
      options: [
        "text-align: center",
        "align: center",
        "center: text",
        "justify: center",
      ],
      correct: 0,
    },
    {
      id: 11,
      question: "Какой псевдокласс реагирует на наведение мыши?",
      options: [":hover", ":active", ":focus", ":visited"],
      correct: 0,
    },
    {
      id: 12,
      question: "Какое свойство задает жирный шрифт?",
      options: [
        "font-weight: bold",
        "font-style: bold",
        "text-weight: bold",
        "weight: bold",
      ],
      correct: 0,
    },
    {
      id: 13,
      question: "Какое свойство задает курсивный шрифт?",
      options: [
        "font-style: italic",
        "text-style: italic",
        "font: italic",
        "style: italic",
      ],
      correct: 0,
    },
    {
      id: 14,
      question: "Какое свойство задает фон элемента?",
      options: ["background-color", "color", "fill", "bg-color"],
      correct: 0,
    },
    {
      id: 15,
      question: "Какой тег используется для встроенных стилей?",
      options: ["<style>", "<css>", "<link>", "<script>"],
      correct: 0,
    },
    {
      id: 16,
      question: "Какое свойство управляет высотой строки?",
      options: ["line-height", "text-height", "height", "font-height"],
      correct: 0,
    },
    {
      id: 17,
      question: "Какое свойство полностью скрывает элемент?",
      options: [
        "display: none",
        "visibility: hidden",
        "opacity: 0",
        "hidden: true",
      ],
      correct: 0,
    },
    {
      id: 18,
      question: "Какое свойство задает тип шрифта?",
      options: ["font-family", "font-type", "text-family", "typeface"],
      correct: 0,
    },
    {
      id: 19,
      question: "Какой селектор выбирает все элементы?",
      options: ["*", "all", "element", "any"],
      correct: 0,
    },
    {
      id: 20,
      question: "Какое свойство выравнивает блочный элемент по горизонтали?",
      options: [
        "margin: auto",
        "padding: auto",
        "align: center",
        "justify: center",
      ],
      correct: 0,
    },
    {
      id: 21,
      question: "Какое свойство задает стиль границы?",
      options: ["border-style", "border-type", "outline-style", "edge-style"],
      correct: 0,
    },
    {
      id: 22,
      question: "Какое значение делает текст подчеркиванием?",
      options: [
        "text-decoration: underline",
        "font-style: underline",
        "border: underline",
        "text: underline",
      ],
      correct: 0,
    },
    {
      id: 23,
      question: "Какое свойство задает межбуквенный интервал?",
      options: [
        "letter-spacing",
        "word-spacing",
        "text-spacing",
        "font-spacing",
      ],
      correct: 0,
    },
    {
      id: 24,
      question: "Какое свойство задает межсловный интервал?",
      options: ["word-spacing", "letter-spacing", "text-spacing", "spacing"],
      correct: 0,
    },
    {
      id: 25,
      question: "Какое свойство делает текст заглавным?",
      options: [
        "text-transform: uppercase",
        "font-style: uppercase",
        "text: uppercase",
        "case: upper",
      ],
      correct: 0,
    },
    {
      id: 26,
      question: "Какое свойство задает толщину границы?",
      options: ["border-width", "border-size", "outline-width", "border-thick"],
      correct: 0,
    },
    {
      id: 27,
      question: "Какое свойство задает цвет границы?",
      options: ["border-color", "outline-color", "border-style", "edge-color"],
      correct: 0,
    },
    {
      id: 28,
      question: "Какое свойство задает радиус углов элемента?",
      options: ["border-radius", "corner-radius", "radius", "border-corner"],
      correct: 0,
    },
    {
      id: 29,
      question: "Какое свойство выравнивает текст по правому краю?",
      options: [
        "text-align: right",
        "align: right",
        "justify: right",
        "text-right: true",
      ],
      correct: 0,
    },
    {
      id: 30,
      question: "Какое свойство задает тень текста?",
      options: ["text-shadow", "box-shadow", "shadow", "font-shadow"],
      correct: 0,
    },
    {
      id: 31,
      question: "Какой псевдокласс реагирует на клик?",
      options: [":active", ":hover", ":focus", ":click"],
      correct: 0,
    },
    {
      id: 32,
      question: "Какое свойство задает высоту элемента?",
      options: ["height", "size", "element-height", "block-height"],
      correct: 0,
    },
    {
      id: 33,
      question: "Какое свойство задает ширину элемента?",
      options: ["width", "size", "element-width", "block-width"],
      correct: 0,
    },
    {
      id: 34,
      question: "Какой тег используется для определения стилей в HTML?",
      options: ["<style>", "<css>", "<link>", "<script>"],
      correct: 0,
    },
    {
      id: 35,
      question: "Какое свойство задает выравнивание текста по ширине?",
      options: [
        "text-align: justify",
        "align: justify",
        "justify: text",
        "text-justify: true",
      ],
      correct: 0,
    },
    {
      id: 36,
      question: "Какое свойство задает стиль списка?",
      options: ["list-style", "list-type", "bullet-style", "item-style"],
      correct: 0,
    },
    {
      id: 37,
      question: "Какое свойство убирает подчеркивание ссылки?",
      options: [
        "text-decoration: none",
        "underline: none",
        "link-style: none",
        "decoration: none",
      ],
      correct: 0,
    },
    {
      id: 38,
      question: "Какой псевдокласс выбирает посещенные ссылки?",
      options: [":visited", ":hover", ":active", ":link"],
      correct: 0,
    },
    {
      id: 39,
      question: "Какое свойство задает минимальную высоту элемента?",
      options: ["min-height", "height-min", "minimum-height", "height: min"],
      correct: 0,
    },
    {
      id: 40,
      question: "Какое свойство задает максимальную ширину элемента?",
      options: ["max-width", "width-max", "maximum-width", "width: max"],
      correct: 0,
    },
  ],
  medium: [
    {
      id: 41,
      question: "Что делает свойство 'box-sizing: border-box'?",
      options: [
        "Включает padding и border в ширину",
        "Задает размер шрифта",
        "Управляет отступами",
        "Определяет макет",
      ],
      correct: 0,
    },
    {
      id: 42,
      question: "Какой псевдокласс выбирает первый элемент?",
      options: [":first-child", ":last-child", ":nth-child(2)", ":first"],
      correct: 0,
    },
    {
      id: 43,
      question: "Что делает 'display: flex'?",
      options: [
        "Создает гибкий макет",
        "Скрывает элемент",
        "Задает блочный элемент",
        "Управляет сеткой",
      ],
      correct: 0,
    },
    {
      id: 44,
      question: "Какое свойство выравнивает элементы в Flexbox по горизонтали?",
      options: [
        "justify-content",
        "align-items",
        "flex-align",
        "align-content",
      ],
      correct: 0,
    },
    {
      id: 45,
      question: "Какое свойство выравнивает элементы в Flexbox по вертикали?",
      options: [
        "align-items",
        "justify-content",
        "flex-align",
        "align-content",
      ],
      correct: 0,
    },
    {
      id: 46,
      question: "Что делает 'position: absolute'?",
      options: [
        "Позиционирует относительно родителя",
        "Фиксирует элемент на экране",
        "Задает блочный макет",
        "Скрывает элемент",
      ],
      correct: 0,
    },
    {
      id: 47,
      question: "Какой псевдоэлемент стилизует первую строку?",
      options: ["::first-line", "::first-letter", ":first", "::line"],
      correct: 0,
    },
    {
      id: 48,
      question: "Что делает свойство 'z-index'?",
      options: [
        "Задает порядок наложения",
        "Управляет размером",
        "Определяет отступ",
        "Задает прозрачность",
      ],
      correct: 0,
    },
    {
      id: 49,
      question: "Какое свойство задает прозрачность?",
      options: ["opacity", "visibility", "transparent", "alpha"],
      correct: 0,
    },
    {
      id: 50,
      question: "Что делает '@media'?",
      options: [
        "Создает адаптивные стили",
        "Задает анимации",
        "Управляет шрифтами",
        "Определяет макет",
      ],
      correct: 0,
    },
    {
      id: 51,
      question: "Какой комбинатор выбирает прямого потомка?",
      options: [">", "+", "~", " "],
      correct: 0,
    },
    {
      id: 52,
      question: "Какое свойство задает тень элемента?",
      options: ["box-shadow", "text-shadow", "shadow", "drop-shadow"],
      correct: 0,
    },
    {
      id: 53,
      question: "Что делает 'flex-direction: column'?",
      options: [
        "Располагает элементы вертикально",
        "Располагает горизонтально",
        "Скрывает элементы",
        "Центрирует элементы",
      ],
      correct: 0,
    },
    {
      id: 54,
      question: "Какое свойство задает количество колонок в Grid?",
      options: ["grid-template-columns", "grid-columns", "columns", "grid-col"],
      correct: 0,
    },
    {
      id: 55,
      question: "Что делает свойство 'gap' в Grid?",
      options: [
        "Задает отступы между ячейками",
        "Управляет размером",
        "Центрирует элементы",
        "Задает ширину",
      ],
      correct: 0,
    },
    {
      id: 56,
      question: "Какой псевдокласс выбирает последний элемент?",
      options: [
        ":last-child",
        ":first-child",
        ":nth-last-child(1)",
        "both a and c",
      ],
      correct: 3,
    },
    {
      id: 57,
      question: "Что делает свойство 'flex-wrap'?",
      options: [
        "Позволяет перенос элементов",
        "Задает направление",
        "Управляет выравниванием",
        "Скрывает элементы",
      ],
      correct: 0,
    },
    {
      id: 58,
      question: "Какое свойство задает порядок элемента в Flexbox?",
      options: ["order", "flex-order", "position", "index"],
      correct: 0,
    },
    {
      id: 59,
      question: "Что делает свойство 'position: fixed'?",
      options: [
        "Фиксирует элемент на экране",
        "Позиционирует относительно родителя",
        "Задает блочный макет",
        "Скрывает элемент",
      ],
      correct: 0,
    },
    {
      id: 60,
      question: "Какое свойство задает выравнивание содержимого в Grid?",
      options: [
        "justify-content",
        "align-content",
        "grid-align",
        "both a and b",
      ],
      correct: 3,
    },
    {
      id: 61,
      question: "Какое свойство задает минимальную ширину элемента?",
      options: ["min-width", "width-min", "minimum-width", "width: min"],
      correct: 0,
    },
    {
      id: 62,
      question: "Что делает свойство 'visibility: hidden'?",
      options: [
        "Скрывает элемент, сохраняя место",
        "Полностью удаляет элемент",
        "Делает элемент прозрачным",
        "Скрывает текст",
      ],
      correct: 0,
    },
    {
      id: 63,
      question: "Какой комбинатор выбирает соседние элементы?",
      options: ["+", ">", "~", " "],
      correct: 0,
    },
    {
      id: 64,
      question: "Какое свойство задает фон с градиентом?",
      options: [
        "background: linear-gradient()",
        "gradient",
        "background-color",
        "fill-gradient",
      ],
      correct: 0,
    },
    {
      id: 65,
      question: "Что делает свойство 'text-align-last'?",
      options: [
        "Выравнивает последнюю строку текста",
        "Выравнивает весь текст",
        "Задает отступ",
        "Управляет шрифтом",
      ],
      correct: 0,
    },
    {
      id: 66,
      question: "Какое свойство задает стиль курсора?",
      options: ["cursor", "pointer", "mouse", "hover"],
      correct: 0,
    },
    {
      id: 67,
      question: "Какое свойство задает выравнивание по вертикали?",
      options: ["vertical-align", "align-vertical", "text-align", "justify"],
      correct: 0,
    },
    {
      id: 68,
      question: "Что делает свойство 'overflow: hidden'?",
      options: [
        "Скрывает содержимое за пределами элемента",
        "Делает элемент прозрачным",
        "Задает скролл",
        "Управляет выравниванием",
      ],
      correct: 0,
    },
    {
      id: 69,
      question: "Какое свойство задает тень для текста?",
      options: ["text-shadow", "box-shadow", "shadow", "font-shadow"],
      correct: 0,
    },
    {
      id: 70,
      question: "Какой псевдокласс выбирает элементы при фокусе?",
      options: [":focus", ":hover", ":active", ":visited"],
      correct: 0,
    },
    {
      id: 71,
      question: "Какое свойство задает фон изображения?",
      options: ["background-image", "image", "background", "bg-image"],
      correct: 0,
    },
    {
      id: 72,
      question: "Что делает свойство 'flex-grow'?",
      options: [
        "Управляет ростом элемента в Flexbox",
        "Задает ширину",
        "Управляет отступами",
        "Скрывает элемент",
      ],
      correct: 0,
    },
    {
      id: 73,
      question: "Что делает свойство 'flex-shrink'?",
      options: [
        "Управляет сжатием элемента в Flexbox",
        "Задает высоту",
        "Управляет выравниванием",
        "Скрывает элемент",
      ],
      correct: 0,
    },
    {
      id: 74,
      question: "Какое свойство задает позицию фона?",
      options: [
        "background-position",
        "bg-position",
        "image-position",
        "position",
      ],
      correct: 0,
    },
    {
      id: 75,
      question: "Что делает свойство 'display: inline-block'?",
      options: [
        "Элемент занимает ширину содержимого",
        "Элемент становится блочным",
        "Элемент скрывается",
        "Элемент становится гибким",
      ],
      correct: 0,
    },
    {
      id: 76,
      question: "Какое свойство задает повторение фона?",
      options: ["background-repeat", "bg-repeat", "image-repeat", "repeat"],
      correct: 0,
    },
    {
      id: 77,
      question: "Что делает свойство 'text-overflow: ellipsis'?",
      options: [
        "Добавляет многоточие при переполнении",
        "Скрывает текст",
        "Выравнивает текст",
        "Задает отступ",
      ],
      correct: 0,
    },
    {
      id: 78,
      question: "Какой псевдокласс выбирает нечетные элементы?",
      options: [":nth-child(odd)", ":nth-child(even)", ":odd", ":even"],
      correct: 0,
    },
    {
      id: 79,
      question: "Какое свойство задает тип отображения элемента?",
      options: ["display", "visibility", "type", "block"],
      correct: 0,
    },
    {
      id: 80,
      question: "Что делает свойство 'float'?",
      options: [
        "Позиционирует элемент слева или справа",
        "Задает прозрачность",
        "Управляет анимацией",
        "Скрывает элемент",
      ],
      correct: 0,
    },
  ],
  hard: [
    {
      id: 81,
      question: "Что делает свойство 'will-change'?",
      options: [
        "Оптимизирует анимации",
        "Задает размер",
        "Управляет макетом",
        "Скрывает элемент",
      ],
      correct: 0,
    },
    {
      id: 82,
      question: "Какой псевдокласс выбирает каждый второй элемент?",
      options: [":nth-child(2n)", ":nth-child(2)", ":even", ":second"],
      correct: 0,
    },
    {
      id: 83,
      question: "Что делает '@keyframes'?",
      options: [
        "Определяет анимацию",
        "Задает переход",
        "Управляет макетом",
        "Определяет шрифт",
      ],
      correct: 0,
    },
    {
      id: 84,
      question: "Какое свойство управляет длительностью анимации?",
      options: [
        "animation-duration",
        "transition-duration",
        "duration",
        "timing",
      ],
      correct: 0,
    },
    {
      id: 85,
      question: "Что делает свойство 'transition'?",
      options: [
        "Создает плавный переход",
        "Задает анимацию",
        "Управляет макетом",
        "Определяет шрифт",
      ],
      correct: 0,
    },
    {
      id: 86,
      question: "Какой псевдоэлемент добавляет контент перед элементом?",
      options: ["::before", "::after", "::first", "::prepend"],
      correct: 0,
    },
    {
      id: 87,
      question: "Что делает свойство 'clip-path'?",
      options: [
        "Обрезает элемент по форме",
        "Задает тень",
        "Управляет прозрачностью",
        "Определяет макет",
      ],
      correct: 0,
    },
    {
      id: 88,
      question: "Какое свойство задает пользовательские переменные?",
      options: ["--variable", "var()", ":root", "custom-property"],
      correct: 0,
    },
    {
      id: 89,
      question: "Как получить значение переменной CSS?",
      options: ["var(--variable)", "--variable", ":root", "getProperty"],
      correct: 0,
    },
    {
      id: 90,
      question: "Что делает свойство 'object-fit'?",
      options: [
        "Управляет масштабированием изображения",
        "Задает позицию",
        "Управляет тенью",
        "Определяет макет",
      ],
      correct: 0,
    },
    {
      id: 91,
      question: "Какое свойство улучшает доступность фокуса?",
      options: ["outline", "border", "focus-ring", "shadow"],
      correct: 0,
    },
    {
      id: 92,
      question: "Что делает 'display: contents'?",
      options: [
        "Удаляет элемент из визуального потока",
        "Скрывает элемент",
        "Задает блочный макет",
        "Центрирует элемент",
      ],
      correct: 0,
    },
    {
      id: 93,
      question: "Какой комбинатор выбирает соседний элемент?",
      options: ["+", ">", "~", " "],
      correct: 0,
    },
    {
      id: 94,
      question: "Что делает свойство 'aspect-ratio'?",
      options: [
        "Задает соотношение сторон",
        "Управляет размером",
        "Определяет макет",
        "Скрывает элемент",
      ],
      correct: 0,
    },
    {
      id: 95,
      question: "Что делает свойство 'grid-auto-flow'?",
      options: [
        "Управляет размещением в Grid",
        "Задает размер",
        "Управляет анимацией",
        "Определяет шрифт",
      ],
      correct: 0,
    },
    {
      id: 96,
      question: "Какое свойство задает порядок выполнения перехода?",
      options: [
        "transition-timing-function",
        "animation-timing",
        "timing",
        "transition-speed",
      ],
      correct: 0,
    },
    {
      id: 97,
      question: "Что делает свойство 'backdrop-filter'?",
      options: [
        "Применяет фильтр к фону",
        "Задает тень",
        "Управляет прозрачностью",
        "Определяет макет",
      ],
      correct: 0,
    },
    {
      id: 98,
      question: "Какой селектор имеет наивысшую специфичность?",
      options: ["ID", "Class", "Tag", "Universal"],
      correct: 0,
    },
    {
      id: 99,
      question: "Что делает свойство 'contain'?",
      options: [
        "Ограничивает рендеринг",
        "Задает размер",
        "Управляет макетом",
        "Скрывает элемент",
      ],
      correct: 0,
    },
    {
      id: 100,
      question: "Что делает свойство 'animation-fill-mode'?",
      options: [
        "Управляет стилем после анимации",
        "Задает длительность",
        "Управляет переходом",
        "Определяет макет",
      ],
      correct: 0,
    },
    {
      id: 101,
      question: "Какое свойство задает количество строк в Grid?",
      options: ["grid-template-rows", "grid-rows", "rows", "grid-row"],
      correct: 0,
    },
    {
      id: 102,
      question: "Что делает свойство 'transform'?",
      options: [
        "Изменяет форму или положение элемента",
        "Задает прозрачность",
        "Управляет шрифтом",
        "Скрывает элемент",
      ],
      correct: 0,
    },
    {
      id: 103,
      question: "Какой псевдокласс выбирает элементы без детей?",
      options: [":empty", ":childless", ":no-child", ":blank"],
      correct: 0,
    },
    {
      id: 104,
      question: "Что делает свойство 'filter'?",
      options: [
        "Применяет визуальные эффекты",
        "Задает фон",
        "Управляет выравниванием",
        "Определяет макет",
      ],
      correct: 0,
    },
    {
      id: 105,
      question: "Какое свойство задает начальное масштабирование элемента?",
      options: ["transform: scale()", "scale", "zoom", "size"],
      correct: 0,
    },
    {
      id: 106,
      question: "Что делает свойство 'counter-reset'?",
      options: [
        "Сбрасывает счетчик",
        "Задает стиль",
        "Управляет анимацией",
        "Определяет макет",
      ],
      correct: 0,
    },
    {
      id: 107,
      question: "Какое свойство использует счетчик для нумерации?",
      options: ["counter-increment", "counter-add", "count", "increment"],
      correct: 0,
    },
    {
      id: 108,
      question: "Что делает свойство 'perspective'?",
      options: [
        "Создает 3D-пространство",
        "Задает размер",
        "Управляет прозрачностью",
        "Определяет макет",
      ],
      correct: 0,
    },
    {
      id: 109,
      question: "Какое свойство задает длительность перехода?",
      options: [
        "transition-duration",
        "animation-duration",
        "duration",
        "timing",
      ],
      correct: 0,
    },
    {
      id: 110,
      question: "Что делает свойство 'writing-mode'?",
      options: [
        "Задает направление текста",
        "Управляет шрифтом",
        "Задает выравнивание",
        "Скрывает текст",
      ],
      correct: 0,
    },
    {
      id: 111,
      question: "Какой псевдокласс выбирает элементы в фокусе внутри формы?",
      options: [":focus-within", ":focus", ":active", ":hover"],
      correct: 0,
    },
    {
      id: 112,
      question: "Что делает свойство 'scroll-behavior'?",
      options: [
        "Управляет плавностью прокрутки",
        "Задает отступ",
        "Управляет анимацией",
        "Скрывает элемент",
      ],
      correct: 0,
    },
    {
      id: 113,
      question: "Какое свойство задает смещение элемента в 3D?",
      options: ["transform: translateZ()", "translate3d", "z-offset", "depth"],
      correct: 0,
    },
    {
      id: 114,
      question: "Что делает свойство 'grid-area'?",
      options: [
        "Задает область элемента в Grid",
        "Управляет размером",
        "Задает выравнивание",
        "Скрывает элемент",
      ],
      correct: 0,
    },
    {
      id: 115,
      question: "Какой псевдокласс выбирает элементы по атрибуту?",
      options: ["[attribute]", ":attribute", ":has", ":where"],
      correct: 0,
    },
    {
      id: 116,
      question: "Что делает свойство 'mix-blend-mode'?",
      options: [
        "Управляет смешением слоев",
        "Задает прозрачность",
        "Управляет анимацией",
        "Определяет макет",
      ],
      correct: 0,
    },
    {
      id: 117,
      question: "Какое свойство задает выравнивание в Grid по вертикали?",
      options: ["align-items", "justify-items", "grid-align", "both a and b"],
      correct: 3,
    },
    {
      id: 118,
      question: "Что делает свойство 'place-items'?",
      options: [
        "Задает выравнивание в Grid",
        "Управляет анимацией",
        "Задает размер",
        "Скрывает элемент",
      ],
      correct: 0,
    },
    {
      id: 119,
      question: "Какой псевдокласс выбирает элементы по условию?",
      options: [":where()", ":is()", ":has()", "all of the above"],
      correct: 3,
    },
    {
      id: 120,
      question: "Что делает свойство 'content-visibility'?",
      options: [
        "Оптимизирует рендеринг контента",
        "Задает видимость",
        "Управляет прозрачностью",
        "Определяет макет",
      ],
      correct: 0,
    },
  ],
};

// Randomize questions on load
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

const TestingCss = () => {
  const [level, setLevel] = useState("easy");
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState(
    randomizeQuestions(rawQuestions)
  );
  const navigate = useNavigate();

  useEffect(() => {
    const savedAnswers = localStorage.getItem("cssQuizAnswers");
    if (savedAnswers) setAnswers(JSON.parse(savedAnswers));
  }, []);

  useEffect(() => {
    localStorage.setItem("cssQuizAnswers", JSON.stringify(answers));
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
    localStorage.removeItem("cssQuizAnswers");
    setShuffledQuestions(randomizeQuestions(rawQuestions));
  };

  const handleBack = () => {
    navigate("/courses/css");
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
          Тест по CSS
        </motion.h1>
        <p className="text-center mb-8">
          Проверьте свои знания CSS на разных уровнях сложности!
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

export default TestingCss;

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
      question: "Что такое JavaScript?",
      options: [
        "Язык программирования",
        "Язык разметки",
        "База данных",
        "Протокол",
      ],
      correct: 0,
    },
    {
      id: 2,
      question: "Как объявить переменную?",
      options: ["let x", "var x", "const x", "Все вышеперечисленное"],
      correct: 3,
    },
    {
      id: 3,
      question: "Какой метод выводит в консоль?",
      options: ["console.log()", "print()", "alert()", "write()"],
      correct: 0,
    },
    {
      id: 4,
      question: "Какой оператор для строгого равенства?",
      options: ["===", "==", "=", "!="],
      correct: 0,
    },
    {
      id: 5,
      question: "Как создать массив?",
      options: ["[]", "{}", "()", "new Array()"],
      correct: 0,
    },
    {
      id: 6,
      question: "Что возвращает typeof null?",
      options: ["object", "null", "undefined", "string"],
      correct: 0,
    },
    {
      id: 7,
      question: "Как объявить функцию?",
      options: [
        "function f()",
        "let f = function()",
        "const f = () => {}",
        "Все вышеперечисленное",
      ],
      correct: 3,
    },
    {
      id: 8,
      question: "Что возвращает undefined?",
      options: ["Необъявленная переменная", "null", "0", "NaN"],
      correct: 0,
    },
    {
      id: 9,
      question: "Как добавить элемент в конец массива?",
      options: ["push()", "pop()", "shift()", "unshift()"],
      correct: 0,
    },
    {
      id: 10,
      question: "Какой оператор объединяет условия?",
      options: ["&&", "||", "and", "or"],
      correct: 0,
    },
    {
      id: 11,
      question: "Что такое DOM?",
      options: [
        "Document Object Model",
        "Data Object Model",
        "Dynamic Object Model",
        "Document Order Model",
      ],
      correct: 0,
    },
    {
      id: 12,
      question: "Как получить элемент по ID?",
      options: [
        "getElementById()",
        "querySelector()",
        "getElementsByClassName()",
        "Все вышеперечисленное",
      ],
      correct: 0,
    },
    {
      id: 13,
      question: "Как добавить обработчик события?",
      options: ["addEventListener()", "onClick()", "event()", "attachEvent()"],
      correct: 0,
    },
    {
      id: 14,
      question: "Что такое JSON?",
      options: [
        "JavaScript Object Notation",
        "JavaScript Order Notation",
        "Java Object Notation",
        "JavaScript Online",
      ],
      correct: 0,
    },
    {
      id: 15,
      question: "Какой метод парсит JSON?",
      options: ["JSON.parse()", "JSON.stringify()", "parseJSON()", "toJSON()"],
      correct: 0,
    },
    {
      id: 16,
      question: "Как преобразовать число в строку?",
      options: [
        "toString()",
        "String()",
        "parseInt()",
        "Все вышеперечисленное",
      ],
      correct: 0,
    },
    {
      id: 17,
      question: "Какой оператор увеличивает на 1?",
      options: ["++", "--", "+=", "-="],
      correct: 0,
    },
    {
      id: 18,
      question: "Что такое замыкание?",
      options: ["Функция с областью видимости", "Цикл", "Объект", "Событие"],
      correct: 0,
    },
    {
      id: 19,
      question: "Как удалить элемент из массива?",
      options: ["splice()", "slice()", "pop()", "shift()"],
      correct: 0,
    },
    {
      id: 20,
      question: "Как узнать длину массива?",
      options: ["length", "size()", "count()", "len()"],
      correct: 0,
    },
    {
      id: 21,
      question: "Как проверить тип данных?",
      options: ["typeof", "instanceof", "type()", "Все вышеперечисленное"],
      correct: 0,
    },
    {
      id: 22,
      question: "Что такое NaN?",
      options: [
        "Not a Number",
        "Null and Number",
        "Negative Number",
        "No Answer",
      ],
      correct: 0,
    },
    {
      id: 23,
      question: "Как создать объект?",
      options: ["{}", "[]", "new Object()", "Все вышеперечисленное"],
      correct: 0,
    },
    {
      id: 24,
      question: "Как удалить последний элемент массива?",
      options: ["pop()", "push()", "shift()", "slice()"],
      correct: 0,
    },
    {
      id: 25,
      question: "Что делает alert()?",
      options: [
        "Показывает диалог",
        "Выводит в консоль",
        "Возвращает true",
        "Перенаправляет",
      ],
      correct: 0,
    },
    {
      id: 26,
      question: "Какой цикл перебирает массив?",
      options: ["for", "while", "do...while", "Все вышеперечисленное"],
      correct: 3,
    },
    {
      id: 27,
      question: "Как остановить цикл?",
      options: ["break", "return", "continue", "exit"],
      correct: 0,
    },
    {
      id: 28,
      question: "Как пропустить итерацию цикла?",
      options: ["continue", "break", "skip", "next"],
      correct: 0,
    },
    {
      id: 29,
      question: "Что возвращает 2 + '2'?",
      options: ["22", "4", "NaN", "undefined"],
      correct: 0,
    },
    {
      id: 30,
      question: "Как сравнить два массива?",
      options: ["JSON.stringify()", "===", "==", "equals()"],
      correct: 0,
    },
    {
      id: 31,
      question: "Какой метод для строк?",
      options: ["toUpperCase()", "push()", "map()", "filter()"],
      correct: 0,
    },
    {
      id: 32,
      question: "Как округлить число?",
      options: [
        "Math.round()",
        "Math.floor()",
        "Math.ceil()",
        "Все вышеперечисленное",
      ],
      correct: 3,
    },
    {
      id: 33,
      question: "Что возвращает parseInt('10.5')?",
      options: ["10", "10.5", "11", "NaN"],
      correct: 0,
    },
    {
      id: 34,
      question: "Что такое булевое значение?",
      options: ["true/false", "1/0", "yes/no", "Все вышеперечисленное"],
      correct: 0,
    },
    {
      id: 35,
      question: "Как сгенерировать случайное число?",
      options: ["Math.random()", "random()", "Math.rand()", "generate()"],
      correct: 0,
    },
    {
      id: 36,
      question: "Что возвращает querySelector()?",
      options: ["Первый элемент", "Все элементы", "Массив", "Объект"],
      correct: 0,
    },
    {
      id: 37,
      question: "Что такое window?",
      options: ["Глобальный объект", "Документ", "Браузер", "Функция"],
      correct: 0,
    },
    {
      id: 38,
      question: "Как установить интервал?",
      options: ["setInterval()", "setTimeout()", "interval()", "repeat()"],
      correct: 0,
    },
    {
      id: 39,
      question: "Как очистить интервал?",
      options: [
        "clearInterval()",
        "stopInterval()",
        "clearTimeout()",
        "endInterval()",
      ],
      correct: 0,
    },
    {
      id: 40,
      question: "Что проверяет isNaN()?",
      options: ["Not a Number", "Null", "Undefined", "String"],
      correct: 0,
    },
    {
      id: 41,
      question: "Как получить свойство объекта?",
      options: [
        "Точечная нотация",
        "Квадратные скобки",
        "Оба варианта",
        "Никак",
      ],
      correct: 2,
    },
    {
      id: 42,
      question: "Что такое шаблонный литерал?",
      options: [
        "Обратные кавычки",
        "Одинарные кавычки",
        "Двойные кавычки",
        "Скобки",
      ],
      correct: 0,
    },
    {
      id: 43,
      question: "Как объединить строки?",
      options: ["+", "concat()", "join()", "Оба a и b"],
      correct: 3,
    },
    {
      id: 44,
      question: "Что делает slice()?",
      options: [
        "Извлекает часть массива",
        "Удаляет элементы",
        "Добавляет элементы",
        "Сортирует массив",
      ],
      correct: 0,
    },
    {
      id: 45,
      question: "Какой тип у объекта?",
      options: ["object", "array", "null", "function"],
      correct: 0,
    },
    {
      id: 46,
      question: "Как проверить undefined?",
      options: [
        "typeof x === 'undefined'",
        "x === null",
        "x == undefined",
        "x is undefined",
      ],
      correct: 0,
    },
    {
      id: 47,
      question: "Что делает Math.floor()?",
      options: [
        "Округляет вниз",
        "Округляет вверх",
        "Округляет к ближайшему",
        "Возвращает модуль",
      ],
      correct: 0,
    },
    {
      id: 48,
      question: "Что такое falsy значение?",
      options: [
        "false, 0, ''",
        "true, 1, 'a'",
        "null, undefined, NaN",
        "Оба a и c",
      ],
      correct: 3,
    },
    {
      id: 49,
      question: "Как перевернуть массив?",
      options: ["reverse()", "sort()", "map()", "flip()"],
      correct: 0,
    },
    {
      id: 50,
      question: "Что делает join()?",
      options: [
        "Объединяет в строку",
        "Разделяет строку",
        "Добавляет элементы",
        "Удаляет элементы",
      ],
      correct: 0,
    },
    {
      id: 51,
      question: "Какое значение по умолчанию у переменной?",
      options: ["undefined", "null", "0", ""],
      correct: 0,
    },
    {
      id: 52,
      question: "Как создать дату?",
      options: ["new Date()", "Date.now()", "getDate()", "date()"],
      correct: 0,
    },
    {
      id: 53,
      question: "Что делает trim()?",
      options: [
        "Удаляет пробелы",
        "Добавляет пробелы",
        "Меняет регистр",
        "Разделяет строку",
      ],
      correct: 0,
    },
    {
      id: 54,
      question: "Что возвращает 1 + true?",
      options: ["2", "1", "1true", "true"],
      correct: 0,
    },
    {
      id: 55,
      question: "Как проверить фокус элемента?",
      options: [
        "document.activeElement",
        "document.focus()",
        "element.focused",
        "element.active",
      ],
      correct: 0,
    },
    {
      id: 56,
      question: "Что делает forEach()?",
      options: [
        "Перебирает элементы",
        "Мапит элементы",
        "Фильтрует элементы",
        "Редьюсит массив",
      ],
      correct: 0,
    },
    {
      id: 57,
      question: "Что такое примитивный тип?",
      options: [
        "number, string, boolean",
        "object, array, function",
        "class, module",
        "Все",
      ],
      correct: 0,
    },
    {
      id: 58,
      question: "Как получить текущий URL?",
      options: [
        "window.location.href",
        "document.url",
        "location.url",
        "window.url",
      ],
      correct: 0,
    },
    {
      id: 59,
      question: "Что делает setTimeout(fn, 0)?",
      options: [
        "Выполняет сразу",
        "Откладывает выполнение",
        "Отменяет функцию",
        "Выполняет после цикла",
      ],
      correct: 3,
    },
    {
      id: 60,
      question: "Какой тип у функции?",
      options: ["function", "object", "method", "class"],
      correct: 0,
    },
    {
      id: 61,
      question: "Как строку в число?",
      options: ["Number()", "parseInt()", "parseFloat()", "Все"],
      correct: 3,
    },
    {
      id: 62,
      question: "Что делает shift()?",
      options: [
        "Удаляет первый элемент",
        "Добавляет первый элемент",
        "Удаляет последний",
        "Добавляет последний",
      ],
      correct: 0,
    },
    {
      id: 63,
      question: "Что возвращает '5' - 1?",
      options: ["4", "51", "NaN", "undefined"],
      correct: 0,
    },
    {
      id: 64,
      question: "Как получить подстроку?",
      options: ["substring()", "slice()", "substr()", "Все"],
      correct: 3,
    },
    {
      id: 65,
      question: "Что делает createElement()?",
      options: [
        "Создает элемент",
        "Удаляет элемент",
        "Клонирует элемент",
        "Выбирает элемент",
      ],
      correct: 0,
    },
    {
      id: 66,
      question: "Какой scope у var?",
      options: [
        "Функциональный или глобальный",
        "Блочный",
        "Модульный",
        "Локальный",
      ],
      correct: 0,
    },
    {
      id: 67,
      question: "Что такое truthy значение?",
      options: ["true, 1, 'a'", "false, 0, ''", "null, undefined", "NaN"],
      correct: 0,
    },
  ],
  medium: [
    {
      id: 68,
      question: "Что такое замыкание?",
      options: [
        "Функция с лексической областью",
        "Метод объекта",
        "Глобальная переменная",
        "Обработчик события",
      ],
      correct: 0,
    },
    {
      id: 69,
      question: "Что делает map()?",
      options: [
        "Создает новый массив",
        "Фильтрует массив",
        "Редьюсит массив",
        "Мутирует массив",
      ],
      correct: 0,
    },
    {
      id: 70,
      question: "Что такое цикл событий?",
      options: [
        "Обрабатывает асинхронность",
        "Компилирует код",
        "Управляет DOM",
        "Парсит JSON",
      ],
      correct: 0,
    },
    {
      id: 71,
      question: "Что возвращает Promise.resolve()?",
      options: [
        "Выполненный промис",
        "Отклоненный промис",
        "Ожидающий промис",
        "null",
      ],
      correct: 0,
    },
    {
      id: 72,
      question: "Как обрабатывать ошибки в промисах?",
      options: ["try/catch", ".catch()", ".then()", "Оба a и b"],
      correct: 3,
    },
    {
      id: 73,
      question: "Что такое async/await?",
      options: [
        "Синтаксический сахар для промисов",
        "Новый тип цикла",
        "Обработчик события",
        "Метод класса",
      ],
      correct: 0,
    },
    {
      id: 74,
      question: "Что делает Object.create()?",
      options: [
        "Создает новый объект",
        "Клонирует объект",
        "Объединяет объекты",
        "Удаляет объект",
      ],
      correct: 0,
    },
    {
      id: 75,
      question: "Что такое прототипное наследование?",
      options: [
        "Наследование через прототип",
        "Классовое наследование",
        "Копирование объекта",
        "Импорт модуля",
      ],
      correct: 0,
    },
    {
      id: 76,
      question: "Что такое this в функции?",
      options: [
        "Контекст вызова",
        "Глобальный объект",
        "Сама функция",
        "Родительский объект",
      ],
      correct: 0,
    },
    {
      id: 77,
      question: "Как привязать this?",
      options: ["bind()", "call()", "apply()", "Все"],
      correct: 3,
    },
    {
      id: 78,
      question: "Что делает filter()?",
      options: [
        "Создает отфильтрованный массив",
        "Мапит массив",
        "Редьюсит массив",
        "Мутирует массив",
      ],
      correct: 0,
    },
    {
      id: 79,
      question: "Что такое функция высшего порядка?",
      options: [
        "Принимает/возвращает функцию",
        "Перебирает массив",
        "Обрабатывает события",
        "Парсит JSON",
      ],
      correct: 0,
    },
    {
      id: 80,
      question: "Что делает reduce()?",
      options: [
        "Сводит к одному значению",
        "Мапит массив",
        "Фильтрует массив",
        "Мутирует массив",
      ],
      correct: 0,
    },
    {
      id: 81,
      question: "Что такое делегирование событий?",
      options: [
        "Обработка на родителе",
        "Множественные слушатели",
        "Удаление события",
        "Создание события",
      ],
      correct: 0,
    },
    {
      id: 82,
      question: "Что делает JSON.stringify()?",
      options: [
        "Преобразует в строку",
        "Парсит JSON",
        "Клонирует объект",
        "Объединяет объекты",
      ],
      correct: 0,
    },
    {
      id: 83,
      question: "Что такое модуль в ES6?",
      options: ["Переиспользуемый код", "Класс", "Функция", "Объект"],
      correct: 0,
    },
    {
      id: 84,
      question: "Как экспортировать модуль?",
      options: ["export", "module.exports", "return", "Оба a и b"],
      correct: 0,
    },
    {
      id: 85,
      question: "Что делает import?",
      options: [
        "Загружает модуль",
        "Экспортирует модуль",
        "Определяет функцию",
        "Парсит JSON",
      ],
      correct: 0,
    },
    {
      id: 86,
      question: "Что такое callback hell?",
      options: [
        "Вложенные коллбэки",
        "Обработка ошибок",
        "Асинхронный цикл",
        "Цепочка промисов",
      ],
      correct: 0,
    },
    {
      id: 87,
      question: "Что делает Promise.all()?",
      options: [
        "Разрешает все промисы",
        "Отклоняет все",
        "Выполняет один промис",
        "Цепочка промисов",
      ],
      correct: 0,
    },
    {
      id: 88,
      question: "Что такое класс в ES6?",
      options: [
        "Синтаксический сахар",
        "Новый тип данных",
        "Функция",
        "Модуль",
      ],
      correct: 0,
    },
    {
      id: 89,
      question: "Что делает super()?",
      options: [
        "Вызывает родительский конструктор",
        "Создает объект",
        "Привязывает this",
        "Экспортирует класс",
      ],
      correct: 0,
    },
    {
      id: 90,
      question: "Что такое генераторная функция?",
      options: [
        "Выдает значения",
        "Возвращает массив",
        "Обрабатывает ошибки",
        "Парсит JSON",
      ],
      correct: 0,
    },
    {
      id: 91,
      question: "Что делает yield?",
      options: [
        "Приостанавливает генератор",
        "Возвращает значение",
        "Выбрасывает ошибку",
        "Перебирает массив",
      ],
      correct: 0,
    },
    {
      id: 92,
      question: "Что такое Set?",
      options: [
        "Уникальные значения",
        "Пары ключ-значение",
        "Упорядоченный массив",
        "Коллекция функций",
      ],
      correct: 0,
    },
    {
      id: 93,
      question: "Что такое Map?",
      options: [
        "Пары ключ-значение",
        "Уникальные значения",
        "Упорядоченный массив",
        "Коллекция функций",
      ],
      correct: 0,
    },
    {
      id: 94,
      question: "Что делает find()?",
      options: [
        "Возвращает первый подходящий",
        "Фильтрует массив",
        "Мапит массив",
        "Редьюсит массив",
      ],
      correct: 0,
    },
    {
      id: 95,
      question: "Что такое Symbol?",
      options: ["Уникальный идентификатор", "Строка", "Число", "Объект"],
      correct: 0,
    },
    {
      id: 96,
      question: "Что делает Object.keys()?",
      options: [
        "Возвращает имена свойств",
        "Возвращает значения",
        "Клонирует объект",
        "Объединяет объекты",
      ],
      correct: 0,
    },
    {
      id: 97,
      question: "Что такое rest-параметр?",
      options: [
        "Собирает аргументы",
        "Распределяет массив",
        "Привязывает this",
        "Выбрасывает ошибку",
      ],
      correct: 0,
    },
    {
      id: 98,
      question: "Что такое spread-оператор?",
      options: [
        "Распределяет элементы",
        "Собирает аргументы",
        "Привязывает this",
        "Парсит JSON",
      ],
      correct: 0,
    },
    {
      id: 99,
      question: "Что делает try/catch?",
      options: [
        "Обрабатывает ошибки",
        "Перебирает массив",
        "Парсит JSON",
        "Экспортирует модуль",
      ],
      correct: 0,
    },
    {
      id: 100,
      question: "Что такое Promise?",
      options: [
        "Асинхронная операция",
        "Синхронная функция",
        "Обработчик ошибок",
        "Цикл",
      ],
      correct: 0,
    },
    {
      id: 101,
      question: "Что возвращает fetch()?",
      options: ["Promise", "Object", "Array", "String"],
      correct: 0,
    },
    {
      id: 102,
      question: "Что такое всплытие событий?",
      options: [
        "Событие распространяется вверх",
        "Событие останавливается",
        "Событие зацикливается",
        "Событие создается",
      ],
      correct: 0,
    },
    {
      id: 103,
      question: "Как предотвратить всплытие?",
      options: [
        "stopPropagation()",
        "preventDefault()",
        "stopEvent()",
        "cancelBubble",
      ],
      correct: 0,
    },
    {
      id: 104,
      question: "Что такое конструктор?",
      options: [
        "Создает объект",
        "Привязывает this",
        "Парсит JSON",
        "Экспортирует модуль",
      ],
      correct: 0,
    },
    {
      id: 105,
      question: "Что проверяет instanceof?",
      options: [
        "Тип объекта",
        "Тип переменной",
        "Значение функции",
        "Длина строки",
      ],
      correct: 0,
    },
    {
      id: 106,
      question: "Что такое WeakMap?",
      options: [
        "Слабо удерживает ключи",
        "Сильно удерживает ключи",
        "Уникальные значения",
        "Упорядоченный массив",
      ],
      correct: 0,
    },
    {
      id: 107,
      question: "Что делает every()?",
      options: [
        "Проверяет все элементы",
        "Фильтрует элементы",
        "Мапит элементы",
        "Редьюсит массив",
      ],
      correct: 0,
    },
    {
      id: 108,
      question: "Что такое Proxy?",
      options: [
        "Перехватывает операции",
        "Клонирует объект",
        "Объединяет объекты",
        "Парсит JSON",
      ],
      correct: 0,
    },
    {
      id: 109,
      question: "Что делает Reflect.get()?",
      options: [
        "Получает свойство",
        "Устанавливает свойство",
        "Удаляет свойство",
        "Клонирует объект",
      ],
      correct: 0,
    },
    {
      id: 110,
      question: "Что такое tagged template?",
      options: [
        "Обрабатывает шаблонный литерал",
        "Парсит строку",
        "Перебирает массив",
        "Обрабатывает ошибки",
      ],
      correct: 0,
    },
    {
      id: 111,
      question: "Что делает some()?",
      options: [
        "Проверяет некоторые элементы",
        "Фильтрует все",
        "Мапит все",
        "Редьюсит массив",
      ],
      correct: 0,
    },
    {
      id: 112,
      question: "Что такое BigInt?",
      options: [
        "Большое целое число",
        "Число с плавающей точкой",
        "Строка",
        "Объект",
      ],
      correct: 0,
    },
    {
      id: 113,
      question: "Что делает Object.values()?",
      options: [
        "Возвращает значения свойств",
        "Возвращает ключи",
        "Клонирует объект",
        "Объединяет объекты",
      ],
      correct: 0,
    },
    {
      id: 114,
      question: "Что такое параметр по умолчанию?",
      options: [
        "Запасное значение",
        "Обязательное значение",
        "Глобальная переменная",
        "Обработчик события",
      ],
      correct: 0,
    },
    {
      id: 115,
      question: "Что делает flat()?",
      options: [
        "Раскрывает массив",
        "Мапит массив",
        "Фильтрует массив",
        "Редьюсит массив",
      ],
      correct: 0,
    },
    {
      id: 116,
      question: "Что такое Promise.race?",
      options: [
        "Разрешает первый промис",
        "Разрешает все",
        "Отклоняет все",
        "Цепочка промисов",
      ],
      correct: 0,
    },
    {
      id: 117,
      question: "Что делает Object.assign()?",
      options: [
        "Копирует свойства",
        "Клонирует объект",
        "Объединяет объекты",
        "Оба a и c",
      ],
      correct: 3,
    },
    {
      id: 118,
      question: "Что такое приватное поле?",
      options: ["#field", "_field", "private field", "static field"],
      correct: 0,
    },
    {
      id: 119,
      question: "Что делает includes()?",
      options: [
        "Проверяет наличие элемента",
        "Добавляет элемент",
        "Удаляет элемент",
        "Мапит элемент",
      ],
      correct: 0,
    },
    {
      id: 120,
      question: "Что такое статический метод?",
      options: [
        "Метод уровня класса",
        "Метод экземпляра",
        "Глобальная функция",
        "Обработчик события",
      ],
      correct: 0,
    },
    {
      id: 121,
      question: "Что делает Object.freeze()?",
      options: [
        "Запрещает изменения",
        "Клонирует объект",
        "Объединяет объекты",
        "Парсит JSON",
      ],
      correct: 0,
    },
    {
      id: 122,
      question: "Что такое getter?",
      options: [
        "Доступ к свойству",
        "Метод",
        "Конструктор",
        "Обработчик события",
      ],
      correct: 0,
    },
    {
      id: 123,
      question: "Что делает concat()?",
      options: [
        "Объединяет массивы",
        "Разделяет массив",
        "Фильтрует массив",
        "Мапит массив",
      ],
      correct: 0,
    },
    {
      id: 124,
      question: "Что такое setter?",
      options: [
        "Мутатор свойства",
        "Метод",
        "Конструктор",
        "Обработчик события",
      ],
      correct: 0,
    },
    {
      id: 125,
      question: "Что делает finally()?",
      options: [
        "Выполняется после промиса",
        "Разрешает промис",
        "Отклоняет промис",
        "Цепочка промисов",
      ],
      correct: 0,
    },
    {
      id: 126,
      question: "Что такое WeakSet?",
      options: [
        "Слабо удерживает объекты",
        "Сильно удерживает объекты",
        "Уникальные значения",
        "Упорядоченный массив",
      ],
      correct: 0,
    },
    {
      id: 127,
      question: "Что делает fill()?",
      options: [
        "Заполняет массив значением",
        "Фильтрует массив",
        "Мапит массив",
        "Редьюсит массив",
      ],
      correct: 0,
    },
    {
      id: 128,
      question: "Что такое область модуля?",
      options: [
        "Локальная для модуля",
        "Глобальная",
        "Функциональная",
        "Блочная",
      ],
      correct: 0,
    },
    {
      id: 129,
      question: "Что делает Object.entries()?",
      options: [
        "Возвращает пары ключ-значение",
        "Возвращает ключи",
        "Возвращает значения",
        "Клонирует объект",
      ],
      correct: 0,
    },
    {
      id: 130,
      question: "Что такое динамический импорт?",
      options: [
        "Асинхронная загрузка модуля",
        "Экспорт модуля",
        "Парсинг JSON",
        "Обработка событий",
      ],
      correct: 0,
    },
    {
      id: 131,
      question: "Что делает flatMap()?",
      options: [
        "Мапит и раскрывает массив",
        "Фильтрует массив",
        "Редьюсит массив",
        "Мутирует массив",
      ],
      correct: 0,
    },
    {
      id: 132,
      question: "Что такое Temporal API?",
      options: [
        "Обработка даты/времени",
        "Обработка ошибок",
        "Система модулей",
        "Цикл событий",
      ],
      correct: 0,
    },
    {
      id: 133,
      question: "Что делает Object.seal()?",
      options: [
        "Запрещает добавление/удаление свойств",
        "Замораживает объект",
        "Клонирует объект",
        "Объединяет объекты",
      ],
      correct: 0,
    },
    {
      id: 134,
      question: "Что такое Promise.any?",
      options: [
        "Разрешает первый выполненный",
        "Разрешает все",
        "Отклоняет все",
        "Цепочка промисов",
      ],
      correct: 0,
    },
  ],
  hard: [
    {
      id: 135,
      question: "Что такое Proxy handler?",
      options: [
        "Определяет поведение",
        "Клонирует объект",
        "Объединяет объекты",
        "Парсит JSON",
      ],
      correct: 0,
    },
    {
      id: 136,
      question: "Что делает Reflect.set()?",
      options: [
        "Устанавливает свойство",
        "Получает свойство",
        "Удаляет свойство",
        "Клонирует объект",
      ],
      correct: 0,
    },
    {
      id: 137,
      question: "Что такое делегирование генератора?",
      options: [
        "Выдает из другого генератора",
        "Возвращает массив",
        "Выбрасывает ошибку",
        "Парсит JSON",
      ],
      correct: 0,
    },
    {
      id: 138,
      question: "Что делает Symbol.iterator?",
      options: [
        "Определяет итерацию",
        "Создает уникальный ID",
        "Парсит JSON",
        "Обрабатывает ошибки",
      ],
      correct: 0,
    },
    {
      id: 139,
      question: "Что такое асинхронный генератор?",
      options: [
        "Выдает промисы",
        "Возвращает массив",
        "Выбрасывает ошибки",
        "Парсит JSON",
      ],
      correct: 0,
    },
    {
      id: 140,
      question: "Что делает getOwnPropertyDescriptor()?",
      options: [
        "Возвращает дескриптор",
        "Устанавливает свойство",
        "Клонирует объект",
        "Объединяет объекты",
      ],
      correct: 0,
    },
    {
      id: 141,
      question: "Что такое приватный метод?",
      options: [
        "#method()",
        "private method()",
        "_method()",
        "static method()",
      ],
      correct: 0,
    },
    {
      id: 142,
      question: "Что делает Reflect.deleteProperty()?",
      options: [
        "Удаляет свойство",
        "Устанавливает свойство",
        "Получает свойство",
        "Клонирует объект",
      ],
      correct: 0,
    },
    {
      id: 143,
      question: "Что такое WeakRef?",
      options: [
        "Слабая ссылка на объект",
        "Сильная ссылка",
        "Уникальное значение",
        "Упорядоченный массив",
      ],
      correct: 0,
    },
    {
      id: 144,
      question: "Что делает defineProperties()?",
      options: [
        "Определяет свойства",
        "Клонирует объект",
        "Объединяет объекты",
        "Парсит JSON",
      ],
      correct: 0,
    },
    {
      id: 145,
      question: "Что такое top-level await?",
      options: [
        "Await вне async",
        "Глобальный цикл",
        "Обработчик ошибок",
        "Экспорт модуля",
      ],
      correct: 0,
    },
    {
      id: 146,
      question: "Что делает Array.at()?",
      options: [
        "Доступ к индексу",
        "Фильтрует массив",
        "Мапит массив",
        "Редьюсит массив",
      ],
      correct: 0,
    },
    {
      id: 147,
      question: "Что такое Record?",
      options: [
        "Неизменяемый объект",
        "Изменяемый объект",
        "Массив",
        "Функция",
      ],
      correct: 0,
    },
    {
      id: 148,
      question: "Что такое Tuple?",
      options: [
        "Неизменяемый массив",
        "Изменяемый массив",
        "Объект",
        "Функция",
      ],
      correct: 0,
    },
    {
      id: 149,
      question: "Что делает Intl.NumberFormat?",
      options: [
        "Форматирует числа",
        "Парсит строки",
        "Обрабатывает даты",
        "Выбрасывает ошибки",
      ],
      correct: 0,
    },
    {
      id: 150,
      question: "Что такое FinalizationRegistry?",
      options: [
        "Очищает объекты",
        "Клонирует объекты",
        "Объединяет объекты",
        "Парсит JSON",
      ],
      correct: 0,
    },
    {
      id: 151,
      question: "Что делает Symbol.hasInstance?",
      options: [
        "Проверяет instanceof",
        "Создает итератор",
        "Парсит JSON",
        "Обрабатывает ошибки",
      ],
      correct: 0,
    },
    {
      id: 152,
      question: "Что такое логический оператор присваивания?",
      options: ["||=, &&=, ??=", "==, ===", "+, -", "=, +="],
      correct: 0,
    },
    {
      id: 153,
      question: "Что делает getPrototypeOf()?",
      options: [
        "Получает прототип",
        "Устанавливает прототип",
        "Клонирует объект",
        "Объединяет объекты",
      ],
      correct: 0,
    },
    {
      id: 154,
      question: "Что такое опциональная цепочка?",
      options: [
        "?., безопасный доступ",
        "||, запасное",
        "&&, проверка",
        "??, нулевое",
      ],
      correct: 0,
    },
    {
      id: 155,
      question: "Что делает нулевое слияние?",
      options: ["??, запасное", "||, значение", "&&, проверка", "?., доступ"],
      correct: 0,
    },
    {
      id: 156,
      question: "Что такое Temporal API?",
      options: [
        "Расширенная дата/время",
        "Обработка ошибок",
        "Система модулей",
        "Цикл событий",
      ],
      correct: 0,
    },
    {
      id: 157,
      question: "Что делает Symbol.toStringTag?",
      options: [
        "Настраивает toString",
        "Создает итератор",
        "Парсит JSON",
        "Обрабатывает ошибки",
      ],
      correct: 0,
    },
    {
      id: 158,
      question: "Что такое pipeline оператор?",
      options: ["|> в предложении", "| в JavaScript", ">>", "<<"],
      correct: 0,
    },
    {
      id: 159,
      question: "Что делает Reflect.construct()?",
      options: [
        "Создает экземпляр",
        "Устанавливает свойство",
        "Получает свойство",
        "Клонирует объект",
      ],
      correct: 0,
    },
    {
      id: 160,
      question: "Что такое приватный аксессор?",
      options: [
        "#get accessor",
        "get accessor",
        "_get accessor",
        "static accessor",
      ],
      correct: 0,
    },
    {
      id: 161,
      question: "Что делает Symbol.asyncIterator?",
      options: [
        "Определяет асинхронную итерацию",
        "Создает уникальный ID",
        "Парсит JSON",
        "Обрабатывает ошибки",
      ],
      correct: 0,
    },
    {
      id: 162,
      question: "Что такое throw выражение?",
      options: [
        "throw в выражении",
        "throw в функции",
        "throw в цикле",
        "throw в классе",
      ],
      correct: 0,
    },
    {
      id: 163,
      question: "Что делает Object.hasOwn()?",
      options: [
        "Проверяет собственное свойство",
        "Проверяет прототип",
        "Клонирует объект",
        "Объединяет объекты",
      ],
      correct: 0,
    },
    {
      id: 164,
      question: "Что такое pattern matching?",
      options: [
        "Синтаксис как switch",
        "Синтаксис цикла",
        "Обработчик ошибок",
        "Экспорт модуля",
      ],
      correct: 0,
    },
    {
      id: 165,
      question: "Что делает Symbol.species?",
      options: [
        "Определяет производные объекты",
        "Создает итератор",
        "Парсит JSON",
        "Обрабатывает ошибки",
      ],
      correct: 0,
    },
    {
      id: 166,
      question: "Что такое do выражение?",
      options: [
        "Блок, возвращающий значение",
        "Синтаксис цикла",
        "Обработчик ошибок",
        "Экспорт модуля",
      ],
      correct: 0,
    },
    {
      id: 167,
      question: "Что делает Reflect.has()?",
      options: [
        "Проверяет свойство",
        "Устанавливает свойство",
        "Удаляет свойство",
        "Клонирует объект",
      ],
      correct: 0,
    },
    {
      id: 168,
      question: "Что такое class fields?",
      options: [
        "Публичные/приватные поля",
        "Статические методы",
        "Глобальные переменные",
        "Обработчики событий",
      ],
      correct: 0,
    },
    {
      id: 169,
      question: "Что делает Symbol.match?",
      options: [
        "Определяет совпадение regex",
        "Создает итератор",
        "Парсит JSON",
        "Обрабатывает ошибки",
      ],
      correct: 0,
    },
    {
      id: 170,
      question: "Что такое декораторы?",
      options: [
        "Модифицируют классы/функции",
        "Парсят JSON",
        "Обрабатывают события",
        "Перебирают массив",
      ],
      correct: 0,
    },
    {
      id: 171,
      question: "Что делает Reflect.apply()?",
      options: [
        "Вызывает функцию с аргументами",
        "Устанавливает свойство",
        "Получает свойство",
        "Клонирует объект",
      ],
      correct: 0,
    },
    {
      id: 172,
      question: "Что такое namespace модуля?",
      options: [
        "Объект импортированного модуля",
        "Глобальный объект",
        "Область функции",
        "Область класса",
      ],
      correct: 0,
    },
    {
      id: 173,
      question: "Что делает Symbol.replace?",
      options: [
        "Определяет замену строки",
        "Создает итератор",
        "Парсит JSON",
        "Обрабатывает ошибки",
      ],
      correct: 0,
    },
    {
      id: 174,
      question: "Что такое частичное применение?",
      options: [
        "Каррирование функций",
        "Парсинг JSON",
        "Обработка событий",
        "Перебор массива",
      ],
      correct: 0,
    },
    {
      id: 175,
      question: "Что делает Reflect.ownKeys()?",
      options: [
        "Возвращает собственные ключи",
        "Возвращает ключи прототипа",
        "Клонирует объект",
        "Объединяет объекты",
      ],
      correct: 0,
    },
    {
      id: 176,
      question: "Что такое sequence выражение?",
      options: [
        "Значения через запятую",
        "Синтаксис цикла",
        "Обработчик ошибок",
        "Экспорт модуля",
      ],
      correct: 0,
    },
    {
      id: 177,
      question: "Что делает Symbol.search?",
      options: [
        "Определяет поиск строки",
        "Создает итератор",
        "Парсит JSON",
        "Обрабатывает ошибки",
      ],
      correct: 0,
    },
    {
      id: 178,
      question: "Что такое slice нотация?",
      options: [
        "Синтаксис среза массива",
        "Синтаксис цикла",
        "Обработчик ошибок",
        "Экспорт модуля",
      ],
      correct: 0,
    },
    {
      id: 179,
      question: "Что делает preventExtensions()?",
      options: [
        "Запрещает расширение",
        "Клонирует объект",
        "Объединяет объекты",
        "Парсит JSON",
      ],
      correct: 0,
    },
    {
      id: 180,
      question: "Что такое bind-this?",
      options: [
        "Привязывает this в методах",
        "Парсит JSON",
        "Обрабатывает события",
        "Перебирает массив",
      ],
      correct: 0,
    },
    {
      id: 181,
      question: "Что делает Symbol.split?",
      options: [
        "Определяет разделение строки",
        "Создает итератор",
        "Парсит JSON",
        "Обрабатывает ошибки",
      ],
      correct: 0,
    },
    {
      id: 182,
      question: "Что такое first-class протоколы?",
      options: [
        "Пользовательские протоколы",
        "Парсинг JSON",
        "Обработка событий",
        "Перебор массива",
      ],
      correct: 0,
    },
    {
      id: 183,
      question: "Что делает isExtensible()?",
      options: [
        "Проверяет расширяемость",
        "Клонирует объект",
        "Объединяет объекты",
        "Парсит JSON",
      ],
      correct: 0,
    },
    {
      id: 184,
      question: "Что такое function.sent?",
      options: [
        "Получает отправленное значение",
        "Выдает значение",
        "Выбрасывает ошибку",
        "Парсит JSON",
      ],
      correct: 0,
    },
    {
      id: 185,
      question: "Что делает Symbol.toPrimitive?",
      options: [
        "Определяет примитивное преобразование",
        "Создает итератор",
        "Парсит JSON",
        "Обрабатывает ошибки",
      ],
      correct: 0,
    },
    {
      id: 186,
      question: "Что такое call-this-once?",
      options: [
        "Вызывает функцию один раз",
        "Парсит JSON",
        "Обрабатывает события",
        "Перебирает массив",
      ],
      correct: 0,
    },
    {
      id: 187,
      question: "Что делает defineProperty()?",
      options: [
        "Определяет свойство",
        "Получает свойство",
        "Удаляет свойство",
        "Клонирует объект",
      ],
      correct: 0,
    },
    {
      id: 188,
      question: "Что такое static block?",
      options: [
        "Статическая инициализация",
        "Метод экземпляра",
        "Глобальная функция",
        "Обработчик события",
      ],
      correct: 0,
    },
    {
      id: 189,
      question: "Что делает isConcatSpreadable?",
      options: [
        "Контролирует распыление массива",
        "Создает итератор",
        "Парсит JSON",
        "Обрабатывает ошибки",
      ],
      correct: 0,
    },
    {
      id: 190,
      question: "Что такое pattern matching синтаксис?",
      options: [
        "Подобен деструктуризации",
        "Синтаксис цикла",
        "Обработчик ошибок",
        "Экспорт модуля",
      ],
      correct: 0,
    },
    {
      id: 191,
      question: "Что делает getOwnPropertyDescriptors()?",
      options: [
        "Получает все дескрипторы",
        "Устанавливает свойства",
        "Удаляет свойства",
        "Клонирует объект",
      ],
      correct: 0,
    },
    {
      id: 192,
      question: "Что такое throw expressions?",
      options: [
        "Throw в выражениях",
        "Throw в циклах",
        "Throw в классах",
        "Throw в модулях",
      ],
      correct: 0,
    },
    {
      id: 193,
      question: "Что делает Symbol.unscopables?",
      options: [
        "Исключает из with",
        "Создает итератор",
        "Парсит JSON",
        "Обрабатывает ошибки",
      ],
      correct: 0,
    },
    {
      id: 194,
      question: "Что такое module expressions?",
      options: [
        "Динамическое создание модуля",
        "Парсинг JSON",
        "Обработка событий",
        "Перебор массива",
      ],
      correct: 0,
    },
    {
      id: 195,
      question: "Что делает setPrototypeOf()?",
      options: [
        "Устанавливает прототип",
        "Получает прототип",
        "Клонирует объект",
        "Объединяет объекты",
      ],
      correct: 0,
    },
    {
      id: 196,
      question: "Что такое function decorators?",
      options: [
        "Модифицируют функции",
        "Парсят JSON",
        "Обрабатывают события",
        "Перебирают массив",
      ],
      correct: 0,
    },
    {
      id: 197,
      question: "Что делает Symbol.matchAll?",
      options: [
        "Возвращает все совпадения regex",
        "Создает итератор",
        "Парсит JSON",
        "Обрабатывает ошибки",
      ],
      correct: 0,
    },
    {
      id: 198,
      question: "Что такое private state?",
      options: [
        "Инкапсулированное состояние",
        "Парсинг JSON",
        "Обработка событий",
        "Перебор массива",
      ],
      correct: 0,
    },
    {
      id: 199,
      question: "Что делает getOwnPropertyDescriptors()?",
      options: [
        "Получает все дескрипторы",
        "Устанавливает свойства",
        "Удаляет свойства",
        "Клонирует объект",
      ],
      correct: 0,
    },
    {
      id: 200,
      question: "Что такое record и tuple?",
      options: [
        "Неизменяемые структуры данных",
        "Парсинг JSON",
        "Обработка событий",
        "Перебор массива",
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

const TestingJs = () => {
  const [level, setLevel] = useState("easy");
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState(
    randomizeQuestions(rawQuestions)
  );
  const navigate = useNavigate();

  useEffect(() => {
    const savedAnswers = localStorage.getItem("jsQuizAnswers");
    if (savedAnswers) setAnswers(JSON.parse(savedAnswers));
  }, []);

  useEffect(() => {
    localStorage.setItem("jsQuizAnswers", JSON.stringify(answers));
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
    localStorage.removeItem("jsQuizAnswers");
    setShuffledQuestions(randomizeQuestions(rawQuestions));
  };

  const handleBack = () => {
    navigate("/courses/javascript");
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
          Тест по JavaScript
        </motion.h1>
        <p className="text-center mb-8">
          Проверьте свои знания JavaScript на разных уровнях сложности!
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

export default TestingJs;

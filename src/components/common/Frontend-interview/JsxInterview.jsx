import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const questions = [
  {
    question: "В чем разница между let, const и var?",
    answer:
      "var имеет функциональную область видимости и может быть переопределена, let — блочная область видимости и может быть переназначена, const — блочная область и не может быть переназначена (но свойства объекта можно изменять).",
  },
  {
    question: "Что такое замыкание в JavaScript?",
    answer:
      "Замыкание — это функция, которая сохраняет доступ к переменным внешней области даже после завершения выполнения внешней функции.",
  },
  {
    question: "Что такое виртуальный DOM?",
    answer:
      "Виртуальный DOM — это легковесное представление реального DOM в памяти, используемое React для оптимизации обновлений, минимизируя прямые манипуляции с DOM.",
  },
  {
    question: "Что такое JSX?",
    answer:
      "JSX — это расширение синтаксиса JavaScript, позволяющее писать HTML-подобный код в React, который преобразуется в JavaScript.",
  },
  {
    question: "Что такое хуки в React?",
    answer:
      "Хуки — это функции, позволяющие использовать состояние и другие возможности React в функциональных компонентах, например useState и useEffect.",
  },
  {
    question: "Для чего нужен useEffect?",
    answer:
      "useEffect — это хук React для обработки побочных эффектов, таких как загрузка данных, обновление DOM или установка подписок.",
  },
  {
    question: "В чем разница между состоянием и пропсами?",
    answer:
      "Состояние — это внутренние изменяемые данные компонента, а пропсы — это внешние неизменяемые данные, переданные компоненту.",
  },
  {
    question: "Что такое событийный цикл в JavaScript?",
    answer:
      "Событийный цикл — это механизм, который обрабатывает асинхронные задачи, помещая их в очередь и выполняя, когда стек вызовов пуст.",
  },
  {
    question: "Что такое Promise?",
    answer:
      "Promise — это объект, представляющий результат асинхронной операции, успешный или неудачный.",
  },
  {
    question: "Что такое async/await?",
    answer:
      "Async/await — это синтаксический сахар для работы с Promise, позволяющий писать асинхронный код в синхронном стиле.",
  },
  {
    question: "Что такое коробочная модель в CSS?",
    answer:
      "Коробочная модель описывает прямоугольные блоки элементов, включая содержимое, отступы, границы и внешние поля.",
  },
  {
    question: "Что такое Flexbox?",
    answer:
      "Flexbox — это модель компоновки CSS, которая позволяет эффективно выравнивать и распределять пространство внутри контейнера.",
  },
  {
    question: "Что такое CSS Grid?",
    answer:
      "CSS Grid — это система компоновки для создания двумерных макетов с рядами и столбцами.",
  },
  {
    question: "В чем разница между relative и absolute позиционированием?",
    answer:
      "Relative позиционирование смещает элемент относительно его исходной позиции, а absolute — относительно ближайшего позиционированного предка.",
  },
  {
    question: "Что такое медиа-запрос?",
    answer:
      "Медиа-запрос — это техника CSS для применения стилей в зависимости от характеристик устройства, например, размера экрана.",
  },
  {
    question: "Для чего нужен z-index?",
    answer:
      "z-index определяет порядок наложения элементов; элементы с большим значением располагаются выше.",
  },
  {
    question: "Что такое ключ в React?",
    answer:
      "Ключ — это строковый атрибут, помогающий React определять, какие элементы в списке изменились, добавились или удалены.",
  },
  {
    question:
      "В чем разница между контролируемыми и неконтролируемыми компонентами?",
    answer:
      "Контролируемые компоненты управляются состоянием React, а неконтролируемые — через DOM.",
  },
  {
    question: "Для чего нужен useRef?",
    answer:
      "useRef — это хук React, предоставляющий изменяемый объект для сохранения значений между рендерами или доступа к DOM.",
  },
  {
    question: "В чем разница между map и forEach?",
    answer:
      "map создает новый массив с преобразованными элементами, а forEach выполняет функцию для каждого элемента без возврата.",
  },
  {
    question: "Что такое делегирование событий?",
    answer:
      "Делегирование событий — это техника, при которой один обработчик событий на родительском элементе обрабатывает события дочерних элементов.",
  },
  {
    question: "Для чего нужен оператор spread?",
    answer:
      "Оператор spread (...) разворачивает элементы массивов или свойства объектов.",
  },
  {
    question: "Что такое компонент высшего порядка (HOC)?",
    answer:
      "HOC — это функция, которая принимает компонент и возвращает новый с расширенной функциональностью.",
  },
  {
    question: "В чем разница между inline и block элементами?",
    answer:
      "Inline элементы располагаются в строке и не начинаются с новой строки, а block элементы занимают всю ширину и начинаются с новой строки.",
  },
  {
    question: "Для чего нужен атрибут alt в изображениях?",
    answer:
      "Атрибут alt предоставляет альтернативный текст для изображений, используемый экранными читалками для доступности.",
  },
  {
    question: "В чем разница между == и ===?",
    answer:
      "== проверяет равенство значений с приведением типов, а === — равенство значений и типов без приведения.",
  },
  {
    question: "Что такое хоистинг в JavaScript?",
    answer:
      "Хоистинг — это поведение JavaScript, при котором объявления переменных и функций поднимаются в начало их области видимости до выполнения.",
  },
  {
    question: "Для чего нужен хук useCallback?",
    answer:
      "useCallback мемоирует функцию обратного вызова, чтобы предотвратить ненужные повторные рендеры в React.",
  },
  {
    question: "Что такое чистый компонент?",
    answer:
      "Чистый компонент — это компонент React, который рендерится только при изменении пропсов или состояния.",
  },
  {
    question: "В чем разница между клиентским и серверным рендерингом?",
    answer:
      "Клиентский рендеринг рендерит контент в браузере, а серверный — генерирует HTML на сервере.",
  },
  {
    question: "Что такое CORS?",
    answer:
      "CORS (Cross-Origin Resource Sharing) — это механизм, позволяющий или ограничивающий доступ к ресурсам с разных источников.",
  },
  {
    question: "Для чего нужен хук useMemo?",
    answer:
      "useMemo мемоирует результаты вычислений, чтобы избежать их повторного выполнения при каждом рендере.",
  },
  {
    question: "Что такое одностраничное приложение (SPA)?",
    answer:
      "SPA — это веб-приложение, которое загружает одну HTML-страницу и динамически обновляет контент при взаимодействии пользователя.",
  },
  {
    question: "В чем разница между null и undefined?",
    answer:
      "null обозначает намеренное отсутствие значения, а undefined — переменная объявлена, но не присвоена.",
  },
  {
    question: "Для чего нужны ключевые кадры в CSS?",
    answer:
      "Ключевые кадры определяют этапы анимации в CSS, задавая стили на разных точках.",
  },
  {
    question: "В чем разница между поверхностным и глубоким копированием?",
    answer:
      "Поверхностное копирование копирует только верхний уровень свойств, а глубокое — все вложенные объекты.",
  },
  {
    question: "Для чего нужен атрибут aria-label?",
    answer:
      "aria-label предоставляет метку для элементов, улучшая доступность для экранных читалок.",
  },
  {
    question: "В чем разница между margin и padding?",
    answer:
      "Margin — это внешнее пространство вокруг элемента, а padding — внутреннее пространство внутри границы элемента.",
  },
  {
    question: "Для чего нужен хук useContext?",
    answer:
      "useContext позволяет функциональным компонентам получать доступ к контексту React без обертки в Consumer.",
  },
  {
    question: "Что такое сервис-воркер?",
    answer:
      "Сервис-воркер — это скрипт, работающий в фоновом режиме, для поддержки оффлайн-режима и push-уведомлений.",
  },
  {
    question: "В чем разница между синхронным и асинхронным кодом?",
    answer:
      "Синхронный код выполняется последовательно, блокируя выполнение, а асинхронный позволяет выполнять другие задачи во время ожидания.",
  },
  {
    question: "Для чего нужен атрибут data-testid?",
    answer:
      "data-testid используется для выбора элементов в автоматизированных тестах без зависимости от структуры DOM.",
  },
  {
    question: "В чем разница между фреймворком и библиотекой?",
    answer:
      "Фреймворк предоставляет структуру для создания приложений, а библиотека — это набор повторно используемых функций.",
  },
  {
    question: "Что такое tree shaking?",
    answer:
      "Tree shaking — это процесс удаления неиспользуемого кода из финального бандла во время сборки.",
  },
  {
    question: "Для чего нужен хук useReducer?",
    answer:
      "useReducer управляет сложной логикой состояния в React с помощью функции-редюсера.",
  },
  {
    question: "В чем разница между rem и em?",
    answer:
      "rem зависит от размера шрифта корневого элемента, а em — от размера шрифта родительского элемента.",
  },
  {
    question: "Что такое функция обратного вызова?",
    answer:
      "Функция обратного вызова — это функция, переданная в другую функцию в качестве аргумента для выполнения позже.",
  },
  {
    question: "Для чего нужен мета-тег viewport?",
    answer:
      "Мета-тег viewport управляет масштабированием и компоновкой страницы на мобильных устройствах.",
  },
  {
    question: "В чем разница между cookies, localStorage и sessionStorage?",
    answer:
      "Cookies хранят небольшие данные, отправляемые на сервер, localStorage сохраняет данные до очистки, а sessionStorage — на время сессии.",
  },
  {
    question: "Для чего нужен React.Fragment?",
    answer:
      "React.Fragment позволяет группировать несколько элементов без добавления лишних узлов в DOM.",
  },
];

const ballColors = [
  "bg-pink-400",
  "bg-fuchsia-500",
  "bg-purple-500",
  "bg-pink-500",
  "bg-fuchsia-600",
  "bg-purple-600",
  "bg-fuchsia-400",
  "bg-pink-400",
  "bg-fuchsia-500",
  "bg-purple-500",
  "bg-pink-500",
  "bg-fuchsia-600",
  "bg-purple-600",
  "bg-fuchsia-400",
  "bg-pink-400",
  "bg-fuchsia-500",
];

export const JsxInterview = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative min-h-screen bg-gray-900">
      {[...Array(16)].map((_, i) => {
        const isFalling = i % 3 === 0; // Примерно 6 шаров будут падать
        return (
          <motion.div
            key={i}
            className={`absolute rounded-full w-16 h-16 opacity-60 ${
              ballColors[i % ballColors.length]
            } filter blur-sm`}
            initial={{
              x: Math.random() * window.innerWidth,
              y: isFalling ? -100 : Math.random() * window.innerHeight,
            }}
            animate={{
              x: isFalling
                ? Math.random() * window.innerWidth
                : Math.random() * window.innerWidth,
              y: isFalling
                ? window.innerHeight + 100
                : Math.random() * window.innerHeight,
              transition: {
                duration: isFalling ? 7 : 5,
                repeat: Infinity,
                repeatType: "loop",
                ease: isFalling ? "linear" : "easeInOut",
              },
            }}
          />
        );
      })}
      <div className="relative z-10 max-w-4xl mx-auto p-6">
        <h1 className="text-4xl font-bold text-center mb-8 text-fuchsia-400">
          Вопросы по фронтенду
        </h1>
        <div className="space-y-4">
          {questions.map((item, index) => (
            <div key={index} className="bg-gray-800 rounded-lg shadow-lg">
              <button
                className="w-full text-left p-4 flex justify-between items-center text-fuchsia-400"
                onClick={() => toggleQuestion(index)}
              >
                <span className="text-lg font-semibold">{item.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaChevronDown className="text-fuchsia-400" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 text-gray-300">{item.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JsxInterview;

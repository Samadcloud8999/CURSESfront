import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaGlobe,
  FaWrench,
  FaCode,
  FaDatabase,
  FaLock,
  FaMobileAlt,
  FaList,
  FaLink,
  FaImage,
  FaTable,
  FaCheckSquare,
  FaVolumeUp,
  FaEye,
  FaSitemap,
  FaInfoCircle,
  FaExpand,
  FaUser,
  FaChartBar,
  FaPlug,
  FaFileCode,
  FaSearch,
  FaCogs,
  FaRocket,
  FaFont,
  FaStar,
} from "react-icons/fa";
import BackButton from "../../components/orginism/BackButton";

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

const HTMLPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto text-white p-6 bg-gray-900"
    >
      {/* Фиксированная кнопка "Пройти тест" */}
      <motion.a
        href="/testing"
        initial={{ scale: 0.8 }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed top-12 sm:top-16 right-4 bg-black hover:bg-blue-900 text-white font-bold py-1.5 px-3 sm:py-2 sm:px-4 rounded-lg text-xs sm:text-sm md:text-base z-50 shadow-lg"
      >
        Пройти тест
      </motion.a>

      <BackButton />
      <div className="content">
        <motion.h1
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="text-3xl md:text-5xl font-bold mb-6"
        >
          HTML
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-base"
        >
          HTML (HyperText Markup Language) — стандартный язык разметки для
          веб-страниц. Он определяет структуру контента, включая заголовки,
          параграфы, списки, ссылки, формы и мультимедиа. Созданный Тимом
          Бернерсом-Ли в 1990-х годах, HTML эволюционировал до HTML5, ставшего
          стандартом в 2014 году. HTML5 добавил семантические теги, мультимедиа
          и API для интерактивных приложений, делая веб более доступным и
          функциональным.
        </motion.p>
        <Section>
          <h2 className="text-2xl md:text-3xl font-semibold">История HTML</h2>
          <p className="mt-4 text-base">
            HTML появился в 1991 году как инструмент для обмена научной
            информацией через гипертекстовые документы. Первая версия
            поддерживала только базовые теги, такие как <code>&lt;h1&gt;</code>{" "}
            и <code>&lt;p&gt;</code>. HTML 2.0 (1995) стандартизировал формы и
            таблицы, что позволило создавать интерактивные страницы. HTML 3.2
            (1997) добавил поддержку стилей и скриптов, улучшив визуальное
            оформление. HTML 4.01 (1999) интегрировал CSS и JavaScript, введя
            строгие правила валидации. HTML5, выпущенный в 2014 году, стал
            революцией, представив семантические теги (
            <code>&lt;article&gt;</code>, <code>&lt;section&gt;</code>,{" "}
            <code>&lt;nav&gt;</code>), мультимедийные элементы (
            <code>&lt;audio&gt;</code>, <code>&lt;video&gt;</code>) и API, такие
            как Canvas и Geolocation. Сегодня HTML развивается под управлением
            W3C и WHATWG, поддерживая современные веб-приложения, включая
            одностраничные приложения (SPA) и прогрессивные веб-приложения
            (PWA).
          </p>
          <p className="mt-4 text-base">
            HTML5 улучшил доступность с помощью ARIA-атрибутов, повысил SEO за
            счет семантических тегов и добавил API для создания сложных
            приложений. Например, тег <code>&lt;main&gt;</code> обозначает
            основной контент, а <code>&lt;nav&gt;</code> — навигацию, что
            помогает поисковикам и экранным читалкам лучше интерпретировать
            структуру страницы.
          </p>
          <div className="flex justify-center mt-4">
            <FaGlobe className="text-green-400 text-6xl" />
          </div>
        </Section>
        <Section>
          <h2 className="text-2xl md:text-3xl font-semibold">
            Структура HTML-документа
          </h2>
          <p className="mt-4 text-base">
            HTML-документ начинается с декларации{" "}
            <code>&lt;!DOCTYPE html&gt;</code>, указывающей на использование
            HTML5. Корневой элемент <code>&lt;html&gt;</code>
            включает в себя <code>&lt;head&gt;</code> (метаданные) и
            <code>&lt;body&gt;</code> (контент страницы). Внутри{" "}
            <code>&lt;head&gt;</code>
            размещаются теги <code>&lt;title&gt;</code> для названия вкладки,
            <code>&lt;meta charset="UTF-8"&gt;</code> для указания кодировки и
            <code>
              &lt;meta name="viewport" content="width=device-width,
              initial-scale=1.0"&gt;
            </code>
            для адаптивности на мобильных устройствах.
          </p>

          <pre className="bg-gray-800 p-4 rounded mt-4 text-sm overflow-x-auto">
            {`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Моя страница</title>
  </head>
  <body>
    <h1>Привет, мир!</h1>
  </body>
</html>`}
          </pre>

          <p className="mt-4 text-base">
            Атрибут <code>lang="en"</code> повышает доступность и улучшает SEO,
            <code>&lt;meta charset="UTF-8"&gt;</code> обеспечивает корректное
            отображение всех символов (включая кириллицу), а{" "}
            <code>&lt;meta name="viewport"&gt;</code>
            позволяет странице быть адаптивной на мобильных устройствах.
          </p>

          <div className="flex justify-center mt-4">
            <FaWrench className="text-yellow-400 text-6xl" />
          </div>
        </Section>
        <Section>
          <h2 className="text-2xl md:text-3xl font-semibold">
            Семантические теги
          </h2>
          <p className="mt-4 text-base">
            Семантические теги HTML5, такие как <code>&lt;header&gt;</code>,
            <code>&lt;footer&gt;</code>, <code>&lt;main&gt;</code>,
            <code>&lt;article&gt;</code>, <code>&lt;section&gt;</code> и
            <code>&lt;aside&gt;</code>, заменяют универсальный{" "}
            <code>&lt;div&gt;</code>. Они делают структуру страницы более
            понятной для разработчиков, поисковых систем и assistive
            technologies (технологий доступности). Например,{" "}
            <code>&lt;header&gt;</code> обозначает верхнюю часть страницы, а{" "}
            <code>&lt;main&gt;</code> — основной контент. Это значительно
            улучшает навигацию для экранных читалок.
          </p>

          <pre className="bg-gray-800 p-4 rounded mt-4 text-sm overflow-x-auto">
            {`<header>
  <h1>Логотип</h1>
  <nav>
    <ul>
      <li><a href="/">Главная</a></li>
    </ul>
  </nav>
</header>

<main>
  <article>
    <h2>Статья</h2>
    <p>Контент...</p>
  </article>
</main>

<footer>
  <p>© 2025</p>
</footer>`}
          </pre>

          <p className="mt-4 text-base">
            Семантические теги повышают SEO, упрощают индексацию и уменьшают
            необходимость в использовании дополнительных ARIA-атрибутов. Они
            делают HTML-код более читаемым и поддерживаемым.
          </p>

          <div className="flex justify-center mt-4">
            <FaCode className="text-purple-400 text-6xl" />
          </div>
        </Section>
        <Section>
          <h2 className="text-2xl md:text-3xl font-semibold">
            Форматирование текста
          </h2>
          <p className="mt-4 text-base">
            HTML предоставляет теги для структурирования текста:{" "}
            <code>&lt;p&gt;</code> — для параграфов,
            <code>&lt;h1&gt;–&lt;h6&gt;</code> — для заголовков,{" "}
            <code>&lt;strong&gt;</code> — для выделения важного текста,
            <code>&lt;em&gt;</code> — для акцента,{" "}
            <code>&lt;blockquote&gt;</code> — для цитат, и
            <code>&lt;cite&gt;</code> — для указания источника. Эти теги имеют
            семантическое значение, в отличие от устаревших{" "}
            <code>&lt;b&gt;</code> и <code>&lt;i&gt;</code>, которые
            использовались только для стилизации.
          </p>
          <pre className="bg-gray-800 p-4 rounded mt-4 text-sm overflow-x-auto">
            {`<h1>Заголовок</h1>
<p>Это <strong>важный</strong> текст с <em>акцентом</em>.</p>
<blockquote>
  <p>Цитата.</p>
  <cite>Автор</cite>
</blockquote>`}
          </pre>
          <p className="mt-4 text-base">
            Семантическое форматирование текста улучшает читаемость, доступность
            и помогает поисковикам понимать иерархию контента.
          </p>
          <div className="flex justify-center mt-4">
            <FaFont className="text-blue-300 text-6xl" />
          </div>
        </Section>
        <Section>
          <h2 className="text-2xl md:text-3xl font-semibold">Списки</h2>
          <p className="mt-4 text-base">
            HTML поддерживает три типа списков: нумерованные (
            <code>&lt;ol&gt;</code>), маркированные (<code>&lt;ul&gt;</code>) и
            списки определений (<code>&lt;dl&gt;</code>). Элемент{" "}
            <code>&lt;li&gt;</code> используется для пунктов в{" "}
            <code>&lt;ol&gt;</code> и <code>&lt;ul&gt;</code>, а{" "}
            <code>&lt;dt&gt;</code> и <code>&lt;dd&gt;</code> — для терминов и
            их описаний в <code>&lt;dl&gt;</code>.
          </p>
          <pre className="bg-gray-800 p-4 rounded mt-4 text-sm overflow-x-auto">
            {`<ol>
  <li>Пункт 1</li>
  <li>Пункт 2</li>
</ol>

<ul>
  <li>Элемент A</li>
  <li>Элемент B</li>
</ul>

<dl>
  <dt>Термин</dt>
  <dd>Описание</dd>
</dl>`}
          </pre>
          <p className="mt-4 text-base">
            Списки структурируют информацию, улучшая читаемость и навигацию для
            пользователей и экранных читалок.
          </p>
          <div className="flex justify-center mt-4">
            <FaList className="text-red-400 text-6xl" />
          </div>
        </Section>
        <Section>
          <h2 className="text-2xl md:text-3xl font-semibold">Гиперссылки</h2>
          <p className="mt-4 text-base">
            Тег <code>&lt;a&gt;</code> создает гиперссылки. Атрибут{" "}
            <code>href</code> задает URL,
            <code>target="_blank"</code> — открывает ссылку в новой вкладке, а{" "}
            <code>rel="noopener"</code> предотвращает уязвимости безопасности.
            Атрибут <code>title</code> добавляет всплывающую подсказку для
            улучшения UX.
          </p>
          <pre className="bg-gray-800 p-4 rounded mt-4 text-sm overflow-x-auto">
            {`<a href="https://example.com" target="_blank" rel="noopener" title="Перейти">
  Ссылка
</a>`}
          </pre>
          <p className="mt-4 text-base">
            Гиперссылки — основа гипертекстовой природы веба, обеспечивающая
            навигацию между страницами и ресурсами.
          </p>
          <div className="flex justify-center mt-4">
            <FaLink className="text-cyan-300 text-6xl" />
          </div>
        </Section>
        <Section>
          <h2 className="text-2xl md:text-3xl font-semibold">Изображения</h2>
          <p className="mt-4 text-base">
            Тег <code>&lt;img&gt;</code> встраивает изображения. Атрибут{" "}
            <code>src</code> указывает путь,
            <code>alt</code> предоставляет текст для доступности, а{" "}
            <code>loading="lazy"</code> оптимизирует загрузку. Тег{" "}
            <code>&lt;picture&gt;</code> с <code>&lt;source&gt;</code> позволяет
            адаптировать изображения для разных устройств и форматов.
          </p>
          <pre className="bg-gray-800 p-4 rounded mt-4 text-sm overflow-x-auto">
            {`<picture>
  <source srcset="small.webp" type="image/webp">
  <img src="large.jpg" alt="Описание" loading="lazy">
</picture>`}
          </pre>
          <p className="mt-4 text-base">
            Атрибут <code>alt</code> обязателен для доступности, а{" "}
            <code>loading="lazy"</code> снижает время загрузки на мобильных
            устройствах.
          </p>
          <div className="flex justify-center mt-4">
            <FaImage className="text-green-400 text-6xl" />
          </div>
        </Section>
        <Section>
          <h2 className="text-2xl md:text-3xl font-semibold">Таблицы</h2>
          <p className="mt-4 text-base">
            Тег <code>&lt;table&gt;</code> создаёт таблицы для структурированных
            данных. Элементы <code>&lt;tr&gt;</code> (строка),{" "}
            <code>&lt;td&gt;</code> (ячейка) и <code>&lt;th&gt;</code>{" "}
            (заголовок) формируют структуру. Теги <code>&lt;thead&gt;</code>,{" "}
            <code>&lt;tbody&gt;</code> и <code>&lt;tfoot&gt;</code>
            делят таблицу на логические части, а <code>
              &lt;caption&gt;
            </code>{" "}
            добавляет заголовок.
          </p>
          <pre className="bg-gray-800 p-4 rounded mt-4 text-sm overflow-x-auto">
            {`<table>
  <caption>Данные</caption>
  <thead>
    <tr>
      <th>Заголовок</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Ячейка</td>
    </tr>
  </tbody>
</table>`}
          </pre>
          <p className="mt-4 text-base">
            Атрибуты <code>colspan</code> и <code>rowspan</code> позволяют
            объединять ячейки, а ARIA-атрибуты улучшают доступность таблиц.
          </p>
          <div className="flex justify-center mt-4">
            <FaTable className="text-yellow-400 text-6xl" />
          </div>
        </Section>
        <Section>
          <h2 className="text-2xl md:text-3xl font-semibold">Формы</h2>
          <p className="mt-4 text-base">
            Тег <code>&lt;form&gt;</code> используется для сбора
            пользовательских данных. Основные элементы:{" "}
            <code>&lt;input&gt;</code>, <code>&lt;textarea&gt;</code>,{" "}
            <code>&lt;select&gt;</code>,<code>&lt;button&gt;</code>,{" "}
            <code>&lt;label&gt;</code>. Атрибуты <code>action</code> и{" "}
            <code>method</code>
            определяют, куда и как отправлять данные.
          </p>
          <pre className="bg-gray-800 p-4 rounded mt-4 text-sm overflow-x-auto">
            {`<form action="/submit" method="POST">
  <label for="name">Имя:</label>
  <input type="text" id="name" name="name" required>
  <button type="submit">Отправить</button>
</form>`}
          </pre>
          <p className="mt-4 text-base">
            Атрибут <code>required</code> делает поле обязательным, а{" "}
            <code>for</code> связывает <code>&lt;label&gt;</code> с{" "}
            <code>&lt;input&gt;</code> для доступности.
          </p>
          <div className="flex justify-center mt-4">
            <FaCheckSquare className="text-purple-400 text-6xl" />
          </div>
        </Section>
        <Section>
          <h2 className="text-2xl md:text-3xl font-semibold">
            Типы полей ввода
          </h2>
          <p className="mt-4 text-base">
            Тег <code>&lt;input&gt;</code> поддерживает множество типов данных:
            <code>text</code>, <code>email</code>, <code>password</code>,{" "}
            <code>radio</code>,<code>checkbox</code>, <code>file</code>,{" "}
            <code>date</code>, <code>number</code> и др. Каждый тип предлагает
            специфический интерфейс и встроенную валидацию, особенно полезную на
            мобильных устройствах.
          </p>
          <pre className="bg-gray-800 p-4 rounded mt-4 text-sm overflow-x-auto">
            {`<input type="email" name="email" id="email" required>
<input type="radio" name="choice" id="yes" value="yes">
<input type="date" name="dob" required>`}
          </pre>
          <p className="mt-4 text-base">
            Например, <code>email</code> проверяет формат, <code>date</code>{" "}
            вызывает календарь, а <code>number</code> активирует цифровую
            клавиатуру — всё это повышает UX.
          </p>
          <div className="flex justify-center mt-4">
            <FaWrench className="text-blue-300 text-6xl" />
          </div>
        </Section>
        <Section>
          <h2 className="text-2xl md:text-3xl font-semibold">Мультимедиа</h2>
          <p className="mt-4 text-base">
            HTML5 поддерживает мультимедиа без плагинов через теги{" "}
            <code>&lt;audio&gt;</code>, <code>&lt;video&gt;</code>, и{" "}
            <code>&lt;canvas&gt;</code>. Атрибуты <code>controls</code>,{" "}
            <code>autoplay</code>, <code>loop</code>, и <code>muted</code>{" "}
            управляют воспроизведением, а <code>&lt;source&gt;</code> задаёт
            форматы для совместимости.
          </p>
          <pre className="bg-gray-800 p-4 rounded mt-4 text-sm overflow-x-auto">
            {`<video controls>
  <source src="video.mp4" type="video/mp4">
  Ваш браузер не поддерживает видео.
</video>`}
          </pre>
          <p className="mt-4 text-base">
            Тег <code>&lt;track&gt;</code> добавляет субтитры, что улучшает
            доступность для пользователей с нарушениями слуха.
          </p>
          <div className="flex justify-center mt-4">
            <FaVolumeUp className="text-red-400 text-6xl" />
          </div>
        </Section>
        <Section>
          <h2 className="text-2xl md:text-3xl font-semibold">Доступность</h2>
          <p className="mt-4 text-base">
            Доступность обеспечивается с помощью ARIA-атрибутов (
            <code>aria-label</code>, <code>aria-hidden</code>),
            <code>role</code>, и <code>tabindex</code>. Тег{" "}
            <code>&lt;label&gt;</code> связывает текст с полями ввода, а
            семантические теги, такие как <code>&lt;main&gt;</code>, упрощают
            навигацию для экранных читалок.
          </p>
          <pre className="bg-gray-800 p-4 rounded mt-4 text-sm overflow-x-auto">
            {`<button aria-label="Закрыть">X</button>`}
          </pre>
          <p className="mt-4 text-base">
            Доступность делает веб-страницы инклюзивными, обеспечивая поддержку
            пользователей с ограниченными возможностями.
          </p>
          <div className="flex justify-center mt-4">
            <FaEye className="text-cyan-400 text-6xl" />
          </div>
        </Section>
        <Section>
          <h2 className="text-2xl md:text-3xl font-semibold">Микроразметка</h2>
          <p className="mt-4 text-base">
            Микроразметка с использованием Schema.org улучшает SEO, добавляя
            структурированные данные через атрибуты
            <code>itemscope</code> и <code>itemtype</code>. Это позволяет
            поисковикам отображать богатые сниппеты, такие как рейтинги, даты
            публикации или автора.
          </p>
          <pre className="bg-gray-800 p-4 rounded mt-4 text-sm overflow-x-auto">
            {`<article itemscope itemtype="http://schema.org/Article">
  <h2 itemprop="name">Статья</h2>
  <p itemprop="description">Описание</p>
</article>`}
          </pre>
          <p className="mt-4 text-base">
            Микроразметка повышает видимость страницы в поисковых системах,
            улучшая кликабельность.
          </p>
          <div className="flex justify-center mt-4">
            <FaSitemap className="text-green-400 text-6xl" />
          </div>
        </Section>
        <Section>
          <h2 className="text-2xl md:text-3xl font-semibold">Метаданные</h2>
          <p className="mt-4 text-base">
            Тег <code>&lt;meta&gt;</code> задаёт кодировку, описание страницы и
            параметры адаптивности. Тег <code>&lt;link&gt;</code> подключает CSS
            или favicon, а <code>&lt;base&gt;</code> задаёт базовый URL для
            относительных ссылок.
          </p>
          <pre className="bg-gray-800 p-4 rounded mt-4 text-sm overflow-x-auto">
            {`<meta name="description" content="Описание страницы">
<link rel="stylesheet" href="styles.css">`}
          </pre>
          <p className="mt-4 text-base">
            Метаданные улучшают SEO, производительность и корректное отображение
            страницы на разных устройствах.
          </p>
          <div className="flex justify-center mt-4">
            <FaInfoCircle className="text-yellow-400 text-6xl" />
          </div>
        </Section>
        <Section>
          <h2 className="text-2xl md:text-3xl font-semibold">
            Интерактивные элементы
          </h2>
          <p className="mt-4 text-base">
            Теги <code>&lt;details&gt;</code> и <code>&lt;summary&gt;</code>{" "}
            создают раскрывающиеся блоки, а <code>&lt;dialog&gt;</code>{" "}
            используется для модальных окон. Эти элементы обеспечивают
            интерактивность без JavaScript.
          </p>
          <pre className="bg-gray-800 p-4 rounded mt-4 text-sm overflow-x-auto">
            {`<details>
  <summary>Подробности</summary>
  <p>Контент...</p>
</details>`}
          </pre>
          <p className="mt-4 text-base">
            Интерактивные элементы улучшают пользовательский опыт, особенно на
            мобильных устройствах.
          </p>
          <div className="flex justify-center mt-4">
            <FaExpand className="text-purple-400 text-6xl" />
          </div>
        </Section>
        <Section>
          <h2 className="text-2xl md:text-3xl font-semibold">
            Пользовательские атрибуты
          </h2>
          <p className="mt-4 text-base">
            Атрибуты <code>data-*</code> позволяют хранить произвольные данные в
            HTML-элементах, доступные через JavaScript. Они особенно полезны при
            создании интерактивных интерфейсов.
          </p>
          <pre className="bg-gray-800 p-4 rounded mt-4 text-sm overflow-x-auto">
            {`<div data-id="123" data-role="admin">Контент</div>`}
          </pre>
          <p className="mt-4 text-base">
            С помощью <code>dataset</code> JavaScript может легко получить
            доступ к этим значениям:
          </p>
          <pre className="bg-gray-800 p-4 rounded mt-4 text-sm overflow-x-auto">
            {`const element = document.querySelector('div');
console.log(element.dataset.id);    // "123"
console.log(element.dataset.role);  // "admin"`}
          </pre>
          <p className="mt-4 text-base">
            Это делает <code>data-*</code> отличным инструментом для обмена
            информацией между HTML и скриптами без использования классов или id.
          </p>
          <div className="flex justify-center mt-4">
            <FaUser className="text-blue-400 text-6xl" />
          </div>
        </Section>

        <Section>
          <h2 className="text-2xl md:text-3xl font-semibold">
            Индикаторы прогресса
          </h2>
          <p className="mt-4 text-base">
            Теги <code>&lt;progress&gt;</code> и <code>&lt;meter&gt;</code>{" "}
            отображают прогресс или значения в заданном диапазоне.
            <code>&lt;progress&gt;</code> показывает выполнение задачи, а{" "}
            <code>&lt;meter&gt;</code> — значение, например, уровень заряда.
          </p>
          <pre className="bg-gray-800 p-4 rounded mt-4 text-sm overflow-x-auto">
            {`<progress value="70" max="100"></progress>
<meter value="50" min="0" max="100"></meter>`}
          </pre>
          <p className="mt-4 text-base">
            Эти элементы визуализируют данные, улучшая UX в приложениях.
          </p>
          <div className="flex justify-center mt-4">
            <FaChartBar className="text-red-400 text-6xl" />
          </div>
        </Section>

        <Section>
          <h2 className="text-2xl md:text-3xl font-semibold">
            Встраивание контента
          </h2>
          <p className="mt-4 text-base">
            Тег <code>&lt;iframe&gt;</code> встраивает внешние страницы, а{" "}
            <code>&lt;embed&gt;</code> и <code>&lt;object&gt;</code> —
            мультимедиа. Атрибут <code>sandbox</code> ограничивает
            функциональность для повышения безопасности.
          </p>
          <pre className="bg-gray-800 p-4 rounded mt-4 text-sm overflow-x-auto">
            {`<iframe src="https://example.com" title="Встраивание" sandbox="sandbox"></iframe>`}
          </pre>
          <p className="mt-4 text-base">
            <code>&lt;iframe&gt;</code> полезен для интеграции стороннего
            контента, например, карт или видео.
          </p>
          <div className="flex justify-center mt-4">
            <FaPlug className="text-cyan-400 text-6xl" />
          </div>
        </Section>

        <Section>
          <h2 className="text-2xl md:text-3xl font-semibold">Шаблоны</h2>
          <p className="mt-4 text-base">
            Тег <code>&lt;template&gt;</code> хранит HTML-контент, который
            активируется через JavaScript. Это позволяет повторно использовать
            структуры без отображения до обработки.
          </p>
          <pre className="bg-gray-800 p-4 rounded mt-4 text-sm overflow-x-auto">
            {`<template id="my-template">
  <p>Контент</p>
</template>`}
          </pre>
          <p className="mt-4 text-base">
            Шаблоны упрощают динамическое создание элементов в веб-приложениях.
          </p>
          <div className="flex justify-center mt-4">
            <FaFileCode className="text-green-400 text-6xl" />
          </div>
        </Section>

        <Section>
          <h2 className="text-2xl md:text-3xl font-semibold">Скрипты</h2>
          <p className="mt-4 text-base">
            Тег <code>&lt;script&gt;</code> подключает JavaScript-файлы.
            Атрибуты <code>async</code> и <code>defer</code> позволяют управлять
            порядком загрузки:
          </p>
          <ul className="list-disc list-inside mt-2 ml-4 text-base space-y-1">
            <li>
              <code>async</code> — скрипт загружается асинхронно и выполняется
              сразу после загрузки (не дожидаясь HTML).
            </li>
            <li>
              <code>defer</code> — скрипт загружается параллельно, но
              выполняется <strong>после</strong> разбора всей HTML-страницы.
            </li>
          </ul>
          <p className="mt-4 text-base">
            Тег <code>&lt;noscript&gt;</code> используется для показа
            альтернативного контента, если у пользователя отключён JavaScript.
          </p>
          <pre className="bg-gray-800 p-4 rounded mt-4 text-sm overflow-x-auto">
            {`<script src="script.js" defer></script>
<noscript>JavaScript отключён в вашем браузере.</noscript>`}
          </pre>
          <p className="mt-4 text-base">
            Оптимизация загрузки скриптов с помощью <code>async</code> и{" "}
            <code>defer</code> повышает производительность и уменьшает время
            загрузки страницы.
          </p>
          <div className="flex justify-center mt-4">
            <FaCode className="text-yellow-400 text-6xl" />
          </div>
        </Section>

        <Section>
          <h2 className="text-2xl md:text-3xl font-semibold">
            Адаптивные изображения
          </h2>
          <p className="mt-4 text-base">
            Тег <code>&lt;picture&gt;</code> с <code>&lt;source&gt;</code>{" "}
            позволяет загружать изображения в зависимости от размера экрана или
            формата, улучшая производительность на мобильных устройствах.
          </p>
          <pre className="bg-gray-800 p-4 rounded mt-4 text-sm overflow-x-auto">
            {`<picture>
  <source srcset="small.webp" type="image/webp">
  <img src="large.jpg" alt="Описание">
</picture>`}
          </pre>
          <p className="mt-4 text-base">
            Адаптивные изображения уменьшают объём загруженных данных, ускоряя
            загрузку.
          </p>
          <div className="flex justify-center mt-4">
            <FaImage className="text-blue-400 text-6xl" />
          </div>
        </Section>

        <Section>
          <h2 className="text-2xl md:text-3xl font-semibold">
            SEO-оптимизация
          </h2>
          <p className="mt-4 text-base">
            Теги <code>&lt;meta name="description"&gt;</code>,{" "}
            <code>&lt;meta name="keywords"&gt;</code> и семантические элементы
            улучшают ранжирование в поисковых системах. Канонические ссылки (
            <code>&lt;link rel="canonical"&gt;</code>) предотвращают
            дублирование контента.
          </p>
          <pre className="bg-gray-800 p-4 rounded mt-4 text-sm overflow-x-auto">
            {`<meta name="description" content="Описание страницы">
<link rel="canonical" href="https://example.com">`}
          </pre>
          <p className="mt-4 text-base">
            SEO-оптимизация повышает видимость и кликабельность страниц в
            поисковиках.
          </p>
          <div className="flex justify-center mt-4">
            <FaSearch className="text-blue-300 text-6xl" />
          </div>
        </Section>

        <Section>
          <h2 className="text-2xl md:text-3xl font-semibold">Web Components</h2>
          <p className="mt-4 text-base">
            Web Components используют <code>&lt;slot&gt;</code> для
            динамического контента и <code>&lt;template&gt;</code> для
            определения структуры HTML. Они позволяют создавать переиспользуемые
            компоненты, такие как <code>&lt;my-component&gt;</code>,
            инкапсулирующие HTML, CSS и JavaScript, независимо от фреймворков.
          </p>
          <pre className="bg-gray-800 p-4 rounded mt-4 text-sm overflow-x-auto">
            {`<my-component>
  <slot name="content">Контент</slot>
</my-component>`}
          </pre>
          <p className="mt-4 text-base">
            <code>&lt;slot&gt;</code> в Web Components позволяет встраивать
            динамический контент, упрощая разработку модульных приложений.
          </p>
          <div className="flex justify-center mt-4">
            <FaCogs className="text-red-400 text-6xl" />
          </div>
        </Section>

        <Section>
          <h2 className="text-2xl md:text-3xl font-semibold">
            Производительность
          </h2>
          <p className="mt-4 text-base">
            Атрибуты <code>loading="lazy"</code> для <code>&lt;img&gt;</code> и{" "}
            <code>&lt;iframe&gt;</code>, а также <code>async</code> и{" "}
            <code>defer</code> для <code>&lt;script&gt;</code> оптимизируют
            загрузку страницы, снижая время ожидания для пользователей.
          </p>
          <pre className="bg-gray-800 p-4 rounded mt-4 text-sm overflow-x-auto">
            {`<img src="image.jpg" loading="lazy">
<script src="script.js" defer></script>`}
          </pre>
          <p className="mt-4 text-base">
            Оптимизация загрузки страниц улучшает пользовательский опыт и
            SEO-рейтинг.
          </p>
          <div className="flex justify-center mt-4">
            <FaRocket className="text-cyan-400 text-6xl" />
          </div>
        </Section>

        <Section>
          <h2 className="text-2xl md:text-3xl font-semibold">Пройдите тест</h2>
          <p className="mt-4 text-base">
            Проверьте свои знания HTML в тесте из 90 вопросов, охватывающих
            основы, семантику, формы, мультимедиа, доступность, микроразметку и
            продвинутые темы. Тест разделен на три уровня сложности: легкий,
            средний и сложный.
          </p>
          <div className="flex justify-center mt-4">
            <FaStar className="text-yellow-400 text-6xl" />
          </div>
        </Section>
      </div>
    </motion.div>
  );
};

export default HTMLPage;

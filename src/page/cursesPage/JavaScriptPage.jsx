import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaJs,
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

const JavaScriptPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto text-white p-6 bg-gray-900"
    >
      {/* Fixed "Take Test" button */}
      <motion.a
        href="/testjs"
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
          className="text-3xl md:text-5xl font-bold mb-6 flex items-center gap-2"
        >
          <FaJs className="text-yellow-500" /> JavaScript
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-base"
        >
          JavaScript — это высокоуровневый, интерпретируемый язык
          программирования, который является одной из трех основных технологий
          Всемирной паутины наряду с HTML и CSS. Он позволяет добавлять
          интерактивность на веб-страницы, управлять DOM, обрабатывать события,
          выполнять асинхронные операции и создавать сложные веб-приложения.
          Созданный в 1995 году Бренданом Айком в Netscape, JavaScript стал
          стандартом ECMAScript и сегодня используется как на клиентской, так и
          на серверной стороне благодаря платформам вроде Node.js.
        </motion.p>

        <Section>
          <h2 className="text-2xl md:text-3xl font-semibold">
            История JavaScript
          </h2>
          <p className="mt-4 text-base">
            JavaScript был разработан в 1995 году под кодовым названием Mocha,
            затем переименован в LiveScript и, наконец, в JavaScript, чтобы
            ассоциироваться с популярным тогда языком Java. Первая версия
            появилась в браузере Netscape Navigator 2.0. В 1996 году Microsoft
            внедрила JScript в Internet Explorer, что привело к проблемам
            совместимости. Для стандартизации язык был передан ECMA
            International, и в 1997 году вышел стандарт ECMAScript (ES1).
          </p>
          <p className="mt-4 text-base">
            Ключевые вехи включают ES3 (1999) с регулярными выражениями и
            обработкой исключений, ES5 (2009) с JSON и строгими режимами, и
            ES6/ES2015 с модулями, стрелочными функциями и промисами.
            Последующие ежегодные обновления (ES2016–ES2023) добавили новые
            возможности, такие как async/await, опциональная цепочка и
            логические операторы присваивания. Сегодня JavaScript — один из
            самых популярных языков, согласно опросам Stack Overflow.
          </p>
          <div className="flex justify-center mt-4">
            <FaCode className="text-yellow-400 text-6xl" />
          </div>
        </Section>

        <Section>
          <h2 className="text-2xl md:text-3xl font-semibold">
            Основы синтаксиса
          </h2>
          <p className="mt-4 text-base">
            JavaScript — это язык с динамической типизацией, где переменные
            объявляются с помощью <code>var</code>, <code>let</code> или{" "}
            <code>const</code>. <code>let</code> и <code>const</code> имеют
            блочную область видимости, в отличие от <code>var</code>, которая
            использует функциональную или глобальную. Например:
          </p>
          <pre className="bg-gray-800 p-4 rounded mt-4 text-sm overflow-x-auto">
            {`let x = 10;
const name = "Alice";
if (true) {
  let x = 20; // Локальная переменная
  console.log(x); // 20
}
console.log(x); // 10`}
          </pre>
          <p className="mt-4 text-base">
            JavaScript поддерживает примитивные типы (числа, строки, булевы
            значения, null, undefined, символы, BigInt) и объекты (массивы,
            функции, объекты). Операторы включают арифметические (+, -, *, /),
            логические (&&, ||, !), сравнения (==, ===) и присваивания (=, +=).
            Строгое равенство (===) проверяет тип и значение, в отличие от
            нестрогого (==).
          </p>
          <div className="flex justify-center mt-4">
            <FaCogs className="text-blue-400 text-6xl" />
          </div>
        </Section>

        <Section>
          <h2 className="text-2xl md:text-3xl font-semibold">Функции</h2>
          <p className="mt-4 text-base">
            Функции в JavaScript — это объекты первого класса, которые могут
            быть присвоены переменным, переданы как аргументы или возвращены из
            других функций. Они объявляются через ключевое слово{" "}
            <code>function</code>, выражения функций или стрелочные функции
            (ES6).
          </p>
          <pre className="bg-gray-800 p-4 rounded mt-4 text-sm overflow-x-auto">
            {`// Объявление функции
function greet(name) {
  return \`Hello, \${name}!\`;
}

// Стрелочная функция
const add = (a, b) => a + b;

console.log(greet("Alice")); // Hello, Alice!
console.log(add(2, 3)); // 5`}
          </pre>
          <p className="mt-4 text-base">
            Функции поддерживают замыкания, позволяя внутренней функции
            сохранять доступ к переменным внешней даже после ее выполнения. Это
            основа для паттернов, таких как модули:
          </p>
          <pre className="bg-gray-800 p-4 rounded mt-4 text-sm overflow-x-auto">
            {`function counter() {
  let count = 0;
  return function() {
    return count++;
  };
}
const myCounter = counter();
console.log(myCounter()); // 0
console.log(myCounter()); // 1`}
          </pre>
          <div className="flex justify-center mt-4">
            <FaSync className="text-green-400 text-6xl" />
          </div>
        </Section>

        <Section>
          <h2 className="text-2xl md:text-3xl font-semibold">Работа с DOM</h2>
          <p className="mt-4 text-base">
            JavaScript взаимодействует с веб-страницами через Document Object
            Model (DOM), представляющий HTML-документ как дерево объектов.
            Основные методы включают <code>getElementById</code>,{" "}
            <code>querySelector</code>, <code>createElement</code> и{" "}
            <code>appendChild</code>.
          </p>
          <pre className="bg-gray-800 p-4 rounded mt-4 text-sm overflow-x-auto">
            {`const button = document.querySelector("#myButton");
button.addEventListener("click", () => {
  const div = document.createElement("div");
  div.textContent = "Hello, World!";
  document.body.appendChild(div);
});`}
          </pre>
          <p className="mt-4 text-base">
            События, такие как <code>click</code>, <code>input</code> или{" "}
            <code>mouseover</code>, обрабатываются через{" "}
            <code>addEventListener</code>. Делегирование событий позволяет
            эффективно управлять множеством элементов, обрабатывая события на
            родительском элементе.
          </p>
          <div className="flex justify-center mt-4">
            <FaWindowMaximize className="text-purple-400 text-6xl" />
          </div>
        </Section>

        <Section>
          <h2 className="text-2xl md:text-3xl font-semibold">
            Асинхронное программирование
          </h2>
          <p className="mt-4 text-base">
            JavaScript выполняется в однопоточном режиме, но поддерживает
            асинхронность через цикл событий (Event Loop), коллбэки, промисы и
            async/await. Промисы, введенные в ES6, управляют асинхронными
            операциями, такими как HTTP-запросы:
          </p>
          <pre className="bg-gray-800 p-4 rounded mt-4 text-sm overflow-x-auto">
            {`fetch("https://api.example.com/data")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));`}
          </pre>
          <p className="mt-4 text-base">
            Async/await упрощает работу с промисами, делая код похожим на
            синхронный:
          </p>
          <pre className="bg-gray-800 p-4 rounded mt-4 text-sm overflow-x-auto">
            {`async function getData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
getData();`}
          </pre>
          <p className="mt-4 text-base">
            Асинхронные функции возвращают промисы, что позволяет комбинировать
            их с <code>Promise.all</code> или <code>Promise.race</code> для
            параллельного выполнения задач.
          </p>
          <div className="flex justify-center mt-4">
            <FaDatabase className="text-cyan-400 text-6xl" />
          </div>
        </Section>

        <Section>
          <h2 className="text-2xl md:text-3xl font-semibold">
            Объекты и прототипы
          </h2>
          <p className="mt-4 text-base">
            JavaScript использует прототипное наследование, где объекты
            наследуют свойства через цепочку прототипов. Каждый объект имеет
            свойство <code>__proto__</code>, ссылающееся на прототип. Например:
          </p>
          <pre className="bg-gray-800 p-4 rounded mt-4 text-sm overflow-x-auto">
            {`const animal = {
  eats: true
};
const dog = Object.create(animal);
dog.barks = true;
console.log(dog.eats); // true (унаследовано)`}
          </pre>
          <p className="mt-4 text-base">
            Конструкторы и ключевое слово <code>new</code> создают экземпляры
            объектов:
          </p>
          <pre className="bg-gray-800 p-4 rounded mt-4 text-sm overflow-x-auto">
            {`function Person(name) {
  this.name = name;
}
Person.prototype.sayHello = function() {
  return \`Hello, I'm \${this.name}\`;
};
const alice = new Person("Alice");
console.log(alice.sayHello()); // Hello, I'm Alice`}
          </pre>
          <p className="mt-4 text-base">
            ES6 ввел классы как синтаксический сахар для конструкторов:
          </p>
          <pre className="bg-gray-800 p-4 rounded mt-4 text-sm overflow-x-auto">
            {`class Person {
  constructor(name) {
    this.name = name;
  }
  sayHello() {
    return \`Hello, I'm \${this.name}\`;
  }
}
const bob = new Person("Bob");
console.log(bob.sayHello()); // Hello, I'm Bob`}
          </pre>
          <div className="flex justify-center mt-4">
            <FaPuzzlePiece className="text-red-400 text-6xl" />
          </div>
        </Section>

        <Section>
          <h2 className="text-2xl md:text-3xl font-semibold">Модули</h2>
          <p className="mt-4 text-base">
            Модули, введенные в ES6, позволяют организовать код в
            переиспользуемые блоки. Экспорт и импорт осуществляются через{" "}
            <code>export</code> и <code>import</code>:
          </p>
          <pre className="bg-gray-800 p-4 rounded mt-4 text-sm overflow-x-auto">
            {`// math.js
export const add = (a, b) => a + b;
export const PI = 3.14159;

// main.js
import { add, PI } from "./math.js";
console.log(add(2, 3)); // 5
console.log(PI); // 3.14159`}
          </pre>
          <p className="mt-4 text-base">
            Модули поддерживают динамический импорт с помощью{" "}
            <code>import()</code>, что полезно для асинхронной загрузки кода.
            CommonJS, используемый в Node.js, применяет{" "}
            <code>module.exports</code> и <code>require</code>, но ES-модули
            становятся стандартом.
          </p>
          <div className="flex justify-center mt-4">
            <FaArrowRight className="text-blue-400 text-6xl" />
          </div>
        </Section>

        <Section>
          <h2 className="text-2xl md:text-3xl font-semibold">
            Работа с массивами
          </h2>
          <p className="mt-4 text-base">
            Массивы в JavaScript — это объекты, предоставляющие методы для
            манипуляций, такие как <code>map</code>, <code>filter</code>,{" "}
            <code>reduce</code>, <code>forEach</code>, <code>slice</code> и{" "}
            <code>splice</code>. Пример:
          </p>
          <pre className="bg-gray-800 p-4 rounded mt-4 text-sm overflow-x-auto">
            {`const numbers = [1, 2, 3, 4];
const squares = numbers.map(n => n * n);
const evens = numbers.filter(n => n % 2 === 0);
const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log(squares); // [1, 4, 9, 16]
console.log(evens); // [2, 4]
console.log(sum); // 10`}
          </pre>
          <p className="mt-4 text-base">
            ES6 добавил методы <code>find</code>, <code>findIndex</code>,{" "}
            <code>flat</code> и <code>flatMap</code>, а также спред-оператор
            (...) для копирования или объединения массивов:
          </p>
          <pre className="bg-gray-800 p-4 rounded mt-4 text-sm overflow-x-auto">
            {`const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4]`}
          </pre>
          <div className="flex justify-center mt-4">
            <FaServer className="text-green-400 text-6xl" />
          </div>
        </Section>

        <Section>
          <h2 className="text-2xl md:text-3xl font-semibold">
            Обработка ошибок
          </h2>
          <p className="mt-4 text-base">
            JavaScript использует конструкцию <code>try/catch</code> для
            обработки ошибок. Ошибки создаются с помощью <code>throw</code> или
            возникают автоматически:
          </p>
          <pre className="bg-gray-800 p-4 rounded mt-4 text-sm overflow-x-auto">
            {`try {
  const data = JSON.parse("invalid json");
} catch (error) {
  console.error(error.message);
} finally {
  console.log("Завершено");
}`}
          </pre>
          <p className="mt-4 text-base">
            Пользовательские ошибки создаются через класс <code>Error</code>:
          </p>
          <pre className="bg-gray-800 p-4 rounded mt-4 text-sm overflow-x-auto">
            {`function validateAge(age) {
  if (age < 0) throw new Error("Возраст не может быть отрицательным");
  return age;
}
try {
  validateAge(-1);
} catch (error) {
  console.error(error.message);
}`}
          </pre>
          <div className="flex justify-center mt-4">
            <FaShieldAlt className="text-red-400 text-6xl" />
          </div>
        </Section>

        <Section>
          <h2 className="text-2xl md:text-3xl font-semibold">
            Современные возможности
          </h2>
          <p className="mt-4 text-base">
            JavaScript постоянно развивается, добавляя мощные функции.
            Опциональная цепочка (<code>?.</code>) предотвращает ошибки при
            доступе к вложенным свойствам:
          </p>
          <pre className="bg-gray-800 p-4 rounded mt-4 text-sm overflow-x-auto">
            {`const user = { profile: { name: "Alice" } };
console.log(user?.profile?.name); // Alice
console.log(user?.address?.city); // undefined`}
          </pre>
          <p className="mt-4 text-base">
            Нулевое слияние (<code>??</code>) возвращает правый операнд, если
            левый равен <code>null</code> или <code>undefined</code>:
          </p>
          <pre className="bg-gray-800 p-4 rounded mt-4 text-sm overflow-x-auto">
            {`const value = null ?? "default";
console.log(value); // default`}
          </pre>

          <p className="mt-4 text-base">
            Логические операторы присваивания (<code>&&=</code>,{" "}
            <code>||=</code>, <code>??=</code>) упрощают обновление значений:
          </p>
          <pre className="bg-gray-800 p-4 rounded mt-4 text-sm overflow-x-auto">
            {`let x = 0;
x ||= 10; // x = 10, если x ложно
console.log(x); // 10`}
          </pre>
          <div className="flex justify-center mt-4">
            <FaRocket className="text-cyan-400 text-6xl" />
          </div>
        </Section>

        <Section>
          <h2 className="text-2xl md:text-3xl font-semibold">
            Node.js и серверная разработка
          </h2>
          <p className="mt-4 text-base">
            Node.js, созданный в 2009 году Райаном Далем, позволяет использовать
            JavaScript на сервере. Он основан на движке V8 и поддерживает
            асинхронную модель ввода-вывода. Пример простого HTTP-сервера:
          </p>
          <pre className="bg-gray-800 p-4 rounded mt-4 text-sm overflow-x-auto">
            {`const http = require("http");
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, Node.js!");
});
server.listen(3000, () => console.log("Server running on port 3000"));`}
          </pre>
          <p className="mt-4 text-base">
            Node.js поддерживает модули npm, фреймворки (Express, Koa) и базы
            данных (MongoDB, PostgreSQL). Это делает JavaScript универсальным
            языком для полного стека разработки.
          </p>
          <div className="flex justify-center mt-4">
            <FaServer className="text-blue-400 text-6xl" />
          </div>
        </Section>

        <Section>
          <h2 className="text-2xl md:text-3xl font-semibold">
            Фреймворки и библиотеки
          </h2>
          <p className="mt-4 text-base">
            JavaScript поддерживает множество библиотек и фреймворков. React,
            Angular и Vue.js упрощают создание пользовательских интерфейсов.
            React использует компоненты и виртуальный DOM:
          </p>
          <pre className="bg-gray-800 p-4 rounded mt-4 text-sm overflow-x-auto">
            {`import React from "react";
function Button({ label }) {
  return <button>{label}</button>;
}
export default Button;`}
          </pre>
          <p className="mt-4 text-base">
            Библиотеки, такие как jQuery (устаревшая), Lodash и D3.js, решают
            специфические задачи. Инструменты сборки (Webpack, Vite) и
            транспиляторы (Babel) обеспечивают совместимость и оптимизацию кода.
          </p>
          <div className="flex justify-center mt-4">
            <FaUsers className="text-purple-400 text-6xl" />
          </div>
        </Section>

        <Section>
          <h2 className="text-2xl md:text-3xl font-semibold">
            Производительность и оптимизация
          </h2>
          <p className="mt-4 text-base">
            Оптимизация JavaScript включает минимизацию операций с DOM,
            использование <code>debounce</code> и <code>throttle</code> для
            событий, а также асинхронную загрузку скриптов с <code>defer</code>{" "}
            или <code>async</code>. Пример debounce:
          </p>
          <pre className="bg-gray-800 p-4 rounded mt-4 text-sm overflow-x-auto">
            {`function debounce(func, wait) {
  let timeout;
  return function() {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, arguments), wait);
  };
}
const handleResize = debounce(() => console.log("Resized"), 200);
window.addEventListener("resize", handleResize);`}
          </pre>
          <p className="mt-4 text-base">
            Web Workers позволяют выполнять задачи в фоновом потоке, а Service
            Workers поддерживают оффлайн-режимы через кэширование.
          </p>
          <div className="flex justify-center mt-4">
            <FaRocket className="text-cyan-400 text-6xl" />
          </div>
        </Section>

        <Section>
          <h2 className="text-2xl md:text-3xl font-semibold">Тестирование</h2>
          <p className="mt-4 text-base">
            Тестирование JavaScript включает модульное, интеграционное и
            end-to-end тестирование. Фреймворки, такие как Jest и Mocha,
            используются для написания тестов:
          </p>
          <pre className="bg-gray-800 p-4 rounded mt-4 text-sm overflow-x-auto">
            {`test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});`}
          </pre>
          <p className="mt-4 text-base">
            Инструменты, такие как Cypress и Playwright, тестируют
            пользовательские сценарии. Моки и стабы позволяют изолировать
            зависимости.
          </p>
          <div className="flex justify-center mt-4">
            <FaShieldAlt className="text-green-400 text-6xl" />
          </div>
        </Section>

        <Section>
          <h2 className="text-2xl md:text-3xl font-semibold">
            Будущее JavaScript
          </h2>
          <p className="mt-4 text-base">
            JavaScript продолжает развиваться через TC39, добавляя функции,
            такие как приватные поля, топ-уровневый await и Record/Tuple.
            WebAssembly дополняет JavaScript, позволяя выполнять
            высокопроизводительный код на других языках. Сообщество активно, с
            миллионами пакетов на npm и регулярными конференциями, такими как
            JSConf.
          </p>
          <p className="mt-4 text-base">
            JavaScript останется ключевым языком для веб-разработки благодаря
            своей универсальности, поддержке сообщества и постоянному развитию
            стандартов.
          </p>
          <div className="flex justify-center mt-4">
            <FaStar className="text-yellow-400 text-6xl" />
          </div>
        </Section>

        <Section>
          <h2 className="text-2xl md:text-3xl font-semibold">Пройдите тест</h2>
          <p className="mt-4 text-base">
            Проверьте свои знания JavaScript с помощью теста из 200 вопросов,
            разделенных на три уровня сложности: легкий, средний и сложный. Тест
            охватывает основы синтаксиса, DOM, асинхронность, объекты, модули и
            современные возможности языка.
          </p>
          <div className="flex justify-center mt-4">
            <FaStar className="text-yellow-400 text-6xl" />
          </div>
        </Section>
      </div>
    </motion.div>
  );
};

export default JavaScriptPage;

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaCss3,
  FaPaintBrush,
  FaFont,
  FaObjectGroup,
  FaMobileAlt,
  FaEye,
  FaRocket,
  FaLayerGroup,
  FaMagic,
  FaBorderStyle,
  FaAlignLeft,
  FaExpandArrowsAlt,
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

const CSSPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto text-white p-6 bg-gray-900"
    >
      {/* Fixed "Take Test" button */}
      <motion.a
        href="/testcss"
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
          <FaCss3 className="text-blue-500" /> CSS
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-base"
        >
          CSS (Cascading Style Sheets) — язык стилей, используемый для
          оформления HTML-страниц. Он управляет внешним видом, включая цвета,
          шрифты, макеты и анимации. CSS, созданный в 1996 году Хауконом Виумом
          Ли, развивался через версии CSS1, CSS2 и CSS3, последняя из которых,
          выпущенная в 1999–2010 годах, добавила поддержку анимаций,
          трансформаций и адаптивного дизайна. CSS управляется W3C и
          поддерживает современные веб-приложения.
        </motion.p>

        <Section>
          <h2 className="text-2xl md:text-3xl font-semibold">История CSS</h2>
          <p className="mt-4 text-base">
            CSS1 (1996) ввел базовые стили, такие как шрифты и цвета. CSS2
            (1998) добавил позиционирование, псевдоэлементы и псевдоклассы,
            улучшив макеты. CSS3, модульный стандарт, представил анимации (
            <code>animation</code>), переходы (<code>transition</code>),
            flexbox, grid и медиа-запросы, обеспечив адаптивность и
            интерактивность. Сегодня CSS развивается через отдельные модули,
            включая CSS Grid, Flexbox и Houdini API, позволяющие создавать
            сложные интерфейсы и кастомные свойства (<code>--variable</code>).
          </p>
          <p className="mt-4 text-base">
            CSS3 улучшил доступность, SEO и UX, добавив семантические стили и
            медиа-запросы. Например, <code>@media</code> позволяет адаптировать
            дизайн под разные устройства, а <code>:focus</code> улучшает
            навигацию для клавиатуры.
          </p>
          <div className="flex justify-center mt-4">
            <FaPaintBrush className="text-blue-400 text-6xl" />
          </div>
        </Section>

        <Section>
          <h2 className="text-2xl md:text-3xl font-semibold">Селекторы CSS</h2>
          <p className="mt-4 text-base">
            Селекторы определяют, к каким элементам применяются стили. Основные
            типы: теговые (<code>p</code>), классовые (<code>.class</code>),
            идентификаторы (<code>#id</code>), атрибутные (
            <code>[type="text"]</code>), псевдоклассы (<code>:hover</code>) и
            псевдоэлементы (<code>::before</code>). Комбинаторы, такие как{" "}
            <code></code> (дочерний) или <code>+</code> (соседний), уточняют
            выбор.
          </p>
          <pre className="bg-gray-800 p-4 rounded mt-4 text-sm overflow-x-auto">
            {`.class {
  color: blue;
}
#id:hover {
  background-color: yellow;
}`}
          </pre>
          <p className="mt-4 text-base">
            Специфичность определяет приоритет стилей: ID класс тег. Встроенные
            стили (<code>style="..."</code>) имеют наивысший приоритет.
          </p>
          <div className="flex justify-center mt-4">
            <FaFont className="text-purple-400 text-6xl" />
          </div>
        </Section>

        <Section>
          <h2 className="text-2xl md:text-3xl font-semibold">Блочная модель</h2>
          <p className="mt-4 text-base">
            Блочная модель CSS определяет размеры и расположение элементов:{" "}
            <code>width</code>, <code>height</code>, <code>padding</code>,{" "}
            <code>border</code>, <code>margin</code>. Свойство{" "}
            <code>box-sizing: border-box</code> включает padding и border в
            ширину элемента, упрощая расчеты.
          </p>
          <pre className="bg-gray-800 p-4 rounded mt-4 text-sm overflow-x-auto">
            {`div {
  width: 200px;
  padding: 10px;
  border: 2px solid black;
  box-sizing: border-box;
}`}
          </pre>
          <p className="mt-4 text-base">
            Понимание блочной модели критично для создания точных макетов.
          </p>
          <div className="flex justify-center mt-4">
            <FaObjectGroup className="text-yellow-400 text-6xl" />
          </div>
        </Section>

        <Section>
          <h2 className="text-2xl md:text-3xl font-semibold">Flexbox</h2>
          <p className="mt-4 text-base">
            Flexbox — это одномерная система компоновки, упрощающая выравнивание
            элементов. Контейнер с <code>display: flex</code> управляет
            дочерними элементами через свойства <code>justify-content</code>,{" "}
            <code>align-items</code> и <code>flex-direction</code>.
          </p>
          <pre className="bg-gray-800 p-4 rounded mt-4 text-sm overflow-x-auto">
            {`.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}`}
          </pre>
          <p className="mt-4 text-base">
            Flexbox идеален для создания адаптивных интерфейсов, особенно для
            навигационных панелей и карточек.
          </p>
          <div className="flex justify-center mt-4">
            <FaAlignLeft className="text-green-400 text-6xl" />
          </div>
        </Section>

        <Section>
          <h2 className="text-2xl md:text-3xl font-semibold">Grid</h2>
          <p className="mt-4 text-base">
            CSS Grid — двумерная система компоновки, использующая{" "}
            <code>display: grid</code>. Свойства{" "}
            <code>grid-template-columns</code> и <code>grid-template-rows</code>{" "}
            задают структуру сетки, а <code>gap</code> — отступы между ячейками.
          </p>
          <pre className="bg-gray-800 p-4 rounded mt-4 text-sm overflow-x-auto">
            {`.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}`}
          </pre>
          <p className="mt-4 text-base">
            Grid подходит для сложных макетов, таких как галереи или дашборды.
          </p>
          <div className="flex justify-center mt-4">
            <FaLayerGroup className="text-red-400 text-6xl" />
          </div>
        </Section>

        <Section>
          <h2 className="text-2xl md:text-3xl font-semibold">Медиа-запросы</h2>
          <p className="mt-4 text-base">
            Медиа-запросы (<code>@media</code>) адаптируют стили под разные
            устройства и размеры экрана. Они используют условия, такие как{" "}
            <code>min-width</code> или <code>max-width</code>.
          </p>
          <pre className="bg-gray-800 p-4 rounded mt-4 text-sm overflow-x-auto">
            {`@media (max-width: 600px) {
  body {
    font-size: 16px;
  }
}`}
          </pre>
          <p className="mt-4 text-base">
            Медиа-запросы обеспечивают адаптивность, улучшая UX на мобильных
            устройствах.
          </p>
          <div className="flex justify-center mt-4">
            <FaMobileAlt className="text-cyan-400 text-6xl" />
          </div>
        </Section>

        <Section>
          <h2 className="text-2xl md:text-3xl font-semibold">Анимации</h2>
          <p className="mt-4 text-base">
            CSS поддерживает анимации через <code>@keyframes</code>,{" "}
            <code>animation</code> и <code>transition</code>. Переходы управляют
            плавным изменением свойств, а анимации — сложными
            последовательностями.
          </p>
          <pre className="bg-gray-800 p-4 rounded mt-4 text-sm overflow-x-auto">
            {`@keyframes slide {
  from { transform: translateX(0); }
  to { transform: translateX(100px); }
}
.element {
  animation: slide 2s infinite;
}`}
          </pre>
          <p className="mt-4 text-base">
            Анимации повышают интерактивность и привлекательность интерфейса.
          </p>
          <div className="flex justify-center mt-4">
            <FaMagic className="text-purple-400 text-6xl" />
          </div>
        </Section>

        <Section>
          <h2 className="text-2xl md:text-3xl font-semibold">Доступность</h2>
          <p className="mt-4 text-base">
            CSS улучшает доступность через <code>:focus</code>,{" "}
            <code>outline</code> и адаптивные размеры шрифтов (<code>rem</code>,{" "}
            <code>vw</code>). Например, <code>outline: none</code> с
            осторожностью убирает рамку фокуса, требуя альтернативной индикации.
          </p>
          <pre className="bg-gray-800 p-4 rounded mt-4 text-sm overflow-x-auto">
            {`button:focus {
  outline: 2px solid blue;
}`}
          </pre>
          <p className="mt-4 text-base">
            Доступные стили обеспечивают удобство для пользователей с
            ограниченными возможностями.
          </p>
          <div className="flex justify-center mt-4">
            <FaEye className="text-blue-300 text-6xl" />
          </div>
        </Section>

        <Section>
          <h2 className="text-2xl md:text-3xl font-semibold">
            Псевдоклассы и псевдоэлементы
          </h2>
          <p className="mt-4 text-base">
            Псевдоклассы, такие как <code>:hover</code> и{" "}
            <code>:nth-child</code>, добавляют динамику. Псевдоэлементы (
            <code>::before</code>, <code>::after</code>) создают виртуальные
            элементы для стилизации.
          </p>
          <pre className="bg-gray-800 p-4 rounded mt-4 text-sm overflow-x-auto">
            {`p::first-line {
  font-weight: bold;
}
button:hover {
  background-color: darkblue;
}`}
          </pre>
          <p className="mt-4 text-base">
            Они улучшают UX, добавляя интерактивность без JavaScript.
          </p>
          <div className="flex justify-center mt-4">
            <FaBorderStyle className="text-yellow-400 text-6xl" />
          </div>
        </Section>

        <Section>
          <h2 className="text-2xl md:text-3xl font-semibold">Переменные CSS</h2>
          <p className="mt-4 text-base">
            Пользовательские свойства (<code>--variable</code>) позволяют
            хранить значения, такие как цвета или размеры, для повторного
            использования. Они задаются через <code>:root</code> и используются
            с <code>var()</code>.
          </p>
          <pre className="bg-gray-800 p-4 rounded mt-4 text-sm overflow-x-auto">
            {`:root {
  --primary-color: #007bff;
}
button {
  background-color: var(--primary-color);
}`}
          </pre>
          <p className="mt-4 text-base">
            Переменные упрощают поддержку и изменение стилей.
          </p>
          <div className="flex justify-center mt-4">
            <FaLayerGroup className="text-green-400 text-6xl" />
          </div>
        </Section>

        <Section>
          <h2 className="text-2xl md:text-3xl font-semibold">
            Производительность
          </h2>
          <p className="mt-4 text-base">
            Оптимизация CSS включает минимизацию селекторов, избегание{" "}
            <code>!important</code> и использование <code>will-change</code> для
            анимаций. Например, <code>transform</code> быстрее, чем{" "}
            <code>left</code> для анимаций.
          </p>
          <pre className="bg-gray-800 p-4 rounded mt-4 text-sm overflow-x-auto">
            {`.element {
  will-change: transform;
  transform: translateX(100px);
}`}
          </pre>
          <p className="mt-4 text-base">
            Оптимизированный CSS снижает время рендеринга и улучшает UX.
          </p>
          <div className="flex justify-center mt-4">
            <FaRocket className="text-cyan-400 text-6xl" />
          </div>
        </Section>

        <Section>
          <h2 className="text-2xl md:text-3xl font-semibold">Пройдите тест</h2>
          <p className="mt-4 text-base">
            Проверьте свои знания CSS в тесте из 60 вопросов, охватывающих
            селекторы, блочную модель, Flexbox, Grid, анимации, медиа-запросы и
            доступность. Тест разделен на три уровня сложности: легкий, средний
            и сложный.
          </p>
          <div className="flex justify-center mt-4">
            <FaStar className="text-yellow-400 text-6xl" />
          </div>
        </Section>
      </div>
    </motion.div>
  );
};

export default CSSPage;

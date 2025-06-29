import { motion, useInView } from "framer-motion";
import {
  FaGlobe,
  FaWrench,
  FaCode,
  FaDatabase,
  FaLock,
  FaMobileAlt,
} from "react-icons/fa";
import { useRef } from "react";

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

const HTMLExtras = () => {
  return (
    <div className="max-w-4xl mx-auto text-white p-6">
      <Section>
        <h2 className="text-2xl md:text-3xl font-semibold">
          Интернационализация и языки
        </h2>
        <p className="mt-4">
          HTML поддерживает множество языков и направлений текста. Атрибуты{" "}
          <code>lang</code> и <code>dir</code> важны для правильного отображения
          и доступности. Тег <code>&lt;bdi&gt;</code> изолирует текст с
          неизвестным направлением, а <code>&lt;bdo&gt;</code> позволяет
          принудительно задать направление.
        </p>
        <pre className="bg-gray-800 p-4 rounded mt-4 text-sm overflow-x-auto">
          {`<p lang="ar" dir="rtl">مرحبا بالعالم</p>
<p>User: <bdi>username123</bdi></p>`}
        </pre>
        <div className="flex justify-center mt-4">
          <FaGlobe className="text-green-400 text-6xl" />
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl md:text-3xl font-semibold">
          Продвинутая валидация форм
        </h2>
        <p className="mt-4">
          HTML5 включает мощные возможности валидации. Атрибут{" "}
          <code>pattern</code> позволяет использовать регулярные выражения, а{" "}
          <code>required</code>, <code>min</code>, <code>max</code>,{" "}
          <code>step</code>, <code>maxlength</code> и <code>minlength</code>{" "}
          задают ограничения.
        </p>
        <pre className="bg-gray-800 p-4 rounded mt-4 text-sm overflow-x-auto">
          {`<input type="email" required>
<input type="text" pattern="[A-Za-z]{3,}" minlength="3" maxlength="10" required>
<input type="number" min="1" max="100" step="1">`}
        </pre>
        <p className="mt-4">
          Также доступна визуальная валидация с помощью псевдоклассов CSS{" "}
          <code>:valid</code> и <code>:invalid</code>.
        </p>
        <div className="flex justify-center mt-4">
          <FaWrench className="text-yellow-400 text-6xl" />
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl md:text-3xl font-semibold">
          Интеграция с Web API
        </h2>
        <p className="mt-4">
          HTML5 тесно взаимодействует с JavaScript API: Geolocation, Drag &
          Drop, Clipboard API, Speech Recognition, WebRTC и другими. Это делает
          HTML мощной платформой для создания веб-приложений.
        </p>
        <pre className="bg-gray-800 p-4 rounded mt-4 text-sm overflow-x-auto">
          {`navigator.geolocation.getCurrentPosition((position) => {
  const { latitude, longitude } = position.coords;
  console.log(\`Lat: \${latitude}, Lng: \${longitude}\`);
});`}
        </pre>
        <p className="mt-4">
          Многие API работают только в защищённом контексте (HTTPS) и требуют
          пользовательского разрешения.
        </p>
        <div className="flex justify-center mt-4">
          <FaCode className="text-purple-400 text-6xl" />
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl md:text-3xl font-semibold">
          Хранение данных в браузере
        </h2>
        <p className="mt-4">
          HTML5 предлагает <strong>Web Storage API</strong>:{" "}
          <code>localStorage</code> и <code>sessionStorage</code> — для хранения
          данных в браузере, а также IndexedDB — для структурированных данных.
        </p>
        <pre className="bg-gray-800 p-4 rounded mt-4 text-sm overflow-x-auto">
          {`localStorage.setItem("user", "John");
const user = localStorage.getItem("user");
sessionStorage.clear();`}
        </pre>
        <p className="mt-4">
          Эти API полезны для сохранения состояния, корзины покупок, токенов и
          офлайн-данных.
        </p>
        <div className="flex justify-center mt-4">
          <FaDatabase className="text-blue-300 text-6xl" />
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl md:text-3xl font-semibold">
          Безопасность и защита
        </h2>
        <p className="mt-4">
          HTML и браузеры реализуют защиту от XSS, Clickjacking и других угроз.
          Важно использовать <code>Content-Security-Policy</code> и избегать
          внедрения пользовательских данных без очистки.
        </p>
        <pre className="bg-gray-800 p-4 rounded mt-4 text-sm overflow-x-auto">
          {`<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self'">`}
        </pre>
        <p className="mt-4">
          Также рекомендуется использовать атрибуты{" "}
          <code>rel="noopener noreferrer"</code> при открытии ссылок в{" "}
          <code>_blank</code>, чтобы избежать доступа к родительскому окну.
        </p>
        <div className="flex justify-center mt-4">
          <FaLock className="text-red-400 text-6xl" />
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl md:text-3xl font-semibold">
          Адаптивная верстка и мобильность
        </h2>
        <p className="mt-4">
          HTML поддерживает адаптивную верстку через{" "}
          <code>&lt;meta name="viewport"&gt;</code> и элементы{" "}
          <code>&lt;picture&gt;</code> и <code>&lt;source&gt;</code>. Также
          важно использовать медиазапросы в CSS.
        </p>
        <pre className="bg-gray-800 p-4 rounded mt-4 text-sm overflow-x-auto">
          {`<meta name="viewport" content="width=device-width, initial-scale=1.0">
<picture>
  <source srcset="small.jpg" media="(max-width: 600px)">
  <img src="large.jpg" alt="Изображение">
</picture>`}
        </pre>
        <p className="mt-4">
          Это обеспечивает качественное отображение на мобильных устройствах и
          ускоряет загрузку.
        </p>
        <div className="flex justify-center mt-4">
          <FaMobileAlt className="text-cyan-300 text-6xl" />
        </div>
      </Section>
    </div>
  );
};

export default HTMLExtras;

import React, { useState } from "react";
import { useSpring, animated, config, useSprings } from "@react-spring/web";
import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";

const getRandom = (min, max) => Math.random() * (max - min) + min;

const bubbles = new Array(7).fill().map(() => ({
  left: getRandom(0, 90),
  top: getRandom(0, 90),
  size: getRandom(50, 100),
  color: `hsl(${getRandom(200, 280)}, 70%, 60%)`,
}));

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [hovered, setHovered] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/mjkrazrr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus(""), 3000);
      } else {
        throw new Error("Ошибка отправки");
      }
    } catch (error) {
      console.error("Ошибка отправки:", error);
      setStatus("error");
      setTimeout(() => setStatus(""), 3000);
    }
  };

  const animatedBubbles = useSprings(
    bubbles.length,
    bubbles.map(() => ({
      from: { x: 0, y: 0 },
      to: async (next) => {
        while (true) {
          await next({
            x: getRandom(-50, 50),
            y: getRandom(-50, 50),
            config: { tension: 2000, friction: 20, duration: 1000 },
          });
        }
      },
      loop: true,
    }))
  );

  const buttonSpring = useSpring({
    transform: hovered ? "scale(1.03)" : "scale(1)",
    config: config.gentle,
  });

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-4 md:px-6 py-12 flex items-center justify-center overflow-hidden">
      {animatedBubbles.map((style, i) => (
        <animated.div
          key={i}
          style={{
            ...style,
            width: bubbles[i].size,
            height: bubbles[i].size,
            backgroundColor: bubbles[i].color,
            position: "absolute",
            borderRadius: "50%",
            filter: "blur(30px)",
            left: `${bubbles[i].left}%`,
            top: `${bubbles[i].top}%`,
            opacity: 0.2,
          }}
        />
      ))}

      <motion.div
        className="w-full max-w-3xl bg-gray-850 rounded-3xl shadow-2xl p-6 md:p-12"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-10 font-orbitron tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Свяжитесь с нами
        </motion.h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-1 font-semibold">Имя</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Ваше имя"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Сообщение</label>
            <textarea
              name="message"
              rows="4"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Ваше сообщение..."
            ></textarea>
          </div>

          <animated.button
            type="submit"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={buttonSpring}
            disabled={status === "sending"}
            className={`w-full py-3 font-semibold rounded-xl transition duration-300 ${
              status === "sending"
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {status === "sending" ? "Отправка..." : "Отправить"}
          </animated.button>

          {status === "success" && (
            <p className="text-green-400 text-center mt-2">
              Сообщение отправлено!
            </p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-center mt-2">
              Ошибка. Попробуйте позже.
            </p>
          )}

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex justify-center items-center space-x-3 mt-8"
          >
            <div className="bg-red-500 p-3 rounded-full shadow-md">
              <FaMapMarkerAlt className="text-white text-xl" />
            </div>
            <span className="text-lg font-medium">Бишкек, Кыргызстан</span>
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;

import React from "react";
import { motion } from "framer-motion";
import { useSpring, animated, config, useSprings } from "@react-spring/web";
import { FaCode, FaLaptopCode, FaRocket } from "react-icons/fa";
import companii from "../../../assets/img/companii.jpg";
import BackButton from "../../orginism/BackButton";

const getRandom = (min, max) => Math.random() * (max - min) + min;

const bubbles = new Array(15).fill().map(() => ({
  left: getRandom(0, 90),
  top: getRandom(0, 90),
  size: getRandom(50, 100),
  color: `hsl(${getRandom(200, 280)}, 70%, 60%)`,
}));

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const About = () => {
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

  return (
    <motion.div
      className="relative min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center justify-center p-4 sm:p-8 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {animatedBubbles.map((style, i) => (
        <animated.div
          key={i}
          style={{
            ...style,
            width: bubbles[i].size,
            height: bubbles[i].size,
            backgroundColor: bubbles[i].color,
            position: "fixed",
            borderRadius: "50%",
            filter: "blur(30px)",
            left: `${bubbles[i].left}%`,
            top: `${bubbles[i].top}%`,
            opacity: 0.2,
          }}
        />
      ))}

      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center mb-10 text-cyan-400 mt-10"
        variants={itemVariants}
      >
        О нас
      </motion.h1>
      <BackButton />
      <motion.div
        className="grid md:grid-cols-2 gap-8 items-center w-full max-w-6xl mb-16"
        variants={itemVariants}
      >
        <div>
          <p className="text-lg md:text-xl leading-relaxed mb-4">
            Привет! Мне 17 лет, и я — начинающий фронтенд-разработчик с большой
            мечтой изменить мир IT-образования! 🚀
          </p>
          <p className="text-lg md:text-xl leading-relaxed mb-4">
            Я создал этот проект, чтобы поделиться своими знаниями и помочь
            таким же новичкам, как я. Мой стартап — это мини-курс, абсолютно
            бесплатный и открытый для всех.
          </p>
          <p className="text-lg md:text-xl leading-relaxed">
            Моя цель — сделать обучение интересным, понятным и практичным, чтобы
            ты смог быстро получить навыки и начать свой путь в IT.
          </p>
        </div>

        <div className="h-72 bg-gray-700 rounded-lg overflow-hidden">
          <img
            src={companii}
            alt="О компании"
            className="object-cover w-full h-full"
          />
        </div>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mb-20"
        variants={containerVariants}
      >
        <motion.div className="text-center" variants={itemVariants}>
          <FaCode className="text-5xl text-cyan-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Практика</h3>
          <p>
            Курс построен на реальных проектах, чтобы ты сразу мог применять
            знания.
          </p>
        </motion.div>

        <motion.div className="text-center" variants={itemVariants}>
          <FaLaptopCode className="text-5xl text-cyan-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Доступность</h3>
          <p>
            Бесплатный курс, который подойдет даже тем, кто начинает с нуля.
          </p>
        </motion.div>

        <motion.div className="text-center" variants={itemVariants}>
          <FaRocket className="text-5xl text-cyan-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Мотивация</h3>
          <p>Я делюсь своим опытом, чтобы вдохновить тебя на успех в IT!</p>
        </motion.div>
      </motion.div>

      <motion.div
        className="space-y-8 w-full max-w-6xl"
        variants={containerVariants}
      >
       
      </motion.div>

      <motion.div className="mt-20 text-center" variants={itemVariants}>
        <p className="text-lg md:text-xl leading-relaxed mb-6">
          Присоединяйся к моему курсу и начни свой путь во фронтенд-разработке
          уже сегодня! Вместе мы сделаем первые шаги к твоей карьере в IT. 😎
        </p>
      </motion.div>
    </motion.div>
  );
};

export default About;

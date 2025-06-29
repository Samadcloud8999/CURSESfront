import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { gsap } from "gsap";
import studentImage from "../../assets/student-girl-computer.jpg";

const HeroFrontEndSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });
  const controls = useAnimation();
  const ballsRefs = useRef([]);

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
  ];

  useEffect(() => {
    if (isInView) {
      controls.start("visible");

      ballsRefs.current.forEach((ball, index) => {
        const isFalling = index % 3 === 0; 
        if (isFalling) {
          gsap.to(ball, {
            y: window.innerHeight + 100,
            x: gsap.utils.random(-50, 50),
            duration: gsap.utils.random(5, 8),
            repeat: -1,
            ease: "linear",
            onRepeat: () => {
              gsap.set(ball, { y: -100, x: gsap.utils.random(-50, 50) });
            },
          });
        } else {
          const randomX = gsap.utils.random(50, 120);
          const randomY = gsap.utils.random(50, 120);
          const duration = gsap.utils.random(3, 6);

          gsap.to(ball, {
            x: `+=${index % 2 === 0 ? randomX : -randomX}`,
            y: `+=${index % 2 === 0 ? randomY : -randomY}`,
            duration: duration,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
          });
        }

        gsap.to(ball, {
          scale: 1.2,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });
    }
  }, [isInView, controls]);

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, rotateY: -15 },
    visible: { opacity: 1, y: 0, rotateY: 0, transition: { duration: 0.8 } },
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-gray-900 text-white flex flex-col md:flex-row items-center justify-center px-8 py-16 overflow-hidden"
    >
      {[...Array(9)].map((_, index) => (
        <div
          key={index}
          ref={(el) => (ballsRefs.current[index] = el)}
          className={`absolute w-16 h-16 ${
            ballColors[index % ballColors.length]
          } rounded-full opacity-60 filter blur-sm`}
          style={{
            top: `${Math.random() * 80}%`,
            left: `${Math.random() * 80}%`,
          }}
        ></div>
      ))}

      <motion.div
        className="md:w-1/2 mb-8 md:mb-0 z-10"
        initial="hidden"
        animate={controls}
        variants={textVariants}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold leading-tight mb-6"
          variants={itemVariants}
        >
          Фронтендеры создают сайты, которыми мы пользуемся каждый день
        </motion.h1>
        <motion.p className="text-gray-400 text-lg" variants={itemVariants}>
          Бизнес активно переходит в онлайн, поэтому веб-сервисы нужны всем.
          Компании ищут frontend-разработчиков, чтобы внедрять фичи быстрее
          конкурентов. Работодатели ценят таких специалистов и предлагают гибкий
          график или постоянную удалёнку.
        </motion.p>
      </motion.div>

      <motion.div
        className="md:w-1/2 relative grid gap-4 grid-cols-2 items-center z-10"
        initial="hidden"
        animate={controls}
        variants={textVariants}
      >
        <motion.div
          className="bg-gray-800 p-4 rounded-xl text-sm shadow-xl"
          variants={itemVariants}
        >
          <code>
            <p className="text-purple-400">button {"{"}</p>
            <p className="pl-4">
              color: <span className="text-yellow-300">#fff;</span>
            </p>
            <p className="pl-4">
              padding: <span className="text-pink-400">8px 22px;</span>
            </p>
            <p className="pl-4">
              border-radius: <span className="text-pink-400">6px;</span>
            </p>
            <p className="pl-4">
              background: <span className="text-yellow-300">#7d2ae8;</span>
            </p>
            <p className="pl-4">
              transition: <span className="text-pink-400">all 0.2s ease;</span>
            </p>
            <p className="text-purple-400">{"}"}</p>
          </code>
        </motion.div>

        <motion.div
          className="bg-blue-600 text-white text-center py-4 px-6 rounded-xl text-lg font-bold shadow-lg hover:scale-105 transition-transform"
          variants={itemVariants}
        >
          Button
        </motion.div>

        <motion.div
          className="bg-gray-800 p-4 rounded-xl text-sm shadow-xl col-span-2"
          variants={itemVariants}
        >
          <code>
            <p className="text-pink-400">&lt;html&gt;</p>
            <p className="pl-4 text-blue-400">
              &lt;button&gt;<span className="text-white">Buttons</span>
              &lt;/button&gt;
            </p>
            <p className="text-pink-400">&lt;/html&gt;</p>
          </code>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroFrontEndSection;

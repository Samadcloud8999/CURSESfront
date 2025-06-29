import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CoursesSection = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const ballsRefs = useRef([]);

  const courses = [
    {
      id: 1,
      title: "HTML и CSS",
      description:
        "Изучите основы веб-разработки и создавайте стильные веб-страницы.",
      level: "Начинающий",
      path: "/courses/html",
      color: "from-blue-600 to-blue-800",
    },
    {
      id: 2,
      title: "JavaScript",
      description: "Добавьте интерактивность и динамику на ваши сайты.",
      level: "Средний",
      path: "/courses/javascript",
      color: "from-teal-600 to-teal-800",
    },
    {
      id: 3,
      title: "React",
      description: "Создавайте современные веб-приложения с React.",
      level: "Продвинутый",
      path: "/courses/react",
      color: "from-indigo-600 to-indigo-800",
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
  ];

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          delay: index * 0.2,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });

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
        const randomX = gsap.utils.random(40, 80);
        const randomY = gsap.utils.random(20, 50);
        const duration = gsap.utils.random(4, 7);

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
        opacity: 0,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "bottom bottom",
          end: "bottom+=150 bottom",
          scrub: true,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const handleNavigate = (path) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(path);
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-20 bg-gray-900 text-white overflow-hidden "
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

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Наши курсы
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className={`relative bg-gradient-to-br ${course.color} rounded-2xl p-8 shadow-xl overflow-hidden group`}
              whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
            >
              <div className="absolute inset-0 bg-gray-900 opacity-80 group-hover:opacity-70 transition-opacity duration-300"></div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-3 text-white">
                  {course.title}
                </h3>
                <p className="text-gray-200 mb-4 leading-relaxed">
                  {course.description}
                </p>
                <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-gray-800 rounded-full mb-6">
                  {course.level}
                </span>
                <motion.button
                  onClick={() => handleNavigate(course.path)}
                  className="block w-full px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Подробнее
                </motion.button>
              </div>

              <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-400 rounded-2xl transition-all duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;

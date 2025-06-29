import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  FaClock,
  FaProjectDiagram,
  FaUserCheck,
  FaInfinity,
} from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FeaturesSection = () => {
  const sectionRef = useRef(null);
  const featuresRef = useRef([]);
  const imageRef = useRef(null);
  const ballsRefs = useRef([]);
  const mainCircleRef = useRef(null);
  const leftCircleRef = useRef(null);
  const rightCircleRef = useRef(null);

  const features = [
    {
      icon: <FaClock />,
      title: "Гибкий график",
      description: "Учитесь в удобное для вас время, без строгих расписаний.",
    },
    {
      icon: <FaProjectDiagram />,
      title: "Практика",
      description: "Работайте над реальными проектами для вашего портфолио.",
    },
    {
      icon: <FaUserCheck />,
      title: "Менторы",
      description: "Получайте поддержку от опытных разработчиков.",
    },
    {
      icon: <FaInfinity />,
      title: "Доступ навсегда",
      description: "Учитесь без ограничений по времени с пожизненным доступом.",
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
    featuresRef.current.forEach((feature, index) => {
      gsap.fromTo(
        feature,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          delay: index * 0.2,
          scrollTrigger: {
            trigger: feature,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

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
    });

    // Animation for the main circle (center)
    gsap.to(mainCircleRef.current, {
      rotation: 360,
      duration: 4,
      repeat: -1,
      ease: "linear",
    });
    gsap.to(mainCircleRef.current, {
      x: "+=100",
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
    gsap.to(mainCircleRef.current, {
      y: "+=20",
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    // Animation for the left circle
    gsap.to(leftCircleRef.current, {
      rotation: -360,
      duration: 5,
      repeat: -1,
      ease: "linear",
    });
    gsap.to(leftCircleRef.current, {
      x: "+=80",
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
    gsap.to(leftCircleRef.current, {
      y: "+=15",
      duration: 1.2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    // Animation for the right circle
    gsap.to(rightCircleRef.current, {
      rotation: 360,
      duration: 4.5,
      repeat: -1,
      ease: "linear",
    });
    gsap.to(rightCircleRef.current, {
      x: "-=80",
      duration: 2.3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
    gsap.to(rightCircleRef.current, {
      y: "-=15",
      duration: 1.1,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { scale: 1.02, transition: { duration: 0.3 } },
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-20 bg-gray-900 text-white overflow-hidden"
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                ref={(el) => (featuresRef.current[index] = el)}
                className="flex flex-col p-6 bg-gray-800 rounded-xl shadow-lg group relative"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
              >
                <div className="text-4xl text-teal-400 mb-4 group-hover:text-teal-300 transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-teal-400 rounded-xl transition-all duration-300 pointer-events-none"></div>
              </motion.div>
            ))}
          </div>
          <div className="relative flex items-center justify-center">
            <div
              ref={mainCircleRef}
              className="w-64 h-64 bg-purple-500 rounded-full opacity-80"
            ></div>
            <div
              ref={leftCircleRef}
              className="absolute w-48 h-48 bg-pink-500 rounded-full opacity-70"
              style={{ left: "-20%", top: "20%" }}
            ></div>
            <div
              ref={rightCircleRef}
              className="absolute w-48 h-48 bg-fuchsia-600 rounded-full opacity-70"
              style={{ right: "-20%", top: "20%" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

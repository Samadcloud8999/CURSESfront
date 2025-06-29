import React, { useEffect, useRef, useState } from "react";
import {
  FaRocket,
  FaTimes,
  FaCheckCircle,
  FaClock,
  FaDollarSign,
  FaBook,
  FaSearch,
  FaVideo,
  FaUserGraduate,
} from "react-icons/fa";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import quar from "../../assets/img/qyar.jpg";

const HeroSection = () => {
  const sectionRef = useRef(null);
  const bannerRef = useRef(null);
  const progressRef = useRef(null);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(".bg-gradient", { opacity: 0 }, { opacity: 1, duration: 1.5 });
      tl.from(".hero-title", { y: 60, opacity: 0, duration: 1 }, "-=1");
      tl.from(".hero-subtitle", { y: 50, opacity: 0, duration: 1 }, "-=0.7");
    }, sectionRef);

    // Show banner automatically after 3 seconds
    const timer = setTimeout(() => {
      setShowBanner(true);
      gsap.fromTo(
        bannerRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.7, ease: "back.out(1.7)" }
      );
      gsap.fromTo(
        progressRef.current,
        { width: "0%" },
        { width: "100%", duration: 5, ease: "linear" }
      );
    }, 2000);

    return () => {
      ctx.revert();
      clearTimeout(timer);
    };
  }, []);

  const handleCloseBanner = () => {
    gsap.to(bannerRef.current, {
      scale: 0.8,
      opacity: 0,
      duration: 0.5,
      ease: "power3.in",
      onComplete: () => setShowBanner(false),
    });
  };

  return (
    <section
      ref={sectionRef}
      className="relative h-screen bg-gray-900 text-white overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="w-full h-full bg-gradient bg-[length:300%_300%] animate-gradient will-change-transform"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-80 pointer-events-none"></div>
      </div>

      <style>
        {`
          .bg-gradient {
            background: linear-gradient(
              45deg,
              #f472b6,
              #a855f7,
              #a855f7,
              #f472b6,
              #c026d3,
              #9333ea,
              #d946ef,
              #f472b6,
              #a855f7
            );
            animation: gradient 15s ease infinite;
          }

          @keyframes gradient {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
        `}
      </style>

      {/* Content */}
      <div className="container mx-auto relative z-10 h-full flex flex-col justify-end pb-32 px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white hero-title">
          Раскройте Свой Потенциал в<br /> Программировании
          <br /> снизу Ai chat помощник
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300 hero-subtitle">
          Освойте навыки для успешной карьеры в Frontend
        </p>
        <button className="inline-flex items-center space-x-2 w-48 justify-center bg-gradient-to-r from-pink-400 via-fuchsia-500 to-purple-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:from-pink-500 hover:via-fuchsia-600 hover:to-purple-600 border border-gray-700 transition-all duration-500 transform hover:-translate-y-1">
          <FaRocket />
          <span>Начать</span>
        </button>
      </div>

      {/* Banner */}
      {showBanner && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4">
          <div
            ref={bannerRef}
            className="bg-gray-800 text-white p-8 rounded-2xl shadow-2xl w-full max-w-md transform transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-center flex items-center gap-2">
                <FaCheckCircle className="text-pink-400" /> Как работает курс?
              </h2>
              <button
                onClick={handleCloseBanner}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaTimes />
              </button>
            </div>
            <ul className="space-y-4 text-gray-200 text-base">
              <li className="flex items-center gap-2 hover:text-white transition-colors">
                <FaClock className="text-fuchsia-500" /> Длительность: Сколько
                захотите
              </li>
              <li className="flex items-center gap-2 hover:text-white transition-colors">
                <FaDollarSign className="text-purple-500" /> Стоимость:
                Бесплатно
              </li>
              <li className="flex items-center gap-2 hover:text-white transition-colors">
                <FaBook className="text-pink-500" /> Перейдите в раздел{" "}
                <strong>"Курсы"</strong>
              </li>
              <li className="flex items-center gap-2 hover:text-white transition-colors">
                <FaSearch className="text-fuchsia-600" /> Выберите курс{" "}
                <strong>HTML</strong>
              </li>
              <li className="flex items-center gap-2 hover:text-white transition-colors">
                <FaVideo className="text-purple-600" /> Откройте{" "}
                <strong>видео-уроки</strong>
              </li>
              <li className="flex items-center gap-2 hover:text-white transition-colors">
                <FaUserGraduate className="text-pink-600" /> Форма обучения:
                Самостоятельный
              </li>
            </ul>
            {/* QR Code Image with Support Text */}
            <div className="mt-6 relative">
              <img
                src={quar}
                alt="QR Code for Mbank"
                className="w-32 h-32 mx-auto rounded-lg"
              />
            </div>
            <div className="mt-6 h-1 bg-gray-700 rounded-full overflow-hidden">
              <div
                ref={progressRef}
                className="h-full bg-gradient-to-r from-pink-400 via-fuchsia-500 to-purple-500"
              ></div>
            </div>
            <Link
              to="/courses/html"
              className="mt-6 w-full flex justify-center items-center gap-2 py-3 bg-gradient-to-r from-pink-500 via-fuchsia-600 to-purple-600 hover:from-pink-600 hover:via-fuchsia-700 hover:to-purple-700 rounded-lg text-white font-semibold transition-all duration-500 transform hover:-translate-y-1"
            >
              <FaRocket /> Начать обучение
            </Link>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;

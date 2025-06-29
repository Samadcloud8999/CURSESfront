import React, { useState } from "react";
import { FaPlus, FaMinus, FaRocket } from "react-icons/fa";

export const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "Что такое FrontSam и какие курсы вы предлагаете?",
      answer:
        "FrontSam — это платформа для самостоятельного обучения фронтенд-разработке. Мы предлагаем курсы по HTML, CSS, JavaScript, React и другим современным технологиям, которые помогут вам стать профессиональным разработчиком.",
    },
    {
      question: "Нужно ли иметь опыт программирования для начала обучения?",
      answer:
        "Нет, наши курсы подходят как для новичков, так и для тех, кто уже имеет базовые знания. Каждый курс включает пошаговые инструкции и практические задания.",
    },
    {
      question: "Сколько времени занимает обучение?",
      answer:
        "Вы учитесь в своем темпе! Курсы разработаны так, чтобы вы могли проходить их в удобное для вас время. В среднем, освоение одного курса занимает от 4 до 12 недель при 5-10 часах в неделю.",
    },
    {
      question: "Сколько стоят ваши курсы?",
      answer:
        "Все наши курсы бесплатны! Мы верим, что образование должно быть доступным, поэтому предоставляем качественные материалы без платы.",
    },
    {
      question: "Как я могу связаться с поддержкой?",
      answer:
        "Вы можете написать нам на support@frontsam.com или воспользоваться формой обратной связи на сайте. Мы ответим в течение 24 часов!",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-900 text-white py-16 min-h-screen">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
            Часто задаваемые вопросы
          </h1>
          <p className="text-gray-300 text-lg mt-4 max-w-2xl mx-auto">
            Найдите ответы на самые популярные вопросы о наших курсах по
            фронтенд-разработке и самостоятельном обучении.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          {faqData.map((faq, index) => (
            <div key={index} className="mb-4 border-b border-gray-700">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center py-4 text-left text-lg font-semibold text-fuchsia-400 hover:text-fuchsia-500 transition-colors duration-300"
              >
                <span>{faq.question}</span>
                {openIndex === index ? (
                  <FaMinus className="text-pink-400" />
                ) : (
                  <FaPlus className="text-pink-400" />
                )}
              </button>
              {openIndex === index && (
                <div className="pb-4 text-gray-300 text-base">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-300 text-lg mb-6">
            Не нашли ответ на свой вопрос? Свяжитесь с нами или начните обучение
            прямо сейчас!
          </p>
          <a
            href="/courses/css"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-fuchsia-400 to-pink-400 text-white font-semibold py-3 px-6 rounded-lg hover:from-fuchsia-500 hover:to-pink-500 transition-all duration-300"
          >
            <FaRocket />
            <span>Начать обучения</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Faq;

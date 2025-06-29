import React from "react";
import { Link } from "react-router-dom";
import {
  FaRocket,
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
              FrontSam
            </h2>
            <p className="text-gray-300 text-sm">
              Онлайн-курсы по фронтенд-разработке. Учитесь самостоятельно, в
              своем темпе, и станьте профессионалом в создании современных
              веб-интерфейсов!
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold text-fuchsia-400 mb-4">
              Навигация
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <a
                  href="/courses/javascript"
                  className="hover:text-fuchsia-500 transition-colors duration-300"
                >
                  Курсы
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="hover:text-fuchsia-500 transition-colors duration-300"
                >
                  О нас
                </a>
              </li>
              <li>
                <a
                  href="/faq"
                  className="hover:text-fuchsia-500 transition-colors duration-300"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-pink-400 mb-4">
              Контакты
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-fuchsia-500" />
                <a
                  href="mailto:support@frontsam.com"
                  className="hover:text-fuchsia-500 transition-colors duration-300"
                >
                  support@frontsam.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaPhone className="text-fuchsia-500" />
                <a
                  href="tel:+1234567890"
                  className="hover:text-fuchsia-500 transition-colors duration-300"
                >
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-fuchsia-400 mb-4">
              Следите за нами
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/frontsam"
                className="text-gray-300 hover:text-fuchsia-500 transition-colors duration-300"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://twitter.com/frontsam"
                className="text-gray-300 hover:text-fuchsia-500 transition-colors duration-300"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://linkedin.com/company/frontsam"
                className="text-gray-300 hover:text-fuchsia-500 transition-colors duration-300"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} FrontSam. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import {
  MdHome,
  MdSchool,
  MdLibraryBooks,
  MdGroup,
  MdContactMail,
  MdVideoLibrary,
  MdExpandMore,
  MdMenu,
} from "react-icons/md";
import { AiFillHtml5, AiOutlineProject } from "react-icons/ai";
import { FiCode } from "react-icons/fi";
import { FaReact, FaCss3Alt, FaJsSquare } from "react-icons/fa";

const menuItems = [
  { name: "Главное", icon: <MdHome className="text-pink-400" />, path: "/" },
  {
    name: "Курсы",
    icon: <MdSchool className="text-fuchsia-500" />,
    path: "/courses",
    submenu: [
      {
        name: "HTML",
        path: "/courses/html",
        icon: <AiFillHtml5 className="text-orange-500" />,
      },
      {
        name: "CSS",
        path: "/courses/css",
        icon: <FaCss3Alt className="text-blue-500" />,
      },
      {
        name: "JavaScript",
        path: "/courses/javascript",
        icon: <FaJsSquare className="text-yellow-400" />,
      },
      {
        name: "React",
        path: "/courses/react",
        icon: <FaReact className="text-cyan-400" />,
      },
      {
        name: "Проекты",
        path: "/courses/projects",
        icon: <AiOutlineProject className="text-purple-500" />,
      },
    ],
  },
  {
    name: "Подробнее",
    icon: <MdLibraryBooks className="text-purple-500" />,
    path: "/libraries",
    submenu: [
      { name: "Все библиотеки", path: "/libraries" },
      { name: "Собеседования", path: "/interview" },
    ],
  },
  {
    name: "Создать",
    icon: <FiCode className="text-teal-400" />,
    path: "/create",
    submenu: [
      {
        name: "Сайт на HTML",
        path: "/hsait",
        icon: <AiFillHtml5 className="text-orange-500" />,
      },
      {
        name: "Сайт на JS",
        path: "/Jsait",
        icon: <FaJsSquare className="text-yellow-400" />,
      },
      {
        name: "Сайт на React",
        path: "/Rsait",
        icon: <FaReact className="text-cyan-400" />,
      },
    ],
  },
  {
    name: "О нас",
    icon: <MdGroup className="text-fuchsia-600" />,
    path: "/about",
  },
  {
    name: "Контакты",
    icon: <MdContactMail className="text-pink-500" />,
    path: "/contact",
  },
  {
    name: "Видео уроки",
    icon: <MdVideoLibrary className="text-purple-600" />,
    path: "/tutorial",
  },
];

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openDropdown, setOpenDropdown] = useState("");
  const [openMobileSubmenus, setOpenMobileSubmenus] = useState({});
  const location = useLocation();

  const handleDropdownToggle = (name) => {
    setOpenDropdown((prev) => (prev === name ? "" : name));
  };

  const handleMobileLinkClick = () => {
    setOpenMenu(false);
    setOpenDropdown("");
    setOpenMobileSubmenus({});
  };

  const toggleMobileSubmenu = (name) => {
    setOpenMobileSubmenus((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const submenuVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
      },
    }),
    exit: { opacity: 0, y: -10 },
  };

  return (
    <header className="bg-gray-900 shadow-md px-4 md:px-8 py-3 fixed w-full z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <Link
          to="/"
          className="text-xl font-bold text-white font-orbitron tracking-wide"
        >
          FrontSam
        </Link>

        <div className="md:hidden">
          <button onClick={() => setOpenMenu(!openMenu)} className="text-white">
            <MdMenu size={28} />
          </button>
        </div>

        <nav className="hidden md:flex gap-6 items-center relative">
          {menuItems.map((item, index) => (
            <div key={index} className="relative">
              {item.submenu ? (
                <>
                  <button
                    onClick={() => handleDropdownToggle(item.name)}
                    className="flex items-center gap-2 text-white hover:text-fuchsia-400 transition duration-300"
                  >
                    {item.icon} {item.name} <MdExpandMore />
                  </button>

                  <AnimatePresence>
                    {openDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute bg-gray-800 shadow-lg rounded-md mt-2 p-3 z-50"
                      >
                        <ul className="space-y-2 min-w-[180px]">
                          {item.submenu.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              <Link
                                to={subItem.path}
                                className="flex items-center gap-2 text-gray-300 hover:text-pink-400 transition"
                              >
                                {subItem.icon && subItem.icon}
                                {subItem.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <Link
                  to={item.path}
                  className="flex items-center gap-2 text-white hover:text-fuchsia-400 transition duration-300"
                >
                  {item.icon} {item.name}
                </Link>
              )}
            </div>
          ))}
        </nav>
      </div>

      <AnimatePresence>
        {openMenu && (
          <>
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={() => setOpenMenu(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 left-0 bottom-0 w-64 bg-gray-800 shadow-md z-50 overflow-y-auto"
            >
              <ul className="p-4 space-y-4">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <div className="flex justify-between items-center">
                      <Link
                        to={item.path || "#"}
                        onClick={() => {
                          if (!item.submenu) handleMobileLinkClick();
                        }}
                        className="flex items-center gap-2 text-white hover:text-fuchsia-400"
                      >
                        {item.icon} {item.name}
                      </Link>

                      {item.submenu && (
                        <button
                          onClick={() => toggleMobileSubmenu(item.name)}
                          className="text-fuchsia-400"
                        >
                          <MdExpandMore
                            className={`transform transition-transform duration-300 ${
                              openMobileSubmenus[item.name] ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      )}
                    </div>

                    <AnimatePresence>
                      {item.submenu && openMobileSubmenus[item.name] && (
                        <motion.ul
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          variants={{
                            visible: {
                              transition: {
                                staggerChildren: 0.1,
                              },
                            },
                          }}
                          className="pl-6 mt-2 space-y-1"
                        >
                          {item.submenu.map((sub, subIndex) => (
                            <motion.li
                              key={subIndex}
                              custom={subIndex}
                              variants={submenuVariants}
                            >
                              <Link
                                to={sub.path}
                                onClick={handleMobileLinkClick}
                                className="flex items-center gap-2 text-sm text-gray-300 hover:text-pink-400"
                              >
                                {sub.icon && sub.icon}
                                {sub.name}
                              </Link>
                            </motion.li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Moon } from "lucide-react";
import { Sun } from "lucide-react";
import { Menu, X } from "lucide-react";
import { col } from "framer-motion/client";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const newItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  const lightColor = {
    navBg: "bg-linear-to-br from-orange-200 to-white",
    textPrimary: "text-gray-900",
    textSecondary: "text-gray-800",
    textHover: "text-orange-500",
    textActive: "text-orange-600",
    indector: "from-orange-600 to-orange-500",
    button: "from-orange-500 to-amber-500",
  };

  const darkColor = {
    navBg: "bg-linear-to-br from-gray-200 to-black",
    textPrimary: "text-white",
    textSecondary: "text-gray-300",
    textHover: "text-orange-400",
    textActive: "text-orange-400",
    indector: "from-orange-600 to-orange-500",
    button: "from-orange-500 to-amber-500",
  };

  const colors = darkMode ? darkColor : lightColor;

  const handleNavClick = (itemName) => {
    setActiveSection(itemName.toLowerCase());
    setIsMenuOpen(false);
  };

  return (
    <div className="flex justify-center w-full fixed z-50 mt-4">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`flex items-center justify-center ${colors.navBg} backdrop-blur-lg rounded-lg px-4 lg:px-8 py-2 shadow-lg`}
      >
        <div className="flex items-center justify-between w-full space-x-6 lg:space-x-8">
          {/* logo */}
          <motion.a
            href="/"
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 "
          >
            <span className={`text-xl font-bold ${colors.textPrimary}`}>
              portfolio <span className="text-orange-500">.</span>
            </span>
          </motion.a>

          {/* menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {newItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                onClick={() => handleNavClick(item.name)}
                className="relative"
              >
                <motion.span
                  className={`font-medium transition-colors duration-300 ${
                    activeSection === item.name.toLowerCase()
                      ? colors.textActive
                      : `${colors.textSecondary} hover:text-orange-500`
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.5 }}
                >
                  {item.name}
                </motion.span>

                {activeSection === item.name.toLowerCase() && (
                  <motion.div
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-linear-to-r rounded-full ${colors.indector}`}
                    layoutId="navIndicator"
                  />
                )}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            {/* Dark mode toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleDarkMode}
              className={`p-2 rounded-full ${
                darkMode ? "bg-gray-700" : "bg-gray-200"
              } transition-colors`}
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-300" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </motion.button>

            {/* button */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`hidden lg:block px-6 py-2 font-semibold rounded-full bg-linear-to-r ${colors.button} text-white shadow-md hover:shadow-lg transition-shadow`}
            >
              Hire Me
            </motion.a>
          </div>

          {/* mobile menu button */}
          <div className="flex lg:hidden items-center space-x-4 px-2">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-lg ${
                darkMode ? "bg-gray-700" : "bg-gray-200"
              } transition-colors`}
            >
              {isMenuOpen ? (
                <X
                  className={`w-5 h-5 ${darkMode ? "text-white" : "text-gray-700"}`}
                />
              ) : (
                <Menu
                  className={`w-5 h-5 ${darkMode ? "text-white" : "text-gray-700"}`}
                />
              )}
            </motion.button>
          </div>
        </div>

        {/* MOBILE MENU (FIXED SECTION) */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.3 }}
            className={`absolute top-full left-0 right-0 mt-2 lg:hidden
              ${darkMode ? "bg-gray-700" : "bg-white/95"} backdrop-blur-lg rounded-xl
              ${darkMode ? "border-gray-700" : "border-gray-200"}`}
          >
            <div className="px-4 py-3 space-y-2">
              {newItems.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  onClick={() => handleNavClick(item.name)}
                  className="block"
                >
                  <motion.div
                    whileHover={{ x: 5 }}
                    className={`py-3 px-4 rounded-lg text-center ${
                      activeSection === item.name.toLowerCase()
                        ? darkMode
                          ? "bg-gray-800"
                          : "bg-orange-50"
                        : ""
                    }`}
                  >
                    <span
                      className={`font-medium ${
                        activeSection === item.name.toLowerCase()
                          ? colors.textActive
                          : colors.textSecondary
                      }`}
                    >
                      {item.name}
                    </span>
                  </motion.div>
                </a>
              ))}

              <motion.a
                href="#contact"
                whileTap={{ scale: 0.95 }}
                className={`block text-center px-4 py-3 font-semibold rounded-lg bg-linear-to-r ${colors.button} text-white shadow-md `}
              >
                Hire Me
              </motion.a>
            </div>
          </motion.div>
        )}
      </motion.nav>
    </div>
  );
};

export default Navbar;

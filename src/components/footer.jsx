import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = ({ darkMode }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        background: darkMode
          ? "linear-gradient(to bottom, #000000, #111827)"
          : "linear-gradient(to bottom, #f3f4f6, #e5e7eb)",
        borderColor: darkMode ? "#374151" : "#d1d5db",
      }}
      className="border-t"
    >
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* CENTER SECTION */}
          <div className="flex flex-col items-center text-center w-full">
            <h3 className="text-2xl font-bold mb-2 text-orange-500 dark:text-white">
              Portfolio
            </h3>

            <p
              className="text-sm mb-4"
              style={{
                color: darkMode ? "#9ca3af" : "",
              }}
            >
              Full Stack Developer UI/UX Designer
            </p>

            {/* ICONS MOVED BELOW TEXT */}
            <div className="flex gap-4 justify-center">
              <a
                href="https://github.com/wajidullahcs" target="_blank"
                className="w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-all hover:bg-gradient-to-r hover:from-orange-500 hover:to-amber-500 hover:text-white bg-[#374151] dark:bg-[#f3f4f6] text-white dark:text-[#374151]"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/wajid-ullah-43b156306/" target="_blank"
                className="w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-all hover:bg-gradient-to-r hover:from-orange-500 hover:to-amber-500 hover:text-white bg-[#374151] dark:bg-[#f3f4f6] text-white dark:text-[#374151]"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

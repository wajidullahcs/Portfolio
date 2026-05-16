import React from "react";
import about from "../assets/HeroImg.png";

const About = ({ darkMode }) => {
  return (
    <section
      id="about"
      className={`min-h-screen overflow-hidden flex items-center justify-center px-4 sm:px-6 
  ${darkMode ? "bg-gray-900" : "bg-gray-50"}
  `}
    >
      <div className="max-w-6xl w-full flex justify-center items-center">
        {/* TEXT */}
        <article className="text-center relative max-w-4xl">
          <header
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-transparent bg-linear-to-r from-orange-400 to-orange-600 bg-clip-text"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <h1>About Me</h1>
          </header>

          <p
            className={`text-sm sm:text-base lg:text-lg xl:text-xl mb-6 sm:mb-8 leading-relaxed bg-linear-to-r from-orange-900/10 to-orange-900/5 p-4 sm:p-6 rounded-xl sm:rounded-2xl backdrop-blur-sm 
        ${darkMode ? "text-gray-300" : "text-gray-700"}`}
            data-aos="fade-up"
            data-aos-delay="500"
          >
            I am a Full Stack MERN Developer focused on building clean,
            responsive, and professional web applications. I have experience
            working with frontend and backend technologies including React,
            Tailwind CSS, Node.js, Express.js, and MySQL. I have completed
            multiple projects and continuously improve my skills to create
            better digital experiences.
          </p>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
            <div
              className="text-center"
              data-aos="zoom-in"
              data-aos-delay="650"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-400">
                3+
              </div>
              <div
                className={`text-xs sm:text-sm lg:text-base
          ${darkMode ? "text-gray-300" : "text-gray-600"}
          `}
              >
                Education
              </div>
            </div>

            <div
              className="text-center"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-400">
                3+
              </div>
              <div
                className={`text-xs sm:text-sm lg:text-base
          ${darkMode ? "text-gray-300" : "text-gray-600"}
          `}
              >
                Months Experience
              </div>
            </div>

            <div
              className="text-center"
              data-aos="zoom-in"
              data-aos-delay="700"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-400">
                1+
              </div>
              <div
                className={`text-xs sm:text-sm lg:text-base
          ${darkMode ? "text-gray-300" : "text-gray-600"}
          `}
              >
                Projects Completed
              </div>
            </div>
          </div>

          <button
            className={`w-full sm:w-auto border-2 border-orange-500 inline-flex items-center justify-center px-4 sm:px-6 py-2 rounded-full font-semibold shadow-md hover:shadow-[0_0_40px_rgb(255,165,0,0.7)] text-base sm:text-lg transition-all duration-300 transform`}
            data-aos="fade-up"
            data-aos-delay="800"
          >
            Learn More
          </button>
        </article>
      </div>
    </section>
  );
};

export default About;

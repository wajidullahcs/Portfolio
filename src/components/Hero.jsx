import cv from "../assets/Complete-CV.pdf";
import { DownloadIcon } from "lucide-react";
import { Mail } from "lucide-react";
import hero from "../assets/about.png";

const Hero = ({ darkMode }) => {
  const darkTheme = {
    textPrimary: "text-white",
    textSecondary: "text-gray-400",
    textprimary1: "text-gray-400",
    buttonSecondary: "text-white border-2 border-orange-500",
    hover: "bg-orange-600",
    decorativeCircle: "bg-orange-500 opacity-10",
  };

  const lightTheme = {
    textPrimary: "text-black",
    textSecondary: "text-gray-700",
    buttonSecondary:
      "text-gray-800 border-2 border-orange-500 hover:bg-orange-500 hover:text-white",
    decorativeCircle: "bg-orange-400 opacity-20",
  };

  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <div className="relative overflow-hidden min-h-screen flex flex-col">
      <section
        id="home"
        data-aos="fade-up"
        data-aos-delay="250"
        className="body-font z-10"
      >
        <div className="container mx-auto flex px-4 sm:px-8 lg:px-14 py-12 lg:py-14 flex-col lg:flex-row items-center justify-between lg:mt-14 mt-14">
          {/* LEFT SIDE (TEXT) */}
          <div className="lg:w-1/2 w-full flex flex-col items-center lg:items-start text-center lg:text-left mb-12 lg:mb-2">
            <h1
              className={`title-font sm:text-4xl lg:text-5xl text-3xl mb-4 font-bold ${theme.textprimary1}`}
              data-aos="fade-up"
              data-aos-delay="500"
            >
              Full Stack MERN Developer
            </h1>

            <p
              className={`mb-6 sm:mb-8 leading-relaxed max-w-md sm:max-w-lg ${theme.textprimary1}`}
              data-aos="fade-up"
              data-aos-delay="600"
            >
              Hi, I’m a MERN Stack Web Developer passionate about building
              responsive, modern, and user-friendly web applications. I work
              with frontend and backend technologies to create professional
              digital experiences.
            </p>

            {/* BUTTONS */}
            <div className="w-full pt-4 sm:pt-6">
              <div
                className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                <a href={cv} download className="w-full sm:w-auto">
                  <button className="inline-flex items-center justify-center text-white bg-linear-to-r from-orange-500 to-amber-500 px-6 sm:px-8 py-3 rounded-full font-semibold shadow-md hover:shadow-[0_0_40px_rgb(255,165,0,0.7)] text-base sm:text-lg transition-all duration-300 transform ">
                    <DownloadIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-2 " />
                    Download CV
                  </button>
                </a>

                <a href="#contact" className="w-full sm:w-auto">
                  <button
                    className={`inline-flex items-center ${theme.buttonSecondary} justify-center px-6 sm:px-8 py-3 rounded-full font-semibold shadow-md hover:shadow-[0_0_40px_rgb(255,165,0,0.7)] text-base sm:text-lg transition-all duration-300 transform `}
                  >
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Contact Me
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE (IMAGE FIXED HERE) */}
          <div
            className="lg:w-1/2 w-full mx-w-md lg:max-w-lg mt-8 lg:mt-0 flex justify-center "
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <div className="relative w-4/5 sm:w-3/4 lg:w-full">
              <div className="relative overflow-hidden">
                <img
                  src={hero}
                  alt="Hero image"
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500 rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className={`absolute -top-20 -left-20 w-40 h-40 sm:w-64 sm:h-64 ${theme.decorativeCircle} rounded-full mix-blend-multiply filter blur-3xl opacity-10 animation-pulse delay-1000 hidden sm:block`}
        ></div>
      </section>
    </div>
  );
};

export default Hero;

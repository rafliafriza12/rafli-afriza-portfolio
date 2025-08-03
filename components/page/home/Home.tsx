"use client";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import ProfileCard from "@/components/card/ProfileCard";
import {
  Laptop,
  UserRoundSearch,
  Laugh,
  AlarmClock,
  Blocks,
  ChartNoAxesCombined,
} from "lucide-react";
import { useState, useEffect } from "react";
import Wave from "@/components/svg/Wave";
import ProjectCard from "@/components/card/ProjectCard";
import { TProjectCardProps } from "@/types/project.type";
import { projects } from "@/datas/project";
import { technologies, ITechnologies } from "@/datas/technologies";
import Image from "next/image";

const Home = () => {
  const [tabActive, setTabActive] = useState<number>(0);

  useEffect(() => {}, [tabActive]);

  return (
    <div className="w-full bg-transparent flex flex-col gap-20 sm:gap-28 items-center py-10 relative z-0 overflow-hidden">
      <div className="absolute z-[-10] top-20 sm:top-60 -left-1/4 sm:-left-9 w-[150%] sm:w-full scale-[1.1] opacity-70">
        <Wave />
      </div>

      <div className="w-full px-6 sm:px-10 lg:px-20 flex flex-col lg:flex-row lg:justify-between relative backdrop-blur-sm z-10">
        <div className="w-full lg:w-[55%] flex flex-col py-10 lg:py-14 lg:pr-10 lg:justify-center gap-4 sm:gap-6 z-0">
          <TypeAnimation
            sequence={[
              "Software Engineer",
              1000,
              "",
              1000,
              "Frontend Engineer",
              1000,
              "",
              1000,
              "Backend Engineer",
              1000,
              "",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ display: "inline-block" }}
            repeat={Infinity}
            className="font-semibold text-[#888888] text-xs sm:text-sm lg:text-md"
          />

          <div className="text-white flex flex-col text-3xl sm:text-4xl lg:text-5xl gap-2 sm:gap-4">
            <h1 className="font-light">
              Hi, I'm <span className="font-extrabold">Rafli</span>
            </h1>
            <h1 className="font-extrabold">Afriza Nugraha.</h1>
          </div>
          <p className="text-white text-xs sm:text-sm lg:text-base font-light w-full max-w-lg">
            Greetings! I'm Rafli Afriza Nugraha, a passionate and
            detail-oriented Software Engineer based in Indonesia. Currently
            enrolled at Syaih Kuala University.
          </p>

          <div className="w-full flex justify-start items-center gap-3 sm:gap-4 pt-4 lg:pt-8 text-xs sm:text-sm lg:text-base text-white font-semibold">
            <a
              href="/assets/cv/CV-Rafli-Afriza-Nugraha.pdf"
              download={"CV-Rafli-Afriza-Nugraha.pdf"}
              className="px-4 py-2 sm:px-5 sm:py-3 bg-[#1B5F96] rounded-md cursor-pointer duration-300 hover:translate-y-[-4px] text-center"
            >
              Download CV
            </a>
            <Link
              href={"/contact"}
              className="px-4 py-2 sm:px-5 sm:py-3 bg-[#31363F] rounded-md duration-300 hover:translate-y-[-4px] text-center"
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="w-full lg:w-[45%] flex items-center justify-center py-8 lg:py-10">
          <ProfileCard />
        </div>
      </div>

      <div className="px-6 sm:px-10 lg:px-20 w-full flex flex-col gap-6 items-start text-white">
        <div>
          <h1 className="font-bold text-xl sm:text-2xl">Things I do</h1>
          <div className="w-full rounded-full h-1 mb-4 bg-gray-700">
            <div
              className="bg-[#1B5F96] h-1 rounded-full"
              style={{ width: "45%" }}
            ></div>
          </div>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          <div className="w-full flex flex-col gap-2">
            <div className="w-full flex items-center gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#31363F] flex justify-center items-center rounded-md flex-shrink-0">
                <Laptop size={22} color="#1B5F96" />
              </div>
              <div>
                <h1 className="font-bold text-base sm:text-lg">
                  Website Building
                </h1>
              </div>
            </div>
            <div className="w-full flex gap-4">
              <div className="w-10 sm:w-12 flex-shrink-0"></div>
              <p className="text-xs sm:text-sm text-gray-400">
                I am ready to help you build your dream website with an
                attractive design, fast performance and reliable functionality,
                the right web solution for your online success!
              </p>
            </div>
          </div>

          <div className="w-full flex flex-col gap-2">
            <div className="w-full flex items-center gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#31363F] flex justify-center items-center rounded-md flex-shrink-0">
                <UserRoundSearch size={22} color="#1B5F96" />
              </div>
              <div>
                <h1 className="font-bold text-base sm:text-lg">
                  Problem Solving
                </h1>
              </div>
            </div>
            <div className="w-full flex gap-4">
              <div className="w-10 sm:w-12 flex-shrink-0"></div>
              <p className="text-xs sm:text-sm text-gray-400">
                I am a problem solver ready to provide smart and effective
                solutions to every challenge, helping you achieve your goals
                more quickly and efficiently.
              </p>
            </div>
          </div>

          <div className="w-full flex flex-col gap-2">
            <div className="w-full flex items-center gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#31363F] flex justify-center items-center rounded-md flex-shrink-0">
                <Laptop size={22} color="#1B5F96" />
              </div>
              <div>
                <h1 className="font-bold text-base sm:text-lg">
                  Internet of Things
                </h1>
              </div>
            </div>
            <div className="w-full flex gap-4">
              <div className="w-10 sm:w-12 flex-shrink-0"></div>
              <p className="text-xs sm:text-sm text-gray-400">
                I specialize in IoT solutions that connect devices and systems,
                enabling smarter living and efficient operations through
                innovative technology.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        id="projects"
        className="px-6 sm:px-10 lg:px-20 w-full flex flex-col items-start gap-6 text-white"
      >
        <div>
          <h1 className="font-bold text-xl sm:text-2xl">Things I've done</h1>
          <div className="w-full rounded-full h-1 mb-4 bg-gray-700">
            <div
              className="bg-[#1B5F96] h-1 rounded-full"
              style={{ width: "40%" }}
            ></div>
          </div>
        </div>

        <div className="border-b border-gray-700 ">
          <ul className="flex flex-wrap -mb-px text-xs sm:text-sm font-medium text-start text-gray-400">
            <li className="me-2">
              <button
                onClick={() => setTabActive(0)}
                className={`flex items-center justify-start p-3 sm:p-4 border-b-2 rounded-t-lg hover:border-gray-300 hover:text-gray-300 group gap-1 sm:gap-2 ${tabActive === 0 ? "border-gray-300 text-gray-300" : "border-transparent"}`}
              >
                <Laptop size={18} />
                Projects
              </button>
            </li>
            <li className="me-2">
              <button
                onClick={() => setTabActive(1)}
                className={`flex items-center justify-start p-3 sm:p-4 border-b-2 rounded-t-lg hover:border-gray-300 hover:text-gray-300 group gap-1 sm:gap-2 ${tabActive === 1 ? "border-gray-300 text-gray-300" : "border-transparent"}`}
              >
                <Blocks size={18} />
                Technologies
              </button>
            </li>
          </ul>
        </div>

        <div className="w-full mt-4 sm:mt-5">
          {tabActive === 0 ? (
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
              {projects.map((project: TProjectCardProps) => (
                <ProjectCard
                  key={project.slug} // Added key prop for list rendering
                  slug={project.slug}
                  title={project.title}
                  description={project.description}
                  imgUrl={project.imgUrl}
                />
              ))}
            </div>
          ) : (
            <section>
              <div className="tech-icons-wrapper flex flex-row flex-wrap justify-center gap-6 sm:gap-10">
                {technologies.map((technology: ITechnologies) => (
                  <div
                    className={`w-16 h-16 sm:w-20 sm:h-20 relative  lg:grayscale-[1] lg:hover:grayscale-0 ${technology?.shadow ?? ""} ${technology?.style ?? ""} duration-300`}
                    key={technology.name}
                  >
                    <Image
                      src={technology.icon}
                      alt={technology.name}
                      fill
                      className="tech-icon w-full h-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>

      <div className="px-6 sm:px-10 lg:px-20 w-full flex flex-col items-start text-white gap-6">
        <div>
          <h1 className="font-bold text-xl sm:text-2xl">Fun Fact</h1>
          <div className="w-full rounded-full h-1 mb-4 bg-gray-700">
            <div
              className="bg-[#1B5F96] h-1 rounded-full"
              style={{ width: "60%" }}
            ></div>
          </div>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          <div className="w-full h-[80px] sm:h-[90px] flex items-center rounded-md border-[3px] border-[#31363F] hover:shadow-[0px_0px_20px_rgba(27,95,150,0.5)] hover:-translate-y-1 duration-300">
            <div className="w-[25%] sm:w-[20%] h-full bg-[#31363F] flex justify-center items-center flex-shrink-0">
              <Laugh size={26} color="#888888" />
            </div>
            <div className="w-[75%] sm:w-[80%] px-3 sm:px-5 flex flex-col justify-center">
              <h1 className="font-extrabold text-xl sm:text-2xl text-[#1B5F96]">
                16
              </h1>
              <h1 className="text-sm sm:text-base font-bold">Happy Client</h1>
            </div>
          </div>
          <div className="w-full h-[80px] sm:h-[90px] flex items-center rounded-md border-[3px] border-[#31363F] hover:shadow-[0px_0px_20px_rgba(27,95,150,0.5)] hover:-translate-y-1 duration-300">
            <div className="w-[25%] sm:w-[20%] h-full bg-[#31363F] flex justify-center items-center flex-shrink-0">
              <AlarmClock size={26} color="#888888" />
            </div>
            <div className="w-[75%] sm:w-[80%] px-3 sm:px-5 flex flex-col justify-center">
              <h1 className="font-extrabold text-xl sm:text-2xl text-[#1B5F96]">
                1500+
              </h1>
              <h1 className="text-sm sm:text-base font-bold">Working Hour</h1>
            </div>
          </div>
          <div className="w-full h-[80px] sm:h-[90px] flex items-center rounded-md border-[3px] border-[#31363F] hover:shadow-[0px_0px_20px_rgba(27,95,150,0.5)] hover:-translate-y-1 duration-300">
            <div className="w-[25%] sm:w-[20%] h-full bg-[#31363F] flex justify-center items-center flex-shrink-0">
              <ChartNoAxesCombined size={26} color="#888888" />
            </div>
            <div className="w-[75%] sm:w-[80%] px-3 sm:px-5 flex flex-col justify-center">
              <h1 className="font-extrabold text-xl sm:text-2xl text-[#1B5F96]">
                1+
              </h1>
              <h1 className="text-sm sm:text-base font-bold">
                Professional Experience
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

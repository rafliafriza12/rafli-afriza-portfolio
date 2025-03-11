"use client";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import ProfileCard from "@/components/card/ProfileCard";
import ServiceCard from "@/components/card/ServiceCard";
import { service } from "@/datas/service";
import { Service } from "@/types";
import {
  Laptop,
  UserRoundSearch,
  Laugh,
  AlarmClock,
  Blocks,
} from "lucide-react";
import { useState, useEffect } from "react";

const Home = () => {
  const [tabActive, setTabActive] = useState<number>(0);
  const [filter, setFilter] = useState<string>("website");
  const [filteredServiceData, setFilteredServiceData] = useState<Service[]>([]);

  useEffect(() => {
    const newFilter =
      tabActive === 0 ? "website" : tabActive === 1 ? "solving" : "iot";
    setFilter(newFilter);
  }, [tabActive]);

  // Gunakan useEffect untuk filter data setelah filter diperbarui
  useEffect(() => {
    const filteredData: Service[] = service.filter(
      (data: Service) => data.category === filter
    );
    setFilteredServiceData(filteredData);
  }, [filter]);

  return (
    <div className="w-full bg-transparent flex flex-col gap-12 items-center py-10 relative z-0">
      <div className=" absolute z-[-10] top-60 -left-9 w-full scale-[1.1]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1050 220">
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#00c2cb" />
              <stop offset="50%" stop-color="#a742f5" />
              <stop offset="100%" stop-color="#00c2cb" />
              <animate
                attributeName="x1"
                values="0%;100%;50%;0%;100%;0%"
                dur="8s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="x2"
                values="100%;200%;150%;100%;200%;100%"
                dur="8s"
                repeatCount="indefinite"
              />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#a742f5" />
              <stop offset="50%" stop-color="#00c2cb" />
              <stop offset="100%" stop-color="#a742f5" />
              <animate
                attributeName="x1"
                values="0%;100%;50%;0%;100%;0%"
                dur="10s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="x2"
                values="100%;200%;150%;100%;200%;100%"
                dur="10s"
                repeatCount="indefinite"
              />
            </linearGradient>

            <filter id="glow" x="-20%" y="-20%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          <path
            fill="transparent"
            filter="url(#glow)"
            opacity="0.8"
            stroke="url(#gradient1)"
            strokeWidth="35"
          >
            <animate
              attributeName="d"
              dur="8s"
              repeatCount="indefinite"
              keyTimes="0;0.25;0.5;0.75;1"
              values="
        M0,150 L0,300 L1200,300 L1200,150 C1000,180 800,120 600,150 C400,180 200,120 0,150 Z;
        M0,150 L0,300 L1200,300 L1200,150 C1000,220 800,100 600,150 C400,220 200,100 0,150 Z;
        M0,150 L0,300 L1200,300 L1200,150 C1000,180 800,120 600,150 C400,180 200,120 0,150 Z;
        M0,150 L0,300 L1200,300 L1200,150 C1000,160 800,140 600,150 C400,160 200,140 0,150 Z;
        M0,150 L0,300 L1200,300 L1200,150 C1000,180 800,120 600,150 C400,180 200,120 0,150 Z"
              calcMode="spline"
              keySplines="0.42 0 0.58 1; 0.42 0 0.58 1; 0.42 0 0.58 1; 0.42 0 0.58 1"
            />
          </path>

          <path
            fill="transparent"
            filter="url(#glow)"
            opacity="0.6"
            stroke="url(#gradient2)"
            strokeWidth="35"
          >
            <animate
              attributeName="d"
              dur="15s"
              repeatCount="indefinite"
              keyTimes="0;0.25;0.5;0.75;1"
              values="
        M0,180 L0,300 L1200,300 L1200,180 C1000,210 800,150 600,180 C400,210 200,150 0,180 Z;
        M0,180 L0,300 L1200,300 L1200,180 C1000,240 800,120 600,180 C400,240 200,120 0,180 Z;
        M0,180 L0,300 L1200,300 L1200,180 C1000,210 800,150 600,180 C400,210 200,150 0,180 Z;
        M0,180 L0,300 L1200,300 L1200,180 C1000,150 800,210 600,180 C400,150 200,210 0,180 Z;
        M0,180 L0,300 L1200,300 L1200,180 C1000,210 800,150 600,180 C400,210 200,150 0,180 Z"
              calcMode="spline"
              keySplines="0.42 0 0.58 1; 0.42 0 0.58 1; 0.42 0 0.58 1; 0.42 0 0.58 1"
            />
          </path>

          <path
            fill="transparent"
            filter="url(#glow)"
            opacity="0.3"
            stroke="#a742f5"
            strokeWidth="35"
          >
            <animate
              attributeName="d"
              dur="10s"
              repeatCount="indefinite"
              keyTimes="0;0.25;0.5;0.75;1"
              values="
        M0,100 L0,300 L1200,300 L1200,100 C1000,120 800,80 600,100 C400,120 200,80 0,100 Z;
        M0,100 L0,300 L1200,300 L1200,100 C1000,140 800,60 600,100 C400,140 200,60 0,100 Z;
        M0,100 L0,300 L1200,300 L1200,100 C1000,120 800,80 600,100 C400,120 200,80 0,100 Z;
        M0,100 L0,300 L1200,300 L1200,100 C1000,160 800,80 600,100 C400,160 200,80 0,100 Z;
        M0,100 L0,300 L1200,300 L1200,100 C1000,120 800,80 600,100 C400,120 200,80 0,100 Z"
              calcMode="spline"
              keySplines="0.42 0 0.58 1; 0.42 0 0.58 1; 0.42 0 0.58 1; 0.42 0 0.58 1"
            />
          </path>
        </svg>
      </div>

      <div className=" w-full flex flex-col lg:flex-row lg:justify-between px-10 lg:pl-20 lg:pr-14 overflow-hidden relative backdrop-blur-sm">
        <div className=" w-full lg:w-[55%] flex flex-col py-14 lg:pr-10 lg:justify-center gap-6 z-0">
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "Web Developer",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "",
              1000,
              "Frontend Engineer",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ display: "inline-block" }}
            repeat={Infinity}
            className="font-semibold text-[#888888] text-xs lg:text-md"
          />

          <div className=" text-white flex flex-col text-3xl lg:text-5xl gap-4">
            <h1 className=" font-light">
              Hi, I'm <span className=" font-extrabold">Rafli</span>
            </h1>
            <h1 className=" font-extrabold">Afriza Nugraha.</h1>
          </div>
          <p className=" text-white text-xs lg:text-base font-light w-full">
            Greetings! I'm Rafli Afriza Nugraha, a passionate and
            detail-oriented web developer based in Indonesia. Currently enrolled
            at Syaih Kuala University.
          </p>

          <div className="w-full flex justify-start items-center gap-4 pt-5 lg:pt-20 text-xs lg:text-base text-white font-semibold">
            <button className=" px-4 py-3 bg-[#1B5F96] rounded-md">
              Download CV
            </button>
            <Link
              href={"/contact"}
              className=" px-4 py-3 bg-[#31363F] rounded-md"
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="w-full lg:w-[45%] flex items-center lg:py-10 ">
          <ProfileCard />
        </div>
      </div>
      <div className="px-10 lg:pl-20 w-full flex flex-col gap-5 items-start text-white">
        <div>
          <h1 className=" font-bold text-xl lg:text-2xl">Things i do</h1>
          <div className="w-full rounded-full h-1 mb-4 bg-gray-700">
            <div
              className="bg-[#1B5F96] h-1 rounded-full"
              style={{ width: "45%" }}
            ></div>
          </div>
        </div>

        <div className=" w-full grid grid-rows-2 grid-cols-1 lg:grid-rows-1 lg:grid-cols-3 gap-10 lg:gap-0">
          <div className=" w-full flex flex-col gap-1">
            <div className=" w-full flex items-center gap-5">
              <div className=" w-[45px] h-[45px] bg-[#31363F] flex justify-center items-center rounded-md">
                <Laptop size={26} color="#1B5F96" />
              </div>
              <div>
                <h1 className=" font-bold text-base lg:text-lg">
                  Website Building
                </h1>
              </div>
            </div>
            <div className=" w-full flex gap-5">
              <div className=" w-[45px] h-[45px]"></div>
              <p className=" w-[80%] text-xs lg:text-sm text-gray-400">
                I am ready to help you build your dream website with an
                attractive design, fast performance and reliable functionality,
                the right web solution for your online success!
              </p>
            </div>
          </div>

          <div className=" w-full flex flex-col gap-1">
            <div className=" w-full flex items-center gap-5">
              <div className=" w-[45px] h-[45px] bg-[#31363F] flex justify-center items-center rounded-md">
                <UserRoundSearch size={26} color="#1B5F96" />
              </div>
              <div>
                <h1 className=" font-bold text-base lg:text-lg">
                  Problem Solving
                </h1>
              </div>
            </div>
            <div className=" w-full flex gap-5">
              <div className=" w-[45px] h-[45px]"></div>
              <p className=" w-[80%] text-xs lg:text-sm text-gray-400">
                I am a problem solver ready to provide smart and effective
                solutions to every challenge, helping you achieve your goals
                more quickly and efficiently.
              </p>
            </div>
          </div>

          <div className=" w-full flex flex-col gap-1">
            <div className=" w-full flex items-center gap-5">
              <div className=" w-[45px] h-[45px] bg-[#31363F] flex justify-center items-center rounded-md">
                <UserRoundSearch size={26} color="#1B5F96" />
              </div>
              <div>
                <h1 className=" font-bold text-base lg:text-lg">
                  Internet of Things
                </h1>
              </div>
            </div>
            <div className=" w-full flex gap-5">
              <div className=" w-[45px] h-[45px]"></div>
              <p className=" w-[80%] text-xs lg:text-sm text-gray-400">
                I specialize in IoT solutions that connect devices and systems,
                enabling smarter living and efficient operations through
                innovative technology.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-10 lg:pl-20 w-full flex flex-col items-start gap-5 text-white">
        <div>
          <h1 className=" font-bold text-xl lg:text-2xl">Service</h1>
          <div className="w-full rounded-full h-1 lg:mb-4 bg-gray-700">
            <div
              className="bg-[#1B5F96] h-1 rounded-full"
              style={{ width: "40%" }}
            ></div>
          </div>
        </div>

        <div className="border-b border-gray-700">
          <ul className="flex flex-wrap -mb-px text-xs lg:text-sm font-medium text-start text-gray-400 ">
            <li className="me-2">
              <button
                onClick={() => setTabActive(0)}
                className={`flex items-center justify-start p-4 border-b-2  rounded-t-lg  hover:border-gray-300 hover:text-gray-300 group gap-2 ${
                  tabActive === 0
                    ? "border-gray-300 text-gray-300"
                    : "border-transparent"
                }`}
              >
                <Laptop />
                Website
              </button>
            </li>
            <li className="me-2">
              <button
                onClick={() => setTabActive(1)}
                className={`flex items-center justify-start p-4 border-b-2  rounded-t-lg  hover:border-gray-300 hover:text-gray-300 group gap-2 ${
                  tabActive === 1
                    ? "border-gray-300 text-gray-300"
                    : "border-transparent"
                }`}
              >
                <UserRoundSearch />
                Solving
              </button>
            </li>
            <li className="me-2">
              <button
                onClick={() => setTabActive(2)}
                className={`flex items-center justify-start p-4 border-b-2  rounded-t-lg  hover:border-gray-300 hover:text-gray-300 group gap-2 ${
                  tabActive === 2
                    ? "border-gray-300 text-gray-300"
                    : "border-transparent"
                }`}
              >
                <Blocks />
                Internet of Things
              </button>
            </li>
          </ul>
        </div>

        <div className="w-full lg:pr-10">
          <ServiceCard cards={filteredServiceData} />
        </div>
      </div>
      <div className="px-10 lg:pl-20 w-full flex flex-col items-start text-white pr-10 gap-5">
        <div>
          <h1 className=" font-bold text-xl lg:text-2xl">Fun Fact</h1>
          <div className="w-full rounded-full h-1 mb-4 bg-gray-700">
            <div
              className="bg-[#1B5F96] h-1 rounded-full"
              style={{ width: "60%" }}
            ></div>
          </div>
        </div>

        <div className="w-full grid grid-cols-1 grid-rows-3 lg:grid-cols-3 lg:grid-rows-1 gap-5">
          <div className=" w-full h-[90px] flex items-center rounded-md border-[3px] border-[#31363F] hover:-translate-y-1 duration-300">
            <div className=" w-[20%] h-full bg-[#31363F] flex justify-center items-center">
              <Laugh size={30} color="#888888" />
            </div>
            <div className="w-[80%] px-5 flex flex-col justify-center">
              <h1 className=" font-extrabold text-xl lg:text-2xl text-[#1B5F96]">
                16
              </h1>
              <h1 className=" text-sm lg:text-base font-bold">Happy Client</h1>
            </div>
          </div>
          <div className=" w-full h-[90px] flex items-center rounded-md border-[3px] border-[#31363F] hover:-translate-y-1 duration-300">
            <div className=" w-[20%] h-full bg-[#31363F] flex justify-center items-center">
              <AlarmClock size={30} color="#888888" />
            </div>
            <div className="w-[80%] px-5 flex flex-col justify-center">
              <h1 className=" font-extrabold text-xl lg:text-2xl text-[#1B5F96]">
                528
              </h1>
              <h1 className="text-sm lg:text-base font-bold">Working Hour</h1>
            </div>
          </div>
          <div className=" w-full h-[90px] flex items-center rounded-md border-[3px] border-[#31363F] hover:-translate-y-1 duration-300">
            <div className=" w-[20%] h-full bg-[#31363F] flex justify-center items-center">
              <Laugh size={30} color="#888888" />
            </div>
            <div className="w-[80%] px-5 flex flex-col justify-center">
              <h1 className=" font-extrabold text-xl lg:text-2xl text-[#1B5F96]">
                5
              </h1>
              <h1 className="text-sm lg:text-base font-bold">Project</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

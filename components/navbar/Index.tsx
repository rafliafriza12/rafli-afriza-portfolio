"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import PlayList from "../song/PlayList";
import { Instagram, Linkedin, Github } from "lucide-react";
import { useEffect } from "react";
const Navbar: React.FC = () => {
  const [isFocus, setIsfocus] = useState<boolean>(false);
  const [isActiveSection, setIsActiveSection] = useState<number>(1);
  const [height, setHeight] = useState<boolean>(false);
  const [width, setWidth] = useState<boolean>(false);
  const [listNav, setListNav] = useState<boolean>(false);
  const [listHover, setListHover] = useState<number>(0);
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
  const [isScrollDown, setIsScrollDown] = useState<boolean>(false);
  const [isHoverInstagram, setIsHoverInstagram] = useState<boolean>(false);
  const [isHoverEmail, setIsHoverEmail] = useState<boolean>(false);
  const [isHoverGithub, setIsHoverGithub] = useState<boolean>(false);
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>();

  const sizeHandler = () => {
    setTimeout(() => {
      setHeight(!height);
    }, 0);
    setTimeout(() => {
      setWidth(!width);
    }, 350);
  };

  const listViewHandler = () => {
    if (!listNav) {
      setTimeout(() => {
        setListNav(!listNav);
      }, 490);
    } else {
      setListNav(!listNav);
    }
  };

  const handleClick = () => {
    const mobilButton = document.getElementById(
      "mobile-button"
    ) as HTMLButtonElement;
    mobilButton.disabled = true;
    setTimeout(() => {
      mobilButton.disabled = false;
    }, 500);
    sizeHandler();
    setIsfocus((state) => !state);
    listViewHandler();
  };

  const handleScroll = () => {
    // console.log(isFocus);
    if (!isFocus) {
      const currentScrollPos: number = window.pageYOffset;
      if (Math.abs(currentScrollPos - prevScrollPos) > 100 && !isFocus) {
        if (currentScrollPos > prevScrollPos) {
          setIsScrollDown(true);
          // console.log("Down");
        } else {
          setIsScrollDown(false);
          // console.log("Up");
        }
        setPrevScrollPos(currentScrollPos);
      }
    }
  };

  useEffect(() => {
    window.innerWidth <= 640 ? setIsSmallScreen(true) : setIsSmallScreen(false);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, isFocus, isActiveSection]);

  if (isSmallScreen) {
    return (
      <div className=" w-screen relative z-[100]">
        <div className="lg:hidden w-full flex justify-center items-center px-7 box-border">
          <div
            className={`flex flex-col box-border justify-between items-start rounded-xl h-[10%] min-h-10 max-h-16 fixed z-[151] duration-[0.3s] ${
              !isScrollDown ? "bottom-[3%]" : "bottom-[-10%]"
            } ${
              width
                ? "min-w-[88%] max-w-[88%] sm:min-w-[65%] sm:max-w-[65%]"
                : "min-w-32 max-w-40"
            } ${
              height ? "min-h-[80%] max-h-[80%]" : "min-h-10 max-h-16"
            } bg-[#1E252D] py-4 border-[#888888] border-[1.8px]`}
          >
            <div className=" box-border px-7 h-[90%]">
              <ol className={`relative box-border ${listNav ? "" : "hidden"}`}>
                <li className="mb-10 ms-4">
                  <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-400"></div>
                  <Link href={"/"} onClick={() => handleClick()}>
                    <time className="mb-1 text-sm font-bold leading-none text-gray-400 ">
                      About Me
                    </time>
                  </Link>
                </li>
                <li className="mb-10 ms-4">
                  <div className="absolute w-3 h-3  rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-400"></div>
                  <Link href={"/Pages/Resume"} onClick={() => handleClick()}>
                    <time className="mb-1 text-sm font-bold leading-none text-gray-400 ">
                      Resume
                    </time>
                  </Link>
                </li>
                <li className="mb-10 ms-4">
                  <div className="absolute w-3 h-3  rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-400"></div>
                  <Link href={"/Pages/Project"} onClick={() => handleClick()}>
                    <time className="mb-1 text-sm font-bold leading-none text-gray-400 ">
                      Project
                    </time>
                  </Link>
                </li>
                <li className="mb-10 ms-4">
                  <div className="absolute w-3 h-3  rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-400"></div>
                  <Link onClick={() => handleClick()} href={"/Pages/Contact"}>
                    <time className="mb-1 text-sm font-bold leading-none text-gray-400 ">
                      Contact
                    </time>
                  </Link>
                </li>
              </ol>
            </div>

            <div className="w-full">
              <ul className="w-full flex justify-between px-6 items-center text-white">
                <li>
                  <div className=" h-7 w-7 rounded-full overflow-hidden border-[1px] border-[#888888] relative">
                    <Image
                      src={"/img/photo2.png"}
                      objectFit="cover"
                      layout="fill"
                      alt="HMIF"
                      className=""
                    />
                  </div>
                </li>
                <li>
                  <div className=" h-7 w-7">
                    <button
                      id="mobile-button"
                      className=" h-full w-full transition-all duration-[0.5s]"
                      onClick={() => handleClick()}
                    >
                      {isFocus ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6 18 18 6M6 6l12 12"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className=" object-fill"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                          />
                        </svg>
                      )}
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!isSmallScreen) {
    return (
      <div className=" sticky top-0 left-0 z-0 w-[24%] h-screen bg-[#31363F] flex flex-col">
        <div className=" w-full h-[35%] bg-[#2E3138] box-border p-5 flex flex-col items-center justify-center gap-12">
          <div className=" flex flex-col items-center gap-3">
            <div className=" rounded-full h-[100px] w-[100px] border-[2px] border-[#1E252D] overflow-hidden relative">
              <Image
                src={"/assets/img/photo2.png"}
                alt="Profile"
                objectFit="cover"
                layout="fill"
              />
            </div>
            <div className="flex flex-col items-center gap-2">
              <h1 className=" font-bold text-white text-2xl">
                Rafli Afriza Nugraha
              </h1>
              <h1 className=" font-semibold text-center text-[#888888] text-sm">
                Web Developer | Frontend Engineer | Blockchain Enthusiast
              </h1>
            </div>
          </div>
          <div className=" w-full flex justify-center items-center gap-7">
            <Link
              href={"https://www.instagram.com/rafliafriza_"}
              target="_blank"
            >
              <Instagram
                color={`${!isHoverInstagram ? "#888888" : "#ffffff"}`}
                onMouseOver={() => setIsHoverInstagram(true)}
                onMouseOut={() => setIsHoverInstagram(false)}
              />
            </Link>
            <Link
              href={"https://www.linkedin.com/in/rafli-afriza-0580382a8/"}
              target="_blank"
            >
              <Linkedin
                color={`${!isHoverEmail ? "#888888" : "#ffffff"}`}
                onMouseOver={() => setIsHoverEmail(true)}
                onMouseOut={() => setIsHoverEmail(false)}
              />
            </Link>
            <Link href={"https://github.com/rafliafriza12"} target="_blank">
              <Github
                color={`${!isHoverGithub ? "#888888" : "#ffffff"}`}
                onMouseOver={() => setIsHoverGithub(true)}
                onMouseOut={() => setIsHoverGithub(false)}
              />
            </Link>
          </div>
        </div>
        <div className="w-full  p-7">
          <ul className="text-right text-white font-semibold flex flex-col gap-5">
            <Link className=" hover:underline" href={"/"}>
              About Me
            </Link>
            <Link className=" hover:underline" href={"/resume"}>
              Resume
            </Link>
            <Link className=" hover:underline" href={"/project"}>
              Project
            </Link>
            <Link className=" hover:underline" href={"/contact"}>
              Contact
            </Link>
          </ul>
        </div>

        {/* Mobile Navbar */}
        <div className=" w-[90%] absolute z-[10] bottom-5 right-5">
          <PlayList />
        </div>
      </div>
    );
  }
};

export default Navbar;

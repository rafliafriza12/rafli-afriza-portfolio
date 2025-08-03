"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import PlayList from "../song/PlayList";
import { Instagram, Linkedin, Github } from "lucide-react";
import { IsDesktop } from "@/hooks"; // Assuming this hook correctly identifies desktop vs. mobile

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [heightTransition, setHeightTransition] = useState<boolean>(false);
  const [widthTransition, setWidthTransition] = useState<boolean>(false);
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
  const [isScrollDown, setIsScrollDown] = useState<boolean>(false);

  // Hover states for social icons (can be simplified if dynamic colors aren't complex)
  const [isHoverInstagram, setIsHoverInstagram] = useState<boolean>(false);
  const [isHoverLinkedin, setIsHoverLinkedin] = useState<boolean>(false); // Renamed from isHoverEmail for clarity
  const [isHoverGithub, setIsHoverGithub] = useState<boolean>(false);

  const isDesktop = IsDesktop(); // Use isDesktop for clarity

  const handleMobileMenuClick = () => {
    // Disable button to prevent rapid clicks during transition
    const mobileButton = document.getElementById(
      "mobile-button"
    ) as HTMLButtonElement;
    if (mobileButton) mobileButton.disabled = true;

    // Trigger height transition
    setHeightTransition(!heightTransition);

    // Trigger width transition after a delay
    setTimeout(() => {
      setWidthTransition(!widthTransition);
    }, 350); // Matches the width transition duration

    // Toggle menu state
    setIsMenuOpen((prev) => !prev);

    // Re-enable button after all transitions complete (adjust delay if needed)
    setTimeout(() => {
      if (mobileButton) mobileButton.disabled = false;
    }, 500); // Should be greater than the longest transition duration
  };

  const handleLinkClick = () => {
    // Close mobile menu when a link is clicked
    if (!isDesktop) {
      handleMobileMenuClick();
    }
  };

  const handleScroll = () => {
    if (!isMenuOpen) {
      // Only track scroll if the mobile menu is not open
      const currentScrollPos: number = window.pageYOffset;
      if (Math.abs(currentScrollPos - prevScrollPos) > 50) {
        // Reduced threshold for more sensitive scroll detection
        setIsScrollDown(currentScrollPos > prevScrollPos);
        setPrevScrollPos(currentScrollPos);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, isMenuOpen]); // Dependency on isMenuOpen ensures correct behavior when menu opens/closes

  return (
    <>
      {/* Mobile Navbar (visible only on small screens) */}
      <div
        className={`
          lg:hidden flex flex-col box-border justify-between items-start rounded-xl duration-[0.3s]
          fixed z-[151] left-1/2 -translate-x-1/2 bg-[#1E252D]/50 py-4 border-[#888888] border-[1.8px] backdrop-blur-[8px]
          ${!isScrollDown ? "bottom-[3%]" : "bottom-[-10%]"}
          ${
            widthTransition
              ? "min-w-[88%] max-w-[88%] sm:min-w-[65%] sm:max-w-[65%]"
              : "min-w-32 max-w-40"
          }
          ${heightTransition ? "min-h-[80%] max-h-[80%]" : "min-h-10 max-h-16"}
          
        `}
      >
        <div className="box-border px-7 h-[90%] w-full overflow-hidden">
          <ol
            className={`relative box-border duration-300 ${
              isMenuOpen ? "opacity-[1]" : "opacity-0 "
            }`}
          >
            <li className="mb-8 ms-4">
              {" "}
              {/* Adjusted margin-bottom */}
              <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-400"></div>
              <Link href={"/"} onClick={handleLinkClick}>
                <time className="mb-1 text-sm font-bold leading-none text-gray-400">
                  About Me
                </time>
              </Link>
            </li>
            <li className="mb-8 ms-4">
              {" "}
              {/* Adjusted margin-bottom */}
              <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-400"></div>
              <Link href={"/resume"} onClick={handleLinkClick}>
                <time className="mb-1 text-sm font-bold leading-none text-gray-400">
                  Resume
                </time>
              </Link>
            </li>
            <li className="mb-8 ms-4">
              {" "}
              {/* Adjusted margin-bottom */}
              <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-400"></div>
              <Link onClick={handleLinkClick} href={"/comment"}>
                <time className="mb-1 text-sm font-bold leading-none text-gray-400">
                  All Comment
                </time>
              </Link>
            </li>
            <li className="mb-8 ms-4">
              {" "}
              {/* Adjusted margin-bottom */}
              <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-400"></div>
              <Link onClick={handleLinkClick} href={"/contact"}>
                <time className="mb-1 text-sm font-bold leading-none text-gray-400">
                  Contact
                </time>
              </Link>
            </li>
          </ol>
        </div>

        <div className="w-full">
          <ul className="w-full flex justify-between px-6 items-center text-white">
            <li>
              <div className="h-7 w-7 rounded-full overflow-hidden border-[1px] border-[#888888] relative">
                <Image
                  src={"/assets/img/photo2.png"}
                  objectFit="cover"
                  layout="fill"
                  alt="Rafli Afriza Nugraha"
                  className=""
                />
              </div>
            </li>
            <li>
              <div className="h-7 w-7">
                <button
                  id="mobile-button"
                  className="h-full w-full transition-all duration-[0.5s]"
                  onClick={handleMobileMenuClick}
                >
                  {isMenuOpen ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="object-fill"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
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

      {/* Desktop Navbar (visible only on large screens) */}
      <div className="hidden lg:sticky lg:top-0 lg:left-0 lg:z-0 lg:w-[24%] lg:h-screen lg:bg-[#31363F] lg:flex lg:flex-col">
        <div className="w-full h-[35%] bg-[#2E3138] box-border p-5 flex flex-col items-center justify-center gap-8 xl:gap-12">
          {" "}
          {/* Adjusted gap for desktop */}
          <div className="flex flex-col items-center gap-3">
            <div className="rounded-full h-[80px] w-[80px] md:h-[100px] md:w-[100px] border-[2px] border-[#1E252D] overflow-hidden relative">
              {" "}
              {/* Adjusted image size for responsiveness */}
              <Image
                src={"/assets/img/photo2.png"}
                alt="Profile"
                objectFit="cover"
                layout="fill"
              />
            </div>
            <div className="flex flex-col items-center gap-1 xl:gap-2">
              {" "}
              {/* Adjusted gap */}
              <h1 className="font-bold text-white text-xl md:text-2xl text-center">
                {" "}
                {/* Adjusted text size */}
                Rafli Afriza Nugraha
              </h1>
              <h1 className="font-semibold text-center text-[#888888] text-sm">
                Software Engineer
              </h1>
            </div>
          </div>
          <div className="w-full flex justify-center items-center gap-5 xl:gap-7">
            {" "}
            {/* Adjusted gap */}
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
                color={`${!isHoverLinkedin ? "#888888" : "#ffffff"}`}
                onMouseOver={() => setIsHoverLinkedin(true)}
                onMouseOut={() => setIsHoverLinkedin(false)}
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
        <div className="w-full p-5 md:p-7">
          {" "}
          {/* Adjusted padding */}
          <ul className="text-right text-white font-semibold flex flex-col gap-4 md:gap-5">
            {" "}
            {/* Adjusted gap */}
            <li>
              <Link
                className="hover:underline text-base md:text-base"
                href={"/"}
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                className="hover:underline text-base md:text-base"
                href={"/resume"}
              >
                Resume
              </Link>
            </li>
            <li>
              <Link
                className="hover:underline text-base md:text-base"
                href={"/comment"}
              >
                All Comment
              </Link>
            </li>
            <li>
              <Link
                className="hover:underline text-base md:text-base"
                href={"/contact"}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="w-[90%] absolute z-[10] bottom-5 right-5">
          <PlayList />
        </div>
      </div>
    </>
  );
};

export default Navbar;

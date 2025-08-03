"use client";
import { AppLayoutProps } from "@/types";
import Navbar from "@/components/navbar/Index";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { IsDesktop } from "@/hooks";
import PlayList from "@/components/song/PlayList";
const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const isDesktop = IsDesktop();

  // if (!isDesktop) {
  //   return (
  //     <div className=" w-screen h-screen relative z-0 bg-[#1E252D] overflow-x-hidden flex flex-col justify-center items-center">
  //       <div className=" w-full px-5 absolute bottom-5">
  //         <PlayList />
  //       </div>
  //       <time className="block mb-2 text-sm font-normal leading-none text-gray-500">
  //         Right now, only for desktop
  //       </time>
  //       <h3 className="mb-1 text-lg font-semibold text-white">
  //         But, you can play my music
  //       </h3>
  //     </div>
  //   );
  // }

  return (
    <div className="flex lg:justify-between w-screen">
      <Navbar />
      <div className="w-full lg:w-[76%] overflow-x-hidden bg-[#1E252D] scrollbar-thumb-rounded-full scrollbar-thin scrollbar-thumb-[#888888] scrollbar-track-[#1E252D]">
        {children}
      </div>
    </div>
  );
};

export default AppLayout;

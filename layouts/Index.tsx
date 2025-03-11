import { AppLayoutProps } from "@/types";
import Navbar from "@/components/navbar/Index";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className="flex justify-between w-screen">
      <Navbar />
      <div className="w-[76%] overflow-x-hidden bg-[#1E252D] scrollbar-thumb-rounded-full scrollbar-thin scrollbar-thumb-[#888888] scrollbar-track-[#1E252D]">
        {children}
      </div>
    </div>
  );
};

export default AppLayout;

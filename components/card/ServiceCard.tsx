import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Star } from "lucide-react";
import { Service, ServiceCardProps } from "@/types";

const ServiceCard: React.FC<ServiceCardProps> = ({ cards }) => {
  return (
    <Swiper
      className="mySwiperPricing"
      slidesPerView={4}
      modules={[Navigation]}
      initialSlide={0}
      spaceBetween={20}
      navigation={true}
    >
      {cards.map((card: Service, i: number) => {
        return (
          <SwiperSlide key={i}>
            <div
              className={`w-full h-[400px] bg-[#2E3138] border-[2px] border-[#3a404a] rounded-lg flex flex-col justify-center items-center gap-10 p-5 text-white relative ${
                i === 0 || i === 1 ? "box" : ""
              }`}
            >
              {(card.package === "MERN Stack" ||
                card.package === "Laravel" ||
                card.package === "IoT Project") && (
                <div className=" flex gap-2 items-center absolute bottom-2 right-2 px-3 py-1 text-xs font-medium leading-none text-center  rounded-md animate-pulse bg-[#a56e21] text-blue-200">
                  <Star size={15} />
                  <h1>Highest Order</h1>
                </div>
              )}
              <div>
                <h1 className=" font-bold text-xl">{card.package}</h1>
                <h1 className=" font-medium text-xs">{card.type}</h1>
              </div>

              <button className=" px-5 py-1 font-bold bg-[#1B5F96] text-base rounded-md">
                Order
              </button>

              <p className=" w-full text-left text-xs text-gray-400">
                {card.description}
              </p>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceCard;

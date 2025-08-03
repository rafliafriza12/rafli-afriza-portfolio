"use client";
import React, { useEffect, useRef, useState } from "react";
import { EffectCards, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

interface Photo {
  url: string;
}
const ProfileCard: React.FC = () => {
  const photos: Photo[] = [
    {
      url: "/assets/img/photo1.JPG",
    },
    {
      url: "/assets/img/photo2.png",
    },
    {
      url: "/assets/img/photo3.JPG",
    },
  ];

  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards, Pagination, Navigation]}
      navigation={true}
      className=" h-[400px] w-[90%] lg:h-[500px] lg:w-[400px] mySwiper"
      initialSlide={1}
      pagination={{ clickable: true }}
    >
      {photos.map((photo: Photo, i: number) => {
        return (
          <SwiperSlide
            key={i}
            className=" border-[1px] shadow-[0px_4px_10px_#888888] border-[#888888]"
          >
            <div className="w-full h-full bg-transparent overflow-hidden relative ">
              <Image
                src={photo.url}
                alt="Photo"
                layout="fill"
                objectFit="cover"
                priority={i === 1}
              />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ProfileCard;

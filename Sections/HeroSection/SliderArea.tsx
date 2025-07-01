"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

import { Autoplay, EffectFade } from "swiper/modules";
import { SliderData } from "@/Utils/Data";

export default function SliderArea() {
  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      effect="fade"
      loop
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      className="z-10 h-full w-full overflow-hidden"
    >
      {SliderData.map((slide, index) => (
        <SwiperSlide key={index}>
          <Image
            src={slide.image}
            alt="Deneme"
            className="object-cover object-center"
            fill
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

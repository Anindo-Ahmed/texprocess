"use client"
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

const News = () => {
  return (
    <div className=" max-h-screen p-20 mt-32 text-neutral-700 bg-[#F6F5ED]">
      <div className=" text-center space-y-5">
        <p className="uppercase">From the Blog</p>
        <h2 className="text-4xl w-[800px] mx-auto text-neutral-600">
          Our Articles
        </h2>
      </div>
      <div className="mt-16 container mx-auto">
        <Swiper
        slidesPerView={3}
        spaceBetween={15}
        centeredSlides={false}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide> 
            <Image src="/assets/images/D1.jpg" alt="one" height={500} width={500} className="hover:scale-105 duration-200"/>
            <h2 className="text-xl mt-5">Innovations in Sustainable Textiles</h2>
            <p className="text-neutral-400 mb-8">September 15, 2021</p>
        </SwiperSlide>
        <SwiperSlide> 
            <Image src="/assets/images/2.jpg" alt="one" height={500} width={500} className="hover:scale-105 duration-200" />
            <h2 className="text-xl mt-5">Innovations in Sustainable Textiles</h2>
            <p className="text-neutral-400 mb-8">September 15, 2021</p>
        </SwiperSlide>
        <SwiperSlide>
            <Image src="/assets/images/3.jpg" alt="one" height={500} width={500} className="hover:scale-105 duration-200" />
            <h2 className="text-xl mt-5">Innovations in Sustainable Textiles</h2>
            <p className="text-neutral-400 mb-8">September 15, 2021</p> 
        </SwiperSlide>
        <SwiperSlide>
            <Image src="/assets/images/4.jpg" alt="one" height={500} width={500} className="hover:scale-105 duration-200" />
            <h2 className="text-xl mt-5">Innovations in Sustainable Textiles</h2>
            <p className="text-neutral-400 mb-8">September 15, 2021</p>
        </SwiperSlide>
        <SwiperSlide> 
            <Image src="/assets/images/5.jpg" alt="one" height={500} width={500} className="hover:scale-105 duration-200" />
            <h2 className="text-xl mt-5">Innovations in Sustainable Textiles</h2>
            <p className="text-neutral-400 mb-8">September 15, 2021</p>
        </SwiperSlide>
        
      </Swiper>
      </div>
      
    </div>
  );
};

export default News;

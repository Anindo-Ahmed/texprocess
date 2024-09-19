"use client";
import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";

const animation = { duration: 15000, easing: (t) => t };

const Clients = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    slides: {
      perView: 5,
      spacing: 5,
    },
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });
  return (
    <div className="mt-32 text-neutral-400 max-h-screen">
        <div className=" text-center space-y-5">
        
        <h2 className="text-4xl text-neutral-600">
          Our Clients
        </h2>
      </div>
      <div ref={sliderRef} className="keen-slider mt-20">
        <div className="keen-slider__slide number-slide1">
          <Image
            src="/assets/images/gap.jpg"
            alt="one"
            height={200}
            width={200}
            className="hover:scale-105 duration-200"
          />
        </div>
        <div className="keen-slider__slide number-slide2">
          <Image
            src="/assets/images/HM.jpg"
            alt="one"
            height={200}
            width={200}
            className="hover:scale-105 duration-200"
          />
        </div>
        <div className="keen-slider__slide number-slide3">
          <Image
            src="/assets/images/jcpanney.png"
            alt="one"
            height={200}
            width={200}
            className="hover:scale-105 duration-200"
          />
        </div>
        <div className="keen-slider__slide number-slide4">
          <Image
            src="/assets/images/levis.png"
            alt="one"
            height={200}
            width={200}
            className="hover:scale-105 duration-200"
          />
        </div>
        <div className="keen-slider__slide number-slide5">
          <Image
            src="/assets/images/adidas.jpg"
            alt="one"
            height={200}
            width={200}
            className="hover:scale-105 duration-200"
          />
        </div>
        <div className="keen-slider__slide number-slide6">
          <Image
            src="/assets/images/c&A.png"
            alt="one"
            height={200}
            width={200}
            className="hover:scale-105 duration-200"
          />
        </div>
        <div className="keen-slider__slide number-slide6">
          <Image
            src="/assets/images/puma.jpg"
            alt="one"
            height={200}
            width={200}
            className="hover:scale-105 duration-200"
          />
        </div>
        <div className="keen-slider__slide number-slide6">
          <Image
            src="/assets/images/nike.jpg"
            alt="one"
            height={200}
            width={200}
            className="hover:scale-105 duration-200"
          />
        </div>
      </div>
    </div>
  );
};

export default Clients;

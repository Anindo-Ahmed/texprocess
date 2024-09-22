"use client";
import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const Testimonial = () => {
  const reviews = [
    {
      review:
        "The quality of the fabrics we received from this company was exceptional. We've been in the textile business for years, and their products exceeded our expectations in both durability and design. Highly recommended!",
      authorImage:
        "https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      authorName: "John Doe",
    },
    {
      review:
        "I was impressed with the timely delivery and the premium feel of the textiles. The customer service team was also very responsive, ensuring that all our requirements were met. We'll definitely be ordering from them again!",
      authorImage:
        "https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      authorName: "Jane Smith",
    },
    {
      review:
        "From the first touch, you can feel the attention to detail in every fabric. The colors are vibrant, and the materials are soft yet strong. Our clients love the textiles we source from here. Truly a game-changer in the industry!",
      authorImage: "https://example.com/images/author3.jpg",
      authorName: "Michael Johnson",
    },
  ];

  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 6000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <div className="container mx-auto px-6 py-20">
      <h1 class="text-2xl font-semibold text-center capitalize lg:text-3xl text-neutral-600">
            What clients saying
        </h1>
      <div ref={sliderRef} className="keen-slider max-h-screen text-black mt-14">
      <div className="keen-slider__slide number-slide1">
        <div className="">
          <p class="flex items-center text-center text-gray-500 lg:w-1/3 mx-auto">
            The quality of the fabrics we received from this company was
            exceptional. We've been in the textile business for years, and their
            products exceeded our expectations in both durability and design.
            Highly recommended!
          </p>

          <div class="flex flex-col items-center justify-center mt-8">
            <img
              class="object-cover rounded-full w-14 h-14"
              src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
            />

            <div class="mt-4 text-center">
              <h1 class="font-semibold text-gray-500">Mia Brown</h1>
              <span class="text-sm text-gray-500">Marketer</span>
            </div>
          </div>
        </div>
      </div>
      <div className="keen-slider__slide number-slide1">
        <div>
          <p class="flex items-center text-center text-gray-500 lg:w-1/3 mx-auto">
          I was impressed with the timely delivery and the premium feel of the textiles. The customer service team was also very responsive, ensuring that all our requirements were met. We'll definitely be ordering from them again!
          </p>

          <div class="flex flex-col items-center justify-center mt-8">
            <img
              class="object-cover rounded-full w-14 h-14"
              src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
            />

            <div class="mt-4 text-center">
              <h1 class="font-semibold text-gray-500">Mia Brown</h1>
              <span class="text-sm text-gray-500">Marketer</span>
            </div>
          </div>
        </div>
      </div>
      <div className="keen-slider__slide number-slide1">
        <div>
          <p class="flex items-center text-center text-gray-500 lg:w-1/3 mx-auto">
          From the first touch, you can feel the attention to detail in every fabric. The colors are vibrant, and the materials are soft yet strong. Our clients love the textiles we source from here. Truly a game-changer in the industry!
          </p>

          <div class="flex flex-col items-center justify-center mt-8">
            <img
              class="object-cover rounded-full w-14 h-14"
              src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
            />

            <div class="mt-4 text-center">
              <h1 class="font-semibold text-gray-500">Mia Brown</h1>
              <span class="text-sm text-gray-500">Marketer</span>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    </div>
  );
};

export default Testimonial;

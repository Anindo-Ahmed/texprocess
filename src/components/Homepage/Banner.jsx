import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banner = () => {
  const banners = [
    {
      title: "Premium Quality Fabrics for All Needs",
      description:
        "Our textile industry delivers premium fabrics for apparel, home decor, and industrial use, combining tradition with innovation to meet global standards of quality and durability.",
      next: "#slide2",
      prev: "#slide5",
    },
    {
      title: "Sustainable Textiles, Crafted with Care",
      description:
        "We produce eco-friendly textiles using sustainable materials and processes, offering a wide range of ethically made fabrics without compromising quality or comfort.",
      next: "#slide3",
      prev: "#slide1",
    },
    {
      title: "Innovative Solutions for Textile Manufacturing",
      description:
        "Specializing in cutting-edge textile solutions, we offer advanced fabric technologies that enhance performance, durability, and style for a variety of industries.",
      next: "#slide4",
      prev: "#slide2",
    },
    {
      title: "Custom Fabric Designs Tailored for You",
      description:
        "We provide custom textile designs to suit your unique needs, ensuring a perfect blend of aesthetics and functionality for your specific projects and creative ideas.",
      next: "#slide5",
      prev: "#slide3",
    },
    {
      title: "Global Leader in Textile Production",
      description:
        "With a legacy of excellence, we serve industries worldwide, providing versatile, high-quality fabrics that meet the demands of modern markets and global consumers.",
      next: "#slide1",
      prev: "#slide4",
    },
  ];

  return (
    <div className="">
      <div className="carousel w-full ">
        {banners.map((banner, index) => (
          <div
          style={{
            backgroundImage: `linear-gradient(90deg, #000 0%, rgba(21, 21, 21, 0.00) 100%), url(/assets/images/${index+1}.jpg)`,
          }}
          key={index}
          id={`slide${index+1}`} 
          className="carousel-item relative w-full h-[100vh] bg-no-repeat bg-cover">
            <div className="flex flex-col justify-center px-32 space-y-6">
              <h1 className="text-6xl w-[630px] leading-tight">{banner.title}</h1>
              <p className="w-1/2">{banner.description}</p>
              <Link href={"#"}> <button className="btn btn-outline text-base bg-black text-white px-10 py-3 rounded-sm hover:text-black hover:bg-white duration-500">See More</button></Link>
            </div> 
            <div className="absolute bottom-12 flex right-12 gap-4 transform justify-center">
              <a href={banner.prev} className="btn btn-circle">
                ❮
              </a>
              <a href={banner.next} className="btn btn-circle bg-black text-white hover:text-black">
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;

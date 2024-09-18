"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import SlideOne from "../../../../public/Img/GammaVideo.png";
import Image from "next/image";
function GammaSlider() {
  const settings = {
    pauseOnHover: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    
    
    speed: 2500,
    
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: true,
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,

          initialSlide: 2,

          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div
      className="slider-container        content-center    w-[100%] m-auto  overflow-hidden
              "
    >
      <Slider {...settings}>
        <div style={{ width: 100, margin: "auto" }}>
          <Image
            className=" w-[230px] sm:w-[220px] md:w-[250px] xl:w-[400px]   rounded-xl"
            alt="fasd"
            src={SlideOne}
          />
        </div>
        <div>
          <Image
            className=" w-[230px]  sm:w-[220px] md:w-[250px] xl:w-[400px] rounded-xl"
            alt="fasd"
            src={SlideOne}
          />
        </div>
        <div>
          <Image
            className=" w-[230px]  sm:w-[220px] md:w-[250px] xl:w-[400px]  rounded-xl"
            alt="fasd"
            src={SlideOne}
          />
        </div>
        <div>
          <Image
            className="w-[230px]    sm:w-[220px]  md:w-[250px] xl:w-[400px] rounded-xl"
            alt="fasd"
            src={SlideOne}
          />
        </div>
      </Slider>
    </div>
  );
}

export default GammaSlider;

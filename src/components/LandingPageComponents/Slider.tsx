"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import SlideOne from "../../../public/Img/Slider/1.png";
import SlideTwo from "../../../public/Img/Slider/2.png";
import SlideThree from "../../../public/Img/Slider/3.png";
import SlideFour from "../../../public/Img/Slider/4.png";
import SlideFive from "../../../public/Img/Slider/5.png";
import SlideSix from "../../../public/Img/Slider/6.png";
import Image from "next/image";
function AutoPlay() {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    // slidesToScroll: 1,
    autoplay: true,
    speed: 2500,
    autoplaySpeed: 2500,
    cssEase: "linear",
  };
  return (
    <div
      className="slider-container  -z-10   h-[140px]   content-center  overflow-hidden 
            bg-gradient-Block "
    >
      <Slider {...settings}>
       
        <div>
          <Image alt="fasd" src={SlideOne} />
        </div>
        <div>
          <Image alt="fasd" src={SlideTwo} />
        </div>
        <div>
          <Image alt="fasd" src={SlideThree} />
        </div>
        <div>
          <Image alt="fasd" src={SlideFour} />
        </div>
        <div>
          <Image alt="fasd" src={SlideFive} />
        </div>
        <div>
          <Image alt="fasd" src={SlideSix} />
        </div>
      </Slider>
    </div>
  );
}

export default AutoPlay;

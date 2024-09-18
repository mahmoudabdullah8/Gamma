"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";

import SlideThree from "../../../public/Img/Slider/3.png";
import SlideFour from "../../../public/Img/SliderImg.png";

import styles from "./SliderHouse.module.css";
import LoginIcon from "../../../public/Icons/Vector.svg";
import Link from "next/link";
import { useTranslations } from "next-intl";
import ArrowGreenR from "../../../public/Icons/ArrowGreenR";
import ArrowGreenL from "../../../public/Icons/ArrowGreenL";

// Custom Arrow Components
function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className={`  absolute  bottom-[13px] sm:bottom-[17px]  text-[15px] z-50 left-[62%]  sm:left-[55%] cursor-pointer`}
      onClick={onClick}
    >
      <ArrowGreenR />
    </div>
  );
}

function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className={`  absolute    bottom-[13px] sm:bottom-[17px]  text-[15px] z-50 left-[34%]  sm:left-[44%] cursor-pointer`}
      onClick={onClick}
    >
      <ArrowGreenL />
    </div>
  );
}

function SliderHouse() {
  const [currentSlide, setCurrentSlide] = useState(1); // Track current slide
  const t = useTranslations("HomePage");
  const settings = {
    arrows: true,
    nextArrow: <NextArrow />, // Custom Next Arrow
    prevArrow: <PrevArrow />, // Custom Previous Arrow
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    speed: 1500,
    autoplaySpeed: 2500,
    cssEase: "ease",
    afterChange: (index: any) => setCurrentSlide(index + 1), // Update the current slide
  };

  const totalSlides = 3; // Total number of slides

  return (
    <div className=" slider-container  content-center overflow-hidden bg-SliderBackground relative">
      <Slider {...settings} className=" h-[450px] ">
        <div className="testimonial-slide -z-30 mx-4">
          <div className=" testimonial-card grid grid-cols-2 justify-around items-center  justify-items-center">
            <Image alt="Slide 3" src={SlideFour} />
            <div>
              <p className=" text-[16px] w-8/12">
                وريم إيبسوم طريقة لكتابة النصوص في النشر والتصميم الجرافيكي
                تستخدم بشكل شائع .
              </p>
              <button className="hover:shadow-lg hover:bg-[#2C2C2C] md:w-[110px] lg:w-[140px] h-[45px] gap-2 text-[14px] font-bold rounded-[16px] bg-black text-white flex flex-row justify-center items-center p-2">
                adnan
              </button>
            </div>
          </div>
        </div>
        <div className="testimonial-slide -z-30">
          <div className=" testimonial-card grid grid-cols-2 justify-center items-center  justify-items-center">
            <Image alt="Slide 3" src={SlideThree} />
            fdsaf
          </div>
        </div>{" "}
        <div className="testimonial-slide -z-30">
          <div className=" testimonial-card grid grid-cols-2 justify-center items-center  justify-items-center">
            <Image alt="Slide 3" src={SlideThree} />
            fdsaf
          </div>
        </div>
      </Slider>

      {/* Arrows and Slide Number */}
      <div className={styles.controlContainer}>
        <span className={styles.slideNumber}>
          {String(currentSlide).padStart(2, "0")} /{" "}
          {String(totalSlides).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}

export default SliderHouse;

"use client";

import Person from "../../../public/Img/Person.png";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { CSSProperties } from "react";
import ArrowWhite from "../../../public/Icons/ArrowWhite";
import ArrowWhiteR from "../../../public/Icons/ArrowWhiteR";
import { useTranslations } from "next-intl";

// Custom Arrow Components
function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className={`  text-[25px] absolute -top-14 sm:-top-10 rtl:left-10 ltr:right-0 text-white`}
      onClick={onClick}
    >
      <ArrowWhiteR />
    </div>
  );
}

function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className={` text-[25px] absolute -top-14 sm:-top-10 rtl:left-2 ltr:right-10 text-white`}
      onClick={onClick}
    >
      <ArrowWhite />
    </div>
  );
}
const TestimonialsCarousel = () => {
  const t = useTranslations("HomePage")
  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 4,
    nextArrow: <NextArrow />, // Custom Next Arrow
    prevArrow: <PrevArrow />, // Custom Previous Arrow
    slidesToScroll: 1,
    autoplay: false,
    speed: 1000,
    autoplaySpeed: 2500,
    cssEase: "ease",
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      // style={{ padding: "30px 80px  30px 0" }}
      className=" overflow-hidden bg-gradient-Primary py-[30px] pr-4 sm:pr-[40px] md:pr-[80px]"
    >
      <div
        className="
          text-white
           
           text-wrap
          rtl:right-3  ltr:left-3 relative mb-[20px] 
          before:-top-[5px] sm:before:-top-[11px]   rtl:before:rtl:left-[8px]   ltr:before:ltr:right-[8px] 
          ltr:before:right-[8px]   before:relative before:inline-block 
          before:h-[1px] before:w-[38px]  before:border-[1.5px]
          before:border-white text-[13px] rtl:sm:text-[16px] rtl:md:text-[22px] ltr:sm:text-[16px] ltr:md:text-[20px]  font-bold"
      >
        {t("join")}
      </div>
      <Slider {...settings}>
        {/* Each slide */}
        <div
          className="testimonial-slide"
          style={styles.slideContainer as CSSProperties}
        >
          <div
            className="testimonial-card  h-[268px]  flex flex-col  items-end  "
            style={styles.card as CSSProperties}
          >
            <div className="  block w-[45px] h-[1px] border-[1px] my-2 border-Primary"></div>
            <p style={styles.text as CSSProperties}>
              لوريم إيبسوم طريقة لكتابة النصوص في النشر والتصميم الجرافيكي
              تستخدم بشكل شائع لتوضيح الشكل المرئي للمستند أو الخط دون الاعتماد
              على محتوى ذي معنى. يمكن استخدام لوريم إيبسوم قبل نشر النسخة
              النهائية.{" "}
            </p>
            <div style={styles.profile as CSSProperties}>
              <Image
                src={Person} // Replace with your image path
                alt="Profile Image"
                width={40}
                height={40}
                style={styles.profileImg as CSSProperties}
              />
              <div>
                <p className=" text-[16px] font-semibold">محمد  ابراهيم</p>
                <p style={styles.jobTitle as CSSProperties}>رجل أعمال</p>
              </div>
            </div>
          </div>
        </div>
        {/* Each slide */}
        <div
          className="testimonial-slide"
          style={styles.slideContainer as CSSProperties}
        >
          <div
            className="testimonial-card  h-[268px]  flex flex-col  items-end  "
            style={styles.card as CSSProperties}
          >
            <div className="  block w-[45px] h-[1px] border-[1px] my-2 border-Primary"></div>
            <p style={styles.text as CSSProperties}>
              لوريم إيبسوم طريقة لكتابة النصوص في النشر والتصميم الجرافيكي
              تستخدم بشكل شائع لتوضيح الشكل المرئي للمستند أو الخط دون الاعتماد
              على محتوى ذي معنى. يمكن استخدام لوريم إيبسوم قبل نشر النسخة
              النهائية.{" "}
            </p>
            <div style={styles.profile as CSSProperties}>
              <Image
                src={Person} // Replace with your image path
                alt="Profile Image"
                width={40}
                height={40}
                style={styles.profileImg as CSSProperties}
              />
              <div>
              <p className=" text-[16px] font-semibold">محمد  ابراهيم</p>
                <p style={styles.jobTitle as CSSProperties}>رجل أعمال</p>
              </div>
            </div>
          </div>
        </div>
        {/* Each slide */}
        <div
          className="testimonial-slide"
          style={styles.slideContainer as CSSProperties}
        >
          <div
            className="testimonial-card  h-[268px]  flex flex-col  items-end  "
            style={styles.card as CSSProperties}
          >
            <div className="  block w-[45px] h-[1px] border-[1px] my-2 border-Primary"></div>
            <p style={styles.text as CSSProperties}>
              لوريم إيبسوم طريقة لكتابة النصوص في النشر والتصميم الجرافيكي
              تستخدم بشكل شائع لتوضيح الشكل المرئي للمستند أو الخط دون الاعتماد
              على محتوى ذي معنى. يمكن استخدام لوريم إيبسوم قبل نشر النسخة
              النهائية.{" "}
            </p>
            <div style={styles.profile as CSSProperties}>
              <Image
                src={Person} // Replace with your image path
                alt="Profile Image"
                width={40}
                height={40}
                style={styles.profileImg as CSSProperties}
              />
              <div>
              <p className=" text-[16px] font-semibold">محمد  ابراهيم</p>
                <p style={styles.jobTitle as CSSProperties}>رجل أعمال</p>
              </div>
            </div>
          </div>
        </div>
        {/* Each slide */}
        <div
          className="testimonial-slide"
          style={styles.slideContainer as CSSProperties}
        >
          <div
            className="testimonial-card  h-[268px]  flex flex-col  items-end  "
            style={styles.card as CSSProperties}
          >
            <div className="  block w-[45px] h-[1px] border-[1px] my-2 border-Primary"></div>
            <p style={styles.text as CSSProperties}>
              لوريم إيبسوم طريقة لكتابة النصوص في النشر والتصميم الجرافيكي
              تستخدم بشكل شائع لتوضيح الشكل المرئي للمستند أو الخط دون الاعتماد
              على محتوى ذي معنى. يمكن استخدام لوريم إيبسوم قبل نشر النسخة
              النهائية.{" "}
            </p>
            <div style={styles.profile as CSSProperties}>
              <Image
                src={Person} // Replace with your image path
                alt="Profile Image"
                width={40}
                height={40}
                style={styles.profileImg as CSSProperties}
              />
              <div>
              <p className=" text-[16px] font-semibold">محمد  ابراهيم</p>
                <p style={styles.jobTitle as CSSProperties}>رجل أعمال</p>
              </div>
            </div>
          </div>
        </div>

        {/* Repeat slides */}
        {/* Add more testimonial-slide containers as needed */}
      </Slider>
    </div>
  );
};

// Styles object
const styles: { [key: string]: CSSProperties } = {
  slideContainer: {
    padding: "0 10px", // Add padding around each slide to create spacing between them
  },
  card: {
    backgroundColor: "white",
    borderRadius: "10px",
    padding: "20px",
    textAlign: "right",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    margin: "10px",
  },
  text: {
    marginBottom: "20px",
    fontSize: "12px",
    color: "#6E6E6E",
  },
  profile: {
    display: "flex",
    alignItems: "end",
    flexDirection: "column",
  },
  profileImg: {
    borderRadius: "50%",
    marginRight: "10px",
  },
  jobTitle: {
    fontSize: "12px",
    color: "#888",
  },
};

export default TestimonialsCarousel;

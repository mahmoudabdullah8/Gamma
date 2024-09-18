import LandingNavBar from "@/components/LandingPageComponents/NavBar/LandingNavBar";
import React from "react";
import "../../../app/style.css";
import HeroSection from "@/components/LandingPageComponents/HeroSection";
import Image from "next/image";
import BackgroundImage from "../../../../public/Img/Frame 1.png";
import Slider from "@/components/LandingPageComponents/Slider";
import AboutGamma from "@/components/LandingPageComponents/AboutGamma";
import GammaGrid from "@/components/LandingPageComponents/GammaGrid";
import Indicators from "@/components/LandingPageComponents/Indicators";
import SliderHouse from "@/components/LandingPageComponents/SliderHouse";
import OptionsGroup from "@/components/LandingPageComponents/OptionsGroup";
import MakeMoney from "@/components/LandingPageComponents/MakeMoney";
import GetAsset from "@/components/LandingPageComponents/GetAsset";
import JoinSlider from "@/components/LandingPageComponents/JoinSlider";
import GammaVideos from "@/components/LandingPageComponents/GammaVideos/GammaVideos";
import StayContact from "@/components/LandingPageComponents/StayContact";
import Footer from "@/components/LandingPageComponents/Footer";
import Contactus from "@/components/LandingPageComponents/ContactUs/Contactus";

const LandingPage = () => {

  return (
    <div className=" overflow-hidden       bg-no-repeat  flex flex-col gap-6   ">
      <Image
        className=" absolute -z-50  

       
          custom:h-[570px] 
           xl:w-[970px] xl:h-[600px]
           lg:w-[700px]  lg:h-[600px]
           md:w-[100%] md:h-[600px]
           fd:w-[750px] fd:h-[590px]
          h-[550px]
           sm:h-[500px]
           xs:h-[520px]
          
          "
        src={BackgroundImage}
        alt="No image available"
        loading="lazy"
      />
      <LandingNavBar />
      <HeroSection />
      <Slider />
      <AboutGamma />
      <GammaGrid />
      <Indicators />
      <SliderHouse />
      <OptionsGroup />
      <MakeMoney />
      <GetAsset />
      <JoinSlider />
      {/* <GammaVideos /> */}
      <Contactus />
      <StayContact />
      <Footer />
    </div>
  );
};

export default LandingPage;

import React from "react";
import Image from "next/image";
import HeroImage from "@/public/hero/hero-bg.jpg";
import { HeroStackImage } from "@/utils/hero/Hero";

const Hero = () => {
  return (
    <>
      <div className="hero-bg bg-black w-full relative">
        <Image src={HeroImage} alt="Hero Image" fill className="object-cover" />
        {/* content */}
        <div className="w-full box-border h-full flex flex-col items-center justify-center bg-[#00000084] absolute backdrop-blur-[4px]">
          {/* main title */}
          <div className="text-center text-[4rem] leading-[70px]">
            Find Stickers & Artworks <br />{" "}
            <span className="font-bold hero-title-point bg-clip-text text-transparent">
              On YoYo Store!
            </span>
          </div>
          {/* caption node */}
          <div className="text-[1.4rem] mt-[24px] px-[24px] py-[6px] rounded-full bg-white text-black">100+ Artworks Ready For You!</div>

          {/* IMAGE STACK */}
          <div className="flex items-center gap-[20px] mt-[40px]">
          {HeroStackImage.map((data, index)=>(
            <div key={index} className="relative w-[180px] h-[180px] rounded-[24px]">
                <Image src={data.URL} alt={data.Name} fill className="object-cover rounded-[24px]"/>
            </div>
          ))}
          </div>

        </div>
      </div>
    </>
  );
};

export default Hero;

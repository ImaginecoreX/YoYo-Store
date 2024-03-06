import React from "react";
import { Rammetto_One } from "next/font/google";
import HomeIcon from "@/public/navbar/home.svg";
import Image from "next/image";

const rammetto = Rammetto_One({ weight: ["400"], subsets: ["latin"] });

const Navbar = () => {
  return (
    <div className="w-full h-[100px] border-y-[2px] border-b-[3px] border-black flex items-center justify-between box-border pl-[40px]">
      {/* left block */}
      <div className="flex items-center gap-[50px]">
        <div className={`${rammetto.className} text-[3rem] text-black`}>
          YoYo
        </div>
        <div className="flex items-center gap-[40px]">
          {/* home link */}
          <div className="w-[50px] h-[50px] relative">
            <div>
              <Image src={HomeIcon} alt="HomeIcon" className="object-contain" />
            </div>
          </div>
          {/* page links */}
          <div className="flex items-center text-[2rem] gap-[50px] text-black">
          <div>Products</div>
          <div>Customize</div>
          <div>About</div>
          </div>
        </div>
      </div>
      {/* left block end */}


      {/* right block */}
      <div className="flex text-black text-[2rem] h-full sm:hidden xl:block">
        <button className="px-[36px] hover:bg-black hover:text-white transform transition-transform duration-500 hover:scale-105 h-full text-center border-r-[2px] border-l-[4px] border-black ">Contact Us</button>
        <button className="px-[36px] hover:bg-black hover:text-white transform transition-transform duration-500 hover:scale-105 h-full text-center border-x-[2px] border-black bg-[#57FF49]">Buy Now!</button>
      </div>
      {/* right block end */}
    </div>
  );
};

export default Navbar;

import React from "react";
import ProductCard from "./ProductCard";

const PersonalizedProducts = () => {
  return (
    <div className="min-h-[400px]  w-full flex ">
      {/* BLOCK 1 -------------------------->> */}
      <div className="w-2/5 bg-black ">
        <div className="text-white w-[60%] text-[3rem]">We Deliver Top Quality
Personalized Products
To Your Home</div>
      </div>
      {/* BLOCK 1 -------------------------->> */}

      {/* BLOCK 2 -------------------------->> */}
      <div className=" box-border p-[20px]">
        <ProductCard/>
      </div>
      {/* BLOCK 2 -------------------------->> */}
    </div>
  );
};

export default PersonalizedProducts;

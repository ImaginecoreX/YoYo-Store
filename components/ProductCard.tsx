import Image from 'next/image'
import React from 'react'

const ProductCard = () => {
  return (
    <div className='text-black w-[400px] min-h-[600px] border-[2px] flex flex-col items-center border-black rounded-[24px]'>
        {/* image */}
        <div className='w-full h-[500px] bg-black rounded-[22px] border-[2px] border-b-[4px] border-black relative'>
          <Image src={'/hero/hero-bg.jpg'} alt='Product Image' fill className='rounded-[24px] object-cover'/>
        </div> 
        {/* content */}
        <div className='text-black w-full flex flex-col box-border p-[20px]'>
            {/* title */}
            <div className='text-[1.25rem]'>Head Set - Black</div>
            {/* price */}
            <div className='text-[1.5rem] mt-[2px] font-bold'>LKR 3,499.00</div>
            {/* shop */}
            <div className='text-[1.2rem] mt-[12px] bg-white text-black border-[2px] py-[6px] text-center border-black rounded-full'>Shop Now</div>
        </div>
    </div>
  )
}

export default ProductCard
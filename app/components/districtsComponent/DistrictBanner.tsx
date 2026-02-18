import React from 'react';
import { LuArrowRight, LuBarcode } from 'react-icons/lu';

import { LuZap, LuBox,  LuCircle } from 'react-icons/lu';
import MyContainer from '../share/MyContainer';
import FloatingElement from './FloatingElement';
import Image from 'next/image';

const DistrictBanner = () => {
  return (
    <section className="relative w-full bg-[#1D3B31] ">
      <MyContainer className=" flex flex-col lg:flex-row items-center gap-12">
        
        {/* Text Content */}
        <div className="flex-1 z-10 text-center lg:text-left">
          <h1 className="text-5xl lg:text-7xl font-bold text-white leading-[1.1] mb-8 tracking-tight">
            The essential platform to streamline all of your education needs.
          </h1>
          
          <p className="text-xl text-white/90 leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0">
            The all-in-one Pear Deck Learning platform helps schools and districts 
            improve student achievement, simplify workloads, and support differentiated learning.
          </p>

          <button className="inline-flex items-center gap-2 px-8 py-4 bg-[#C6F332] text-[#1D3B31] font-bold rounded-full border-2 border-[#C6F332] hover:bg-transparent hover:text-[#C6F332] transition-all duration-300">
            Request a demo
            <LuArrowRight strokeWidth={3} />
          </button>
        </div>

        {/* Visual Composition */}
        <div className="flex-1 relative w-full max-w-125 aspect-square lg:aspect-auto">
          {/* Main Masked Image Container */}
          <div className="relative w-full aspect-square rounded-full bg-[#1F8E5F] overflow-hidden flex items-end justify-center">
            {/* Senior Note: In production, use next/image or a responsive <img> tag. 
                The image should be a transparent PNG of the student.
            */}
            <Image
            fill
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800" 
              alt="Excited student" 
              className="w-[85%] h-auto z-10 translate-y-4"
            />
          </div>

          {/* Floating Decorative Elements */}
          <FloatingElement className="top-0 left-0 bg-[#F4A523] rotate-[-15deg]">
            <LuBox className="text-white" />
          </FloatingElement>

          <FloatingElement className="top-10 right-0 bg-[#FFFFFF] rotate-[10deg] p-4 border-4 border-white">
            <LuBarcode className="text-[#1F8E5F] scale-125" />
          </FloatingElement>

          <FloatingElement className="bottom-10 left-4 bg-[#C6F332] rotate-[5deg] p-5">
            <LuCircle className="text-[#1D3B31] fill-current" />
          </FloatingElement>

          <FloatingElement className="bottom-20 right-4 bg-[#638FFF] rotate-[-10deg] p-4">
            <LuZap className="text-white fill-current" />
          </FloatingElement>
        </div>
      </MyContainer>
    </section>
  );
};



export default DistrictBanner;
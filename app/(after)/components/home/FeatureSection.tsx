import Image from 'next/image';
import React from 'react';
import MyContainer from '../share/MyContainer';
import Link from 'next/link';

export default function FeatureSection() {
  return (
    <section className="bg-[#fdfcf5] py-20 px-6">
      <MyContainer className="flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Side: Illustration Area */}
        <div className="lg:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md aspect-square">
       
            <Image
            width={500}
            height={500}
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" 
              alt="Education and collaboration concept" 
              className="w-full h-full object-cover rounded-3xl shadow-lg"
            />
            
            {/* Subtle decorative element to mimic the circular brand style */}
            <div className="absolute -inset-4 border-2 border-dashed border-[#bef264] rounded-full -z-10 animate-spin-slow"></div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="lg:w-1/2 text-[#0f172a]">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            The complete package for every classroom
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
           Next Gen Learning&rsquo;s all-in-one platform gives teachers the 
            time-saving support they need to create lessons students love, 
            deliver differentiated support for every learner, and assess 
            progress whenever it&rsquo;s needed.
          </p>
          <Link href={'/booking'} className="bg-[#bef264] text-black font-bold px-8 py-3 rounded-full border border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none transition-all">
            Request a demo
          </Link>
        </div>
      </MyContainer>
    </section>
  );
}
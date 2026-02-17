import Image from 'next/image';
import React from 'react';
import MyContainer from '../share/MyContainer';

export default function EducatorHero() {
  return (
    <section className="relative overflow-hidden bg-[#0F172A] px-6 py-16 md:px-12 lg:px-24 lg:py-24">
      <MyContainer >
        <div className="grid items-center gap-12 lg:grid-cols-2">
          
          {/* Left Content */}
          <div className="z-10 max-w-2xl">
            <h1 className="mb-6 text-5xl font-bold leading-tight text-white md:text-6xl">
              More to work with, not more work.
            </h1>
            <p className="mb-10 text-lg leading-relaxed text-slate-300">
              Next Gen Learning is the only platform that supports teachers 
              across the entire instructional workflow for any topic. Thanks to 
              AI-powered features that go beyond just saving time, you get 
              tools that actually boost impact, all in one platform.
            </p>
            <button className="rounded-full bg-[#D4F446] px-8 py-3 text-lg font-bold text-black transition-transform hover:scale-105">
              Sign up for free
            </button>
          </div>

          {/* Right Imagery */}
          <div className="relative flex justify-center lg:justify-end">
            {/* The Main Image Container with Custom Shape (using clip-path or rounded-blob) */}
            <div className="relative h-[400px] w-[400px] overflow-hidden rounded-[80px_20px_100px_40px] md:h-[500px] md:w-[500px]">
              <Image
              fill
                 src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800" 
                alt="Teacher interacting with students" 
                className="h-full w-full object-cover"
              />
            </div>

            {/* Background Decorative "C" Shape */}
            <div className="absolute -bottom-12 -right-12 -z-0">
               <svg width="300" height="300" viewBox="0 0 200 200" className="opacity-80">
                  <path 
                    fill="#38BDF8" 
                    d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0" 
                    stroke="#38BDF8" 
                    strokeWidth="40" 
                    fillOpacity="0.2"
                    className="fill-none"
                    strokeDasharray="350 150"
                  />
               </svg>
            </div>
            
            {/* Small decorative Spark/Star */}
            <div className="absolute right-10 top-20 text-[#D4F446]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
              </svg>
            </div>
          </div>

        </div>
      </MyContainer>
    </section>
  );
}
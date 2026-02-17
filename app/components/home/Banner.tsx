import React from 'react';
import MyContainer from '../share/MyContainer';
import Link from 'next/link';

export default function Banner() {
  return (
    <div className="bg-[#0f3d2e] py-16 md:py-24 overflow-hidden">
      <MyContainer>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="text-white max-w-xl">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              The only platform that supports{' '}
              <span className="text-[#d9f99d] underline decoration-2 underline-offset-4">every</span> instructional step in{' '}
              <span className="text-[#d9f99d] underline decoration-2 underline-offset-4">any</span> topic.
            </h1>
            
            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
              From lesson planning to state testing, we&lsquo;re here to help teachers. 
              Only Next Gen Learning&lsquo;s super streamlined platform lets you develop 
              and deliver engaging lessons, differentiated learning, and 
              meaningful assessments — all in one place.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/products" className="bg-[#d9f99d] text-black px-8 py-3 rounded-full font-bold hover:bg-[#bef264] transition-colors">
                Explore products
              </Link>
              <Link href="/signup" className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition-colors">
                Sign up for free
              </Link>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative">
            {/* Decorative Background Blob */}
            <div className="absolute -inset-4 bg-[#103a2b] rounded-full blur-3xl opacity-50 -z-10"></div>
            
            {/* Tilted Image Container */}
            <div className="relative transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="bg-white p-3 rounded-2xl shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800" 
                  alt="Teacher with students" 
                  className="rounded-xl w-full h-auto object-cover"
                />
              </div>
              
              {/* Accents (Yellow corner & Stars) */}
              <div className="absolute -bottom-4 -right-2 bg-[#facc15] w-12 h-12 rounded-tr-[40px] z-10"></div>
              <div className="absolute -top-6 -left-4 text-[#1a533f] text-4xl">✦</div>
            </div>
          </div>

        </div>
      </MyContainer>
    </div>
  );
}
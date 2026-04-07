import React from 'react';
import Image from 'next/image';
import { FaVideo, FaChalkboardTeacher, FaChartLine, FaStar, FaGoogle, FaAmazon, FaCheckCircle } from 'react-icons/fa';
import { SiYcombinator } from 'react-icons/si';
import MyContainer from '@/app/(after)/components/share/MyContainer';


export default function Hero() {
  return (
    <section className="relative w-full bg-green-100/50 py-12 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Subtle Background Decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-emerald-50 rounded-full blur-3xl opacity-50 -z-10" />
      
      <MyContainer className=" grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <div className="order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-sm font-bold mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            LIVE CLASSES NOW OPEN
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-6">
            Top-rated <span className="text-emerald-600 italic">online</span> programming for kids
          </h1>
          
          <p className="text-lg text-slate-600 mb-8 max-w-lg">
            Empower your child with Coding & AI skills. Learn from the best to become the innovators of tomorrow.
          </p>

          {/* Features List */}
          <div className="grid grid-cols-1 gap-4 mb-10">
            {[
              { icon: <FaVideo />, text: "Engaging live video lessons" },
              { icon: <FaChalkboardTeacher />, text: "World-class expert instructors" },
              { icon: <FaChartLine />, text: "Measurable weekly progress" }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 text-slate-700 font-medium">
                <div className="p-2 rounded-lg bg-emerald-100 text-emerald-600">
                  {item.icon}
                </div>
                {item.text}
              </div>
            ))}
          </div>

       

          <p className="text-sm text-slate-500 flex items-center gap-2">
            <FaCheckCircle className="text-emerald-500" />
            Join 1,000+ students who started today
          </p>
        </div>

        {/* Right Image Section */}
        <div className="order-1 lg:order-2 relative">
          <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
            <Image 
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800"
              alt="Kid coding on a laptop"
              width={800}
              height={600}
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          
          {/* Floating Stats Card */}
          <div className="absolute -bottom-6 -left-6 z-20 bg-white p-6 rounded-2xl shadow-xl border border-slate-100">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex text-yellow-400 text-xs">
                  <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
                </div>
                <p className="text-xs font-bold text-slate-800">1M+ Happy Students</p>
              </div>
            </div>
          </div>
        </div>
      </MyContainer>

      {/* Trust Section */}
      <div className="max-w-7xl mx-auto mt-24">
        <p className="text-center text-slate-400 text-sm font-bold tracking-widest uppercase mb-8">
          Built by alumni from & supported by
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 hover:opacity-100 transition-opacity">
           <div className="flex items-center gap-2 text-2xl font-bold text-slate-700"><FaGoogle /> Google</div>
           <div className="flex items-center gap-2 text-2xl font-bold text-slate-700"><FaAmazon /> amazon</div>
           <div className="flex items-center gap-2 text-2xl font-bold text-orange-500"><SiYcombinator /> Combinator</div>
           <div className="text-slate-800 font-black border-2 border-slate-800 px-3 py-1 rounded">STEM <span className="text-emerald-600">CERTIFIED</span></div>
        </div>
      </div>
    </section>
  );
}
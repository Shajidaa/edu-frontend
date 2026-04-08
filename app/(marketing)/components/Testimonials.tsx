"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FaPlayCircle, FaQuoteLeft } from 'react-icons/fa';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import MyContainer from '@/app/(student)/components/share/MyContainer';


const testimonials = [
  {
    name: "Trinity Golden Acquah",
    role: "Next gen learning Student",
    info: "Grade 5",
    image: "http://googleusercontent.com/image_collection/image_retrieval/17215757231027754073_0",
    quote: "GROWING WITH Next gen learning",
    color: "bg-emerald-400"
  },
  {
    name: "Stefanie Ineson",
    role: "Next gen learning Parent",
    info: "Film Industry",
    image: "http://googleusercontent.com/image_collection/image_retrieval/17215757231027754073_1",
    quote: "WHY WE CHOSE Next gen learning FOR OUR DAUGHTER",
    color: "bg-orange-500"
  },
  {
    name: "Adwitiya Shaw",
    role: "Next gen learning Student",
    info: "Grade 6",
    image: "http://googleusercontent.com/image_collection/image_retrieval/17215757231027754073_2",
    quote: "MY EXCITING JOURNEY WITH Next gen learning",
    color: "bg-emerald-400"
  },
  {
    name: "Shuta Notaki",
    role: "Next gen learning Student",
    info: "Grade 3",
    image: "http://googleusercontent.com/image_collection/image_retrieval/17215757231027754073_3",
    quote: "THEY TEACH KINDLY AND IT WAS ENJOYABLE",
    color: "bg-emerald-400"
  },
  {
    name: "Arjun Mehta",
    role: "Next gen learning Student",
    info: "Grade 8",
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=400",
    quote: "BUILDING MY FIRST AI APP WAS AMAZING",
    color: "bg-emerald-400"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-slate-50">
      <MyContainer className="px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-12">
          Students and parents love Next gen learning’s training program <br className="hidden md:block"/> and curriculum
        </h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-14 testimonial-swiper"
        >
          {testimonials.map((rev, i) => (
            <SwiperSlide key={i}>
              <div className="flex flex-col items-center">
                {/* Video Card Style */}
                <div className={`relative w-full aspect-[3/4] rounded-2xl ${rev.color} p-6 flex flex-col justify-between shadow-xl`}>
                  <div className="text-white font-black text-xl leading-tight uppercase">
                    {rev.quote}
                  </div>
                  
                  <div className="relative mx-auto group cursor-pointer">
                    <img 
                      src={rev.image} 
                      alt={rev.name}
                      className="w-40 h-40 rounded-full border-4 border-white object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <FaPlayCircle className="text-white text-4xl drop-shadow-lg opacity-90 group-hover:scale-110 transition-transform" />
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-end">
                     <div className="w-8 h-8 text-white/30"><FaQuoteLeft size={30}/></div>
                  </div>
                </div>

                {/* Info Below Card */}
                <div className="text-center mt-6">
                  <h4 className="text-xl font-bold text-slate-800">{rev.name}</h4>
                  <p className="text-slate-500 text-sm font-medium">{rev.info}</p>
                  <p className="text-green-600 font-bold text-sm uppercase tracking-wider">{rev.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </MyContainer>

      <style jsx global>{`
        .testimonial-swiper .swiper-button-next,
        .testimonial-swiper .swiper-button-prev {
          color: #10b981;
          background: white;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
        }
        .testimonial-swiper .swiper-button-next:after,
        .testimonial-swiper .swiper-button-prev:after {
          font-size: 18px;
          font-weight: bold;
        }
        .testimonial-swiper .swiper-pagination-bullet-active {
          background: #10b981;
        }
      `}</style>
    </section>
  );
}
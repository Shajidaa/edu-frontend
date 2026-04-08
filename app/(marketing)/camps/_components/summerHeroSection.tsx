"use client"
import React from 'react'
import { Rocket, Ticket, Star, MousePointer2 } from 'lucide-react'
import MyContainer from '@/app/(student)/components/share/MyContainer'

export default function SummerHeroSection() {
  return (
    <section className="relative w-full bg-[#0a192f]  overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-500/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-blue-500/5 blur-[100px] rounded-full" />

      <MyContainer className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Content */}
        <div className="text-left space-y-6">
          <div className="flex gap-2">
            {['Code', 'Build', 'Hack'].map((tag) => (
              <span key={tag} className="px-4 py-1 rounded-full bg-white/10 text-white text-xs font-bold tracking-widest uppercase border border-white/20">
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-4xl lg:text-6xl font-extrabold text-white leading-tight">
            Summer Coding Camp <br />
            <span className="text-emerald-400">for Kids & Teens 2026</span>
          </h1>

          <div className="space-y-4 max-w-xl">
            <p className="text-slate-300 text-lg leading-relaxed">
              Empower your child with essential coding skills at our Summer Coding Camp. 
              Dive into projects in <span className="text-emerald-300 font-semibold">Scratch, Python, Web & App Development, Roblox, and Data Science.</span>
            </p>
            <p className="text-slate-400 text-sm italic">
              Our expert instructors ensure a comprehensive learning experience with a certificate upon completion.
            </p>
          </div>

          {/* CTA & Pricing Area */}
          <div className="pt-4 space-y-6">
            <div className="flex flex-wrap items-center gap-4">
              <button className="bg-emerald-500 hover:bg-emerald-600 text-[#0a192f] font-black px-8 py-4 rounded-xl shadow-xl shadow-emerald-500/20 transition-all flex items-center gap-2 group">
                Claim your spot now
                <Rocket className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
              <div className="flex flex-col">
                 <span className="text-emerald-400 font-bold text-sm flex items-center gap-1">
                   <MousePointer2 className="w-3 h-3" /> Few slots remaining, hurry now!
                 </span>
              </div>
            </div>

            {/* Price Badge */}
            <div className="flex items-center gap-6 pt-2">
              <div className="flex items-center bg-slate-900 border border-slate-700 p-1 rounded-xl pr-4">
                <div className="bg-slate-800 line-through text-slate-500 px-3 py-2 rounded-lg text-lg font-bold mr-3">
                  $149
                </div>
                <div className="text-white text-2xl font-black">
                  $75
                </div>
                <div className="ml-3 bg-yellow-400 text-black text-[10px] font-black px-2 py-1 rounded uppercase">
                  50% Off
                </div>
              </div>

              <div className="border-2 border-dashed border-emerald-500/50 p-3 rounded-xl flex flex-col items-center">
                <span className="text-[10px] text-slate-400 uppercase font-bold tracking-tighter">Coupon Code</span>
                <span className="text-emerald-400 font-mono font-bold">SUMMER50</span>
              </div>
            </div>

            {/* Trustpilot Placeholder */}
            <div className="flex flex-col gap-1 pt-4 border-t border-slate-800 max-w-xs">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-emerald-500 text-emerald-500" />
                <Star className="w-4 h-4 fill-emerald-500 text-emerald-500" />
                <Star className="w-4 h-4 fill-emerald-500 text-emerald-500" />
                <Star className="w-4 h-4 fill-emerald-500 text-emerald-500" />
                <Star className="w-4 h-4 fill-emerald-500 text-emerald-500" />
              </div>
              <p className="text-slate-400 text-xs">TrustScore <span className="font-bold text-white">4.8</span> | 583 reviews</p>
            </div>
          </div>
        </div>

        {/* Right Content - Visual Elements */}
        <div className="relative flex justify-center items-center">
          <div className="grid grid-cols-2 gap-4 relative">
             {/* Main Graphic Simulation */}
             <div className="col-span-2 bg-emerald-500/10 border border-emerald-500/20 p-8 rounded-[40px] backdrop-blur-sm shadow-2xl">
                <div className="grid grid-cols-3 gap-6 opacity-80">
                  {/* Icons/Logos Mockup */}
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white font-bold">Py</div>
                    <span className="text-[10px] text-slate-400">Python</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-emerald-400 font-bold font-mono">{"</>"}</div>
                    <span className="text-[10px] text-slate-400">Web Dev</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-yellow-400 font-bold italic">R</div>
                    <span className="text-[10px] text-slate-400">Roblox</span>
                  </div>
                </div>
                <div className="mt-8 text-center">
                   <div className="inline-block px-6 py-2 bg-emerald-500 text-[#0a192f] rounded-full font-black text-xl tracking-tighter">
                     SCRATCH
                   </div>
                </div>
             </div>
             
             {/* Floating Badge */}
             <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-2xl animate-bounce">
                <Ticket className="w-8 h-8 text-emerald-600" />
             </div>
          </div>
        </div>

      </MyContainer>
    </section>
  )
}
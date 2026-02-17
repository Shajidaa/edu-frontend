import { Book, MessageSquareShare, Sigma, Thermometer } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const bulletPoints = [
  "Instantly convert existing content into dynamic materials for more engagement.",
  "Personalize practice with automated spaced retrieval and AI-generated feedback so students are never stuck.",
  "Create multimedia quizzes with AI-generated questions embedded in videos in just a few clicks.",
  "Generate materials with student performance data for instant differentiation.",
  "Use the question and passage generator with auto-grading to streamline assessment creation."
];

export default function InstructionSupport() {
  return (
    <section className="bg-[#FAF9F0] py-20 px-6 md:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <h2 className="mb-16 text-center text-4xl font-bold text-[#1E293B]">
          Next Gen Learning helps teachers every day
        </h2>

        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Side: Image with Floating Icons */}
          <div className="relative">
            {/* Main Image with rounded arch shape */}
            <div className="relative z-10 aspect-4/5 overflow-hidden rounded-t-[200px] rounded-b-[40px] shadow-xl">
              <Image
                width={1000}
                height={1250}
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1000"
                alt="Teacher helping student with laptop"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Floating Stacked Icons */}
            <div className="absolute -left-8 top-1/2 flex -translate-y-1/2 flex-col gap-3 z-20">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#3B5998] text-white shadow-lg">    <MessageSquareShare /></div>
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#F06543] text-white shadow-lg">    <Thermometer /></div>
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FFC107] text-white shadow-lg">  <Book/></div>
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#87CEEB] text-white shadow-lg"> <Sigma /></div>
            </div>
          </div>

          {/* Right Side: Content & Pear Graphic */}
          <div className="relative">
            

            <div className="relative z-10">
              <h3 className="mb-8 text-3xl font-bold leading-tight text-[#1E293B]">
                Support for every step of your <br /> instruction.
              </h3>

              <ul className="space-y-6">
                {bulletPoints.map((text, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#2D2D2D] text-[10px] text-white">
                      ✓
                    </div>
                    <p className="text-lg leading-snug text-slate-700">
                      {text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
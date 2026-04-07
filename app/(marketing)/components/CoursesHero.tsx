import MyContainer from '@/app/(after)/components/share/MyContainer';
import Link from 'next/link';
import React from 'react';

const stats = [
  { label: '500+ graduate IT Instructors', icon: '🎓' },
  { label: '7+ Years coding experience', icon: '💻' },
  { label: '91% Female teachers', icon: '👩‍🏫' },
  { label: '10+ Coding languages', icon: '🔡' },
];

export default function TeacherSection() {
  return (
    <section className="py-20  bg-white">
      <MyContainer className=" px-4 flex flex-col lg:flex-row items-center gap-12">
        {/* Teacher Image Collage */}
        <div className="lg:w-1/2 flex justify-center">
          <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]">
            <img 
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800" 
              alt="Experienced Teachers"
              className="rounded-full w-full h-full object-cover border-8 border-green-50 shadow-2xl"
            />
            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-2xl shadow-lg border border-green-100">
              <p className="text-green-600 font-bold text-lg">Top 1% Tutors</p>
              <p className="text-slate-500 text-sm">Hand-picked experts</p>
            </div>
          </div>
        </div>

        {/* Content & Stats */}
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-black text-slate-800 mb-6 leading-tight">
            Learn to code from <br/>
            <span className="text-green-600">experienced teachers.</span>
          </h2>
          <p className="text-slate-600 text-lg mb-10">
            Our hand-picked tutors ensure the best learning experience, 
            blending technical mastery with pedagogical excellence.
          </p>

          <div className="grid grid-cols-2 gap-4 mb-10">
            {stats.map((stat, i) => (
              <div key={i} className="bg-green-50 p-4 rounded-xl border border-green-100">
                <span className="text-2xl mb-2 block">{stat.icon}</span>
                <p className="text-sm font-bold text-slate-700">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="flex gap-4">
            <Link href={'/booking'} className="px-8 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-all">
              Try a free lesson
            </Link>
            <button className="px-8 py-3 border-2 border-green-600 text-green-700 font-bold rounded-lg hover:bg-green-50 transition-all">
              Become a teacher
            </button>
          </div>
        </div>
      </MyContainer>
    </section>
  );
}
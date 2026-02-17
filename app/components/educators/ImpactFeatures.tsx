import React from 'react';
import MyContainer from '../share/MyContainer';

const features = [
  {
    badge: "FREE FOR TEACHERS",
    badgeColor: "bg-sky-100 text-sky-800",
    title: "Tasks & teaching",
    description: "Choose from a library of AI tools to get high-quality support for all essential teaching tasks, from lesson prep to parent emails.",
  },
  {
    badge: "FREE FOR TEACHERS",
    badgeColor: "bg-sky-100 text-sky-800",
    title: "Standards & dynamic lessons",
    description: "Instantly transform an idea, standard, or lesson plan into a lesson, practice set, and assessment, differentiated for multiple groups.",
  },
  {
    badge: "USER FAVORITE",
    badgeColor: "bg-amber-400 text-black",
    title: "Data & differentiation",
    description: "Get clear insights into performance with intelligent recommendations for grouping and instantly differentiated materials.",
  }
];

export default function ImpactFeatures() {
  return (
    <section className="bg-[#FAF9F0] py-20 px-6 md:px-12 lg:px-24">
      <MyContainer>
        <h2 className="mb-12 text-4xl font-bold text-[#0F172A]">
          AI that means amplified impact.
        </h2>
        
        {/* Main Feature Container */}
        <div className="rounded-[40px] bg-[#FEFDF7] p-8 md:p-16 shadow-sm">
          <div className="grid gap-12 md:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-start">
                <span className={`mb-6 rounded-md px-3 py-1 text-xs font-bold tracking-wide ${feature.badgeColor}`}>
                  {feature.badge}
                </span>
                
                <h3 className="mb-4 text-2xl font-bold text-[#0F172A]">
                  {feature.title}
                </h3>
                
                <p className="mb-8 text-lg leading-relaxed text-slate-700">
                  {feature.description}
                </p>
                
                <a 
                  href="#" 
                  className="mt-auto border-b-2 border-amber-400 pb-1 text-lg font-bold text-[#0F172A] hover:text-slate-600 transition-colors"
                >
                  Learn more
                </a>
              </div>
            ))}
          </div>
        </div>
      </MyContainer>
    </section>
  );
}
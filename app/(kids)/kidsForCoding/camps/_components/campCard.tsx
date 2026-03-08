"use client"
import React from 'react';
import useFetch from '@/app/(kids)/hooks/useFetch';
import { BookOpen, Users, CheckCircle2, ArrowRight } from 'lucide-react';
import MyContainer from '@/app/(marketing)/components/share/MyContainer';

interface camp {
  _id: string;
  title: string;
  ages: string;
  curriculum_count: string;
  lessons: string;
  duration: string;
  description: string;
  details: string;
  image_url: string;
  sessions: string;
  learning_outcomes: string[];
}

export default function CampCard() {
  const { data, loading, error } = useFetch<camp>('/camps'); // Assuming data is an array

  if (loading) return <div className="p-10 text-center animate-pulse text-emerald-600">Loading camps...</div>;
  if (error) return <div className="p-10 text-center text-red-500">Error loading data.</div>;

  return (
    <MyContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6 ">
      {data?.map((item) => (
        <div 
          key={item._id} 
          className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-emerald-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
          {/* Image Section */}
          <div className="relative h-52 w-full overflow-hidden">
            <img
              src={item.image_url || "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=640"}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-emerald-700 shadow-sm">
              {item.duration || "Limited Spots"}
            </div>
          </div>

          {/* Content Section */}
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-extrabold text-slate-800 leading-tight mb-3 group-hover:text-emerald-600 transition-colors">
              {item.title}
            </h3>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-4 mb-4">
              <div className="flex items-center text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-lg text-sm font-semibold">
                <BookOpen className="w-4 h-4 mr-1.5" />
                {item.sessions}
              </div>
              <div className="flex items-center text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-lg text-sm font-semibold">
                <Users className="w-4 h-4 mr-1.5" />
                Ages {item.ages}
              </div>
            </div>

            <p className="text-slate-600 text-sm line-clamp-2 mb-6">
              {item.description}
            </p>

            {/* Learning Outcomes */}
            <div className="space-y-2.5 mb-8 flex-grow">
              <span className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">
                Learning Outcomes
              </span>
              {item.learning_outcomes?.slice(0, 3).map((outcome, idx) => (
                <div key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                  <span>{outcome}</span>
                </div>
              ))}
            </div>

            {/* Footer Buttons */}
            <div className="mt-auto space-y-3">
              <button className="w-full text-emerald-600 font-bold text-sm py-2 hover:bg-emerald-50 rounded-xl transition-colors">
                Know more
              </button>
              <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3.5 rounded-2xl shadow-lg shadow-emerald-200 transition-all active:scale-95 flex items-center justify-center gap-2">
                Claim your spot
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </MyContainer>
  );
}
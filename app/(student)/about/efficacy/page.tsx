import React from 'react';
import { BookOpen,  GraduationCap, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import MyContainer from '@/app/(student)/components/share/MyContainer';

// --- Sub-components for better maintainability ---

const StatCard = ({ figure, label, description }: { figure: string; label: string; description: string }) => (
  <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
    <div className="text-4xl font-bold text-blue-600 mb-2">{figure}</div>
    <div className="font-semibold text-slate-800 mb-2 uppercase tracking-wide text-sm">{label}</div>
    <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
  </div>
);

const ResearchPaper = ({ title, author, year, tags }: { title: string; author: string; year: string; tags: string[] }) => (
  <div className="flex flex-col md:flex-row gap-6 p-6 bg-slate-50 rounded-xl border border-transparent hover:border-blue-200 transition-colors group">
    <div className="bg-white p-4 rounded-lg shadow-inner shrink-0 flex items-center justify-center w-16 h-20 border-t-4 border-blue-500">
      <BookOpen className="text-slate-300 group-hover:text-blue-500 transition-colors" size={32} />
    </div>
    <div>
      <div className="flex gap-2 mb-2">
        {tags.map(tag => (
          <span key={tag} className="text-[10px] font-bold bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full uppercase tracking-tighter">
            {tag}
          </span>
        ))}
      </div>
      <h3 className="font-bold text-lg text-slate-900 mb-1">{title}</h3>
      <p className="text-sm text-slate-500 mb-4">{author} • {year}</p>
      <button className="text-blue-600 font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
        View Full Report <ArrowRight size={16} />
      </button>
    </div>
  </div>
);

// --- Main Page Component ---

export default function Efficacy() {
  return (
    <MyContainer className="min-h-screen bg-white font-sans text-slate-900">
      
      {/* Hero: Focused on Human Impact */}
      <section className="relative py-20 bg-[#f8fafc] overflow-hidden">
        <div className=" px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-blue-600 uppercase bg-blue-50 rounded-full">
              Evidence-Based Learning
            </div>
            <h1 className="text-5xl font-extrabold tracking-tight mb-6 leading-[1.1]">
              Measurable impact for <br />
              <span className="text-blue-600 underline decoration-blue-200">every student.</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-lg mb-8">
              We don&apos;t just build tools; we build outcomes. Our platform is grounded in the science of learning and validated by independent researchers.
            </p>
            <div className="flex gap-4">
              <button className="bg-slate-900 text-white px-8 py-3.5 rounded-full font-bold hover:bg-slate-800 transition-all">
                Download Efficacy Report
              </button>
            </div>
          </div>
          <div className="relative">
            <Image
              width={500}
              height={400} 
              src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&q=80&w=1000" 
              alt="Students collaborating" 
              className="rounded-4xl shadow-2xl z-10 relative"
            />
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-yellow-200 rounded-full z-0 opacity-50 blur-2xl"></div>
          </div>
        </div>
      </section>

      {/* Proof Points: The Data */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">The numbers speak for themselves</h2>
          <p className="text-slate-500">Longitudinal studies conducted across 500+ school districts.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <StatCard 
            figure="2.5x" 
            label="Engagement" 
            description="Increase in active student participation compared to traditional lecture methods." 
          />
          <StatCard 
            figure="15%" 
            label="Growth" 
            description="Average improvement in standardized test scores within the first year of implementation." 
          />
          <StatCard 
            figure="92%" 
            label="Retention" 
            description="Of teachers report that our platform helps them identify struggling students faster." 
          />
        </div>
      </section>

      {/* Research Library: Credibility Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold mb-4">Research & Validation</h2>
              <p className="text-slate-400">
                Our curriculum and pedagogical approach are vetted by third-party academic institutions 
                to ensure we meet the highest ESSA standards.
              </p>
            </div>
            <button className="border border-slate-700 px-6 py-2 rounded-lg hover:bg-slate-800 transition-colors text-sm font-semibold">
              Browse All Papers
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-slate-900">
              <ResearchPaper 
                tags={["ESSA Level 2", "Math"]}
                title="The Impact of Real-Time Feedback on Algebraic Fluency" 
                author="Dr. Sarah Jenkins, Stanford University"
                year="2024"
              />
            </div>
            <div className="text-slate-900">
              <ResearchPaper 
                tags={["Peer Reviewed", "Literacy"]}
                title="Socio-Emotional Learning in Digital Environments" 
                author="National Education Research Lab"
                year="2023"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 text-center max-w-3xl mx-auto px-6">
        <div className="mb-8 flex justify-center">
          <div className="p-4 bg-blue-50 rounded-2xl">
            <GraduationCap className="text-blue-600" size={40} />
          </div>
        </div>
        <h2 className="text-4xl font-bold mb-6 text-slate-900">Ready to see these results in your classrooms?</h2>
        <p className="text-lg text-slate-600 mb-10 leading-relaxed">
          Schedule a tailored walkthrough with one of our efficacy experts to see how we can align with your district&lsquo;s specific goals.
        </p>
        <button className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all">
          Book a Consultation
        </button>
      </section>
    </MyContainer>
  );
}
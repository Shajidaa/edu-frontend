import React from 'react';
import { ShieldCheck, BarChart3, ClipboardCheck, LayoutGrid, Zap, Info } from 'lucide-react';

// --- Reusable UI Components ---

const Button = ({ variant = 'primary', children, className = "" }:{ variant?: string, children: React.ReactNode, className?: string }) => {
  const variants = {
    primary: "bg-[#FFCD00] hover:bg-[#e6b800] text-black font-bold py-2.5 px-6 rounded-full transition-all shadow-sm text-sm",
    outline: "border-2 border-black hover:bg-black hover:text-white text-black font-bold py-2.5 px-6 rounded-full transition-all text-sm",
    lime: "bg-[#C7FF00] hover:bg-[#b5e600] text-black font-extrabold py-3 px-8 rounded-full transition-all shadow-md text-sm"
  };
  return <button className={`${variants} ${className}`}>{children}</button>;
};

const FeatureItem = ({ title, description }:{ title: string, description: string }) => (
  <div className="group">
    <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-green-800 transition-colors">
      {title}
    </h4>
    <p className="text-slate-600 text-sm leading-relaxed">
      {description}
    </p>
  </div>
);

// --- Main Page Component ---

export default function AssessmentPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-green-100">
      
      {/* Hero Section */}
      <section className="bg-[#004D38] pt-16 pb-0 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-t-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden">
            {/* Left Content */}
            <div className="p-8 md:p-16 md:w-1/2">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#004D38] p-2 rounded-lg">
                  <ClipboardCheck size={24} className="text-[#C7FF00]" />
                </div>
                <div>
                  <h3 className="font-bold text-xl tracking-tight text-slate-900">Pear Assessment</h3>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Formerly Edulastic</p>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                The leading solution to assess individual student needs.*
              </h1>

              <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                Part of the Pear Deck Learning platform, Pear Assessment is the only versatile testing solution 
                that combines the reporting capabilities and customization districts need with the simplified 
                classroom assessments teachers love.
              </p>

              <div className="flex flex-wrap gap-10">
                <div className="space-y-2">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Administrators:</p>
                  <Button variant="primary">Request a demo</Button>
                </div>
                <div className="space-y-2">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Educators:</p>
                  <Button variant="outline">Sign up for free</Button>
                </div>
              </div>
            </div>

            {/* Right Visual Placeholder */}
            <div className="md:w-1/2 bg-slate-50 relative min-h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1200" 
                alt="Assessment Dashboard"
                className="absolute inset-0 w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent md:block hidden" />
            </div>
          </div>
        </div>
      </section>

      {/* Monitor Success Section (Card Layout) */}
      <section className="py-20 px-4 bg-[#FFFDF6]">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-8 md:p-16 shadow-sm border border-slate-100">
          <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-black mb-4">Monitor success with assessment</h2>
              <p className="text-slate-600 text-lg">
                Easily administer district, common, and classroom assessments with high-quality item banks, 
                or use curriculum-aligned assessments to create your own questions.
              </p>
            </div>
            <Button variant="lime">Request a demo</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 pt-8 border-t border-slate-100">
            <FeatureItem 
              title="Implement common benchmarks" 
              description="Help every student master standards with an integrated assessment program to identify gaps and monitor progress." 
            />
            <FeatureItem 
              title="Create classroom formatives" 
              description="Create technology-enhanced, standards-aligned assessments and get instant data to drive instruction, for free." 
            />
            <FeatureItem 
              title="In-depth data at a glance" 
              description="See which areas students are succeeding—and where they need more support—with standards-aligned reporting." 
            />
            <FeatureItem 
              title="Ensure secure testing" 
              description="Get additional layers of security, from browser lockdowns to dynamic passwords, plus customizable settings." 
            />
          </div>
        </div>
      </section>

      {/* Progress & Driving Outcomes Section */}
      <section className="py-24 px-4 md:px-8 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-20">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-black mb-6 leading-tight">Visualize progress, drive outcomes</h2>
            <p className="text-slate-600 mb-10 leading-relaxed">
              Next Gen Assessment&rsquo;s data studio gives educators a holistic view of learning to shape data-driven 
              strategies for student success. See Pear Assessment reporting alongside external academic 
              data sources to inform MTSS planning.
            </p>

            <div className="space-y-10">
              <div className="flex gap-4">
                <div className="mt-1 text-green-700"><BarChart3 size={24} /></div>
                <FeatureItem 
                  title="Gain critical insight" 
                  description="Get insight into attendance data, academic performance, standards mastery, and academic risk levels—all in one dashboard."
                />
              </div>
              <div className="flex gap-4">
                <div className="mt-1 text-green-700"><Info size={24} /></div>
                <FeatureItem 
                  title="See the 360 view of student progress" 
                  description="Understand each student's learning journey with the whole learner report, so you can provide proactive support."
                />
              </div>
            </div>
            
            <Button variant="lime" className="mt-12">Request a demo</Button>
          </div>

          <div className="md:w-1/2 relative">
             <div className="absolute -top-12 -right-12 w-64 h-64 bg-green-50 rounded-full blur-3xl opacity-50" />
             <img 
              src="https://images.unsplash.com/photo-1551288049-bbdac8626ad1?auto=format&fit=crop&q=80&w=800" 
              alt="Data visualization"
              className="relative rounded-2xl shadow-2xl border-t-8 border-slate-900"
            />
          </div>
        </div>
      </section>

      {/* Instant Content Section (Footer Variant) */}
      <section className="py-20 px-4 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto text-center md:text-left">
          <span className="inline-block bg-[#FFCD00] text-[10px] font-black px-2 py-0.5 rounded mb-4 uppercase">New!</span>
          <h2 className="text-4xl font-black mb-4">Hours of content without hours of prep</h2>
          <p className="text-slate-600 mb-12 max-w-lg">Time-saving test prep made for teachers, with teachers.</p>
          
          <div className="flex flex-col md:flex-row gap-12 items-start">
             <div className="flex-1">
                <h4 className="text-xl font-bold mb-3">Instant lesson packages</h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Generate a full package of customizable lessons, practice sets, and tests on any topic, 
                  differentiated for multiple student groups, in under a minute.
                </p>
                <Button variant="lime">Request a demo</Button>
             </div>
             <div className="flex-1 hidden md:block">
                <div className="aspect-video bg-white rounded-xl shadow-inner border border-dashed border-slate-300 flex items-center justify-center">
                  <Zap size={48} className="text-slate-200" />
                </div>
             </div>
          </div>
        </div>
      </section>

    </div>
  );
}
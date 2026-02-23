import React from 'react';
import { Sparkles, Trophy, Zap, Clock, MousePointer2 } from 'lucide-react';

// --- Sub-Components ---

const Button = ({ variant = 'primary', children, className = "" }:{ variant?: string, children: React.ReactNode, className?: string }) => {
  const styles = {
    primary: "bg-[#FFCD00] hover:bg-[#e6b800] text-black font-bold py-2 px-6 rounded-full transition-all shadow-sm text-sm",
    secondary: "border-2 border-black hover:bg-black hover:text-white text-black font-bold py-2 px-6 rounded-full transition-all text-sm",
    lime: "bg-[#C7FF00] hover:bg-[#b5e600] text-black font-bold py-2 px-8 rounded-full transition-all shadow-md text-sm"
  };
  return <button className={`${styles} ${className}`}>{children}</button>;
};

const SectionHeader = ({ title, subtitle, badge }:{ title: string, subtitle?: string, badge?: string }) => (
  <div className="mb-8">
    {badge && (
      <span className="inline-block bg-[#FFCD00] text-xs font-black px-2 py-1 rounded mb-4 uppercase tracking-wider">
        {badge}
      </span>
    )}
    <h2 className="text-4xl font-extrabold text-slate-900 leading-tight mb-4">{title}</h2>
    {subtitle && <p className="text-slate-600 text-lg leading-relaxed max-w-2xl">{subtitle}</p>}
  </div>
);

const FeaturePoint = ({ title, description }:{ title: string, description: string }) => (
  <div className="mb-8">
    <h4 className="text-lg font-bold text-slate-900 mb-2">{title}</h4>
    <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
  </div>
);

// --- Main Page Component ---

export default function Practice() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-yellow-200">
      
      {/* Hero Section */}
      <section className="bg-[#FFCD00] pt-12 pb-0 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-t-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden">
            <div className="p-8 md:p-16 md:w-1/2">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-[#FFCD00] p-1.5 rounded-lg">
                  <Trophy size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl">Pear Practice</h3>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">Formerly Giant Steps</p>
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-[1.1]">
                Engage students in practice with provable results.
              </h1>
              <p className="text-slate-600 mb-8 leading-relaxed">
                As part of the Pear Deck Learning platform, Pear Practice motivates students and engages them in 
                differentiated practice that drives a 15 percentage point improvement.*
              </p>
              <div className="flex flex-wrap gap-8">
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase mb-2">Administrators:</p>
                  <Button>Request a demo</Button>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase mb-2">Educators:</p>
                  <Button variant="secondary">Sign up for free</Button>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 bg-slate-50 relative min-h-[300px]">
              <img 
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1000" 
                alt="Student practicing"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Engaging Sessions Section (Image Left) */}
      <section className="py-24 px-4 md:px-8 bg-[#FFFDF6]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-3xl font-black mb-16">Encourage in-class and independent practice</h2>
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <img 
                  src="https://images.unsplash.com/photo-1610484826967-09c5720778c7?auto=format&fit=crop&q=80&w=800" 
                  className="relative rounded-2xl shadow-xl border-8 border-white"
                  alt="Gamified learning interface"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <SectionHeader title="Engaging class sessions" />
              <p className="text-slate-600 mb-8">
                Use Pear Practice with the entire class and see how the in-game collaboration creates a supportive 
                community even after practice is over.
              </p>
              <FeaturePoint 
                title="Create positive peer experiences" 
                description="With a format that promotes collaboration, not competition, every student feels encouraged to participate." 
              />
              <FeaturePoint 
                title="Turn existing materials into practice in seconds" 
                description="Create a customizable Practice Set in seconds from any existing materials. Just snap a photo, upload a PDF, or link a website, and voila!" 
              />
              <Button variant="lime">Request a demo</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Independent Learning Section (Text Left) */}
      <section className="py-24 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-16">
          <div className="md:w-1/2">
             <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" 
              className="rounded-2xl shadow-lg grayscale-[20%] hover:grayscale-0 transition-all duration-500"
              alt="Students collaborating"
            />
          </div>
          <div className="md:w-1/2">
            <SectionHeader 
              title="Can't-wait-to-play practice" 
              subtitle="40% of students initiate learning on Pear Practice independently, beyond the required class work. That's because Pear Practice gives students tons of opportunities to earn rewards, boosting engagement and motivating them to learn more."
            />
            <FeaturePoint 
              title="Just-in-time feedback" 
              description="Enable students to receive AI-generated explanations for why their answers were correct or incorrect." 
            />
            <FeaturePoint 
              title="Personalized practice sets" 
              description="Daily Remixes automatically resurface personalized practice materials at the optimal cadence for each student." 
            />
            <div className="flex items-start gap-3 mb-8">
              <div className="mt-1 bg-orange-100 p-1 rounded">
                <Sparkles size={16} className="text-orange-500" />
              </div>
              <div>
                <h4 className="text-lg font-bold">Learning that doesn&apos;t end after hours</h4>
                <p className="text-slate-600 text-sm">Easily differentiate practice sets by student group and assign them as homework.</p>
              </div>
            </div>
            <Button variant="lime">Request a demo</Button>
          </div>
        </div>
      </section>

      {/* Bottom CTA / Banner */}
      <section className="bg-[#FFCD00] py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-black mb-4">Lessons in &lt; a minute</h2>
          <p className="text-slate-800 font-medium mb-8">
            The instant lesson package tool lets you use your own materials, files, topics, 
            or standards to generate classroom-ready content in under a minute.
          </p>
          <button className="bg-white hover:bg-slate-100 text-black font-bold py-3 px-10 rounded-full shadow-lg transition-transform hover:scale-105">
            Request a demo
          </button>
        </div>
      </section>

    </div>
  );
}
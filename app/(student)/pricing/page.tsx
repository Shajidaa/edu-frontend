"use client";
import React, { useState } from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import MyContainer from '../components/share/MyContainer';

// --- Types & Interfaces ---

interface PricingTier {
  tier: string;
  price: string;
  priceSuffix?: string;
  subtext?: string;
  description: string;
  buttonText: string;
  isPopular: boolean;
  isBestValue: boolean;
  features: string[];
}

interface PricingMap {
  [key: string]: PricingTier[];
}

// --- Configuration ---

const PRICING_DATA: PricingMap = {
  "Next Deck": [
    {
      tier: "Teacher Free",
      price: "$0",
      description: "For educators looking to create an engaging, inclusive and interactive learning experience in their classroom.",
      buttonText: "Get Started",
      isPopular: false,
      isBestValue: false,
      features: [
        "Design engaging lessons with interactive questions, polls, quizzes, formative assessments",
        "Allow differentiated learning with Student Paced mode",
        "Access ready-to-teach lessons and templates designed by educators",
        "Control the pace of class and project student answers anonymously",
        "Enable students to join a session anonymously",
        "Keep students in sync with Locks and Timers",
        "Teach vocabulary with Flashcard Factory",
        "Access accessibility features like Immersive Reader",
        "Add new questions to the lesson while presenting",
        "Work seamlessly with powerful classroom tools from Google and Microsoft"
      ]
    },
    {
      tier: "Teacher Premium",
      price: "$149*",
      priceSuffix: "/year",
      subtext: "*with educator discount",
      description: "For individual teachers looking for student engagement, differentiated learning and ability to provide real-time student feedback.",
      buttonText: "Get Started",
      isPopular: true,
      isBestValue: false,
      features: [
        "Everything in Teacher Free plus...",
        "View and highlight student responses by name with the Teacher Dashboard",
        "Add Draggable and Drawing responses",
        "Capture and share student progress and leave feedback after the session with Reflect & Review",
        "Use Quick Prompts to launch a single slide to encourage discussion or assess learning",
        "Add Audio to Slides (Google Apps for Education only)",
        "Provide feedback to individual students during or after a lesson with Teacher Feedback",
        "Use the Shared Teacher Dashboard to share Session controls and valuable student insight"
      ]
    },
    {
      tier: "Schools & Districts",
      price: "Custom",
      description: "For schools or districts to enable teachers with an engaging differentiated instruction platform for all grades and subjects.",
      buttonText: "Request a Quote",
      isPopular: false,
      isBestValue: true,
      features: [
        "Everything in Teacher Premium plus...",
        "Premium features for every teacher and student",
        "Access to District Library for shared resources",
        "Standards-aligned lessons with Certified math and ELA content (grades 3-12)",
        "No hidden fees for data storage or content",
        "Efficacy Reports for real-time usage data",
        "Custom professional development and training options",
        "Dedicated support for onboarding and implementation",
        "LMS Integrations with Canvas and Schoology"
      ]
    }
  ]
};

// --- Components ---

const FeatureItem: React.FC<{ text: string }> = ({ text }) => (
  <li className="flex gap-3 text-sm text-slate-700 leading-snug">
    <CheckCircle2 className="flex-shrink-0 text-slate-900 w-5 h-5" />
    <span>{text}</span>
  </li>
);

const PricingCard: React.FC<{ data: PricingTier }> = ({ data }) => (
  <div className={`relative flex flex-col bg-slate-50 rounded-2xl border ${data.isPopular ? 'border-lime-400' : 'border-slate-200'} shadow-sm transition-all hover:shadow-md`}>
    {data.isPopular && (
      <div className="absolute -top-3 right-6 bg-lime-400 text-slate-900 text-[10px] font-black px-3 py-1 rounded-sm uppercase tracking-widest">
        Popular
      </div>
    )}
    {data.isBestValue && (
      <div className="absolute -top-3 right-6 bg-[#004d3d] text-white text-[10px] font-black px-3 py-1 rounded-sm uppercase tracking-widest">
        Most Value
      </div>
    )}

    <div className="p-8 border-b border-slate-200 min-h-[320px] flex flex-col">
      <span className="text-sm font-bold text-slate-900 mb-4">{data.tier}</span>
      <div className="mb-2">
        <span className="text-5xl font-black text-slate-900">{data.price}</span>
        {data.priceSuffix && <span className="text-xl font-bold text-slate-900">{data.priceSuffix}</span>}
      </div>
      {data.subtext && <p className="text-[10px] font-bold text-slate-500 mb-4">{data.subtext}</p>}
      <p className="text-sm text-slate-600 mb-8 leading-relaxed">{data.description}</p>
      
      <button className={`mt-auto w-full py-3 rounded-full font-bold border-2 transition-all ${
        data.isBestValue ? 'bg-amber-400 border-amber-400 hover:bg-amber-500' : 'border-slate-900 hover:bg-slate-900 hover:text-white'
      }`}>
        {data.buttonText}
      </button>
    </div>

    <div className="p-8 flex-grow">
      <h4 className="font-bold text-slate-900 mb-6">What you can do:</h4>
      <ul className="space-y-4">
        {data.features.map((feature, idx) => (
          <FeatureItem key={idx} text={feature} />
        ))}
      </ul>
    </div>
  </div>
);

export default function PricingPage() {
  const [activeProduct, setActiveProduct] = useState<string>("Next Deck");

  return (
    <div className="min-h-screen  font-sans text-slate-900 pb-24">
      <header className=" bg-[#f7fbe1] mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-black mb-6">Find the right plan for your needs</h1>
        <p className="max-w-3xl mx-auto text-lg text-slate-700 leading-relaxed">
          Next Deck Learning&rsquo;s innovative tools are designed in collaboration with educators and rooted in the science of learning.
        </p>
      </header>

      <nav className="max-w-5xl  mx-auto px-6 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {["Pear Start", "Next Deck", "Pear Practice", "Pear Assessment"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveProduct(tab)}
              className={`py-4 px-2 rounded-t-xl font-bold text-sm transition-all border-b-4 ${
                activeProduct === tab 
                ? 'bg-white border-blue-500 text-slate-900 shadow-sm' 
                : 'bg-white/50 border-transparent text-slate-400 hover:text-slate-600'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </nav>

      <MyContainer className="px-6">
        <div className="flex items-center justify-center gap-2 mb-12">
            <div className="w-6 h-6 bg-lime-400 rounded-sm transform rotate-45" />
            <h2 className="text-3xl font-black">{activeProduct}</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Using fallback to "Next Deck" data if tab data isn't defined yet */}
          {(PRICING_DATA[activeProduct] || PRICING_DATA["Next Deck"]).map((plan, idx) => (
            <PricingCard key={idx} data={plan} />
          ))}
        </div>
      </MyContainer>

      <MyContainer className="mt-24 px-6">
        <div className="relative rounded-3xl overflow-hidden bg-slate-900 text-white p-12 text-center group">
          <img 
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1200" 
            alt="Educator Support" 
            className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-4">Unsure which plan fits your district?</h3>
            <p className="text-slate-300 mb-8">Our education consultants are ready to build a customized success plan.</p>
            <button className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-3 rounded-full font-bold hover:bg-slate-100 transition-colors">
              Talk to Sales <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </MyContainer>
    </div>
  );
}
import React from 'react';
import { CheckCircle2, Pencil, Type, Activity, Undo2, Trash2 } from 'lucide-react';
import MyContainer from '../share/MyContainer';
import MyButton from '../share/MyButton';

const DistrictDeck = () => {
  const benefits = [
    "Promote active, collaborative learning environments.",
    "Help teachers make data-driven decisions about lessons.",
    "Support teacher efficacy with high-impact, active-learning solutions.",
    "Help teachers support the diverse needs of each student."
  ];

  const colors = [
    "bg-orange-600", "bg-yellow-400", "bg-lime-400", "bg-emerald-500", 
    "bg-emerald-900", "bg-sky-100", "bg-sky-400", "bg-slate-900", "bg-white border"
  ];

  return (
    <MyContainer className=" px-6 py-16 bg-[#FDFCF6] flex flex-col md:flex-row items-center gap-12 font-sans">
      
      {/* Left Column: Content */}
      <div className="w-full md:w-1/2 space-y-6 order-2 md:order-1">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-lime-400 rounded-sm rotate-12 flex items-center justify-center">
             <span className="text-xs text-white">🎓</span>
          </div>
          <span className="font-bold text-2xl text-slate-900">Next Gen Deck</span>
        </div>

        <h1 className="text-5xl font-extrabold text-slate-900 leading-tight">
          Deliver interactive lessons on any topic
        </h1>

        <p className="text-lg text-slate-700 leading-relaxed max-w-lg">
          The teacher-favorite instructional tool to create and deliver interactive 
          lessons for any topic, and provide immediate feedback.
        </p>

        <ul className="space-y-4">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckCircle2 className="text-emerald-500 mt-1 shrink-0" size={20} />
              <span className="text-slate-700 font-medium leading-snug">{benefit}</span>
            </li>
          ))}
        </ul>

        
        <MyButton  
         className="mt-4  hover:bg-lime-500! text-slate-900! font-bold py-4 px-8 rounded-full transition-colors shadow-md" href='/'> Request free access</MyButton>  
      </div>

      {/* Right Column: Interaction Mockup */}
      <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2">
        <div className="w-full max-w-lg bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xl">
          {/* Header */}
          <div className="bg-sky-100 p-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border-2 border-sky-200">
               🎓
            </div>
            <span className="font-semibold text-slate-800">Students, identify the allusion!</span>
          </div>

          {/* Question Body */}
          <div className="p-8 text-center space-y-8">
            <p className="italic text-xl text-slate-800 leading-relaxed">
              &quot;&quot;His curiosity about the package was like <br />
              <span className="font-bold">Sherlock Holmes</span> solving a perplexing case.&quot;&quot;
            </p>

            <div className="flex justify-center gap-8 font-bold text-slate-900 relative">
              <div className="relative">
                <span className="relative z-10">Literary</span>
                <div className="absolute -inset-x-4 -inset-y-1 border-4 border-orange-500 rounded-full rotate-2"></div>
              </div>
              <span>Canonical</span>
              <span>Mythological</span>
            </div>

            {/* Color Palette UI */}
            <div className="flex justify-center gap-2 pt-4">
              {colors.map((color, i) => (
                <div key={i} className={`w-8 h-8 rounded-full ${color} cursor-pointer hover:scale-110 transition-transform ${i === 0 ? 'ring-2 ring-offset-2 ring-slate-400' : ''}`} />
              ))}
            </div>
          </div>

          {/* Footer Toolbar */}
          <div className="bg-slate-50 border-t border-slate-100 p-4 flex justify-between items-center text-slate-400">
            <div className="flex gap-6 items-center">
              <Pencil size={20} className="text-slate-300" />
              <div className="h-6 w-px bg-slate-200" />
              <Type size={20} />
              <Activity size={20} />
            </div>
            <div className="flex gap-4">
              <Undo2 size={20} />
              <Trash2 size={20} />
            </div>
          </div>
        </div>
      </div>

    </MyContainer>
  );
};

export default DistrictDeck;
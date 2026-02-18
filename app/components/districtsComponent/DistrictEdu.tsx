import React from 'react';
import { Zap, CheckCircle2 } from 'lucide-react'; // Using Lucide for the icons
import MyContainer from '../share/MyContainer';
import MyButton from '../share/MyButton';

const DistrictEdu = () => {
  const features = [
    "Generate lesson plans and instantly transform them into learning materials.",
    "Teachers save hours with ready-to-teach content in two clicks or less.",
    "Access 40+ easy-to-use AI-powered tools to fast-track essential tasks.",
    "Privacy-centric design means schools can safely and responsibly use AI."
  ];

  return (
    <MyContainer className=" px-6 py-16 bg-white flex flex-col md:flex-row items-center gap-12 font-sans">
      
      {/* Left Column: Visual Mockup */}
      <div className="w-full  md:w-1/2 flex justify-center relative">
        <div className="relative bg-blue-50 rounded-3xl p-6 md:p-8  border-blue-100 shadow-sm max-w-sm md:max-w-md">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-blue-900 text-lg">Instant Lesson Packages</h3>
            <span className="text-gray-400 cursor-pointer">✕</span>
          </div>
          
          {/* Chat Bubble 1 */}
          <div className="flex gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-gray-300 flex-shrink-0 overflow-hidden">
               <img src="/api/placeholder/40/40" alt="Avatar" />
            </div>
            <div className="bg-lime-100 p-4 rounded-2xl rounded-tl-none text-sm text-gray-800 leading-relaxed">
              Create a <span className="font-bold">Pear Practice</span> that covers the prerequisite skills for CCSS.MATHE.CONTENT.4.NF.C.5
            </div>
          </div>

          {/* Response Bubble */}
          <div className="ml-12 bg-orange-50 p-4 rounded-2xl border border-orange-100">
            <p className="text-xs font-medium text-gray-600 mb-3">Here&lsquo;s a Pear Practice Set for these skills.</p>
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 bg-blue-400 rounded-sm"></div>
                <span className="font-bold text-sm">Understanding Fractions</span>
              </div>
              <div className="flex gap-2">
                 <div className="h-2 w-12 bg-orange-400 rounded-full"></div>
                 <div className="h-2 w-8 border border-orange-300 rounded-full"></div>
                 <div className="h-2 w-8 border border-orange-300 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Pear Icon Decor */}
          <div className="hidden md:absolute -bottom-6 -right-6 md:w-20 h-20 bg-blue-500 rounded-full md:flex items-center justify-center">
            <span className="text-3xl">🎓</span>
          </div>
        </div>
      </div>

      {/* Right Column: Content */}
      <div className="w-full md:w-1/2 space-y-6">
        <div className="flex items-center gap-2 text-blue-900">
          <Zap className="fill-blue-500 text-blue-500" size={24} />
          <span className="font-bold text-2xl">Next Gen Start</span>
        </div>

        <h1 className="text-5xl font-extrabold text-slate-900 leading-tight">
          From planning to classroom-ready at <span className="text-blue-900">lightning speed</span>
        </h1>

        <p className="text-lg text-slate-600 leading-relaxed">
          Seamlessly create and deliver full lesson packages, including lesson plans, 
          instructional materials, and assessments, faster than ever, all from one platform.
        </p>

        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckCircle2 className="text-emerald-500 mt-1 shrink-0" size={20} />
              <span className="text-slate-700 font-medium leading-snug">{feature}</span>
            </li>
          ))}
        </ul>

    
        <MyButton className="mt-4  hover:bg-lime-500! text-slate-900! font-bold py-4 px-8 rounded-full transition-colors shadow-md" href='/'> Request free access</MyButton>
      </div>
    </MyContainer>
  );
};

export default DistrictEdu;
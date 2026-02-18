import React from 'react';
import { FaLayerGroup } from 'react-icons/fa';
// Tree-shaking ensures only these specific icons are bundled
import { 
  LuBookOpen, 
  LuFileText, 

  LuVideo, 
  LuLightbulb, 
  LuPenTool, 
 
  LuArrowRight, 
  LuCheck
} from 'react-icons/lu';
import MyContainer from '../share/MyContainer';

const FEATURE_TAGS = [
  { label: 'Behavior Intervention Plan', icon: <LuFileText /> },
  { label: 'Vocabulary Passage Creator', icon: <LuBookOpen /> },
  { label: 'Multiple Choice Assessment', icon: <LuCheck /> },
  { label: 'Worksheet', icon: <LuFileText /> },
  { label: 'Lesson Plan', icon: <FaLayerGroup />, popular: true },
  { label: 'YouTube Questions', icon: <LuVideo /> },
  { label: 'Differentiated Explanations', icon: <LuLightbulb /> },
  { label: 'Writing Assignment', icon: <LuPenTool /> },
];

const PlanningSection = () => {
  return (
    <MyContainer className=" my-12 overflow-hidden rounded-[2.5rem] flex flex-col lg:flex-row min-h-150 bg-[#FDFBF0] shadow-xl">
      
      {/* Content Side */}
      <div className="flex-1 p-12 lg:p-20 flex flex-col justify-center">
        <h2 className="text-5xl lg:text-6xl font-extrabold text-[#1D3B31] leading-tight mb-6 tracking-tight">
          From planning to classroom-ready at <span className="block italic">lightning speed.</span>
        </h2>
        
        <p className="text-xl text-[#1D3B31]/80 leading-relaxed mb-10 max-w-lg">
          Pear Start is the only AI tool that helps teachers seamlessly create and deliver full lesson packages faster than ever.
        </p>

        <button className="group flex items-center gap-2 w-fit px-8 py-4 bg-[#C6F332] text-[#1D3B31] font-bold rounded-full border-2 border-[#1D3B31] hover:bg-[#1D3B31] hover:text-white transition-all duration-300">
          Learn more
          <LuArrowRight className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Tag Cloud Side */}
      <div className="flex-1 bg-[#E7F6FF] p-8 lg:p-12 relative overflow-hidden flex items-center justify-center">
        {/* Subtle background rotation for the "scattered" look */}
        <div className="flex flex-wrap gap-3 justify-center transform -rotate-2deg scale-105">
          {FEATURE_TAGS.map((tag, idx) => (
            <div 
              key={idx}
              className="flex items-center gap-3 bg-white px-5 py-3 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-white/50 hover:shadow-md transition-shadow cursor-default"
            >
              <span className="text-[#1D3B31] text-xl opacity-70">
                {tag.icon}
              </span>
              <span className="font-bold text-[#1D3B31] whitespace-nowrap">
                {tag.label}
              </span>
              {tag.popular && (
                <span className="text-[10px] bg-[#1D3B31] text-[#C6F332] px-2 py-1 rounded-full uppercase tracking-widest">
                  Popular
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </MyContainer>
  );
};

export default PlanningSection;
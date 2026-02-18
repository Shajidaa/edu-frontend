import React from 'react';

import FeatureSection from './FeatureSection';
import MyContainer from '../share/MyContainer';




export default function DistrictPractice() {
  return (
    <MyContainer className=" px-6 ">
      
      {/*  Practice Section */}
      <FeatureSection
        title="Next Gen Practice"
        subtitle="Create engaging, differentiated practice"
        description="Turn practice into play with ready-to-launch, standards-aligned content and paths for differentiation."
        items={[
          "Supercharge student progress toward mastery.",
          "Support differentiated practice in your district.",
          "Robust reporting helps drive real results.",
          "Empower teachers with time-saving features and content."
        ]}
        buttonText="Request a demo"
        imageSlot={
          <div className="relative w-full max-w-sm">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 rotate-2">
              <div className="bg-sky-100 p-3 rounded-lg mb-4 text-xs font-bold text-sky-800 flex justify-between">
                <span>TEXT RESPONSE</span>
                <span>☰</span>
              </div>
              <p className="text-slate-800 font-medium mb-4">La madre de tu padre es tu</p>
              <input disabled placeholder="Type a response" className="w-full p-3 rounded-md border border-slate-200 bg-slate-50" />
            </div>
            <div className="absolute -top-12 -right-8 w-48 h-32 bg-white rounded-2xl shadow-md -rotate-3 p-4 border border-slate-100 hidden sm:block">
               <div className="bg-yellow-400 w-8 h-4 rounded-sm mb-2" />
               <p className="font-bold text-xs">Unit 4 Vocab: La Familia</p>
            </div>
          </div>
        }
      />



 
    </MyContainer>
  );
}
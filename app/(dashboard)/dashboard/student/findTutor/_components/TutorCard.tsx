import React from 'react';
import { CheckCircle, Star } from 'lucide-react'; // Lucide icons look great with green themes
import Link from 'next/link';




const TutorCard = ({ tutor }: { tutor: 
    {
        name: string;
        
        image: string;
        profile: {
title: string;
   verified: boolean;
            rating: number;
            totalReviews: number;
            subjects:{
                name: string;
            }
        };
  
    }
 }) => {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white border border-emerald-100 hover:border-emerald-500 transition-all duration-300">
      {/* Profile Image & Header Area */}
      <div className="relative h-32 bg-emerald-50 w-full flex items-center justify-center">
        <img 
          className="w-24 h-24 rounded-full border-4 border-white shadow-md object-cover absolute -bottom-10"
          src={tutor.image} 
          alt={tutor.name} 
        />
      </div>

      <div className="pt-12 pb-6 px-6 text-center">
        {/* Name & Verification */}
        <div className="flex items-center justify-center gap-1 mb-1">
          <h2 className="text-xl font-bold text-slate-800">{tutor.name}</h2>
          {tutor.profile?.verified && (
            <CheckCircle className="w-5 h-5 text-red-500" fill="currentColor" />
          )}
        </div>

        {/* Professional Title */}
        <p className="text-emerald-700 font-medium text-sm mb-3">
          {tutor.profile?.title}
        </p>

        {/* Rating & Location Footer */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-100">
          <div className="flex items-center text-slate-600 text-sm">
            <Star className="w-4 h-4 text-yellow-500 mr-1" fill="currentColor" />
            <span className="font-semibold">{tutor.profile?.rating}</span>
            <span className="text-slate-400 ml-1">({tutor.profile?.totalReviews})</span>
          </div>
          
         
        </div>

        <Link href={`/`} className="w-full mt-5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 rounded-xl transition-colors">
          View Profile
        </Link>
      </div>
    </div>
  );
};

export default TutorCard;
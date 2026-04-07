"use client";

import  { useEffect, useState } from "react";
import CompetitionCard from "../components/CompetitionCard";
import MyContainer from "@/app/(after)/components/share/MyContainer";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { Competition } from "@/types";


export default function CompetitionsPage() {
  const [competitions, setCompetitions] = useState<Competition[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCompetitions = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/competitions`);
        const data = await response.json();
      
        setCompetitions(data);
      } catch (error) {
        console.error("Error fetching:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCompetitions();
  }, []);


  if (loading) return <div className="p-10 text-center min-h-screen text-emerald-600">Loading competitions...</div>;

  return (
    <MyContainer className=" flex flex-col lg:grid lg:grid-cols-12 gap-10 py-10 min-h-screen">
      {/* Main Content */}
      <div className="lg:col-span-8">
      <h1 className="text-2xl font-bold mb-6">All Coding Competitions</h1>
      
      {/* Practice Section */}
      <h2 className="text-emerald-600 font-bold mb-4 border-b pb-2">Practice</h2>
      {competitions ? (
        competitions
          .filter((c) => c.status === "practice")
          .map((comp) => (
            <CompetitionCard key={comp.id} comp={comp} />
          ))
      ) : (
        <p className="text-slate-500">No practice competitions available.</p>
      )}

      {/* Completed Section */}
      <h2 className="text-slate-400 font-bold mt-10 mb-4 border-b pb-2">Completed</h2>
      {competitions ? (
        competitions
          .filter((c) => c.status === "completed")
          .map((comp) => (
            <CompetitionCard key={comp.id} comp={comp} />
          ))
      ) : (
        <p className="text-slate-500">No completed competitions available.</p>
      )}
       </div>
        {/* Sidebar */}
      <div className="lg:col-span-4 space-y-6">
          {/* Sidebar Card 1 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 text-center shadow-sm">
             <div className="h-32 bg-rose-50 rounded-xl mb-4 flex items-center justify-center">
                <span className="text-rose-400 italic font-serif">Illustration Space</span>
             </div>
             <h4 className="font-bold text-slate-800">Play while you learn and win amazing prizes</h4>
             <p className="text-xs mb-2 text-slate-500 mt-2">Real-time leaderboard • Weekly awards</p>
             <Link href={'/quizzes'} className="mt-4 w-full bg-rose-500 text-white py-2 px-3 rounded-lg font-bold hover:bg-rose-600 transition-colors">
               Take a quiz now
             </Link>
          </div>

          {/* Sidebar Card 2 (Next Gen Specific) */}
          <div className="bg-emerald-600 p-6 rounded-2xl text-white relative overflow-hidden">
             <div className="relative z-10">
               <p className="text-emerald-100 text-xs font-bold uppercase mb-2">Next Gen Learning</p>
               <h4 className="text-xl font-bold leading-tight">Your key to winning hackathons & coding challenges</h4>
               <Link href={'/booking'} className="mt-6 bg-white text-emerald-700 px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2 mx-auto">
                 Try a free lesson <ChevronRight size={16}/>
               </Link>
             </div>
             {/* Decorative Background Circles */}
             <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-emerald-500 rounded-full opacity-50"></div>
          </div>
      </div>
        
     
    </MyContainer>
  );
}
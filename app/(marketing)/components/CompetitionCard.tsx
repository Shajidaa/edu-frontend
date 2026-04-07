import React from "react";
import { Calendar, GraduationCap, Trophy, Users } from "lucide-react";
import Link from "next/link";
import { Competition } from "@/types";
// interface Competition {
//   id: string;
//   title: string;
//   host: string;
//   time_info: string; 
//   team_size: string;  
//   grade_range: string; 
//   status: 'practice' | 'completed';
//   prize?: string | null;
// }
export default function CompetitionCard({ comp }: { comp: Competition }) {
  const isPractice = comp.status === 'practice';

  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-5 mb-4 bg-white border border-slate-200 rounded-xl hover:shadow-md transition-shadow">
      <div className="flex gap-4 w-full">
        <div className="w-16 h-16 bg-slate-100 rounded-lg flex items-center justify-center shrink-0">
           <Trophy className={isPractice ? "text-emerald-600" : "text-slate-400"} size={32} />
        </div>

        <div className="space-y-1">
          <h3 className="font-bold text-slate-800 text-lg">{comp.title}</h3>
          <p className="text-sm text-slate-500">Hosted by: <span className="font-medium text-slate-700">{comp.host}</span></p>
          
          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-xs text-slate-500">
            <span className="flex items-center gap-1"><Calendar size={14}/> {comp.time_info}</span>
            <span className="flex items-center gap-1"><Users size={14}/> {comp.team_size}</span>
            <span className="flex items-center gap-1"><GraduationCap size={14}/> Grade: {comp.grade_range}</span>
          </div>

          {comp.prize && (
            <div className="mt-2 inline-flex items-center gap-1.5 px-2 py-1 bg-emerald-50 text-emerald-700 rounded-md text-xs font-semibold">
              <Trophy size={12} /> {comp.prize}
            </div>
          )}
        </div>
      </div>

      <div className="mt-4 md:mt-0 w-full md:w-auto">
        <Link href={isPractice ? `/register` : `/competitions/${comp.id}`} className={`w-full text-nowrap md:w-40 py-2.5 px-4 rounded-lg font-bold transition-colors ${
          isPractice 
          ? "bg-emerald-600 text-white hover:bg-emerald-700 shadow-sm" 
          : "border-2 border-rose-500 text-rose-500 hover:bg-rose-50 font-semibold"
        }`}>
          {isPractice ? "Register & Start" : "View Competition"}
        </Link>
        {!isPractice && <p className="text-[10px] text-center mt-1 text-slate-400">Competition has ended</p>}
      </div>
    </div>
  );
}
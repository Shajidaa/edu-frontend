import React from 'react';
import { 
  Trophy, 
  Users, 
  Calendar, 
  ChevronRight, 
  ExternalLink,
  GraduationCap
} from 'lucide-react';

// --- Types ---
interface Competition {
  id: string;
  title: string;
  host: string;
  timeInfo: string;
  teamSize: string;
  grade: string;
  status: 'practice' | 'completed';
  prize?: string;
  image?: string;
}

// --- Mock Data ---
const competitions: Competition[] = [
  {
    id: '1',
    title: 'IOI Algorithms Preparation Guide',
    host: 'Codingal',
    timeInfo: 'Ends in: 41 days, 19 hrs',
    teamSize: '1 member',
    grade: '1-12',
    status: 'practice',
  },
  {
    id: '2',
    title: 'HPE CodeWars 2025',
    host: 'Hewlett Packard Enterprise',
    timeInfo: 'Ended at: 04:30 PM BST, Apr 13, 2025',
    teamSize: '1 member',
    grade: '8-12',
    status: 'completed',
    prize: 'Prizes worth INR 1,50,000'
  }
];

// --- Sub-Component: Competition Card ---
const CompetitionCard = ({ comp }: { comp: Competition }) => {
  const isPractice = comp.status === 'practice';

  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-5 mb-4 bg-white border border-slate-200 rounded-xl hover:shadow-md transition-shadow">
      <div className="flex gap-4 w-full">
        {/* Placeholder for Logo */}
        <div className="w-16 h-16 bg-slate-100 rounded-lg flex items-center justify-center shrink-0">
           <Trophy className={isPractice ? "text-emerald-600" : "text-slate-400"} size={32} />
        </div>

        <div className="space-y-1">
          <h3 className="font-bold text-slate-800 text-lg">{comp.title}</h3>
          <p className="text-sm text-slate-500">Hosted by: <span className="font-medium text-slate-700">{comp.host}</span></p>
          
          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-xs text-slate-500">
            <span className="flex items-center gap-1"><Calendar size={14}/> {comp.timeInfo}</span>
            <span className="flex items-center gap-1"><Users size={14}/> Team size: {comp.teamSize}</span>
            <span className="flex items-center gap-1"><GraduationCap size={14}/> Grade: {comp.grade}</span>
          </div>

          {comp.prize && (
            <div className="mt-2 inline-flex items-center gap-1.5 px-2 py-1 bg-emerald-50 text-emerald-700 rounded-md text-xs font-semibold">
              <Trophy size={12} /> {comp.prize}
            </div>
          )}
        </div>
      </div>

      <div className="mt-4 md:mt-0 w-full md:w-auto">
        <button className={`w-full md:w-40 py-2.5 px-4 rounded-lg font-bold transition-colors ${
          isPractice 
          ? "bg-emerald-600 text-white hover:bg-emerald-700 shadow-sm" 
          : "border-2 border-rose-500 text-rose-500 hover:bg-rose-50 font-semibold"
        }`}>
          {isPractice ? "Register & Start" : "View Competition"}
        </button>
        {!isPractice && <p className="text-[10px] text-center mt-1 text-slate-400">Competition has ended</p>}
      </div>
    </div>
  );
};

// --- Main Page Component ---
export default function CompetitionsPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: List */}
        <div className="lg:col-span-8">
          <h1 className="text-2xl font-bold text-slate-800 mb-6">All coding competitions, challenges & hackathons</h1>
          
          {/* Tabs */}
          <div className="flex gap-6 border-b border-slate-200 mb-8">
            <button className="pb-3 border-b-4 border-emerald-600 text-emerald-700 font-bold flex items-center gap-2">
              Practice <span className="bg-emerald-100 px-2 py-0.5 rounded text-xs text-emerald-700">2</span>
            </button>
            <button className="pb-3 text-slate-500 font-medium flex items-center gap-2">
              Completed <span className="bg-slate-200 px-2 py-0.5 rounded text-xs text-slate-600">58</span>
            </button>
          </div>

          {/* Section: Practice */}
          <section className="mb-10">
            <div className="flex items-center gap-2 mb-4">
               <div className="h-px bg-slate-200 flex-grow"></div>
               <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider bg-slate-50 px-2">Practice</span>
               <div className="h-px bg-slate-200 flex-grow"></div>
            </div>
            {competitions.filter(c => c.status === 'practice').map(comp => (
              <CompetitionCard key={comp.id} comp={comp} />
            ))}
          </section>

          {/* Section: Completed */}
          <section>
             <div className="flex items-center gap-2 mb-4">
               <div className="h-px bg-slate-200 flex-grow"></div>
               <span className="text-xs font-bold text-slate-400 uppercase tracking-wider bg-slate-50 px-2">Completed</span>
               <div className="h-px bg-slate-200 flex-grow"></div>
            </div>
            {competitions.filter(c => c.status === 'completed').map(comp => (
              <CompetitionCard key={comp.id} comp={comp} />
            ))}
          </section>
        </div>

        {/* Right Column: Sidebars */}
        <div className="lg:col-span-4 space-y-6">
          {/* Sidebar Card 1 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 text-center shadow-sm">
             <div className="h-32 bg-rose-50 rounded-xl mb-4 flex items-center justify-center">
                <span className="text-rose-400 italic font-serif">Illustration Space</span>
             </div>
             <h4 className="font-bold text-slate-800">Play while you learn and win amazing prizes</h4>
             <p className="text-xs text-slate-500 mt-2">Real-time leaderboard • Weekly awards</p>
             <button className="mt-4 w-full bg-rose-500 text-white py-2 rounded-lg font-bold hover:bg-rose-600 transition-colors">
               Take a quiz now
             </button>
          </div>

          {/* Sidebar Card 2 (Next Gen Specific) */}
          <div className="bg-emerald-600 p-6 rounded-2xl text-white relative overflow-hidden">
             <div className="relative z-10">
               <p className="text-emerald-100 text-xs font-bold uppercase mb-2">Next Gen Learning</p>
               <h4 className="text-xl font-bold leading-tight">Your key to winning hackathons & coding challenges</h4>
               <button className="mt-6 bg-white text-emerald-700 px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2 mx-auto">
                 Try a free lesson <ChevronRight size={16}/>
               </button>
             </div>
             {/* Decorative Background Circles */}
             <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-emerald-500 rounded-full opacity-50"></div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
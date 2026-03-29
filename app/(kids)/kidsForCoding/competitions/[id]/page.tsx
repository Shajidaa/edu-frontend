import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Trophy, Users, Clock } from "lucide-react";
import MyContainer from "@/app/(marketing)/components/share/MyContainer";
import { Competition } from "@/types";

// Dynamic route parameters interface
interface PageProps {
  params: Promise<{ id: string }>;
}


async function getCompetition(id: string): Promise<Competition | null> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/competitions/${id}`, {
 
      next: { revalidate: 60 }, 
    });

    if (!res.ok) return null;
    return res.json();
  } catch (error) {
    console.error(`[COMPETITION_FETCH_ERROR]: Failed to fetch ID ${id}`, error);
    return null;
  }
}

export default async function ViewCompetitionPage({ params }: PageProps) {
  const { id } = await params;
  const competition = await getCompetition(id);

  // Guard clause for missing data (renders the Next.js not-found.tsx page)
  if (!competition) {
    notFound();
  }

  // Determine status color variations safely
  const statusStyles = {
    practice: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
    completed: "bg-red-700 text-white ",
    active: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
  }[competition.status] || "bg-blue-100 text-blue-700";

  return (
    <MyContainer className="py-10 min-h-screen">
      {/* Breadcrumb Navigation */}
      <Link 
        href="/kidsForCoding/competitions" 
        className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-emerald-600 transition-colors mb-6 group"
      >
        <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
        Back to all competitions
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Main Content Area */}
        <article className="lg:col-span-8 space-y-6">
          <header className="space-y-4">
            <div className="flex items-center gap-3">
              <span className={`text-xs uppercase font-bold px-3 py-1 rounded-full ${statusStyles}`}>
                {competition.status}
              </span>
              
            </div>
            
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
              {competition.title || "Untitled Competition"}
            </h1>
          </header>

          {/* Metadata Quick-Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex flex-col items-center justify-center text-center p-2">
              <Trophy className="text-amber-500 mb-1" size={20} />
              <span className="text-xs text-slate-500">Prize Pool</span>
              <span className="text-sm font-bold text-slate-800 dark:text-slate-200">$500</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-2 border-l border-slate-100 dark:border-slate-800">
              <Users className="text-blue-500 mb-1" size={20} />
              <span className="text-xs text-slate-500">Participants</span>
              <span className="text-sm font-bold text-slate-800 dark:text-slate-200">1,240</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-2 border-l border-slate-100 dark:border-slate-800">
              <Calendar className="text-emerald-500 mb-1" size={20} />
              <span className="text-xs text-slate-500">Start Date</span>
              <span className="text-sm font-bold text-slate-800 dark:text-slate-200">Oct 12</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-2 border-l border-slate-100 dark:border-slate-800">
              <Clock className="text-purple-500 mb-1" size={20} />
              <span className="text-xs text-slate-500">Duration</span>
              <span className="text-sm font-bold text-slate-800 dark:text-slate-200">3 Hours</span>
            </div>
          </div>

          {/* Competition Body/Description */}
          <section className="prose prose-slate dark:prose-invert max-w-none bg-white dark:bg-slate-900 p-6 md:p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-4">About the Challenge</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              {/* Fallback text if description isn't mapped to API yet */}
              Welcome to the {competition.title}. This challenge tests your capabilities in algorithms, data structures, and optimized problem-solving. Solve all problems within the given timeframe to achieve a podium finish on our global leaderboard.
            </p>
            
            <h3 className="text-lg font-bold text-slate-800 dark:text-white mt-6 mb-2">Rules & Guidelines</h3>
            <ul className="text-slate-600 dark:text-slate-300 list-disc list-inside space-y-1">
              <li>Plagiarism will result in an immediate disqualification.</li>
              <li>You are allowed to use any programming language supported by our compiler.</li>
              <li>Scores are calculated based on accuracy and submission speed.</li>
            </ul>
          </section>
        </article>

        {/* Sidebar Actions */}
        <aside className="lg:col-span-4 space-y-6">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm top-6 sticky">
            <h3 className="font-bold text-slate-800 dark:text-white text-lg mb-2">Ready to Compete?</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
              Read the rules and click the button below to initialize your coding environment.
            </p>
            
            {competition.status === "practice" ? (
              <button className="w-full bg-emerald-600 text-white py-3 px-4 rounded-lg font-bold hover:bg-emerald-700 transition-colors shadow-sm shadow-emerald-200 dark:shadow-none">
                Start Practice Session
              </button>
            ) : competition.status === "completed" ? (
              <button className="w-full bg-slate-600 text-white py-3 px-4 rounded-lg font-bold cursor-not-allowed opacity-75" disabled>
                Competition Closed
              </button>
            ) : (
              <button className="w-full bg-rose-600 text-white py-3 px-4 rounded-lg font-bold hover:bg-rose-700 transition-colors">
                Enter Arena
              </button>
            )}
            
            {/* <div className="mt-4 text-center">
              <Link href="/leaderboard" className="text-sm text-emerald-600 hover:text-emerald-700 font-medium">
                View current standings
              </Link>
            </div> */}
          </div>
        </aside>
      </div>
    </MyContainer>
  );
}
import React from 'react';
import { 
  Users, Globe, Star, ShieldCheck, 
  Clock, BookOpen, PlayCircle, CheckCircle2,
  Blocks, Palette, MousePointer2, Wand2 
} from 'lucide-react';
import MyContainer from '@/app/(marketing)/components/share/MyContainer';

// Types for our Curriculum Cards
interface CourseCardProps {
  title: string;
  grades: string;
  activities: string;
  lessons: string;
  duration: string;
  outcomes: string[];
  imageUrl: string;
  skillLevel: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ 
  title, grades, activities, lessons, duration, outcomes, imageUrl, skillLevel 
}) => (
  <div className="flex flex-col md:flex-row bg-white border border-emerald-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow mb-6">
    <div className="relative w-full md:w-1/3 h-48 md:h-auto">
      <img src={imageUrl} alt={title} className="object-cover w-full h-full" />
      <div className="absolute top-4 left-4 bg-emerald-600 text-white px-3 py-1 rounded text-sm font-bold">{skillLevel}</div>
    </div>
    <div className="p-6 flex-1">
      <h3 className="text-xl font-bold text-slate-800 mb-3">{title}</h3>
      <div className="flex flex-wrap gap-3 mb-4 text-xs font-medium text-emerald-700">
        <span className="bg-emerald-50 px-2 py-1 rounded-full">🎓 {grades}</span>
        <span className="bg-emerald-50 px-2 py-1 rounded-full">🧩 {activities}</span>
        <span className="bg-emerald-50 px-2 py-1 rounded-full">📖 {lessons}</span>
        <span className="bg-emerald-50 px-2 py-1 rounded-full">🕒 {duration}</span>
      </div>
      <div className="mb-6">
        <p className="text-sm font-semibold text-slate-700 mb-2">What they&lsquo;ll create</p>
        <ul className="space-y-1">
          {outcomes.map((outcome, i) => (
            <li key={i} className="flex items-center text-sm text-slate-600">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2" /> {outcome}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex gap-4">
        <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">Book a free class</button>
        <button className="border border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-6 py-2 rounded-lg font-semibold transition-colors">View projects</button>
      </div>
    </div>
  </div>
);

export default function ScratchProgramming() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <MyContainer className=" px-4 py-12 flex flex-col lg:flex-row gap-12">
        
        {/* Left Column: Content */}
        <div className="flex-1">
          <nav className="text-sm text-emerald-600 font-medium mb-4">
            Codingal &gt; Courses &gt; <span className="text-slate-400">Scratch Programming</span>
          </nav>
          
          <h1 className="text-4xl font-extrabold text-slate-900 leading-tight mb-6">
            Unlock Creativity with <span className="text-emerald-600">Scratch Coding</span> for Young Innovators
          </h1>
          
          <p className="text-slate-600 mb-8 leading-relaxed">
            Scratch is the perfect foundation for coding. By snapping together colorful blocks, students learn the logic used by professional developers while creating their own animated stories, music, and interactive games.
            <span className="text-emerald-600 font-semibold cursor-pointer ml-1">Read More</span>
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 border-b border-slate-200 pb-8">
            <div>
              <p className="text-2xl font-bold text-slate-800">2 Million+</p>
              <p className="text-sm text-slate-500 font-medium">Projects Created</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-800">75+</p>
              <p className="text-sm text-slate-500 font-medium">Core Concepts</p>
            </div>
            <div className="flex flex-col">
              <span className="text-emerald-600 font-bold flex items-center gap-1">Kid Safe <ShieldCheck className="w-3 h-3 fill-current"/></span>
              <p className="text-sm text-slate-500 font-medium">100% Verified</p>
            </div>
            <div className="flex flex-col">
              <span className="text-emerald-500 font-bold flex items-center gap-1">Trustpilot <Star className="w-3 h-3 fill-current"/></span>
              <p className="text-sm text-slate-500 font-medium">TrustScore 4.8</p>
            </div>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">What is Scratch Programming?</h2>
            <p className="text-slate-600 mb-2">
              Developed by MIT, Scratch uses a drag-and-drop interface that removes the frustration of &lsquo;syntax errors.&lsquo; It allows kids to focus on the <strong>logic of coding</strong>—loops, variables, and if-then statements—through visual experimentation.
            </p>
            
            <button className="text-emerald-600 font-bold text-sm underline mt-2">Show more</button>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Scratch Learning Path</h2>
            
            <CourseCard 
              title="Scratch Junior: Interactive Storytelling"
              grades="Grade 1-3"
              activities="24+ Animated Projects"
              lessons="24 Lessons"
              duration="3 months"
              skillLevel="Beginner"
              imageUrl="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=400"
              outcomes={["Animate favorite characters", "Record and add custom sounds", "Sequence events and basic loops"]}
            />

            <CourseCard 
              title="Advanced Scratch: Game Design & Physics"
              grades="Grade 4-7"
              activities="36+ Complex Games"
              lessons="48 Lessons"
              duration="6 months"
              skillLevel="Intermediate"
              imageUrl="https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&q=80&w=400"
              outcomes={["Build multi-level platformer games", "Create gravity and velocity physics", "Design complex 'Boss' battle logic"]}
            />
          </section>
        </div>

        {/* Right Column: Sidebar */}
        <aside className="w-full lg:w-80">
          <div className="sticky top-8 bg-white rounded-2xl shadow-xl overflow-hidden border border-emerald-50">
            <div className="relative h-44 bg-slate-900 flex items-center justify-center">
              <img src="https://images.unsplash.com/photo-1596466138663-0975e638360b?auto=format&fit=crop&q=80&w=400" className="absolute inset-0 opacity-50 object-cover" alt="Kid coding scratch" />
              <PlayCircle className="w-16 h-16 text-emerald-400 z-10 cursor-pointer hover:scale-110 transition-transform" />
            </div>
            
            <div className="p-6">
              <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl font-bold mb-6 transition-colors shadow-lg shadow-emerald-200">
                Book a free trial
              </button>
              
              <p className="font-bold text-slate-800 mb-4 text-sm uppercase tracking-wide">Included in this course:</p>
              <ul className="space-y-4">
                {[
                  { icon: <Blocks className="w-5 h-5"/>, text: "Drag-and-drop block mastery" },
                  { icon: <Palette className="w-5 h-5"/>, text: "Custom Sprite and UI Design" },
                  { icon: <MousePointer2 className="w-5 h-5"/>, text: "Interactive Event Handling" },
                  { icon: <Wand2 className="w-5 h-5"/>, text: "Creative Problem Solving" },
                  { icon: <ShieldCheck className="w-5 h-5"/>, text: "MIT-inspired Curriculum" }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                    <span className="text-emerald-500">{item.icon}</span>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
      </MyContainer>
    </div>
  );
}
import React from 'react';
import { 
  Users, Globe, Star, ShieldCheck, 
  Clock, BookOpen, PlayCircle, CheckCircle2,
  Gamepad2, Trophy, Monitor, Layers, 
  
} from 'lucide-react';
import MyContainer from '@/app/(after)/components/share/MyContainer';
import Link from 'next/link';

// Types for our Curriculum Cards
interface CourseCardProps {
  title: string;
  grades: string;
  activities: string;
  lessons: string;
  duration: string;
  outcomes: string[];
  imageUrl: string;
  engine: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ 
  title, grades, activities, lessons, duration, outcomes, imageUrl, engine 
}) => (
  <div className="flex flex-col md:flex-row bg-white border border-emerald-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow mb-6">
    <div className="relative w-full md:w-1/3 h-48 md:h-auto">
      <img src={imageUrl} alt={title} className="object-cover w-full h-full" />
      <div className="absolute top-4 left-4 bg-emerald-600 text-white px-3 py-1 rounded text-sm font-bold">{engine}</div>
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
        <p className="text-sm font-semibold text-slate-700 mb-2">Learning outcomes</p>
        <ul className="space-y-1">
          {outcomes.map((outcome, i) => (
            <li key={i} className="flex items-center text-sm text-slate-600">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2" /> {outcome}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex gap-4">
        <Link href={'/booking'} className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">Try a free lesson</Link>
        <button className="border border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-6 py-2 rounded-lg font-semibold transition-colors">View curriculum</button>
      </div>
    </div>
  </div>
);

export default function GameDevelopmentLearning() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <MyContainer className=" px-4 py-12 flex flex-col lg:flex-row gap-12">
        
        {/* Left Column: Content */}
        <div className="flex-1">
          <nav className="text-sm text-emerald-600 font-medium mb-4">
            Codingal &gt; Courses &gt; <span className="text-slate-400">Game Development</span>
          </nav>
          
          <h1 className="text-4xl font-extrabold text-slate-900 leading-tight mb-6">
            Master Game Development with the Top <span className="text-emerald-600">Game Coding Courses</span> for Kids & Teens
          </h1>
          
          <p className="text-slate-600 mb-8 leading-relaxed">
            Stop playing games and start making them! Our Game Development courses guide students from basic logic to 3D world-building. Learn the physics, math, and storytelling behind the world&lsquo;s most popular games.
            <span className="text-emerald-600 font-semibold cursor-pointer ml-1">Read More</span>
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 border-b border-slate-200 pb-8">
            <div>
              <p className="text-2xl font-bold text-slate-800">800k+</p>
              <p className="text-sm text-slate-500 font-medium">Games Created</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-800">135+</p>
              <p className="text-sm text-slate-500 font-medium">Countries</p>
            </div>
            <div className="flex flex-col">
              <span className="text-emerald-600 font-bold flex items-center gap-1">User Rating <Star className="w-3 h-3 fill-current"/></span>
              <p className="text-sm text-slate-500 font-medium">4.8 / 5 stars</p>
            </div>
            <div className="flex flex-col">
              <span className="text-emerald-500 font-bold flex items-center gap-1">Trustpilot <Star className="w-3 h-3 fill-current"/></span>
              <p className="text-sm text-slate-500 font-medium">TrustScore 4.8</p>
            </div>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Why Game Design for kids?</h2>
            <p className="text-slate-600 mb-2">
              Game development is the ultimate stealth learning tool. It teaches complex geometry, physics, and variables while students build interactive worlds. It&lsquo;s where creativity meets high-level technical execution.
            </p>
            <button className="text-emerald-600 font-bold text-sm underline">Show more</button>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Our Game Dev Curriculum</h2>
            
            <CourseCard 
              title="Game Creator: Roblox & Scratch Mastery"
              grades="Grade 3-6"
              activities="40+ Activities"
              lessons="48 Lessons"
              duration="4-6 months"
              engine="Roblox/Lua"
              imageUrl="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=400"
              outcomes={["Build 3D Obby & Racing games", "Learn Lua Scripting fundamentals", "Master game physics and collisions"]}
            />

            <CourseCard 
              title="Elite Developer: Unity & C# Professional"
              grades="Grade 7-12"
              activities="30+ Complex Projects"
              lessons="48 Lessons"
              duration="6-8 months"
              engine="Unity/C#"
              imageUrl="https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=400"
              outcomes={["Build 3D First-Person Shooters", "Advanced C# programming skills", "Export games to PC, Web, and Mobile"]}
            />
          </section>
        </div>

        {/* Right Column: Sidebar */}
        <aside className="w-full lg:w-80">
          <div className="sticky top-8 bg-white rounded-2xl shadow-xl overflow-hidden border border-emerald-50">
            <div className="relative h-44 bg-slate-900 flex items-center justify-center">
              <img src="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=400" className="absolute inset-0 opacity-50 object-cover" alt="Game design preview" />
              <PlayCircle className="w-16 h-16 text-emerald-400 z-10 cursor-pointer hover:scale-110 transition-transform" />
            </div>
            
            <div className="p-6">
              <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl font-bold mb-6 transition-colors shadow-lg shadow-emerald-200">
                Start building today
              </button>
              
              <p className="font-bold text-slate-800 mb-4 text-sm uppercase tracking-wide">Course Perks:</p>
              <ul className="space-y-4">
                {[
                  { icon: <Gamepad2 className="w-5 h-5"/>, text: "Build 10+ playable games" },
                  { icon: <Trophy className="w-5 h-5"/>, text: "Enter global game jams" },
                  { icon: <Monitor className="w-5 h-5"/>, text: "3D Asset Design & Animation" },
                  { icon: <Layers className="w-5 h-5"/>, text: "Advanced Level Design" },
                  { icon: <ShieldCheck className="w-5 h-5"/>, text: "Certified Game Developer badge" }
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
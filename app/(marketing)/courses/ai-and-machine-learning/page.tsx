import React from 'react';
import Image from 'next/image';
import { 
  Users, Globe, Star, ShieldCheck, 
  Clock, BookOpen, PlayCircle, CheckCircle2 
} from 'lucide-react';
import MyContainer from '@/app/(student)/components/share/MyContainer';
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
}

const CourseCard: React.FC<CourseCardProps> = ({ 
  title, grades, activities, lessons, duration, outcomes, imageUrl 
}) => (
  <div className="flex flex-col md:flex-row bg-white border border-emerald-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow mb-6">
    <div className="relative w-full md:w-1/3 h-48 md:h-auto">
      <img src={imageUrl} alt={title} className="object-cover w-full h-full" />
      <div className="absolute top-4 left-4 bg-emerald-600 text-white px-3 py-1 rounded text-sm font-bold">AI</div>
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

export default function AiLearning() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <MyContainer className=" px-4 py-12 flex flex-col lg:flex-row gap-12">
        
        {/* Left Column: Content */}
        <div className="flex-1">
          <nav className="text-sm text-emerald-600 font-medium mb-4">
            Codingal &gt; Courses &gt; <span className="text-slate-400">AI and Machine Learning</span>
          </nav>
          
          <h1 className="text-4xl font-extrabold text-slate-900 leading-tight mb-6">
            Learn Artificial Intelligence with the Top <span className="text-emerald-600">ML and AI Courses</span> for Kids & Teens
          </h1>
          
          <p className="text-slate-600 mb-8 leading-relaxed">
            Our AI and Machine Learning courses introduce the exciting world of AI to students in grades 3-12. 
            Through engaging, hands-on projects, kids explore real-life applications of AI! 
            <span className="text-emerald-600 font-semibold cursor-pointer ml-1">Read More</span>
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 border-b border-slate-200 pb-8">
            <div>
              <p className="text-2xl font-bold text-slate-800">1 Million+</p>
              <p className="text-sm text-slate-500 font-medium">Students</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-800">135+</p>
              <p className="text-sm text-slate-500 font-medium">Countries</p>
            </div>
            <div className="flex flex-col">
              <span className="text-emerald-600 font-bold flex items-center gap-1">Google <Star className="w-3 h-3 fill-current"/></span>
              <p className="text-sm text-slate-500 font-medium">4.6 / 5 stars</p>
            </div>
            <div className="flex flex-col">
              <span className="text-emerald-500 font-bold flex items-center gap-1">Trustpilot <Star className="w-3 h-3 fill-current"/></span>
              <p className="text-sm text-slate-500 font-medium">TrustScore 4.8</p>
            </div>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">What is AI for kids?</h2>
            <p className="text-slate-600 mb-2">
              AI, or Artificial Intelligence, creates machines that think and learn like humans. It processes information, 
              makes decisions, and adapts to new situations—just like our brains.
            </p>
            <button className="text-emerald-600 font-bold text-sm underline">Show more</button>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Our AI class curriculum</h2>
            
            <CourseCard 
              title="AI Genius: ChatGPT, AI-powered Apps & Games"
              grades="Grade 3-7"
              activities="48+ Activities"
              lessons="48 Lessons"
              duration="4-6 months"
              imageUrl="https://images.unsplash.com/photo-1675271591211-126ad9cc1433?auto=format&fit=crop&q=80&w=400"
              outcomes={["Create AI Games and Apps", "Build Chatbots and AI Models", "Train AI to Recognize and Respond"]}
            />

            <CourseCard 
              title="AI Expert - Hands-On AI, LLMs & Python"
              grades="Grade 8-12"
              activities="48+ Activities"
              lessons="48 Lessons"
              duration="4-6 months"
              imageUrl="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400"
              outcomes={["Build AI applications with APIs", "Develop AI-powered tools", "Master AI techniques like NLP"]}
            />
          </section>
        </div>

        {/* Right Column: Sidebar */}
        <aside className="w-full lg:w-80">
          <div className="sticky top-8 bg-white rounded-2xl shadow-xl overflow-hidden border border-emerald-50">
            <div className="relative h-44 bg-slate-900 flex items-center justify-center">
              <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=400" className="absolute inset-0 opacity-50 object-cover" alt="Video preview" />
              <PlayCircle className="w-16 h-16 text-emerald-400 z-10 cursor-pointer hover:scale-110 transition-transform" />
            </div>
            
            <div className="p-6">
              <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-xl font-bold mb-6 transition-colors shadow-lg shadow-emerald-200">
                Try a free lesson
              </button>
              
              <p className="font-bold text-slate-800 mb-4 text-sm uppercase tracking-wide">This course includes:</p>
              <ul className="space-y-4">
                {[
                  { icon: <Users className="w-5 h-5"/>, text: "48 live private 1-on-1 sessions" },
                  { icon: <Globe className="w-5 h-5"/>, text: "Learn live with expert instructors" },
                  { icon: <BookOpen className="w-5 h-5"/>, text: "8 detailed modules" },
                  { icon: <ShieldCheck className="w-5 h-5"/>, text: "Stem.org accredited certificate" },
                  { icon: <Clock className="w-5 h-5"/>, text: "Lifetime access to content" }
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
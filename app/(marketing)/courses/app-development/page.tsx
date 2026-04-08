import React from 'react';
import { 
  Users, Globe, Star, ShieldCheck, 
  Clock, BookOpen, PlayCircle, CheckCircle2,
  Smartphone, Code2, Layout, Zap, 
  Link
} from 'lucide-react';
import MyContainer from '@/app/(student)/components/share/MyContainer';

// Types for our Curriculum Cards
interface CourseCardProps {
  title: string;
  grades: string;
  activities: string;
  lessons: string;
  duration: string;
  outcomes: string[];
  imageUrl: string;
  platform: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ 
  title, grades, activities, lessons, duration, outcomes, imageUrl, platform 
}) => (
  <div className="flex flex-col md:flex-row bg-white border border-blue-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow mb-6">
    <div className="relative w-full md:w-1/3 h-48 md:h-auto">
      <img src={imageUrl} alt={title} className="object-cover w-full h-full" />
      <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded text-sm font-bold">{platform}</div>
    </div>
    <div className="p-6 flex-1">
      <h3 className="text-xl font-bold text-slate-800 mb-3">{title}</h3>
      <div className="flex flex-wrap gap-3 mb-4 text-xs font-medium text-green-700">
        <span className="bg-green-50 px-2 py-1 rounded-full">🎓 {grades}</span>
        <span className="bg-green-50 px-2 py-1 rounded-full">🧩 {activities}</span>
        <span className="bg-green-50 px-2 py-1 rounded-full">📖 {lessons}</span>
        <span className="bg-green-50 px-2 py-1 rounded-full">🕒 {duration}</span>
      </div>
      <div className="mb-6">
        <p className="text-sm font-semibold text-slate-700 mb-2">Learning outcomes</p>
        <ul className="space-y-1">
          {outcomes.map((outcome, i) => (
            <li key={i} className="flex items-center text-sm text-slate-600">
              <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" /> {outcome}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex gap-4">
        <Link href={'/booking'} className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">Try a free lesson</Link>
        <button className="border border-green-600 text-green-600 hover:bg-green-50 px-6 py-2 rounded-lg font-semibold transition-colors">View curriculum</button>
      </div>
    </div>
  </div>
);

export default function AppDevelopmentLearning() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <MyContainer className=" px-4 py-12 flex flex-col lg:flex-row gap-12">
        
        {/* Left Column: Content */}
        <div className="flex-1">
          <nav className="text-sm text-green-600 font-medium mb-4">
            Codingal &gt; Courses &gt; <span className="text-slate-400">Mobile App Development</span>
          </nav>
          
          <h1 className="text-4xl font-extrabold text-slate-900 leading-tight mb-6">
            Master Mobile App Development with the Best <span className="text-green-600">Coding Courses</span> for Kids & Teens
          </h1>
          
          <p className="text-slate-600 mb-8 leading-relaxed">
            Turn your screen time into build time. Our App Development courses teach students in grades 1-12 how to design, code, and publish their own professional mobile apps.
            <span className="text-green-600 font-semibold cursor-pointer ml-1">Read More</span>
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 border-b border-slate-200 pb-8">
            <div>
              <p className="text-2xl font-bold text-slate-800">500k+</p>
              <p className="text-sm text-slate-500 font-medium">Apps Built</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-800">135+</p>
              <p className="text-sm text-slate-500 font-medium">Countries</p>
            </div>
            <div className="flex flex-col">
              <span className="text-green-600 font-bold flex items-center gap-1">App Store <Star className="w-3 h-3 fill-current"/></span>
              <p className="text-sm text-slate-500 font-medium">4.9 / 5 Rating</p>
            </div>
            <div className="flex flex-col">
              <span className="text-green-500 font-bold flex items-center gap-1">Trustpilot <Star className="w-3 h-3 fill-current"/></span>
              <p className="text-sm text-slate-500 font-medium">TrustScore 4.8</p>
            </div>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Why learn App Development?</h2>
            <p className="text-slate-600 mb-2">
              App development combines logic with creativity. Students learn UI/UX design, problem-solving, and the architecture behind the tools we use every day. From simple utility apps to complex social networks, the possibilities are endless.
            </p>
            <button className="text-green-600 font-bold text-sm underline">Show more</button>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Our App Development Curriculum</h2>
            
            <CourseCard 
              title="Junior App Creator: Block-Based Coding"
              grades="Grade 1-4"
              activities="36+ Projects"
              lessons="48 Lessons"
              duration="3-5 months"
              platform="Thunkable"
              imageUrl="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=400"
              outcomes={["Design mobile UI layouts", "Build functional games for iOS/Android", "Understand logic and event-handling"]}
            />

            <CourseCard 
              title="Pro Developer: React Native & Flutter"
              grades="Grade 8-12"
              activities="50+ Activities"
              lessons="48 Lessons"
              duration="6 months"
              platform="Cross-Platform"
              imageUrl="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=400"
              outcomes={["Build professional apps using APIs", "Publish apps to Google Play Store", "Master JavaScript and state management"]}
            />
          </section>
        </div>

        {/* Right Column: Sidebar */}
        <aside className="w-full lg:w-80">
          <div className="sticky top-8 bg-white rounded-2xl shadow-xl overflow-hidden border border-blue-50">
            <div className="relative h-44 bg-slate-900 flex items-center justify-center">
              <img src="https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&q=80&w=400" className="absolute inset-0 opacity-50 object-cover" alt="Video preview" />
              <PlayCircle className="w-16 h-16 text-blue-400 z-10 cursor-pointer hover:scale-110 transition-transform" />
            </div>
            
            <div className="p-6">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-bold mb-6 transition-colors shadow-lg shadow-blue-200">
                Book a free trial
              </button>
              
              <p className="font-bold text-slate-800 mb-4 text-sm uppercase tracking-wide">This program includes:</p>
              <ul className="space-y-4">
                {[
                  { icon: <Smartphone className="w-5 h-5"/>, text: "Mobile app publishing support" },
                  { icon: <Code2 className="w-5 h-5"/>, text: "Portfolio of 10+ live apps" },
                  { icon: <Layout className="w-5 h-5"/>, text: "UI/UX design principles" },
                  { icon: <ShieldCheck className="w-5 h-5"/>, text: "Industry-recognized certificate" },
                  { icon: <Zap className="w-5 h-5"/>, text: "Hackathon participation" }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                    <span className="text-blue-500">{item.icon}</span>
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
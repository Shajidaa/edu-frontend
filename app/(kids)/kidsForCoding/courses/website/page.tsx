import React from 'react';
import { 
  Users, Globe, Star, ShieldCheck, 
  Clock, BookOpen, PlayCircle, CheckCircle2,
  Layout, ScreenShare, Share2, MousePointerClick 
} from 'lucide-react';
import MyContainer from '@/app/(marketing)/components/share/MyContainer';
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
  stack: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ 
  title, grades, activities, lessons, duration, outcomes, imageUrl, stack 
}) => (
  <div className="flex flex-col md:flex-row bg-white border border-emerald-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow mb-6">
    <div className="relative w-full md:w-1/3 h-48 md:h-auto">
      <img src={imageUrl} alt={title} className="object-cover w-full h-full" />
      <div className="absolute top-4 left-4 bg-emerald-600 text-white px-3 py-1 rounded text-sm font-bold">{stack}</div>
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
        <Link href={'/kidsForCoding/booking'} className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">Launch a free lesson</Link>
        <button className="border border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-6 py-2 rounded-lg font-semibold transition-colors">View student sites</button>
      </div>
    </div>
  </div>
);

export default function WebsiteLearning() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <MyContainer className=" px-4 py-12 flex flex-col lg:flex-row gap-12">
        
        {/* Left Column: Content */}
        <div className="flex-1">
          <nav className="text-sm text-emerald-600 font-medium mb-4">
            Codingal &gt; Courses &gt; <span className="text-slate-400">Web Development</span>
          </nav>
          
          <h1 className="text-4xl font-extrabold text-slate-900 leading-tight mb-6">
            Build the Future Web with <span className="text-emerald-600">HTML, CSS & JS Courses</span> for Kids
          </h1>
          
          <p className="text-slate-600 mb-8 leading-relaxed">
            From personal portfolios to interactive web apps, our Web Development courses teach students how to build and host their own corner of the internet. Learn the professional tools used by developers at Google and Amazon.
            <span className="text-emerald-600 font-semibold cursor-pointer ml-1">Read More</span>
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 border-b border-slate-200 pb-8">
            <div>
              <p className="text-2xl font-bold text-slate-800">300k+</p>
              <p className="text-sm text-slate-500 font-medium">Sites Published</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-800">135+</p>
              <p className="text-sm text-slate-500 font-medium">Countries</p>
            </div>
            <div className="flex flex-col">
              <span className="text-emerald-600 font-bold flex items-center gap-1">Live Coding <Globe className="w-3 h-3"/></span>
              <p className="text-sm text-slate-500 font-medium">1-on-1 Mentorship</p>
            </div>
            <div className="flex flex-col">
              <span className="text-emerald-500 font-bold flex items-center gap-1">Trustpilot <Star className="w-3 h-3 fill-current"/></span>
              <p className="text-sm text-slate-500 font-medium">TrustScore 4.8</p>
            </div>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Why learn Web Development?</h2>
            <p className="text-slate-600 mb-4">
              Web development is the most visible form of coding. It teaches students &rdquo;Responsive Design&rdquo;—making things look good on phones, tablets, and PCs—and introduces them to the global architecture of the cloud.
            </p>
            
            <button className="text-emerald-600 font-bold text-sm underline mt-2">Show more</button>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Our Web Design Curriculum</h2>
            
            <CourseCard 
              title="Web Foundations: HTML & CSS Art"
              grades="Grade 5-8"
              activities="30+ Web Projects"
              lessons="48 Lessons"
              duration="4 months"
              stack="HTML5 / CSS3"
              imageUrl="https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=400"
              outcomes={["Design personal blog layouts", "Master CSS styling and animations", "Understand SEO and Web accessibility"]}
            />

            <CourseCard 
              title="Full-Stack Starter: Dynamic JS Apps"
              grades="Grade 9-12"
              activities="25+ Interactive Apps"
              lessons="48 Lessons"
              duration="6 months"
              stack="JavaScript / React"
              imageUrl="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=400"
              outcomes={["Build interactive web applications", "Connect to real-time APIs", "Deploy live websites to the cloud"]}
            />
          </section>
        </div>

        {/* Right Column: Sidebar */}
        <aside className="w-full lg:w-80">
          <div className="sticky top-8 bg-white rounded-2xl shadow-xl overflow-hidden border border-emerald-50">
            <div className="relative h-44 bg-slate-900 flex items-center justify-center">
              <img src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=400" className="absolute inset-0 opacity-50 object-cover" alt="Web dev preview" />
              <PlayCircle className="w-16 h-16 text-emerald-400 z-10 cursor-pointer hover:scale-110 transition-transform" />
            </div>
            
            <div className="p-6">
              <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl font-bold mb-6 transition-colors shadow-lg shadow-emerald-200">
                Start your first site
              </button>
              
              <p className="font-bold text-slate-800 mb-4 text-sm uppercase tracking-wide">Course Includes:</p>
              <ul className="space-y-4">
                {[
                  { icon: <Layout className="w-5 h-5"/>, text: "UI/UX Design Frameworks" },
                  { icon: <ScreenShare className="w-5 h-5"/>, text: "Responsive Design (Mobile First)" },
                  { icon: <Share2 className="w-5 h-5"/>, text: "Domain Hosting & Deployment" },
                  { icon: <MousePointerClick className="w-5 h-5"/>, text: "Event-Driven Programming" },
                  { icon: <ShieldCheck className="w-5 h-5"/>, text: "Web Developer Portfolio" }
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
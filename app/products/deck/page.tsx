import React from 'react';
import { HiLightningBolt, HiCursorClick, HiChartBar, HiOutlineSparkles } from 'react-icons/hi';

// Modular Feature Component for text blocks
const FeatureBlock = ({ title, description }:{ title: string, description: string }) => (
  <div className="mb-10">
    <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
    <p className="text-slate-600 leading-relaxed max-w-lg">{description}</p>
  </div>
);

// Card Component for the Content Orchard section
const LessonCard = ({ gradeRange, title, image }:{ gradeRange: string, title: string, image: string }) => (
  <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden flex flex-col h-full hover:shadow-md transition-shadow">
    <div className="h-48 overflow-hidden bg-slate-100">
      <img src={image} alt={title} className="w-full h-full object-cover" />
    </div>
    <div className="p-5 grow">
      <span className="inline-block bg-slate-900 text-white text-[10px] font-bold px-2 py-1 rounded mb-3">
        GRADES {gradeRange}
      </span>
      <h4 className="text-lg font-bold text-slate-900 leading-tight">{title}</h4>
    </div>
  </div>
);

export default function ProductDeck() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      
      {/* Hero Section */}
      <section className="bg-[#C7FF00] pt-16 pb-0 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-t-3xl flex flex-col md:flex-row overflow-hidden shadow-xl">
            {/* Hero Content */}
            <div className="md:w-1/2 p-10 lg:p-16">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-[#C7FF00] rounded-lg flex items-center justify-center">
                  <HiCursorClick className="text-slate-900" size={20} />
                </div>
                <span className="font-bold text-xl tracking-tight">Pear Deck</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
                Interactive lessons for active learning.
              </h1>
              <p className="text-slate-600 text-lg mb-8">
                Pear Deck is the teacher-favorite instructional tool that helps create and deliver interactive lessons on any topic as part of the Pear Deck Learning platform.
              </p>
              <div className="flex flex-wrap gap-6">
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase mb-2">Administrators:</p>
                  <button className="bg-orange-400 hover:bg-orange-500 text-slate-900 font-bold py-3 px-6 rounded-full transition-colors shadow-sm">
                    Request a demo
                  </button>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase mb-2">Educators:</p>
                  <button className="border-2 border-slate-900 hover:bg-slate-900 hover:text-white text-slate-900 font-bold py-3 px-6 rounded-full transition-all">
                    Sign up for free
                  </button>
                </div>
              </div>
            </div>
            {/* Hero Image Placeholder */}
            <div className="md:w-1/2 bg-slate-100 relative min-h-[300px]">
              <img 
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop" 
                alt="Interactive Classroom" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Section */}
      <section className="bg-[#FFFDF6] py-24 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-16">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-extrabold mb-6">Student engagement with real-time feedback</h2>
            <p className="text-slate-600 mb-10 text-lg">
              Pear Deck makes it easy to create active, collaborative learning environments.
            </p>
            
            <FeatureBlock 
              title="Increase engagement and participation"
              description="Watch classroom engagement and participation soar with dynamic, inclusive, and collaborative learning experiences."
            />
            
            <FeatureBlock 
              title="Provide real-time student feedback"
              description="Assess understanding on the spot, foster personalized feedback loops, and craft tailored learning experiences for every student."
            />

            <button className="bg-[#C7FF00] hover:bg-[#b0e600] text-slate-900 font-extrabold py-3 px-8 rounded-full shadow-md transition-all">
              Request a demo
            </button>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop" 
              className="rounded-2xl shadow-lg" 
              alt="Real-time feedback"
            />
          </div>
        </div>
      </section>

      {/* Content Prep Section */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <span className="inline-block bg-orange-400 text-slate-900 text-[10px] font-black px-2 py-0.5 rounded mb-4">NEW!</span>
            <h2 className="text-4xl font-extrabold mb-6">Hours of content without hours of prep</h2>
            <p className="text-slate-600 mb-10 text-lg">
              Time-saving tools made for teachers, with teachers.
            </p>
            
            <FeatureBlock 
              title="Instant lesson packages"
              description="Generate a full package of customizable lessons, practice sets, and tests on any topic, differentiated for multiple student groups, in under a minute."
            />
            
            <FeatureBlock 
              title="Content converter"
              description="Upload years of existing materials and automatically convert them into interactive lessons, engaging practice sets, and trackable assessments."
            />

            <button className="bg-[#C7FF00] hover:bg-[#b0e600] text-slate-900 font-extrabold py-3 px-8 rounded-full shadow-md transition-all">
              Request a demo
            </button>
          </div>
          <div className="md:w-1/2">
            <div className="relative p-8 bg-blue-50 rounded-3xl">
              <img 
                src="https://images.unsplash.com/photo-1454165833762-010240a74148?q=80&w=800&auto=format&fit=crop" 
                className="rounded-xl shadow-xl" 
                alt="Content preparation"
              />
              <HiOutlineSparkles className="absolute -top-4 -right-4 text-orange-400" size={60} />
            </div>
          </div>
        </div>
      </section>

      {/* Content Orchard Section */}
      <section className="bg-[#D9EFFF] py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-extrabold mb-6">1000+ Math and ELA certified content lessons</h2>
              <p className="text-slate-700 text-lg">
                Find what you need faster in the Content Orchard, including more than 1,000 certified math and ELA lessons for grades 2-12, standards-aligned content, customizable templates, quick-start activities, and so much more.
              </p>
            </div>
            <button className="bg-orange-400 hover:bg-orange-500 text-slate-900 font-bold py-3 px-6 rounded-full shadow-sm whitespace-nowrap">
              Visit Content Orchard
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <LessonCard 
              gradeRange="3-12" 
              title="Certified English Language Arts Lessons" 
              image="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=600&auto=format&fit=crop"
            />
            <LessonCard 
              gradeRange="3-12" 
              title="Certified Math Lessons" 
              image="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=600&auto=format&fit=crop"
            />
            <LessonCard 
              gradeRange="2-6" 
              title="Google's Be Internet Awesome: Share With Care" 
              image="https://images.unsplash.com/photo-1588702547919-26089e690cee?q=80&w=600&auto=format&fit=crop"
            />
          </div>
        </div>
      </section>

    </div>
  );
}
import React from 'react';
import { HiLightningBolt, HiCheckCircle, HiCalendar, HiShieldCheck } from 'react-icons/hi';
import { BiRocket } from 'react-icons/bi';

// Reusable Feature Component
const FeatureItem = ({ icon: Icon, title, description, iconColor = "text-green-600" }: { icon: React.ComponentType<{ size: number }>, title: string, description: string, iconColor?: string }) => (
  <div className="flex gap-4 items-start mb-8">
    <div className={`p-2 rounded-full bg-white shadow-sm ${iconColor}`}>
      <Icon size={24} />
    </div>
    <div>
      <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-600 leading-relaxed max-w-md">{description}</p>
    </div>
  </div>
);

export default function ProductStart() {
  return (
    <div className="min-h-screen font-sans antialiased text-slate-900">
      
      {/* Hero Section */}
      <section className="bg-blue-500 pt-20 pb-0 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          {/* Hero Text */}
          <div className="lg:w-1/2 bg-white p-10 rounded-t-3xl lg:rounded-3xl shadow-2xl z-10">
            <div className="flex items-center gap-2 text-blue-600 font-bold mb-4">
              <HiLightningBolt size={24} />
              <span className="tracking-tight text-xl">Pear Start</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
              From planning to classroom-ready at <span className="text-blue-600">lightning speed.</span>
            </h1>
            <p className="text-slate-600 text-lg mb-8">
              Pear Start is the only AI tool that helps teachers seamlessly create and deliver full lesson packages, 
              including lesson plans, instructional materials, and assessments, faster than ever, all from one platform.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex flex-col">
                <span className="text-xs font-bold text-slate-400 mb-2 uppercase">Administrators:</span>
                <button className="bg-orange-400 hover:bg-orange-500 text-slate-900 font-bold py-3 px-6 rounded-full transition-all">
                  Request free access
                </button>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-slate-400 mb-2 uppercase">Educators:</span>
                <button className="border-2 border-slate-900 hover:bg-slate-900 hover:text-white text-slate-900 font-bold py-3 px-6 rounded-full transition-all">
                  Sign up for free
                </button>
              </div>
            </div>
          </div>

          {/* Hero Image / UI Preview */}
          <div className="lg:w-1/2 relative">
            <img 
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop" 
              alt="Dashboard Preview" 
              className="rounded-xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500"
            />
            {/* Abstract decorative element to mimic the original screenshot's floating tags */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-white/20 blur-3xl rounded-full" />
          </div>
        </div>
      </section>

      {/* Feature Section 1 */}
      <section className="bg-[#FFFDF6] py-24 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2 flex justify-center">
             <img 
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop" 
                className="w-80 h-80 object-cover rounded-2xl shadow-lg"
                alt="Teacher planning"
             />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-extrabold mb-8">Plan, practice, and prep — all in one place</h2>
            <p className="text-slate-600 mb-10 text-lg">
              Unlike other tools, Pear Start doesn&apos;t stop at creating a first draft. We help you plan and deliver top-quality full lesson packages from top to bottom.
            </p>
            
            <FeatureItem 
              icon={HiCheckCircle}
              title="Ready-to-teach lesson packages"
              description="Get more than suggestions; get help planning, creating, customizing, and delivering high-quality lesson plans, instructional materials, practice sets, assessments, and so much more."
            />
            
            <FeatureItem 
              icon={BiRocket}
              title="A time-saving transformation"
              description="Instantly transform standards and existing materials into high-quality, classroom-ready content. It's not magic, it's the power of Pear Start."
            />

            <button className="mt-4 bg-[#C7FF00] hover:bg-[#b0e600] text-slate-900 font-extrabold py-3 px-8 rounded-full shadow-md transition-all">
              Request free access
            </button>
          </div>
        </div>
      </section>

      {/* Feature Section 2 */}
      <section className="bg-white py-24 px-6 border-t border-slate-100">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-16">
          <div className="md:w-1/2 flex justify-center">
            <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop" 
                className="w-80 h-80 object-cover rounded-2xl shadow-lg"
                alt="Productivity"
             />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-extrabold mb-8 leading-tight">More time teaching, less on your to-do list</h2>
            <p className="text-slate-600 mb-10 text-lg">
              Pear Start streamlines the everyday tasks that take time away from teaching so you can be in front of students, not your computer screen.
            </p>

            <FeatureItem 
              icon={HiCalendar}
              title="Say goodbye to Sunday stress"
              description="Stop fretting over Monday mornings. Pear Start's 40+ AI-powered tools fast-track administrative and communication tasks so you start the week feeling ahead of the curve."
              iconColor="text-blue-600"
            />

            <FeatureItem 
              icon={HiShieldCheck}
              title="A one-stop solution for schools"
              description="Because Pear Start works with the entire Pear Deck Learning platform, you can tick off your to-do list faster than students sprinting for the door after the Friday bell."
              iconColor="text-teal-600"
            />

            <button className="mt-4 bg-[#C7FF00] hover:bg-[#b0e600] text-slate-900 font-extrabold py-3 px-8 rounded-full shadow-md transition-all">
              Request free access
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
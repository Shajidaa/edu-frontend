"use client";

import { InlineWidget } from "react-calendly";
import { HiStar, HiCheckCircle, HiPhone, HiClock, HiArrowRight } from 'react-icons/hi';
import { FaQuoteLeft } from 'react-icons/fa';
import MyContainer from '@/app/(after)/components/share/MyContainer';
import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const grades = Array.from({ length: 12 }, (_, i) => `Grade ${i + 1}`);

function BookingFlow() {
  const [grade, setGrade] = useState("Grade 1");
  const [currentTime, setCurrentTime] = useState("");
  // স্টেপ ট্র্যাক করার জন্য স্টেট (1 = Google Form, 2 = Calendly Booking)
  const [currentStep, setCurrentStep] = useState(1);

  const searchParams = useSearchParams();
  const selectedCourse = searchParams.get("course"); 
  
  // সময় আপডেট করার ইফেক্ট
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }));
    };

    updateTime();
    const timer = setInterval(updateTime, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <MyContainer className="grid grid-cols-1 lg:grid-cols-12 gap-12">
      
        {/* LEFT COLUMN: Testimonial Card (সবসময় ফিক্সড থাকবে) */}
        <div className="lg:col-span-4 space-y-6">
          <Link href="/" className="text-sm text-emerald-600 font-bold mb-4 inline-flex items-center gap-1">
            <span className="text-lg">←</span> Back to courses
          </Link>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative">
            <FaQuoteLeft className="text-emerald-100 text-6xl absolute top-6 left-6 z-0 opacity-50" />
            <div className="relative z-10">
              <p className="text-lg font-medium text-slate-700 leading-relaxed mb-8">
                The custom is able courses at next gen learning give my child a real advantage: 
                academically, socially, and in technology. Highly recommended!
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full border-4 border-emerald-50 overflow-hidden shadow-sm">
                  <img 
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Hafsa&backgroundColor=b6e3f4" 
                    alt="Hafsa Lodhi" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Hafsa Lodhi</h4>
                  <p className="text-slate-500 text-sm">Parent</p>
                </div>
              </div>
            </div>
          </div>

          <div className="px-2">
            <div className="flex items-center gap-1 text-emerald-500 mb-2">
              <span className="text-slate-400 mr-2">★ Trust pilot</span>
              {[...Array(5)].map((_, i) => <HiStar key={i} className="w-4 h-4 fill-current" />)}
            </div>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
              TrustScore 4.8 | 564 reviews
            </p>
            <p className="text-[10px] text-slate-300 mt-8">© 2026 Inc. (USA)</p>
          </div>
        </div>

        {/* RIGHT COLUMN: Dynamic Content Based on Step */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* STEP 1: Google Form */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <header>
                <h1 className="text-3xl font-bold text-slate-800 tracking-tight leading-tight">
                  First, please fill out this quick form 📝
                </h1>
                <p className="text-sm text-slate-500 mt-2 font-medium">
                  It helps us understand your child&rsquo;s needs better before booking.
                </p>
              </header>

              <div className="w-full bg-white shadow-sm rounded-3xl overflow-hidden p-4 border border-slate-200">
                <iframe
                  src={process.env.NEXT_PUBLIC_GOOGLE_FORM_URL} 
                  width="100%"
                  height="600"
                  className="border-none"
                  title="Google Form"
                >
                  Loading…
                </iframe>
              </div>

              {/* অ্যাকশন বাটন */}
              <div className="flex justify-end">
                <button 
                  onClick={() => setCurrentStep(2)}
                  className="inline-flex items-center gap-2 bg-emerald-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-emerald-700 transition-all shadow-md"
                >
                  I&rsquo;ve filled the form, Continue to Booking <HiArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Calendly Booking */}
          {currentStep === 2 && (
            <div className="space-y-8 animate-fadeIn">
              <header>
                <h1 className="text-3xl font-bold text-slate-800 tracking-tight leading-tight">
                 Book a free lesson to enter the magical world of <span className="text-emerald-600">{selectedCourse || "AI & Coding"}</span>
                </h1>
                <div className="text-sm text-slate-500 mt-3 font-medium flex items-center flex-wrap gap-1">
                  <span>You&rsquo;re in</span>
                  <div className="relative inline-block">
                    <select 
                      value={grade}
                      onChange={(e) => setGrade(e.target.value)}
                      className="appearance-none bg-transparent border-b border-emerald-600 text-emerald-600 font-bold cursor-pointer focus:outline-none pr-1"
                    >
                      {grades.map((g) => (
                        <option key={g} value={g}>{g}</option>
                      ))}
                    </select>
                  </div>
                  <span className="mx-1">• Local time: <span className="text-slate-700">{currentTime || "Loading..."}</span></span>
                </div>
              </header>
      
              {/* Calendly Inline Widget */}
              <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
                <InlineWidget 
                  url="https://calendly.com/shajidaislam34/30min"
                  styles={{ height: '700px', width: '100%' }}
                  pageSettings={{
                    backgroundColor: 'ffffff',
                    hideEventTypeDetails: false,
                    hideLandingPageDetails: false,
                    primaryColor: '10b981',
                    textColor: '334155'
                  }}
                />
              </div>

              {/* Feature List */}
              <div className="bg-slate-100/80 rounded-2xl p-6 space-y-3">
                <div className="flex items-center gap-3 text-slate-700 font-semibold text-sm">
                  <HiCheckCircle className="text-emerald-500 w-5 h-5" /> No credit card required
                </div>
                <div className="flex items-center gap-3 text-slate-700 font-semibold text-sm">
                  <HiCheckCircle className="text-emerald-500 w-5 h-5" /> Cancel or reschedule anytime
                </div>
                <div className="flex items-center gap-3 text-slate-700 font-semibold text-sm">
                  <span className="text-lg">🎓</span> 50% scholarship for today&rsquo;s bookings
                </div>
              </div>

              {/* Social Proof Bar */}
              <div className="flex flex-col sm:flex-row items-center gap-6 p-4 border border-emerald-100 rounded-2xl bg-emerald-50/30">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-emerald-200 overflow-hidden">
                        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i+10}`} alt="student" />
                      </div>
                    ))}
                  </div>
                  <div className="text-sm">
                    <p className="font-bold text-slate-800">1000+ students booked today</p>
                  </div>
                </div>
                <div className="sm:ml-auto flex items-center gap-2 text-xs text-emerald-600 font-bold bg-white px-4 py-2 rounded-full border border-emerald-100 shadow-sm">
                  <HiClock className="w-4 h-4" /> Limited slots remaining!
                </div>
              </div>

              {/* Callback Section */}
              <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl text-center md:text-left">
                <h3 className="font-bold text-slate-800 text-lg mb-1">Prefer to talk to us?</h3>
                <p className="text-sm text-slate-500 mb-6 font-medium">
                  Our experts will help you find the perfect time for your free trial class — no obligation!
                </p>
                <button className="inline-flex items-center gap-2 border-2 border-emerald-600 text-emerald-600 font-bold px-8 py-3 rounded-xl hover:bg-emerald-600 hover:text-white transition-all shadow-sm">
                  <HiPhone className="w-5 h-5" /> Request a callback
                </button>
              </div>

              {/* Disclaimer Footer */}
              <div className="bg-emerald-50/50 border-l-4 border-emerald-500 p-4 rounded-r-xl">
                <p className="text-[12px] text-slate-600 leading-relaxed font-medium">
                  <strong className="text-emerald-700">Note:</strong> Your assigned instructor will be available during your chosen class time. Please ensure you can attend when you book, as missing the class would waste their valuable time.
                </p>
              </div>
            </div>
          )}

        </div>
      </MyContainer>
    </div>
  );
}

export default function Booking() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <p className="text-slate-500 font-medium">Loading booking options...</p>
      </div>
    }>
      <BookingFlow />
    </Suspense>
  );
}
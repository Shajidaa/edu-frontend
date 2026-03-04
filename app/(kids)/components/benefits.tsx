import React from 'react';
import { FaCheckCircle, FaAward, FaInfinity, FaHeadset, FaFileAlt, FaChartLine, FaWallet, FaShieldAlt, FaGamepad } from 'react-icons/fa';
import { PiChalkboardTeacherFill } from "react-icons/pi";

const benefitsData = [
  { text: "Learn from handpicked top IT coding instructors chosen just for you.", icon: <PiChalkboardTeacherFill /> },
  { text: "Enjoy unlimited doubt sessions, available 24x7.", icon: <FaInfinity /> },
  { text: "Access a dedicated support team to resolve queries 24x7.", icon: <FaHeadset /> },
  { text: "Lifetime access to all class recordings.", icon: <FaCheckCircle /> },
  { text: "Earn a STEM.org accredited certificate upon course completion.", icon: <FaAward /> },
  { text: "Work on projects and quizzes after every class.", icon: <FaFileAlt /> },
  { text: "Receive monthly progress reports and attend parent-teacher meetings (PTMs).", icon: <FaChartLine /> },
  { text: "Flexible payment options available.", icon: <FaWallet /> },
  { text: "Follow a tailored curriculum designed for your child's interests and pace.", icon: <FaCheckCircle /> },
  { text: "Get a 100% money-back guarantee for assured satisfaction.", icon: <FaShieldAlt /> },
  { text: "Enjoy a gamified learning dashboard filled with engaging projects and quizzes.", icon: <FaGamepad /> },
];

export default function Benefits() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        
        {/* Scholarship Banner */}
        <div className="flex justify-center mb-10">
          <div className="bg-green-100 border border-green-200 text-green-800 px-6 py-3 rounded-xl font-bold shadow-sm flex items-center gap-3">
            <span className="text-xl">🎓</span>
            Complete a free trial lesson to unlock additional scholarships!
          </div>
        </div>

        {/* Benefits Card */}
        <div className="bg-emerald-50/50 border border-emerald-100 rounded-3xl p-8 md:p-12 shadow-sm relative overflow-hidden">
          {/* Decorative Sparkles */}
          <div className="absolute top-6 left-6 text-emerald-300 text-2xl opacity-50">✦</div>
          
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800 mb-8">
            Every student at KidsForCoding gets these amazing benefits!
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-10">
            {benefitsData.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 group">
                <span className="text-green-600 mt-1 text-lg group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </span>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  {/* Highlighting key terms as seen in the image */}
                  {benefit.text.split(/(handpicked top IT coding instructors|unlimited doubt sessions|dedicated support team|Lifetime access|STEM.org accredited certificate|projects and quizzes|monthly progress reports|Flexible payment options|tailored curriculum|100% money-back guarantee|gamified learning dashboard)/g).map((part, i) => 
                    [
                      "handpicked top IT coding instructors", "unlimited doubt sessions", "dedicated support team", 
                      "Lifetime access", "STEM.org accredited certificate", "projects and quizzes", 
                      "monthly progress reports", "Flexible payment options", "tailored curriculum", 
                      "100% money-back guarantee", "gamified learning dashboard"
                    ].includes(part) ? (
                      <strong key={i} className="text-slate-900 font-bold">{part}</strong>
                    ) : part
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-12 text-center">
          <p className="text-slate-500 text-sm mb-6">
            Start with a free trial lesson at your preferred date & time. No commitments, fees, or credit card required.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white font-black px-10 py-4 rounded-lg text-lg transition-all shadow-lg shadow-green-100 active:scale-95 uppercase tracking-wide">
            Try a free lesson
          </button>
        </div>
      </div>
    </section>
  );
}
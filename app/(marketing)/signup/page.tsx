"use client";

import MyContainer from "../components/share/MyContainer";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { BookOpen, GraduationCap, Sparkles } from "lucide-react";
import Bottom from "./_components/Bottom";
import SectionWrapper from "../components/share/SectionWrapper";

export default function LoginPage() {
  const handleGoogleSignIn = async (role: string) => {
    // Store role in cookie before signing in
    document.cookie = `pendingUserRole=${role}; path=/; max-age=300`;

    await signIn("google", {
      callbackUrl: "/dashboard",
      redirect: true,
    });
  };
  const handleGoogleSignInKids = async (role: string) => {
    // Store role in cookie before signing in
    document.cookie = `pendingUserRole=${role}; path=/; max-age=300`;

    await signIn("google", {
      callbackUrl: "/kidsForCoding",
      redirect: true,
    });
  };
  return (
    <div className="bg-gradient-to-br from-[#0f3d2e] via-[#1a533f] to-[#0f3d2e] min-h-screen py-12 md:py-24 px-4 overflow-hidden relative">
      <MyContainer>
        <div className="max-w-7xl mx-auto relative z-10">

          {/* Header Section */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 bg-[#d9f99d]/20 text-[#d9f99d] px-4 py-2 rounded-full mb-6 border border-[#d9f99d]/30">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-semibold">Join Next Gen Learning Today</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Choose Your Path to{' '}
              <span className="text-[#d9f99d] underline decoration-2 underline-offset-4">Success</span>
            </h1>
            <p className="text-base md:text-xl text-gray-200 max-w-2xl mx-auto px-4">
              Whether you&apos;re here to learn or teach, we&apos;ve got the perfect platform for you.
            </p>
          </div>

       <SectionWrapper direction="left">
           {/* Cards Section - Responsive Grid Logic */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">

  {/* Student Card */}
            <div className="group relative h-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#d9f99d] to-[#bef264] rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative bg-white rounded-3xl p-6 md:p-10 h-full flex flex-col shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <BookOpen className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">I&apos;m a Student</h2>
                <p className="text-gray-600 mb-8 leading-relaxed flex-grow text-sm md:text-base">
                  Access personalized learning experiences, connect with expert tutors, and achieve your academic goals.
                </p>
                <ul className="space-y-3 mb-8 text-sm md:text-base">
                  <li className="flex items-start gap-3 text-gray-700">
                    <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                    </div>
                    <span>Find qualified tutors in any subject</span>
                  </li>
                </ul>
                <button
                  onClick={() => handleGoogleSignIn("student")}
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-4 rounded-xl font-bold text-base md:text-lg flex items-center justify-center gap-3 hover:from-amber-600 hover:to-amber-700 transition-all shadow-lg"
                >
                  <FcGoogle size={24} className="bg-white rounded-full p-1" />
                  <span>Continue as Student</span>
                </button>
              </div>
            </div>

          
   {/* Kids Card */}
            <div className="group relative h-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative bg-white rounded-3xl p-6 md:p-10 h-full flex flex-col shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Sparkles className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">I&apos;m a Kid</h2>
                <p className="text-gray-600 mb-8 leading-relaxed flex-grow text-sm md:text-base">
                  Explore a world of fun, games, and easy learning! Start your adventure today with lessons made for you.
                </p>
                <ul className="space-y-3 mb-8 text-sm md:text-base">
                  <li className="flex items-start gap-3 text-gray-700">
                    <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                    </div>
                    <span>Fun & interactive video lessons</span>
                  </li>
                </ul>
                <button
                  onClick={() => handleGoogleSignInKids("kid")}
                  className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-4 rounded-xl font-bold text-base md:text-lg flex items-center justify-center gap-3 hover:from-indigo-600 hover:to-purple-700 transition-all shadow-lg"
                >
                  <FcGoogle size={24} className="bg-white rounded-full p-1" />
                  <span>Continue as Kid</span>
                </button>
              </div>
            </div>
        

    {/* Tutor Card - Spans full width on medium screens to keep symmetry */}
            {/* <div className="group relative h-full md:col-span-2 lg:col-span-1">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#d9f99d] to-[#bef264] rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative bg-white rounded-3xl p-6 md:p-10 h-full flex flex-col shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#0f3d2e] to-[#1a533f] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <GraduationCap className="w-7 h-7 md:w-8 md:h-8 text-[#d9f99d]" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">I&apos;m a Tutor</h2>
                <p className="text-gray-600 mb-8 leading-relaxed flex-grow text-sm md:text-base">
                  Share your expertise, inspire students, and build your teaching career with our powerful educator tools.
                </p>
                <ul className="space-y-3 mb-8 text-sm md:text-base">
                  <li className="flex items-start gap-3 text-gray-700">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-green-600"></div>
                    </div>
                    <span>Manage lessons and schedules easily</span>
                  </li>
                </ul>
                <button
                  onClick={() => handleGoogleSignIn("tutor")}
                  className="w-full bg-gradient-to-r from-[#0f3d2e] to-[#1a533f] text-white px-6 py-4 rounded-xl font-bold text-base md:text-lg flex items-center justify-center gap-3 hover:from-[#1a533f] hover:to-[#0f3d2e] transition-all shadow-lg"
                >
                  <FcGoogle size={24} className="bg-white rounded-full p-1" />
                  <span>Continue as Tutor</span>
                </button>
              </div>
            </div> */}
          

          </div>
</SectionWrapper>
          <Bottom />
          
          {/* Decorative Elements - Hidden on small screens to avoid overflow */}
          <div className="hidden sm:block absolute top-20 left-10 text-[#d9f99d]/20 text-6xl pointer-events-none">✦</div>
          <div className="hidden sm:block absolute bottom-20 right-10 text-[#d9f99d]/20 text-6xl pointer-events-none">✦</div>
        </div>
      </MyContainer>
    </div>
  );
}
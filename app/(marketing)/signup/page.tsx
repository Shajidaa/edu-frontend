"use client";

import MyContainer from "../components/share/MyContainer";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { BookOpen, GraduationCap, Sparkles } from "lucide-react";
import Bottom from "./_components/Bottom";

export default function LoginPage() {
  const handleGoogleSignIn = async (role: string) => {
    // Store role in cookie before signing in
    document.cookie = `pendingUserRole=${role}; path=/; max-age=300`;

    await signIn("google", {

      callbackUrl: "/dashboard",
      redirect: true,
    });
   
  };

  return (
    <div className="bg-gradient-to-br from-[#0f3d2e] via-[#1a533f] to-[#0f3d2e] min-h-screen py-16 md:py-24">
      <MyContainer>
        <div className="max-w-6xl mx-auto">

          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#d9f99d]/20 text-[#d9f99d] px-4 py-2 rounded-full mb-6 border border-[#d9f99d]/30">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-semibold">Join Next Gen Learning Today</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Choose Your Path to{' '}
              <span className="text-[#d9f99d] underline decoration-2 underline-offset-4">Success</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
              Whether you&apos;re here to learn or teach, we&apos;ve got the perfect platform for you.
            </p>
          </div>

          {/* Cards Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">

            {/* Student Card */}
            <div className="group relative">
              {/* Decorative Background */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#d9f99d] to-[#bef264] rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>

              <div className="relative bg-white rounded-3xl p-8 md:p-10 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h2 className="text-3xl font-bold text-gray-900 mb-4">I&apos;m a Student</h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Access personalized learning experiences, connect with expert tutors, and achieve your academic goals with our comprehensive learning platform.
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3 text-gray-700">
                    <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                    </div>
                    <span>Find qualified tutors in any subject</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                    </div>
                    <span>Track your learning progress</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                    </div>
                    <span>Access interactive learning materials</span>
                  </li>
                </ul>

                {/* Button */}
                <button
                  onClick={() => handleGoogleSignIn("student")}
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 hover:from-amber-600 hover:to-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl group"
                >
                  <FcGoogle size={28} className="bg-white rounded-full p-1" />
                  <span>Continue as Student</span>
                </button>
              </div>
            </div>

            {/* Tutor Card */}
            <div className="group relative">
              {/* Decorative Background */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#d9f99d] to-[#bef264] rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>

              <div className="relative bg-white rounded-3xl p-8 md:p-10 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-[#0f3d2e] to-[#1a533f] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <GraduationCap className="w-8 h-8 text-[#d9f99d]" />
                </div>

                {/* Content */}
                <h2 className="text-3xl font-bold text-gray-900 mb-4">I&apos;m a Tutor</h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Share your expertise, inspire students, and build your teaching career with our powerful tools designed specifically for educators.
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3 text-gray-700">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-green-600"></div>
                    </div>
                    <span>Create your professional profile</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-green-600"></div>
                    </div>
                    <span>Connect with students worldwide</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-green-600"></div>
                    </div>
                    <span>Manage lessons and schedules easily</span>
                  </li>
                </ul>

                {/* Button */}
                <button
                  onClick={() => handleGoogleSignIn("tutor")}
                  className="w-full bg-gradient-to-r from-[#0f3d2e] to-[#1a533f] text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 hover:from-[#1a533f] hover:to-[#0f3d2e] transition-all duration-300 shadow-lg hover:shadow-xl group"
                >
                  <FcGoogle size={28} className="bg-white rounded-full p-1" />
                  <span>Continue as Tutor</span>
                </button>
              </div>
            </div>

          </div>


          <Bottom />
          {/* Decorative Elements */}
          <div className="absolute top-20 left-10 text-[#d9f99d]/20 text-6xl pointer-events-none">✦</div>
          <div className="absolute bottom-20 right-10 text-[#d9f99d]/20 text-6xl pointer-events-none">✦</div>
        </div>
      </MyContainer>
    </div>
  );
}
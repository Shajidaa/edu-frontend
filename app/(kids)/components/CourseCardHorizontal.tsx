import Link from 'next/link';
import React from 'react';
import { 
  FaBookOpen, 
  FaRegClock, 
  FaUsers, 
  FaFileAlt, 
  FaDollarSign,
  FaPlayCircle,
  FaCheckCircle
} from 'react-icons/fa';
import { PiStudentBold, PiGraduationCapFill } from "react-icons/pi";

interface Course {
  _id: string;
  course_title: string;
  age_range: string;
  grade_range: string;
  lessons: string;
  duration: string;
  description: string;
  students_enrolled?: string;
}

export default function CourseCardHorizontal({ course }: { course: Course }) {
  return (
    <div className="flex flex-col md:flex-row w-full bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      
      {/* Left: Image Section */}
      <div className="relative w-full md:w-[35%] h-52 md:h-auto overflow-hidden group">
        <img 
          src="/course-placeholder.jpg" 
          alt={course.course_title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* AI Badge - Kept Red for high contrast as per original design */}
        <div className="absolute top-0 left-4 bg-red-600 text-white px-2 py-1 rounded-b-md shadow-md">
          <span className="text-[10px] font-black tracking-tighter uppercase">AI</span>
        </div>
        {/* Play Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
          <FaPlayCircle className="text-white text-5xl opacity-90 cursor-pointer drop-shadow-lg" />
        </div>
      </div>

      {/* Right: Content Section */}
      <div className="flex-1 p-5 md:p-7 flex flex-col">
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div className="flex-1">
            <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-3 hover:text-green-700 transition-colors cursor-pointer">
              {course.course_title}
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-4 line-clamp-2 md:line-clamp-none">
              {course.description}
            </p>
            
            {/* Quick Links with Green Accents */}
            <div className="flex gap-5 mb-6">
              <button className="flex items-center gap-1.5 text-green-600 font-semibold hover:text-green-800 text-sm transition-colors">
                <FaFileAlt size={14} className="opacity-80" /> View curriculum
              </button>
              <button className="flex items-center gap-1.5 text-green-600 font-semibold hover:text-green-800 text-sm transition-colors">
                <FaDollarSign size={14} className="opacity-80" /> View pricing
              </button>
            </div>
          </div>

          {/* Metadata Sidebar - Green Theme Icons */}
          <div className="flex flex-row md:flex-col flex-wrap gap-x-4 gap-y-2 md:gap-3 text-[13px] text-slate-500 md:border-l md:border-slate-100 md:pl-6 min-w-[140px]">
            <div className="flex items-center gap-2">
              <PiGraduationCapFill className="text-green-500 text-lg" /> 
              <span className="font-medium">Age {course.age_range}</span>
            </div>
            <div className="flex items-center gap-2">
              <PiStudentBold className="text-green-500 text-lg" /> 
              <span className="font-medium">Grade {course.grade_range}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaBookOpen className="text-green-500" /> 
              <span className="font-medium">{course.lessons}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaRegClock className="text-green-500" /> 
              <span className="font-medium">{course.duration}</span>
            </div>
          </div>
        </div>

        {/* Footer: Stats & Primary Green Button */}
        <div className="mt-auto pt-5 border-t border-slate-50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-slate-500 text-sm">
            <FaUsers className="text-green-500/70" />
            <span className="font-bold text-slate-700">{course.students_enrolled || '10,000+'}</span> 
            <span>Students enrolled</span>
          </div>
          
          <div className="flex items-center gap-4">
             <Link href="/kidsForCoding/booking" className="px-8 py-2.5 border-2 border-green-600 text-green-700 font-bold rounded-lg hover:bg-green-600 hover:text-white transition-all duration-200 shadow-sm active:scale-95">
              Try a free lesson
            </Link>
            <button className="text-green-700 font-bold hover:text-green-900 text-sm md:text-base transition-colors">
              View course details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
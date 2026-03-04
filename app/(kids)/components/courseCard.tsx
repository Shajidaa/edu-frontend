import React from 'react';
import { FaGraduationCap, FaBookOpen, FaRegClock, FaCheckCircle, FaDownload } from 'react-icons/fa';
import { MdOutlineDashboardCustomize } from 'react-icons/md';

export default function CourseCard({ course }: { course: Course }) {
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg border border-gray-200 bg-white hover:shadow-xl transition-shadow duration-300">
      {/* Header Image Area */}
      <div className="relative h-48 bg-gray-900">
        <div className="absolute top-0 left-4 bg-red-600 text-white px-2 py-1 rounded-b-md font-bold text-xs">
          AI
        </div>
        <div className="absolute top-2 right-2 bg-black text-white px-2 py-1 rounded text-xs">
          {course.age_range}
        </div>
        <div className="flex items-center justify-center h-full">
           <div className="w-12 h-12 bg-white/30 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/50">
             <div className="translate-x-0.5 border-t-[10px] border-t-transparent border-l-[15px] border-l-white border-b-[10px] border-b-transparent"></div>
           </div>
        </div>
      </div>

      <div className="p-5">
        <h2 className="text-xl font-bold text-gray-800 mb-4 leading-tight">
          {course.course_title}
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-y-3 gap-x-2 text-sm text-gray-600 mb-4">
          <div className="flex items-center gap-2">
            <FaGraduationCap className="text-green-600" />
            <span>{course.age_range}</span>
          </div>
          <div className="flex items-center gap-2">
            <MdOutlineDashboardCustomize className="text-green-600" />
            <span>184+</span>
          </div>
          <div className="flex items-center gap-2">
            <FaBookOpen className="text-green-600" />
            <span>{course.lessons}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaRegClock className="text-green-600" />
            <span>{course.duration}</span>
          </div>
        </div>

        <p className="text-sm text-gray-500 mb-6 line-clamp-3">
          {course.description}
        </p>

        {/* Learning Outcomes */}
        <div className="mb-6">
          <h3 className="font-bold text-gray-700 mb-3">Learning outcomes</h3>
          <ul className="space-y-2">
            {course.learning_outcomes.map((outcome, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                <FaCheckCircle className="text-green-500 mt-1 shrink-0" />
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Actions */}
        <div className="space-y-4">
          <button className="flex items-center justify-center gap-2 w-full text-green-600 font-semibold hover:text-green-700 transition-colors">
            পাঠ্যক্রম ডাউনলোড করুন <FaDownload size={14} />
          </button>
          <button className="w-full py-3 border-2 border-green-600 text-green-600 font-bold rounded-lg hover:bg-green-50 transition-colors">
            Try a free lesson
          </button>
        </div>
      </div>
    </div>
  );
}
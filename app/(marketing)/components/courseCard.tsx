import { useState } from 'react';
// Assuming Course type is extended to include an image: 
// type Course = { ..., course_image: string }
import { Course } from '@/types'; 
import { saveAs } from 'file-saver';
import Link from 'next/link';
import Image from 'next/image'; // 1. Use Next.js Image for optimization
import { FaGraduationCap, FaBookOpen, FaRegClock, FaCheckCircle, FaDownload, FaTimes } from 'react-icons/fa';
import { MdOutlineDashboardCustomize } from 'react-icons/md';

export default function CourseCard({ course }: { course: Course }) {
  const [showVideo, setShowVideo] = useState(false);

  // Fallback image if course.course_image is missing
  const displayImage =  'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop';

  const downloadPDF = () => {
    const pdfUrl = '/PythonProgramming.pdf';
    const fileName = `${course.course_title}_Syllabus.pdf`;
    saveAs(pdfUrl, fileName);
  };

  return (
    <>
      {/* 1. Full-Screen Video Overlay (Modal) - Remains the same */}
      {showVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-10 transition-opacity duration-300">
          {/* Close Button */}
          <button 
            onClick={() => setShowVideo(false)}
            className="absolute top-6 right-6 text-white/70 text-3xl hover:text-white transition-colors z-[110]"
          >
            <FaTimes />
          </button>
          
          {/* Video Container */}
          <div className="relative w-full max-w-5xl aspect-video shadow-2xl scale-100 animate-fade-in">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/kqtD5dpn9C8?autoplay=1" 
              title="Coding Lesson"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      {/* 2. The Course Card */}
      <div className="max-w-sm rounded-xl overflow-hidden shadow-lg border border-gray-200 bg-white hover:shadow-xl transition-shadow duration-300">
        
        {/* === UPDATED HEADER AREA (Showing Image) === */}
        <div className="relative h-48 bg-slate-100 group overflow-hidden">
          
          {/* 2a. The actual background image */}
          <Image 
            src={displayImage}
            alt={course.course_title}
            fill // Fills the parent div (h-48)
            className="object-cover transition-transform duration-500 group-hover:scale-110" // Zooom effect on hover
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          {/* 2b. Overlays (placed on top of the image) */}
          <div className="absolute top-0 left-4 bg-red-600 text-white px-2 py-1 rounded-b-md font-bold text-xs z-10">
            AI
          </div>
          <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm text-white px-2 py-1 rounded text-xs z-10">
            {course.age_range}
          </div>
          
          {/* 2c. Play Button Overlay (Visible only when hovering over the card) */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-all z-20">
            <button 
              onClick={() => setShowVideo(true)}
              className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer hover:scale-110 hover:bg-white/40 transition-all border border-white/50 shadow-lg"
            >
              {/* Corrected Tailwind Border Triangle */}
              <div className="translate-x-0.5 border-t-14 border-t-transparent border-l-21px border-l-white border-b-[14px] border-b-transparent"></div>
            </button>
          </div>
        </div>
        {/* ========================================= */}

        <div className="p-5">
          <h2 className="text-xl line-clamp-2 font-bold text-gray-800 mb-4 leading-tight">
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
              <span>{course.lessons} lessons</span>
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
            <ul className="space-y-2 h-48 lg:h-52 overflow-hidden border-b border-gray-100">
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
            <button 
              onClick={downloadPDF}
              className="flex items-center justify-center gap-2 w-full text-green-600 font-semibold hover:text-green-700 transition-colors"
            >
              পাঠ্যক্রম ডাউনলোড করুন <FaDownload size={14} />
            </button>

            <Link 
              href={`/booking?course=${encodeURIComponent(course.course_title)}`}
              className="block text-center w-full py-3 border-2 border-green-600 text-green-600 font-bold rounded-lg hover:bg-green-50 transition-colors"
            >
              Try a free lesson
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
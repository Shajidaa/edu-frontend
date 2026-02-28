"use client";
import React, { useState } from 'react';
import { 
  FaSearch, FaFilePdf, FaVideo, FaFileAlt, 
  FaDownload, FaExternalLinkAlt, FaFilter 
} from 'react-icons/fa';

interface Resource {
  id: number;
  title: string;
  type: 'pdf' | 'video' | 'doc';
  category: string;
  tutor: string;
  date: string;
}

export default function Resources() {
  const [searchTerm, setSearchTerm] = useState('');

  const resourceList: Resource[] = [
    { id: 1, title: 'Calculus Cheat Sheet', type: 'pdf', category: 'Math', tutor: 'Dr. Smith', date: 'Feb 20, 2026' },
    { id: 2, title: 'Physics 101: Motion Video', type: 'video', category: 'Science', tutor: 'Prof. Xavier', date: 'Feb 18, 2026' },
    { id: 3, title: 'Essay Writing Guide', type: 'doc', category: 'English', tutor: 'Sarah J.', date: 'Feb 15, 2026' },
    { id: 4, title: 'Organic Chemistry Basics', type: 'pdf', category: 'Science', tutor: 'Dr. Smith', date: 'Feb 10, 2026' },
    { id: 5, title: 'Biology Fundamentals', type: 'video', category: 'Science', tutor: 'Dr. Johnson', date: 'Feb 8, 2026' },
    { id: 6, title: 'History Timeline', type: 'doc', category: 'History', tutor: 'Prof. Williams', date: 'Feb 5, 2026' },
  ];

  // Helper to render icons based on file type
  const getIcon = (type: string) => {
    switch (type) {
      case 'pdf': return <FaFilePdf className="text-red-500" />;
      case 'video': return <FaVideo className="text-blue-500" />;
      default: return <FaFileAlt className="text-emerald-500" />;
    }
  };

  return (
    <div className="p-4 md:p-8 bg-gray-50 min-h-screen">
      {/* Header & Search */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Learning Resources</h1>
          <p className="text-gray-500 text-sm">Access materials shared by your tutors.</p>
        </div>

        <div className="relative w-full md:w-96">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input 
            type="text"
            placeholder="Search resources..."
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none transition-all"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Filter Chips (Scrollable on mobile) */}
      <div className="flex space-x-2 overflow-x-auto pb-4 mb-6 scrollbar-hide">
        {['All', 'Math', 'Science', 'English', 'History'].map((cat) => (
          <button 
            key={cat} 
            className="px-4 py-1.5 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-600 hover:border-green-500 hover:text-green-600 transition-colors whitespace-nowrap"
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Resources Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {resourceList.map((item) => (
          <div key={item.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col">
            <div className="p-5 flex-1">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-gray-50 rounded-lg text-2xl">
                  {getIcon(item.type)}
                </div>
                <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-1 bg-green-100 text-green-700 rounded-md">
                  {item.category}
                </span>
              </div>
              
              <h3 className="font-bold text-gray-800 mb-1 line-clamp-1">{item.title}</h3>
              <p className="text-xs text-gray-500 mb-4">Shared by <span className="text-green-600 font-medium">{item.tutor}</span></p>
              
              <div className="flex items-center text-[11px] text-gray-400">
                <span>Added: {item.date}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="border-t border-gray-50 p-4 bg-gray-50/50 rounded-b-2xl flex items-center justify-between">
              <button className="flex items-center text-sm font-semibold text-green-700 hover:text-green-800">
                <FaDownload className="mr-2" /> Download
              </button>
              <button className="text-gray-400 hover:text-gray-600">
                <FaExternalLinkAlt size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
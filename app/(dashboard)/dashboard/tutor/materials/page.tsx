"use client";
import React, { useState } from 'react';
import { 
  FaCloudUploadAlt, FaFolder, FaFilePdf, 
  FaFileWord, FaVideo, FaTrash, FaShareAlt,
  FaSearch, FaEllipsisV 
} from 'react-icons/fa';

interface Material {
  id: string;
  name: string;
  type: 'pdf' | 'doc' | 'video';
  size: string;
  sharedWith: number; // Number of students
  uploadDate: string;
}

export default function MaterialsPage() {
  const [materials] = useState<Material[]>([
    { id: '1', name: 'Calculus_Final_Review.pdf', type: 'pdf', size: '2.4 MB', sharedWith: 12, uploadDate: 'Feb 20, 2026' },
    { id: '2', name: 'Intro_to_Physics_Lecture.mp4', type: 'video', size: '45 MB', sharedWith: 8, uploadDate: 'Feb 18, 2026' },
    { id: '3', name: 'Lab_Report_Template.docx', type: 'doc', size: '1.1 MB', sharedWith: 25, uploadDate: 'Feb 15, 2026' },
  ]);

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'pdf': return <FaFilePdf className="text-rose-500" />;
      case 'video': return <FaVideo className="text-blue-500" />;
      case 'doc': return <FaFileWord className="text-emerald-500" />;
      default: return <FaFolder className="text-amber-500" />;
    }
  };

  return (
    <div className="p-4 md:p-8 bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Teaching Materials</h1>
          <p className="text-slate-500 text-sm">Upload and manage resources for your students.</p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-xl font-bold transition-all shadow-md shadow-emerald-100">
            <FaCloudUploadAlt /> Upload File
          </button>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 mb-8 flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search files..." 
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-100 rounded-xl outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
          />
        </div>
        <div className="flex gap-2">
          {['All', 'PDFs', 'Videos', 'Docs'].map(tab => (
            <button key={tab} className="px-4 py-2 text-xs font-bold text-slate-500 hover:bg-slate-50 rounded-lg border border-transparent hover:border-slate-100">
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Materials Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 border-b border-slate-100 text-slate-400 text-[10px] uppercase font-bold tracking-wider">
              <tr>
                <th className="px-6 py-4">File Name</th>
                <th className="px-6 py-4">Size</th>
                <th className="px-6 py-4">Shared With</th>
                <th className="px-6 py-4">Date Added</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {materials.map((file) => (
                <tr key={file.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="text-xl opacity-80 group-hover:opacity-100 transition-opacity">
                        {getFileIcon(file.type)}
                      </div>
                      <span className="text-sm font-semibold text-slate-700 truncate max-w-[200px]">
                        {file.name}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-xs text-slate-500">{file.size}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-600 bg-emerald-50 w-fit px-2 py-1 rounded-md">
                      <FaShareAlt size={10} /> {file.sharedWith} Students
                    </div>
                  </td>
                  <td className="px-6 py-4 text-xs text-slate-400">{file.uploadDate}</td>
                  <td className="px-6 py-4">
                    <div className="flex justify-end gap-2">
                      <button className="p-2 text-slate-400 hover:text-rose-500 transition-colors">
                        <FaTrash size={14} />
                      </button>
                      <button className="p-2 text-slate-400 hover:text-slate-800">
                        <FaEllipsisV size={12} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
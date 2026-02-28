"use client";
import React, { useState } from 'react';
import { 
  FaUserGraduate, FaCalendarCheck, 
  FaMessage,  FaFilter, FaArrowRight, 
  FaEllipsis
} from 'react-icons/fa6';

interface Student {
  id: string;
  name: string;
  subject: string;
  lastSession: string;
  progress: number;
  status: 'Active' | 'Paused';
  avatar?: string;
}

export default function StudentsPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const students: Student[] = [
    { id: '1', name: 'Shajida Islam', subject: 'Calculus II', lastSession: '2 hours ago', progress: 85, status: 'Active' },
    { id: '2', name: 'Alex Rivera', subject: 'Physics 101', lastSession: 'Yesterday', progress: 40, status: 'Active' },
    { id: '3', name: 'Courtney Henry', subject: 'Organic Chemistry', lastSession: 'Feb 24', progress: 62, status: 'Paused' },
    { id: '4', name: 'Jerome Bell', subject: 'Algebra basics', lastSession: 'Feb 20', progress: 95, status: 'Active' },
  ];

  return (
    <div className="p-4 md:p-8 bg-slate-50 min-h-screen">
      {/* Header & Search */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">My Students</h1>
          <p className="text-slate-500 text-sm">Monitor performance and manage your student roster.</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative">
            <FaUserGraduate className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text"
              placeholder="Search students..."
              className="w-full sm:w-64 pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all text-sm"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="flex items-center justify-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-50">
            <FaFilter /> Filters
          </button>
        </div>
      </div>

      {/* Stats Summary for Tutor */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="bg-emerald-600 p-4 rounded-2xl text-white shadow-sm shadow-emerald-200">
          <p className="text-emerald-100 text-xs font-medium uppercase tracking-wider">Total Students</p>
          <h3 className="text-2xl font-bold">12</h3>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
          <p className="text-slate-400 text-xs font-medium uppercase tracking-wider">Avg. Progress</p>
          <h3 className="text-2xl font-bold text-slate-800">74%</h3>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
          <p className="text-slate-400 text-xs font-medium uppercase tracking-wider">Upcoming Sessions</p>
          <h3 className="text-2xl font-bold text-slate-800">5 Today</h3>
        </div>
      </div>

      {/* Student Table/Card View */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 text-xs uppercase font-bold">
              <tr>
                <th className="px-6 py-4">Student</th>
                <th className="px-6 py-4 hidden md:table-cell">Subject</th>
                <th className="px-6 py-4">Progress</th>
                <th className="px-6 py-4 hidden sm:table-cell">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {students.map((student) => (
                <tr key={student.id} className="hover:bg-slate-50 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
                        {student.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-slate-800 text-sm">{student.name}</p>
                        <p className="text-xs text-slate-400">Last: {student.lastSession}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 hidden md:table-cell text-sm text-slate-600 font-medium">
                    {student.subject}
                  </td>
                  <td className="px-6 py-4">
                    <div className="w-32">
                      <div className="flex justify-between text-[10px] mb-1 font-bold text-slate-500">
                        <span>{student.progress}%</span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-1.5">
                        <div 
                          className="bg-emerald-500 h-1.5 rounded-full" 
                          style={{ width: `${student.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 hidden sm:table-cell">
                    <span className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-tighter ${
                      student.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-500'
                    }`}>
                      {student.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button className="p-2 text-slate-400 hover:text-emerald-600 transition-colors rounded-lg hover:bg-emerald-50">
                        <FaMessage size={16} />
                      </button>
                      <button className="p-2 text-slate-400 hover:text-slate-800 transition-colors rounded-lg hover:bg-slate-100">
                        <FaEllipsis size={14} />
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
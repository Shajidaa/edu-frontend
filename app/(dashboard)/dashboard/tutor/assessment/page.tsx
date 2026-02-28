"use client";
import React, { useState } from 'react';
import { 
  FaClipboardCheck, 
  FaRegClock, 
  FaPlus, 
  FaFileLines, 
  FaUserGroup,
  FaEllipsisVertical 
} from 'react-icons/fa6';

interface Assessment {
  id: string;
  title: string;
  subject: string;
  dueDate: string;
  submissions: number;
  totalStudents: number;
  status: 'Active' | 'Draft' | 'Closed';
}

export default function AssessmentPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const assessments: Assessment[] = [
    { id: '1', title: 'Midterm Calculus Quiz', subject: 'Mathematics', dueDate: 'Mar 10, 2026', submissions: 8, totalStudents: 12, status: 'Active' },
    { id: '2', title: 'Physics Lab Report #3', subject: 'Physics', dueDate: 'Mar 15, 2026', submissions: 2, totalStudents: 10, status: 'Active' },
    { id: '3', title: 'English Literature Essay', subject: 'English', dueDate: 'Feb 28, 2026', submissions: 15, totalStudents: 15, status: 'Closed' },
    { id: '4', title: 'Organic Chem Practice', subject: 'Chemistry', dueDate: 'Apr 02, 2026', submissions: 0, totalStudents: 5, status: 'Draft' },
  ];

  return (
    <div className="p-4 md:p-8 bg-slate-50 min-h-screen">
      {/* Header section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Assessments</h1>
          <p className="text-slate-500 text-sm">Create and manage tests for your students.</p>
        </div>
        <button className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-xl font-bold transition-all shadow-md shadow-emerald-100">
          <FaPlus /> Create Assessment
        </button>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        <StatCard icon={<FaRegClock className="text-orange-500" />} label="Pending Review" value="4" bg="bg-orange-50" />
        <StatCard icon={<FaClipboardCheck className="text-emerald-500" />} label="Completed Today" value="12" bg="bg-emerald-50" />
        <StatCard icon={<FaUserGroup className="text-blue-500" />} label="Avg. Score" value="84%" bg="bg-blue-50" />
      </div>

      {/* List Container */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex flex-wrap gap-4 items-center justify-between">
          <div className="flex gap-2">
            {['All', 'Active', 'Draft', 'Closed'].map((filter) => (
              <button 
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeFilter === filter 
                  ? 'bg-emerald-600 text-white' 
                  : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="divide-y divide-slate-100">
          {assessments.map((item) => (
            <div key={item.id} className="p-6 hover:bg-slate-50 transition-colors group">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                
                {/* Info Block */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-slate-100 rounded-xl text-slate-400 group-hover:bg-emerald-100 group-hover:text-emerald-600 transition-colors">
                    <FaFileLines size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800">{item.title}</h3>
                    <p className="text-xs text-slate-500 mb-2">{item.subject} • Due {item.dueDate}</p>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                      item.status === 'Active' ? 'bg-emerald-100 text-emerald-700' :
                      item.status === 'Closed' ? 'bg-slate-200 text-slate-600' : 'bg-amber-100 text-amber-700'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                </div>

                {/* Progress Block */}
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <div className="w-full sm:w-48">
                    <div className="flex justify-between text-[10px] font-bold text-slate-400 mb-1">
                      <span>Submissions</span>
                      <span>{item.submissions}/{item.totalStudents}</span>
                    </div>
                    <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                      <div 
                        className="bg-emerald-500 h-full rounded-full transition-all duration-1000" 
                        style={{ width: `${(item.submissions / item.totalStudents) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <button className="px-4 py-2 text-xs font-bold text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors border border-emerald-100">
                      View Results
                    </button>
                    <button className="p-2 text-slate-400 hover:text-slate-600">
                      <FaEllipsisVertical />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Helper component for KPI cards
function StatCard({ icon, label, value, bg }: { icon: React.ReactNode, label: string, value: string, bg: string }) {
  return (
    <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
      <div className={`p-4 rounded-xl text-xl ${bg}`}>
        {icon}
      </div>
      <div>
        <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">{label}</p>
        <h3 className="text-xl font-black text-slate-800">{value}</h3>
      </div>
    </div>
  );
}
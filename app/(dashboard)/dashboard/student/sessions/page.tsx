"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { 
  FaVideo, FaCalendarAlt, FaClock, 
  FaChevronRight, FaRegClipboard, FaLink 
} from 'react-icons/fa';

interface Session {
  id: string;
  tutorName: string;
  subject: string;
  date: string;
  time: string;
  duration: string;
  status: 'upcoming' | 'completed' | 'canceled';
  meetingLink?: string;
}

export default function SessionPage() {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');

  const sessions: Session[] = [
    {
      id: '1',
      tutorName: 'Dr. Smith',
      subject: 'Advanced Calculus',
      date: 'March 5, 2026',
      time: '10:00 AM',
      duration: '60 min',
      status: 'upcoming',
      meetingLink: 'https://calendly.com/zoom/example',
    },
    {
      id: '2',
      tutorName: 'Prof. Johnson',
      subject: 'Chemistry Basics',
      date: 'March 7, 2026',
      time: '10:00 AM',
      duration: '60 min',
      status: 'upcoming',
      meetingLink: 'https://calendly.com/zoom/example',
    },
    {
      id: '3',
      tutorName: 'Dr. Lee',
      subject: 'Physics Fundamentals',
      date: 'March 10, 2026',
      time: '10:00 AM',
      duration: '60 min',
      status: 'upcoming',
      meetingLink: 'https://calendly.com/zoom/example',
    },
    {
      id: '4',
      tutorName: 'Sarah Johnson',
      subject: 'English Literature',
      date: 'Feb 24, 2026',
      time: '2:30 PM',
      duration: '45 min',
      status: 'completed',
    },
   
    {
      id: '5',
      tutorName: 'Sarah Khan',
      subject: 'English Literature',
      date: 'Feb 24, 2026',
      time: '2:30 PM',
      duration: '45 min',
      status: 'completed',
    },
    {
      id: '6',
      tutorName: 'Prof. Williams',
      subject: 'History of Science',
      date: 'Feb 20, 2026',
      time: '11:00 AM',
      duration: '45 min',
      status: 'completed',
    },
  ];

  const filteredSessions = sessions.filter(s => 
    activeTab === 'upcoming' ? s.status === 'upcoming' : s.status === 'completed'
  );

  return (
    <div className="p-4 md:p-8 bg-gray-50 min-h-screen font-sans">
      {/* Header Area */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">My Sessions</h1>
          <p className="text-gray-500 text-sm">Manage your Calendly bookings and virtual classrooms.</p>
        </div>
        <Link href={'/dashboard/student/findTutor'} className="bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 shadow-sm shadow-green-200">
          <FaCalendarAlt /> Book New Session
        </Link>
      </div>

      {/* Tabs Switcher */}
      <div className="flex space-x-1 bg-gray-200/50 p-1 rounded-xl w-fit mb-8">
        <button 
          onClick={() => setActiveTab('upcoming')}
          className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === 'upcoming' ? 'bg-white text-green-700 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
        >
          Upcoming
        </button>
        <button 
          onClick={() => setActiveTab('past')}
          className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === 'past' ? 'bg-white text-green-700 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
        >
          Past Sessions
        </button>
      </div>

      {/* Sessions List */}
      <div className="space-y-4">
        {filteredSessions.length > 0 ? (
          filteredSessions.map((session) => (
            <div key={session.id} className="bg-white border border-gray-100 rounded-2xl p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                
                {/* Session Info */}
                <div className="flex items-start gap-4">
                  <div className="hidden sm:flex w-14 h-14 bg-green-50 rounded-2xl items-center justify-center text-green-600 text-xl">
                    <FaVideo />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg">{session.subject}</h3>
                    <p className="text-gray-500 text-sm mb-2">with {session.tutorName}</p>
                    <div className="flex flex-wrap gap-4 text-xs font-medium text-gray-400">
                      <span className="flex items-center gap-1"><FaCalendarAlt className="text-green-500" /> {session.date}</span>
                      <span className="flex items-center gap-1"><FaClock className="text-green-500" /> {session.time} ({session.duration})</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-row md:flex-col lg:flex-row gap-2">
                  {session.status === 'upcoming' ? (
                    <>
                      <a 
                        href={session.meetingLink} 
                        target="_blank" 
                        rel="noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-lg text-sm font-bold hover:bg-green-100 transition-colors"
                      >
                        <FaLink /> Join Meeting
                      </a>
                      <button className="p-2 text-gray-400 hover:text-red-500 transition-colors">
                        Cancel
                      </button>
                    </>
                  ) : (
                    <button className="flex items-center gap-2 border border-gray-200 px-4 py-2 rounded-lg text-sm font-bold text-gray-600 hover:bg-gray-50">
                      <FaRegClipboard /> View Notes
                    </button>
                  )}
                  <button className="hidden lg:block p-2 text-gray-300">
                    <FaChevronRight />
                  </button>
                </div>

              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-200">
            <p className="text-gray-400">No sessions found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
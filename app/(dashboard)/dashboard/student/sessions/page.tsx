"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { 
  FaVideo, FaCalendarAlt, FaClock, 
  FaRegClipboard, FaLink 
} from 'react-icons/fa';
import { useSession } from 'next-auth/react';

export default function SessionPage() {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');
  const [sessions, setSessions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const { data: session } = useSession();

  useEffect(() => {
    const fetchSessions = async () => {
      if (!session?.user?.email) return;
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/bookings/student/${session?.user?.email}`);
        setSessions(response.data);
      } catch (error) {
        console.error("Failed to load sessions", error);
      } finally {
        setLoading(false);
      }
    };
    fetchSessions();
  }, [session?.user?.email]);





  if (loading) return <div className="p-10 text-center text-green-600 font-bold">Loading your sessions...</div>;

  return (
    <div className="p-4 md:p-8 bg-gray-50 min-h-screen font-sans">
      {/* Header Area */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">My Sessions</h1>
          <p className="text-gray-500 text-sm">Manage your bookings and virtual classrooms.</p>
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
        {sessions.length > 0 ? (
          sessions.map((sessionItem) => (
            <div key={sessionItem.id} className="bg-white border border-gray-100 rounded-2xl p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                
                {/* Session Info */}
                <div className="flex items-start gap-4">
                  <div className="hidden sm:flex w-14 h-14 bg-green-50 rounded-2xl items-center justify-center text-green-600 text-xl">
                    <FaVideo />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg">Meeting with Tutor</h3>
                    <p className="text-gray-500 text-sm mb-2">{sessionItem.tutor_email}</p>
                    <div className="flex flex-wrap gap-4 text-xs font-medium text-gray-400">
                      <span className="flex items-center gap-1">
                        <FaCalendarAlt className="text-green-500" /> 
                        {new Date(sessionItem.start_time).toLocaleDateString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaClock className="text-green-500" /> 
                        {new Date(sessionItem.start_time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Actions Section Fixed */}
                <div className="flex flex-row md:flex-col lg:flex-row gap-2">
                  {activeTab === 'upcoming' ? (
                    <>
                      <a 
                        href={"#"} 
                        target="_blank" 
                        rel="noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 bg-green-600 text-white px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-green-700 transition-colors"
                      >
                        <FaLink /> Join Now
                      </a>
                    </>
                  ) : (
                    <button className="flex items-center justify-center gap-2 border border-gray-200 px-4 py-2 rounded-lg text-sm font-bold text-gray-600 hover:bg-gray-50">
                      <FaRegClipboard /> Review Notes
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-200">
            <p className="text-gray-400">No {activeTab} sessions found.</p>
          </div>
        )}
      </div>
    </div>
  );
}
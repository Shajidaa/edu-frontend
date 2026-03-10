"use client"
import React, { useState, useEffect, useMemo } from 'react'
import axios from 'axios';
import TutorCard from './_components/TutorCard';
import { Search, X } from 'lucide-react';
import { log } from 'console';

export default function Find() {
  const [data, setData] = useState<any[]>([]); 
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/tutors`);
        const result = Array.isArray(response.data) ? response.data : response.data.tutors;
        setData(result || []); 
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  
  const filteredTutors = useMemo(() => {
    if (!searchQuery) return data;
    
    const query = searchQuery.toLowerCase();
    
    return data.filter((tutor) => {
      // 1. Name check
      const nameMatch = tutor.name?.toLowerCase().includes(query);
      const titleMatch = tutor.profile?.title?.toLowerCase().includes(query);
    

    

      return  nameMatch || titleMatch;
    });
  }, [searchQuery, data]);


  if (loading) return <div className="p-10 text-emerald-600 font-bold animate-pulse">Loading tutors...</div>;

  return (
    <div className="p-6 ">
      <div className='flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4'>
        <h1 className="text-2xl font-bold text-slate-800 border-b-4 border-emerald-500 pb-1">
          Find Your Tutor
        </h1>

        {/* Improved Search Bar */}
        <div className="relative w-full md:max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value.trimStart())} // Trim only the start to allow users to correct typos without losing their entire query
            placeholder="Search by name, subject, or bio..."
            className="w-full pl-10 pr-10 py-2.5 bg-white border border-slate-200 rounded-xl shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all outline-none"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 hover:bg-slate-100 p-1 rounded-full transition-colors"
            >
              <X className="h-4 w-4 text-slate-400" />
            </button>
          )}
        </div>
      </div>
  
      {filteredTutors.length > 0 ? (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredTutors.map((tutor) => (
            <li key={tutor._id || tutor.email} className="list-none">
              <TutorCard tutor={tutor} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-center py-20 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200">
          <p className="text-slate-500 text-lg">No tutors match &rdquo;{searchQuery}&ldquo;</p>
          <button 
            onClick={() => setSearchQuery("")}
            className="mt-2 text-emerald-600 font-semibold hover:underline"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  )
}
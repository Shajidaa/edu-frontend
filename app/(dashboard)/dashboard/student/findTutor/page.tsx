"use client"
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import TutorCard from './_components/TutorCard';

export default function Find() {
 
  const [data, setData] = useState([]); 
  const [loading, setLoading] = useState(true);

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

  if (loading) return <div className="p-10 text-emerald-600 font-bold">Loading tutors...</div>;
console.log(data);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-slate-800 border-b-2 border-emerald-500 inline-block">
        Find Your Tutor
      </h1>

      {Array.isArray(data) && data.length > 0 ? (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.map((tutor: any) => (
            <li key={tutor._id || tutor.email}>
              <TutorCard tutor={tutor} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-center p-10 bg-slate-50 rounded-lg border border-dashed border-slate-300">
          <p className="text-slate-500">No tutors found at the moment.</p>
        </div>
      )}
    </div>
  )
}
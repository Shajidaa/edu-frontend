"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'next/navigation';
import { CheckCircle, MapPin, Phone, GraduationCap, Briefcase, BookOpen } from 'lucide-react';

export default function TutorProfilePage() {
  const { email } = useParams();
  const [tutor, setTutor] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTutorProfile = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/profile/${email}`);
        setTutor(response.data);
      } catch (error) {
        console.error("Error loading profile", error);
      } finally {
        setLoading(false);
      }
    };
    if (email) fetchTutorProfile();
  }, [email]);

  if (loading) return <div className="p-10 text-emerald-600 font-bold">Loading Profile...</div>;
  if (!tutor) return <div className="p-10 text-red-500 font-bold">Tutor not found.</div>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-sm rounded-3xl my-10 border border-slate-100">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center gap-6 border-b pb-8 border-emerald-50">
        <img src={tutor.image} alt={tutor.name} className="w-32 h-32 rounded-2xl object-cover ring-4 ring-emerald-50" />
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <h1 className="text-3xl font-bold text-slate-800">{tutor.name}</h1>
            {tutor.role === 'tutor' && <CheckCircle className="text-emerald-500 w-6 h-6" fill="currentColor" />}
          </div>
          <p className="text-emerald-600 font-semibold text-lg">{tutor.profile?.title}</p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-3 text-slate-500 text-sm">
            <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {tutor.profile?.location}</span>
            <span className="flex items-center gap-1"><Phone className="w-4 h-4" /> {tutor.profile?.phone}</span>
          </div>
        </div>
      </div>

      {/* Bio Section */}
      <div className="py-8">
        <h3 className="text-xl font-bold text-slate-800 mb-3 flex items-center gap-2">
          <BookOpen className="text-emerald-500" /> About Me
        </h3>
        <p className="text-slate-600 leading-relaxed">{tutor.profile?.bio}</p>
      </div>

      {/* Experience & Education Grid */}
      <div className="grid md:grid-cols-2 gap-8 py-8 border-t border-emerald-50">
        <div>
          <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
            <GraduationCap className="text-emerald-500" /> Education
          </h3>
          {tutor.profile?.education?.map((edu: any, index: number) => (
            <div key={index} className="mb-3 p-3 bg-emerald-50 rounded-xl">
              <p className="font-bold text-slate-700">{edu.degree}</p>
              <p className="text-sm text-slate-500">{edu.institution}</p>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
            <Briefcase className="text-emerald-500" /> Subjects
          </h3>
          <div className="flex flex-wrap gap-2">
            {tutor.profile?.subjects?.map((sub: any, index: number) => (
              <span key={index} className="bg-white border border-emerald-200 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
                {sub.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
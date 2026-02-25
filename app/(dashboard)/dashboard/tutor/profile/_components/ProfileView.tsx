import { Mail, Phone, MapPin, BookOpen, GraduationCap, Briefcase, Edit3 } from 'lucide-react';
import { ProfileData } from '../page';

export function ProfileView({ data, session, onEdit }: { data: ProfileData, session: any, onEdit: () => void }) {
    return (
        <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-sm p-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 bg-blue-500 h-full"></div>
                <div className="flex justify-between items-start">
                    <div className="space-y-4">
                        <h1 className="text-4xl font-extrabold text-gray-900">{session?.user?.name || "Tutor Profile"}</h1>
                        <p className="text-xl text-blue-600 font-medium">{data.title || "Professional Tutor"}</p>
                        <div className="flex flex-wrap gap-4 text-gray-600">
                            <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {data.location || "Location not set"}</span>
                            <span className="flex items-center gap-1"><Phone className="w-4 h-4" /> {data.phone || "No phone"}</span>
                            <span className="flex items-center gap-1"><Mail className="w-4 h-4" /> {session?.user?.email}</span>
                        </div>
                    </div>
                    <button onClick={onEdit} className="flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-all shadow-lg">
                        <Edit3 className="w-4 h-4" /> Edit Profile
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <BookOpen className="w-6 h-6 text-blue-500" /> Bio & Philosophy
                </h2>
                <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{data.bio || "No bio provided."}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl shadow-sm p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2"><GraduationCap className="w-6 h-6 text-blue-500" /> Education</h2>
                    {data.education.map((edu, i) => (
                        <div key={i} className="border-l-2 border-blue-100 pl-4 mb-4">
                            <h3 className="font-bold text-gray-900">{edu.degree}</h3>
                            <p className="text-blue-600 text-sm">{edu.institution}</p>
                            <p className="text-gray-500 text-xs">{edu.year} • {edu.field}</p>
                        </div>
                    ))}
                </div>

                <div className="bg-white rounded-2xl shadow-sm p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2"><BookOpen className="w-6 h-6 text-blue-500" /> Subjects</h2>
                    <div className="flex flex-wrap gap-3">
                        {data.subjects.map((sub, i) => (
                            <div key={i} className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold border border-blue-100">
                                {sub.name} <span className="text-blue-400 font-normal">| {sub.level}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
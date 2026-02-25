'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import {
    Mail,
    Phone,
    MapPin,
    BookOpen,
    GraduationCap,
    Briefcase,
    Plus,
    Trash2,
    Save,
    Loader2,
    Edit3,
    X
} from 'lucide-react';

interface Education {
    degree: string;
    institution: string;
    year: string;
    field: string;
}

interface Subject {
    name: string;
    level: string;
}

interface Experience {
    role: string;
    institution: string;
    period: string;
    description: string;
}

interface ProfileData {
    title: string;
    bio: string;
    location: string;
    phone: string;
    education: Education[];
    subjects: Subject[];
    experience: Experience[];
}

export default function ProfilePage() {
    const { data: session } = useSession();
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [message, setMessage] = useState('');
    const [isEditing, setIsEditing] = useState(false);

    const [formData, setFormData] = useState<ProfileData>({
        title: '',
        bio: '',
        location: '',
        phone: '',
        education: [{ degree: '', institution: '', year: '', field: '' }],
        subjects: [{ name: '', level: '' }],
        experience: [{ role: '', institution: '', period: '', description: '' }]
    });

    // Fetch existing profile data
    const fetchProfile = async () => {
        if (!session?.user?.email) return;
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/profile/${session.user.email}`);
            if (response.ok) {
                const data = await response.json();
                if (data.profile) {
                    setFormData(data.profile);
                }
            }
        } catch (error) {
            console.error('Error fetching profile:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProfile();
    }, [session]);

    const handleInputChange = (field: keyof ProfileData, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    // --- Dynamic Field Handlers ---
    const handleEducationChange = (index: number, field: keyof Education, value: string) => {
        const newEducation = [...formData.education];
        newEducation[index] = { ...newEducation[index], [field]: value };
        setFormData(prev => ({ ...prev, education: newEducation }));
    };

    const handleSubjectChange = (index: number, field: keyof Subject, value: string) => {
        const newSubjects = [...formData.subjects];
        newSubjects[index] = { ...newSubjects[index], [field]: value };
        setFormData(prev => ({ ...prev, subjects: newSubjects }));
    };

    const handleExperienceChange = (index: number, field: keyof Experience, value: string) => {
        const newExperience = [...formData.experience];
        newExperience[index] = { ...newExperience[index], [field]: value };
        setFormData(prev => ({ ...prev, experience: newExperience }));
    };

    // --- Add/Remove Helpers ---
    const addEducation = () => setFormData(p => ({ ...p, education: [...p.education, { degree: '', institution: '', year: '', field: '' }] }));
    const removeEducation = (index: number) => setFormData(p => ({ ...p, education: p.education.filter((_, i) => i !== index) }));

    const addSubject = () => setFormData(p => ({ ...p, subjects: [...p.subjects, { name: '', level: '' }] }));
    const removeSubject = (index: number) => setFormData(p => ({ ...p, subjects: p.subjects.filter((_, i) => i !== index) }));

    const addExperience = () => setFormData(p => ({ ...p, experience: [...p.experience, { role: '', institution: '', period: '', description: '' }] }));
    const removeExperience = (index: number) => setFormData(p => ({ ...p, experience: p.experience.filter((_, i) => i !== index) }));

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!session?.user?.email) return;

        setSaving(true);
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/profile`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: session.user.email, profile: formData }),
            });

            if (response.ok) {
                setMessage('Profile updated successfully!');
                setIsEditing(false); // Switch back to profile view
                setTimeout(() => setMessage(''), 3000);
            }
        } catch (error) {
            setMessage('An error occurred. Please try again.');
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">

                {message && (
                    <div className={`mb-6 p-4 rounded-lg shadow-sm border ${message.includes('success') ? 'bg-green-50 border-green-200 text-green-800' : 'bg-red-50 border-red-200 text-red-800'}`}>
                        {message}
                    </div>
                )}

                {!isEditing ? (
                    /* ============================== 
                         VIEW PROFILE MODE 
                       ============================== */
                    <div className="space-y-6">
                        {/* Hero Header */}
                        <div className="bg-white rounded-2xl shadow-sm p-8 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-2 bg-blue-500 h-full"></div>
                            <div className="flex justify-between items-start">
                                <div className="space-y-4">
                                    <h1 className="text-4xl font-extrabold text-gray-900">{session?.user?.name || "Tutor Profile"}</h1>
                                    <p className="text-xl text-blue-600 font-medium">{formData.title || "Professional Tutor"}</p>
                                    <div className="flex flex-wrap gap-4 text-gray-600">
                                        <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {formData.location || "Location not set"}</span>
                                        <span className="flex items-center gap-1"><Phone className="w-4 h-4" /> {formData.phone || "No phone"}</span>
                                        <span className="flex items-center gap-1"><Mail className="w-4 h-4" /> {session?.user?.email}</span>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setIsEditing(true)}
                                    className="flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-all shadow-lg"
                                >
                                    <Edit3 className="w-4 h-4" /> Edit Profile
                                </button>
                            </div>
                        </div>

                        {/* About Me */}
                        <div className="bg-white rounded-2xl shadow-sm p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <BookOpen className="w-6 h-6 text-blue-500" /> Bio & Philosophy
                            </h2>
                            <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                                {formData.bio || "No bio information provided yet."}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Education View */}
                            <div className="bg-white rounded-2xl shadow-sm p-8">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                    <GraduationCap className="w-6 h-6 text-blue-500" /> Education
                                </h2>
                                <div className="space-y-6">
                                    {formData.education.map((edu, i) => (
                                        <div key={i} className="border-l-2 border-blue-100 pl-4">
                                            <h3 className="font-bold text-gray-900">{edu.degree}</h3>
                                            <p className="text-blue-600 text-sm">{edu.institution}</p>
                                            <p className="text-gray-500 text-xs">{edu.year} • {edu.field}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Subjects View */}
                            <div className="bg-white rounded-2xl shadow-sm p-8">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                    <BookOpen className="w-6 h-6 text-blue-500" /> Subjects
                                </h2>
                                <div className="flex flex-wrap gap-3">
                                    {formData.subjects.map((sub, i) => (
                                        <div key={i} className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold border border-blue-100">
                                            {sub.name} <span className="text-blue-400 font-normal">| {sub.level}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Experience View */}
                        <div className="bg-white rounded-2xl shadow-sm p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <Briefcase className="w-6 h-6 text-blue-500" /> Experience
                            </h2>
                            <div className="space-y-8">
                                {formData.experience.map((exp, i) => (
                                    <div key={i} className="relative pl-6 border-l-2 border-gray-100">
                                        <div className="absolute -left-[9px] top-0 w-4 h-4 bg-white border-2 border-blue-500 rounded-full"></div>
                                        <div className="flex justify-between items-start mb-1">
                                            <h3 className="font-bold text-gray-900">{exp.role}</h3>
                                            <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-lg">{exp.period}</span>
                                        </div>
                                        <p className="text-gray-600 font-medium mb-2">{exp.institution}</p>
                                        <p className="text-gray-500 text-sm">{exp.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ) : (
                    /* ============================== 
                         EDIT PROFILE FORM MODE 
                       ============================== */
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="bg-white rounded-2xl shadow-sm p-6 flex justify-between items-center">
                            <div>
                                <h1 className="text-3xl font-bold text-gray-900">Edit Profile</h1>
                                <p className="text-gray-600">Update your public tutor persona</p>
                            </div>
                            <button
                                type="button"
                                onClick={() => {
                                    fetchProfile(); // Reset changes
                                    setIsEditing(false);
                                }}
                                className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                            >
                                <X className="w-8 h-8" />
                            </button>
                        </div>

                        {/* Basic Info Fields */}
                        <div className="bg-white rounded-2xl shadow-sm p-6">
                            <h2 className="text-xl font-bold text-gray-900 mb-6">General Information</h2>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Professional Title</label>
                                    <input
                                        type="text"
                                        value={formData.title}
                                        onChange={(e) => handleInputChange('title', e.target.value)}
                                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                                        placeholder="e.g. Expert SAT Math Instructor"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                                    <textarea
                                        value={formData.bio}
                                        onChange={(e) => handleInputChange('bio', e.target.value)}
                                        rows={4}
                                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <input
                                        placeholder="Location"
                                        value={formData.location}
                                        onChange={(e) => handleInputChange('location', e.target.value)}
                                        className="w-full px-4 py-2 border rounded-lg"
                                    />
                                    <input
                                        placeholder="Phone"
                                        value={formData.phone}
                                        onChange={(e) => handleInputChange('phone', e.target.value)}
                                        className="w-full px-4 py-2 border rounded-lg"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Education Form Section */}
                        <div className="bg-white rounded-2xl shadow-sm p-6">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-xl font-bold text-gray-900">Education</h2>
                                <button type="button" onClick={addEducation} className="text-blue-600 flex items-center gap-1 text-sm"><Plus size={16} /> Add</button>
                            </div>
                            {formData.education.map((edu, idx) => (
                                <div key={idx} className="mb-4 p-4 border rounded-xl relative">
                                    <button type="button" onClick={() => removeEducation(idx)} className="absolute top-2 right-2 text-red-400"><Trash2 size={18} /></button>
                                    <div className="grid grid-cols-2 gap-4">
                                        <input placeholder="Degree" value={edu.degree} onChange={e => handleEducationChange(idx, 'degree', e.target.value)} className="border p-2 rounded" />
                                        <input placeholder="Institution" value={edu.institution} onChange={e => handleEducationChange(idx, 'institution', e.target.value)} className="border p-2 rounded" />
                                        <input placeholder="Year" value={edu.year} onChange={e => handleEducationChange(idx, 'year', e.target.value)} className="border p-2 rounded" />
                                        <input placeholder="Field" value={edu.field} onChange={e => handleEducationChange(idx, 'field', e.target.value)} className="border p-2 rounded" />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Experience Form Section */}
                        <div className="bg-white rounded-2xl shadow-sm p-6">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-xl font-bold text-gray-900">Experience</h2>
                                <button type="button" onClick={addExperience} className="text-blue-600 flex items-center gap-1 text-sm"><Plus size={16} /> Add</button>
                            </div>
                            {formData.experience.map((exp, idx) => (
                                <div key={idx} className="mb-4 p-4 border rounded-xl relative">
                                    <button type="button" onClick={() => removeExperience(idx)} className="absolute top-2 right-2 text-red-400"><Trash2 size={18} /></button>
                                    <div className="space-y-3">
                                        <div className="grid grid-cols-2 gap-4">
                                            <input placeholder="Role" value={exp.role} onChange={e => handleExperienceChange(idx, 'role', e.target.value)} className="border p-2 rounded" />
                                            <input placeholder="Institution" value={exp.institution} onChange={e => handleExperienceChange(idx, 'institution', e.target.value)} className="border p-2 rounded" />
                                        </div>
                                        <input placeholder="Period" value={exp.period} onChange={e => handleExperienceChange(idx, 'period', e.target.value)} className="border p-2 rounded w-full" />
                                        <textarea placeholder="Description" value={exp.description} onChange={e => handleExperienceChange(idx, 'description', e.target.value)} className="border p-2 rounded w-full" rows={2} />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Save Actions */}
                        <div className="flex gap-4">
                            <button
                                type="submit"
                                disabled={saving}
                                className="flex-1 bg-blue-600 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 disabled:opacity-50"
                            >
                                {saving ? <Loader2 className="animate-spin" /> : <Save />}
                                Save Profile Changes
                            </button>
                            <button
                                type="button"
                                onClick={() => setIsEditing(false)}
                                className="px-8 bg-white text-gray-700 border-2 border-gray-100 py-4 rounded-2xl font-bold hover:bg-gray-50 transition-all"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}
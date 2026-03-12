'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { Loader2 } from 'lucide-react';
import { ProfileView } from './_components/ProfileView';
import { ProfileEditForm } from './_components/ProfileEditForm';

// --- Interfaces ---
export interface Education { degree: string; institution: string; year: string; field: string; }
export interface Subject { name: string; level: string; }
export interface Experience { role: string; institution: string; period: string; description: string; }

export interface ProfileData {
    title: string;
    bio: string;
    location: string;
    phone: string;
    calendlyLink: string;
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
        title: '', bio: '', location: '', phone: '',calendlyLink: '',
        education: [{ degree: '', institution: '', year: '', field: '' }],
        subjects: [{ name: '', level: '' }],
        experience: [{ role: '', institution: '', period: '', description: '' }]
    });

   const fetchProfile = async () => {
    if (!session?.user?.email) return;
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/profile/${session.user.email}`);
        if (response.ok) {
            const data = await response.json();
            if (data.profile) {
                // SPREAD the data and provide fallbacks for all arrays
                setFormData({
                    ...data.profile,
                    title: data.profile.title || '',
                    bio: data.profile.bio || '',
                    location: data.profile.location || '',
                    phone: data.profile.phone || '',
                    calendlyLink: data.profile.calendlyLink || '',
                    education: data.profile.education || [],
                    subjects: data.profile.subjects || [],
                    experience: data.profile.experience || []
                });
            }
        }
    } catch (error) {
        console.error('Error fetching profile:', error);
    } finally {
        setLoading(false);
    }
};

    useEffect(() => { fetchProfile(); }, [session]);

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
    if (!session?.user?.email) {
        setMessage("User email not found. please login again.");
        return;
    }
    setSaving(true);
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/profile`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: session?.user?.email, profile: formData }),
            });
            if (response.ok) {
                setMessage('Profile updated successfully!');
                setIsEditing(false);
                setTimeout(() => setMessage(''), 3000);
            }
        } catch (error) {
            setMessage('An error occurred.');
        } finally {
            setSaving(false);
        }
    };

    if (loading) return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
            <Loader2 className="w-8 h-8 animate-spin text-[#0f3d2e]" />
        </div>
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8">
            <div >
                {message && (
                    <div className={`mb-6 p-4 rounded-xl border-2 shadow-lg ${message.includes('success') ? 'bg-[#d9f99d]/20 border-[#d9f99d] text-[#0f3d2e]' : 'bg-red-50 border-red-300 text-red-800'}`}>
                        <p className="font-semibold">{message}</p>
                    </div>
                )}

                {isEditing ? (
                    <ProfileEditForm
                        formData={formData}
                        setFormData={setFormData}
                        onSubmit={handleSubmit}
                        onCancel={() => { fetchProfile(); setIsEditing(false); }}
                        saving={saving}
                    />
                ) : (
                    <ProfileView
                        data={formData}
                        session={session}
                        onEdit={() => setIsEditing(true)}
                    />
                )}
            </div>
        </div>
    );
}
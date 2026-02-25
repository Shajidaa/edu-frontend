import { Plus, Trash2, Save, X, Loader2, BookOpen } from 'lucide-react';
import { ProfileData, Education, Experience, Subject } from '../page';

interface EditProps {
    formData: ProfileData;
    setFormData: React.Dispatch<React.SetStateAction<ProfileData>>;
    onSubmit: (e: React.FormEvent) => void;
    onCancel: () => void;
    saving: boolean;
}

export function ProfileEditForm({ formData, setFormData, onSubmit, onCancel, saving }: EditProps) {

    const updateField = (field: keyof ProfileData, value: any) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const updateArrayField = (arrayName: 'education' | 'experience' | 'subjects', index: number, field: string, value: string) => {
        const newArray = [...formData[arrayName]] as any[];
        newArray[index] = { ...newArray[index], [field]: value };
        updateField(arrayName, newArray);
    };

    return (
        <form onSubmit={onSubmit} className="space-y-6">
            <div className="bg-white rounded-2xl shadow-sm p-6 flex justify-between items-center">
                <h1 className="text-3xl font-bold text-gray-900">Edit Profile</h1>
                <button type="button" onClick={onCancel} className="p-2 text-gray-400 hover:text-red-500"><X className="w-8 h-8" /></button>
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-6">General Information</h2>
            {/* General Info */}
            <div className="bg-white rounded-2xl shadow-sm p-6 space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Professional Title</label>
                    <input
                        className="w-full px-4 py-2 border rounded-lg"
                        placeholder="Professional Title"
                        value={formData.title}
                        onChange={e => updateField('title', e.target.value)}
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                    <textarea
                        className="w-full px-4 py-2 border rounded-lg"
                        placeholder="Bio"
                        rows={4}
                        value={formData.bio}
                        onChange={e => updateField('bio', e.target.value)}
                    />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                        <input
                            placeholder="Location"
                            value={formData.location}
                            onChange={(e) => updateField('location', e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                        <input
                            placeholder="Phone"
                            value={formData.phone}
                            onChange={(e) => updateField('phone', e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg"
                        />
                    </div>

                </div>
            </div>

            {/* Dynamic Education Section */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
                <div className="flex justify-between mb-4">
                    <h2 className="font-bold">Education</h2>
                    <button type="button" onClick={() => updateField('education', [...formData.education, { degree: '', institution: '', year: '', field: '' }])} className="text-blue-600 text-sm flex items-center gap-1"><Plus size={14} /> Add</button>
                </div>
                {formData.education.map((edu, idx) => (
                    <div key={idx} className="grid grid-cols-2 gap-2 mb-4 p-4 border rounded-xl relative">
                        <input placeholder="Degree" value={edu.degree} onChange={e => updateArrayField('education', idx, 'degree', e.target.value)} className="border p-2 text-sm" />
                        <input placeholder="Institution" value={edu.institution} onChange={e => updateArrayField('education', idx, 'institution', e.target.value)} className="border p-2 text-sm" />
                        <button type="button" onClick={() => updateField('education', formData.education.filter((_, i) => i !== idx))} className="absolute -top-2 -right-2 bg-red-100 text-red-600 rounded-full p-1"><Trash2 size={14} /></button>
                    </div>
                ))}
            </div>

            {/* Actions */}
            <div className="flex gap-4">
                <button type="submit" disabled={saving} className="flex-1 bg-blue-600 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2">
                    {saving ? <Loader2 className="animate-spin" /> : <Save />} Save Changes
                </button>
                <button type="button" onClick={onCancel} className="px-8 bg-white border-2 py-4 rounded-2xl font-bold">Cancel</button>
            </div>
        </form>
    );
}
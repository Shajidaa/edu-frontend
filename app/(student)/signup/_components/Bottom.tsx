import { BookOpen, GraduationCap, Users } from 'lucide-react'


export default function Bottom() {
    return (
        <div className="mt-16 text-center">
            <div className="md:inline-flex items-center 
                gap-8 bg-white/10 backdrop-blur-sm px-8 py-4 rounded-2xl border
                 border-white/20">
                <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-[#d9f99d]" />
                    <div className="text-left">
                        <p className="text-2xl font-bold text-white">10,000+</p>
                        <p className="text-sm text-gray-300">Active Users</p>
                    </div>
                </div>
                <div className="w-px h-12 bg-white/20"></div>
                <div className="flex items-center gap-3">
                    <GraduationCap className="w-5 h-5 text-[#d9f99d]" />
                    <div className="text-left">
                        <p className="text-2xl font-bold text-white">500+</p>
                        <p className="text-sm text-gray-300">Expert Tutors</p>
                    </div>
                </div>
                <div className="w-px h-12 bg-white/20"></div>
                <div className="flex items-center gap-3">
                    <BookOpen className="w-5 h-5 text-[#d9f99d]" />
                    <div className="text-left">
                        <p className="text-2xl font-bold text-white">50+</p>
                        <p className="text-sm text-gray-300">Subjects</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

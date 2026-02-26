"use client";

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import {
    BookOpen,
    Clock,
    GraduationCap,
    Trophy,
    CalendarDays,
    Search,
    TrendingUp
} from 'lucide-react';
import { useUserRole } from '../../hooks/useUserRole';

export default function StudentDashboard() {
    const { data: session } = useSession();
    const router = useRouter();
    const { userData, role: userRole, loading } = useUserRole();

    useEffect(() => {
        if (!loading && userRole === 'tutor') {
            router.push('/dashboard/tutor');
        }
    }, [userRole, loading, router]);

    const studentStats = [
        { name: 'Active Sessions', value: '12', icon: Clock, color: 'bg-blue-500' },
        { name: 'Hours Learned', value: '48', icon: GraduationCap, color: 'bg-green-500' },
        { name: 'Achievements', value: '8', icon: Trophy, color: 'bg-yellow-500' },
        { name: 'Upcoming', value: '3', icon: CalendarDays, color: 'bg-purple-500' },
    ];

    const upcomingSessions = [
        { id: 1, subject: 'Mathematics', tutor: 'John Doe', time: 'Today, 2:00 PM', duration: '1 hour' },
        { id: 2, subject: 'Physics', tutor: 'Jane Smith', time: 'Tomorrow, 10:00 AM', duration: '1.5 hours' },
        { id: 3, subject: 'Chemistry', tutor: 'Mike Johnson', time: 'Wed, 3:00 PM', duration: '1 hour' },
    ];

    const recentActivity = [
        { id: 1, action: 'Completed session', subject: 'Algebra', time: '2 hours ago' },
        { id: 2, action: 'New assignment', subject: 'Calculus', time: '5 hours ago' },
        { id: 3, action: 'Feedback received', subject: 'Geometry', time: '1 day ago' },
    ];

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-[calc(100vh-8rem)]">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* Welcome Section */}
            <div className="bg-gradient-to-br from-[#0f3d2e] to-[#1a533f] rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#d9f99d]/10 rounded-full blur-3xl"></div>
                <div className="relative">
                    <h1 className="text-4xl font-bold mb-2">
                        Welcome back, {userData?.name || session?.user?.name || 'Student'}!
                    </h1>
                    <p className="text-[#d9f99d] text-lg">
                        Ready to continue your learning journey?
                    </p>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {studentStats.map((stat) => (
                    <div key={stat.name} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-600 mb-1">{stat.name}</p>
                                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                            </div>
                            <div className={`${stat.color} p-3 rounded-xl`}>
                                <stat.icon className="h-6 w-6 text-white" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Upcoming Sessions */}
                <div className="lg:col-span-2 bg-white rounded-3xl shadow-lg border border-gray-100">
                    <div className="p-6 border-b border-gray-200">
                        <h2 className="text-2xl font-bold text-gray-900">Upcoming Sessions</h2>
                    </div>
                    <div className="p-6">
                        <div className="space-y-4">
                            {upcomingSessions.map((session) => (
                                <div key={session.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                                    <div className="flex items-center space-x-4">
                                        <div className="bg-gradient-to-br from-[#0f3d2e] to-[#1a533f] p-3 rounded-xl">
                                            <BookOpen className="h-6 w-6 text-[#d9f99d]" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">{session.subject}</h3>
                                            <p className="text-sm text-gray-600">with {session.tutor}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm font-medium text-gray-900">{session.time}</p>
                                        <p className="text-xs text-gray-500">{session.duration}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white rounded-3xl shadow-lg border border-gray-100">
                    <div className="p-6 border-b border-gray-200">
                        <h2 className="text-2xl font-bold text-gray-900">Recent Activity</h2>
                    </div>
                    <div className="p-6">
                        <div className="space-y-4">
                            {recentActivity.map((activity) => (
                                <div key={activity.id} className="flex items-start space-x-3">
                                    <div className="bg-[#d9f99d]/20 p-2 rounded-full">
                                        <TrendingUp className="h-4 w-4 text-[#0f3d2e]" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                                        <p className="text-sm text-gray-600">{activity.subject}</p>
                                        <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Actions</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <button
                        onClick={() => router.push('/dashboard/student/findTutor')}
                        className="p-6 border-2 border-dashed border-gray-300 rounded-2xl hover:border-[#0f3d2e] hover:bg-[#d9f99d]/10 transition-all group"
                    >
                        <Search className="h-8 w-8 text-gray-400 group-hover:text-[#0f3d2e] mx-auto mb-2 transition-colors" />
                        <p className="text-sm font-semibold text-gray-700 group-hover:text-[#0f3d2e]">Find Tutor</p>
                    </button>
                    <button className="p-6 border-2 border-dashed border-gray-300 rounded-2xl hover:border-[#0f3d2e] hover:bg-[#d9f99d]/10 transition-all group">
                        <CalendarDays className="h-8 w-8 text-gray-400 group-hover:text-[#0f3d2e] mx-auto mb-2 transition-colors" />
                        <p className="text-sm font-semibold text-gray-700 group-hover:text-[#0f3d2e]">Schedule Session</p>
                    </button>
                    <button className="p-6 border-2 border-dashed border-gray-300 rounded-2xl hover:border-[#0f3d2e] hover:bg-[#d9f99d]/10 transition-all group">
                        <BookOpen className="h-8 w-8 text-gray-400 group-hover:text-[#0f3d2e] mx-auto mb-2 transition-colors" />
                        <p className="text-sm font-semibold text-gray-700 group-hover:text-[#0f3d2e]">Browse Resources</p>
                    </button>
                    <button className="p-6 border-2 border-dashed border-gray-300 rounded-2xl hover:border-[#0f3d2e] hover:bg-[#d9f99d]/10 transition-all group">
                        <TrendingUp className="h-8 w-8 text-gray-400 group-hover:text-[#0f3d2e] mx-auto mb-2 transition-colors" />
                        <p className="text-sm font-semibold text-gray-700 group-hover:text-[#0f3d2e]">View Progress</p>
                    </button>
                </div>
            </div>
        </div>
    );
}

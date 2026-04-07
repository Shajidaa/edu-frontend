"use client";

import { useSession } from 'next-auth/react';
import {
  BarChart3,
  Clock,
  GraduationCap,
  Trophy,
  CalendarDays,
  BookOpen
} from 'lucide-react';
import { useUserRole } from '../hooks/useUserRole';
import SectionWrapper from '@/app/(after)/components/share/SectionWrapper';

export default function DashboardPage() {
  const { data: session } = useSession();
  const { userData, role: userRole, loading } = useUserRole();

  const studentStats = [
    { name: 'Active Sessions', value: '12', icon: Clock, color: 'bg-blue-500' },
    { name: 'Hours Learned', value: '48', icon: GraduationCap, color: 'bg-green-500' },
    { name: 'Achievements', value: '8', icon: Trophy, color: 'bg-yellow-500' },
    { name: 'Upcoming', value: '3', icon: CalendarDays, color: 'bg-purple-500' },
  ];

  const tutorStats = [
    { name: 'Active Students', value: '24', icon: GraduationCap, color: 'bg-blue-500' },
    { name: 'Hours Taught', value: '156', icon: Clock, color: 'bg-green-500' },
    { name: 'Avg Rating', value: '4.8', icon: Trophy, color: 'bg-yellow-500' },
    { name: 'This Week', value: '18', icon: CalendarDays, color: 'bg-purple-500' },
  ];

  const stats = userRole === 'tutor' ? tutorStats : studentStats;

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
    <div className="space-y-4 sm:space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-800 rounded-lg p-4 sm:p-6 text-white">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          Welcome back, {userData?.name || session?.user?.name || 'User'}!
        </h1>
        <p className="text-blue-100 text-sm sm:text-base">
          {userRole === 'tutor'
            ? "Here's what's happening with your students today."
            : "Ready to continue your learning journey?"}
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white rounded-lg p-4 sm:p-6 shadow-sm border border-gray-200">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="mb-3 sm:mb-0">
                <p className="text-xs sm:text-sm text-gray-600 mb-1">{stat.name}</p>
                <p className="text-2xl sm:text-3xl font-bold text-gray-900">{stat.value}</p>
              </div>
              <div className={`${stat.color} p-2 sm:p-3 rounded-lg w-fit`}>
                <stat.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        <SectionWrapper direction='right'> 
          {/* Upcoming Sessions */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-4 sm:p-6 border-b border-gray-200">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Upcoming Sessions</h2>
          </div>
          <div className="p-4 sm:p-6">
            <div className="space-y-3 sm:space-y-4">
              {upcomingSessions.map((session) => (
                <div key={session.id} className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 sm:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors gap-3">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="bg-blue-100 p-2 sm:p-3 rounded-lg flex-shrink-0">
                      <BookOpen className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm sm:text-base">{session.subject}</h3>
                      <p className="text-xs sm:text-sm text-gray-600">with {session.tutor}</p>
                    </div>
                  </div>
                  <div className="text-left sm:text-right pl-11 sm:pl-0">
                    <p className="text-xs sm:text-sm font-medium text-gray-900">{session.time}</p>
                    <p className="text-xs text-gray-500">{session.duration}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div></SectionWrapper>
       
 <SectionWrapper direction='left'>
  {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-4 sm:p-6 border-b border-gray-200">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Recent Activity</h2>
          </div>
          <div className="p-4 sm:p-6">
            <div className="space-y-3 sm:space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start space-x-3">
                  <div className="bg-green-100 p-2 rounded-full flex-shrink-0">
                    <BarChart3 className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm font-medium text-gray-900">{activity.action}</p>
                    <p className="text-xs sm:text-sm text-gray-600 truncate">{activity.subject}</p>
                    <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
 </SectionWrapper>
      
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          <button className="p-3 sm:p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors">
            <CalendarDays className="h-6 w-6 sm:h-8 sm:w-8 text-gray-400 mx-auto mb-2" />
            <p className="text-xs sm:text-sm font-medium text-gray-700">Schedule Session</p>
          </button>
          <button className="p-3 sm:p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors">
            <BookOpen className="h-6 w-6 sm:h-8 sm:w-8 text-gray-400 mx-auto mb-2" />
            <p className="text-xs sm:text-sm font-medium text-gray-700">Browse Resources</p>
          </button>
          <button className="p-3 sm:p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors">
            <BarChart3 className="h-6 w-6 sm:h-8 sm:w-8 text-gray-400 mx-auto mb-2" />
            <p className="text-xs sm:text-sm font-medium text-gray-700">View Progress</p>
          </button>
          <button className="p-3 sm:p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors">
            <GraduationCap className="h-6 w-6 sm:h-8 sm:w-8 text-gray-400 mx-auto mb-2" />
            <p className="text-xs sm:text-sm font-medium text-gray-700">Find Tutor</p>
          </button>
        </div>
      </div>
    </div>
  );
}

"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Home,
  Users,
  GraduationCap,
  BookOpen,
  BarChart3,
  Calendar,
  Settings,
  FileText,
  ClipboardCheck
} from 'lucide-react';
import { useUserRole } from '../hooks/useUserRole';
import Logo from '@/app/(marketing)/components/share/Logo';

export default function Sidebar() {
  const pathname = usePathname();
  const { role: userRole, loading } = useUserRole();

  const studentMenuItems = [
    { name: 'Dashboard', href: '/dashboard', icon: Home },
    { name: 'Find Tutor', href: '/dashboard/student/findTutor', icon: Users },
    { name: 'My Sessions', href: '/dashboard/student/sessions', icon: Calendar },
    { name: 'Progress', href: '/dashboard/student/progress', icon: BarChart3 },
    { name: 'Resources', href: '/dashboard/student/resources', icon: BookOpen },
  ];

  const tutorMenuItems = [
    { name: 'Dashboard', href: '/dashboard', icon: Home },
    { name: 'My Students', href: '/tutor/students', icon: Users },
    { name: 'Assessments', href: '/tutor/assessment', icon: ClipboardCheck },
    { name: 'Schedule', href: '/tutor/schedule', icon: Calendar },
    { name: 'Materials', href: '/tutor/materials', icon: FileText },
    { name: 'Analytics', href: '/tutor/analytics', icon: BarChart3 },
  ];

  const menuItems = userRole === 'tutor' ? tutorMenuItems : studentMenuItems;

  if (loading) {
    return (
      <aside className="fixed left-0 top-0 h-screen w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-gray-200">
          <GraduationCap className="h-8 w-8 text-blue-600" />

        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      </aside>
    );
  }

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-white border-r border-gray-200 flex flex-col">
      {/* Logo Section */}
      <div className="h-16 flex items-center px-6 border-b border-gray-200">
        <Logo />
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 px-4 py-6 overflow-y-auto">
        <ul className="space-y-1">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${isActive
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-700 hover:bg-gray-50'
                    }`}
                >
                  <item.icon className={`h-5 w-5 ${isActive ? 'text-blue-600' : 'text-gray-500'}`} />
                  <span className="font-medium">{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Settings Section */}
      <div className="px-4 py-4 border-t border-gray-200">
        <Link
          href="/dashboard/settings"
          className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
        >
          <Settings className="h-5 w-5 text-gray-500" />
          <span className="font-medium">Settings</span>
        </Link>
      </div>
    </aside>
  );
}

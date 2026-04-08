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
  ClipboardCheck,
  X, UserCircle
} from 'lucide-react';
import { useUserRole } from '../hooks/useUserRole';
import Logo from '@/app/(student)/components/share/Logo';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
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
    { name: 'My Students', href: '/dashboard/tutor/students', icon: Users },
    { name: 'Assessments', href: '/dashboard/tutor/assessment', icon: ClipboardCheck },
    { name: 'Schedule', href: '/dashboard/tutor/schedule', icon: Calendar },
    { name: 'Materials', href: '/dashboard/tutor/materials', icon: FileText },
    { name: 'Analytics', href: '/dashboard/tutor/analytics', icon: BarChart3 },
    { name: 'Profile', href: '/dashboard/tutor/profile', icon: UserCircle },
  ];

  const menuItems = userRole === 'tutor' ? tutorMenuItems : studentMenuItems;

  if (loading) {
    return (
      <>
        {/* Mobile Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={onClose}
          />
        )}

        <aside className={`fixed left-0 top-0 h-screen w-64 bg-white border-r border-gray-200 flex flex-col z-50 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'
          } lg:translate-x-0`}>
          <div className="h-16 flex items-center justify-between px-6 border-b border-gray-200">
            <Logo />
            <button onClick={onClose} className="lg:hidden p-1 hover:bg-gray-100 rounded">
              <X className="h-6 w-6 text-gray-600" />
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          </div>
        </aside>
      </>
    );
  }

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside className={`fixed left-0 top-0 h-screen w-64 bg-white border-r border-gray-200 flex flex-col z-50 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}>
        {/* Logo Section */}
        <div className="h-16 flex items-center justify-between px-6 border-b border-gray-200">
          <Logo />
          <button onClick={onClose} className="lg:hidden p-1 hover:bg-gray-100 rounded">
            <X className="h-6 w-6 text-gray-600" />
          </button>
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
                    onClick={onClose}
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
            onClick={onClose}
            className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <Settings className="h-5 w-5 text-gray-500" />
            <span className="font-medium">Settings</span>
          </Link>
        </div>
      </aside>
    </>
  );
}

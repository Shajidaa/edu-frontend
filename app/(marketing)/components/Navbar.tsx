"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X } from 'lucide-react'; 
import Logo from '@/app/(student)/components/share/Logo';
import MyContainer from '@/app/(student)/components/share/MyContainer';

// --- Data ---
const coursesLinks = [
  { label: 'AI and Machine Learning', href: '/courses/ai-and-machine-learning' },
  { label: 'App Development', href: '/courses/app-development' },
  { label: 'Game Development', href: '/courses/gameDevelopment' },
  { label: 'Web Development', href: '/courses/website' },
  { label: 'Python', href: '/courses/python' },
  { label: 'Scratch Programming', href: '/courses/scratch-programming' }
];

const campsLinks = [
  { label: 'Summer Coding Camp', href: '/camps/summer' },
  { label: 'Winter Coding Camp', href: '/camps/winter' },
  { label: 'Black Friday Camp', href: '/camps/black-friday' },
  { label: 'Thanksgiving Coding Camp', href: '/camps/thanks-giving' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Mobile Menu State
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null); // Dropdown State
  const pathname = usePathname();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <nav className="sticky top-0 w-full bg-white border-b border-gray-100 z-[100]">
      <MyContainer className="flex items-center justify-between h-20">
        
        <Logo />

        {/* --- Desktop Navigation --- */}
        <div className="hidden md:flex items-center gap-8 h-full">
          <Link href="/" className={`text-sm font-semibold transition-colors ${
            pathname === '/' ? 'text-green-600' : 'text-gray-600 hover:text-green-500'
          }`}>
            Home
          </Link>
          <NavNavItem 
            label="Courses" 
            href="/courses" 
            sublinks={coursesLinks} 
            isOpen={activeDropdown === 'Courses'}
            onToggle={() => toggleDropdown('Courses')}
          />
          <NavNavItem 
            label="Camps" 
            href="/camps" 
            sublinks={campsLinks} 
            isOpen={activeDropdown === 'Camps'}
            onToggle={() => toggleDropdown('Camps')}
          />
          <Link href="/competitions" className={`text-sm font-semibold transition-colors ${
            pathname === '/competitions' ? 'text-green-600' : 'text-gray-600 hover:text-green-500'
          }`}>
          Competition
          </Link>
          <Link href="/quizzes" className={`text-sm font-semibold transition-colors ${
            pathname === '/quizzes' ? 'text-green-600' : 'text-gray-600 hover:text-green-500'
          }`}>
          Quizzes
          </Link>
          <Link href="/blogs" className={`text-sm font-semibold transition-colors ${
            pathname === '/blogs' ? 'text-green-600' : 'text-gray-600 hover:text-green-500'
          }`}>
          Blogs
          </Link>
          <Link href={'/booking'} className="bg-green-600 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-green-700 transition-all">
            Try a Free Lesson
          </Link>
        </div>

        {/* --- Mobile Menu Toggle --- */}
        <button 
          className="md:hidden p-2 text-gray-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </MyContainer>

      {/* --- Mobile Drawer --- */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl animate-in slide-in-from-top duration-300">
          <div className="flex flex-col p-4 gap-2">
            <Link href="/" className={`text-sm font-semibold transition-colors ${
            pathname === '/' ? 'text-green-600' : 'text-gray-600 hover:text-green-500'
          }`}>
              Home
            </Link>
            <MobileNavItem label="Courses" href="/courses" sublinks={coursesLinks} />
           
            <MobileNavItem label="Camps" href="/camps" sublinks={campsLinks} />
               <Link href="/competitions" className={`text-md mb-2  transition-colors ${
            pathname === '/competitions' ? 'text-green-600' : 'text-gray-600 hover:text-green-500'
          }`}>
          Competition
          </Link>
               <Link href="/quizzes" className={`text-md mb-2  transition-colors ${
            pathname === '/quizzes' ? 'text-green-600' : 'text-gray-600 hover:text-green-500'
          }`}>
          Quizzes
          </Link>
               <Link href="/blogs" className={`text-md mb-2  transition-colors ${
            pathname === '/blogs' ? 'text-green-600' : 'text-gray-600 hover:text-green-500'
          }`}>
          Blogs
          </Link>
            <Link href="/booking" className="w-full mt-4 text-center bg-green-600 text-white py-3 rounded-lg font-bold">
              Try a Free Lesson
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

// --- Desktop Sub-Component ---
function NavNavItem({ label, href, sublinks, isOpen, onToggle }: {label: string, href: string, sublinks: any[], isOpen: boolean, onToggle: () => void}) {
  const pathname = usePathname();
  const isActive = pathname.startsWith(href);

  return (
    <div className="relative h-full flex items-center">
      <button
        onClick={onToggle}
        className={`flex items-center gap-1 text-sm font-semibold transition-colors ${
          isActive ? 'text-green-600' : 'text-gray-600 hover:text-green-500'
        }`}
      >
        {label}
        <ChevronDown size={16} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          {/* Overlay to close dropdown when clicking outside */}
          <div className="fixed inset-0 z-[-1]" onClick={onToggle} />
          <div className="absolute top-[80%] left-0 w-64 bg-white border border-gray-100 shadow-2xl rounded-xl py-3 mt-2 animate-in fade-in zoom-in-95 duration-200">
            {sublinks.map((sub: any) => (
              <Link key={sub.href} href={sub.href} className="block px-5 py-2.5 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">
                {sub.label}
              </Link>
            ))}
            <div className="border-t border-gray-50 mt-2 pt-2">
                <Link href={href} className="block px-5 py-2 text-xs font-bold text-green-600 uppercase tracking-wider">View All {label}</Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

// --- Mobile Sub-Component ---
function MobileNavItem({ label, href, sublinks }:{label: string, href: string, sublinks: any[]}) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="border-b border-gray-50 last:border-none">
      <button 
        onClick={() => setExpanded(!expanded)}
        className="flex items-center justify-between w-full py-4 text-gray-800 font-medium"
      >
        {label}
        <ChevronDown size={18} className={`transition-transform ${expanded ? 'rotate-180' : ''}`} />
      </button>
      {expanded && (
        <div className="flex flex-col bg-gray-50 rounded-lg mb-2">
          {sublinks.map((sub: any) => (
            <Link key={sub.href} href={sub.href} className="px-4 py-3 text-sm text-gray-600 active:bg-green-100">
              {sub.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
"use client";

import { useState, useEffect, useRef, useTransition } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from './Logo';
import MyContainer from './MyContainer';
import { useSession } from "next-auth/react";

// --- Data Configurations ---
const NAV_LINKS = [
  { name: 'Solutions', href: '/solutions', hasDropdown: true },
  { name: 'Products', href: '/products', hasDropdown: true },
  { name: 'Why Pear Deck Learning?', href: '/about', hasDropdown: true },
  { name: 'Resources & Community', href: '/resources', hasDropdown: true },
  { name: 'Pricing', href: '/pricing', hasDropdown: false },
 
];

const SOLUTIONS_DATA = {
  byUser: [
    { name: 'Educators', desc: 'Spend less time administrating and more time engaging students.', href: '/solutions/educators' },
    { name: 'Schools & districts', desc: 'Empower teachers with the tools and data to enrich the student experience.', href: '/solutions/districts' },
  ],
  byUseCase: [
    { name: 'Professional services', href: '/solutions/services' },
    { name: 'Student engagement & active learning', href: '/solutions/engagement' },
    { name: 'Gamified collaboration', href: '/solutions/gamified' },
    { name: 'Real-time student feedback', href: '/solutions/feedback' },
    { name: 'Differentiated instruction & practice', href: '/solutions/instruction' },
    { name: 'Assessment & test prep', href: '/solutions/assessment' },
    { name: 'Data warehousing', href: '/solutions/data' },
    { name: 'Standards-aligned content', href: '/solutions/content' },
    { name: 'GoGuardian safety & productivity', href: '/solutions/safety' },
  ]
};

const PRODUCTS = [
  { name: 'Pear Start', href: '/products/start', desc: 'Kickstart your lessons' },
  { name: 'Pear Deck', href: '/products/deck', desc: 'Interactive presentations' },
  { name: 'Pear Practice', href: '/products/practice', desc: 'Gamified learning' },
  { name: 'Pear Assessment', href: '/products/assessment', desc: 'Data-driven insights' },
];

const WHY_PEAR_DATA = [
  { name: 'Customer stories', desc: 'Stories of school, district, and classroom success.', href: '/about/stories' },
  { name: 'Integration and partners', desc: 'The key connections that make our platform powerful.', href: '/about/partners' },
  { name: 'Efficacy', desc: 'The data and models behind our platform and tools.', href: '/about/efficacy' },
  { name: 'Privacy', desc: 'Our approach to data privacy and responsible AI.', href: '/about/privacy' },
];

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const [, startTransition] = useTransition();
  const { data: session } = useSession();

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Reset states on route change
  useEffect(() => {
    startTransition(() => {
      setIsMobileOpen(false);
      setActiveMenu(null);
    });
  }, [pathname]);

  const toggleMenu = (name: string) => {
    setActiveMenu(activeMenu === name ? null : name);
  };

// console.log(session?.user?.role);

  return (
    <nav ref={navRef} className="sticky top-0 w-full bg-white border-b border-gray-100 z-[100]">
      <MyContainer className="mx-auto h-20 flex items-center justify-between">
        
        <div className="flex items-center gap-8 h-full">
          <Logo />
          
          {/* DESKTOP NAV (Now Click-based like Mobile) */}
          <div className="hidden lg:flex items-center gap-1 h-full">
            {NAV_LINKS.map((link) => (
              <div key={link.name} className="relative h-full flex items-center">
                {link.hasDropdown ? (
                  <button
                    onClick={() => toggleMenu(link.name)}
                    className={`flex items-center gap-1 px-4 py-2 text-sm font-bold transition-colors rounded-lg hover:bg-gray-50 ${
                      activeMenu === link.name ? 'text-green-600 bg-gray-50' : 'text-slate-700'
                    }`}
                  >
                    {link.name}
                    <ChevronDown size={16} className={`transition-transform ${activeMenu === link.name ? 'rotate-180' : ''}`} />
                  </button>
                ) : (
                  <Link 
                    href={link.href} 
                    className="px-4 py-2 text-sm font-bold text-slate-700 hover:text-green-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>

       <div className="flex items-center gap-4">
          {/* USER SESSION SECTION */}
          {session?.user?.role ? (
            <div className="flex items-center gap-3 bg-slate-50 p-1.5 pr-4 rounded-full border border-slate-100">
                <img  src={session?.user?.image || ""} alt="User" className="w-8 h-8 rounded-full ring-2 ring-white shadow-sm" />
                <Link href={session.user.role === "kid" ? "" : "/dashboard"} 
                      className="text-xs font-bold text-slate-700 uppercase tracking-tight hover:text-green-600">
                  Dashboard
                </Link>
            </div>
          ) : (
            <Link href="/signup" className="hidden sm:inline-flex items-center justify-center bg-[#C1FF31] text-slate-900 px-7 py-2.5 rounded-full font-bold text-sm hover:shadow-lg hover:shadow-[#C1FF31]/20 hover:-translate-y-0.5 transition-all active:translate-y-0">
              Sign Up
            </Link>
          )}

          <button 
            onClick={() => setIsMobileOpen(!isMobileOpen)} 
            className="lg:hidden p-2 text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </MyContainer>

      {/* --- DESKTOP CLICKABLE DROPDOWNS --- */}
      
      {/* Solutions */}
      {activeMenu === 'Solutions' && (
        <div className="absolute top-full left-0 w-full bg-white border-b shadow-xl hidden lg:block animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="max-w-6xl mx-auto p-10 grid grid-cols-2 gap-16">
            <div>
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6">By User</h3>
              <div className="space-y-8">
                {SOLUTIONS_DATA.byUser.map(item => (
                  <Link key={item.name} href={item.href} className="group block">
                    <p className="font-bold text-xl text-indigo-900 group-hover:text-green-600 mb-1">{item.name}</p>
                    <p className="text-sm text-slate-500 leading-relaxed max-w-sm">{item.desc}</p>
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6">By Use Case</h3>
              <div className="grid grid-cols-1 gap-y-4">
                {SOLUTIONS_DATA.byUseCase.map(item => (
                  <Link key={item.name} href={item.href} className="text-md font-bold text-slate-700 hover:text-green-600 transition-colors">
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-gray-50 p-4 text-center">
             <Link href="/solutions" className="text-sm font-bold text-indigo-900 border-b-2 border-yellow-400">See all solutions</Link>
          </div>
        </div>
      )}

      {/* Products */}
      {activeMenu === 'Products' && (
        <div className="absolute top-full left-0 w-full bg-white border-b shadow-xl hidden lg:block animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="max-w-6xl mx-auto p-10">
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-8">Explore Products</h3>
            <div className="grid grid-cols-2 gap-x-12 gap-y-8">
              {PRODUCTS.map((item) => (
                <Link key={item.name} href={item.href} className="group block p-4 rounded-xl hover:bg-gray-50 transition-colors">
                  <p className="font-bold text-lg text-slate-900 group-hover:text-green-600">{item.name}</p>
                  <p className="text-sm text-slate-500">{item.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Why Pear Deck */}
      {activeMenu === 'Why Pear Deck Learning?' && (
        <div className="absolute top-full left-0 w-full bg-white border-b shadow-xl hidden lg:block animate-in fade-in slide-in-from-top-2 duration-200">
           <div className="max-w-4xl mx-auto p-10 grid grid-cols-2 gap-8">
            {WHY_PEAR_DATA.map(item => (
              <Link key={item.name} href={item.href} className="group block p-4 rounded-xl hover:bg-gray-50">
                <p className="font-bold text-indigo-900 group-hover:text-green-600">{item.name}</p>
                <p className="text-xs text-slate-500">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* --- MOBILE OVERLAY (Full height like mobile) --- */}
      <div className={`lg:hidden fixed inset-0 top-20 bg-white z-[90] transition-transform duration-300 ${isMobileOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 space-y-4">
          {NAV_LINKS.map((link) => (
            <div key={link.name} className="border-b border-gray-50 pb-4">
              <div className="flex justify-between items-center py-2" onClick={() => link.hasDropdown && toggleMenu(link.name)}>
                <Link href={link.href} className="text-xl font-bold text-slate-800">{link.name}</Link>
                {link.hasDropdown && <ChevronDown className={`transition-transform ${activeMenu === link.name ? 'rotate-180' : ''}`} />}
              </div>
              {link.hasDropdown && activeMenu === link.name && (
                <div className="pl-4 mt-2 space-y-3">
                  {link.name === 'Solutions' && SOLUTIONS_DATA.byUser.map(s => <Link key={s.name} href={s.href} className="block text-slate-600 font-medium">{s.name}</Link>)}
                  {link.name === 'Products' && PRODUCTS.map(p => <Link key={p.name} href={p.href} className="block text-slate-600 font-medium">{p.name}</Link>)}
                </div>
              )}
          
            </div>
          ))}
              <Link href="/signup" className=" bg-[#C1FF31] text-slate-900 px-6 py-2.5 rounded-full font-bold text-sm hover:bg-[#b5f020] transition-all">
              Sign Up
            </Link>
        </div>
      </div>
    </nav>
  );
} 
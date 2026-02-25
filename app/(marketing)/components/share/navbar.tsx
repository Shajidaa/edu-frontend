"use client";

import { useState, useEffect, useTransition } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, } from 'lucide-react';
import Logo from './Logo';
import DesktopNavItem from './DesktopNavItem';
import MyContainer from './MyContainer';
import { useSession } from "next-auth/react"



// --- Data Configurations ---
const NAV_LINKS = [
  { name: 'Solutions', href: '', hasDropdown: true },
  { name: 'Products', href: '', hasDropdown: true },
  { name: 'Why Pear Deck Learning?', href: '', hasDropdown: true },
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
    { name: 'Gasified collaboration', href: '/solutions/gamified' },
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
  const pathname = usePathname();
  const [, startTransition] = useTransition();
  const { data: session } = useSession()


  useEffect(() => {
    startTransition(() => {
      setIsMobileOpen(false);
      setActiveMenu(null);
    });
  }, [pathname]);




  return (
    <nav className="sticky top-0 w-full bg-white border-b border-gray-100 z-[100]">
      <MyContainer className=" mx-auto  h-20 flex items-center justify-between">
        
        <div className="flex items-center gap-8">
          <Logo />
          <div className="hidden lg:flex items-center h-20">
            {NAV_LINKS.map((link) => (
              <DesktopNavItem 
                key={link.name} 
                link={link} 
                isActive={activeMenu === link.name}
                isCurrentPath={pathname === link.href}
                onMouseEnter={() => setActiveMenu(link.name)}
                onMouseLeave={() => setActiveMenu(null)}
              />
            ))}

          </div>
        </div>

        <div className="flex items-center gap-3">
          {session?.user ? (
            <>
            <img src={session.user.image || undefined} alt="User avatar" className="w-8 h-8 rounded-full" />
              <Link href="/dashboard" className="hidden xl:block text-[14px] font-bold text-slate-700 hover:text-green-600 transition-colors border-b-2 border-yellow-400 pb-0.5">
              Dashboard
            </Link>
            </>
          
          ) : (  <Link href="/signup" className="hidden sm:block bg-[#C1FF31] hover:bg-[#b5f020] text-slate-900 px-6 py-2.5 rounded-full font-bold text-sm transition-all active:scale-95 shadow-sm">
            Sign Up
          </Link>)}
       
        
          <button onClick={() => setIsMobileOpen(!isMobileOpen)} className="lg:hidden p-2 text-slate-700">
            {isMobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </MyContainer>

      {/* --- Solutions Dropdown --- */}
      <div 
        className={`absolute top-full left-[10%] w-[600px] bg-white border border-gray-100 rounded-xl shadow-2xl transition-all duration-300 hidden lg:block ${
          activeMenu === 'Solutions' ? 'opacity-100 translate-y-2 visible' : 'opacity-0 translate-y-0 invisible pointer-events-none'
        }`}
        onMouseEnter={() => setActiveMenu('Solutions')}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <div className="p-8 grid grid-cols-2 gap-10">
          <div>
            <h3 className="text-xs font-black text-slate-900 uppercase tracking-widest mb-4">By User</h3>
            <div className="space-y-6">
              {SOLUTIONS_DATA.byUser.map(item => (
                <Link key={item.name} href={item.href} className="group block">
                  <p className="font-bold text-indigo-900 group-hover:text-green-600 transition-colors">{item.name}</p>
                  <p className="text-xs text-slate-500 leading-normal">{item.desc}</p>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xs font-black text-slate-900 uppercase tracking-widest mb-4">By Use Case</h3>
            <div className="space-y-3">
              {SOLUTIONS_DATA.byUseCase.map(item => (
                <Link key={item.name} href={item.href} className="block text-[14px] font-medium text-slate-700 hover:text-green-600 transition-colors">
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-gray-50/50 p-4 border-t border-gray-100 rounded-b-xl text-center">
          <Link href="/solutions" className="text-sm font-bold text-indigo-900 border-b-2 border-yellow-400 inline-block">
            See all solutions
          </Link>
        </div>
      </div>
      {/* Mega Menu Dropdown */}
      <div 
        className={`absolute top-full left-0 w-full bg-white border-b shadow-2xl transition-all duration-300 ease-out hidden lg:block ${
          activeMenu === 'Products' ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible pointer-events-none'
        }`}
        onMouseEnter={() => setActiveMenu('Products')}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-12 gap-8 p-10">
          <div className="col-span-8">
            <h3 className="text-[11px] font-black text-indigo-900 uppercase tracking-widest mb-6">Explore Products</h3>
            <div className="grid grid-cols-2 gap-x-12 gap-y-6">
              {PRODUCTS.map((item) => (
                <Link key={item.name} href={item.href} className="group block">
                  <p className={`font-bold transition-colors ${pathname === item.href ? 'text-green-600' : 'text-slate-900 group-hover:text-green-600'}`}>
                    {item.name}
                  </p>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                </Link>
              ))}
            </div>
          </div>
          </div>
     </div>
      {/* --- Why Pear Deck Learning? Dropdown --- */}
      <div 
        className={`absolute top-full left-[25%] w-[450px] bg-white border border-gray-100 rounded-xl shadow-2xl transition-all duration-300 hidden lg:block ${
          activeMenu === 'Why Pear Deck Learning?' ? 'opacity-100 translate-y-2 visible' : 'opacity-0 translate-y-0 invisible pointer-events-none'
        }`}
        onMouseEnter={() => setActiveMenu('Why Pear Deck Learning?')}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <div className="p-8 space-y-6">
          {WHY_PEAR_DATA.map(item => (
            <Link key={item.name} href={item.href} className="group block">
              <p className="font-bold text-indigo-900 group-hover:text-green-600 transition-colors">{item.name}</p>
              <p className="text-xs text-slate-500 leading-normal">{item.desc}</p>
            </Link>
          ))}
        </div>
        <div className="bg-gray-50/50 p-4 border-t border-gray-100 rounded-b-xl text-center">
          <Link href="/about" className="text-sm font-bold text-indigo-900 border-b-2 border-yellow-400 inline-block">
            Explore how we apply learning science
          </Link>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-b ${
        isMobileOpen ? 'max-h-150 opacity-100 visible' : 'max-h-0 opacity-0 invisible'
      }`}>
        <div className="px-6 py-8 space-y-6">
          {NAV_LINKS.map((link) => (
            <Link key={link.name} href={link.href} className="block text-lg font-bold text-slate-800 active:text-green-600">
              {link.name}
            </Link>
          ))}
          <div className="pt-4 flex flex-col gap-3">
            <Link href="/login" className="w-full text-center py-4 font-bold border-2 border-slate-900 rounded-full">
              Log In
            </Link>
            <Link href="/signup" className="w-full text-center py-4 font-bold bg-[#C1FF31] rounded-full">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
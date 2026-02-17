"use client";

import  { useState, useEffect, useTransition } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ExternalLink } from 'lucide-react';
import Logo from './Logo';
import DesktopNavItem from './DesktopNavItem';

// --- Data Configuration ---
const NAV_LINKS = [
  { name: 'Solutions', href: '/solutions', hasDropdown: true },
  { name: 'Products', href: '', hasDropdown: true },
  { name: 'Why Pear Deck Learning?', href: '/about', hasDropdown: false },
  { name: 'Resources & Community', href: '/resources', hasDropdown: true },
  { name: 'Pricing', href: '/pricing', hasDropdown: false },
];

const PRODUCTS = [
  { name: 'Edu Start', href: '/products/start', desc: 'Kickstart your lessons' },
  { name: 'Edu Deck', href: '/products/deck', desc: 'Interactive presentations' },
  { name: 'Edu Practice', href: '/products/practice', desc: 'Gamified learning' },
  { name: 'Edu Assessment', href: '/products/assessment', desc: 'Data-driven insights' },
];

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();
  const [, startTransition] = useTransition();

  useEffect(() => {
    startTransition(() => {
      setIsMobileOpen(false);
      setActiveMenu(null);
    });
  }, [pathname]);

  return (
    <nav className="sticky top-0 w-full bg-white border-b border-gray-100 z-[100]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Left: Logo & Desktop Links */}
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

        {/* Right: Actions */}
        <div className="flex items-center gap-3">
          <Link href="/login/student" className="hidden xl:block text-[14px] font-bold text-slate-700 hover:text-green-600 transition-colors border-b-2 border-yellow-400 pb-0.5 whitespace-nowrap">
            Student/Tutor log in
          </Link>
          
          <Link href="/signup" className="hidden sm:block bg-[#C1FF31] hover:bg-[#b5f020] text-slate-900 px-6 py-2.5 rounded-full font-bold text-sm transition-all active:scale-95 shadow-sm whitespace-nowrap">
            Sign Up
          </Link>

          <button 
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-slate-50 transition-colors text-slate-700"
            aria-label="Toggle Menu"
          >
            {isMobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
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
        <div className="max-w-3xl  mx-auto grid grid-cols-12 gap-8 p-10">
          <div className="col-span-8">
            <h3 className="text-[11px] font-black text-indigo-900 uppercase tracking-widest mb-6">Explore Products</h3>
            <div className="grid grid-cols-2 gap-x-12 gap-y-6">
              {PRODUCTS.map((item) => (
                <Link key={item.name} href={item.href} className="group block">
                  <p className="font-bold text-slate-900 group-hover:text-green-600 transition-colors">{item.name}</p>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                </Link>
              ))}
            </div>
          </div>
          
          <div className="col-span-4 bg-slate-50 p-8 rounded-2xl border border-slate-100">
            <h4 className="font-bold text-slate-900 mb-2">Professional Services</h4>
            <p className="text-sm text-slate-600 mb-6 italic">Expert-led training for your district.</p>
            <Link href="/services" className="text-sm font-bold text-green-700 flex items-center gap-2 group">
              <span>Learn more</span>
              <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
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


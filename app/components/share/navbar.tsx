"use client";

import React, { useState } from 'react';
import Link from 'next/link'; // Import Next.js Link
import { ChevronDown, } from 'lucide-react';
import Logo from './Logo';




const PRODUCTS = [
  { name: 'Pear Start', href: '/products/start'},
  { name: 'Pear Deck', href: '/products/deck'},
  { name: 'Pear Practice', href: '/products/practice'},
  { name: 'Pear Assessment', href: '/products/assessment' },
];

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <nav className="relative bg-white border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        
        {/* Logo Section */}
        <div className="flex items-center gap-8">
         <Logo />

          {/* Main Nav Links */}
          <div className="hidden lg:flex items-center gap-6 text-[15px] font-semibold text-slate-700">
            <NavItem label="Solutions" href="/solutions" activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
            <NavItem label="Products" href="/products" activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
            <NavItem label="Why Pear Deck Learning?" href="/about" activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
            <NavItem label="Resources & Community" href="/resources" activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
            <Link href="/pricing" className="hover:text-teal-600 transition-colors">
              Pricing
            </Link>
          </div>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4">
          <Link href="/login/student" className="hidden md:block text-[15px] font-semibold text-slate-700 border-b-2 border-yellow-400 pb-0.5">
            Student/Tutor log in
          </Link>
          <Link href="/signup" className="bg-[#C1FF31] hover:bg-[#b0e62d] text-slate-900 px-5 py-2 rounded-full font-bold text-sm transition-all shadow-sm">
            Sign Up
          </Link>
          {/* Example of a Link with complex children */}
          <Link href="/login" className="flex items-center gap-1 border-2 border-slate-900 px-5 py-2 rounded-full font-bold text-sm hover:bg-slate-50 transition-colors">
            Log In <ChevronDown size={16} />
          </Link>
        </div>
      </div>

      {/* Mega Menu Dropdown */}
      {activeMenu === 'Products' && (
        <div 
          className="absolute top-full left-0 w-full bg-white border-b shadow-xl animate-in fade-in slide-in-from-top-2 duration-200"
          onMouseLeave={() => setActiveMenu(null)}
        >
          <div className="max-w-5xl mx-auto grid grid-cols-12 gap-8 p-8">
            <div className="col-span-8">
              <h3 className="text-xs font-bold text-indigo-900 uppercase tracking-widest mb-6">Products</h3>
              <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                {PRODUCTS.map((item) => (
                  <Link key={item.name} href={item.href} className="flex gap-4 group cursor-pointer">
             
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-800 group-hover:text-teal-600 transition-colors">
                          {item.name}
                        </span>
                     
                      </div>
                      
                    </div>
                  </Link>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-gray-100">
                <Link href="/products" className="text-sm font-bold text-indigo-900 border-b-2 border-yellow-400">
                  See all products
                </Link>
              </div>
            </div>
            
            <div className="col-span-4 bg-slate-50 p-6 rounded-xl">
              <h3 className="text-xs font-bold text-indigo-900 uppercase tracking-widest mb-4">Services</h3>
              <p className="font-bold text-slate-800 mb-2">Professional services</p>
              <p className="text-sm text-gray-500 mb-4">Get the most from Pear Deck Learning solutions with premium professional services.</p>
              <Link href="/services" className="text-sm font-bold text-teal-600 hover:underline">
                Learn more
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

 function NavItem({ label, href, activeMenu, setActiveMenu }: { label: string; href: string; activeMenu: string | null; setActiveMenu: React.Dispatch<React.SetStateAction<string | null>> }) {
  const isActive = activeMenu === label;
  return (
    <div 
      className="relative flex items-center gap-1 cursor-pointer py-7 hover:text-green-600 group"
      onMouseEnter={() => setActiveMenu(label)}
    >
      <Link href={href}>
        <span className={isActive ? "text-green-600" : ""}>{label}</span>
      </Link>
      <ChevronDown size={16} className={`transition-transform duration-200 ${isActive ? 'rotate-180 text-green-600' : ''}`} />
    </div>
  );
}
"use client";


import React, { useState } from 'react';
import { FaCaretDown, FaSearch } from 'react-icons/fa';

interface Country {
  name: string;
  code: string;
  flag: string;
}

const countries: Country[] = [
  { name: 'Bangladesh', code: '+880', flag: '🇧🇩' },
  { name: 'Australia', code: '+61', flag: '🇦🇺' },
  // Add more as needed
];

export const PhoneInput = ({ value, onChange, error }: { value: string; onChange: (value: string) => void; error?: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(countries[0]);

  return (
    <div className="relative w-full">
      <div className={`flex items-center bg-white border-2 rounded-xl transition-all ${error ? 'border-red-500' : 'border-slate-100 focus-within:border-emerald-500'}`}>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-4 py-3 border-r border-slate-100 hover:bg-slate-50 transition-colors"
        >
          <span>{selected.flag}</span>
          <FaCaretDown className="text-slate-400 text-xs" />
        </button>
        <span className="pl-4 text-slate-500 font-medium">{selected.code}</span>
        <input
          type="tel"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Phone number"
          className="flex-1 px-2 py-3 outline-none text-slate-700 bg-transparent"
        />
      </div>
      
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-slate-200 rounded-xl shadow-2xl z-50 max-h-60 overflow-y-auto">
          <div className="sticky top-0 bg-white p-2 border-b">
            <div className="flex items-center gap-2 px-3 py-2 bg-slate-50 rounded-lg">
              <FaSearch className="text-slate-400 text-sm" />
              <input type="text" placeholder="search" className="bg-transparent outline-none text-sm w-full" />
            </div>
          </div>
          {countries.map((c) => (
            <div 
              key={c.name}
              onClick={() => { setSelected(c); setIsOpen(false); }}
              className="flex items-center gap-3 px-4 py-3 hover:bg-emerald-50 cursor-pointer transition-colors"
            >
              <span>{c.flag}</span>
              <span className="text-sm text-slate-700">{c.name}</span>
              <span className="text-sm text-slate-400 ml-auto">{c.code}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
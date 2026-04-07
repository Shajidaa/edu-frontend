import React from 'react'


export default function FloatingElement({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`absolute z-20 rounded-2xl shadow-xl p-3 flex items-center justify-center transition-transform hover:scale-110 duration-500 ${className}`}>
      <div className="text-3xl font-bold">
        {children}
      </div>
  </div>
);}
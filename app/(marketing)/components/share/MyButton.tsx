import Link from 'next/link';
import React from 'react'
import { LuArrowRight } from 'react-icons/lu';

export default function MyButton({ children, className, href }: { children: React.ReactNode; className?: string; href: string }) {
  return (
    <Link href={href} className={`inline-flex items-center gap-2 px-8 py-4 bg-[#C6F332] 
   text-[#1D3B31] font-bold
    rounded-full border-2 border-[#C6F332] hover:bg-transparent
     hover:text-[#C6F332] transition-all duration-300 ${className}`}>
      {children}
        <LuArrowRight strokeWidth={3} />
    </Link>
  )
}
 
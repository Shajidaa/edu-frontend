"use client"
import Link from 'next/link'
import { FaHome, FaSearch, FaArrowLeft } from 'react-icons/fa'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 p-6 text-center">
      {/* Visual Element */}
      <div className="relative mb-8">
        <div className="text-9xl font-black text-emerald-100 select-none">404</div>
        <div className="absolute inset-0 flex items-center justify-center">
          <FaSearch className="text-5xl text-emerald-600 animate-pulse" />
        </div>
      </div>

      {/* Text Content */}
      <h2 className="text-3xl font-bold text-slate-800 mb-2">
        Page Not Found!
      </h2>
      <p className="text-slate-500 max-w-md mb-8">
        Sorry, the URL you are looking for is incorrect. The page might have been moved, deleted, or perhaps there is a typo in the address.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Link 
          href="/" 
          className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-emerald-100"
        >
          <FaHome /> Back to Home
        </Link>
        
        <button 
          onClick={() => window.history.back()}
          className="flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-600 px-8 py-3 rounded-xl font-bold hover:bg-slate-50 transition-all"
        >
          <FaArrowLeft /> Go Back
        </button>
      </div>

      {/* Footer Decoration */}
      <div className="mt-16 text-slate-400 text-sm font-medium tracking-wide">
        Next Gen Learning — The Future of Education
      </div>
    </div>
  )
}
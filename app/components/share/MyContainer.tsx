import React from 'react'

export default function MyContainer({children,className}: {children: React.ReactNode, className?: string}) {
  return (
    <div className={`container mx-auto px-4 sm:px-6 lg:px-8 ${className || ''} ${children ? 'py-12' : 'py-0'}`}>
      {children}
    </div>
  )
}

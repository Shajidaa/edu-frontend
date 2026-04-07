import React from 'react';

export default function CoursesHero() {
  return (
    <section className="bg-white py-12 md:py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        {/* Main Heading */}
        <h1 className="text-3xl md:text-5xl font-extrabold text-slate-800 mb-6 leading-tight">
          Explore{' '}
          <span className="relative text-green-600 inline-block">
            Next Gen Learning Courses:
            {/* The yellow underline highlight from your image */}
            <span className="absolute bottom-1 left-0 w-full h-1.5 bg-yellow-400 -z-10 rounded-full opacity-80" />
          </span>{' '}
          Coding, AI, and Math Classes for Kids & Teens
        </h1>

        {/* Subtext */}
        <p className="text-slate-600 text-base md:text-xl max-w-3xl mx-auto leading-relaxed">
          Browse our diverse range of online Next Gen Learning courses designed to spark creativity, 
          build essential skills, and prepare your child for the future—all at their own pace.
        </p>

        
      </div>
    </section>
  );
}
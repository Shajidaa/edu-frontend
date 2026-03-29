import React from 'react';
import Image from 'next/image';
import { FaCalendarAlt, FaUser, FaArrowRight, FaGamepad, FaRobot, FaPuzzlePiece } from 'react-icons/fa';
import Link from 'next/link';

// -----------------------------------------------------------------------------
// Types & Interfaces
// -----------------------------------------------------------------------------
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  imageUrl: string;
  icon?: React.ReactNode;
}

// -----------------------------------------------------------------------------
// Dummy Data
// -----------------------------------------------------------------------------
const featuredPost: BlogPost = {
  id: 'featured-1',
  title: 'Top 18 Python Projects for Beginners',
  excerpt: 'Discover the top 10 most fun Python projects for Beginners and kids! Unleash your inner talent of coding through basic games and puzzles of Python programming.',
  author: 'Aleena Martin',
  date: 'October 5, 2024',
  imageUrl: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&q=80', // Code on screen
};

const recentPosts: BlogPost[] = [
  {
    id: 'post-1',
    title: 'MIT App Inventor Tutorial for Beginners: Build Your First Android App',
    excerpt: 'If you have ever wanted to build your own Android app but thought it was too difficult, this App Inventor tutorial is the perfect place to start.',
    author: 'Divya Pandey',
    date: 'March 20, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&q=80',
    icon: <FaRobot className="text-emerald-500 text-xl" />,
  },
  {
    id: 'post-2',
    title: 'Blockly Games: Best Coding Games for Kids and Beginners',
    excerpt: 'Blockly Games are among the easiest and most engaging ways for kids and beginners to learn to code. Designed to teach programming principles...',
    author: 'Divya Pandey',
    date: 'March 18, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1614332287897-cdc485fa562d?w=500&q=80',
    icon: <FaGamepad className="text-emerald-500 text-xl" />,
  },
  {
    id: 'post-3',
    title: 'Block Coding for Kids: How Coding Blocks Help Kids Learn Faster',
    excerpt: 'Block coding is the smartest, most beginner-friendly way to start programming - and in 2026, it is how modern education handles logic building.',
    author: 'Divya Pandey',
    date: 'March 2, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1553481187-be93c21490a9?w=500&q=80',
    icon: <FaPuzzlePiece className="text-emerald-500 text-xl" />,
  },
];

const secondaryPosts: BlogPost[] = [
  {
    id: 'post-4',
    title: 'Mindfulness for Kids: The Final View',
    excerpt: 'Exploring how focused screen breaks and logical thinking can improve attention spans.',
    author: 'Admin',
    date: 'March 1, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1502086223501-7ea24c83af4b?w=500&q=80',
  },
  {
    id: 'post-5',
    title: 'Public Speaking: Building Confidence Early',
    excerpt: 'Simple steps to help children voice their ideas and present projects effectively.',
    author: 'Admin',
    date: 'Feb 25, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1475721027187-40aeae77595b?w=500&q=80',
  },
  {
    id: 'post-6',
    title: 'Socializing Games: Great for Kids',
    excerpt: 'How multiplayer logic games help children learn teamwork and peer collaboration.',
    author: 'Admin',
    date: 'Feb 20, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1511632765486-a01980b01a18?w=500&q=80',
  },
];

// -----------------------------------------------------------------------------
// Main Component
// -----------------------------------------------------------------------------
export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <header className="mb-12">
          <span className="text-emerald-600 font-semibold tracking-wider uppercase text-sm">Our Blog</span>
          <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">Latest Educational Insights</h1>
          <p className="text-lg text-gray-600">Discover tutorials, guides, and tips to help beginners master coding.</p>
        </header>

        {/* 1. Featured Post (Hero Section) */}
        <section className="mb-16 bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div className="flex flex-col lg:flex-row">
            {/* Left side: Image */}
            <div className="relative lg:w-5/12 h-64 lg:h-auto min-h-[300px]">
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-600/20 to-transparent z-10" />
              <Image
                src={featuredPost.imageUrl}
                alt={featuredPost.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute top-4 left-4 z-20 bg-emerald-600 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                FEATURED
              </div>
            </div>

            {/* Right side: Content */}
            <div className="lg:w-7/12 p-8 lg:p-12 flex flex-col justify-center">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 hover:text-emerald-600 transition-colors cursor-pointer">
                {featuredPost.title}
              </h2>
              
              <div className="flex items-center gap-6 mt-4 mb-6 text-sm text-gray-500">
                <span className="flex items-center gap-2">
                  <FaUser className="text-emerald-500" /> {featuredPost.author}
                </span>
                <span className="flex items-center gap-2">
                  <FaCalendarAlt className="text-emerald-500" /> {featuredPost.date}
                </span>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                {featuredPost.excerpt}
              </p>
              
              <div>
                <Link href={`/kidsForCoding/blogs/${featuredPost.id}`} className="flex items-center gap-2 font-semibold text-emerald-600 hover:text-emerald-700 transition-colors group">
                  Read Full Article 
                  <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Recent Articles</h2>
          <div className="h-0.5 flex-grow bg-gray-200 ml-6 hidden sm:block"></div>
        </div>

        {/* 2. Recent Posts Grid (Top Row) */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {recentPosts.map((post) => (
            <article 
              key={post.id} 
              className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
                {post.icon && (
                  <div className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md">
                    {post.icon}
                  </div>
                )}
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 hover:text-emerald-600 cursor-pointer">
                  {post.title}
                </h3>
                
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                  <span className="flex items-center gap-1"><FaUser className="text-emerald-500" /> {post.author}</span>
                  <span className="flex items-center gap-1"><FaCalendarAlt className="text-emerald-500" /> {post.date}</span>
                </div>
                
                <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                  {post.excerpt}
                </p>
                
                <div className="mt-auto">
                  <Link href={`/kidsForCoding/blogs/${post.id}`} className="text-emerald-600 text-sm font-semibold hover:text-emerald-700 transition-colors flex items-center gap-1 group">
                    Read More 
                    <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* 3. Secondary Posts Grid (Bottom Row) */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {secondaryPosts.map((post) => (
            <article 
              key={post.id} 
              className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 hover:text-emerald-600 cursor-pointer">
                  {post.title}
                </h3>
                
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                  <span className="flex items-center gap-1"><FaUser className="text-emerald-500" /> {post.author}</span>
                  <span className="flex items-center gap-1"><FaCalendarAlt className="text-emerald-500" /> {post.date}</span>
                </div>
                
                <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                  {post.excerpt}
                </p>
                
                <div className="mt-auto">
                  <Link href={`/kidsForCoding/blogs/${post.id}`} className="text-emerald-600 text-sm font-semibold hover:text-emerald-700 transition-colors flex items-center gap-1 group">
                    Read More 
                    <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </section>
        
      </div>
    </div>
  );
}
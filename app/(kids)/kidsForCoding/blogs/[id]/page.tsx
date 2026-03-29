import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  FaCalendarAlt, 
  FaUser, 
  FaArrowLeft, 
  FaFacebook, 
  FaTwitter, 
  FaLinkedin, 
  FaRegBookmark,
  FaRegHeart,
  FaShareAlt
} from 'react-icons/fa';
import MyContainer from '@/app/(marketing)/components/share/MyContainer';

// -----------------------------------------------------------------------------
// Types & Interfaces
// -----------------------------------------------------------------------------
interface BlogDetail {
  id: string;
  title: string;
  category: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  date: string;
  readTime: string;
  imageUrl: string;
  content: {
    introduction: string;
    sections: {
      heading: string;
      body: string;
    }[];
    conclusion: string;
  };
}

// -----------------------------------------------------------------------------
// Dummy Data (Simulating a fetched post by ID)
// -----------------------------------------------------------------------------
const postData: BlogDetail = {
  id: 'featured-1',
  title: 'Top 18 Python Projects for Beginners and Kids',
  category: 'Python Programming',
  author: {
    name: 'Aleena Martin',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
    role: 'Senior Curriculum Developer',
  },
  date: 'October 5, 2024',
  readTime: '8 min read',
  imageUrl: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1200&q=80',
  content: {
    introduction: 'Python is widely regarded as one of the best programming languages for beginners and kids. Its simple, readable syntax makes it the perfect entry point into the world of coding. However, reading books and watching tutorials can only get you so far. The real magic happens when you start building things.',
    sections: [
      {
        heading: '1. Why Project-Based Learning Matters',
        body: 'When kids and beginners build projects, they aren\'t just memorizing syntax; they are solving real-world problems. Project-based learning helps cement abstract concepts like variables, loops, and functions by giving them a visual or practical output. Instead of just seeing "Hello World" on a terminal, they see a character moving or a game keeping score.'
      },
      {
        heading: '2. The Classic Mad Libs Generator',
        body: 'A Mad Libs game is one of the absolute best starter projects. It focuses purely on strings, variables, and user input. The program asks the user to enter various parts of speech (like a noun, verb, or adjective) and then organizes them into a hilarious, unpredictable story. It is simple to code but offers instant gratification and laughs.'
      },
      {
        heading: '3. Building a Simple Guessing Game',
        body: 'This project introduces the concept of random number generation and loops. The computer selects a random number within a range, and the user has to guess it. The program gives hints like "too high" or "too low." This introduces beginners to conditional logic (if/elif/else statements) and `while` loops in a highly interactive environment.'
      }
    ],
    conclusion: 'The key to mastering Python—or any language—is consistency. Start with these simple games and gradually increase the complexity. Before you know it, those small scripts will turn into full-scale applications. Happy coding!'
  }
};

// -----------------------------------------------------------------------------
// Main Component
// -----------------------------------------------------------------------------
export default function BlogDetailPage() {
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <MyContainer className="">
        
        {/* Navigation / Back Button */}
        <div className="mb-8">
          <Link 
            href="/kidsForCoding/blogs" 
            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors group"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" /> 
            Back to Articles
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-8">
          <span className="text-emerald-600 font-semibold tracking-wider uppercase text-xs sm:text-sm">
            {postData.category}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-6 leading-tight">
            {postData.title}
          </h1>

          {/* Author and Meta Info */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-6">
            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-emerald-100">
                <Image
                  src={postData.author.avatar}
                  alt={postData.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-bold text-gray-900">{postData.author.name}</div>
                <div className="text-xs text-gray-500">{postData.author.role}</div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <FaCalendarAlt className="text-emerald-500" /> {postData.date}
              </span>
              <span>•</span>
              <span>{postData.readTime}</span>
            </div>
          </div>
        </header>

        {/* Action Bar (Share/Save) */}
        <div className="flex items-center justify-between mb-8 text-gray-500">
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-2 hover:text-emerald-600 transition-colors">
              <FaRegHeart className="text-lg" /> <span>245</span>
            </button>
            <button className="flex items-center gap-2 hover:text-emerald-600 transition-colors">
              <FaRegBookmark className="text-lg" /> <span>Save</span>
            </button>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm hidden sm:inline">Share:</span>
            <button className="hover:text-emerald-600 transition-colors"><FaFacebook className="text-lg" /></button>
            <button className="hover:text-emerald-600 transition-colors"><FaTwitter className="text-lg" /></button>
            <button className="hover:text-emerald-600 transition-colors"><FaLinkedin className="text-lg" /></button>
            <button className="hover:text-emerald-600 transition-colors sm:hidden"><FaShareAlt className="text-lg" /></button>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative w-full h-[250px] sm:h-[400px] lg:h-[450px] rounded-2xl overflow-hidden mb-10 shadow-lg">
          <Image
            src={postData.imageUrl}
            alt={postData.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Article Content */}
        <article className="prose prose-emerald max-w-none">
          {/* Introduction */}
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8 font-light border-l-4 border-emerald-500 pl-4">
            {postData.content.introduction}
          </p>

          {/* Dynamic Sections */}
          {postData.content.sections.map((section, index) => (
            <div key={index} className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {section.heading}
              </h2>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                {section.body}
              </p>
            </div>
          ))}

          {/* Conclusion */}
          <div className="bg-emerald-50 rounded-xl p-6 sm:p-8 mt-10 border border-emerald-100">
            <h3 className="text-xl font-bold text-emerald-800 mb-2">Final Thoughts</h3>
            <p className="text-gray-700 leading-relaxed text-base">
              {postData.content.conclusion}
            </p>
          </div>
        </article>

        {/* Footer Author Bio */}
        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
          <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0">
            <Image
              src={postData.author.avatar}
              alt={postData.author.name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h4 className="text-lg font-bold text-gray-900">Written by {postData.author.name}</h4>
            <p className="text-gray-600 text-sm mt-1">
              Aleena is a senior curriculum developer specializing in making complex programming paradigms accessible and gamified for children and beginners.
            </p>
          </div>
        </div>

      </MyContainer>
    </div>
  );
}
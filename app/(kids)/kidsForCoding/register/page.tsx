"use client";

import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'; 
import { Star, ChevronDown } from 'lucide-react';

export default function RegisterPage() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [grade, setGrade] = useState("");

  const grades = Array.from({ length: 12 }, (_, i) => `Grade ${i + 1}`);
const handleSubmit=(e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    // Handle form submission logic here, e.g., send data to backend or redirect to booking page
    const formData = {
        phoneNumber,
        grade
    }
 if(phoneNumber && grade){
    console.log("Form Data:", formData);
    // Reset form fields    setPhoneNumber("");
    setGrade("");
    setPhoneNumber('');
    // Redirect to booking page or show success message
    alert("Thank you for registering! We will contact you soon.");
 }  
}
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4 font-sans">
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Section: Testimonial */}
        <div className="hidden md:flex flex-col space-y-6">
          <div className="bg-white border border-gray-100 shadow-xl rounded-2xl p-8 relative">
            <span className="text-6xl text-orange-200 absolute top-4 left-4 font-serif">“</span>
            <p className="text-gray-700 text-lg leading-relaxed pt-6 italic relative z-10">
              The teachers at Next Gen learning are very knowledgeable, warm and supportive. 
              I am happy learning to code under their guidance.
            </p>
            
            <div className="mt-8 flex items-center space-x-4">
              <div className="w-16 h-16 bg-yellow-400 rounded-full overflow-hidden border-2 border-white shadow-sm">
                 <img 
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Hadiqah" 
                  alt="Student" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Hadiqah</h4>
                <p className="text-sm text-gray-500 font-medium">Student | Grade 1</p>
              </div>
            </div>
          </div>

          {/* Trustpilot Placeholder */}
          <div className="flex flex-col space-y-1">
             <div className="flex items-center space-x-1">
                <Star className="fill-green-500 text-green-500 w-4 h-4" />
                <span className="font-bold text-sm">Trustpilot</span>
             </div>
             <div className="flex space-x-0.5">
                {[...Array(5)].map((_, i) => (
                    <div key={i} className="bg-green-500 p-1 rounded-sm">
                        <Star className="fill-white text-white w-3 h-3" />
                    </div>
                ))}
             </div>
             <p className="text-xs text-gray-500">TrustScore 4.8 | 547 reviews</p>
          </div>
        </div>

        {/* Right Section: Form */}
        <div className="flex flex-col space-y-6 max-w-md mx-auto w-full">
          <h1 className="text-3xl font-bold text-gray-800">Let&apos;s get started</h1>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Enter your WhatsApp phone number 
                <span className="ml-1 inline-flex items-center justify-center w-4 h-4 rounded-full bg-gray-200 text-[10px] text-gray-500 cursor-help">i</span>
              </label>
              
              {/* Country Phone Input with Search */}
              <div className="phone-input-container">
                <PhoneInput
                  country={'bd'} // Default country
                  value={phoneNumber}
                  onChange={(val) => setPhoneNumber(val)}
                  enableSearch={true}
                  containerClass="!w-full"
                  inputClass="!w-full !h-12 !text-lg !border-gray-300 !rounded-lg focus:!ring-orange-500"
                  buttonClass="!border-gray-300 !rounded-l-lg !bg-white"
                  searchPlaceholder="Search country..."
                />
              </div>
            </div>

            <div>
              <div className="relative">
                <select 
                  value={grade}
                  onChange={(e) => setGrade(e.target.value)}
                  className="w-full h-12 px-4 appearance-none border border-gray-300 rounded-lg text-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white cursor-pointer"
                >
                  <option value="" disabled>Select grade/class</option>
                  {grades.map((g) => (
                    <option key={g} value={g}>{g}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-4 top-3.5 text-gray-400 pointer-events-none w-5 h-5" />
              </div>
            </div>

            <button className="w-full bg-[#047a0a] hover:bg-[#035803] text-white font-bold py-3.5 rounded-lg transition-colors shadow-lg shadow-orange-200">
              Proceed to book a free lesson
            </button>

            <div className="flex items-start space-x-2 text-[11px] leading-relaxed text-gray-500">
                <span className="text-green-500 mt-0.5">📝</span>
                <p>Register now, grab your free slot for coding class!</p>
            </div>

            <p className="text-[10px] text-gray-400 leading-tight">
              By signing up, you agree to the <span className="underline cursor-pointer">Terms of Service</span> and <span className="underline cursor-pointer">Privacy Policy</span>. 
              You also agree that you have parental consent. Important updates will be sent via email, SMS & WhatsApp, and class reminders will be sent via call.
            </p>
          </form>
        </div>
      </div>

      {/* Global CSS overrides for the Phone Input to match Tailwind */}
      <style jsx global>{`
        .phone-input-container .form-control {
          width: 100% !important;
          height: 48px !important;
          border-radius: 8px !important;
        }
        .phone-input-container .flag-dropdown {
          border-radius: 8px 0 0 8px !important;
          background: white !important;
        }
      `}</style>
    </div>
  );
}
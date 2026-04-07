"use client";

import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'; 
import {  ChevronDown } from 'lucide-react';

import Testimonial from './_component/Testimonial';
import { toast } from 'react-toastify';

export default function RegisterPage() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [grade, setGrade] = useState("");

  const grades = Array.from({ length: 12 }, (_, i) => `Grade ${i + 1}`);
  
// const handleSubmit=(e: React.FormEvent<HTMLFormElement>)=>{
//     e.preventDefault();
//     const schoolName = (e.currentTarget.elements.namedItem('schoolName') as HTMLInputElement).value;
//     const email = (e.currentTarget.elements.namedItem('email') as HTMLInputElement).value;
//     const formData = {
//         phoneNumber,
//         grade,schoolName,email
//     }
//     if(!phoneNumber || !grade){
//         alert("Please fill in all fields");
//         return;
//     }

//  if(phoneNumber && grade){
 
//     setGrade("");
//     setPhoneNumber('');
//    const dataToSend = {
//     phoneNumber,
//     grade,
// schoolName,
// email
//    }
//     async function sendData() {
//         try {
//             const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/competitions/register`, {  
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(dataToSend),
//             });
//             if (response.ok) {

//                 alert('Registration successful!');
//             } else {
//                 alert('Registration failed. Please try again.');
//             } 
//         } catch (error) {
//             console.error('Error:', error);
//             alert('An error occurred. Please try again.');
//         }
//     }
//     sendData();

    
//   console.log(formData);
  
//  }  
// }
// 1. Get competitionId from the URL or props
// Example: if URL is /register?id=5
const searchParams = new URLSearchParams(typeof window !== 'undefined' ? window.location.search : "");
const competitionId = searchParams.get("id");

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.currentTarget;
    const schoolName = (target.elements.namedItem('schoolName') as HTMLInputElement).value;
    const email = (target.elements.namedItem('email') as HTMLInputElement).value;

    if (!phoneNumber || !grade || !email) {
        alert("Please fill in all required fields (Phone, Grade, and Email)");
        return;
    }

    // 2. Ensure data structure matches what backend expects
    const dataToSend = {
        competitionId: competitionId || 1, // Make sure this is sent!
        email,
        phoneNumber,
        grade,
        schoolName
    };

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/competitions/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dataToSend),
        });

        const result = await response.json();

        if (response.ok) {
            toast.success('Registration successful!');
            setGrade("");
            setPhoneNumber('');
            target.reset(); // Clears schoolName and email inputs
        } else {
            toast.error(result.message || 'Registration failed.');
        }
    } catch (error) {
        toast.error('An error occurred. Please check your connection.');
    }
};
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4 font-sans">
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Section: Testimonial */}
       
<Testimonial />
        {/* Right Section: Form */}
        <div className="flex flex-col space-y-6 max-w-md mx-auto w-full">
          <h1 className="text-3xl font-bold text-gray-800">Enter your details to complete registration</h1>
          
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
                  inputClass="!w-full !h-12 !text-lg !border-gray-300 !rounded-lg focus:!ring-green-500"
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
                  className="w-full h-12 px-4 appearance-none border border-gray-300 rounded-lg text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white cursor-pointer"
                >
                  <option value="" disabled>Select grade/class</option>
                  {grades.map((g) => (
                    <option key={g} value={g}>{g}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-4 top-3.5 text-gray-400 pointer-events-none w-5 h-5" />
              </div>
            </div>
<div>
  <input type="text" name="schoolName"  placeholder="School Name"  className="w-full h-12 px-4 appearance-none placeholder:text-black border border-gray-300 rounded-lg text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white cursor-pointer" />
</div>
<div>
  <input type="email" name="email"  placeholder="Email"  className="w-full h-12 px-4 appearance-none placeholder:text-black border border-gray-300 rounded-lg text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white cursor-pointer" />
</div>
            <button className="w-full bg-[#047a0a] hover:bg-[#035803] text-white font-bold py-3.5 rounded-lg transition-colors shadow-lg shadow-green-200">
              Complete Registration
            </button>

       
            <p className="text-[10px] text-gray-400 leading-tight">
              By signing up, you agree to the <span className="underline cursor-pointer">Terms of Service</span> and <span className="underline cursor-pointer">Privacy Policy</span>. 
              You also agree that you have parental consent. Important updates will be sent via email, SMS & WhatsApp, and class reminders will be sent via call.
            </p>
          </form>
        </div>
      </div>

      {/* Global CSS overrides for the Phone Input to match Tailwind
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
      `}</style> */}
    </div>
  );
}
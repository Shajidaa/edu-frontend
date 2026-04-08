import MyContainer from '@/app/(student)/components/share/MyContainer';
import Link from 'next/link';
import React from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const plans = [
  {
    name: 'Prime',
    price: '1,590.06',
    originalPrice: '2,446.25',
    discount: '35% off',
    description: 'Private 1-on-1 tutoring',
    features: [
      { text: '1:1 personalized live classes (45 minutes each)', included: true },
      { text: '2-3 lessons per week — flexible scheduling tailored for your child', included: true },
      { text: 'Personalized attention in every class', included: true },
      { text: 'Unlimited rescheduling at the student’s convenience', included: true, bold: true },
    ],
  },
  {
    name: 'Premier',
    price: '1,284.50',
    originalPrice: '1,835',
    discount: '30% off',
    description: 'Micro group (2–3 students)',
    features: [
      { text: 'Personalized live group classes (60 minutes each)', included: true },
      { text: '2 lessons per week — 8 fun & engaging classes per month', included: true },
      { text: 'Focused attention in every class', included: true },
      { text: 'Reschedule mutually with your class buddies', included: true },
    ],
  },
  {
    name: 'Plus',
    price: '867.19',
    originalPrice: '1,156.25',
    discount: '25% off',
    description: 'Small group (4–5 students)',
    features: [
      { text: 'Fun & engaging live group classes (60 minutes each)', included: true },
      { text: '2 lessons per week — 8 fun & engaging classes per month', included: true },
      { text: 'Focused attention in every class', included: true },
      { text: 'No rescheduling of classes available', included: false },
    ],
  },
];

export default function Schedule() {
  return (
    <MyContainer >
      <div >
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            3 flexible plans to suit your{' '}
            <span className="relative inline-block">
              child’s learning style & schedule
              <span className="absolute bottom-1 left-0 w-full h-1 bg-yellow-400 -z-10 rounded-full" />
            </span>
          </h2>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl border-2 border-transparent hover:border-green-500 transition-all duration-300 shadow-sm flex flex-col overflow-hidden"
            >
              {/* Card Header - Green Theme */}
              <div className="bg-green-800 p-4 text-center">
                <h3 className="text-white text-2xl font-bold">{plan.name}</h3>
              </div>

              <div className="p-6 flex flex-col flex-1">
                {/* Price Section */}
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-slate-900 text-3xl font-bold">BDT {plan.price}</span>
                    <span className="text-slate-500 text-sm">/ session</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 mt-1">
                    <span className="text-slate-400 line-through text-lg">BDT {plan.originalPrice}</span>
                    <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded-full">
                      {plan.discount}
                    </span>
                  </div>
                </div>

                <Link href={'/booking'} className="w-full py-2.5 text-center border-2 border-green-600 text-green-600 font-bold rounded-lg mb-6 hover:bg-green-50 transition-colors">
                  Try a free lesson
                </Link>

                <div className="text-center mb-6">
                  <span className="font-bold text-slate-800 underline decoration-green-500 decoration-2 underline-offset-4">
                    {plan.description}
                  </span>
                </div>

                {/* Features List */}
                <ul className="space-y-4 mb-8 flex-1">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      {feature.included ? (
                        <FaCheckCircle className="text-green-500 mt-1 shrink-0" />
                      ) : (
                        <FaTimesCircle className="text-red-500 mt-1 shrink-0" />
                      )}
                      <span className={`text-sm leading-tight ${feature.bold ? 'font-bold text-slate-900' : 'text-slate-600'}`}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MyContainer>
  );
}
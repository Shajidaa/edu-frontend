import { Mail } from "lucide-react";
import Link from "next/link";



const Satisfaction = () => {
  return (
    <section className="bg-white py-16 px-4 font-sans">
      <div className="max-w-5xl mx-auto text-center">
        {/* Header Section */}
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">
          You are in <span className="underline decoration-orange-400 underline-offset-4">safe hands</span> at Next Gen Learning
        </h2>
        <p className="text-slate-600 mb-10">
          Like thousands of other parents who have enrolled their kids and teens
        </p>

        {/* Guarantee Box */}
        <div className="flex flex-col md:flex-row items-center border border-blue-100 rounded-sm overflow-hidden text-left bg-white">
          
          {/* Left Side: Seal Image */}
          <div className="w-full md:w-1/3 flex justify-center items-center p-8 border-b md:border-b-0 md:border-r border-blue-100">
            {/* Using a high-quality guarantee seal from Unsplash or a placeholder */}
            <div className="relative w-48 h-48">
               <img 
                src="https://static.vecteezy.com/system/resources/previews/003/609/367/non_2x/money-back-guarantee-gold-sign-label-free-vector.jpg" 
                alt="100% Money Back Guarantee"
                className="object-contain w-full h-full"
              />
              {/* Note: In a real app, replace the src with your specific '100% money back' badge asset */}
            </div>
          </div>

          {/* Right Side: Text Content */}
          <div className="w-full md:w-2/3 p-8 md:p-12">
            <p className="text-slate-700 leading-relaxed mb-6">
              At Next Gen Learning, we are passionate about customer satisfaction.
            </p>
            <p className="text-slate-700 leading-relaxed mb-6">
              Therefore, we have a <span className="font-semibold text-slate-900">100% moneyback guarantee policy</span>. 
              If we do not meet your expectations, you have the right to cancel your purchase and get your money back. 
              It&apos;s as simple as that.
            </p>
            <p className="text-slate-700 leading-relaxed">
              If at any point, you feel that you wish to discontinue using Next Gen Learning, please email us at{' '}
              <a 
                href="mailto:support@nextgenlearning.com" 
                className="text-blue-500 hover:text-blue-600 transition-colors inline-flex items-center gap-1"
              >
                <Mail size={16} /> support@nextgenlearning.com
              </a>{' '}
              and we will immediately process your refund for the remaining lessons/classes, no questions asked.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-10">
          <Link href={'/booking'} className="bg-[#007000] hover:bg-[#2ee02e] text-white font-bold py-4 px-10 rounded-md transition-transform active:scale-95 shadow-lg shadow-orange-200">
            Try a free lesson
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Satisfaction;
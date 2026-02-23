import React from 'react';
import { ShieldCheck, Lock, Eye, FileText, CheckCircle } from 'lucide-react';
import Image from 'next/image';

const PrivacyPage = () => {
  return (
    <div className="bg-[#f7fbe1] min-h-screen font-sans text-slate-800">
      {/* --- Header / Hero Section --- */}
      <section className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 leading-tight">
            Our commitment to <span className="text-blue-600">you</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            As the industry leader in student data privacy and responsible AI, we know how much trust schools place in Pear Deck Learning solutions. Discover how we earn — and keep — the respect of schools and educators alike.
          </p>
        </div>
        <div className="md:w-1/2 relative">
          <Image
            width={400}
            height={300}
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" 
            alt="Educators collaborating" 
            className="rounded-3xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500"
          />
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        </div>
      </section>

      {/* --- Feature Tabs Placeholder --- */}
      <div className="flex justify-center gap-4 mb-0">
        <button className="bg-[#bce4fa] px-8 py-4 rounded-t-xl font-bold text-slate-700 border-b-4 border-blue-400">Student Data Privacy</button>
       
      </div>

      {/* --- Protection Details Section --- */}
      <section className="bg-[#d1eefe] py-20 px-6">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">How does Next Gen Learning protect student data?</h2>
          <p className="max-w-2xl mx-auto text-slate-600">
            As a recognized leader in student data privacy, we have a dedicated privacy team that works across all divisions of the company to implement proactive privacy protections.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <PrivacyCard 
            icon={<ShieldCheck className="text-blue-500" />}
            title="We're proactive about protecting student information."
            points={[
              "Pear Deck Learning does not sell, trade, or rent student personal information.",
              "We are FERPA compliant, meaning schools always maintain certain rights over their student data."
            ]}
          />
          <PrivacyCard 
            icon={<Eye className="text-blue-500" />}
            title="We ensure schools maintain control over their data."
            points={[
              "Schools and districts partner with Pear Deck Learning own and control their Personal Student Information.",
              "Pear Deck Learning does not use Personal Student Information beyond the purposes explicitly outlined in agreements."
            ]}
          />
          <PrivacyCard 
            icon={<Lock className="text-blue-500" />}
            title="We follow industry best practices to safeguard data."
            points={[
              "We apply a combination of technical, administrative, and physical safeguards.",
              "We use military-grade TLS encryption across our products and websites.",
              "We restrict access to Personal Student Information on a 'need-to-know' basis."
            ]}
          />
          <PrivacyCard 
            icon={<FileText className="text-blue-500" />}
            title="We continuously test and assess to improve privacy practices."
            points={[
              "We constantly monitor state and federal laws to ensure our policies meet — and often exceed — requirements.",
              "We collaborate with experts and advocates to examine industry-leading privacy topics."
            ]}
          />
        </div>
      </section>

      {/* --- Certifications Section --- */}
      <section className="max-w-6xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-16">
        <div className="md:w-1/2">
          <Image
         width={400}
          height={300}
            src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800" 
            alt="Student studying" 
            className="rounded-2xl shadow-lg"
          />
        </div>
        <div className="md:w-1/2">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-white rounded-xl shadow-sm border border-slate-100">
              <CheckCircle size={40} className="text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold">Certifications & Partnerships</h2>
          </div>
          <p className="text-slate-600 text-lg mb-4">
            Pear Deck Learning products are <strong>1EdTech TrustEd Apps certified</strong>.
          </p>
          <div className="h-1 w-20 bg-blue-500 rounded-full"></div>
        </div>
      </section>
    </div>
  );
};

/* --- Sub-component for clean code --- */
const PrivacyCard = ({ icon, title, points }: { icon: React.ReactNode; title: string; points: string[] }) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
    <div className="mb-4">{icon}</div>
    <h3 className="font-bold text-xl mb-4 leading-tight">{title}</h3>
    <ul className="space-y-3">
      {points.map((point, idx) => (
        <li key={idx} className="flex gap-3 text-sm text-slate-600 leading-relaxed">
          <span className="text-blue-400 mt-1">•</span>
          {point}
        </li>
      ))}
    </ul>
  </div>
);

export default PrivacyPage;
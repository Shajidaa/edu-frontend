
import { Shield } from 'lucide-react';
import Image from 'next/image';

const SectionHeader = ({ title, subtitle, centered = false }:{ title: string; subtitle: string; centered?: boolean }) => (
  <div className={`max-w-3xl mb-12 ${centered ? 'mx-auto text-center' : ''}`}>
    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
      {title}
    </h2>
    <p className="text-lg text-slate-600 leading-relaxed">
      {subtitle}
    </p>
  </div>
);

export default function Partners() {
  // Curated Unsplash IDs for EdTech/Software logos and collaborative environments
  const integrations = [
    "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=200&h=200&fit=crop", // Google
    "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?w=200&h=200&fit=crop", // Microsoft
    "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=200&h=200&fit=crop", // Apple
    "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=200&h=200&fit=crop", // Tech Icon
    "https://images.unsplash.com/photo-1614680376408-81e91ffe3db7?w=200&h=200&fit=crop", // Communication
    "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=200&h=200&fit=crop"  // Code/LMS
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Top Hero Section */}
      <section className="bg-[#eef8ff] py-20 px-6">
        <SectionHeader 
          centered
          title="Effortless integrations and trusted partnerships"
          subtitle="Elevate education with Next Gen Learning's multitude of top-notch integrations and partnerships with industry all-stars like Google Classroom, Microsoft Teams, and many more."
        />
      </section>

      {/* Easy Integrations Section */}
      <section className="max-w-7xl mx-auto py-24 px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="animate-fadeIn">
          <SectionHeader 
            title="Easy integrations for seamless learning experiences"
            subtitle="Successful integrations need to meet the unique needs of every student, district, technology program, and beyond. Our thoughtful approach means you get set up with everything you need."
          />
        </div>
        <div className="bg-[#d9f99d] p-12 rounded-[2.5rem] grid grid-cols-2 md:grid-cols-3 gap-6 shadow-inner">
          {integrations.map((src, i) => (
            <div key={i} className="bg-white aspect-square rounded-2xl shadow-sm flex items-center justify-center p-6 transform hover:scale-105 transition-transform">
               <Image
                width={80}
                height={80}
                src={src} 
                alt="Integration Partner" 
                className="w-full h-full object-contain rounded-lg"
               />
            </div>
          ))}
        </div>
      </section>

      {/* Content Partners Section */}
      <section className="bg-[#e2f5ee] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            centered
            title="Content partners"
            subtitle="We partner with trusted organizations to bring you content that promotes student engagement, digital citizenship, and critical thinking."
          />
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6 max-w-5xl mx-auto">
             {[...Array(12)].map((_, i) => (
               <div key={i} className="bg-white h-20 rounded-xl shadow-sm border border-slate-50 overflow-hidden flex items-center justify-center">
                 <Image
                 width={40}
                  height={20}
                  src={`https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=150&h=80&fit=crop&q=60&sig=${i}`} 
                  alt="Partner Logo" 
                  className="w-4/5 h-4/5 object-contain opacity-70 hover:opacity-100 transition-opacity"
                 />
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Brand Partners Section */}
      <section className="max-w-7xl mx-auto py-24 px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1 bg-[#dbeafe] p-12 rounded-[2.5rem] grid grid-cols-3 gap-6">
           {[...Array(9)].map((_, i) => (
               <div key={i} className="bg-white h-20 rounded-xl shadow-sm overflow-hidden">
                 <Image
                  width={40}
                  height={20}
                  src={`https://images.unsplash.com/photo-1599305090598-fe179d501227?w=150&h=80&fit=crop&q=60&sig=${i+20}`} 
                  alt="Brand Partner" 
                  className="w-full h-full object-contain p-2 grayscale hover:grayscale-0 transition-all"
                 />
               </div>
           ))}
        </div>
        <div className="order-1 md:order-2">
          <SectionHeader 
            title="Brand partners"
            subtitle="We've forged strategic partnerships with key brands to leverage their expertise for more successful learning."
          />
        </div>
      </section>

      {/* Privacy Footer Callout */}
      <section className="max-w-5xl mx-auto px-6 mb-24">
        <div className="bg-[#f7fbe1] rounded-3xl p-12 flex flex-col md:flex-row items-center gap-10 border border-green-100">
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-4 text-slate-800">Privacy & Safety</h3>
            <p className="text-slate-600 leading-relaxed">
              Pear Deck Learning is committed to safeguarding the data entrusted to us and to the transparency and continual improvement that keeps that trust growing.
            </p>
          </div>
          <div className="shrink-0 bg-white p-8 rounded-2xl shadow-xl border border-slate-100 text-center w-full md:w-auto">
            <Shield className="mx-auto mb-4 text-blue-600" size={48} />
            <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">Student Privacy Pledge</div>
            <div className="text-3xl font-black text-blue-900">2026</div>
          </div>
        </div>
      </section>
    </div>
  );
}
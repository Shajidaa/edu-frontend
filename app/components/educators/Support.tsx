import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const SUPPORT_LINKS = [
  { label: 'Resources', href: '/resources' },
  { label: 'Blog', href: '/blog' },
  { label: 'Help Center', href: '/help' },
];

const SupportSection = () => {
  return (
    <section className="w-full bg-[#E2F592] py-20 px-6 font-sans text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-[#1D3B31] mb-6">
          On-demand training & support
        </h2>
        
        <p className="text-lg md:text-xl text-[#1D3B31] mb-10">
          To speak with a Pear Deck Learning expert,{' '}
          <a 
            href="/contact" 
            className="underline decoration-1 underline-offset-4 hover:opacity-80 transition-opacity"
          >
            contact our support team
          </a>.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {SUPPORT_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="inline-flex items-center justify-between min-w-40 px-8 py-4 bg-[#1D5C43] text-white rounded-full font-semibold transition-transform hover:scale-105 active:scale-95"
            >
              <span className="mr-2">{link.label}</span>
             <FaArrowRight />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};



export default SupportSection;
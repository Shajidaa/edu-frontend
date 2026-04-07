import Link from 'next/link';
import MyContainer from './MyContainer';


export default function Footer() {
  const sections = [
    {
      title: 'Solutions',
      links: ['Professional Services', 'Use Cases', 'Efficacy', 'Integrations'],
    },
    {
      title: 'Products',
      links: ['Edu Start', 'Edu Deck', 'Edu Practice', 'Edu Assessment', 'Edu Deck Tutor'],
    },
    {
      title: 'Go Guardian',
      links: ['GoGuardian Website', 'Classroom Management', 'Safety & Security', 'Get a Quote', 'Privacy & Trust'],
    },
    {
      title: 'Company',
      links: ['About Us', 'GoGuardian', 'Newsroom', 'Security Reporting Program', 'Contact'],
    },
    {
      title: 'People',
      links: ['Educators', 'Schools & Districts', 'Tutors'],
    },
    {
      title: 'Resources',
      links: ['Blog', 'Resource Center', 'Help Center', 'Plans & Pricing', 'Product Updates', 'Success Stories', 'Advocacy Program', 'Partners'],
    },
  ];

  return (
    <footer className="bg-[#0f172a] text-white pt-16 pb-8 px-6 md:px-12">
      <MyContainer >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Brand and Newsletter Section */}
          <div className="lg:col-span-4 space-y-8">
            <div className="flex items-center gap-3">
              <div className="bg-[#bef264] p-2 rounded-full w-10 h-10 flex items-center justify-center">
                {/* Simplified Pear Logo Icon */}
              
                <span>🎓</span>              </div>
              <p className="text-sm font-medium leading-relaxed max-w-62.5">
                We help teachers deliver powerful learning moments to every student, every day.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-2">Join our newsletter</h3>
              <p className="text-gray-400 text-sm mb-4">We&lsquo;ll send you a nice letter every two weeks. No spam.</p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-white text-black px-4 py-2 rounded-lg grow outline-none"
                />
                <button className="bg-[#bef264] text-black font-bold px-6 py-2 rounded-full hover:bg-[#a3e635] transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Navigation Grid */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
            {sections.map((section) => (
              <div key={section.title}>
                <h4 className="font-bold mb-4 text-gray-300">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm hover:text-[#bef264] transition-colors">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Legal Links */}
        <div className="border-t border-gray-800 pt-8 flex flex-wrap gap-x-6 gap-y-4 text-xs font-bold mb-8">
          <Link href="#" className="hover:underline">Website Terms</Link>
          <Link href="#" className="hover:underline">Website Privacy Policy</Link>
          <Link href="#" className="hover:underline">Product Terms</Link>
          <Link href="#" className="hover:underline">Product Privacy Policy</Link>
          <Link href="#" className="hover:underline">Privacy & Trust</Link>
          <Link href="#" className="hover:underline">California Residents Notice</Link>
          <div className="flex items-center gap-1">
            <span className="text-blue-400">✓✕</span>
            <Link href="#" className="hover:underline">Your Privacy Rights</Link>
          </div>
        </div>

        {/* Copyright and Socials */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-gray-800 pt-8">
          <p className="text-xs text-gray-400">© 2026 Pear Deck Learning. All Rights Reserved.</p>
          <div className="flex gap-3">
            {['In', 'Yo', 'X', 'Ig', 'Fb'].map((social) => (
              <div key={social} className="w-6 h-6 bg-[#bef264] rounded-full flex items-center justify-center text-[10px] text-black font-bold cursor-pointer hover:scale-110 transition-transform">
                {social}
              </div>
            ))}
          </div>
        </div>
      </MyContainer>
    </footer>
  );
}
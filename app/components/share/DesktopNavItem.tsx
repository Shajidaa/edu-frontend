import { ChevronDown } from "lucide-react";
import Link from "next/link";

export default function DesktopNavItem({ link, isActive, isCurrentPath, onMouseEnter, onMouseLeave }: { 
  link: { name: string; href: string; hasDropdown: boolean };
  isActive: boolean;
  isCurrentPath: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  return (
    <div 
      className="relative h-full flex items-center px-4 cursor-pointer"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Link 
        href={link.href} 
        className={`flex items-center gap-1.5 text-[15px] font-bold transition-colors duration-200 ${
          isActive || isCurrentPath ? 'text-green-600' : 'text-slate-700'
        }`}
      >
           <span>{link.name}</span>
         {link.hasDropdown && (
          <div className={`transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`}>
            <ChevronDown size={15} strokeWidth={2.5} />
         </div>
         )}
      </Link>
      
      {/* Permanent underline for current path OR hover */}
      <div className={`absolute bottom-0 left-0 w-full h-1 bg-green-500 rounded-t-full transition-all duration-300 ${
        isActive || isCurrentPath ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
      }`} />
    </div>
  );
}
import Link from "next/link";
import { Heart } from "lucide-react";

export default function DonateButton() {
  return (
    <div className="flex items-center">
      <Link 
        href="/donate" 
        className="group relative inline-flex items-center gap-1.5 md:gap-2.5 px-3 py-2 sm:px-6 md:px-8 md:py-3 bg-white border border-blue-200 rounded-full overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_4px_15px_rgb(37,99,235,0.2)] md:shadow-[0_8px_30px_rgb(37,99,235,0.3)]"
      >
        {/* Subtle Shine Reflection */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
        
        {/* Icon: Hidden on very small screens to save space */}
        <Heart 
          size={14} 
          className="hidden xs:block text-blue-500 fill-current group-hover:animate-pulse transition-transform" 
        />
        
        {/* Text: Smaller on mobile, standard on desktop */}
        <span className="relative text-blue-500 text-[10px] sm:text-xs md:text-sm font-black tracking-tighter sm:tracking-wide uppercase">
          Donate
        </span>
      </Link>
    </div>
  );
}
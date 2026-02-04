import Link from "next/link";
import { Heart } from "lucide-react";

export default function DonateButton() {
  return (
    <div className="flex items-center">
      <Link 
        href="/donate" 
        className="group relative inline-flex items-center gap-2.5 px-8 py-3 bg-white border border-blue-200 rounded-full overflow-hidden transition-all duration-300  hover:scale-105 active:scale-95 shadow-[0_8px_30px_rgb(37,99,235,0.3)] hover:shadow-[0_8px_40px_rgb(37,99,235,0.5)]"
      >
        {/* Subtle Shine Reflection Effect */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
        
        {/* The Icon */}
        <Heart 
          size={16} 
          className="text-blue-500 fill-current group-hover:animate-pulse transition-transform" 
        />
        
        {/* The Text */}
        <span className="relative text-blue-500 text-sm font-bold tracking-wide uppercase ">
          Donate
        </span>
      </Link>
    </div>
  );
}
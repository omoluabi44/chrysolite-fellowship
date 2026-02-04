"use client";
import Link from "next/link";
import Image from "next/image";

export default function ChurchLogo({ className = "" }) {
  return (
    <Link href="/" className={`group flex items-center gap-3 ${className}`}>
      {/* Chrysolite Image Container */}
      <div className="relative w-16 h-16 flex items-center justify-center ">
        <Image 
          src="/chrysolite.png" // Ensure your image is in the public folder
          alt="Chrysolite Symbol"
          width={100}
          height={100}
          className="object-contain group-hover:scale-110 transition-transform duration-500 ease-out"
        />
      </div>

      {/* Text Branding */}
      <div className="flex flex-col">
        <h1 className="text-xl md:text-2xl font-serif font-bold leading-none tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
          CHRYSOLITE
        </h1>
        <div className="flex items-center gap-1.5 mt-1.5">
          <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.15em] text-blue-600">
            Interdenominational
          </span>
          <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
            Fellowship
          </span>
        </div>
      </div>
    </Link>
  );
}
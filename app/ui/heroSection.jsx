"use client";
import Image from "next/image";
import {Play, MapPin, Clock} from "lucide-react";
import Link from "next/link";

export default function ChurchHero() {
  return (
    <section className="relative h-[90vh] w-full flex items-center justify-center overflow-hidden">
      {/* 1. Optimized Image Background */}
      <div className="absolute inset-0 z-0">
        {/* Dark cinematic overlay for text legibility */}
        <div className="absolute inset-0 bg-slate-900/60 z-10" />
        <Image
          src="/church2.jpg" // Ensure your image is in the public folder
          alt="Grace Church Worship Atmosphere"
          fill
          priority // Loads the image immediately for better SEO/LCP
          className="object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>

      {/* 2. Main Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl">
        <span className="text-blue-400 font-medium tracking-widest uppercase mb-4 block animate-fade-in">
          Welcome to Grace Church
        </span>
        <h1 className="text-5xl md:text-7xl font-serif text-white font-bold leading-tight mb-6">
          Experience Faith. <br />
          <span className="italic font-light text-blue-100">Find Community.</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
          Join us as we seek to follow Jesus together and make a difference in our city.
          There is a place for you here.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-blue-600/20 active:scale-95">
            Join Us This Sunday
          </button>
          <Link href="https://youtube.com/@chrysolite_cif"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-bold transition-all flex items-center justify-center gap-2">
            <Play size={20} className="fill-white" /> Watch Latest Sermon
          </Link>
        </div>
      </div>

      {/* 3. Floating Info Card (Glassmorphism) */}

    </section>
  );
}
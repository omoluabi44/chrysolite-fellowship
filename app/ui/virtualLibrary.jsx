"use client";
import {Play, Calendar, User, ArrowRight} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const sermons = [
  {
    id: "1",
    title: "Walking in Divine Purpose",
    speaker: "Pastor Happy Adese",
    date: "Jan 25, 2026",
    thumbnail: "https://img.youtube.com/vi/e7jo3oHcKU8/maxresdefault.jpg",
    category: "Worship"
  }
];

export default function SermonGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">
              Virtual <span className="text-blue-600">Sanctuary</span>
            </h2>
            <p className="text-slate-600">
              Catch up on our previous sermons and spiritual encounters.
              The word of God is timeless and available whenever you need it.
            </p>
          </div>
          <Link href="https://youtube.com/@chrysolite_cif"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-600 font-bold hover:gap-4 transition-all group">
            Browse All Sermons <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sermons.map((sermon) => (
            <div key={sermon.id} className="group cursor-pointer">
              {/* Thumbnail Container */}
              <a href="https://www.youtube.com/shorts/e7jo3oHcKU8" target="_blank" rel="noopener noreferrer">
                <div className="relative aspect-video rounded-3xl overflow-hidden shadow-lg mb-6">
                  <Image
                    src={sermon.thumbnail}
                    alt={sermon.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center scale-90 group-hover:scale-100 transition-transform duration-300 border border-white/30">
                      <Play className="text-white fill-white ml-1" size={32} />
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-amber-600 text-white text-xs font-bold rounded-full uppercase tracking-widest shadow-lg">
                      {sermon.category}
                    </span>
                  </div>
                </div>
              </a>


              {/* Sermon Meta */}
              <div className="px-2">
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {sermon.title}
                </h3>
                <div className="flex items-center gap-6 text-slate-500 text-sm">
                  <div className="flex items-center gap-2">
                    <User size={16} className="text-blue-600" />
                    <span>{sermon.speaker}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-blue-600" />
                    <span>{sermon.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
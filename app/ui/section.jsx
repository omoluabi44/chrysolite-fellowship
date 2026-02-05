"use client";
import { Calendar, Clock, MapPin, Bell, ArrowRight } from "lucide-react";

export default function MonthlyProgram() {
  const program = {
    title: "Intimacy Praise Night",
    date: "February 20, 2026",
    time: "10:00 PM (Vigil)",
    location: "Main Sanctuary & Online",
    description: "An atmospheric night of prophetic prayer and worship to usher in the new month."
  };

  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Header Area */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold tracking-[0.2em] uppercase text-xs">
            Monthly Praise Night
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-light text-slate-900 tracking-tight">
            {program.title}
          </h2>
          <div className="mt-4 h-1 w-12 bg-blue-500 mx-auto rounded-full" />
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden">
          <div className="flex flex-col md:flex-row">
            
            {/* Left: Description & Action */}
            <div className="flex-[1.2] p-8 md:p-14 border-b md:border-b-0 md:border-r border-slate-50">
              <p className="text-slate-500 text-lg leading-relaxed mb-10">
                {program.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-medium hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
                  <Bell size={18} />
                  Set Reminder
                </button>
                
              </div>
            </div>

            {/* Right: Details Grid */}
            <div className="flex-1 bg-slate-50/50 p-8 md:p-14 space-y-8">
              <div className="flex gap-5">
                <Calendar className="text-blue-500 shrink-0" size={24} />
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1">Date</h4>
                  <p className="text-slate-800 font-semibold">{program.date}</p>
                </div>
              </div>

              <div className="flex gap-5">
                <Clock className="text-blue-500 shrink-0" size={24} />
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1">Time</h4>
                  <p className="text-slate-800 font-semibold">{program.time}</p>
                </div>
              </div>

              <div className="flex gap-5">
                <MapPin className="text-blue-500 shrink-0" size={24} />
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1">Location</h4>
                  <p className="text-slate-800 font-semibold">{program.location}</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Subtle Footer Note */}
        <p className="text-center mt-12 text-slate-400 text-sm italic">
          "Prepare your heart for a divine encounter."
        </p>
      </div>
    </section>
  );
}
"use client";
import { Users, BookOpen, ShieldCheck, Zap, Heart, Flame } from "lucide-react";
import ChurchNavbr from '@/app/ui/Navbar'
import ChurchFooter from '@/app/ui/socialAddress'

export default function AboutPage() {
  const values = [
    {
      icon: <ShieldCheck size={28} />,
      title: "Grounded in Truth",
      description: "Rooted in the foundational truths of Scripture and sound biblical teaching."
    },
    {
      icon: <Users size={28} />,
      title: "United in Love",
      description: "A space where believers from all backgrounds come together as one body in Christ."
    },
    {
      icon: <Zap size={28} />,
      title: "Empowered for Impact",
      description: "Equipped by the Holy Spirit to live out faith beyond denominational boundaries."
    }
  ];

  return (
    
    <>
     <ChurchNavbr/>
      <div className="min-h-screen bg-white">
       
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-slate-50">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/50 rounded-l-[10rem] -z-0" />
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="text-blue-600 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
              Our Identity
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-8 leading-tight">
              Raising believers firm in faith, <span className="text-blue-600">rich in wisdom.</span>
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed font-medium">
              Chrysolite Interdenominational Fellowship is a Christ-centered community 
              committed to unity and spiritual transformation.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Core Narrative Section */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              {/* Minimalist Image Placeholder/Design Element */}
              <div className="aspect-[4/5] bg-blue-100 rounded-[3rem] overflow-hidden relative shadow-2xl shadow-blue-900/5">
                 <div className="absolute inset-0 flex items-center justify-center">
                    <Flame size={120} className="text-blue-200" strokeWidth={1} />
                 </div>
                 <div className="absolute bottom-8 left-8 right-8 bg-white/80 backdrop-blur-md p-8 rounded-2xl">
                    <p className="text-slate-800 italic font-serif">
                      "More than a gathering; it is a family where faith is strengthened and purpose discovered."
                    </p>
                 </div>
              </div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-600/10 rounded-full blur-2xl" />
            </div>

            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Beyond Denominational Boundaries</h2>
              <div className="space-y-6 text-slate-500 text-lg leading-relaxed">
                <p>
                  We exist to create a space where believers from different backgrounds can come together as one body, 
                  focused on the gospel of Jesus Christ. Our fellowship is built on the leading of the Holy Spirit 
                  and the call to reflect Christ in character.
                </p>
                <p>
                  At Chrysolite, spiritual growth thrives in an atmosphere of unity, sound teaching, and genuine fellowship. 
                  Through discipleship and outreach, we nurture faith and equip members to impact their communities positively.
                </p>
              </div>
              
              <div className="pt-6">
                <div className="flex items-center gap-4 text-blue-600 font-bold uppercase tracking-widest text-xs">
                  <div className="h-px w-12 bg-blue-600" />
                  Our Vision
                </div>
                <p className="mt-4 text-2xl font-serif italic text-slate-800">
                  "To raise men and women who shine as refined believers, firm in faith and passionate about God’s purpose."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Values Grid */}
      <section className="py-24 bg-blue-950 text-white rounded-[4rem] mx-4 mb-12 shadow-2xl overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[100px]" />
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Foundational Pillars</h2>
            <p className="text-blue-200/60 max-w-xl mx-auto">Built upon the Word of God and the fellowship of the Spirit.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] hover:bg-white/10 transition-all group">
                <div className="text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {val.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{val.title}</h3>
                <p className="text-blue-100/60 text-sm leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Call to Action */}
      <section className="py-24 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <Heart size={40} className="mx-auto text-blue-600 mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">You Have a Home Here</h2>
          <p className="text-slate-500 mb-10 text-lg">
            Whether you’re seeking growth, fellowship, or a place to serve, we welcome you to join our family.
          </p>
          <button className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold hover:bg-slate-900 transition-all shadow-xl shadow-blue-200">
            Join the Fellowship
          </button>
        </div>
      </section>
    </div>
    <ChurchFooter/>
    </>
  
  );
}
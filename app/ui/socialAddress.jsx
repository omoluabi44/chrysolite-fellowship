"use client";
import {Facebook, Instagram, Youtube, Twitter, MapPin, Phone, Mail, Send} from "lucide-react";
import ChurchLogo from  "@/app/ui/logo"

export default function ChurchFooter() {
  const TikTokIcon = () => (
    <svg viewBox="0 0 24 24" width="18" height="18" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
  );

  const socials = [
    {name: "Facebook", icon: <Facebook size={20} />, href: "https://www.facebook.com/profile.php?id=61571589394190&mibextid=ZbWKwL", hover: "bg-[#1877F2]"},
    {name: "Instagram", icon: <Instagram size={20} />, href: "https://www.instagram.com/cif_ibeju_lekki", hover: "bg-[#E4405F]"},
    {name: "Youtube", icon: <Youtube size={20} />, href: "https://youtube.com/@chrysolite_cif", hover: "bg-[#FF0000]"},
    {name: "Twitter", icon: <Twitter size={20} />, href: "https://x.com/CIF_IBEJU_LEKKI", hover: "bg-[#1DA1F2]"},
    {name: "TikTok", icon: <TikTokIcon />, href: "https://www.tiktok.com/@chrysolite.fellow", hover: "bg-[#1DA1F2]"},
  ];


  return (
    <footer className="bg-white text-slate-600 pt-24 pb-12 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Section: Brand & Social Emphasis */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-20">
          <div>
           <ChurchLogo/>
            <p className="text-slate-500">Join our digital community and stay inspired daily.</p>
          </div>

          {/* Social Media Row - High Emphasis */}
          <div className="flex flex-wrap gap-4">
            {socials.map((social, i) => (
              <a
                key={i}
                href={social.href}
                aria-label={social.name}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center gap-3 px-6 py-3 rounded-2xl  text-slate-400 transition-all duration-300 ${social.hover} text-white hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/10`}
              >
                {social.icon}
                <span className="text-sm font-bold tracking-wide uppercase">{social.name}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-12 lg:gap-16 border-t border-slate-50 pt-16">



          {/* Contact Details */}
          <div className="lg:col-span-5">
            <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold text-blue-600 mb-8 text-center md:text-left">Connect with us</h3>
            <div className="grid sm:grid-cols-2 gap-8 text-sm">
              <div className="space-y-4 flex flex-col items-center md:items-start">
                <MapPin className="text-blue-600" size={20} />
                <p className="leading-relaxed text-center md:text-left">1 CHRYSOLITE GLOBAL STREET, MILITARY LANDLORD'S ESTATE, ELEKO JUNCTION, IBEJU LEKKI, LAGOS, NIGERIA.</p>
              </div>
              <div className="space-y-4 flex flex-col items-center md:items-start">
                <Mail className="text-blue-600" size={20} />
                <p className="text-center md:text-left">chrysoliteinterdenominationalf@gmail.com<br />+234 903 020 5960</p>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="lg:col-span-4">
            <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold text-blue-600 mb-8 text-center md:text-left">Weekly Updates</h3>
            <form className="relative group">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-slate-50 border-2 border-transparent rounded-2xl py-4 px-6 text-sm focus:bg-white focus:border-blue-100 focus:outline-none transition-all"
              />
              <button className="absolute right-2 top-2 bg-blue-600 text-white p-2.5 rounded-xl hover:bg-slate-900 transition-all">
                <Send size={18} />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}

      </div>
    </footer>
  );
}
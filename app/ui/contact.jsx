"use client";
import { Mail, Phone, MapPin, MessageSquare, Send, Clock, Instagram, Facebook, Youtube } from "lucide-react";
import ChurchNavbr from '@/app/ui/Navbar'
import ChurchFooter from '@/app/ui/socialAddress'

export default function ContactPage() {
    // Custom SVGs for platforms not in standard Lucide
    const TikTokIcon = () => (
        <svg viewBox="0 0 24 24" width="18" height="18" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
    );

    const XIcon = () => (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="white"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"></path></svg>
    );

    const socialLinks = [
        { 
            name: "Instagram", 
            icon: <Instagram size={18} className="text-white" />, 
            href: "https://www.instagram.com/cif_ibeju_lekki", 
            brandClass: "bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] hover:brightness-110" 
        },
        { 
            name: "Facebook", 
            icon: <Facebook size={18} className="text-white" />, 
            href: "https://www.facebook.com/profile.php?id=61571589394190&mibextid=ZbWKwL", 
            brandClass: "bg-[#1877F2] hover:bg-[#166fe5]" 
        },
        { 
            name: "Youtube", 
            icon: <Youtube size={18} className="text-white" />, 
            href: "https://youtube.com/@chrysolite_cif", 
            brandClass: "bg-[#FF0000] hover:bg-[#e60000]" 
        },
        { 
            name: "X", 
            icon: <XIcon />, 
            href: "https://x.com/CIF_IBEJU_LEKKI", 
            brandClass: "bg-[#000000] hover:bg-slate-800" 
        },
        { 
            name: "TikTok", 
            icon: <TikTokIcon />, 
            href: "https://www.tiktok.com/@chrysolite.fellow", 
            brandClass: "bg-black hover:bg-slate-900" 
        },
    ];

    return (
        <>
            <ChurchNavbr />
            <div className="min-h-screen bg-slate-50 pt-32 pb-20">
                <div className="max-w-6xl mx-auto px-6">

                    {/* Header */}
                    <div className="mb-16">
                        <span className="text-blue-600 font-bold tracking-[0.2em] uppercase text-xs">Get in Touch</span>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mt-4">
                            We’d love to hear <span className="text-blue-600 italic">from you.</span>
                        </h1>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-7">
                            {/* Contact Form Section would go here */}
                        </div>

                        <div className="lg:col-span-5 space-y-8">
                            {/* Contact Details Card */}
                            <div className="bg-blue-600 rounded-[2.5rem] p-10 text-white shadow-xl shadow-blue-600/20">
                                <h3 className="text-xl font-bold mb-8">Contact Information</h3>
                                <div className="space-y-8">
                                    <div className="flex items-start gap-4">
                                        <MapPin className="text-blue-200 shrink-0" size={24} />
                                        <div>
                                            <p className="text-[10px] uppercase tracking-widest text-blue-200 font-bold mb-1">Our Location</p>
                                            <p className="text-sm text-lower leading-snug">1 CHRYSOLITE GLOBAL STREET, MILITARY LANDLORD'S ESTATE, ELEKO JUNCTION, IBEJU LEKKI, LAGOS, NIGERIA.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Phone className="text-blue-200 shrink-0" size={24} />
                                        <div>
                                            <p className="text-[10px] uppercase tracking-widest text-blue-200 font-bold mb-1">Call Us</p>
                                            <p className="text-lg">+234 903 020 5960</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Mail className="text-blue-200 shrink-0" size={24} />
                                        <div>
                                            <p className="text-[10px] uppercase tracking-widest text-blue-200 font-bold mb-1">Email Us</p>
                                            <p className="text-sm font-medium">chrysoliteinterdenominationalf@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Social Media Card */}
                            <div className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-sm">
                                <h3 className="text-lg font-bold text-slate-900 mb-8 flex items-center gap-2">
                                    <Clock className="text-blue-600" size={20} />
                                    Follow Our Community
                                </h3>
                                
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {socialLinks.map((social) => (
                                        <a
                                            key={social.name}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`flex items-center gap-3 px-5 py-4 rounded-2xl text-white font-bold transition-all duration-300 hover:scale-[1.03] shadow-lg ${social.brandClass}`}
                                        >
                                            <span className="shrink-0">{social.icon}</span>
                                            <span className="text-sm tracking-wide">{social.name}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ChurchFooter />
        </>
    );
}
"use client";
import { useState } from "react";
import { Copy, Check, Landmark, CreditCard, Heart, Gift, ArrowRight } from "lucide-react";

export default function GivingPage() {
  const [copied, setCopied] = useState(false);

  const accountDetails = {
    bank: " Zenith Bank PLC",
    name: "Chrysolite Interdenominational Fellowship",
    number: "1219115985",
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(accountDetails.number);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* 1. Header Section */}
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="text-blue-600 fill-blue-600/10" size={32} />
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-6 tracking-tight">
            Generous <span className="text-blue-600 underline decoration-blue-100 decoration-8 underline-offset-4">Giving</span>
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
            "Every man according as he purposeth in his heart, so let him give; for God loveth a cheerful giver."
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* 2. Direct Bank Transfer Card */}
          <div className="lg:col-span-2 bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-slate-100 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-10">
                <div className="bg-blue-600 p-3 rounded-2xl text-white shadow-lg shadow-blue-200">
                  <Landmark size={24} />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Bank Transfer</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-blue-600 font-bold mb-2">Account Name</p>
                  <p className="text-xl font-bold text-slate-800 uppercase tracking-tight">{accountDetails.name}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-blue-600 font-bold mb-2">Bank Name</p>
                    <p className="text-xl font-bold text-slate-800">{accountDetails.bank}</p>
                  </div>

                  <button 
                    onClick={copyToClipboard}
                    className="group bg-blue-50 p-6 rounded-2xl relative transition-all hover:bg-blue-100 text-left border border-blue-200/50"
                  >
                    <p className="text-[10px] uppercase tracking-[0.2em] text-blue-600 font-bold mb-2">Account Number</p>
                    <div className="flex items-center justify-between">
                      <p className="text-2xl font-mono font-bold text-blue-900 tracking-wider">
                        {accountDetails.number}
                      </p>
                      {copied ? (
                        <Check className="text-green-600" size={20} />
                      ) : (
                        <Copy className="text-blue-400 group-hover:text-blue-600 transition-colors" size={20} />
                      )}
                    </div>
                    {copied && (
                      <span className="absolute -top-4 right-4 bg-green-600 text-white text-[10px] px-3 py-1 rounded-full font-bold shadow-lg">
                        COPIED
                      </span>
                    )}
                  </button>
                </div>
              </div>
            </div>

            <p className="mt-12 text-sm text-slate-400 text-center font-medium bg-slate-50 py-3 rounded-xl border border-slate-100">
              Narration: <span className="text-slate-600">Tithe, Offering, or Project</span>
            </p>
          </div>

          {/* <div className="space-y-6">
            <div className="bg-blue-600 rounded-[2.5rem] p-8 text-white shadow-2xl shadow-blue-600/20 relative overflow-hidden group">
    
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full group-hover:scale-110 transition-transform duration-500" />
              
              <div className="bg-white/10 w-12 h-12 rounded-2xl flex items-center justify-center mb-6 border border-white/20">
                <CreditCard size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">Pay Online</h3>
              <p className="text-blue-100 text-sm mb-8 leading-relaxed font-medium">
                Fast and secure tithes via Paystack or Flutterwave.
              </p>
              <button className="w-full bg-white text-blue-600 py-4 rounded-2xl font-bold hover:bg-slate-900 hover:text-white transition-all shadow-xl">
                Pay Securely
              </button>
            </div>

            <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Gift className="text-blue-600" size={20} />
                <h3 className="text-lg font-bold text-slate-900">Other Ways</h3>
              </div>
              <p className="text-sm text-slate-500 mb-6 leading-relaxed">
                Give in-person during our Sunday services or at our administrative office.
              </p>
              <a href="/contact" className="group text-sm font-bold text-blue-600 flex items-center gap-2">
                Inquiry Support 
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div> */}

        </div>
      </div>
    </div>
  );
}
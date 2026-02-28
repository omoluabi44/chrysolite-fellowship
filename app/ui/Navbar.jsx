"use client";
import { useState } from "react";
import Link from "next/link";
import DonateButton from "@/app/ui/donate"
import ChurchLogo from "@/app/ui/logo"

export default function ChurchNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-[100] top-0 left-0 bg-white border-b border-gray-100 h-16 md:h-20">
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-full">
          
          {/* LOGO: min-w-0 and flex-1 allows it to shrink so it doesn't push the button off */}
          <div className="flex-1 min-w-0">
            <Link href="/" className="inline-block max-w-full">
              <ChurchLogo />
            </Link>
          </div>

          {/* RIGHT SIDE: Action Area */}
          <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8 mr-8">
              <Link href="/about" className="text-sm font-bold text-slate-700 hover:text-blue-600">ABOUT</Link>
              <Link href="/contact" className="text-sm font-bold text-slate-700 hover:text-blue-600">CONTACT</Link>
            </div>

            {/* Donate Button - Scales down on mobile to prevent cutoff */}
            <div className="scale-90 xs:scale-100">
               <DonateButton />
            </div>

            {/* Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-1 text-slate-600"
            >
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white border-b border-gray-100`}>
        <div className="px-4 py-6 space-y-4">
          <Link href="/about" className="block text-lg font-bold">ABOUT</Link>
          <Link href="/contact" className="block text-lg font-bold">CONTACT</Link>
        </div>
      </div>
    </nav>
  );
}
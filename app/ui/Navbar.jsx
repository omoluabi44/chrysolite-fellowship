"use client";
import {useState} from "react";
import Link from "next/link";
import DonateButton from "@/app/ui/donate"
import ChurchLogo from  "@/app/ui/logo"

export default function ChurchNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    {name: "ABOUT", href: "/about"},
      {name: "CONTACT", href: "/contact"},
  ];

  return (
    <nav className="fixed w-full z-50 top-0 left-0 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          <ChurchLogo/>

          {/* 2. Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-bold text-blue-600 hover:text-blue-600 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full"
              >
                {link.name}
              </Link>
            ))}

            {/* CTA Button */}
            <DonateButton />
          </div>

          {/* 3. Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none"
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

      {/* 4. Mobile Menu Overlay */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100 py-6' : 'max-h-0 opacity-0 overflow-hidden'} bg-white border-b border-gray-100`}>
        <div className="px-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-lg font-medium text-slate-700 hover:text-blue-600"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/donate"
            className="block text-center bg-blue-600 text-white px-6 py-3 rounded-xl font-bold"
          >
            Donate
          </Link>
        </div>
      </div>
    </nav>
  );
}
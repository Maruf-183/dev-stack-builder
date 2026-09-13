import { useState } from "react";
import logo from "../assets/logo-text.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ["Home", "Technologies", "Projects", "About", "Contact"];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>

        <img src={logo} alt="Dev Stack" className="h-7 w-auto" />

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          {navLinks.map((link) => <li key={link} className="hover:text-pink-600 cursor-pointer transition">{link}</li>)}
        </ul>

        <div className="hidden md:flex items-center gap-5">
          <button className="text-sm font-medium text-gray-700 hover:text-pink-600">Sign In</button>
          <button className="brand-gradient-bg text-white text-sm font-semibold px-5 py-2 rounded-full hover:opacity-90 transition">Sign Up</button>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <button className="text-xs font-medium text-gray-700">Sign In</button>
          <button className="brand-gradient-bg text-white text-xs font-semibold px-3 py-1.5 rounded-full">Sign Up</button>
        </div>
      </nav>

      {isOpen && <ul className="md:hidden flex flex-col gap-4 px-4 pb-4 text-sm font-medium text-gray-700">
        {navLinks.map((link) => <li key={link} onClick={() => setIsOpen(false)} className="hover:text-pink-600">{link}</li>)}
      </ul>}
    </header>
  );
}

export default Navbar;

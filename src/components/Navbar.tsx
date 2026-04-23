import { useState } from 'react';
import { Rocket, ArrowUpRight, Menu, X } from 'lucide-react';

const navLinks = ['Overview', 'Missions', 'Technology', 'Crew', 'Contact'];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-6 lg:px-12 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#overview" className="flex items-center gap-2">
          <Rocket className="h-7 w-7 text-white" />
          <span className="font-heading italic text-2xl text-white">Astra</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center">
          <div className="liquid-glass rounded-full px-1.5 py-1 flex items-center gap-0">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="px-4 py-2 text-sm font-medium text-white/80 font-body hover:text-white transition-colors"
              >
                {link}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-white text-black rounded-full px-4 py-2 text-sm font-semibold font-body flex items-center gap-1.5 ml-1"
            >
              Reserve Seat
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden liquid-glass rounded-full p-2.5"
        >
          {mobileOpen ? <X className="h-5 w-5 text-white" /> : <Menu className="h-5 w-5 text-white" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden mt-3 liquid-glass rounded-2xl p-4 max-w-7xl mx-auto">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 text-sm font-medium text-white/80 font-body hover:text-white transition-colors"
              >
                {link}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="bg-white text-black rounded-full px-4 py-3 text-sm font-semibold font-body flex items-center justify-center gap-1.5 mt-2"
            >
              Reserve Seat
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

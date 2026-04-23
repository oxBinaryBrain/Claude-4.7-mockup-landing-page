import { ArrowUpRight } from 'lucide-react';
import HlsVideo from './HlsVideo';

export default function CtaFooter() {
  return (
    <section id="contact" className="relative overflow-hidden">
      {/* Background HLS video */}
      <HlsVideo
        src="https://stream.mux.com/01yW6GoUz01OTXk5w1Rt1MHkJWlCGIwj46SUONJZ4DJUE.m3u8"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      {/* Top gradient */}
      <div
        className="absolute top-0 left-0 right-0 z-[1]"
        style={{ height: 250, background: 'linear-gradient(to bottom, black, transparent)' }}
      />
      {/* Bottom gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 z-[1]"
        style={{ height: 250, background: 'linear-gradient(to top, black, transparent)' }}
      />

      {/* Content */}
      <div className="relative z-10 px-6 md:px-16 py-40">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-12">
          {/* Left */}
          <div className="max-w-xl">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading italic text-white leading-[0.85]">
              Your seat is waiting above the clouds.
            </h2>
            <p className="mt-6 text-white/60 font-body font-light text-sm md:text-base max-w-md leading-relaxed">
              Join the next generation of space travelers. Limited seats available for
              our upcoming orbital missions. Reserve yours before liftoff.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="liquid-glass-strong rounded-full px-6 py-3 text-white font-body text-sm font-medium flex items-center gap-2"
              >
                Book a Consultation
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#missions"
                className="bg-white text-black rounded-full px-6 py-3 font-body text-sm font-medium"
              >
                View All Missions
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="max-w-6xl mx-auto mt-32 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <span className="text-white/40 text-xs font-body">
            © 2026 Astra Space Tourism. All rights reserved.
          </span>
          <div className="flex items-center gap-6">
            {['Privacy', 'Terms', 'Contact'].map((link) => (
              <a
                key={link}
                href="#"
                className="text-white/40 text-xs font-body hover:text-white/60 transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

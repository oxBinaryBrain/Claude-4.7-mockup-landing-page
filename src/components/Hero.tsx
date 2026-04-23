import { motion } from 'motion/react';
import { ArrowUpRight, Play } from 'lucide-react';
import BlurText from './BlurText';

const partners = ['SpaceX', 'NASA', 'Boeing', 'Blue Origin', 'ESA'];

export default function Hero() {
  return (
    <section id="overview" className="min-h-screen relative overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260411_104229_49794008-3d16-4cb6-9a8c-73d7751b0e79.mp4"
      />
      <div className="absolute inset-0 z-[1]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Top area */}
        <div className="flex-1 pt-32 md:pt-40 px-6 md:px-16 lg:px-24 pb-12">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="liquid-glass rounded-full px-1 py-1 flex items-center gap-2 mb-8 w-fit"
          >
            <span className="bg-white text-black rounded-full px-3 py-1 text-xs font-semibold font-body">
              2026
            </span>
            <span className="text-white text-xs font-body pr-3">
              Civilian orbital missions now boarding.
            </span>
          </motion.div>

          {/* Headline */}
          <BlurText
            text="Beyond the atmosphere. Beyond imagination."
            className="text-5xl md:text-6xl lg:text-[5rem] font-heading italic text-white leading-[0.85] max-w-3xl tracking-[-3px]"
            delay={100}
          />

          {/* Subtitle */}
          <motion.p
            initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
            animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-6 text-sm md:text-base text-white/70 font-body font-light leading-relaxed max-w-lg"
          >
            Step aboard the next generation of spacecraft. Witness sunrise from orbit,
            float weightless above the clouds, and see our planet the way only a few
            hundred humans ever have.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
            animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="liquid-glass-strong rounded-full px-6 py-3 text-white font-body text-sm font-medium flex items-center gap-2"
            >
              Reserve Your Seat
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <button className="flex items-center gap-2 text-white font-body text-sm font-light">
              <Play className="h-4 w-4 fill-white" />
              Watch the Launch Film
            </button>
          </motion.div>
        </div>

        {/* Bottom area */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="px-6 md:px-16 lg:px-24 pb-10 pt-8"
        >
          <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <span className="text-white/40 text-xs font-body uppercase tracking-widest">
              Trusted by pioneers in aerospace
            </span>
            <div className="flex flex-wrap items-center gap-8 md:gap-12">
              {partners.map((partner) => (
                <span
                  key={partner}
                  className="text-xl md:text-2xl font-heading italic text-white/60 hover:text-white transition-colors cursor-default"
                >
                  {partner}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

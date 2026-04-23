import { ArrowUpRight } from 'lucide-react';

const steps = [
  {
    num: '01',
    title: 'Choose Your Mission',
    desc: 'Suborbital, orbital, or lunar flyby. Pick the experience that matches your ambition.',
  },
  {
    num: '02',
    title: 'Train in Days',
    desc: 'AI-adaptive programs prepare you physically and mentally. No pilot license needed.',
  },
  {
    num: '03',
    title: 'Launch',
    desc: 'Board your spacecraft, break through the atmosphere, and witness what words cannot describe.',
  },
];

export default function StartSection() {
  return (
    <section id="missions" className="relative overflow-hidden py-32 px-6 md:px-16">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260411_104032_69319010-2458-492b-b04d-b40a5dfa4482.mp4"
      />
      <div className="absolute inset-0 z-[1]" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          {/* Left column */}
          <div className="md:w-1/2 md:sticky md:top-32">
            <span className="liquid-glass rounded-full px-3.5 py-1 inline-block mb-6 text-xs font-medium text-white font-body">
              How It Works
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9]">
              Three steps to orbit.
            </h2>
            <p className="mt-5 text-white/60 font-body font-light text-sm md:text-base max-w-md leading-relaxed">
              We stripped away the complexity of space travel. What remains is a seamless
              path from ground to weightlessness.
            </p>
            <a
              href="#contact"
              className="liquid-glass-strong rounded-full px-6 py-3 text-white font-body text-sm font-medium flex items-center gap-2 mt-8 w-fit"
            >
              Begin Your Journey
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          {/* Right column */}
          <div className="md:w-1/2 flex flex-col gap-8">
            {steps.map((step) => (
              <div key={step.num} className="liquid-glass rounded-2xl p-8">
                <span className="text-white/30 font-heading italic text-5xl">
                  {step.num}
                </span>
                <h3 className="mt-3 text-xl font-body font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-white/60 font-body font-light text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { ArrowUpRight } from 'lucide-react';

const rows = [
  {
    heading: 'Spacecraft built for humans, not just engineers.',
    body: 'Every surface, every control, every viewport has been designed around the human body and the human experience. Ergonomic seating adapts to your posture in zero gravity. Panoramic windows stretch floor-to-ceiling.',
    btn: 'Explore the Fleet',
    video:
      'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260402_054547_9875cfc5-155a-4229-8ec8-b7ba7125cbf8.mp4',
    reverse: false,
  },
  {
    heading: 'AI that learns you before you leave the ground.',
    body: 'Our adaptive training system monitors biometrics, reaction times, and stress responses in real time. It builds a profile unique to you, adjusting every simulation until you are mission-ready.',
    btn: 'See the Training',
    video:
      'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260330_145725_08886141-ed95-4a8e-8d6d-b75eaadce638.mp4',
    reverse: true,
  },
];

export default function FeaturesChess() {
  return (
    <section id="technology" className="py-32 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <span className="liquid-glass rounded-full px-3.5 py-1 inline-block mb-6 text-xs font-medium text-white font-body">
            Technology
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9] max-w-lg">
            Precision engineering. Human-centered design.
          </h2>
        </div>

        {/* Alternating rows */}
        <div className="flex flex-col gap-32">
          {rows.map((row, i) => (
            <div
              key={i}
              className={`flex flex-col ${
                row.reverse ? 'md:flex-row-reverse' : 'md:flex-row'
              } items-center gap-12`}
            >
              {/* Text side */}
              <div className="flex-1">
                <h3 className="text-3xl md:text-4xl font-heading italic text-white leading-[0.95]">
                  {row.heading}
                </h3>
                <p className="mt-4 text-white/60 font-body font-light text-sm md:text-base leading-relaxed max-w-md">
                  {row.body}
                </p>
                <button className="liquid-glass-strong rounded-full px-5 py-2.5 text-white font-body text-sm font-medium flex items-center gap-2 mt-6">
                  {row.btn}
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>

              {/* Video side */}
              <div className="flex-1 liquid-glass rounded-2xl overflow-hidden">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-72 md:h-96 object-cover"
                  src={row.video}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

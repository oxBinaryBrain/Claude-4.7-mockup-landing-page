import HlsVideo from './HlsVideo';

const stats = [
  { value: '47', label: 'Missions completed' },
  { value: '99.8%', label: 'Mission success rate' },
  { value: '312', label: 'Civilians launched' },
  { value: '72hrs', label: 'Average mission length' },
];

export default function Stats() {
  return (
    <section id="crew" className="relative overflow-hidden py-32 px-6 md:px-16">
      {/* Background HLS video */}
      <HlsVideo
        src="https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      {/* Top gradient */}
      <div
        className="absolute top-0 left-0 right-0 z-[1]"
        style={{ height: 200, background: 'linear-gradient(to bottom, black, transparent)' }}
      />
      {/* Bottom gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 z-[1]"
        style={{ height: 200, background: 'linear-gradient(to top, black, transparent)' }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="liquid-glass rounded-full px-3.5 py-1 inline-block mb-6 text-xs font-medium text-white font-body">
            By the Numbers
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9]">
            Results speak louder than rockets.
          </h2>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="liquid-glass rounded-2xl p-8 text-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white">
                {stat.value}
              </div>
              <div className="text-white/60 font-body font-light text-sm mt-3">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

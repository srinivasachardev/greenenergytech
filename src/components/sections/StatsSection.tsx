import { useEffect, useRef, useState } from 'react';
import { STATS } from '../../data/siteData';

export function StatsSection() {
  const statsRef = useRef<HTMLDivElement>(null);
  const [, setStatsVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStatsVisible(true);
      },
      { threshold: 0.3 }
    );
    if (statsRef.current) obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={statsRef} className="bg-gradient-to-r from-green-500 to-emerald-600 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map(stat => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl lg:text-4xl font-extrabold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-green-100 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

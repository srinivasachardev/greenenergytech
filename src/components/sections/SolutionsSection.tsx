import { ChevronRight } from 'lucide-react';
import { SOLUTIONS } from '../../data/siteData';

export function SolutionsSection() {
  return (
    <section id="solutions" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-green-600 text-sm font-bold uppercase tracking-widest mb-3">
            Our Services
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">
            Our Range of Solar Solutions
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Tailored solar energy solutions for every need — residential, commercial, or maintenance.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SOLUTIONS.map(sol => (
            <div
              key={sol.title}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={sol.img}
                  alt={sol.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                <div className="absolute bottom-4 left-4 w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                  <sol.icon className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-slate-900 mb-2">{sol.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{sol.desc}</p>
                <a
                  href="#consultation"
                  className="inline-flex items-center gap-1 text-green-600 text-sm font-semibold hover:gap-2 transition-all"
                >
                  Learn more <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { WHY_US } from '../../data/siteData';

export function WhyUsSection() {
  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-green-600 text-sm font-bold uppercase tracking-widest mb-3">
            Why Choose Us
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">
            Why Families Trust Green Energy Tech
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            We don&apos;t just install solar — we partner with you for a lifetime of clean energy savings.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_US.map(item => (
            <div
              key={item.title}
              className="group p-6 rounded-2xl border border-slate-100 hover:border-amber-200 hover:bg-amber-50/50 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-green-100 group-hover:bg-green-500 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300">
                <item.icon className="w-6 h-6 text-green-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-bold text-slate-800 mb-2">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

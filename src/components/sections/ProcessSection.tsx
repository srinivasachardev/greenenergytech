import { PROCESS_STEPS } from '../../data/siteData';

export function ProcessSection() {
  return (
    <section id="process" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-amber-600 text-sm font-bold uppercase tracking-widest mb-3">
            How It Works
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">
            We Handle Everything. You Just Save.
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            From the first consultation to ongoing maintenance — we manage the entire process for you.
          </p>
        </div>
        <div className="relative">
          <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-amber-200" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROCESS_STEPS.map(step => (
              <div key={step.step} className="relative text-center">
                <div className="relative inline-flex items-center justify-center w-16 h-16 bg-amber-500 rounded-2xl mx-auto mb-5 shadow-lg shadow-amber-200">
                  <span className="text-white font-extrabold text-lg">{step.step}</span>
                </div>
                <h3 className="font-bold text-slate-800 mb-2 text-sm">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

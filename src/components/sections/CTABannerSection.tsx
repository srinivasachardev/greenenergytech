import { Sun, ArrowRight } from 'lucide-react';

export function CTABannerSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-slate-900 to-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-end pr-10 opacity-5 pointer-events-none">
        <Sun className="w-96 h-96 text-amber-400" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4">
          Switch to Solar at{' '}
          <span className="text-green-300">₹0 Investment</span>
        </h2>
        <p className="text-slate-300 max-w-xl mx-auto mb-8">
          Govt. subsidy covers your down payment. Bill savings cover your EMIs. Go solar today with no upfront cost.
        </p>
        <a
          href="#consultation"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600 text-white font-bold rounded-xl transition text-sm"
        >
          Start Your Solar Journey <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}

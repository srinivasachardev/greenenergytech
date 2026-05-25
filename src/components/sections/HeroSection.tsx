import { Star, CheckCircle, ArrowRight, Phone, ChevronDown } from 'lucide-react';
import { ConsultationForm } from '../forms/ConsultationForm';
import { HERO_CUSTOMER_AVATARS, HERO_HIGHLIGHTS } from '../../data/siteData';

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen bg-slate-900 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Solar panels"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800/80 to-amber-900/30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          <div>
            <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 rounded-full px-4 py-1.5 mb-6">
              <Star className="w-3.5 h-3.5 text-green-300 fill-green-300" />
              <span className="text-green-200 text-xs font-semibold">
                5-Star Rated Solar Company in Bangalore
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
              Power Your Home
              <br />
              <span className="text-green-300">ZERO Monthly Bill!</span>
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-lg">
              Bangalore&apos;s trusted solar partner since 2014. Save up to 90% on electricity with government subsidies up to ₹78,000.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              {HERO_HIGHLIGHTS.map(item => (
                <div key={item} className="flex items-center gap-2 text-slate-300 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  {item}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#consultation"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold rounded-xl transition text-sm"
              >
                Book Free Consultation
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="tel:9972200502"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 border border-white/30 text-white hover:bg-white/10 font-semibold rounded-xl transition text-sm"
              >
                <Phone className="w-4 h-4" />
                Call 9972200502
              </a>
            </div>

            <div className="mt-10 flex items-center gap-3">
              <div className="flex -space-x-2">
                {HERO_CUSTOMER_AVATARS.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt=""
                    className="w-8 h-8 rounded-full border-2 border-slate-800 object-cover"
                  />
                ))}
              </div>
              <div>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map(i => (
                    <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-slate-400 text-xs">500+ happy customers in Bangalore</p>
              </div>
            </div>
          </div>

          <div id="consultation" className="bg-slate-50 rounded-2xl p-6 shadow-2xl">
            <div className="mb-5">
              <h2 className="text-2xl font-extrabold text-slate-800">
                Book a FREE Solar Consultation
              </h2>
              <p className="text-slate-500 text-sm mt-1">
                And save up to{' '}
                <span className="text-amber-600 font-bold">₹78,000</span>{' '}
                with govt. subsidy
              </p>
            </div>
            <ConsultationForm />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-white/50" />
      </div>
    </section>
  );
}

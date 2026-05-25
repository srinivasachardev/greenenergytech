import { Leaf, TrendingDown, Clock, Award } from 'lucide-react';

const ABOUT_FEATURES = [
  { icon: Leaf, label: 'Eco-Friendly', sub: 'Reduce your carbon footprint' },
  { icon: TrendingDown, label: 'Lower Bills', sub: 'Save 80–90% on electricity' },
  { icon: Clock, label: 'Fast Install', sub: 'System up in 1 day' },
  { icon: Award, label: 'Certified', sub: 'Industry-approved equipment' },
] as const;

export function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-green-600 text-sm font-bold uppercase tracking-widest mb-3">
              About Us
            </p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
              Leading the Solar Revolution in Bangalore
            </h2>
            <p className="text-slate-600 leading-relaxed mb-5">
              Green Energy Technologies is your trusted partner in solar energy solutions, offering cutting-edge solar power plant installation, commissioning, and maintenance services. Based in Indiranagar, Bangalore, we have been empowering homes and businesses with clean, renewable energy since 2014.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              We believe that every home deserves access to affordable, clean energy. Our tailored solar solutions help homeowners and businesses achieve energy independence while contributing to a greener planet.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {ABOUT_FEATURES.map(item => (
                <div key={item.label} className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
                  <div className="w-9 h-9 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 text-sm">{item.label}</p>
                    <p className="text-slate-500 text-xs">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/356049/pexels-photo-356049.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Solar installation"
              className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
            />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 border border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="font-extrabold text-slate-800 text-lg">10+ Years</p>
                  <p className="text-slate-500 text-xs">Trusted in Bangalore</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

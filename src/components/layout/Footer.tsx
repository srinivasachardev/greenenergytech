import { Facebook, Instagram, Youtube, Linkedin, Phone, Mail, MapPin } from 'lucide-react';
import { Logo } from '../brand/Logo';
import { FOOTER_COMPANY_LINKS, FOOTER_SOLUTIONS } from '../../data/siteData';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <a href="#home" className="flex items-center gap-2 sm:gap-3 mb-4 min-w-0">
              <Logo className="h-10 w-auto sm:h-12 flex-shrink-0" />
              <span className="font-extrabold text-white leading-snug text-sm sm:text-base md:text-lg">
                <span className="block sm:inline">Green Energy</span>
                <span className="block sm:inline sm:before:content-['_']">Technologies</span>
              </span>
            </a>
            <p className="text-sm leading-relaxed mb-5">
              Bangalore&apos;s trusted solar energy partner since 2014. Empowering homes and businesses with clean, renewable energy.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Youtube, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 bg-slate-800 hover:bg-amber-500 rounded-lg flex items-center justify-center transition-colors group"
                >
                  <Icon className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm">
              {FOOTER_SOLUTIONS.map(item => (
                <li key={item}>
                  <a href="#" className="hover:text-amber-400 transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              {FOOTER_COMPANY_LINKS.map(item => (
                <li key={item}>
                  <a href="#" className="hover:text-amber-400 transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                <span>9972200502</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                <span>info@greenenergytech.in</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                <span>47 CMH Road, Indiranagar, Bangalore – 560038</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs">
          <p>© 2026 Green Energy Technologies. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-amber-400 transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-amber-400 transition">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

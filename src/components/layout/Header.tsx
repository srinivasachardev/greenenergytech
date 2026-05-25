import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { BrandMark } from '../brand/BrandMark';
import { NAV_LINKS } from '../../data/siteData';
import { useScrolledHeader } from '../../hooks/useScrolledHeader';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScrolledHeader();

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <BrandMark scrolled={scrolled} />

          <nav className="hidden lg:flex items-center gap-6" aria-label="Main navigation">
            {NAV_LINKS.map(link => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-amber-500 ${
                  scrolled ? 'text-slate-700' : 'text-white/90'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:9972200502"
              className={`flex items-center gap-1.5 text-sm font-semibold transition-colors ${
                scrolled ? 'text-slate-700' : 'text-white'
              }`}
            >
              <Phone className="w-4 h-4" />
              9972200502
            </a>
            <a
              href="#consultation"
              className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white text-sm font-bold rounded-lg transition"
            >
              Get Free Quote
            </a>
          </div>

          <button
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(o => !o)}
            className={`lg:hidden ${scrolled ? 'text-slate-700' : 'text-white'}`}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 px-4 py-4 shadow-lg">
          {NAV_LINKS.map(link => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-slate-700 font-medium border-b border-slate-100 last:border-0"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#consultation"
            onClick={() => setMenuOpen(false)}
            className="mt-3 block w-full py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-center rounded-lg"
          >
            Get Free Quote
          </a>
        </div>
      )}
    </header>
  );
}

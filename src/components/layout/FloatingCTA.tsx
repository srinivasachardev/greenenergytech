import { Phone } from 'lucide-react';

export function FloatingCTA() {
  return (
    <a
      href="#consultation"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold px-5 py-3 rounded-full shadow-lg shadow-amber-500/40 transition text-sm lg:hidden"
    >
      <Phone className="w-4 h-4" />
      Free Quote
    </a>
  );
}

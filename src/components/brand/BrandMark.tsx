import { Logo } from './Logo';

interface BrandMarkProps {
  scrolled?: boolean;
}

export function BrandMark({ scrolled = false }: BrandMarkProps) {
  return (
    <a
      href="#home"
      className="flex items-center gap-2 sm:gap-3 min-w-0 shrink max-w-[calc(100vw-4.5rem)] sm:max-w-none"
    >
      <Logo className="h-8 w-auto sm:h-10 lg:h-11 flex-shrink-0" />
      <span
        className={`font-extrabold leading-snug transition-colors duration-300 text-[10px] min-[380px]:text-xs sm:text-sm md:text-base lg:text-lg ${
          scrolled ? 'text-slate-900' : 'text-white'
        }`}
      >
        <span className="block sm:inline">Green Energy</span>
        <span className="block sm:inline sm:before:content-['_']">Technologies</span>
      </span>
    </a>
  );
}

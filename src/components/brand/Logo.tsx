import logo from '../../assets/logo.png';

interface LogoProps {
  className?: string;
}

export function Logo({ className = 'h-11 w-auto' }: LogoProps) {
  return (
    <img
      src={logo}
      alt="Green Energy Technologies"
      className={className}
    />
  );
}

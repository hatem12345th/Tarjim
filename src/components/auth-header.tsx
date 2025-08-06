import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface AuthHeaderProps {
  navLinks: { href: string; label: string }[];
  buttonText: string;
  buttonHref: string;
}

export function AuthHeader({ navLinks, buttonText, buttonHref }: AuthHeaderProps) {
  return (
    <header className="flex items-center justify-between text-white px-8 py-4 bg-primary border-b-2 border-white">
      <Link href="#" className="text-brown-1 text-xl font-bold" prefetch={false}>
        Tarjim
      </Link>
      <nav className="flex items-center space-x-6">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className="text-brown-1 hover:text-brown-2" prefetch={false}>
            {link.label}
          </Link>
        ))}
        <Button asChild className="bg-secondry text-white hover:bg-yellow-1 rounded-md px-4 py-2">
          <Link href={buttonHref}>{buttonText}</Link>
        </Button>
      </nav>
    </header>
  );
}

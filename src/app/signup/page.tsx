import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { AuthHeader } from '@/components/auth-header';

export default function SignUpPage() {
  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#Services', label: 'Services' },
    { href: '#Pricing', label: 'Pricing' },
    { href: '#Contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <AuthHeader navLinks={navLinks} buttonText="Log In" buttonHref="/login" />
      <main className="flex-1 flex items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-4xl bg-primary2 rounded-lg shadow-lg flex flex-col md:flex-row overflow-hidden">
          <div className="flex-1 p-8 space-y-6 flex flex-col justify-center">
            <h1 className="text-brown-1 text-3xl font-bold mx-auto md:text-left">Create your account</h1>
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-brown-1">Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  className="bg-primary text-brown-1 border-brown-0 h-14 w-md focus:ring-yellow-1"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-brown-1">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="bg-primary text-brown-1 border-brown-0 h-14 w-md focus:ring-yellow-1"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-brown-1">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="bg-primary text-brown-1 border-brown-0 h-14 w-md focus:ring-yellow-1"
                  required
                />
                <p className="text-xs text-brown-2">
                  Password must be at least 8 characters long and include one number and one special character.
                </p>
              </div>
              <Button type="submit" className="w-full bg-yellow-1 text-primary font-extrabold text-md  hover:bg-yellow-1/90 rounded-md py-2">
                Sign Up
              </Button>
            </form>
            <div className="text-center text-sm">
              <p className="text-brown-1">
                Already have an account?{' '}
                <Link href="/login" className="text-brown-2 hover:underline" prefetch={false}>
                  Log in
                </Link>
              </p>
            </div>
          </div>
          <div className="hidden md:flex flex-1 items-center justify-center p-4  rounded-r-lg">
            <Image
              src="/Depth 3, Frame 1.png"
              alt="Stack of books"
              width={400}
              height={400}
              className="object-contain"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

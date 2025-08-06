import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { AuthHeader } from '@/components/auth-header';

export default function LoginPage() {
  const navLinks = [
    { href: '#Translators', label: 'For Translators' },
    { href: '#Publishers', label: 'For Publishers' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <AuthHeader navLinks={navLinks} buttonText="Sign up" buttonHref="/signup" />
      <main className="flex-1 flex items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-4xl bg-primary2  rounded-lg shadow-lg flex flex-col md:flex-row overflow-hidden">
          <div className="flex-1 p-8 space-y-6 flex flex-col justify-center ">
            <h1 className="text-brown-1 text-3xl font-bold mx-auto md:text-left">Welcome back</h1>
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-brown-1 font-semibold">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Email"
                  className="bg-primary text-brown-1 h-14 w-md border-brown-0 focus:ring-yellow-1"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-brown-1 font-semibold">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Password"
                  className="bg-primary text-brown-1 h-14 w-md border-brown-0 focus:ring-yellow-1"
                  required
                />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="remember-me" className="border-brown-0 data-[state=checked]:bg-yellow-1 data-[state=checked]:text-yellow-1" />
                <Label htmlFor="remember-me" className="text-brown-1">Remember me</Label>
              </div>
              <Button type="submit" className="w-full bg-yellow-1 text-primary font-extrabold text-md  hover:bg-yellow-1/90 rounded-md py-2">
                Log In
              </Button>
            </form>
            <div className="text-center space-y-2">
              <Link href="#" className="text-brown-2 hover:underline text-sm" prefetch={false}>
                Forgot password?
              </Link>
              <p className="text-brown-1 text-sm">
                Don&apos;t have an account?{' '}
                <Link href="/signup" className="text-brown-2 hover:underline" prefetch={false}>
                  Sign up
                </Link>
              </p>
            </div>
          </div>
          <div className="hidden md:flex flex-1 items-center justify-center p-4  rounded-r-lg">
            <Image
              src="/Depth 4, Frame 0.png"
              alt="Woman reading a book"
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

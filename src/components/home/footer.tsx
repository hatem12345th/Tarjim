import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-8 md:py-12 bg-tarjim-background text-tarjim-muted text-center text-sm">
      <div className="container px-4 md:px-8 lg:px-16 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <p>&copy; {new Date().getFullYear()} Tarjim. All rights reserved.</p>
        <nav className="flex space-x-6">
          <Link href="#" className="hover:underline">
            Terms of Service
          </Link>
          <Link href="#" className="hover:underline">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:underline">
            Contact Us
          </Link>
        </nav>
      </div>
    </footer>
  );
}

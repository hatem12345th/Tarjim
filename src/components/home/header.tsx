import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b-2 border-white  px-4 py-4 md:px-8 lg:px-16 bg-tarjim-background text-tarjim-text">
      <Link href="#" className="text-2xl font-bold text-tarjim-text">
            <Image
              src="/TarjimHorizontal.svg"
              alt="Woman reading a book"
              width={40}
              height={40}
              className="object-contain"
            />     
     </Link>
      <nav className="flex items-center space-x-6">
        <Link href="#" className="text-tarjim-text hover:underline">
          How it works
        </Link>
        <Link href="#" className="text-tarjim-text hover:underline">
          Pricing
        </Link>
        <Link href="#" className="text-tarjim-text hover:underline">
          Resources
        </Link>
        <Link href="/signup" className="text-tarjim-text ">
        <Button className="bg-yellow-1 cursor-pointer text-tarjim-background hover:bg-tarjim-yellow/90 px-6 py-2 rounded-md font-semibold">
          Get started
        </Button>
        </Link>
      </nav>
    </header>
  );
}

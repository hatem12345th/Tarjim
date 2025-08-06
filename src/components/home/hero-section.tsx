import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] flex items-center justify-center overflow-hidden">
      <Image
        src="/placeholder.svg?height=800&width=1400"
        alt="Translate your book, reach a global audience"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
      />
      <div className="relative z-10 text-center text-tarjim-text px-4 md:px-8 lg:px-16 max-w-4xl space-y-6">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
          Translate your book, reach a global audience
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-tarjim-muted">
          Tarjim makes it easy to translate your book into any language. Reach readers around the world with our
          professional translation services.
        </p>
        <Button className="bg-tarjim-yellow text-tarjim-background hover:bg-tarjim-yellow/90 px-8 py-3 md:px-10 md:py-4 rounded-md text-lg font-semibold">
          Get started
        </Button>
      </div>
    </section>
  );
}

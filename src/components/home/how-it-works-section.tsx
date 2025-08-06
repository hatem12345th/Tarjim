import { Check } from 'lucide-react';

export default function HowItWorksSection() {
  return (
    <section className="py-16 md:py-24 bg-tarjim-background text-tarjim-text">
      <div className="container px-4 md:px-8 lg:px-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12">How it works</h2>

        <div className="relative pl-6 md:pl-12">
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-tarjim-yellow"></div> {/* Vertical line */}

          <div className="mb-8 relative">
            <div className="absolute -left-3 md:-left-6 top-0 h-6 w-6 rounded-full bg-tarjim-yellow flex items-center justify-center">
              <Check className="h-4 w-4 text-tarjim-background" />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold mb-2">Upload your book</h3>
            <p className="text-tarjim-muted text-base md:text-lg">
              Upload your book in any format, including PDF, DOCX, and EPUB.
            </p>
          </div>

          <div className="mb-8 relative">
            <div className="absolute -left-3 md:-left-6 top-0 h-6 w-6 rounded-full bg-tarjim-yellow flex items-center justify-center">
              <Check className="h-4 w-4 text-tarjim-background" />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold mb-2">Select your language pair</h3>
            <p className="text-tarjim-muted text-base md:text-lg">
              Choose the language you want to translate your book into.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -left-3 md:-left-6 top-0 h-6 w-6 rounded-full bg-tarjim-yellow flex items-center justify-center">
              <Check className="h-4 w-4 text-tarjim-background" />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold mb-2">Receive your translated book</h3>
            <p className="text-tarjim-muted text-base md:text-lg">
              Receive your translated book in the same format as the original.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

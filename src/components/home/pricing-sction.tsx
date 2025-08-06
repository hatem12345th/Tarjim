import { Check } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function PricingSection() {
  return (
    <section className="py-16 md:py-24 bg-tarjim-background text-tarjim-text">
      <div className="container px-4 md:px-8 lg:px-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center">Pricing</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Basic Plan */}
          <Card className="bg-tarjim-card text-tarjim-text p-8 rounded-lg shadow-lg flex flex-col">
            <CardContent className="p-0 flex-grow">
              <h3 className="text-2xl font-semibold mb-4">Basic</h3>
              <p className="text-4xl font-bold mb-2">
                $0.05 <span className="text-lg font-normal text-tarjim-muted">per word</span>
              </p>
              <Button className="w-full bg-tarjim-yellow text-tarjim-background hover:bg-tarjim-yellow/90 px-6 py-2 rounded-md font-semibold mb-6">
                Get started
              </Button>
              <ul className="space-y-3 text-tarjim-muted">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-tarjim-yellow mr-2" /> Up to 10,000 words
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-tarjim-yellow mr-2" /> Machine translation
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-tarjim-yellow mr-2" /> Basic support
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Standard Plan */}
          <Card className="bg-tarjim-card text-tarjim-text p-8 rounded-lg shadow-lg flex flex-col">
            <CardContent className="p-0 flex-grow">
              <h3 className="text-2xl font-semibold mb-4">Standard</h3>
              <p className="text-4xl font-bold mb-2">
                $0.08 <span className="text-lg font-normal text-tarjim-muted">per word</span>
              </p>
              <Button className="w-full bg-tarjim-yellow text-tarjim-background hover:bg-tarjim-yellow/90 px-6 py-2 rounded-md font-semibold mb-6">
                Get started
              </Button>
              <ul className="space-y-3 text-tarjim-muted">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-tarjim-yellow mr-2" /> Up to 50,000 words
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-tarjim-yellow mr-2" /> Human translation
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-tarjim-yellow mr-2" /> Standard support
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Premium Plan */}
          <Card className="bg-tarjim-card text-tarjim-text p-8 rounded-lg shadow-lg flex flex-col">
            <CardContent className="p-0 flex-grow">
              <h3 className="text-2xl font-semibold mb-4">Premium</h3>
              <p className="text-4xl font-bold mb-2">
                $0.12 <span className="text-lg font-normal text-tarjim-muted">per word</span>
              </p>
              <Button className="w-full bg-tarjim-yellow text-tarjim-background hover:bg-tarjim-yellow/90 px-6 py-2 rounded-md font-semibold mb-6">
                Get started
              </Button>
              <ul className="space-y-3 text-tarjim-muted">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-tarjim-yellow mr-2" /> Unlimited words
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-tarjim-yellow mr-2" /> Human translation
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-tarjim-yellow mr-2" /> Premium support
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

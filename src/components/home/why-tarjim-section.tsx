import { Globe, History, Users } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

export default function WhyTarjimSection() {
  return (
    <section className="py-16 md:py-24 bg-tarjim-background text-tarjim-text">
      <div className="container px-4 md:px-8 lg:px-16">
        <h2 className="text-lg font-semibold text-tarjim-yellow mb-2">Why Tarjim?</h2>
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12">Unlock Global Readership</h3>
        <p className="max-w-3xl text-lg md:text-xl text-tarjim-muted mb-16">
          Expand your reach and connect with readers worldwide through our seamless translation services.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="bg-tarjim-card text-tarjim-text p-6 rounded-lg shadow-lg">
            <CardContent className="p-0">
              <Globe className="h-8 w-8 text-tarjim-yellow mb-4" />
              <h4 className="text-xl font-semibold mb-2">Global Reach</h4>
              <p className="text-tarjim-muted">
                Translate your book into multiple languages and tap into new markets.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-tarjim-card text-tarjim-text p-6 rounded-lg shadow-lg">
            <CardContent className="p-0">
              <History className="h-8 w-8 text-tarjim-yellow mb-4" />
              <h4 className="text-xl font-semibold mb-2">Fast Turnaround</h4>
              <p className="text-tarjim-muted">
                Receive your translated book quickly, without compromising on quality.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-tarjim-card text-tarjim-text p-6 rounded-lg shadow-lg">
            <CardContent className="p-0">
              <Users className="h-8 w-8 text-tarjim-yellow mb-4" />
              <h4 className="text-xl font-semibold mb-2">Growing Community</h4>
              <p className="text-tarjim-muted">
                Join a community of over 10,000 authors who have expanded their readership with Tarjim.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-tarjim-card text-tarjim-text p-6 rounded-lg shadow-lg flex flex-col items-start justify-center">
            <CardContent className="p-0">
              <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">50+</h4>
              <p className="text-tarjim-muted text-lg">Languages Supported</p>
            </CardContent>
          </Card>
          <Card className="bg-tarjim-card text-tarjim-text p-6 rounded-lg shadow-lg flex flex-col items-start justify-center">
            <CardContent className="p-0">
              <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">15,000+</h4>
              <p className="text-tarjim-muted text-lg">Books Translated</p>
            </CardContent>
          </Card>
          <Card className="bg-tarjim-card text-tarjim-text p-6 rounded-lg shadow-lg flex flex-col items-start justify-center">
            <CardContent className="p-0">
              <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">10,000+</h4>
              <p className="text-tarjim-muted text-lg">Authors Served</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

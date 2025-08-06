import { Star, ThumbsUp, ThumbsDown } from 'lucide-react';

export default function TestimonialsSection() {
  const renderStars = (count: number) => {
    return (
      <div className="flex items-center space-x-1 mb-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${
              i < count ? "text-tarjim-yellow fill-tarjim-yellow" : "text-tarjim-muted"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="py-16 md:py-24 bg-tarjim-background text-tarjim-text">
      <div className="container px-4 md:px-8 lg:px-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12">Testimonials</h2>

        <div className="space-y-12">
          {/* Testimonial 1 */}
          <div className="bg-tarjim-card p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h4 className="text-xl font-semibold">Sophia Chen</h4>
                <p className="text-sm text-tarjim-muted">2023-01-15</p>
              </div>
              {renderStars(5)}
            </div>
            <p className="text-tarjim-muted mb-4">
              Tarjim helped me translate my novel into Spanish, and the quality was excellent. I've already seen an
              increase in sales in Spanish-speaking countries.
            </p>
            <div className="flex items-center space-x-4 text-tarjim-muted">
              <div className="flex items-center space-x-1">
                <ThumbsUp className="h-5 w-5 cursor-pointer hover:text-tarjim-yellow" />
                <span>10</span>
              </div>
              <div className="flex items-center space-x-1">
                <ThumbsDown className="h-5 w-5 cursor-pointer hover:text-tarjim-yellow" />
                <span>2</span>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-tarjim-card p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h4 className="text-xl font-semibold">Carlos Rodriguez</h4>
                <p className="text-sm text-tarjim-muted">2023-02-20</p>
              </div>
              {renderStars(4)}
            </div>
            <p className="text-tarjim-muted mb-4">
              The translation was good, but there were a few minor errors that needed to be corrected. Overall, I'm
              satisfied with the service.
            </p>
            <div className="flex items-center space-x-4 text-tarjim-muted">
              <div className="flex items-center space-x-1">
                <ThumbsUp className="h-5 w-5 cursor-pointer hover:text-tarjim-yellow" />
                <span>5</span>
              </div>
              <div className="flex items-center space-x-1">
                <ThumbsDown className="h-5 w-5 cursor-pointer hover:text-tarjim-yellow" />
                <span>1</span>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-tarjim-card p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h4 className="text-xl font-semibold">Aisha Khan</h4>
                <p className="text-sm text-tarjim-muted">2023-03-25</p>
              </div>
              {renderStars(5)}
            </div>
            <p className="text-tarjim-muted mb-4">
              I was impressed with the speed and accuracy of the translation. Tarjim made it easy to reach a new
              audience for my book.
            </p>
            <div className="flex items-center space-x-4 text-tarjim-muted">
              <div className="flex items-center space-x-1">
                <ThumbsUp className="h-5 w-5 cursor-pointer hover:text-tarjim-yellow" />
                <span>12</span>
              </div>
              <div className="flex items-center space-x-1">
                <ThumbsDown className="h-5 w-5 cursor-pointer hover:text-tarjim-yellow" />
                <span>0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

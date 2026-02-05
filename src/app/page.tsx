import Image from 'next/image';
import Link from 'next/link';

import { books, genres } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { BookGrid } from '@/components/book/book-grid';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

export default function HomePage() {
  const featuredBooks = books.slice(0, 4);
  const newArrivals = books.slice(4, 8);
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-image-1');

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="relative w-full h-[60vh] text-white">
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/50 to-transparent z-10" />
          {heroImage && 
            <Image
              src={heroImage.imageUrl}
              alt="A cozy library"
              data-ai-hint={heroImage.imageHint}
              fill
              className="object-cover"
              priority
            />
          }
          <div className="relative z-20 flex flex-col items-center justify-center h-full text-center p-4">
            <h1 className="text-4xl md:text-6xl font-headline font-bold drop-shadow-lg mb-4">
              AetherBooks
            </h1>
            <p className="text-lg md:text-2xl max-w-2xl drop-shadow-md">
              Your Gateway to Infinite Worlds. Discover your next adventure.
            </p>
            <Button asChild size="lg" className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/search">Explore Now</Link>
            </Button>
          </div>
        </section>

        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-headline font-bold text-center mb-10">
              Featured Books
            </h2>
            <BookGrid books={featuredBooks} />
            <div className="text-center mt-8">
              <Button asChild variant="outline">
                <Link href="/search">View All Featured <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="bg-muted py-12 md:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-headline font-bold text-center mb-10">
              New Arrivals
            </h2>
            <BookGrid books={newArrivals} />
          </div>
        </section>

        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-headline font-bold text-center mb-10">
              Browse by Genre
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {genres.map((genre) => (
                <Badge key={genre} variant="secondary" className="text-lg px-4 py-2 rounded-full hover:bg-primary/10 transition-colors">
                  <Link href={`/search?genres=${genre}`}>{genre}</Link>
                </Badge>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

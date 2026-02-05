'use client';

import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { books, genres } from '@/lib/data';
import type { Book } from '@/lib/types';
import { BookGrid } from '@/components/book/book-grid';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { refineSearchAction } from '@/lib/actions';
import { Skeleton } from '@/components/ui/skeleton';

function SearchPageContent() {
  const searchParams = useSearchParams();
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, 50]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const q = searchParams.get('q') || '';
    const genreParams = searchParams.getAll('genres');
    setQuery(q);
    setSelectedGenres(genreParams);
    
    const applyFilters = async () => {
        setLoading(true);
        let booksToFilter = books;

        if (q) {
            const allBookTitles = books.map(b => b.title);
            booksToFilter = await refineSearchAction({ query: q, bookList: allBookTitles });
        }

        let results = booksToFilter.filter(book => {
            const genreMatch = selectedGenres.length === 0 || selectedGenres.includes(book.genre);
            const priceMatch = book.price >= priceRange[0] && book.price <= priceRange[1];
            return genreMatch && priceMatch;
        });

        setFilteredBooks(results);
        setLoading(false);
    };

    applyFilters();
  }, [searchParams, selectedGenres, priceRange]);

  const handleGenreChange = (genre: string, checked: boolean) => {
    setSelectedGenres(prev => 
      checked ? [...prev, genre] : prev.filter(g => g !== genre)
    );
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-8">
          <aside className="md:col-span-1">
            <div className="sticky top-24 space-y-8">
              <div>
                <h3 className="font-headline font-semibold text-lg mb-4">Filter by Genre</h3>
                <div className="space-y-2">
                  {genres.map(genre => (
                    <div key={genre} className="flex items-center space-x-2">
                      <Checkbox
                        id={genre}
                        checked={selectedGenres.includes(genre)}
                        onCheckedChange={(checked) => handleGenreChange(genre, !!checked)}
                      />
                      <Label htmlFor={genre} className="font-normal">{genre}</Label>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-headline font-semibold text-lg mb-4">Filter by Price</h3>
                <Slider
                  defaultValue={[0, 50]}
                  max={50}
                  step={1}
                  onValueChange={setPriceRange}
                />
                <p className="text-sm text-muted-foreground mt-2">
                  Price: ${priceRange[0]} - ${priceRange[1]}
                </p>
              </div>
            </div>
          </aside>
          <section className="md:col-span-3">
            <h1 className="font-headline text-3xl font-bold mb-6">
              {query ? `Search results for "${query}"` : 'Browse All Books'}
            </h1>
            {loading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="space-y-2">
                            <Skeleton className="h-[250px] w-full" />
                            <Skeleton className="h-6 w-3/4" />
                            <Skeleton className="h-4 w-1/2" />
                        </div>
                    ))}
                </div>
            ) : filteredBooks.length > 0 ? (
              <BookGrid books={filteredBooks} />
            ) : (
              <p>No books found matching your criteria.</p>
            )}
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}


export default function SearchPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <SearchPageContent />
        </Suspense>
    );
}

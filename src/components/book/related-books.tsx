"use client";

import { useEffect, useState } from 'react';
import { Book } from '@/lib/types';
import { getRelatedBooksAction } from '@/lib/actions';
import { BookGrid } from './book-grid';
import { Skeleton } from '@/components/ui/skeleton';
import { books } from '@/lib/data';
import type { RecommendRelatedBooksOutput } from '@/ai/flows/ai-recommend-related-books';

interface RelatedBooksProps {
  currentBook: Book;
}

export default function RelatedBooks({ currentBook }: RelatedBooksProps) {
  const [recommendations, setRecommendations] = useState<Book[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRecommendations() {
      setLoading(true);
      const result = await getRelatedBooksAction({
        bookTitle: currentBook.title,
        bookGenre: currentBook.genre,
        bookDescription: currentBook.description,
        userReadingHistory: "The Hobbit, The Name of the Wind", // Mocked history
        numberOfRecommendations: 4,
      });

      if (result && result.recommendedBooks) {
        // This is a simple mapping. A real app would need a more robust way to find books.
        const recommendedBooks = result.recommendedBooks.map(rec => {
          const foundBook = books.find(b => b.title.toLowerCase().includes(rec.title.toLowerCase()));
          return foundBook;
        }).filter((b): b is Book => b !== undefined);
        
        // If AI fails or finds no matches, show some random books from the same genre
        if (recommendedBooks.length < 4) {
            const genreBooks = books.filter(b => b.genre === currentBook.genre && b.id !== currentBook.id);
            const needed = 4 - recommendedBooks.length;
            const additionalBooks = genreBooks.slice(0, needed);
            setRecommendations([...recommendedBooks, ...additionalBooks]);
        } else {
            setRecommendations(recommendedBooks);
        }

      } else {
        // Fallback to simple genre-based recommendations
        const genreBooks = books.filter(b => b.genre === currentBook.genre && b.id !== currentBook.id).slice(0, 4);
        setRecommendations(genreBooks);
      }
      setLoading(false);
    }

    fetchRecommendations();
  }, [currentBook]);

  return (
    <div>
      <h2 className="font-headline text-3xl font-bold mb-8 text-center">Related Books</h2>
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="space-y-2">
              <Skeleton className="h-[300px] w-full" />
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          ))}
        </div>
      ) : (
        recommendations && <BookGrid books={recommendations} />
      )}
    </div>
  );
}

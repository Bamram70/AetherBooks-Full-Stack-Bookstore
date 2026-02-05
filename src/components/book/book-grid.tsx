'use client';
import { Book } from '@/lib/types';
import { BookCard } from './book-card';

interface BookGridProps {
  books: Book[];
}

export function BookGrid({ books }: BookGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}

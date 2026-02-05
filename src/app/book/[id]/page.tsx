import { notFound } from 'next/navigation';
import Image from 'next/image';
import { books } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { StarRating } from '@/components/book/star-rating';
import { ShoppingCart } from 'lucide-react';
import RelatedBooks from '@/components/book/related-books';
import { AddToCartButton } from './add-to-cart-button';

export default function BookDetailPage({ params }: { params: { id: string } }) {
  const book = books.find((b) => b.id === parseInt(params.id, 10));

  if (!book) {
    notFound();
  }

  const placeholder = PlaceHolderImages.find(p => p.id === book.coverImage);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          <div className="md:col-span-1">
            <div className="sticky top-24">
              {placeholder && (
                <Image
                  src={placeholder.imageUrl}
                  alt={`Cover of ${book.title}`}
                  data-ai-hint={placeholder.imageHint}
                  width={400}
                  height={600}
                  className="rounded-lg shadow-xl w-full"
                />
              )}
            </div>
          </div>
          <div className="md:col-span-2">
            <h1 className="font-headline text-4xl md:text-5xl font-bold">{book.title}</h1>
            <p className="mt-2 text-xl text-muted-foreground">by {book.author}</p>
            <div className="flex items-center my-4">
              <StarRating rating={book.rating} starClassName="w-5 h-5" />
              <span className="text-sm text-muted-foreground ml-3">({book.reviews.length} reviews)</span>
            </div>
            <p className="text-3xl font-bold text-primary my-4">${book.price.toFixed(2)}</p>
            
            <AddToCartButton book={book} />
            
            <Separator className="my-8" />
            
            <div>
              <h2 className="font-headline text-2xl font-bold mb-4">Description</h2>
              <p className="text-lg leading-relaxed">{book.longDescription}</p>
            </div>
            
            <Separator className="my-8" />
            
            <div>
              <h2 className="font-headline text-2xl font-bold mb-4">Reviews</h2>
              <div className="space-y-6">
                {book.reviews.length > 0 ? (
                  book.reviews.map((review) => (
                    <div key={review.id} className="flex gap-4">
                      <Avatar>
                        <AvatarImage src={review.avatar} alt={review.user} />
                        <AvatarFallback>{review.user.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-semibold">{review.user}</p>
                          <StarRating rating={review.rating} />
                        </div>
                        <p className="text-muted-foreground mt-1">{review.comment}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-muted-foreground">No reviews yet.</p>
                )}
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-12 md:my-16" />

        <RelatedBooks currentBook={book} />
      </main>
      <Footer />
    </div>
  );
}

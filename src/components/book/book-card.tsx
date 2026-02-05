import Image from 'next/image';
import Link from 'next/link';
import { Book } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { StarRating } from './star-rating';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/hooks/use-cart';
import { useToast } from '@/hooks/use-toast';

interface BookCardProps {
  book: Book;
}

export function BookCard({ book }: BookCardProps) {
  const placeholder = PlaceHolderImages.find(p => p.id === book.coverImage);
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addToCart(book);
    toast({
      title: "Added to cart",
      description: `"${book.title}" has been added to your cart.`,
    });
  };

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full flex flex-col">
      <Link href={`/book/${book.id}`} className="block h-full flex flex-col">
        <CardContent className="p-0 flex flex-col flex-grow">
            <div className="relative w-full aspect-[2/3] overflow-hidden">
                {placeholder && (
                    <Image
                    src={placeholder.imageUrl}
                    alt={`Cover of ${book.title}`}
                    data-ai-hint={placeholder.imageHint}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                )}
            </div>
          <div className="p-4 flex flex-col flex-grow">
            <h3 className="font-headline font-semibold text-lg leading-tight truncate">{book.title}</h3>
            <p className="text-sm text-muted-foreground mt-1">{book.author}</p>
            <div className="flex items-center my-2">
              <StarRating rating={book.rating} />
              <span className="text-xs text-muted-foreground ml-2">({book.reviews.length} reviews)</span>
            </div>

            <div className="mt-auto flex items-end justify-between pt-4">
                <p className="text-xl font-bold text-primary">${book.price.toFixed(2)}</p>
                <Button size="icon" variant="outline" onClick={handleAddToCart} aria-label={`Add ${book.title} to cart`}>
                    <ShoppingCart className="h-5 w-5" />
                </Button>
            </div>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}

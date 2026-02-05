import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StarRatingProps {
  rating: number;
  totalStars?: number;
  className?: string;
  starClassName?: string;
}

export function StarRating({ rating, totalStars = 5, className, starClassName }: StarRatingProps) {
  const fullStars = Math.floor(rating);
  const partialStar = rating % 1;
  const emptyStars = totalStars - Math.ceil(rating);

  return (
    <div className={cn('flex items-center gap-0.5', className)}>
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} className={cn('w-4 h-4 text-amber-400 fill-amber-400', starClassName)} />
      ))}
      {partialStar > 0 && (
         <div className="relative">
            <Star className={cn('w-4 h-4 text-amber-400', starClassName)} />
            <div className="absolute top-0 left-0 overflow-hidden" style={{ width: `${partialStar * 100}%` }}>
               <Star className={cn('w-4 h-4 text-amber-400 fill-amber-400', starClassName)} />
            </div>
         </div>
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={`empty-${i}`} className={cn('w-4 h-4 text-gray-300', starClassName)} />
      ))}
    </div>
  );
}

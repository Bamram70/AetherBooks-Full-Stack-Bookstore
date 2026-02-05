'use client';

import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { useToast } from "@/hooks/use-toast";
import { Book } from "@/lib/types";
import { ShoppingCart } from "lucide-react";

export function AddToCartButton({ book }: { book: Book }) {
    const { addToCart } = useCart();
    const { toast } = useToast();

    const handleAddToCart = () => {
        addToCart(book);
        toast({
            title: "Added to cart",
            description: `"${book.title}" has been added to your cart.`,
        });
    };

    return (
        <Button size="lg" onClick={handleAddToCart}>
            <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
        </Button>
    );
}

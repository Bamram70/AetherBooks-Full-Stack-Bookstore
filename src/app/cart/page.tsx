'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/hooks/use-cart';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Trash2 } from 'lucide-react';

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart, totalPrice, totalItems } = useCart();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="font-headline text-4xl font-bold mb-8">Your Cart</h1>
        {cartItems.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-muted-foreground mb-4">Your cart is empty.</p>
            <Button asChild>
              <Link href="/search">Continue Shopping</Link>
            </Button>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map(({ book, quantity }) => {
                const placeholder = PlaceHolderImages.find(p => p.id === book.coverImage);
                return (
                  <Card key={book.id} className="overflow-hidden">
                    <CardContent className="p-4 flex gap-4 items-center">
                      <div className="relative w-24 h-36 flex-shrink-0">
                        {placeholder && (
                          <Image
                            src={placeholder.imageUrl}
                            alt={book.title}
                            fill
                            className="object-cover rounded-md"
                          />
                        )}
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-semibold font-headline">{book.title}</h3>
                        <p className="text-sm text-muted-foreground">{book.author}</p>
                        <p className="text-lg font-bold text-primary mt-1">${book.price.toFixed(2)}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Input
                          type="number"
                          min="1"
                          value={quantity}
                          onChange={(e) => updateQuantity(book.id, parseInt(e.target.value))}
                          className="w-16 h-9 text-center"
                        />
                        <Button variant="ghost" size="icon" onClick={() => removeFromCart(book.id)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span>Subtotal ({totalItems} items)</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                  <Button asChild size="lg" className="w-full mt-4">
                    <Link href="/checkout">Proceed to Checkout</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

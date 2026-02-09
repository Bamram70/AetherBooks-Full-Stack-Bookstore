'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { CreditCardForm } from '@/components/checkout/credit-card-form';
import { useCart } from '@/hooks/use-cart';
import { Wallet, CreditCard, Gift } from 'lucide-react';

export default function CheckoutPaymentPage() {
  const [paymentMethod, setPaymentMethod] = useState<string>('credit-card');
  const router = useRouter();
  const { totalItems } = useCart();

  const handleContinue = () => {
    router.push('/checkout/shipping');
  };
  
  if (totalItems === 0) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow flex items-center justify-center">
            <p>Your cart is empty. Add some books before checking out.</p>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="font-headline text-4xl font-bold mb-8 text-center">Checkout</h1>
        <div className="max-w-xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Select Payment Method</CardTitle>
              <CardDescription>Choose how you'd like to pay.</CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-4">
                <Label
                  htmlFor="google-pay"
                  className="flex items-center gap-4 rounded-md border p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary cursor-pointer"
                >
                  <RadioGroupItem value="google-pay" id="google-pay" />
                  <Wallet className="h-6 w-6" />
                  <span>Google Pay</span>
                </Label>
                <Label
                   htmlFor="apple-pay"
                   className="flex items-center gap-4 rounded-md border p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary cursor-pointer"
                >
                  <RadioGroupItem value="apple-pay" id="apple-pay" />
                  <Wallet className="h-6 w-6" />
                  <span>Apple Pay</span>
                </Label>
                 <Label
                   htmlFor="gift-card"
                   className="flex items-center gap-4 rounded-md border p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary cursor-pointer"
                >
                  <RadioGroupItem value="gift-card" id="gift-card" />
                  <Gift className="h-6 w-6" />
                  <span>Gift Card</span>
                </Label>
                <Label
                   htmlFor="credit-card"
                   className="flex flex-col gap-4 rounded-md border p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <RadioGroupItem value="credit-card" id="credit-card" />
                    <CreditCard className="h-6 w-6" />
                    <span>Credit Card</span>
                  </div>
                  {paymentMethod === 'credit-card' && (
                    <div className="pt-4 border-t mt-4">
                      <CreditCardForm />
                    </div>
                  )}
                </Label>
              </RadioGroup>
              <Button onClick={handleContinue} size="lg" className="w-full mt-6">
                Continue to Shipping
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}

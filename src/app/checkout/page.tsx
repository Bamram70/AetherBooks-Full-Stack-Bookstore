'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useCart } from '@/hooks/use-cart';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';

const checkoutSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  address: z.string().min(5, 'Address is required'),
  city: z.string().min(2, 'City is required'),
  zip: z.string().min(5, 'ZIP code is required'),
  country: z.string().min(2, 'Country is required'),
  cardName: z.string().min(2, 'Name on card is required'),
  cardNumber: z.string().length(16, 'Card number must be 16 digits'),
  expiry: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, 'Expiry must be MM/YY'),
  cvc: z.string().length(3, 'CVC must be 3 digits'),
});

export default function CheckoutPage() {
  const { totalPrice, totalItems, clearCart } = useCart();
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<z.infer<typeof checkoutSchema>>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      name: '', email: '', address: '', city: '', zip: '', country: '',
      cardName: '', cardNumber: '', expiry: '', cvc: '',
    },
  });

  const onSubmit = (values: z.infer<typeof checkoutSchema>) => {
    console.log(values);
    toast({
      title: "Order Placed!",
      description: "Thank you for your purchase. Your books are on their way!",
    });
    clearCart();
    router.push('/');
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
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Shipping Information</CardTitle>
                  </CardHeader>
                  <CardContent className="grid md:grid-cols-2 gap-4">
                    <FormField name="name" control={form.control} render={({ field }) => (
                      <FormItem className="md:col-span-2"><FormLabel>Full Name</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <FormField name="email" control={form.control} render={({ field }) => (
                      <FormItem className="md:col-span-2"><FormLabel>Email</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <FormField name="address" control={form.control} render={({ field }) => (
                        <FormItem className="md:col-span-2"><FormLabel>Address</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <FormField name="city" control={form.control} render={({ field }) => (
                        <FormItem><FormLabel>City</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <FormField name="zip" control={form.control} render={({ field }) => (
                        <FormItem><FormLabel>ZIP Code</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <FormField name="country" control={form.control} render={({ field }) => (
                        <FormItem className="md:col-span-2"><FormLabel>Country</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Payment Details</CardTitle>
                    <CardDescription>All transactions are secure and encrypted.</CardDescription>
                  </CardHeader>
                  <CardContent className="grid md:grid-cols-2 gap-4">
                    <FormField name="cardName" control={form.control} render={({ field }) => (
                        <FormItem className="md:col-span-2"><FormLabel>Name on Card</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <FormField name="cardNumber" control={form.control} render={({ field }) => (
                        <FormItem className="md:col-span-2"><FormLabel>Card Number</FormLabel><FormControl><Input {...field} placeholder="0000 0000 0000 0000" /></FormControl><FormMessage /></FormItem>
                    )} />
                    <FormField name="expiry" control={form.control} render={({ field }) => (
                        <FormItem><FormLabel>Expiry (MM/YY)</FormLabel><FormControl><Input {...field} placeholder="MM/YY" /></FormControl><FormMessage /></FormItem>
                    )} />
                    <FormField name="cvc" control={form.control} render={({ field }) => (
                        <FormItem><FormLabel>CVC</FormLabel><FormControl><Input {...field} placeholder="123" /></FormControl><FormMessage /></FormItem>
                    )} />
                  </CardContent>
                </Card>
                <Button type="submit" size="lg" className="w-full">Place Order</Button>
              </form>
            </Form>
          </div>
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Your Order</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between font-bold text-lg">
                  <span>Total ({totalItems} items)</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

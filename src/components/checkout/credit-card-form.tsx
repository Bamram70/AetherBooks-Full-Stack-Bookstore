'use client';

import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

const creditCardSchema = z.object({
  cardName: z.string().min(2, 'Name on card is required'),
  cardNumber: z.string().min(16, 'Card number must be 16 digits').max(16, 'Card number must be 16 digits'),
  expiry: z.string().regex(/^(0[1-9]|1[0-2])\/?\d{2}$/, 'Expiry must be MM/YY'),
  cvc: z.string().min(3, 'CVC must be 3 or 4 digits').max(4, 'CVC must be 3 or 4 digits'),
});

export function CreditCardForm() {
  // This form can be connected to a parent form context if needed
  const form = useForm<z.infer<typeof creditCardSchema>>({
    resolver: zodResolver(creditCardSchema),
    defaultValues: {
      cardName: '',
      cardNumber: '',
      expiry: '',
      cvc: '',
    },
    // We can use a different mode to show errors earlier if desired
    // mode: 'onBlur',
  });

  // NOTE: This form does not have a submit button. It's intended to be part of a larger
  // checkout flow. The form state would typically be lifted up or managed in a global
  // state (like a cart context) to be submitted with the final order.
  // For this prototype, we are just capturing the input.

  return (
    <FormProvider {...form}>
      <form className="space-y-4">
        <FormField name="cardName" control={form.control} render={({ field }) => (
            <FormItem><FormLabel>Name on Card</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
        )} />
        <FormField name="cardNumber" control={form.control} render={({ field }) => (
            <FormItem><FormLabel>Card Number</FormLabel><FormControl><Input {...field} placeholder="0000 0000 0000 0000" /></FormControl><FormMessage /></FormItem>
        )} />
        <div className="grid grid-cols-2 gap-4">
            <FormField name="expiry" control={form.control} render={({ field }) => (
                <FormItem><FormLabel>Expiry (MM/YY)</FormLabel><FormControl><Input {...field} placeholder="MM/YY" /></FormControl><FormMessage /></FormItem>
            )} />
            <FormField name="cvc" control={form.control} render={({ field }) => (
                <FormItem><FormLabel>CVC</FormLabel><FormControl><Input {...field} placeholder="123" /></FormControl><FormMessage /></FormItem>
            )} />
        </div>
      </form>
    </FormProvider>
  );
}

'use server';

/**
 * @fileOverview Generates customer insights based on customer behavior, sales trends, and user engagement data.
 *
 * - generateCustomerInsights - A function that generates customer insights.
 * - GenerateCustomerInsightsInput - The input type for the generateCustomerInsights function.
 * - GenerateCustomerInsightsOutput - The return type for the generateCustomerInsights function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateCustomerInsightsInputSchema = z.object({
  customerBehaviorData: z
    .string()
    .describe('Data representing customer behavior, such as purchase history, browsing activity, and demographics.'),
  salesTrendsData: z
    .string()
    .describe('Data representing sales trends, including sales volume, revenue, and product performance.'),
  userEngagementData: z
    .string()
    .describe('Data representing user engagement, such as website traffic, session duration, and feature usage.'),
});
export type GenerateCustomerInsightsInput = z.infer<typeof GenerateCustomerInsightsInputSchema>;

const GenerateCustomerInsightsOutputSchema = z.object({
  insights: z
    .string()
    .describe(
      'Actionable insights generated from the analysis of customer behavior, sales trends, and user engagement data, presented in an easy-to-understand format.'
    ),
});
export type GenerateCustomerInsightsOutput = z.infer<typeof GenerateCustomerInsightsOutputSchema>;

export async function generateCustomerInsights(
  input: GenerateCustomerInsightsInput
): Promise<GenerateCustomerInsightsOutput> {
  return generateCustomerInsightsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateCustomerInsightsPrompt',
  input: {schema: GenerateCustomerInsightsInputSchema},
  output: {schema: GenerateCustomerInsightsOutputSchema},
  prompt: `You are an AI assistant specializing in analyzing e-commerce data to provide actionable insights.

  Analyze the provided data on customer behavior, sales trends, and user engagement to generate insights that can inform marketing strategies and inventory management.

  Present the insights in a clear and concise format suitable for an admin dashboard.

  Customer Behavior Data: {{{customerBehaviorData}}}
  Sales Trends Data: {{{salesTrendsData}}}
  User Engagement Data: {{{userEngagementData}}}

  Based on this data, provide insights into:
  - Key customer segments and their preferences.
  - Top-selling products and categories.
  - Areas for improving user engagement and conversion rates.
  - Recommendations for optimizing marketing campaigns and inventory management.
  `,
});

const generateCustomerInsightsFlow = ai.defineFlow(
  {
    name: 'generateCustomerInsightsFlow',
    inputSchema: GenerateCustomerInsightsInputSchema,
    outputSchema: GenerateCustomerInsightsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

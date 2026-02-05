'use server';
/**
 * @fileOverview Refines search results using AI to provide more relevant book recommendations.
 *
 * - refineSearchResults - A function that refines search results based on the user query.
 * - RefineSearchResultsInput - The input type for the refineSearchResults function.
 * - RefineSearchResultsOutput - The return type for the refineSearchResults function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RefineSearchResultsInputSchema = z.object({
  query: z.string().describe('The user search query.'),
  bookList: z.array(z.string()).describe('A list of book titles to refine.'),
});

export type RefineSearchResultsInput = z.infer<typeof RefineSearchResultsInputSchema>;

const RefineSearchResultsOutputSchema = z.array(z.string()).describe('A list of book titles refined by AI relevance to the query.');

export type RefineSearchResultsOutput = z.infer<typeof RefineSearchResultsOutputSchema>;

export async function refineSearchResults(input: RefineSearchResultsInput): Promise<RefineSearchResultsOutput> {
  return refineSearchResultsFlow(input);
}

const refineSearchResultsPrompt = ai.definePrompt({
  name: 'refineSearchResultsPrompt',
  input: {schema: RefineSearchResultsInputSchema},
  output: {schema: RefineSearchResultsOutputSchema},
  prompt: `Given the user query: "{{query}}", refine the following list of book titles to only include books that are highly relevant to the query. Return the refined list of book titles.

Book List:
{{#each bookList}}- {{{this}}}
{{/each}}`,
});

const refineSearchResultsFlow = ai.defineFlow(
  {
    name: 'refineSearchResultsFlow',
    inputSchema: RefineSearchResultsInputSchema,
    outputSchema: RefineSearchResultsOutputSchema,
  },
  async input => {
    const {output} = await refineSearchResultsPrompt(input);
    return output!;
  }
);

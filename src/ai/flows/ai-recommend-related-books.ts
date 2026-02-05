// This file implements the Genkit flow for recommending related books based on a given book's details and user history.

'use server';

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RecommendRelatedBooksInputSchema = z.object({
  bookTitle: z.string().describe('The title of the book being viewed.'),
  bookGenre: z.string().describe('The genre of the book being viewed.'),
  bookDescription: z.string().describe('A brief description of the book.'),
  userReadingHistory: z
    .string()
    .describe(
      'A list of book titles the user has previously read, separated by commas.'
    ),
  numberOfRecommendations: z
    .number()
    .default(3)
    .describe('The number of related books to recommend.'),
});

export type RecommendRelatedBooksInput = z.infer<
  typeof RecommendRelatedBooksInputSchema
>;

const RecommendRelatedBooksOutputSchema = z.object({
  recommendedBooks: z.array(
    z.object({
      title: z.string().describe('The title of the recommended book.'),
      author: z.string().describe('The author of the recommended book.'),
      genre: z.string().describe('The genre of the recommended book.'),
      description: z.string().describe('A brief description of the recommended book.'),
    })
  ).describe('A list of recommended books.'),
});

export type RecommendRelatedBooksOutput = z.infer<
  typeof RecommendRelatedBooksOutputSchema
>;

export async function recommendRelatedBooks(
  input: RecommendRelatedBooksInput
): Promise<RecommendRelatedBooksOutput> {
  return recommendRelatedBooksFlow(input);
}

const recommendRelatedBooksPrompt = ai.definePrompt({
  name: 'recommendRelatedBooksPrompt',
  input: {schema: RecommendRelatedBooksInputSchema},
  output: {schema: RecommendRelatedBooksOutputSchema},
  prompt: `You are a personal book recommendation assistant. A user is currently viewing the book "{{bookTitle}}" which is a "{{bookGenre}}" book. The book is about: {{bookDescription}}.

  The user has previously read the following books: {{userReadingHistory}}.

  Based on this information, recommend {{numberOfRecommendations}} other books the user might enjoy. Return your response as a list of books, including the title, author, genre and description of each book.
  Ensure that the books selected are related to the user's viewing history and the current book's genre and themes.
`,
});

const recommendRelatedBooksFlow = ai.defineFlow(
  {
    name: 'recommendRelatedBooksFlow',
    inputSchema: RecommendRelatedBooksInputSchema,
    outputSchema: RecommendRelatedBooksOutputSchema,
  },
  async input => {
    const {output} = await recommendRelatedBooksPrompt(input);
    return output!;
  }
);

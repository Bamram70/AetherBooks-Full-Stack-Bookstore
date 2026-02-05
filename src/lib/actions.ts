'use server';

import { recommendRelatedBooks, RecommendRelatedBooksInput } from "@/ai/flows/ai-recommend-related-books";
import { generateCustomerInsights } from "@/ai/flows/ai-generate-customer-insights";
import { refineSearchResults, RefineSearchResultsInput } from "@/ai/flows/ai-refine-search-results";
import { books } from "./data";

export async function getRelatedBooksAction(input: RecommendRelatedBooksInput) {
  try {
    const recommendations = await recommendRelatedBooks(input);
    return recommendations;
  } catch (error) {
    console.error("Error fetching related books:", error);
    return null;
  }
}

export async function generateInsightsAction() {
    try {
        // In a real app, this data would be pulled from a database
        const customerBehaviorData = "Recent purchases include mostly sci-fi and fantasy. High engagement with author pages. Most users are on mobile.";
        const salesTrendsData = "Q3 sales show a 20% increase in 'Science Fiction' category. 'Dune' and 'Project Hail Mary' are top sellers. Average order value is $45.";
        const userEngagementData = "Homepage bounce rate is 30%. Users spend an average of 5 minutes on book detail pages. The checkout abandonment rate is 15%.";

        const insights = await generateCustomerInsights({
            customerBehaviorData,
            salesTrendsData,
            userEngagementData
        });

        return insights.insights;
    } catch (error) {
        console.error("Error generating insights:", error);
        return "Failed to generate insights. Please try again later.";
    }
}

export async function refineSearchAction(input: RefineSearchResultsInput) {
  try {
    const refinedTitles = await refineSearchResults(input);
    
    // Filter the full book list based on the refined titles
    const titleSet = new Set(refinedTitles);
    const refinedBooks = books.filter(book => titleSet.has(book.title));
    
    return refinedBooks;
  } catch (error) {
    console.error("Error refining search results:", error);
    // Fallback to simple text search
    return books.filter(book => 
      book.title.toLowerCase().includes(input.query.toLowerCase()) ||
      book.author.toLowerCase().includes(input.query.toLowerCase())
    );
  }
}

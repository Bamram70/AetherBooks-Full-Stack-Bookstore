"use client";

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { generateInsightsAction } from "@/lib/actions";
import { Wand2 } from 'lucide-react';
import { Skeleton } from '../ui/skeleton';

export function InsightsGenerator() {
    const [insights, setInsights] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleGenerate = async () => {
        setLoading(true);
        setInsights(null);
        const result = await generateInsightsAction();
        setInsights(result);
        setLoading(false);
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>AI-Driven Insights</CardTitle>
                <CardDescription>Generate insights about customer behavior and sales trends.</CardDescription>
            </CardHeader>
            <CardContent>
                <Button onClick={handleGenerate} disabled={loading}>
                    <Wand2 className="mr-2 h-4 w-4" />
                    {loading ? "Generating..." : "Generate Insights"}
                </Button>

                {loading && (
                    <div className="mt-4 space-y-2">
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-3/4" />
                    </div>
                )}
                
                {insights && (
                    <div className="mt-4 p-4 bg-muted rounded-lg border">
                        <pre className="whitespace-pre-wrap font-body text-sm">{insights}</pre>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { InsightsGenerator } from "@/components/admin/insights-generator";

export default function AdminDashboardPage() {
    return (
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>Welcome to your Dashboard</CardTitle>
                    <CardDescription>Here's a quick overview of your store.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Use the navigation on the left to manage orders, products, and customers.</p>
                </CardContent>
            </Card>
            <InsightsGenerator />
        </div>
    );
}

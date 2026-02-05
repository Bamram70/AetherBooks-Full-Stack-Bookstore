import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdminOrdersPage() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Orders</CardTitle>
                <CardDescription>View and manage customer orders.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="text-center py-12 border-2 border-dashed rounded-lg">
                    <p className="text-muted-foreground">Order management is under construction.</p>
                </div>
            </CardContent>
        </Card>
    );
}

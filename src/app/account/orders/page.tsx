import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const orders = [
    { id: 'ORD001', date: '2023-10-26', status: 'Delivered', total: '$45.98' },
    { id: 'ORD002', date: '2023-10-20', status: 'Delivered', total: '$17.99' },
    { id: 'ORD003', date: '2023-09-15', status: 'Cancelled', total: '$22.00' },
];

export default function OrderHistoryPage() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Order History</CardTitle>
                <CardDescription>View your past orders.</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Order ID</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="text-right">Total</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {orders.map((order) => (
                            <TableRow key={order.id}>
                                <TableCell className="font-medium">{order.id}</TableCell>
                                <TableCell>{order.date}</TableCell>
                                <TableCell>
                                    <Badge variant={order.status === 'Delivered' ? 'default' : 'secondary'}>
                                        {order.status}
                                    </Badge>
                                </TableCell>
                                <TableCell className="text-right">{order.total}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}

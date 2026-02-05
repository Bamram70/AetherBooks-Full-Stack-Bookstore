import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { MoreHorizontal } from "lucide-react";
import { books } from "@/lib/data";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export default function InventoryPage() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Inventory</CardTitle>
                <CardDescription>Manage your books and their inventory.</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="hidden w-[100px] sm:table-cell">
                                <span className="sr-only">Image</span>
                            </TableHead>
                            <TableHead>Title</TableHead>
                            <TableHead>Genre</TableHead>
                            <TableHead className="hidden md:table-cell">Price</TableHead>
                            <TableHead className="hidden md:table-cell">Rating</TableHead>
                            <TableHead>
                                <span className="sr-only">Actions</span>
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {books.map((book) => {
                            const placeholder = PlaceHolderImages.find(p => p.id === book.coverImage);
                            return (
                                <TableRow key={book.id}>
                                    <TableCell className="hidden sm:table-cell">
                                        {placeholder && (
                                            <Image
                                                alt={book.title}
                                                className="aspect-square rounded-md object-cover"
                                                height="64"
                                                src={placeholder.imageUrl}
                                                width="64"
                                            />
                                        )}
                                    </TableCell>
                                    <TableCell className="font-medium">{book.title}</TableCell>
                                    <TableCell>
                                        <Badge variant="outline">{book.genre}</Badge>
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">${book.price.toFixed(2)}</TableCell>
                                    <TableCell className="hidden md:table-cell">{book.rating}/5</TableCell>
                                    <TableCell>
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button aria-haspopup="true" size="icon" variant="ghost">
                                                    <MoreHorizontal className="h-4 w-4" />
                                                    <span className="sr-only">Toggle menu</span>
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                <DropdownMenuItem>Edit</DropdownMenuItem>
                                                <DropdownMenuItem>Delete</DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Book,
  Home,
  Package,
  PanelLeft,
  Settings,
  ShoppingCart,
  Users2,
} from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { AetherBooksLogo } from '@/components/icons/logo';
import { Button } from '@/components/ui/button';

const navItems = [
    { href: '/admin', label: 'Dashboard', icon: Home },
    { href: '/admin/orders', label: 'Orders', icon: ShoppingCart },
    { href: '/admin/inventory', label: 'Inventory', icon: Package },
    { href: '/admin/customers', label: 'Customers', icon: Users2 },
    { href: '/admin/settings', label: 'Settings', icon: Settings },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <SidebarProvider>
        <Sidebar>
          <SidebarHeader>
            <div className="flex items-center gap-2">
              <AetherBooksLogo className="w-8 h-8 text-primary" />
              <span className="text-lg font-semibold font-headline">AetherBooks</span>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.href}
                  >
                    <Link href={item.href}>
                      <item.icon />
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>
        <SidebarInset>
            <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
                <SidebarTrigger className="sm:hidden" />
                 <div className="flex items-center gap-2">
                    <Button asChild variant="link" className="text-foreground">
                        <Link href="/">
                            <Book className="mr-2"/> Back to Store
                        </Link>
                    </Button>
                </div>
            </header>
            <main className="p-4 sm:px-6 sm:py-0">{children}</main>
        </SidebarInset>
    </SidebarProvider>
  );
}

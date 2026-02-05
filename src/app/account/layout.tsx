'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { cn } from "@/lib/utils";

const accountNav = [
  { name: 'Profile', href: '/account' },
  { name: 'Order History', href: '/account/orders' },
];

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold font-headline mb-8">My Account</h1>
        <div className="grid md:grid-cols-4 gap-8">
          <aside className="md:col-span-1">
            <nav className="flex flex-col space-y-2">
              {accountNav.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    pathname === item.href
                      ? 'bg-primary text-primary-foreground'
                      : 'hover:bg-muted'
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </aside>
          <div className="md:col-span-3">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

import Link from 'next/link';
import { AetherBooksLogo } from '@/components/icons/logo';
import { Github, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-start">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <AetherBooksLogo className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold font-headline text-foreground">
                AetherBooks
              </span>
            </Link>
            <p className="text-sm">
              Discover your next adventure with our curated collection of books.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/search" className="hover:text-primary transition-colors">
                  Browse
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/admin" className="hover:text-primary transition-colors">
                  Admin
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/faq" className="hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:text-primary transition-colors">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-4 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} AetherBooks. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

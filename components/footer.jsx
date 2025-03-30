import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-black text-white">
      <div className="container px-4 py-8 md:px-6 md:py-12">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Savor</h3>
            <p className="max-w-xs text-sm text-gray-400">
              Experience culinary excellence with our seasonal menu featuring
              locally-sourced ingredients.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider">
              Navigation
            </h3>
            <nav className="flex flex-col space-y-2 text-gray-400">
              <Link href="/" className="text-sm hover:underline">
                Home
              </Link>
              <Link href="/menu" className="text-sm hover:underline">
                Menu
              </Link>
              <Link href="/about" className="text-sm hover:underline">
                About
              </Link>
              <Link href="/contact" className="text-sm hover:underline ">
                Contact
              </Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider">
              Contact
            </h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>123 Culinary Street</p>
              <p>Foodville, CA 90210</p>
              <p>info@restaurant.com</p>
              <p>(555) 123-4567</p>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider">
              Social
            </h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400  hover:text-yellow-200">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400  hover:text-yellow-200">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-yellow-200">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-400 pt-8 text-center text-sm ">
          <p>
            &copy; {new Date().getFullYear()} Savor Restaurant. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

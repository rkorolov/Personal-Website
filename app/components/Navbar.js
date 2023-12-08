"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();
    if (pathname != "/studio") {


    return (
      <nav className="border-b sticky top-0 bg-primary-200 text-pink-300 border-100 z-10">
        <div className="h-14 max-w-7xl p-4 mx-auto flex items-center justify-between">
          <Link href="/" className="font-semibold text-lg md:hover:text-secondary-400">
            ruslana korolov
          </Link>
          <ul className="hidden md:flex items-center justify-end  fonts-style: italic space-x-4 text-lg font-medium">
            <li className="md:hover:text-secondary-400">
              <Link href="/blog">blog</Link>
            </li>
            <li className="md:hover:text-secondary-400">
              <Link href="/photos">photos</Link>
            </li>
            <li className="md:hover:text-secondary-400">
              <Link href="/projects">projects</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
    }
  }
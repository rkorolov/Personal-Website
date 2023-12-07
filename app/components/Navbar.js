"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();
    if (pathname != "/studio") {


    return (
      <nav className="border-b sticky top-0 bg-primary-400 text-secondary-50 border-100 z-10">
        <div className="h-14 max-w-7xl p-4 mx-auto flex items-center justify-between">
          <Link href="/" className="font-medium text-lg md:hover:text-secondary-300">
            My Website
          </Link>
          <ul className="hidden md:flex items-center justify-end space-x-4 text-sm font-medium">
            <li className="md:hover:text-secondary-400">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="md:hover:text-secondary-400">
              <Link href="/photos">Photos</Link>
            </li>
            <li className="md:hover:text-secondary-400">
              <Link href="/projects">Projects</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
    }
  }
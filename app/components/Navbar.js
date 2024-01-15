"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();
    if (pathname != "/studio") {


    return (
      <nav className=" sticky top-0 mb-3  bg-lightsage text-cream z-10">
        <div className="h-14 max-w-7xl p-4 mx-auto flex items-center justify-between flex- ">
          <Link href="/" className="font-semibold font-serif text-2xl hover:text-lime">
            h o m e
          </Link>

          <ul className="flex justify-end  fonts-style: italic space-x-4 text-lg font-medium">
            <li className="hover:text-lime">
              <Link href="/blog">b l o g</Link>
            </li>
            <p class="text-sage"> | </p>
            <li className="hover:text-lime">
              <Link href="/photos">p h o t o s</Link>
            </li>

            <p class="text-sage"> | </p>
            <li className="hover:text-lime">
              <Link href="/projects">p r o j e c t s</Link>
              
            </li>
          </ul>
        </div>

      </nav>
    );
    }
  }
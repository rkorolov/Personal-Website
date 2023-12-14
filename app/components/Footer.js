"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import linkimg from "../icons/linkedin.ico";

export default function Footer() {
    const pathname = usePathname();
    if (pathname != "/studio") {
    return (
      <nav className="bg-lightsage m-2 rounded-full  inset-x-0  bottom-0  font-style: italic">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        
        <span>
        <p className="text-cream">Ruslana Korolov &copy; {new Date().getFullYear()}</p>
        </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-bold text-cream dark:text-gray-400 sm:mt-0">
            <ul className="list-image-[git.png]">
              
  
            </ul>
            <li >
                <div className=" "> 
                <a href="https://github.com/rkorolov" className="hover:text-pink-600 me-4 md:me-6">github</a>
                </div>
            </li>
            <li>

                <a href="https://www.linkedin.com/in/ruslana-korolov/" className="hover:text-pink-600 me-4 md:me-6">lets link!</a>
            </li>
          </ul>
          
        </div>
        
      </nav>
    );
    }
  }
'use client'
import { useState } from "react";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import Link from "next/link";




/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, far, fab)

export default function ProjectCard({title, descr, link, link_name, date}) {
  // return (
    // <div className="space-y-2 group">
    //   <Image
    //     src={urlForImage(image)}
    //     width={1920}
    //     height={1080}
    //     alt={title}
    //     className="rounded-2xl border border-primary-400 md:group-hover:scale-95 transition-transform transform"
    //   />
    //   <h2 className="font-semibold flex text-lg text-center space-y-4">
    //     {title}
    //     {favorite ? <p className="text-sm mr-2"> ⭐️</p> : null}
        
    //   </h2>
      
      
    // </div>
  // );
  const [shown, setShown] = useState(false);
    function toggle() {
        setShown(!shown);
    }
    return (
        <div class="flex justify-end text-left h-full flex-col m-auto">

            {/* drop down menus */}
            <div class="flex justify-start flex-row gap-x-2">
            <i class="fa-regular fa-square-caret-down"></i>
            <button class=' rounded-lg' onClick={toggle}><FontAwesomeIcon icon="fa-regular fa-square-caret-down" size="1x"/></button>
            <div class="flex flex-row items-center space-x-2">
                <h1 class="py-2">{title}</h1>
                <p class="font-style: italic text-xs">{date}</p>
            </div>
           
            
            </div>
            <div class="px-9 flex flex-col space-y-2" style={{
                display: shown ? "flex" : "none",
            }}>
                <p class="text-sm font-style: italic">{descr}</p>
                <a class="text-sm font-black" target='_blank' rel="noopener" href={link}>{link_name}</a>
            </div>

            
            {/* <iframe class="h-screen w-2/3 rounded-md border-sage " src="https://e.notionhero.io/e1/p/4be2668-44c4562a69e869f1ede1b20aeb910eb"></iframe> */}

             
            

        </div>
        
    );
}

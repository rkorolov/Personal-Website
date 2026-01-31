'use client'
import { library } from '@fortawesome/fontawesome-svg-core'
import Link from "next/link";




/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, far, fab)

export default function ProjectCard({title, descr, link, link_name, date, type}) {
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
    return (
        <div class="flex justify-start flex-col shadow-lg rounded-lg p-2 w-full h-full cursor-pointer hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-row justify-between items-center">
                <h1 class="py-2">{title}</h1>
                <p className="text-sm p-2 rounded-full bg-lime w-fit">{type}</p>
            </div>

            <a class="text-sm font-semibold text-right pb-2 text-blue-300 font-style: italic hover:text-blue-500" target='_blank' rel="noopener" href={link}>{link_name}</a>

            <p class="text-sm">{descr}</p>
        </div>
        
    );
}

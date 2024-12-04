'use client'
import { useState } from "react";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";

export default function ProjectCard() {
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
        <div class="flex justify-end w-2/3 text-left h-full flex-col m-auto">

            {/* drop down menus */}
            <div class="flex justify-start flex-row gap-x-5">
            <button class='bg-primary-200 px-4 rounded-lg' onClick={toggle} >Toggle</button>
            <h1 class="py-2">Project Title</h1>
            
            </div>
            <div class="" style={{
                display: shown ? "flex" : "none",
            }}>
                Ex. Project
            </div>

            
            {/* <iframe class="h-screen w-2/3 rounded-md border-sage " src="https://e.notionhero.io/e1/p/4be2668-44c4562a69e869f1ede1b20aeb910eb"></iframe> */}

             
            

        </div>
        
    );
}

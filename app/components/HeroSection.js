import Image from "next/image";
// import me from "../icons/IMG_1204.JPG";
import me from "../icons/profile_pic.png";


import Link from "next/link";
import { FilledButton, OutlinedButton } from "./Buttons";



export default function HeroSection() {

    return (
      
      <section class=" mx-2 " >
      <div class="grid max-w-screen-xl space-x-10  mx-2 lg:gap-8 xl:gap-0 lg:py-8 lg:grid-cols-12"> 
      
          <div class="mr-auto place-self-center lg:col-span-7 pb-3 bg-lightsage rounded-lg p-4">
            
              <h1 class="max-w-2xl mb-2 text-4xl  tracking-tight leading-none md:text-5xl xl:text-6xl  mx-4 text-lime font-bold "> 
                {/* <span class="">Welcome </span>to <span class="font-extrabold text-sage font-style: italic"> my Page</span> */}
                HEY STRANGER!
              </h1>
            
              <p class="max-w-2xl my-4 mb-6 ml-4  font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl text-lime ">I'm Ruslana, a second year intended Electrical & Computer Engineering (ECE) major @ UW.</p>
              <p class="max-w-2xl mb-6 ml-4  font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl text-lime ">I'm interested in web development, neurocomputing, radio frequency engineering, and computer architecture</p>
              
              <div class="inline-flex ml-3">
                <div class="pr-4">
                <FilledButton > <Link href="/blog">Projects</Link></FilledButton>
                </div>
                <FilledButton> <Link href="/photos">Photos</Link> </FilledButton>
            </div>

             

          
          
          
          
         </div>     
         <div class="hidden lg:mt-0 lg:col-span-5 lg:flex overflow-hidden ">
              <div class=" p-4 bg-sage rounded-lg">
                <Image class="rounded-lg " src={me} alt="" height={450}/>
              </div>
            </div>             
      </div>
      
      </section>
      

    );
}
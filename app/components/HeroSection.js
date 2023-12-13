import Image from "next/image";
import me from "../icons/IMG_1204.JPG";


export default function HeroSection() {

    return (
      
      <section >
      <div class="grid max-w-screen-xl  mx-auto lg:gap-8 xl:gap-0 lg:py-8 lg:grid-cols-12 border-b-4 border-pink-200">
          <div class="mr-auto place-self-center lg:col-span-7">
              <h1 class="max-w-2xl mb-4 text-4xl font-extrabold font-serif tracking-tight leading-none md:text-5xl xl:text-6xl text-secondary-400 mx-2">Welcome to my Page!</h1>
            
              <p class="max-w-2xl mb-6 ml-4  text-gray-500 lg:mb-8 md:text-lg lg:text-xl text-secondary-800">Hey Stranger! I'm a first year intended ECE major @ UW !</p>
              
          </div>
          <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
              <Image class="rounded-full border-pink-200 border-8" src={me} alt="" height={400}/>
          </div>                
      </div>
      </section>
      

    );
}
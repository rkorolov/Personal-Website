
import HeroSection from "./components/HeroSection";
import BlogPostCard from "./blog/components/BlogPostCard";
import { client } from "@/sanity/lib/client";
import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import Link from "next/link";

import profile from "./photos/profile.png";


/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import Image from "next/image";
import ProjectCard from "./projects/components/ProjectCard";
library.add(fas, far, fab)


export default async function Home() {
  const posts = await getBlogPosts();
  console.log({posts});
  return (
    <div class="flex w-screen h-screen">
      <title>Hello World!</title>
      <div id="sidebar" class="bg-lime w-1/3 max-l-screen h-full text-center flex flex-col p-4 space-y-2 justify-center items-center content-center">
        <div class="h-2/3">
        <Image class="align-center" src={profile} width={200} height={200}></Image>
        <p class="text-lg">Ruslana Korolov</p>
        <p class="text-med font-style: italic">Undergraduate</p>
        <p class="text-med">University of Washington</p>
        <a href="malito:rkorol@uw.edu"><p class="text-sm">rkorol [at] uw.edu</p></a>

        <div id="links" class="flex flex-row text-center justify-center space-x-4 fa-2xs ">
          <Link href="https://github.com/rkorolov" target='_blank' rel="noopener" passHref>
            <FontAwesomeIcon icon="fa-brands fa-github "  size="4x"/>
          </Link>
          <Link href="https://www.linkedin.com/in/ruslana-korolov/" target='_blank' rel="noopener" passHref>
            <FontAwesomeIcon icon="fa-brands fa-linkedin" size="4x"/>
          </Link>
        </div>
        </div>
        
      </div>

      <div id="main" class=" w-full h-full border-l-2 border-dashed py-8 px-10">
        <p class="text-3xl">all about me!</p>
        <p class="py-2 text-lg font-style: italic">Hey Stranger!</p>
        <div class="pb-4">
          <p class="pb-2">I'm Ruslana, a third year majoring in 
            <span class="font-bold">Electrical & Computer Engineering</span> major & minoring in 
            <span class="font-bold">Applied Math</span> @ UW.</p>
        </div>  

        <p class="text-3xl pb-2">work experience</p>

        <div class=" space-y-2 pb-4">
          <div class="flex flex-row space-x-4 items-center">
            
            <p>Jr SDE [at] Amazon</p>
            <p class="font-style: italic text-xs">(current)</p>
          </div>
          <p>Lead Teaching Assistant [at] Paul G Allen School of Computer Science & Engineering</p>
          <ul class="pl-8 list-disc">
            <li>CSE121 x3</li>
          </ul>
        </div>

        {/* TODO: Add filtering ability, (1) make project card components */}
        <p class="text-3xl pb-2">projects</p>
        <div>
          <ul>
            <p class="font-style: italic">Hackathons</p>
            <ul>
              <li><ProjectCard title="Lumivita" date="(Hacktech '25)" descr="descr" link="https://github.com/rkorolov/dubGrind" link_name="github"/></li>
              <li><ProjectCard title="DubGrind" date="(Open Source AI '25)" descr="descr" link="https://github.com/rkorolov/dubGrind" link_name="github"/></li>
              <li><ProjectCard title="QuestForge" date="(DubHacks '24)" descr="descr" link="https://github.com/rkorolov/dubGrind" link_name="github"/></li>
              <li><ProjectCard title="BrainVoyager" date="(NeuroHackathon '24)" descr="descr" link="https://github.com/rkorolov/dubGrind" link_name="github"/></li>
            </ul>
            <p class="font-style: italic">Research</p>
            <ul>
              <li><ProjectCard title="RF Harvester" descr="descr" link="https://docs.google.com/presentation/d/1qMhUmnOYmW8eBreNw60mEJYZoqtzFpsS_9COkfWaucQ/edit?usp=sharing" link_name="slides"/></li>
            </ul>
          
          </ul>
          
          
        </div>


        <div>
        </div>
      </div>

      <div>

      </div>
    </div>
    // <div class="">

    //   <div class=" mx-32 rounded-lg bg-lime">
        
    //   <HeroSection />
    //     <section>
    //       <div class="py-8 px-4 mx-auto max-w-screen-xl border-4 shadow-2xl border-sage bg-lightsage rounded-lg ">
    //           <div class="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400 text-  ">
    //               <h2 class="mb-4 text-4xl tracking-tight text-lime">
    //               <span class="font-extrabold  font-style: italic"> Involvements @ UW</span> </h2>

    //               <p class="mb-0  text-lime"> Undergraduate Teaching Assistant @ <span class="font-extrabold  font-style: italic">Paul G. Allen School of Computer Science & Engineering</span> </p> 
    //               <ul class="text-lime list-disc ml-4 mb-4 font-thin">
    //                 <li>Conducting classes for ~20 students twice a week.</li>
    //               </ul>

    //               <p class="mb-0  text-lime"> Undergraduate Research Assistant @ <span class="font-extrabold  font-style: italic">Sensor Systems Lab</span> </p> 
    //               <ul class="text-lime list-disc ml-4 mb-4 font-thin">
    //                 <li>Working on interfacing a muShr car with Modulated Noise Communication (MNC).</li>
    //               </ul>

    //               <p class="mb-0  text-lime"> WebMaster @ <span class="font-extrabold  font-style: italic"><a href="https://washingtonyachtclub.org/" class="font-style: italic inline-flex items-center hover:text-white ml-1 "> 
    //                 <span class="font-bold font-style: italic">Washington Yacht Club</span><svg class="ml-0 w-5 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
    //                 </a></span> 
    //               </p> 
    //               <ul class="text-lime list-disc ml-4 mb-4 font-thin">
    //                 <li>Update features & create content for the WYC website</li>
    //               </ul>
                  


    //               <p class="mb-0  text-lime"> Greek Social Chair @ 
    //               <a href="https://www.phisigmarho.org/" class="font-style: italic inline-flex items-center hover:text-white ml-1 "> 
    //                 <span class="font-bold font-style: italic">Phi Sigma Rho</span><svg class="ml-0 w-5 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                  
    //                 </a>
    //               </p>
    //               <ul class="text-lime list-disc ml-4 mb-4 font-thin">
    //                 <li>Planning and managing events with sororities and fraternities. </li>
    //               </ul>

                  

    //               <p class="mb-0  text-lime"> Social Media & Outreach @ <span class="font-extrabold  font-style: italic">SynapTech</span> </p> 
    //               <ul class="text-lime list-disc ml-4 mb-4 font-thin">
    //                 <li>Developing projects using neural interfaces</li>
    //               </ul>


              
                  
    //               {/* <Link href="/projects" class="inline-flex items-center font-medium text-sage hover:text-primary-800">
    //                   More About My Projects
    //                   <svg class="ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                  
    //               </Link> */}
    //           </div>
    //       </div>
    //     </section>

    //     <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
    //       <h2 class="mb-4 text-4xl tracking-tight text-sage text-center">Latest Projects</h2>

    //       <div className="py-8 max-w-7xl px-4 mx-auto">
    //       <div className="grid gird-cols-1 md:grid-cols-3 gap-4">
    //         {posts.map((post) => (
    //           <BlogPostCard key={post.slug} post={post} />
    //         ))}
            
    //       </div>
    //       </div>

    //     </div>
    //   </div>
    // </div>
    
    


    
    
  );
}

async function getBlogPosts() {
  const query =`*[_type == "blogPost"] | order(date desc) {
      title,
      description,
      date,
      "slug": slug.current,
      image,
    }`;
  
    const posts = await client.fetch(query);


    return posts;
}


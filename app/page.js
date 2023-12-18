
import HeroSection from "./components/HeroSection";
import BlogPostCard from "./blog/components/BlogPostCard";
import { client } from "@/sanity/lib/client";


export default async function Home() {
  const posts = await getBlogPosts();
  console.log({posts});
  return (
    <div class="">

      <div class=" mx-32 rounded-lg bg-lime">
        
      <HeroSection />
        <section>
          <div class="py-8 px-4 mx-auto max-w-screen-xl border-4 shadow-2xl border-sage bg-lightsage rounded-lg ">
              <div class="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400 text-  ">
                  <h2 class="mb-4 text-4xl tracking-tight text-lime">Current 
                  <span class="font-extrabold  font-style: italic"> Activities  @ UW</span> </h2>
                  <p class="mb-0  text-lime"> Greek Social Chair @ 
                  <a href="https://www.phisigmarho.org/" class="font-style: italic inline-flex items-center hover:text-white ml-1 "> 
                    <span class="font-bold font-style: italic">Phi Sigma Rho</span><svg class="ml-0 w-5 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                  
                    </a>
                  </p>
                  <ul class="text-lime list-disc ml-4 mb-4 font-thin">
                    <li>Planning and managing events with sororities and fraternities. </li>
                  </ul>

                  <p class="mb-0  text-lime"> Member @ <span class="font-extrabold  font-style: italic">Web Impact</span> </p> 
                  <ul class="text-lime list-disc ml-4 mb-4 font-thin">
                    <li>Attending workshops to strengthen coding skills</li>
                  </ul>

                  <p class="mb-0  text-lime"> Member @ <span class="font-extrabold  font-style: italic">SynapTech</span> </p> 
                  <ul class="text-lime list-disc ml-4 mb-4 font-thin">
                    <li>Developing projects using neural interfaces</li>
                  </ul>


              
                  
                  {/* <Link href="/projects" class="inline-flex items-center font-medium text-sage hover:text-primary-800">
                      More About My Projects
                      <svg class="ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                  
                  </Link> */}
              </div>
          </div>
        </section>

        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <h2 class="mb-4 text-4xl tracking-tight text-sage text-center">Latest Blog Posts</h2>

          <div className="py-8 max-w-7xl px-4 mx-auto">
          <div className="grid gird-cols-1 md:grid-cols-3 gap-4">
            {posts.map((post) => (
              <BlogPostCard key={post.slug} post={post} />
            ))}
            
          </div>
          </div>

        </div>
      </div>
    </div>
    
    


    
    
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


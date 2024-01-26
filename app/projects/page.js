// import Link from "next/link";
// import SectionHeader from "../components/SectionHeader";
// import Container from "../components/Container";


// export default function Projects() {
//     return (
//         <div class="flex justify-center h-full">


            
//             {/* <iframe class="h-screen w-2/3 rounded-md border-sage " src="https://e.notionhero.io/e1/p/4be2668-44c4562a69e869f1ede1b20aeb910eb"></iframe> */}

             
            

//         </div>
        
//     );
// }
import { client } from "@/sanity/lib/client";
import ProjectPostCard from "./components/ProjectPostCard";



export default async function Projects() {
  const posts = await getProjectPosts();
    return (
      <div>
        
        <div className="py-8 max-w-7xl px-4 mx-auto">
          <div className="grid gird-cols-1 md:grid-cols-3 gap-4">
            {posts.map((post) => (
              <ProjectPostCard key={post.slug} post={post} />
              
            ))}
            console.log(posts)
            
          </div>
          </div>
      </div>
      
      
    );
}

async function getProjectPosts() {
    const query =`*[_type == "projectPost"] | order(date desc) {
        title,
        description,
        date,
        "slug": slug.current,
        image,
      }`;
    
      const posts = await client.fetch(query);


      return posts;
}

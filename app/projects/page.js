import Link from "next/link";
import SectionHeader from "../components/SectionHeader";
import Container from "../components/Container";


export default function Projects() {
    return (
        <div class="flex justify-center h-full">


            
            <iframe class="h-screen w-2/3 rounded-md border-sage " src="https://e.notionhero.io/e1/p/4be2668-44c4562a69e869f1ede1b20aeb910eb"></iframe>

             
            

        </div>
        
    );
}

// import { client } from "@/sanity/lib/client";
// import ProjectCard from "./components/ProjectCard";

// export default async function Photos() {
//   const photos = await getProjects();
//   return (
//     <div class="py-8 max-w-7xl px-4 mx-auto">
//       <div class="grid gird-cols-1 md:grid-cols-3 gap-4">
//       {photos.map((photo) => (
//         <ProjectCard key={photo.title} photo={photo} />

//       ))}
//        </div>
  
//     </div>
    
//     );
// }

// async function getProjects() {
//   const query =`*[_type == "project"] | order(date desc) {
//       title,
//       image,
//       favorite,
//   }`;
    
//   const projects = await client.fetch(query);
//   console.log(projects)
//   return projects;
// }


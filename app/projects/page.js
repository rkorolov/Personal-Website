"use client"
import React from "react";
import { useState } from "react";
import ProjectCard from "./components/ProjectCard";



export default function Projects() {
    
    return (
        <ProjectCard />
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


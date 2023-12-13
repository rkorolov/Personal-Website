import { client } from "@/sanity/lib/client";
import PhotoCard from "./components/PhotoCard";

export default async function Photos() {
  const photos = await getPhotos();
  return (
    <div class="py-8 max-w-7xl px-4 mx-auto">
      <div class="grid gird-cols-1 md:grid-cols-3 gap-4">
      {photos.map((photo) => (
        <PhotoCard key={photo.title} photo={photo} />

      ))}
       </div>
  
    </div>
    
    );
}

async function getPhotos() {
  const query =`*[_type == "photo"] | order(date desc) {
      title,
      image,
      favorite,
  }`;
    
  const photos = await client.fetch(query);
  return photos;
}


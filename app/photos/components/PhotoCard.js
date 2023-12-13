import DatePill from "@/app/blog/components/DatePill";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";

export default function PhotoCard({ photo: { title, image, favorite } }) {
  return (
    <div className="space-y-2 group">
      <Image
        src={urlForImage(image)}
        width={1920}
        height={1080}
        alt={title}
        className="rounded-2xl border border-primary-400 md:group-hover:scale-95 transition-transform transform"
      />
      <h2 className="font-semibold flex text-lg text-center space-y-4">
        {favorite ? <p className="text-sm mr-2">⭐️</p> : null}
        {title}
      </h2>
      
      
    </div>
  );
}

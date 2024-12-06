import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import DatePill from "./DatePill";

export default function BlogPostCard({ post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="space-y-4 md:hover:opacity-75 transition-opacity"
    >
      <Image
        src={urlForImage(post.image)}
        width={1920}
        height={1080}
        alt={post.title}
        className="rounded-2xl border-4 border-sage"
      />
      <div className="space-y-2">
        <div>
          <div className="flex flex-row justify-between">
          <h2 className="text-lg font-semibold">{post.title}</h2>
          <DatePill date={post.date} />
          <p className="text-xs font-medium px-2 py-1 rounded-full bg-sage text-cream inline">
            {post.tag}
          </p>
          </div>
          
          <p className="line-clamp-1 text-sm text-sage">
            {post.description}
          </p>


        </div>
      </div>
    </Link>
  );
}
import { client } from "@/sanity/lib/client";
import BlogPostCard from "./components/BlogPostCard";

export default async function Blog() {
    const posts = await getBlogPosts();
    return (
        <div className="py-8 max-w-7x1 px-4 mx-auto"> 
        {posts.map((post) => (
                <BlogPostCard key={post.slug} post={post} />
        ))}
        </div>
    );
}

async function getBlogPosts() {
    const query =`*[_type == "blogPost"] | order(date desc) {
        title,
        description,
        date,
        "slug": slug.current,
        image
      }`;
    
      const posts = await client.fetch(query);
      return posts;
}
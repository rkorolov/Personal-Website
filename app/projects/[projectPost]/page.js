import Container from "@/app/components/Container";
import PostHeader from "./components/postHeader";
import { client } from "@/sanity/lib/client";

export default async function projectPost( { params }) {
    const post = await getPosts(params.post);
    return (
        <Container>
      <div className="mx-auto max-w-5xl space-y-8 py-8">
        <PostHeader post={post} />
      </div>
    </Container>

        
    );
}

async function getPosts(slug) {
    const query = `*[_type == "projectPost" && slug.current == $slug] {
        title,
        description,
        date,
        "slug":slug.current,
        image,
        content
      }`;

      const posts = await client.fetch(query, {slug});
      return posts;
}
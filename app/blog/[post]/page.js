import Container from "@/app/components/Container";

import BlogPostHeader from "./components/BlogPostHeader";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";


export default async function BlogPost({ params }) {
  // const { post } = params;
  const post = await getBlogPost(params.post);

  
  return (
    <Container>
      <div className="mx-auto max-w-5xl space-y-8 py-8">
      <BlogPostHeader post={post} />
      <hr className="border-sage border-4 rounded-md" />
      <article className="prose md:prose-md prose-primary mx-auto">
          <PortableText value={post.content} components={portableTextComponents} />
      </article>
      </div>
    </Container>
  );
}



async function getBlogPost(slug) {
  const query = `*[_type == "blogPost" && slug.current == $slug][0]  {
    title,
    description,
    date,
    "slug": slug.current,
      image,
      "content": coalesce(content, [])
  }`;

  const posts = await client.fetch(query, { slug });
  console.log(posts);

  if (!posts) {
    return notFound();
  } else {
    return posts;
  }
}


import { urlForImage } from "@/sanity/lib/image";
import { tryGetImageDimensions } from "@sanity/asset-utils";
import Image from "next/image";
import { client } from "@/sanity/lib/client";

const portableTextComponents = {
  types: {
    image: ImageComponent,
  },
};

function ImageComponent({ value }) {
  const { width, height } = tryGetImageDimensions(value);

  return (
    <Image
      src={urlForImage(value)}
      width={width}
      height={height}
      loading="lazy"
      alt=""
      className="mx-auto md:max-w-prose rounded-lg"
      style={{
        aspectRatio: width / height,
      }}
    />
  );
}
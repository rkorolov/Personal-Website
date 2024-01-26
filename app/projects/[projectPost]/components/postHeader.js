export default function BlogPostHeader({ post }) {
    return (
      <header className="text-center space-y-4">
        <h1 className="font-semibold text-4xl">{post.title}</h1>
        <p className="font-medium text-primary-700 text-lg">{post.description}</p>
      </header>
    );
  }
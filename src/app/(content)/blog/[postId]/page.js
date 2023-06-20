import BlogImage from "@/components/blog/BlogImage";
import Introduction from "@/components/blog/Introduction";
import Author from "@/components/blog/Author";
import Categories from "@/components/blog/Categories";

import { getPostData, getSortedPostsData } from "@/lib/posts";
import { notFound } from "next/navigation";

export function generateMetaData({ params }) {
  const posts = getSortedPostsData();
  const { postId } = params;
  const post = posts.find((post) => post.id === postId);
  if (!post) {
    return { title: "Post not found" };
  }

  return { title: post.title };
}

export default async function BlogPage({ params }) {
  const posts = getSortedPostsData();
  const { postId } = params;
  if (!posts.find((post) => post.id === postId)) {
    return notFound();
  }

  const { title, date, blogImage, description, category, author, contentHtml } =
    await getPostData(postId);

  return (
    <div className="bg-white px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <Introduction title={title} date={date} tldr={description} />
        <BlogImage
          imgSrc={blogImage.image}
          imgAlt={blogImage.imageAlt}
          caption={blogImage.imageAlt}
        />
        <article className="mt-10 max-w-3xl">
          <section
            className="markdown"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </article>
        <Categories categories={category} />
        <Author
          imgSrc={author.imageUrl}
          imgAlt={author.imageAlt}
          authorProfile={author.href}
          authorName={author.name}
          title={author.title}
        />
      </div>
    </div>
  );
}

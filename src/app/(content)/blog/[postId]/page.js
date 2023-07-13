import BlogImage from "@/components/blog/BlogImage";
import Introduction from "@/components/blog/Introduction";
import Author from "@/components/blog/Author";
import Categories from "@/components/blog/Categories";

import { getPostData, getSortedPostsData } from "@/lib/posts";
import { notFound } from "next/navigation";

export const revalidate = 86400;

export function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    postId: post.id,
  }));
}

export function generateMetadata({ params: { postId } }) {
  const posts = getSortedPostsData();
  const post = posts.find((post) => post.id === postId);
  const keywords = [].concat(post.keywords);

  if (!post) {
    return {
      title: "Mortgage Fishing | Post not found",
    };
  }

  return {
    title: `Mortgage Fishing | ${post.title}`,
    description: post.description,
    keywords: keywords,
    authors: [{ name: post.author.name, url: post.author.href }],
    creator: post.author.name,
    publisher: post.author.name,
    openGraph: {
      title: `Mortgage Fishing | ${post.title}`,
      description: post.description,
      url: `https://mortgagefishing.com/blog/${post.id}`,
      type: "article",
      article: {
        publishedTime: post.date,
        modifiedTime: post.date,
        authors: [post.author.name],
        tags: keywords,
      },
      images: [
        {
          url: post.blogImage.image,
          width: 500,
          height: 500,
          alt: post.blogImage.imageAlt,
        },
      ],
    },
  };
}

export default async function BlogPage({ params: { postId } }) {
  const posts = getSortedPostsData();
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

import BlogImage from "@/components/blog/BlogImage";
// import H2Title from "@/components/blog/H2Title";
import Introduction from "@/components/blog/Introduction";
// import Paragraph from "@/components/blog/Paragraph";
import Author from "@/components/blog/Author";
import Categories from "@/components/blog/Categories";

import { getPostData, getSortedPostsData } from "../../../../../lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";

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
  const pubDate = new Date(date).toISOString().slice(0, 10);

  return (
    <div className="bg-white px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <Introduction title={title} date={pubDate} tldr={description} />
        <BlogImage
          imgSrc={blogImage.image}
          imgAlt={blogImage.imageAlt}
          caption={blogImage.imageAlt}
        />
        <article className="mt-10 max-w-3xl">
          <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
          <Link href="/">Back to home</Link>
        </article>
        <Categories categories={category} />
        <Author
          imgSrc={author.imageUrl}
          imgAlt={author.imageAlt}
          authorProfile={author.href}
          authorName={author.name}
          title={author.title}
        />

        {/* 
        <div className="mt-10 max-w-3xl">
          <Paragraph
            content="Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
            risus enim. Mattis mauris semper sed amet vitae sed turpis id.
            Id dolor praesent donec est. Odio penatibus risus viverra
            tellus varius sit neque erat velit. Faucibus commodo massa
            rhoncus, volutpat. Dignissim sed eget risus enim. Mattis
            mauris semper sed amet vitae sed turpis id."
          />
          <Paragraph
            content="Et vitae blandit facilisi magna lacus commodo. Vitae sapien
            duis odio id et. Id blandit molestie auctor fermentum
            dignissim. Lacus diam tincidunt ac cursus in vel. Mauris
            varius vulputate et ultrices hac adipiscing egestas. Iaculis
            convallis ac tempor et ut. Ac lorem vel integer orci."
            isSpace
          />
          <H2Title content="No server? No problem." />
          <Paragraph
            content="Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam
            consequat in. Convallis arcu ipsum urna nibh. Pharetra,
            euismod vitae interdum mauris enim, consequat vulputate nibh.
            Maecenas pellentesque id sed tellus mauris, ultrices mauris.
            Tincidunt enim cursus ridiculus mi. Pellentesque nam sed
            nullam sed diam turpis ipsum eu a sed convallis diam."
            isSpace
          />
          <Paragraph
            content="Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus
            enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor
            praesent donec est. Odio penatibus risus viverra tellus varius sit
            neque erat velit."
            isSpace
          />
        </div>
         */}
      </div>
    </div>
  );
}

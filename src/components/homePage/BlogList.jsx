import Image from "next/image";
import Link from "next/link";
import { getSortedPostsData } from "@/lib/posts";

export default function BlogList() {
  const posts = getSortedPostsData().slice(0, 3);
  const featuredPost = posts[0];
  const standardPosts = posts.slice(1, 3);

  return (
    <div className="bg-white pb-12 sm:pb-16">
      <div className="mx-auto max-w-2xl text-center mb-20">
        <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
          From the blog
        </h2>
        <p className="mt-2 text-lg leading-8 text-black">
          Learn how to grow your business with our expert advice.
        </p>
      </div>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-6 px-6 sm:gap-y-16 lg:grid-cols-2 lg:px-8">
        <FeaturedPost post={featuredPost} />
        <div className="mx-auto w-full max-w-2xl border-t border-timber pt-12 sm:pt-16 lg:mx-0 lg:max-w-none lg:border-t-0 lg:pt-0">
          <div className="-my-9">
            {standardPosts.map((post, index) => (
              <StandardPost key={index} post={post} />
            ))}
          </div>
        </div>
      </div>
      <Link href="/blog">
        <div className="mx-auto max-w-xs text-center mt-20 button">
          <p>See all posts</p>
        </div>
      </Link>
    </div>
  );
}

function FeaturedPost({ post }) {
  return (
    <article
      key={post.id}
      className="mx-auto w-full max-w-2xl lg:mx-0 lg:max-w-lg"
    >
      <time dateTime={post.date} className="block text-sm leading-6 text-gray">
        {post.date}
      </time>
      <h2
        id="featured-post"
        className="mt-4 text-3xl font-bold tracking-tight text-black sm:text-4xl"
      >
        {post.title}
      </h2>
      <p className="mt-4 text-lg leading-8 text-gray">{post.description}</p>
      <div className="mt-4 flex flex-col justify-between gap-6 sm:mt-8 sm:flex-row-reverse sm:gap-8 lg:mt-4 lg:flex-col">
        <div className="flex">
          <Link
            href={`blog/${post.id}`}
            className="text-sm font-semibold leading-6 text-sage"
            aria-describedby="featured-post"
          >
            Continue reading <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
        <div className="flex lg:border-t lg:border-timber lg:pt-8">
          <Link
            href={post.author.href}
            className="flex gap-x-2.5 text-sm font-semibold leading-6 text-gray"
          >
            <Image
              src={post.author.imageUrl}
              alt={post.author.imageAlt}
              className="h-6 w-6 flex-none rounded-full"
              width={100}
              height={100}
            />
            {post.author.name}
          </Link>
        </div>
      </div>
    </article>
  );
}

function StandardPost({ post }) {
  return (
    <article key={post.id} className="py-9">
      <div className="group relative max-w-xl">
        <time
          dateTime={post.date}
          className="block text-sm leading-6 text-black"
        >
          {post.date}
        </time>
        <h2 className="mt-2 text-lg font-semibold text-black group-hover:text-gray">
          <Link href={`/blog/${post.id}`}>
            <span className="absolute inset-0" />
            {post.title}
          </Link>
        </h2>
        <p className="mt-4 text-sm leading-6 text-black">{post.description}</p>
      </div>
      <div className="mt-4 flex">
        <a
          href={post.author.href}
          className="relative flex gap-x-2.5 text-sm font-semibold leading-6 text-gray"
        >
          <Image
            src={post.author.imageUrl}
            alt=""
            className="h-6 w-6 flex-none rounded-full"
            width={100}
            height={100}
          />
          {post.author.name}
        </a>
      </div>
    </article>
  );
}

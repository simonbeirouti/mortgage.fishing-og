import PageHeader from "@/components/ui/PageHeader";
import { getSortedPostsData } from "@/lib/posts";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateMetadata({ params }) {
  const posts = getSortedPostsData();
  const pageName =
    params.category.charAt(0).toUpperCase() + params.category.slice(1);

  const filteredPosts = posts.filter((post) =>
    post.category.some(
      (category) => category.name.toLowerCase() === params.category
    )
  );

  if (filteredPosts.length === 0) {
    return {
      title: "Mortgage Fishing | Posts not found",
    };
  }

  return {
    title: `Mortgage Fishing | ${pageName}`,
    description: `The blog posts under the ${pageName} category where you can read our thoughts about ${pageName} within the mortgage industry.`,
    keywords: [
      "business",
      "finance",
      "marketing",
      "free business information",
      "free finance information",
      "free marketing information",
      "free information",
      "mortgage rates",
      "financial industry",
      "mortgage brokers",
    ],
    openGraph: {
      title: `Mortgage Fishing | ${pageName}`,
      description: `The blog posts under the ${pageName} category where you can read our thoughts about ${pageName} within the mortgage industry.`,
      url: `https://mortgagefishing.com/blog/${params.category}`,
      type: "website",
    },
    images: [
      {
        url: "/assets/working-laptop.png",
        width: 500,
        height: 500,
        alt: "two men working at a laptop",
      },
    ],
  };
}

export default function CategoryPage({ params }) {
  const description = `Find a curated list of blogs under the ${params.category} category.`;
  const posts = getSortedPostsData();

  const filteredPosts = posts.filter((post) =>
    post.category.some(
      (category) => category.name.toLowerCase() === params.category
    )
  );

  if (filteredPosts.length === 0) {
    return notFound();
  }

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <PageHeader
          short="Refinded for you"
          page={params.category}
          description={description}
        />
        <div className="mx-auto mt-10 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-timber px-8 pb-8 pt-80 sm:pt-48 lg:pt-80 hover:shadow-xl hover:opacity-90"
            >
              <Image
                src={post.blogImage.image}
                alt={post.blogImage.imageAlt}
                className="absolute inset-0 -z-10 h-full w-full object-cover"
                width={500}
                height={500}
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />

              <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-white">
                <time dateTime={post.date} className="mr-8">
                  {post.date}
                </time>
                <div className="-ml-4 flex items-center gap-x-4">
                  <svg
                    viewBox="0 0 2 2"
                    className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50"
                  >
                    <circle cx={1} cy={1} r={1} />
                  </svg>
                  <div className="flex gap-x-2.5">
                    <Image
                      src={post.author.imageUrl}
                      alt={post.author.imageAlt}
                      className="h-6 w-6 flex-none rounded-full bg-white/10"
                      width={500}
                      height={500}
                    />
                    {post.author.name}
                  </div>
                </div>
              </div>
              <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                <Link href={`blog/${post.id}`}>
                  <span className="absolute inset-0" />
                  {post.title}
                </Link>
              </h3>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

import PageHeader from "@/components/ui/PageHeader";
import Image from "next/image";
import Link from "next/link";
import { getSortedPostsData } from "@/lib/posts";

export const metadata = {
  title: "Mortgage Fishing | Blog",
  description:
    "Explore our comprehensive financial blog for expert advice, practical guides, and valuable insights to enhance your financial well-being.",
  keywords: [
    "mortgages",
    "interest rates",
    "mortgage rates",
    "mortgage brokers",
    "mortgage rates informations",
    "free information",
  ],
  openGraph: {
    title: "Mortgage Fishing | Blog",
    description:
      "Explore our comprehensive financial blog for expert advice, practical guides, and valuable insights to enhance your financial well-being.",
    url: "https://mortgagefishing.com/blog",
    type: "website",
    images: [
      {
        url: "/assets/couple-reading.png",
        width: 500,
        height: 500,
        alt: "Mortgage Fishing Blog",
      },
    ],
  },
};

export default function BlogHomePage() {
  const posts = getSortedPostsData();
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <PageHeader
          short="Learn for free"
          page="Blog"
          description="Explore insightful articles and expert advice on our informative blog."
        />
        <div className="mx-auto mt-10 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
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

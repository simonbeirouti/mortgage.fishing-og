import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import { getSortedPostsData } from "../../../../lib/posts";
import {
  BriefcaseIcon,
  BanknotesIcon,
  PresentationChartBarIcon,
} from "@heroicons/react/20/solid";

export const metadata = {
  title: "Mortgage Fishing | Categories",
  description:
    "Browse curated categories for focused financial resources and in-depth articles, covering various topics to meet your specific interests and needs.",
};

const catImage = {
  business: {
    icon: (
      <BriefcaseIcon
        className="text-gray-300 w-full h-full p-4"
        aria-hidden="true"
      />
    ),
  },
  finance: {
    icon: (
      <BanknotesIcon
        className="text-gray-300 w-full h-full p-4"
        aria-hidden="true"
      />
    ),
  },
  marketing: {
    icon: (
      <PresentationChartBarIcon
        className="text-gray-300 w-full h-full p-4"
        aria-hidden="true"
      />
    ),
  },
};

export default function CategoryHomePage() {
  const posts = getSortedPostsData();
  const uniqueCategories = [];
  const uniqueCategoryNames = [];
  posts.forEach((post) => {
    post.category.forEach((category) => {
      if (!uniqueCategoryNames.includes(category.name)) {
        uniqueCategoryNames.push(category.name);
        uniqueCategories.push(category);
      }
    });
  });

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <PageHeader
          short="Filter by category"
          page="Categories"
          description="Browse through curated categories for focused financial insights and resources."
        />
        <ul
          role="list"
          className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8 py-16"
        >
          {uniqueCategories.map((category, index) => (
            <li key={index} className="relative">
              <Link
                href={category.href}
                className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100"
              >
                {catImage[category.name.toLowerCase()].icon}
                <button
                  type="button"
                  className="absolute inset-0 focus:outline-none"
                >
                  <span className="sr-only">
                    View posts in {category.name} category
                  </span>
                </button>
              </Link>
              <p className="pointer-events-none text-center mt-2 block truncate text-sm font-medium text-gray-900">
                {category.name}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

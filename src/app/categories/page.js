import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import Image from "next/image";
import { categories } from "@/constants";

export default function CategoryHomePage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <PageHeader
          short="Find what you need"
          page="Categories"
          description="Nail down exactly what you want to read about by choosing the categories"
        />
        <ul
          role="list"
          className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8 py-16"
        >
          {categories.map((category, index) => (
            <li key={index} className="relative">
              <Link
                href={category.href}
                className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100"
              >
                <Image
                  src={category.image}
                  alt=""
                  className="pointer-events-none object-cover group-hover:opacity-75"
                  width={300}
                  height={300}
                />
                <button
                  type="button"
                  className="absolute inset-0 focus:outline-none"
                >
                  <span className="sr-only">
                    View post in {category.name} category
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

import { pageIds, postCategories } from "@/lib/functions";

export default function sitemap() {
  const ids = pageIds();
  const categories = postCategories();
  return [
    {
      url: "https://mortgage.fishing",
      lastModified: new Date(),
    },
    {
      url: "https://mortgage.fishing/about",
      lastModified: new Date(),
    },
    {
      url: "https://mortgage.fishing/contact",
      lastModified: new Date(),
    },
    {
      url: "https://mortgage.fishing/careers",
      lastModified: new Date(),
    },
    {
      url: "https://mortgage.fishing/terms-and-conditons",
      lastModified: new Date(),
    },
    {
      url: "https://mortgage.fishing/privacy-policy",
      lastModified: new Date(),
    },
    {
      url: "https://mortgage.fishing/blog",
      lastModified: new Date(),
    },
    ...ids.map((id) => ({
      url: `https://mortgage.fishing/blog/${id}`,
      lastModified: new Date(),
    })),
    {
      url: "https://mortgage.fishing/categories",
      lastModified: new Date(),
    },
    ...categories.map((category) => ({
      url: `https://mortgage.fishing/categories/${category.name.toLowerCase()}`,
      lastModified: new Date(),
    })),
  ];
}

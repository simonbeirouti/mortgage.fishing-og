import Hero from "@/components/homePage/Hero";
import BlogList from "@/components/homePage/BlogList";
import Features from "@/components/homePage/Features";
import Benefits from "@/components/ui/Benefits";

export const metadata = {
  title: "Mortgage Fishing | Home",
  description:
    "Unlock financial freedom with our expert insights and practical solutions. Discover valuable resources to navigate personal and business finance.",
  keywords: [
    "expert insights",
    "financial resources",
    "valuable insights",
    "expert advice",
    "personal and business finance",
    "financial journey",
    "financial freedom",
    "financial future",
    "mortgage broking",
    "mortgage brokers",
    "free knowledge",
    "free information",
  ],
  openGraph: {
    title: "Mortgage Fishing | Home",
    description:
      "Unlock financial freedom with our expert insights and practical solutions. Discover valuable resources to navigate personal and business finance.",
    url: "https://mortgagefishing.com",
    type: "website",
    images: [
      {
        url: "/assets/house-couple.png",
        width: 500,
        height: 500,
        alt: "image of a couple in front of a house",
      },
    ],
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Benefits />
      <BlogList />
    </>
  );
}

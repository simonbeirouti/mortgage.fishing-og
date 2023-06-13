import Hero from "@/components/homePage/Hero";
import BlogList from "@/components/homePage/BlogList";
import Features from "@/components/homePage/Features";
import Benefits from "@/components/ui/Benefits";

export const metadata = {
  title: "Mortgage Fishing | Home",
  description:
    "Unlock financial freedom with our expert insights and practical solutions. Discover valuable resources to navigate personal and business finance.",
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

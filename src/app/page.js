import Hero from "@/components/homePage/Hero";
import BlogList from "@/components/homePage/BlogList";
import Features from "@/components/homePage/Features";
import Benefits from "@/components/ui/Benefits";
import EmailSub from "@/components/ui/EmailSub";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Benefits />
      <BlogList />
      <EmailSub />
    </>
  );
}

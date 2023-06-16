import BlogReco from "@/components/ui/BlogReco";

export default function BlogLayout({ children }) {
  return (
    <section>
      {children}
      <BlogReco />
    </section>
  );
}

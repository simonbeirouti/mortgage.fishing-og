import BlogImage from "@/components/blog/BlogImage";
import H2Title from "@/components/blog/H2Title";
import Introduction from "@/components/blog/Introduction";
import Paragraph from "@/components/blog/Paragraph";
import Author from "@/components/blog/Author";
import Categories from "@/components/blog/Categories";

const category = [
  { name: "Marketing", href: "/categories/marketing" },
  { name: "Mortgages", href: "/categories/mortgages" },
];

export default function BlogPage() {
  return (
    <div className="bg-white px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <Introduction
          short="Deploy faster"
          title="A better workflow"
          date="Mar 16, 2020"
          tldr="Aliquet nec orci mattis amet quisque ullamcorper neque, nibh
                sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque
                id at vitae feugiat egestas ac. Diam nulla orci at in viverra
                scelerisque eget. Eleifend egestas fringilla sapien."
        />
        <BlogImage
          imgSrc="/assets/working-laptop.png"
          imgAlt=" "
          caption="Faucibus commodo massa rhoncus, volutpat."
        />
        <div className="mt-10 max-w-3xl">
          <Paragraph
            content="Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
            risus enim. Mattis mauris semper sed amet vitae sed turpis id.
            Id dolor praesent donec est. Odio penatibus risus viverra
            tellus varius sit neque erat velit. Faucibus commodo massa
            rhoncus, volutpat. Dignissim sed eget risus enim. Mattis
            mauris semper sed amet vitae sed turpis id."
          />
          <Paragraph
            content="Et vitae blandit facilisi magna lacus commodo. Vitae sapien
            duis odio id et. Id blandit molestie auctor fermentum
            dignissim. Lacus diam tincidunt ac cursus in vel. Mauris
            varius vulputate et ultrices hac adipiscing egestas. Iaculis
            convallis ac tempor et ut. Ac lorem vel integer orci."
            isSpace
          />
          <H2Title content="No server? No problem." />
          <Paragraph
            content="Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam
            consequat in. Convallis arcu ipsum urna nibh. Pharetra,
            euismod vitae interdum mauris enim, consequat vulputate nibh.
            Maecenas pellentesque id sed tellus mauris, ultrices mauris.
            Tincidunt enim cursus ridiculus mi. Pellentesque nam sed
            nullam sed diam turpis ipsum eu a sed convallis diam."
            isSpace
          />
          <Paragraph
            content="Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus
            enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor
            praesent donec est. Odio penatibus risus viverra tellus varius sit
            neque erat velit."
            isSpace
          />
        </div>
        <Categories category={category} />
        <Author
          imgSrc="/assets/fish-logo.png"
          imgAlt=""
          authorProfile="#"
          authorName="Simon Beirouti"
          title="Educator"
        />
      </div>
    </div>
  );
}

import PageHeader from "@/components/ui/PageHeader";

export const metadata = {
  title: "Mortgage Fishing | Privacy policy",
  description:
    "Our commitment to safeguarding your privacy. Learn about our data protection practices and how we handle your personal information.",
  keywords: [
    "privacy policy",
    "our commitment to your privacy",
    "data protection practices",
    "handle your personal information",
  ],
  openGraph: {
    title: "Mortgage Fishing | Privacy policy",
    description:
      "Our commitment to safeguarding your privacy. Learn about our data protection practices and how we handle your personal information.",
    url: "https://mortgagefishing.com/privacy-policy",
    type: "website",
  },
};

export default function PrivacyPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <PageHeader
          page="Privacy policy"
          description="Protecting your privacy is our utmost priority. Learn more here."
        />
        <p className="mt-8 text-xl leading-8">
          Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At
          arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae
          feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget.
          Eleifend egestas fringilla sapien.
        </p>
        <p className="mt-6">
          Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus
          enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor
          praesent donec est. Odio penatibus risus viverra tellus varius sit
          neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim
          sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis
          id.
        </p>
        <p className="mt-6">
          Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio
          id et. Id blandit molestie auctor fermentum dignissim. Lacus diam
          tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac
          adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel
          integer orci.
        </p>
        <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-900">
          From beginner to expert in 3 hours
        </h2>
        <p className="mt-6">
          Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat
          in. Convallis arcu ipsum urna nibh. Pharetra, euismod vitae interdum
          mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed
          tellus mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi.
          Pellentesque nam sed nullam sed diam turpis ipsum eu a sed convallis
          diam.
        </p>
        <p className="mt-6">
          Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus
          enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor
          praesent donec est. Odio penatibus risus viverra tellus varius sit
          neque erat velit.
        </p>
        <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-900">
          Everything you need to get up and running
        </h2>
        <p className="mt-6">
          Purus morbi dignissim senectus mattis adipiscing. Amet, massa quam
          varius orci dapibus volutpat cras. In amet eu ridiculus leo sodales
          cursus tristique. Tincidunt sed tempus ut viverra ridiculus non
          molestie. Gravida quis fringilla amet eget dui tempor dignissim.
          Facilisis auctor venenatis varius nunc, congue erat ac. Cras fermentum
          convallis quam.
        </p>
        <p className="mt-6">
          Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus
          enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor
          praesent donec est. Odio penatibus risus viverra tellus varius sit
          neque erat velit.
        </p>
      </div>
    </div>
  );
}

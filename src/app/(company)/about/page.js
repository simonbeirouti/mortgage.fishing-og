import PageHeader from "@/components/ui/PageHeader";
import Values from "@/components/aboutPage/Values";
import Team from "@/components/aboutPage/Team";

export const metadata = {
  title: "Mortgage Fishing | About",
  description:
    "Discover our values and meet our exceptional team. Get insights into our mission, vision, and commitment to empowering your financial journey.",
  keywords: [
    "mortgages",
    "about mortgage fishing",
    "good mortgage brokers",
    "mortgage brokers",
    "mortgage rates information",
    "free information",
  ],
  openGraph: {
    title: "Mortgage Fishing | About",
    description:
      "Discover our values and meet our exceptional team. Get insights into our mission, vision, and commitment to empowering your financial journey.",
    url: "https://mortgagefishing.com/about",
    type: "website",
    images: [
      {
        url: "/assets/group-hugging.png",
        width: 500,
        height: 500,
        alt: "Image of a group of people hugging on a beach",
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <PageHeader
          short="What drives us"
          page="About us"
          description="Discover our values and meet our exceptional team members."
        />
        <Values />
        <Team />
      </div>
    </div>
  );
}

import PageHeader from "@/components/ui/PageHeader";
import Values from "@/components/aboutPage/Values";
import Team from "@/components/aboutPage/Team";

export const metadata = {
  title: "Mortgage Fishing | About",
  description:
    "Discover our values and meet our exceptional team. Get insights into our mission, vision, and commitment to empowering your financial journey.",
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

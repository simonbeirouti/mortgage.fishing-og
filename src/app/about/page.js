import PageHeader from "@/components/ui/PageHeader";
import Values from "@/components/aboutPage/Values";
import Team from "@/components/aboutPage/Team";

export default function AboutPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <PageHeader
          short="What drivesus"
          page="About us"
          description="Nail down exactly what you want to read about by choosing the categories"
        />
        <Values />
        <Team />
      </div>
    </div>
  );
}

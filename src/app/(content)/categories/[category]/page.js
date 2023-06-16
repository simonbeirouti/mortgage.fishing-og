import PageHeader from "@/components/ui/PageHeader";

export default function CategoryPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <PageHeader
          short="Find what you need"
          page="Marketing"
          description="Nail down exactly what you want to read about by choosing the categories"
        />
      </div>
    </div>
  );
}

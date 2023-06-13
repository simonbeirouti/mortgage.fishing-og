import PageHeader from "@/components/ui/PageHeader";

export default function CategoryPage() {
  return (
    <div className="bg-white px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <PageHeader
          short="Find what you need"
          page="Marketing"
          description="Nail down exactly what you want to read about by choosing the categories"
        />
      </div>
    </div>
  );
}

export default function PageHeader({ short, page, description }) {
  return (
    <div className="bg-white px-6 pb-6 sm:pb-8 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-base font-bold leading-7 text-sage-700">{short}</p>
        <h2 className="mt-2 text-4xl font-bold tracking-tight text-black sm:text-6xl">
          {page}
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-500">{description}</p>
      </div>
    </div>
  );
}

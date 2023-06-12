export default function Introduction({ short, title, tldr }) {
  return (
    <>
      <p className="text-base font-semibold leading-7 text-indigo-600">
        {short}
      </p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        {title}
      </h1>
      <p className="mt-6 text-xl leading-8 text-gray-700">{tldr}</p>
    </>
  );
}

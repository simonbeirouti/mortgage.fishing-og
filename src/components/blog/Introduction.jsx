export default function Introduction({ date, title, tldr }) {
  return (
    <>
      <h1 className="my-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        {title}
      </h1>
      <time dateTime={date} className="ext-sm text-gray-700">
        {date}
      </time>
      <p className="mt-6 text-xl leading-8 text-gray-700">{tldr}</p>
    </>
  );
}

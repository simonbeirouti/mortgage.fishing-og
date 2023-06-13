export default function Introduction({ short, date, title, tldr }) {
  const inputDate = date;
  const dateObject = new Date(inputDate);
  const formattedDate = dateObject.toISOString().slice(0, 10);
  return (
    <>
      <p className="text-base font-semibold leading-7 text-indigo-600">
        {short}
      </p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        {title}
      </h1>
      <time dateTime={formattedDate} className="mt-8 text-sm text-gray-700">
        {date}
      </time>
      <p className="mt-6 text-xl leading-8 text-gray-700">{tldr}</p>
    </>
  );
}

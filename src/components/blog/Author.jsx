import Image from "next/image";

export default function Author({
  imgSrc,
  imgAlt,
  authorProfile,
  authorName,
  title,
}) {
  return (
    <div className="relative mt-10 flex items-center gap-x-4">
      <Image
        src={imgSrc}
        alt={imgAlt}
        className="h-10 w-10 rounded-full bg-gray-50"
        width={100}
        height={100}
      />
      <div className="text-sm leading-6">
        <p className="font-semibold text-gray-900">
          <a href={authorProfile}>
            <span className="absolute inset-0" />
            {authorName}
          </a>
        </p>
        <p className="text-gray-600">{title}</p>
      </div>
    </div>
  );
}

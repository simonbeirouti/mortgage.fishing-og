import Image from "next/image";
import { InformationCircleIcon } from "@heroicons/react/20/solid";

export default function BlogImage({ imgSrc, imgAlt, caption }) {
  return (
    <figure className="mt-16">
      <Image
        className="aspect-video rounded-xl bg-gray-50 object-cover"
        src={imgSrc}
        alt={imgAlt}
        width={1000}
        height={1000}
      />
      <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
        <InformationCircleIcon
          className="mt-0.5 h-5 w-5 flex-none text-gray-300"
          aria-hidden="true"
        />
        {caption}
      </figcaption>
    </figure>
  );
}

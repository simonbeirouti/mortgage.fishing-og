import Image from "next/image";

const values = [
  {
    name: "Be world-class",
    description:
      "We strive to provide top-notch financial content, ensuring our readers receive the highest quality information and insights.",
  },
  {
    name: "Share everything you know",
    description:
      "We believe in transparently sharing our knowledge and expertise, empowering our readers with valuable and comprehensive financial information.",
  },
  {
    name: "Always learning",
    description:
      "By continuously expanding our knowledge and staying up-to-date, we bring fresh and relevant perspectives to our readers. Helping you make informed financial decisions.",
  },
  {
    name: "Be supportive",
    description:
      "We foster a supportive environment, offering guidance, encouragement and practical solutions to our readers. Ensuring they feel empowered and confident in their financial choices.",
  },
  {
    name: "Take responsibility",
    description:
      "We take responsibility for the content we produce, ensuring accuracy, reliability and ethical standards. Our readers can trust the information they find on our platform.",
  },
  {
    name: "Enjoy downtime",
    description:
      "We understand the importance of balancing financial matters with personal well-being. We embrace downtime, self-care and enjoyment as integral parts of a healthy financial journey.",
  },
];
export default function Values() {
  return (
    <>
      <div className="mt-10 xl:mx-auto xl:max-w-7xl xl:px-8">
        <Image
          src="/group-hugging.png"
          alt="Friends embracing and celebrating financial freedom and life's milestones on a beach."
          className="aspect-[5/2] w-full object-cover rounded-lg"
          width={1000}
          height={1000}
        />
      </div>

      <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our values
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Our core values drive us to deliver exceptional content that
            empowers and benefits our readers on their financial journey.
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {values.map((value) => (
            <div key={value.name}>
              <dt className="font-semibold text-gray-900">{value.name}</dt>
              <dd className="mt-1 text-gray-300">{value.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </>
  );
}

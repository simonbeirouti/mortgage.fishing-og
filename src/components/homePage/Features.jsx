import {
  BookOpenIcon,
  LightBulbIcon,
  QuestionMarkCircleIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Expert insights",
    description:
      "Get access to in-depth articles and blog posts written by industry experts. Stay informed about the latest trends, strategies, and tips related to personal finance, investments, savings, and more.",
    icon: LightBulbIcon,
  },
  {
    name: "Practical guides and How-To's",
    description:
      "Explore a wide range of practical guides and step-by-step instructions to help you navigate various financial situations. From budgeting and debt management to tax planning and retirement savings, find actionable advice to improve your financial well-being.",
    icon: AcademicCapIcon,
  },
  {
    name: "Case studies and success stories",
    description:
      "Discover real-life case studies and success stories of individuals and businesses who have achieved financial milestones. Learn from their experiences, strategies, and challenges, and gain inspiration and insights to apply to your own financial journey.",
    icon: BookOpenIcon,
  },
  {
    name: "Q&A and expert advice",
    description:
      "Have burning financial questions? Take advantage of our Q&A section, where you can submit your queries and get expert advice from financial professionals. Benefit from personalized recommendations and solutions tailored to your specific needs and circumstances.",
    icon: QuestionMarkCircleIcon,
  },
];

export default function Features() {
  return (
    <div className="bg-white pb-24 sm:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-sage">
            What we can do for you
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-4xl">
            Empower your financial journey: Unleash the potential of{" "}
            <span className="underline underline-offset-4">YOUR</span> wealth
          </p>
          <p className="mt-6 text-lg leading-8 text-black">
            Gain control over your financial future with our comprehensive blog.
            Explore expert insights, practical guides, success stories, and
            personalized advice to unlock the full potential of your wealth.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-black">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon
                      className="h-6 w-6 text-black"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-black">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

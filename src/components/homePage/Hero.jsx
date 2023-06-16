import Image from "next/image";

export default function Hero() {
  return (
    <div className="bg-white">
      <main>
        <div className="overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 pb-32 pt-24 sm:pt-60 lg:px-8 lg:pt-24">
            <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
              <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                <h1 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">
                  Expert insights and solutions
                </h1>
                <p className="relative mt-6 text-lg leading-8 text-black sm:max-w-md lg:max-w-none">
                  Welcome to our comprehensive financial resource hub, where we
                  provide valuable insights, practical solutions, and expert
                  advice to help you navigate the complexities of personal and
                  business finance.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <a href="/blog" className="text-sm button">
                    Check out blog
                  </a>
                </div>
              </div>
              <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                  <div className="relative">
                    <Image
                      src="/assets/couple-reading.png"
                      alt="Senior couple enjoying financial articles and planning for a secure future."
                      className="aspect-[2/3] w-full rounded-xl object-cover shadow-lg"
                      width={200}
                      height={200}
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl" />
                  </div>
                </div>
                <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                  <div className="relative">
                    <Image
                      src="/assets/presentation.png"
                      alt="Expert financial advisor explaining key financial figures and strategies on a whiteboard."
                      className="aspect-[2/3] w-full rounded-xl object-cover shadow-lg"
                      width={200}
                      height={200}
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl" />
                  </div>
                  <div className="relative">
                    <Image
                      src="/assets/ladies-laughing.png"
                      alt="Friends sharing financial success stories and enjoying a relaxed conversation about personal finance."
                      className="aspect-[2/3] w-full rounded-xl object-cover shadow-lg"
                      width={200}
                      height={200}
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl" />
                  </div>
                </div>
                <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                  <div className="relative">
                    <Image
                      src="/assets/laptop-lady.png"
                      alt="Woman seeking financial guidance online, feeling puzzled while exploring financial options."
                      className="aspect-[2/3] w-full rounded-xl object-cover shadow-lg"
                      width={200}
                      height={200}
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl" />
                  </div>
                  <div className="relative">
                    <Image
                      src="/assets/drinking-coffee.png"
                      alt="Woman staying informed and entertained while managing her finances, enjoying a moment of relaxation and financial empowerment."
                      className="aspect-[2/3] w-full rounded-xl object-cover shadow-lg"
                      width={200}
                      height={200}
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

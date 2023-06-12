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
                  We are changing the way people connect.
                </h1>
                <p className="relative mt-6 text-lg leading-8 text-black sm:max-w-md lg:max-w-none">
                  Cupidatat minim id magna ipsum sint dolor qui. Sunt sit in
                  quis cupidatat mollit aute velit. Et labore commodo nulla
                  aliqua proident mollit ullamco exercitation tempor. Sint
                  aliqua anim nulla sunt mollit id pariatur in voluptate cillum.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href="#"
                    className="rounded-md bg-sage-100 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Get started
                  </a>
                  <a
                    href="#"
                    className="text-sm font-semibold leading-6 text-black"
                  >
                    Live demo <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
              <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                  <div className="relative">
                    <Image
                      src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                      alt=""
                      className="aspect-[2/3] w-full rounded-xl object-cover shadow-lg"
                      width={200}
                      height={200}
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white" />
                  </div>
                </div>
                <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                  <div className="relative">
                    <Image
                      src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                      alt=""
                      className="aspect-[2/3] w-full rounded-xl object-cover shadow-lg"
                      width={200}
                      height={200}
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white" />
                  </div>
                  <div className="relative">
                    <Image
                      src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80"
                      alt=""
                      className="aspect-[2/3] w-full rounded-xl object-cover shadow-lg"
                      width={200}
                      height={200}
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white" />
                  </div>
                </div>
                <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                  <div className="relative">
                    <Image
                      src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80"
                      alt=""
                      className="aspect-[2/3] w-full rounded-xl object-cover shadow-lg"
                      width={200}
                      height={200}
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white" />
                  </div>
                  <div className="relative">
                    <Image
                      src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                      alt=""
                      className="aspect-[2/3] w-full rounded-xl object-cover shadow-lg"
                      width={200}
                      height={200}
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white" />
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

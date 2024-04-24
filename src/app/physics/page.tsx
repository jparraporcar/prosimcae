/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Y3OieOeulOB
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Component() {
  return (
    <div className="flex flex-col space-y-16 md:space-y-24 lg:space-y-32">
      <section id="fluid" className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto space-y-4 md:space-y-6">
          <p className="text-gray-500 dark:text-gray-400">
            This page will explore three main topics, each with three
            subsections. We'll dive deep into the details and provide a
            comprehensive understanding of these important subjects.
          </p>
        </div>
      </section>
      <section className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <img
              alt="Topic 1 Image"
              className="mx-auto aspect-video rounded-xl object-cover"
              height={300}
              src="/placeholder.svg"
              width={400}
            />
          </div>
          <div className="order-1 md:order-2 space-y-4 md:space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Topic 1: Exploring the Depths
            </h2>
            <div className="grid gap-4 md:gap-6">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Subsection 1</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Dive into the first aspect of this topic and uncover its
                  intricacies.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Subsection 2</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Explore the second facet of this topic and gain a deeper
                  understanding.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Subsection 3</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Delve into the third aspect of this topic and uncover its
                  hidden complexities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="solid" className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Topic 2: Unraveling the Mysteries
            </h2>
            <div className="grid gap-4 md:gap-6">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Subsection 1</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Delve into the first aspect of this topic and uncover its
                  hidden secrets.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Subsection 2</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Explore the second facet of this topic and gain a deeper
                  understanding.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Subsection 3</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Dive into the third aspect of this topic and uncover its
                  intricacies.
                </p>
              </div>
            </div>
          </div>
          <div>
            <img
              alt="Topic 2 Image"
              className="mx-auto aspect-video rounded-xl object-cover"
              height={300}
              src="/placeholder.svg"
              width={400}
            />
          </div>
        </div>
      </section>
      <section id="thermal" className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div className="order-1 md:order-2 space-y-4 md:space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Topic 3: Unveiling the Wonders
            </h2>
            <div className="grid gap-4 md:gap-6">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Subsection 1</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Explore the first aspect of this topic and uncover its hidden
                  complexities.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Subsection 2</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Dive into the second facet of this topic and gain a deeper
                  understanding.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Subsection 3</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Unravel the third aspect of this topic and discover its
                  intricacies.
                </p>
              </div>
            </div>
          </div>
          <div className="order-2 md:order-1">
            <img
              alt="Topic 3 Image"
              className="mx-auto aspect-video rounded-xl object-cover"
              height={300}
              src="/placeholder.svg"
              width={400}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

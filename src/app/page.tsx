import { Service } from "@/components/custom/Service";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const devData = {
  items: [
    "Integrated Fullstack web development",
    "Server Side Rendering for optimal search engine results",
    "Single Page Application to obtain the best reactive layout",
    "RestAPI design and documentation",
    "Cross-platform mobile app design",
    "Mobile native API integration",
    "Infrastructure on the cloud powered by AWS",
    "Continuous Deployment/Continuous integration",
  ],
  serviceIntro:
    "We specialize in integrated full-stack web development, including server-side rendering for optimal search engine visibility and single-page applications for superior reactive layouts. Our expertise extends to REST API design, comprehensive documentation, and developing cross-platform mobile apps with Ionic. We seamlessly integrate native mobile APIs, and our cloud infrastructure is robustly powered by AWS. With a focus on continuous deployment and integration, we ensure our code is not only easily maintainable but also cleanly readable.",
};

const caeData = {
  items: [
    "Infrastructure on the cloud powered by Simscale",
    "Higly reliable Solid mechanics simulations with Code Aster",
    "Computer Fluid Dynamics (CFD) simulations with OpenFoam",
    "Fast CFD simulations using GPU-based solver PaceFish(r)",
    "Heat transfer effects coupled",
    "We process your custom material and apply it to our model",
    "Postprocessing of desired vector, scalar or tensor fields",
    "Design optimization",
  ],
  serviceIntro:
    "We deliver excellence in engineering with our cloud-based infrastructure powered by Simscale. Our services include solid mechanics simulations utilizing the robust capabilities of Code Aster, and a comprehensive suite of CFD simulations through OpenFoam. For rapid results, we leverage the GPU-based solver, PaceFish®, ensuring quick and accurate CFD analyses. Our expertise extends to heat transfer effects, custom material processing for model applications, and advanced postprocessing of vector, scalar, or tensor fields.",
};

const Home: React.FC = () => {
  return (
    <main className="flex flex-col items-center my-28">
      <div className="flex flex-row justify-center text-slate-700 mb-8 gap-x-14">
        <div className="relative">
          <Image
            src="/images/cae-dev-1.webp"
            alt="Your image description"
            width={450}
            height={450}
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-row justify-center items-center w-5/12">
          <p className=" text-gray-500 text-2xl italic">
            Welcome to ProEngineLabs, where we blend expertise and innovation to
            redefine engineering solutions. Our services encompass from
            integrated full-stack web development to cutting-edge CAE Analysis.
            Whether you are looking to enhance your digital presence or delve
            into advanced engineering simulations, we have the tools and
            knowledge to elevate your projects. Join us as we embark on a
            journey of engineering excellence and technological advancement.
          </p>
        </div>
      </div>
      <Separator orientation="horizontal" className="my-16" />
      <div className="w-full flex flex-row flex-wrap gap-y-20 justify-evenly text-white">
        <Service
          sectionClass=""
          serviceIntro={devData.serviceIntro}
          serviceName="Software Development"
          items={devData.items}
          hrefDiscover="/dev"
        />
        <div>
          <Separator orientation="vertical" />
        </div>
        <Service
          sectionClass=""
          serviceIntro={caeData.serviceIntro}
          serviceName="CAE Analysis"
          items={caeData.items}
          hrefDiscover="/cae"
        />
      </div>
      <Separator orientation="horizontal" className="my-16" />
      <div className="flex flex-row justify-start ml-24 gap-x-12">
        <div>
          <Image
            src="/images/workplace.webp"
            alt="Your image description"
            width={300}
            height={300}
            className="rounded-lg"
          />
        </div>
        <div className=" w-6/12 flex flex-col justify-center gap-y-6 text-xl">
          <p className="text-slate-500">
            Our services offer two flexible options:
          </p>
          <ul className="space-y-2 text-gray-500 dark:text-gray-400">
            <li className="flex items-start">
              <span>
                <svg
                  className="mr-2 h-5 w-5 flex-shrink-0 text-gray-500 dark:text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M9.293 15.707a1 1 0 001.414 0l6-6a1 1 0 00-1.414-1.414L10 13.586l-4.293-4.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              <span>
                Request a custom project where we provide a free budget,
                timeline, and cost estimate after discussing your needs. Once
                approved, we manage the project using the Scrum methodology,
                ensuring regular online meetings for progress updates and
                adaptations.
              </span>
            </li>
            <li className="flex items-start">
              <span>
                <svg
                  className="mr-2 h-5 w-5 flex-shrink-0 text-gray-500 dark:text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M9.293 15.707a1 1 0 001.414 0l6-6a1 1 0 00-1.414-1.414L10 13.586l-4.293-4.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              <span>
                Hire an engineer for a B2B contract, guaranteeing their
                availability throughout the project. Requesting a budget is free
                of charge.
              </span>
            </li>
          </ul>
          <p className="text-slate-500">
            Specific details for each option are discussed on the service
            webpage
          </p>
        </div>
      </div>
    </main>
  );
};

export default Home;

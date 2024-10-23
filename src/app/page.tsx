import { MainSectionIntro } from "@/components/custom/main-section-intro";
import { Service } from "@/components/custom/service";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { StudyCasesSection } from "@/components/custom/study-cases-section";
import { MainSectionTitle } from "@/components/custom/main-section-title";

const caeData = {
  items: [
    "Infrastructure on the cloud powered by Simscale",
    "Higly reliable Solid mechanics simulations with Code Aster",
    "Computer Fluid Dynamics (CFD) simulations with OpenFoam",
    "Fast CFD simulations using GPU-based solver PaceFish(r)",
    "Heat transfer effects coupled",
    "Design optimization",
  ],
  serviceIntro:
    "We deliver excellence in engineering with our cloud-based infrastructure powered by Simscale. Our services include solid mechanics simulations utilizing the robust capabilities of Code Aster, and a comprehensive suite of CFD simulations through OpenFoam. For rapid results, we leverage the GPU-based solver, PaceFish®, ensuring quick and accurate CFD analyses. Our expertise extends to heat transfer effects, custom material processing for model applications, and advanced postprocessing of vector, scalar, or tensor fields.",
};

const studyCasesSections = [
  {
    sectionId: "solid",
    title: "Computer Solid Mechanics (FEM)",
    effectIsActive: true,
    studyCases: [
      {
        studyCaseTitle:
          "Explicit simulation of a pendrive impacting in the ground - part1",
        images: [
          {
            title: "Energy balance",
            description:
              " In this picture we can see an energy balance including kinetic energy and internal energy",
            alt: "Laminar flow analysis",
            height: 500,
            src: "/images/cfd.png",
            width: 500,
            className: "object-contain mx-0 mb-2",
            caption: "Laminar flow analysis",
          },
          {
            title: "Von Misses Stress Distribution",
            description:
              " In this picture we can see The Von Misses stress distribution along the part",
            alt: "vonmisses stress",
            height: 500,
            src: "/images/cfd.png",
            width: 500,
            className: "object-contain mx-0 mb-2",
            caption: "vonmisses stress",
          },
        ],
      },
      {
        studyCaseTitle:
          "Explicit simulation of a pendrive impacting in the ground - part2",
        images: [
          {
            title: "Energy balance",
            description:
              " In this picture we can see an energy balance including kinetic energy and internal energy",
            alt: "Laminar flow analysis",
            height: 500,
            src: "/images/cfd.png",
            width: 500,
            className: "object-contain mx-0 mb-2",
            caption: "Laminar flow analysis",
          },
          {
            title: "Von Misses Stress Distribution",
            description:
              " In this picture we can see The Von Misses stress distribution along the part",
            alt: "vonmisses stress",
            height: 500,
            src: "/images/cfd.png",
            width: 500,
            className: "object-contain mx-0 mb-2",
            caption: "vonmisses stress",
          },
        ],
      },
    ],
  },
  {
    sectionId: "fluid",
    title: "Computer Fluid Dynamics (CFD)",
    effectIsActive: true,
    studyCases: [
      {
        studyCaseTitle: "Study of thermal efficiency within a apartment room",
        images: [
          {
            title: "Stream lines",
            description:
              " In this picture we can see the stream lines going through the room",
            alt: "streamlines",
            height: 500,
            src: "/images/cfd.png",
            width: 500,
            className: "object-contain mx-0 mb-2",
            caption: "streamlines",
          },
          {
            title: "Temperature distribution in the room",
            description:
              " In this picture we can see the temperature distribution in the room",
            alt: "temperaturedistr",
            height: 500,
            src: "/images/cfd.png",
            width: 500,
            className: "object-contain mx-0 mb-2",
            caption: "temperaturedistr",
          },
        ],
      },
    ],
  },
];

const Home: React.FC = () => {
  return (
    <main className="flex flex-col items-center m-28">
      <div id="main-section-intro" className=" text-slate-700 mb-8 pb-4">
        <MainSectionIntro
          descriptionClass="text-gray-500 text-2xl italic text-center"
          descriptionText="At ProSimLabs, we are providing comprehensive Computational Aided Engineering (CAE) solutions that encompass advanced Computational Fluid Dynamics (CFD), Solid Mechanics, and Thermal Management. Our expertise combines technical precision with innovative analysis techniques."
        />
      </div>
      <div id="main-section-title">
        <MainSectionTitle title="Study Cases" />
      </div>
      <div
        id="main-section-study-cases"
        className="flex flex-col mb-7 text-lg"
        style={{ marginTop: "60px" }}
      >
        {studyCasesSections.map((studyCaseSection, index) => (
          <StudyCasesSection
            key={index}
            title={studyCaseSection.title}
            studyCases={studyCaseSection.studyCases}
            effectIsActive={studyCaseSection.effectIsActive}
          />
        ))}
      </div>
      <Separator orientation="horizontal" className="my-16" />
      <h1 className="">Our Services</h1>
      <div className="w-full flex flex-row flex-wrap gap-y-20 justify-evenly text-white">
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
                    fillRule="evenodd"
                    d="M9.293 15.707a1 1 0 001.414 0l6-6a1 1 0 00-1.414-1.414L10 13.586l-4.293-4.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0z"
                    clipRule="evenodd"
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
                    fillRule="evenodd"
                    d="M9.293 15.707a1 1 0 001.414 0l6-6a1 1 0 00-1.414-1.414L10 13.586l-4.293-4.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0z"
                    clipRule="evenodd"
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

// Name and surname

// Job title

// Company

// Email

// Phone number

// Service name (CAE or DEV)

// Service type (B2B or project)

// Request explanation

export default Home;

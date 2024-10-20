import { Intro } from "@/components/custom/intro";
import { Service } from "@/components/custom/Service";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { StudyCases } from "@/components/custom/study-cases";

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

const caeSections = [
  {
    id: "fluid",
    images: [
      {
        alt: "Laminar flow analysis",
        height: 500,
        src: "/images/cfd.png",
        width: 500,
        className: "object-contain mx-0 mb-2",
        caption: "Laminar flow analysis",
      },
      {
        alt: "GPU-Based CFD analysis",
        height: 700,
        src: "/images/lattice.png",
        width: 700,
        className: "object-contain mx-0 mt-14 mb-4",
        caption: "GPU-Based CFD analysis",
      },
    ],
    title: "Computer Fluid Dynamics (CFD)",
    subSections: [
      {
        title: "Incompressible and Compressible Flow",
        description:
          "We provide comprehensive solutions for both incompressible and compressible flows. Our expertise in handling incompressible flow is ideal for applications involving liquids and low-speed gases, where density remains nearly constant. Conversely, our compressible flow analysis is perfect for high-speed applications such as aerospace dynamics, where variations in density and state variables are critical.",
      },
      {
        title: "Laminar Flow and Turbulent Flow",
        description:
          "Depending on the application requirements, we offer simulations of both laminar and turbulent flows. Our laminar flow analysis is suited for flows where the fluid moves in smooth layers, with minimal mixing. Turbulent flow, characterized by chaotic fluid particle movements, is crucial for complex simulations requiring a detailed understanding of fluid behavior under varied conditions.",
      },
      {
        title: "Thermal transport",
        description:
          "Our fluid mechanics services also extend to thermal transport analyses, where we assess the heat transfer in conjunction with fluid flow. This analysis is vital for evaluating the thermal performance of systems in automotive, aerospace, and HVAC applications, ensuring that devices operate efficiently under varying thermal conditions.",
      },
      {
        title: "GPU-Based CFD Solver Using Lattice Boltzmann Method",
        description:
          "Our fluid mechanics analysis employs a state-of-the-art GPU-based Computational Fluid Dynamics (CFD) solver, leveraging the Lattice Boltzmann Method (LBM). This approach significantly accelerates the computation process, enabling us to handle complex simulations with enhanced speed and accuracy. LBM is particularly effective for capturing detailed fluid flow patterns and dynamic behaviors in complex geometries.",
      },
    ],
    effectIsActive: true,
  },
  {
    id: "solid",
    images: [
      {
        alt: "Dynamics analysis",
        height: 500,
        src: "/images/solid.png",
        width: 500,
        className: "object-contain mx-0 mb-4",
        caption: "Dynamics analysis",
      },
      {
        alt: "Modal analysis",
        height: 500,
        src: "/images/modal.png",
        width: 500,
        className: "object-contain mx-0 mt-14",
        caption: "Modal analysis",
      },
    ],
    title: "Solid Mechanics (FEM)",
    subSections: [
      {
        title: "Static Analysis",
        description:
          "Our static analysis capabilities are split into two primary categories: linear and non-linear analyses. Linear static analysis evaluates structures under static, stable loads where the material remains within its elastic limits, ensuring that the deformations are directly proportional to the loads applied. This type of analysis is fundamental for quick checks and design verification in mechanical and structural engineering.",
      },
      {
        title: "Dynamic Analysis",
        description:
          "Dynamic analysis is essential for evaluating the response of structures subject to time-varying loads, such as impacts, oscillations, and other transient forces. We employ sophisticated CAE tools to simulate real-world dynamic conditions, providing insights into how structures will behave under operational stresses, such as vibrations, blasts, and crash impacts. This analysis helps in designing structures that are not only stable but also resilient to dynamic and potentially disruptive forces.",
      },
      {
        title: "Modal Analysis",
        description:
          "Modal analysis focuses on determining the natural vibration characteristics of a structure, such as its natural frequencies and mode shapes. This type of analysis is critical for predicting potential issues with resonance and for designing systems that operate safely within their harmonic response limits. Modal analysis is particularly valuable in automotive, aerospace, and civil engineering projects, where understanding the vibrational properties can prevent failures and optimize product performance.",
      },
    ],
    effectIsActive: true,
  },
  {
    id: "thermal",
    images: [
      {
        alt: "Mixed heat transfer analysis",
        height: 600,
        src: "/images/thermal.jpeg",
        width: 600,
        className: "object-contain mb-2",
        caption: "Mixed heat transfer analysis",
      },
    ],
    title: "Thermal analysis",
    subSections: [
      {
        title: "Conduction",
        description:
          "Our conduction analysis evaluates the heat transfer within and between solid materials without involving material motion. This process is critical for understanding how heat moves through materials like metals, insulation, or building components. We use advanced simulation tools to predict temperature distributions, heat flux, and thermal gradients, essential for optimizing material selection and thickness in heat-sensitive designs.",
      },
      {
        title: "Convection",
        description:
          "Convection analysis is vital for applications where heat transfer occurs between a surface and a moving fluid or gas. This includes natural convection, where the movement is caused by buoyancy forces due to temperature variations, and forced convection, which involves external influences like fans or pumps. Our expertise helps in designing efficient cooling strategies, enhancing heat exchanger performance, and predicting fluid flow and temperature patterns in various engineering systems.",
      },
      {
        title: "Radiation",
        description:
          "Radiation analysis addresses heat transfer through electromagnetic waves, which is critical in environments without direct contact or medium, such as space applications or high-temperature furnaces. We model radiative heat transfer between surfaces and within participating media, allowing for accurate thermal management and control in both vacuum and atmospheric conditions.",
      },
    ],
    effectIsActive: true,
  },
];

const Home: React.FC = () => {
  return (
    <main className="flex flex-col items-center m-28">
      <div className=" text-slate-700 mb-8">
        <Intro
          descriptionClass="text-gray-500 text-2xl italic"
          descriptionText="At ProSimLabs, we are providing comprehensive Computational Aided Engineering (CAE) solutions that encompass advanced Computational Fluid Dynamics (CFD), Solid Mechanics, and Thermal Management. Our expertise combines technical precision with innovative analysis techniques."
        />
      </div>
      <div
        id="study-cases"
        className="mb-7 flex text-lg flex-col space-y-16 md:space-y-24 lg:space-y-32"
      >
        <h1 className="">Study cases</h1>
        <div className="flex flex-col gap-y-8" style={{ marginTop: "60px" }}>
          {caeSections.map((section, index) => (
            <section
              id={section.id}
              key={index}
              className="container px-4 md:px-6 relative -z-50"
            >
              <StudyCases
                title={section.title}
                images={section.images}
                subSections={section.subSections}
                imageContainerClass={`${index === 0 || index == 2 ? "order-last" : ""}`}
                effectIsActive={section.effectIsActive}
              />
            </section>
          ))}
        </div>
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

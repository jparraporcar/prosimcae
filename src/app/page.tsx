import { MainSectionIntro } from "@/components/custom/main-section-intro";
import { Service } from "@/components/custom/service";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { StudyCasesSection } from "@/components/custom/study-cases-section";
import { MainSectionTitle } from "@/components/custom/main-section-title";
import RotatingImageCarousel from "@/components/custom/rotating-image-carousel";

const customEngineering = {
  sectionClass: "bg-gray-100 dark:bg-gray-800",
  serviceName: "Custom Engineering",
  serviceIntro:
    "Comprehensive simulation services tailored to the specific needs of each client. We specialize in providing reliable, cost-effective solutions that address both small-scale problems and large, complex projects. Our custom engineering approach includes flexible engagement models, whether you’re looking for a long-term B2B partnership or a project-based solution. With ProEngineLabs, clients can achieve precise, validated outcomes aligned with their unique engineering challenges and standards.",

  hrefDiscover: "/contact", // Adjust for routing

  items: [
    "Computational Fluid Dynamics (CFD): Expertise in fluid mechanics simulations for internal and external flows, accurately modeling heat transfer phenomena.",
    "Finite Element Analysis (FEM): Static, dynamic, and modal analyses for solid mechanics to enhance structural integrity and predict vibrational behaviors.",
    "Standards Compliance: Tailored solutions for meeting industry standards, ensuring project compliance with required specifications.",
    "Flexible Engineering Solutions: B2B long-term collaboration or project-based services, customizable to fit any project scope and timeline.",
  ],
};

const onDemandEngineering = {
  serviceName: "On-Demand Engineering",
  serviceIntro:
    "Specialized on-demand engineering services, focusing on in-house simulations tailored to the automotive sector. While our initial emphasis is on BiW crash analysis and highly dynamic crash simulations, we aim to remain flexible for future expansions into other engineering areas. This service is designed to ensure that our clients can effectively meet their engineering needs while maintaining control over the simulation process.",
  items: [
    "Dynamic crash simulations emphasizing BiW structures to enhance safety.",
    "Focus on helping clients meet NCAP standards, covering MDB, frontal crash, and ODB tests comprehensively.",
    "Specialized geometry reparation for CFD simulations, ensuring all components are watertight for accurate results.",
    "Comprehensive results post-processing and professional presentations in both English and Spanish for clarity.",
    "Flexible engagement models cater to both small challenges and extensive projects, adapting to client needs.",
  ],
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

const images = [
  {
    src: "/images/open-logos/calculix.jpg",
    alt: "CalculiX",
    description: "Open-source FEA solver for structural analysis.",
  },
  {
    src: "/images/open-logos/lsprepost-logo.png",
    alt: "LS-PrePost",
    description: "Tool for LS-DYNA solver result processing.",
  },
  {
    src: "/images/open-logos/openradioss.jpg",
    alt: "OpenRadioss",
    description: "Dynamic analysis solver for crash simulations.",
  },
  {
    src: "/images/open-logos/paraview-logo.svg",
    alt: "ParaView",
    description: "3D visualization for simulation data.",
  },
  {
    src: "/images/open-logos/prepomax-logo.jpg",
    alt: "PrePoMax",
    description: "Pre-processor for CalculiX solver.",
  },
  {
    src: "/images/open-logos/openfoam-logo.png",
    alt: "OpenFOAM",
    description: "CFD solver for fluid simulations.",
  },
];

const Home: React.FC = () => {
  return (
    <main className="flex flex-col items-center m-28">
      <div id="main-section-intro" className=" text-slate-700 mb-8 pb-4">
        <MainSectionIntro
          descriptionClass="text-gray-500 text-2xl italic text-center"
          descriptionText="At ProEngineLabs, we are providing comprehensive Computational Aided Engineering (CAE) solutions that encompass advanced Computational Fluid Dynamics (CFD), Solid Mechanics, and Thermal Management. Our expertise combines technical precision with innovative analysis techniques."
        />
      </div>
      <div id="main-section-title-our-services">
        <MainSectionTitle title="Our Services" />
      </div>
      <div className="w-full flex flex-row flex-wrap gap-y-20 justify-evenly">
        <Service
          sectionClass=""
          serviceIntro={customEngineering.serviceIntro}
          serviceName={customEngineering.serviceName}
          items={customEngineering.items}
          hrefDiscover="/"
        />
        <Service
          sectionClass="bg-gray-100 mt-6 flex flex-col justify-between"
          serviceName={onDemandEngineering.serviceName}
          serviceIntro={onDemandEngineering.serviceIntro}
          hrefDiscover="/on-demand-engineering"
          items={onDemandEngineering.items}
        />
      </div>
      <Separator orientation="horizontal" className="my-16" />
      <div id="main-section-title-study-cases">
        <MainSectionTitle title="Study Cases" />
      </div>
      <div
        id="main-section-study-cases"
        className="flex flex-col mb-7 text-lg items-center mt-6"
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
      <div id="main-section-title-study-cases">
        <MainSectionTitle title="Technology Stack" />
      </div>
      <div>
        <RotatingImageCarousel images={images} />
      </div>
    </main>
  );
};

// Open-Source Tools and Expertise
// Trusted Open-Source Software
// OpenFOAM for Computational Fluid Dynamics (CFD) simulations
// [Your FEM Software] for Finite Element Method (FEM) analyses
// Why Open-Source?
// Transparency: Full access to methodologies and algorithms
// Community-Driven Excellence: Continuous improvements and updates
// Cost-Effectiveness: No licensing fees reduce project costs
// Flexibility: Customizable to meet specific project requirements
// Scientific Research Supporting Open-Source Tools
// Description
// A collection of peer-reviewed research articles and case studies using open-source software (e.g., OpenFOAM) to successfully tackle real-world engineering challenges.
// Research Highlights
// Example 1: Study on CFD analysis of industrial fluid flow using OpenFOAM
// Example 2: Open-source FEM applications in structural integrity assessment
// Purpose
// Reinforce the credibility of open-source tools by demonstrating their use in various validated academic and industry applications.
// Collaboration Opportunities
// Join Our Network of Professionals
// Invitation for skilled engineers to collaborate on innovative projects.
// CTA Button
// "Submit Your CV" (links to Collaboration Form)
// Contact Us
// For Clients
// Custom Solutions Contact Form
// B2B Partnerships Contact Form
// For Collaborators
// Collaboration Submission Form

// Name and surname

// Job title

// Company

// Email

// Phone number

// Service name (CAE or DEV)

// Service type (B2B or project)

// Request explanation

export default Home;

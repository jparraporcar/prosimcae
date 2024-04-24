import { PageIntro } from "@/components/custom/page-intro";
import { PageSection } from "@/components/custom/page-section";

const sections = [
  {
    Id: "fluid",
    image: {
      alt: "Computer Fluid Dynamics picture",
      height: 400,
      src: "/images/cfd.png",
      width: 400,
    },
    title: "Computer Fluid Dynamics",
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
  },
  {
    Id: "solid",
    image: {
      alt: "Solid Mechanics picture",
      height: 400,
      src: "/images/solid.png",
      width: 400,
    },
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
  },
  {
    Id: "thermal",
    image: {
      alt: "Thermal analysis picture",
      height: 400,
      src: "/images/thermal.jpeg",
      width: 400,
    },
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
        title: "",
        description: "",
      },
      {
        title: "Radiation",
        description:
          "Radiation analysis addresses heat transfer through electromagnetic waves, which is critical in environments without direct contact or medium, such as space applications or high-temperature furnaces. We model radiative heat transfer between surfaces and within participating media, allowing for accurate thermal management and control in both vacuum and atmospheric conditions.",
      },
    ],
  },
];

const CFDPage: React.FC = () => {
  return (
    <div className="my-28 flex text-lg flex-col space-y-16 md:space-y-24 lg:space-y-32">
      <header id="fluid" className="container px-4 md:px-6">
        <PageIntro
          descriptionText="Our Computational Fluid Dynamics (CFD) services employ cutting-edge
            simulation technologies to analyze and optimize fluid behavior in a
            range of applications. From aerodynamics in automotive design to
            convection heat transfer in thermal management systems, our advanced
            CFD solutions help predict complex fluid interactions, pressure
            dynamics, and flow patterns. By leveraging our deep expertise in
            fluid dynamics, we provide precise, actionable insights that enhance
            performance, ensure safety, and drive innovation, addressing the
            specific fluid-related challenges of your projects with customized,
            high-impact solutions."
        />
      </header>
      {sections.map((section, index) => (
        <section id={section.Id} key={index} className="container px-4 md:px-6">
          <PageSection
            title={section.title}
            image={section.image}
            subSections={section.subSections}
            imageContainerClass={`${index === 1 ? "order-last" : ""}`}
          />
        </section>
      ))}
    </div>
  );
};

export default CFDPage;

import { Service } from "@/components/custom/Service";

const devData = {
  items: [
    "Integrated Fullstack web development",
    "Server Side Rendering for optimal search engine results",
    "Single Page Application to obtain the best reactive layout",
    "RestAPI design and documentation",
    "Cross-platform mobile app with Ionic",
    "Mobile native API integration",
    "Infrastructure on the cloud powered by AWS",
    "Continuous Deployment/Continuous integration",
    "Easily mantainable and readable code",
  ],
  serviceIntro:
    "At ProEngineLabs, we specialize in integrated full-stack web development, including server-side rendering for optimal search engine visibility and single-page applications for superior reactive layouts. Our expertise extends to REST API design, comprehensive documentation, and developing cross-platform mobile apps with Ionic. We seamlessly integrate native mobile APIs, and our cloud infrastructure is robustly powered by AWS. With a focus on continuous deployment and integration, we ensure our code is not only easily maintainable but also cleanly readable, setting new standards in software excellence.",
};

const caeData = {
  items: [
    "Infrastructure on the cloud powered by Simscale",
    "Higly scalable infrastructure",
    "Higly reliable Solid mechanics simulations with Code Aster",
    "Wide range of Computer Fluid Dynamics (CFD) simulations with OpenFoam",
    "Fast CFD simulations using GPU-based solver PaceFish(r)",
    "Heat transfer effects coupled",
    "We process your custom material and apply it to our model",
    "Postprocessing of desired vector, scalar or tensor fields",
    "Design optimization",
  ],
  serviceIntro:
    "At ProEngineLabs, we deliver excellence in engineering with our cloud-based infrastructure powered by Simscale. Our services include solid mechanics simulations utilizing the robust capabilities of Code Aster, and a comprehensive suite of CFD simulations through OpenFoam. For rapid results, we leverage the GPU-based solver, PaceFish®, ensuring quick and accurate CFD analyses. Our expertise extends to heat transfer effects, custom material processing for model applications, and advanced postprocessing of vector, scalar, or tensor fields. We are committed to driving design optimization, transforming theoretical models into practical solutions.",
};

const Home: React.FC = () => {
  return (
    <main className="w-full flex flex-row flex-wrap gap-y-20 justify-evenly mt-28">
      <Service
        sectionClass=""
        serviceIntro={devData.serviceIntro}
        serviceName="Software Development"
        items={devData.items}
        hrefDiscover="/dev"
      />
      <Service
        sectionClass=""
        serviceIntro={caeData.serviceIntro}
        serviceName="CAE Analysis"
        items={caeData.items}
        hrefDiscover="/cae"
      />
    </main>
  );
};

export default Home;

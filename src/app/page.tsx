import { MainSectionIntro } from "@/components/custom/main-section-intro";
import { Service } from "../components/custom/service";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { StudyCasesSection } from "@/components/custom/client/study-cases-section";
import { MainSectionTitle } from "@/components/custom/main-section-title";
import RotatingImageCarousel from "@/components/custom/client/rotating-image-carousel";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  comImages,
  customEngineering,
  onDemandEngineering,
  openImages,
  studyCasesSections,
} from "@/lib/content-landing";
import { ContactDialogCustom } from "@/components/custom/contact-dialog-custom";

const Home: React.FC = () => {
  return (
    <main className="flex flex-col items-center m-28">
      <div id="main-section-intro" className=" text-slate-700 mb-8 pb-4">
        <MainSectionIntro
          descriptionContainerClass="appear-fading"
          descriptionClass="text-gray-500 text-2xl italic text-center "
          descriptionText="At ProEngineLabs, we are providing comprehensive Computational Aided Engineering (CAE) solutions that encompass advanced Computational Fluid Dynamics (CFD), Solid Mechanics, and Thermal Management. Our expertise combines technical precision with innovative analysis techniques."
        />
      </div>
      <div id="main-section-title-our-services" className="slide-in-top">
        <MainSectionTitle title="Services" />
      </div>
      <div className="w-full flex flex-row flex-wrap gap-y-20 justify-evenly mt-4">
        <Service
          sectionClass="slide-in-left"
          serviceIntro={customEngineering.serviceIntro}
          serviceName={customEngineering.serviceName}
          items={customEngineering.items}
          hrefDiscover="/"
          dialogElement={<ContactDialogCustom />}
        />
        <Service
          sectionClass="slide-in-right"
          serviceName={onDemandEngineering.serviceName}
          serviceIntro={onDemandEngineering.serviceIntro}
          hrefDiscover="/on-demand-engineering"
          items={onDemandEngineering.items}
          dialogElement={<ContactDialogCustom />}
        />
      </div>
      <Separator orientation="horizontal" className="mt-20 mb-16" />
      <div id="main-section-title-study-cases">
        <MainSectionTitle title="Technology" />
      </div>
      <div className="w-full flex flex-row flex-wrap gap-y-20 justify-evenly">
        <section className="w-5/12 flex flex-col px-6 py-4 mt-2 bg-white dark:bg-gray-800 items-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-50">
            {customEngineering.serviceName}
          </h2>
          <div>
            <RotatingImageCarousel images={openImages} />
          </div>
        </section>
        <section className="w-5/12 flex flex-col px-6 py-4 mt-2 bg-white dark:bg-gray-800 items-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-50">
            {onDemandEngineering.serviceName}
          </h2>
          <div>
            <RotatingImageCarousel images={comImages} />
          </div>
        </section>
      </div>
      <Separator orientation="horizontal" className="mb-16 mt-20" />
      <div id="main-section-title-study-cases">
        <MainSectionTitle title="Study Cases" />
      </div>
      <div
        id="main-section-study-cases"
        className="flex flex-col text-lg items-center mt-6"
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
      <Separator orientation="horizontal" className="mb-20" />
      <div id="main-section-title-study-cases">
        <MainSectionTitle title="Collaborations" />
      </div>
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-6">
          <Card className="bg-white shadow-lg rounded-lg">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-gray-900 text-3xl">
                Join Our Network of Professionals
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 flex flex-col items-center gap-y-4">
              <p className="text-center text-gray-700 text-2xl">
                We invite skilled engineers and simulation experts to
                collaborate on innovative projects.
              </p>
              <ul className="text-gray-700 list-disc list-inside mx-4 text-xl flex flex-col gap-y-3">
                <li>Work on diverse and exciting projects</li>
                <li>Professional growth and skill enhancement</li>
                <li>Flexible collaboration arrangements</li>
              </ul>
              <div className="text-center mt-8">
                <Link href="/collaboration-form">
                  <Button
                    variant="outline"
                    className="border-gray-500 text-gray-700 bg-gray-200 hover:bg-gray-500 text-xl"
                  >
                    Submit Your CV
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
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

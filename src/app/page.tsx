import { MainSectionIntro } from "@/components/custom/main-section-intro";
import { Service } from "../components/custom/service";
import { Separator } from "@/components/ui/separator";
import { StudyCasesSection } from "@/components/custom/client/study-cases-section";
import { MainSectionTitle } from "@/components/custom/main-section-title";
import { RotatingImageCarousel } from "@/components/custom/client/rotating-image-carousel";
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
import { ContactDialogOndemand } from "@/components/custom/contact-dialog-ondemand";
import { ResumeUploadDialog } from "@/components/custom/resume-upload-dialog";
import { CarouselWrapper } from "@/components/custom/client/carousel-wrapper";

const Home: React.FC = () => {
  return (
    <main className="w-full flex flex-col items-center max-md:mt-0 overflow-x-hidden mt-12">
      <div id="main-section-intro" className=" text-slate-700 mb-8 mt-16 pb-4">
        <MainSectionIntro
          descriptionContainerClass="appear-fading"
          descriptionClass="text-gray-500 text-2xl max-md:text-base max-md:px-6 px-3 max-md:px-4 italic text-center max-md:mt-10 "
          descriptionText="At prosimcae, we are providing comprehensive Computational Aided Engineering (CAE) solutions that encompass advanced Computational Fluid Dynamics (CFD), Solid Mechanics, and Thermal Management. Our expertise combines technical precision with innovative analysis techniques."
        />
      </div>
      <div id="main-section-title-services" className="slide-in-top section">
        <MainSectionTitle
          title="Services"
          titleContainerClass="max-md:text-3xl"
        />
      </div>
      <div className="w-full flex flex-row max-md:flex-col flex-wrap gap-y-20 max-md:gap-y-4 justify-evenly max-md:items-center mt-4">
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
          dialogElement={<ContactDialogOndemand />}
        />
      </div>
      <Separator orientation="horizontal" className="mt-20 mb-16" />
      <div id="main-section-title-technology" className="section">
        <MainSectionTitle
          title="Technology"
          titleContainerClass="max-md:text-3xl"
        />
      </div>
      <div className="w-full flex flex-row max-lg:flex-col flex-wrap gap-y-20 max-lg:gap-y-0 justify-evenly max-lg:items-center">
        <section className="w-6/12 max-md:h-[300px] max-md:w-full flex flex-col px-6 max-md:px-3 py-4 mt-2 bg-white dark:bg-gray-800 items-center max-md:justify-center">
          <h2 className="text-3xl max-md:text-2xl font-bold text-gray-900 dark:text-gray-50">
            {customEngineering.serviceName}
          </h2>
          <div>
            <CarouselWrapper images={openImages} />
          </div>
        </section>
        <section className="w-6/12 max-md:h-[300px] max-md:w-full flex flex-col px-6 max-md:px-3 py-4 mt-2 bg-white dark:bg-gray-800 items-center max-md:justify-center">
          <h2 className="text-3xl max-md:text-2xl font-bold text-gray-900 dark:text-gray-50">
            {onDemandEngineering.serviceName}
          </h2>
          <div>
            <CarouselWrapper images={comImages} />
          </div>
        </section>
      </div>
      <Separator
        orientation="horizontal"
        className="mb-16 mt-20 max-md:mt-10"
      />
      <div id="main-section-title-study-cases" className="section">
        <MainSectionTitle
          title="Study Cases"
          titleContainerClass="max-md:text-3xl"
        />
      </div>
      <div
        id="study-cases-container"
        className="flex flex-col text-lg items-center mt-6 max-md:w-full w-11/12"
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
      <div id="main-section-title-collaborations" className="section">
        <MainSectionTitle
          title="Collaborations"
          titleContainerClass="max-md:text-3xl"
        />
      </div>
      <section className="bg-white py-12">
        <div className="container mx-auto px-6">
          <Card className="bg-white shadow-lg rounded-lg">
            <CardHeader className="text-center pb-6 max-md:px-3">
              <CardTitle className="text-gray-900 text-3xl max-md:text-2xl">
                Join Our Network of Professionals
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 flex flex-col items-center gap-y-4 max-md:px-3">
              <p className="text-center text-gray-700 text-xl max-md:text-xl">
                We invite skilled engineers and simulation experts to
                collaborate on innovative projects.
              </p>
              <ul className="text-gray-700 list-disc list-inside mx-4 text-xl max-md:text-xs flex flex-col gap-y-3">
                <li>Work on diverse and exciting projects</li>
                <li>Professional growth and skill enhancement</li>
                <li>Flexible collaboration arrangements</li>
              </ul>
              <div>
                <ResumeUploadDialog />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      <Separator orientation="horizontal" className="mb-20" />
    </main>
  );
};

export default Home;

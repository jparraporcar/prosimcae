import { MainSectionIntro } from "@/components/custom/main-section-intro";
import { Service } from "../components/custom/service";
import { Separator } from "@/components/ui/separator";
import { StudyCasesSection } from "@/components/custom/client/study-cases-section";
import { MainSectionTitle } from "@/components/custom/main-section-title";
import RotatingImageCarousel from "@/components/custom/client/rotating-image-carousel";
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
import Footer from "@/components/custom/footer";

const Home: React.FC = () => {
  return (
    <main className="flex flex-col items-center mt-24">
      <div id="main-section-intro" className=" text-slate-700 mb-8 pb-4">
        <MainSectionIntro
          descriptionContainerClass="appear-fading"
          descriptionClass="text-gray-500 text-2xl italic text-center "
          descriptionText="At ProEngineLabs, we are providing comprehensive Computational Aided Engineering (CAE) solutions that encompass advanced Computational Fluid Dynamics (CFD), Solid Mechanics, and Thermal Management. Our expertise combines technical precision with innovative analysis techniques."
        />
      </div>
      <div id="main-section-title-services" className="slide-in-top section">
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
          dialogElement={<ContactDialogOndemand />}
        />
      </div>
      <Separator orientation="horizontal" className="mt-20 mb-16" />
      <div id="main-section-title-technology" className="section">
        <MainSectionTitle title="Technology" />
      </div>
      {/* <div className="w-full flex flex-row flex-wrap gap-y-20 justify-evenly"> */}
      {/* <section className="w-5/12 flex flex-col px-6 py-4 mt-2 bg-white dark:bg-gray-800 items-center">
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
      </div> */}
      <Separator orientation="horizontal" className="mb-16 mt-20" />
      <div id="main-section-title-study-cases" className="section">
        <MainSectionTitle title="Study Cases" />
      </div>
      {/* <div className="flex flex-col text-lg items-center mt-6">
        {studyCasesSections.map((studyCaseSection, index) => (
          <StudyCasesSection
            key={index}
            title={studyCaseSection.title}
            studyCases={studyCaseSection.studyCases}
            effectIsActive={studyCaseSection.effectIsActive}
          />
        ))}
      </div> */}
      <Separator orientation="horizontal" className="mb-20" />
      <div id="main-section-title-collaborations" className="section">
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
              <div>
                <ResumeUploadDialog />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      <Separator orientation="horizontal" className="mb-20" />
      <section className="w-full">
        <Footer />
      </section>
    </main>
  );
};

export default Home;

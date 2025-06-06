import { MainSectionIntro } from "@/components/custom/main-section-intro";
import { Service } from "../../components/custom/service";
import { Separator } from "@/components/ui/separator";
import { StudyCasesSection } from "@/components/custom/client/study-cases-section";
import { MainSectionTitle } from "@/components/custom/main-section-title";
import {
  comImages,
  customEngineering,
  mainSectionIntroDescription,
  mainSectionTitles,
  onDemandEngineering,
  openImages,
  studyCasesSections,
} from "@/lib/content";

import ContactDialogCustom from "@/components/custom/client/contact-dialog-custom";
import ContactDialogOndemand from "@/components/custom/client/contact-dialog-ondemand";
import CarouselWrapper from "@/components/custom/client/carousel-wrapper";
import AboutProsimcaeSection from "@/components/custom/about-prosimcae-section";
import JoinNetworkSection from "@/components/custom/join-network-section";
import { useTranslations } from "next-intl";
import { BlogEntriesSection } from "@/components/custom/blog-entries-section";

const Home = () => {
  const t = useTranslations();

  return (
    <main className="w-full flex flex-col items-center max-md:mt-0 overflow-x-hidden mt-12">
      <MainSectionIntro descriptionText={mainSectionIntroDescription} />
      <MainSectionTitle
        id="main-section-title-services"
        title={mainSectionTitles.simulationServices}
        titleClass="slide-in-top section"
      />
      <section className="w-full flex flex-row max-md:flex-col flex-wrap gap-y-20 max-md:gap-y-8 justify-evenly max-md:items-center mt-4">
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
      </section>
      <Separator
        orientation="horizontal"
        className="mt-16 mb-12 max-md:mt-12 max-md:mb-8"
      />
      <MainSectionTitle
        title={mainSectionTitles.howWeWork}
        id="main-section-title-technology"
        titleClass="section"
      />
      <section className="w-full flex flex-row max-lg:flex-col flex-wrap gap-y-20 max-lg:gap-y-0 justify-evenly max-lg:items-center">
        <div className="w-6/12 max-md:h-[300px] max-md:w-full flex flex-col px-6 max-md:px-3 py-0 mt-2 bg-white dark:bg-gray-800 items-center max-md:justify-center">
          <h2 className="text-3xl max-md:text-2xl font-bold text-gray-900 dark:text-gray-50">
            {t(customEngineering.serviceName)}
          </h2>
          <div className="-mt-28 mr-32 max-md:mr-0 max-md:mt-0">
            <CarouselWrapper images={openImages} />
          </div>
        </div>
        <div className="w-6/12 max-md:h-[300px] max-md:w-full flex flex-col px-6 max-md:px-3 py-0 mt-2 bg-white dark:bg-gray-800 items-center max-md:justify-center">
          <h2 className="text-3xl max-md:text-2xl font-bold text-gray-900 dark:text-gray-50">
            {t(onDemandEngineering.serviceName)}
          </h2>
          <div className="-mt-28 mr-32 max-md:mr-0 max-md:mt-0">
            <CarouselWrapper images={comImages} />
          </div>
        </div>
      </section>
      <Separator
        orientation="horizontal"
        className="mb-16 -mt-4 max-md:mt-4 max-md:mb-12"
      />
      <MainSectionTitle
        title={mainSectionTitles.caseStudies}
        id="main-section-title-study-cases"
        titleClass="section"
      />
      <section
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
      </section>
      <Separator orientation="horizontal" className="mb-10 max-md:mb-8" />
      <MainSectionTitle
        title={mainSectionTitles.blog}
        id="main-section-title-blog"
        titleClass="section"
      />
      <BlogEntriesSection />
      <Separator orientation="horizontal" className="mb-10 mt-14 max-md:mb-8" />
      <MainSectionTitle
        title={mainSectionTitles.partnerWithUs}
        id="main-section-title-collaborations"
        titleClass="section"
      />
      <JoinNetworkSection />
      <Separator orientation="horizontal" className="mb-8 mt-14" />
      <MainSectionTitle
        title={mainSectionTitles.aboutProsimcae}
        id="main-section-title-about-prosimcae"
        titleClass="section"
      />
      <AboutProsimcaeSection />
    </main>
  );
};

export default Home;

import { Separator } from "@/components/ui/separator";

const LegalNotice: React.FC = () => {
  return (
    <main className="w-full flex flex-col items-center px-6 md:px-12 py-8 text-gray-700">
      <header className="w-full max-w-4xl text-center mb-8 mt-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Legal Notice</h1>
        <p className="text-lg md:text-xl">
          Learn about the legal framework governing the use of Prosimcae&apos;s
          website and services.
        </p>
      </header>

      <section className="w-full max-w-4xl mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Introduction
        </h2>
        <p className="mb-4">
          This website, operated under the name <strong>Prosimcae</strong>,
          serves as a platform for providing engineering and simulation
          services. Its primary purpose is to inform users about the services
          offered, facilitate communication, and showcase examples of work.
        </p>
        <p>
          In addition to its current focus on service provision, the website may
          be expanded in the future to include educational content, professional
          consultations, and other resources aimed at supporting engineering
          professionals and students.
        </p>
      </section>

      <Separator orientation="horizontal" className="w-full max-w-4xl mb-12" />

      <section className="w-full max-w-4xl mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Company Information
        </h2>
        <p className="mb-4">
          The website <strong>Prosimcae</strong> is operated by an independent
          freelance professional specializing in engineering simulations.
          Prosimcae conducts its operations through legally binding B2B
          agreements with other professionals and companies, ensuring compliance
          with the applicable laws of the countries involved.
        </p>
        <p>
          The business will be formally registered as a freelance entity upon
          securing its first project. For further inquiries, please refer to the
          contact information below.
        </p>
      </section>

      <Separator orientation="horizontal" className="w-full max-w-4xl mb-12" />

      <section className="w-full max-w-4xl mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Disclaimer About Content
        </h2>
        <p className="mb-4">
          The content provided on the Prosimcae website, including simulations,
          examples, and informational materials, is intended for general
          informational purposes only. While the simulations showcased are
          conducted with the highest accuracy and precision, they are not
          designed for manufacturing, direct application, or any unauthorized
          use without proper consultation with Prosimcae.
        </p>
        <p className="mb-4">
          Customers may request Non-Disclosure Agreements (NDAs) to define the
          extent of information shared and the terms of confidentiality.
          Prosimcae will provide specific details about how simulations are
          used, their scope, and any other relevant information based on the
          customer’s requirements. All actions are carried out with the
          customer’s explicit consent and knowledge.
        </p>
        <p>
          Prosimcae operates under legally binding B2B agreements for all
          professional services, ensuring compliance with the applicable laws of
          the countries involved.
        </p>
      </section>

      <Separator orientation="horizontal" className="w-full max-w-4xl mb-12" />

      <section className="w-full max-w-4xl mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Governing Law
        </h2>
        <p className="mb-4">
          The governing law for Prosimcae is the law of Spain. All website use,
          services, and agreements provided by Prosimcae are subject to Spanish
          legal regulations.
        </p>
        <p>
          For international B2B agreements, the terms of collaboration will also
          be governed by the applicable laws of the countries involved. Any
          disputes arising from these agreements will be resolved in accordance
          with the agreed jurisdiction outlined in the respective contract.
        </p>
      </section>

      <Separator orientation="horizontal" className="w-full max-w-4xl mb-12" />

      <section className="w-full max-w-4xl mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Contact Information
        </h2>
        <p>
          For inquiries related to this Legal Notice or the use of the Prosimcae
          website, you can contact us at:
        </p>
        <p>
          **Email**:{" "}
          <a
            href="mailto:info@prosimcae.com"
            className="text-blue-600 hover:underline"
          >
            info@prosimcae.com
          </a>
        </p>
      </section>
    </main>
  );
};

export default LegalNotice;

// app/terms-of-service/page.tsx
import { Separator } from "@/components/ui/separator";

const TermsOfService: React.FC = () => {
  return (
    <main className="w-full flex flex-col items-center px-6 md:px-12 py-8 text-gray-700">
      <header className="w-full max-w-4xl text-center mb-8 mt-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Terms of Service
        </h1>
        <p className="text-lg md:text-xl">
          Please review the terms governing your use of Prosimcae&apos;s website
          and services.
        </p>
      </header>

      <section className="w-full max-w-4xl mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Introduction
        </h2>
        <p className="mb-4">
          Welcome to Prosimcae! These Terms of Service govern your access to and
          use of our website and services. By accessing or using our website,
          you agree to comply with these terms.
        </p>
        <p className="mb-4">
          The simulations and examples displayed on our website are intended
          solely for informational purposes. While these simulations are
          performed using advanced methodologies with the highest accuracy, they
          are not suitable for manufacturing, extrapolation, or comparative
          analysis. These examples represent a small subset of possibilities and
          serve to showcase Prosimcae&apos;s capabilities.
        </p>
        <p>
          All content, including images, media, and simulation results, is
          proprietary to Prosimcae. Unauthorized copying, reproduction, or
          distribution in any form is strictly prohibited.
        </p>
      </section>

      <Separator orientation="horizontal" className="w-full max-w-4xl mb-12" />

      <section className="w-full max-w-4xl mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Use of Website
        </h2>
        <p className="mb-4">
          Users are welcome to browse, view content, and interact with the
          Prosimcae website to learn more about our services. By using this
          website, you agree to do so in a lawful and respectful manner.
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>
            You may not reproduce, copy, or redistribute website content,
            including simulations, images, or media, without explicit permission
            from Prosimcae.
          </li>
          <li>
            Misuse of contact forms, such as for spam or false inquiries, is
            strictly prohibited.
          </li>
          <li>
            Attempting to gain unauthorized access to any part of the website or
            its systems is not allowed.
          </li>
        </ul>
        <p>
          Prosimcae reserves the right to take appropriate action if misuse of
          the website is detected.
        </p>
      </section>

      <Separator orientation="horizontal" className="w-full max-w-4xl mb-12" />

      <section className="w-full max-w-4xl mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Intellectual Property
        </h2>
        <p className="mb-4">
          All content displayed on the Prosimcae website, including but not
          limited to simulations, images, text, and media, is the exclusive
          property of Prosimcae and is protected by copyright and other
          intellectual property laws.
        </p>
        <p>
          Users are permitted to view and interact with the content solely for
          informational purposes. Any reproduction, redistribution,
          modification, or unauthorized use of this content, in part or in
          whole, without prior written consent from Prosimcae, is strictly
          prohibited.
        </p>
      </section>

      <Separator orientation="horizontal" className="w-full max-w-4xl mb-12" />

      <section className="w-full max-w-4xl mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Disclaimer</h2>
        <p className="mb-4">
          The simulations and examples displayed on the Prosimcae website are
          provided for informational purposes only. While these simulations are
          conducted with the highest level of accuracy and precision, they are
          not intended for manufacturing, extrapolation, or comparative
          analysis.
        </p>
        <p>
          Prosimcae does not guarantee that the results displayed represent all
          possible scenarios or outcomes. Users are advised to consult with
          Prosimcae for detailed, case-specific services.
        </p>
      </section>

      <Separator orientation="horizontal" className="w-full max-w-4xl mb-12" />

      <section className="w-full max-w-4xl mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Limitation of Liability
        </h2>
        <p className="mb-4">
          Prosimcae provides its website and content on an &quot;as is&quot;
          basis and ensures that the simulations and examples displayed are
          conducted with the highest level of accuracy and precision.
        </p>
        <p>
          Prosimcae shall not be held liable for any direct, indirect,
          incidental, consequential, or punitive damages arising from:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>The use or inability to use the website.</li>
          <li>Reliance on any information provided on the website.</li>
          <li>
            Any unauthorized application or misuse of the content, including
            simulations or examples.
          </li>
        </ul>
      </section>

      <Separator orientation="horizontal" className="w-full max-w-4xl mb-12" />

      <section className="w-full max-w-4xl mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Contact Information
        </h2>
        <p>
          For inquiries about these Terms of Service, please contact us via
          email at{" "}
          <a
            href="mailto:info@prosimcae.com"
            className="text-blue-600 hover:underline"
          >
            info@prosimcae.com
          </a>
          .
        </p>
      </section>
    </main>
  );
};

export default TermsOfService;

// app/privacy-policy/page.tsx
import { Separator } from "@/components/ui/separator";

const PrivacyPolicy: React.FC = () => {
  return (
    <main className="w-full flex flex-col items-center px-6 md:px-12 py-8 text-gray-700 mt-16">
      <header className="w-full max-w-4xl text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-lg md:text-xl">
          Learn how we collect, use, and protect your data at Prosimcae.
        </p>
      </header>

      <section className="w-full max-w-4xl mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Data Collection
        </h2>
        <p className="mb-4">
          Prosimcae collects the following types of data to provide and improve
          its services:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>Custom Engineering Service Form:</strong> Company Name,
            Company Country, Contact Name, Contact Email, and Project
            Complexity.
          </li>
          <li>
            <strong>On-Demand Engineering Service Form:</strong> Company Name,
            Company Country, Contact Name, Contact Email, Defined Project
            Duration, Expected Project Duration, Project Complexity, Estimated
            Deadline, and Project Explanation.
          </li>
        </ul>
        <p>
          Cookies are used to enhance user experience and collect analytics data
          for improving our services.
        </p>
      </section>

      <Separator orientation="horizontal" className="w-full max-w-4xl mb-12" />

      <section className="w-full max-w-4xl mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Purpose of Data Use
        </h2>
        <p className="mb-4">
          The data collected via forms is used to gain an initial understanding
          of the project&apos;s characteristics and evaluate how it aligns with
          our schedule and service capabilities.
        </p>
        <p>
          Cookies are utilized to analyze user interactions with the website,
          enhance and personalize user experience, and adapt the website to
          better meet user needs.
        </p>
      </section>

      <Separator orientation="horizontal" className="w-full max-w-4xl mb-12" />

      <section className="w-full max-w-4xl mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Third-Party Sharing
        </h2>
        <p className="mb-4">
          Prosimcae may share project-related data with trusted collaborators
          and third parties under specific circumstances:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>Collaborators:</strong> Project details shared with
            professional collaborators engaged on a B2B basis.
          </li>
          <li>
            <strong>Simulation Services:</strong> Trusted third-party services
            used for simulations requiring additional computational capacity.
          </li>
          <li>
            <strong>Customer Data Exchange:</strong> Necessary project files
            exchanged securely to ensure project execution.
          </li>
        </ul>
        <p>
          Customers interested in creating a Non-Disclosure Agreement (NDA) can
          discuss it with us directly.
        </p>
      </section>

      <Separator orientation="horizontal" className="w-full max-w-4xl mb-12" />

      <section className="w-full max-w-4xl mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">User Rights</h2>
        <p className="mb-4">
          Users have the right to request the deletion of any data they have
          provided, including exchanged media, by contacting us via email at{" "}
          <a
            href="mailto:info@prosimcae.com"
            className="text-blue-600 hover:underline"
          >
            info@prosimcae.com
          </a>
          .
        </p>
        <p>
          Data necessary for ongoing projects will not be deleted until the
          project&apos;s completion.
        </p>
      </section>

      <Separator orientation="horizontal" className="w-full max-w-4xl mb-12" />

      <section className="w-full max-w-4xl mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Contact Information
        </h2>
        <p>
          For inquiries or to exercise your rights regarding data, please
          contact us via email at{" "}
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

export default PrivacyPolicy;

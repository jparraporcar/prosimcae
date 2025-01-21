// app/cookie-policy/page.tsx
import { Separator } from "@/components/ui/separator";

const CookiePolicy: React.FC = () => {
  return (
    <main className="w-full flex flex-col items-center px-6 md:px-12 py-8 text-gray-700">
      <header className="w-full max-w-4xl text-center mb-8 mt-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Cookie Policy</h1>
        <p className="text-lg md:text-xl">
          Learn how cookies are used to enhance your experience at Prosimcae.
        </p>
      </header>

      <section className="w-full max-w-4xl mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Introduction
        </h2>
        <p className="mb-4">
          Cookies are small text files stored on your device when you visit a
          website. At Prosimcae, we use cookies to analyze how users interact
          with our website, improve user experience, and optimize our services.
          These cookies also provide insights into user locations, which help us
          understand where interest in our services originates. While some of
          this data supports marketing efforts, our primary goal is to enhance
          the quality of our services.
        </p>
      </section>

      <Separator orientation="horizontal" className="w-full max-w-4xl mb-12" />

      <section className="w-full max-w-4xl mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Types of Cookies Used
        </h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>Analytics Cookies:</strong> These cookies help us understand
            how users interact with our website. They provide insights into user
            behavior, such as pages visited, time spent on the site, and user
            location, enabling us to analyze trends and improve functionality.
          </li>
          <li>
            <strong>Marketing Cookies (Indirectly):</strong> While no dedicated
            marketing cookies are used, analytics data indirectly supports
            marketing efforts by providing insights into visitor interest and
            geographic location.
          </li>
        </ul>
      </section>

      <Separator orientation="horizontal" className="w-full max-w-4xl mb-12" />

      <section className="w-full max-w-4xl mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Consent and Managing Cookies
        </h2>
        <p className="mb-4">
          When you visit our website, you are presented with a cookie consent
          banner that allows you to accept or reject the use of cookies. Your
          choice is respected, and only the cookies you consent to are used. You
          can update your preferences at any time by revisiting the banner on
          our website.
        </p>
      </section>

      <Separator orientation="horizontal" className="w-full max-w-4xl mb-12" />

      <section className="w-full max-w-4xl mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Third-Party Cookies
        </h2>
        <p className="mb-4">
          We use third-party cookies from Google Analytics to collect
          information about how users interact with our website. These cookies
          help us analyze website traffic, user behavior, and other metrics to
          improve functionality and user experience. Google Analytics processes
          data according to its own privacy policies, which we encourage you to
          review for more information. You can learn more at{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Google’s Privacy Policy
          </a>
          .
        </p>
      </section>

      <Separator orientation="horizontal" className="w-full max-w-4xl mb-12" />

      <section className="w-full max-w-4xl mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Contact Information
        </h2>
        <p>
          For inquiries about this Cookie Policy or how cookies are used on our
          website, please contact us via email at{" "}
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

export default CookiePolicy;

"use client";

import { PageIntro } from "@/components/custom/page-intro";
import { DevPageSection } from "@/components/custom/dev-page/dev-page-section";
import { Separator } from "@/components/ui/separator";
const devSections = [
  {
    id: "front-end",
    title: "Front-end Development",
    subSections: [
      {
        title: "React",
        description:
          "React is a JavaScript library for building user interfaces. It allows you to compose complex UIs from small and isolated pieces of code called components. React's declarative approach makes it easier to reason about your code and build interactive user interfaces efficiently.",
        image: {
          alt: "React icon",
          height: 200,
          src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
          width: 200,
          className: "object-contain mx-0 mb-2",
          caption: "React",
        },
      },
      {
        title: "Vue",
        description:
          "Vue is a progressive JavaScript framework for building interactive web interfaces. It provides data-reactive components with a simple and flexible API. Vue's focus on the core library, with an accompanying ecosystem of libraries and tools, makes it a versatile choice for building web applications.",
        image: {
          alt: "Vue icon",
          height: 200,
          src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg",
          width: 200,
          className: "object-contain mx-0 mb-2",
          caption: "React",
        },
      },
      {
        title: "Typescript",
        description:
          "TypeScript is a superset of JavaScript that adds optional static typing and other features to the language. It helps you write safer and more maintainable code by catching errors at compile time. TypeScript's tooling and community support make it a popular choice for large-scale JavaScript applications.",
        image: {
          alt: "Typescript",
          height: 200,
          src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
          width: 200,
          className: "object-contain mx-0 mb-2",
          caption: "Typescript",
        },
      },
      {
        title: "React Redux Toolkit",
        description:
          "React Redux Toolkit is the official, opinionated, batteries-included toolset for efficient Redux development. It provides a set of tools and best practices to help you write Redux logic more easily and efficiently. Redux Toolkit's approach simplifies common Redux tasks and encourages best practices for managing state in React applications.",
        image: {
          alt: "React Redux Toolkit",
          height: 200,
          src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
          width: 200,
          className: "object-contain mx-0 mb-2",
          caption: "React Redux Toolkit",
        },
      },
      {
        title: "SASS",
        description:
          "SASS (Syntactically Awesome Style Sheets) is a CSS preprocessor that adds power and elegance to the basic language. It allows you to use variables, nested rules, mixins, functions, and more, all with a fully CSS-compatible syntax. SASS helps keep your stylesheets well-organized and maintainable.",
        image: {
          alt: "SASS",
          height: 200,
          src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg",
          width: 200,
          className: "object-contain mx-0 mb-2",
          caption: "SASS",
        },
      },
      {
        title: "Tailwind",
        description:
          "Tailwind CSS is a utility-first CSS framework for rapidly building custom designs. It provides a set of utility classes that let you style your elements directly in your HTML, making it easy to create complex layouts without",
        image: {
          alt: "Tailwind",
          height: 200,
          src: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
          width: 200,
          className: "object-contain mx-0 mb-2",
          caption: "Tailwind",
        },
      },
    ],
    effectIsActive: true,
  },
  {
    id: "back-end",
    title: "Back-end Development",
    subSections: [
      {
        title: "Node",
        description:
          "Node.js is a runtime environment that allows developers to run JavaScript code outside of a web browser, making it ideal for building scalable and efficient server-side applications. It enables the creation of fast and lightweight web servers, handles asynchronous operations with ease, and supports the development of real-time web applications. Its event-driven, non-blocking I/O model is particularly well-suited for data-intensive applications that require high performance.",
        image: {
          alt: "Node icon",
          height: 200,
          src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
          width: 200,
          className: "object-contain mx-0 mb-2",
          caption: "Node",
        },
      },
      {
        title: "Typescript",
        description:
          "It enhances the development process by enabling developers to write more reliable and maintainable code, catching errors at compile time. TypeScript is widely used in backend development due to its robust tooling and strong community support, making it particularly suitable for large-scale JavaScript applications.",
        image: {
          alt: "Typescript",
          height: 200,
          src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
          width: 200,
          className: "object-contain mx-0 mb-2",
          caption: "Typescript",
        },
      },
    ],
    effectIsActive: true,
  },
  {
    id: "fullstack",
    title: "Fullstack Development",
    subSections: [
      {
        title: "Next",
        description:
          "Next.js is a React framework that enables server-side rendering, optimized performance, and simplified development of web applications. Its intuitive API and pre-configured setup make it ideal for building dynamic and SEO-friendly websites.",
        image: {
          alt: "Next icon",
          height: 200,
          src: "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg",
          width: 200,
          className: "object-contain mx-0 mb-2",
          caption: "Next",
        },
      },
      {
        title: "Nuxt",
        description:
          "Nuxt.js is a framework for building Vue.js applications, offering server-side rendering, static site generation, and various other features to simplify Vue development. It provides a powerful architecture for creating modern web applications.",
        image: {
          alt: "Nuxt",
          height: 200,
          src: "https://www.vectorlogo.zone/logos/nuxtjs/nuxtjs-icon.svg",
          width: 200,
          className: "object-contain mx-0 mb-2",
          caption: "Nuxt",
        },
      },
    ],
    effectIsActive: true,
  },
];

const CaePage: React.FC = () => {
  return (
    <div className="my-28 flex text-lg flex-col">
      <header className="container px-4 md:px-6">
        <PageIntro
          descriptionClass="text-gray-500 text-xl italic"
          descriptionText="At Proengine Labs, we specialize in integrated full-stack web development, offering server-side rendering, single-page applications, and REST API design. Our expertise extends to cloud infrastructure powered by AWS. We ensure easily maintainable code and follow continuous deployment practices for efficient project delivery."
        />
      </header>
      <div className="flex flex-col gap-y-20" style={{ marginTop: "60px" }}>
        {devSections.map((section, index) => (
          <section
            id={section.id}
            key={index}
            className="container px-4 md:px-6 relative -z-50"
          >
            <DevPageSection section={section} />
          </section>
        ))}
      </div>
    </div>
  );
};

export default CaePage;

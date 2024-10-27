import { cn } from "@/lib/utils";
import Link from "next/link";
import { FaCheck } from "react-icons/fa";

interface ServiceProps {
  sectionClass: string;
  serviceName: string;
  serviceIntro: string;
  hrefDiscover: string;
  items: string[];
}

export const Service: React.FC<ServiceProps> = (props) => {
  return (
    <section
      className={cn([
        "w-5/12 flex flex-col items-start gap-4 px-6 py-4 mt-6 border rounded-lg shadow-md bg-white dark:bg-gray-800",
        props.sectionClass,
      ])}
    >
      <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-50 mb-4 self-center">
        {props.serviceName}
      </h2>
      <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
        {props.serviceIntro}
      </p>
      <div className="mt-4">
        <ul className="space-y-3 text-gray-700 dark:text-gray-400">
          {props.items.map((item, index) => (
            <li key={index} className="flex items-start text-lg">
              <FaCheck className="mr-3 h-5 w-5 text-gray-500 dark:text-gray-400" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6 mx-auto">
        <Link
          className="inline-flex items-center px-6 py-2 text-xl font-medium text-white bg-gray-600 rounded-md shadow hover:bg-gray-700 dark:bg-gray-500 dark:hover:bg-gray-600"
          href={props.hrefDiscover}
        >
          Get in touch!
        </Link>
      </div>
    </section>
  );
};

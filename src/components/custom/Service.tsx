import { cn } from "@/lib/utils";
import Link from "next/link";
import { FaCheck } from "react-icons/fa";

interface ServiceProps {
  sectionClass: string;
  serviceName: string;
}

export const Service: React.FC<ServiceProps> = (props) => {
  return (
    <section
      className={cn([
        "flex flex-col gap-8 px-4 md:px-6 lg:gap-12",
        props.sectionClass,
      ])}
    >
      <div className="flex flex-col items-start justify-center space-y-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl self-center">
          {props.serviceName}
        </h2>
        <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-950">
          <ul className="space-y-2 text-gray-500 dark:text-gray-400">
            <li className="flex items-start">
              <FaCheck className="mr-2 h-5 w-5 flex-shrink-0 text-gray-500 dark:text-gray-400" />
              <span>Boost productivity with our workflow management tools</span>
            </li>
            <li className="flex items-start">
              <FaCheck className="mr-2 h-5 w-5 flex-shrink-0 text-gray-500 dark:text-gray-400" />
              <span>Enhance collaboration across your team</span>
            </li>
            <li className="flex items-start">
              <FaCheck className="mr-2 h-5 w-5 flex-shrink-0 text-gray-500 dark:text-gray-400" />
              <span>Streamline your operations for maximum efficiency</span>
            </li>
          </ul>
        </div>
        <div className="w-full flex flex-row justify-evenly">
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            href="#"
          >
            Discover
          </Link>
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            href="#"
          >
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
};

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
        "w-5/12 flex flex-col align-middle gap-8 px-4 md:px-6 lg:gap-6",
        props.sectionClass,
      ])}
    >
      <h2 className="text-3xl font-bold tracking-tighter text-slate-800 sm:text-3xl md:text-4xl self-center">
        {props.serviceName}
      </h2>
      <p className=" text-slate-500 text-lg">{props.serviceIntro}</p>
      <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-950 relative">
        <ul className="space-y-2 text-gray-500 dark:text-gray-400">
          {props.items.map((item, index) => (
            <li key={index} className="flex items-start text-lg">
              <FaCheck
                size="large"
                className="mr-2 h-5 w-5 flex-shrink-0 text-gray-500 dark:text-gray-400"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="absolute right-2 bottom-2">
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            href={props.hrefDiscover}
          >
            Discover
          </Link>
        </div>
      </div>
    </section>
  );
};

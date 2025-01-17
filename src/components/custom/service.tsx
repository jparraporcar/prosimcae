import { cn } from "@/lib/utils";
import Link from "next/link";
import { FaCheck } from "react-icons/fa";
import "./service.css";
import { ContactDialogCustom } from "./client/contact-dialog-custom";

interface ServiceProps {
  sectionClass?: string;
  serviceName: string;
  serviceIntro: string;
  hrefDiscover: string;
  items: string[];
  dialogElement: React.ReactNode;
}

export const Service: React.FC<ServiceProps> = (props) => {
  return (
    <section
      className={cn([
        "w-5/12 max-md:w-11/12 flex flex-col justify-between gap-4 px-6 py-6 max-md:px-3 mt-6 border rounded-lg shadow-md bg-white dark:bg-gray-800",
        props.sectionClass,
      ])}
    >
      <h2 className="text-3xl max-md:text-2xl font-bold text-gray-900 dark:text-gray-50 mb-4 self-center">
        {props.serviceName}
      </h2>
      <p className="text-gray-700 dark:text-gray-300 text-xl max-md:text-sm">
        {props.serviceIntro}
      </p>
      <ul className="flex flex-col mt-4 gap-4 text-gray-700">
        {props.items.map((item, index) => (
          <li
            key={index}
            className="flex flex-row items-start text-lg max-md:text-xs"
          >
            <FaCheck className="text-gray-500 w-1/12 mr-4" />
            <span className="w-11/12">{item}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6 mx-auto">{props.dialogElement}</div>
    </section>
  );
};

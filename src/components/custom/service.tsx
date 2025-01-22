import { cn } from "@/lib/utils";
import { FaCheck } from "react-icons/fa";
import "./service.css";
import { useTranslations } from "next-intl";

interface ServiceItem {
  title: string;
  description: string;
}

interface ServiceProps {
  sectionClass?: string;
  serviceName: string;
  serviceIntro: string;
  hrefDiscover: string;
  items: ServiceItem[];
  dialogElement: React.ReactNode;
}

export const Service: React.FC<ServiceProps> = (props) => {
  const t = useTranslations();

  return (
    <section
      className={cn([
        "flex flex-col justify-between w-[47%] max-md:w-11/12 px-4 py-6 max-md:py-4 mt-4 max-md:mt-0 border rounded-lg shadow-md bg-white dark:bg-gray-800",
        props.sectionClass,
      ])}
      style={{ minHeight: "600px" }}
    >
      <div>
        <h2 className="text-2xl max-md:text-xl font-bold text-gray-900 dark:text-gray-50 mb-3 text-center">
          {t(props.serviceName)}
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-lg max-md:text-sm leading-relaxed text-center max-md:text-justify max-md:px-4">
          {t(props.serviceIntro)}
        </p>
      </div>
      <div className="my-6">
        <ul className="flex flex-col gap-4 text-gray-700">
          {props.items.map((item, index) => (
            <li
              key={index}
              className="flex flex-row items-start text-base max-md:text-xs"
            >
              <div className="w-6 mr-2 flex justify-center items-start">
                <FaCheck className="text-gray-500 mt-1" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold">{t(item.title)}</span>
                <span className="mt-1">{t(item.description)}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-2 flex justify-center">{props.dialogElement}</div>
    </section>
  );
};

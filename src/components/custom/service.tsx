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
      className={`
        flex flex-col justify-start w-[47%] max-md:w-11/12 mt-4 gap-y-2 max-md:mt-0 border rounded-2xl shadow-md bg-white dark:bg-gray-800
        ${props.sectionClass}`}
    >
      <div>
        <h2 className="text-2xl max-md:text-xl font-bold text-gray-900 dark:text-gray-50 text-center py-4 bg-slate-300 rounded-t-xl ">
          {t(props.serviceName)}
        </h2>
      </div>
      <div className="p-2">
        <ul className="flex flex-col gap-4 text-gray-700">
          {props.items.map((item, index) => (
            <li
              key={index}
              className="flex flex-row items-start text-base max-md:text-xs"
            >
              <div className="w-6 min-w-6 mr-2 flex justify-center items-start">
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
      <div className="flex justify-center mt-auto">{props.dialogElement}</div>
    </section>
  );
};

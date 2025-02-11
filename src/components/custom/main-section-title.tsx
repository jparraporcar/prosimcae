import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

interface MainSectiontitleProps {
  title: string;
}

export const MainSectionTitle: React.FC<MainSectiontitleProps> = (props) => {
  const t = useTranslations();

  return (
    <div className="p-4">
      <h1 className="text-center text-3xl max-md:text-2xl font-bold bg-gradient-to-r from-slate-600 via-gray-700 to-gray-400 bg-clip-text text-transparent max-md:pb-1">
        {t(props.title)}
      </h1>
      <div className="w-24 h-1 border-b-2 border-gray-300 mx-auto mt-2"></div>
    </div>
  );
};

import { useTranslations } from "next-intl";

interface MainSectiontitleProps {
  title: string;
  titleClass: string;
  id: string;
}

export const MainSectionTitle: React.FC<MainSectiontitleProps> = (props) => {
  const t = useTranslations();

  return (
    <>
      <h1
        id={props.id}
        className={`text-center p-4 text-3xl max-md:text-lg font-bold bg-gradient-to-r from-slate-600 via-gray-700 to-gray-400 bg-clip-text text-transparent max-md:pb-1 ${props.titleClass}`}
      >
        {t(props.title)}
      </h1>
      <span className="w-24 h-1 border-b-2 border-gray-300 mx-auto mt-2" />
    </>
  );
};

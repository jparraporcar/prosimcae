import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { blog } from "@/lib/content";
import { type DifficultyLevel, getDifficultyColor } from "@/lib/types";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
export async function generateMetadata({
  params,
}: {
  params: any;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return {
    title: t(blog.blogEntries[1].titleMeta),
    description: t(blog.blogEntries[1].descriptionMeta),
    icons: {
      icon: "/favicon.ico",
    },
    alternates: {
      canonical: t(blog.blogEntries[1].canonical),
    },
  };
}

const AnalisisDeRoturaYFallosEnPiezasComoEvitarCarosErroresDeDiseno = () => {
  const t = useTranslations();

  return (
    <div className="flex flex-row justify-center w-full">
      <div className="w-[85%] max-md:w-[97%] px-4 py-8 sm:px-6 lg:px-8 mb-8 mt-16">
        <Card className="bg-white shadow-2xl rounded-2xl overflow-hidden">
          <CardHeader className="p-6 bg-slate-300">
            <div className="flex justify-between items-center mb-4">
              <Badge
                className={`${getDifficultyColor(t(blog.blogEntries[1].difficulty) as DifficultyLevel)} text-xs max-md:text-[10px] font-semibold px-3 py-1`}
              >
                {t(blog.blogEntries[1].difficulty) as DifficultyLevel}
              </Badge>
              <time className="text-sm max-md:text-[10px] text-gray-600">
                {t(blog.blogEntries[1].date)}
              </time>
            </div>
            <h1 className="text-3xl max-md:text-lg font-bold text-gray-900">
              {t(blog.blogEntries[1].title)}
            </h1>
          </CardHeader>
          <CardContent className="p-6 pt-0">
            <div>
              <article className="prose prose-lg max-w-none">
                <h2 className="text-2xl max-md:text-base font-semibold text-gray-800 mt-8 mb-2">
                  {t(blog.blogEntries[1].content.heading1)}
                </h2>
                <div
                  className="mb-6 text-gray-700 max-md:text-xs"
                  dangerouslySetInnerHTML={{
                    __html: t.raw(blog.blogEntries[1].content.paragraph1),
                  }}
                />
                <h2 className="text-2xl max-md:text-base font-semibold text-gray-800 mt-8 mb-4">
                  {t(blog.blogEntries[1].content.heading2)}
                </h2>
                <div
                  className="mb-6 text-gray-700 max-md:text-xs"
                  dangerouslySetInnerHTML={{
                    __html: t.raw(blog.blogEntries[1].content.paragraph2),
                  }}
                />
                <h2 className="text-2xl max-md:text-base font-semibold text-gray-800 mt-8 mb-4">
                  {t(blog.blogEntries[1].content.heading3)}
                </h2>
                <div
                  className="mb-6 text-gray-700 max-md:text-xs"
                  dangerouslySetInnerHTML={{
                    __html: t.raw(blog.blogEntries[1].content.paragraph3),
                  }}
                />
                <h2 className="text-2xl max-md:text-base font-semibold text-gray-800 mt-8 mb-4">
                  {t(blog.blogEntries[1].content.heading4)}
                </h2>
                <div
                  className="mb-6 text-gray-700 max-md:text-xs"
                  dangerouslySetInnerHTML={{
                    __html: t.raw(blog.blogEntries[1].content.paragraph4),
                  }}
                />
              </article>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AnalisisDeRoturaYFallosEnPiezasComoEvitarCarosErroresDeDiseno;

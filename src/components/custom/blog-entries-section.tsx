import { Link } from "@/i18n/routing";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  type BlogEntry,
  DifficultyLevel,
  getDifficultyColor,
} from "../../lib/types";
import { useTranslations } from "next-intl";
import { blog } from "@/lib/content";

export function BlogEntriesSection() {
  const t = useTranslations();
  return (
    <section className="flex flex-row justify-center py-12 max-md:pb-2 max-md:pt-8 ">
      <Card className="bg-white shadow-2xl rounded-2xl max-md:w-11/12">
        <CardHeader className="p-4 bg-slate-300 rounded-t-xl">
          <CardTitle className="text-black text-xl max-md:text-xl text-center"></CardTitle>
        </CardHeader>
        <CardContent className="p-8 max-md:p-4 space-y-6 max-md:max-h-[400px] max-md:overflow-scroll">
          <div className="grid grid-cols-1 max-md:grid-cols-2 lg:grid-cols-3 gap-6 max-md:gap-2">
            {blog.blogEntries.map((entry) => (
              <Link
                key={entry.slug}
                href={`/blog-entries/${t(blog.blogEntries[0].slug)}` as any}
                className="block hover:no-underline"
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-4 max-md:p-2 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-2">
                      <Badge
                        className={`${getDifficultyColor(t(blog.blogEntries[0].difficulty) as DifficultyLevel)} text-xs font-semibold max-md:mb-2 max-md:text-[8px] max-md:px-1`}
                      >
                        {t(blog.blogEntries[0].difficulty) as DifficultyLevel}
                      </Badge>
                      <span className="text-sm text-gray-500 max-md:text-[8px] ">
                        {t(blog.blogEntries[0].date)}
                      </span>
                    </div>
                    <h3 className="text-lg max-md:text-[12px] font-semibold mb-2 text-gray-800 hover:text-gray-600 transition-colors duration-300">
                      {t(blog.blogEntries[0].title)}
                    </h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

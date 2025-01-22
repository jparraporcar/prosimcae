// AboutProsimcaeSection.tsx

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Linkedin } from "lucide-react";
import { about } from "@/lib/content";
import { useTranslations } from "next-intl";

export default function AboutProsimcaeSection() {
  const t = useTranslations();
  return (
    <section className="flex flex-row justify-center">
      <div className="mt-6 mb-14 w-11/12">
        <Card className="bg-white shadow-2xl rounded-xl">
          <CardHeader className="p-4 bg-slate-300 rounded-t-xl">
            <CardTitle>
              <p className="text-black text-xl max-md:text-base leading-relaxed text-center">
                {t(about.createdBy.part1)}{" "}
                <span className="text-shadow">{t(about.createdBy.name)}</span>
                {t(about.createdBy.part2)}
              </p>
            </CardTitle>
          </CardHeader>

          <CardContent className="p-10 max-md:p-6 space-y-6">
            {/* Standard bullet list */}
            <ul className="list-disc list-inside space-y-4 text-gray-700 text-lg max-md:text-xs leading-relaxed">
              <li>
                {t(about.list.item1.part1)}{" "}
                <span className="font-semibold">
                  {t(about.list.item1.automotive)}
                </span>{" "}
                {t(about.list.item1.and)}{" "}
                <span className="font-semibold">
                  {t(about.list.item1.industrialSectors)}
                </span>
              </li>
              <li>
                {t(about.list.item2.part1)}{" "}
                <span className="font-semibold">{t(about.list.item2.fea)}</span>{" "}
                {t(about.list.item2.andCFD)}
              </li>
              <li>
                {t(about.list.item3.part1)}{" "}
                <span className="font-semibold">
                  {t(about.list.item3.publication)}
                </span>{" "}
                {t(about.list.item3.andSuccessfully)}{" "}
                <span className="font-semibold">
                  {t(about.list.item3.costReduction)}
                </span>{" "}
                {t(about.list.item3.andAccelerated)}
              </li>
              <li>
                {t(about.list.item4.part1)}{" "}
                <span className="font-semibold">
                  {t(about.list.item4.consultancy)}
                </span>
                {t(about.list.item4.workingWithClients)}{" "}
                <span className="font-semibold">
                  {t(about.list.item4.services)}
                </span>{" "}
                {t(about.list.item4.simulationServices)}
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

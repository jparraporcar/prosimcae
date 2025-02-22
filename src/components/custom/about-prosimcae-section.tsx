// AboutProsimcaeSection.tsx

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Linkedin } from "lucide-react";
import { about } from "@/lib/content";
import { useTranslations } from "next-intl";

export default function AboutProsimcaeSection() {
  const t = useTranslations();
  return (
    <section className="flex flex-row justify-center max-[2000px]:w-10/12 max-md:w-full">
      <Card className="bg-white shadow-2xl rounded-xl mt-6 mb-16 max-[2000px]:w-full max-md:w-11/12">
        <CardHeader className="p-4 bg-slate-300 rounded-t-xl">
          <CardTitle></CardTitle>
        </CardHeader>
        <CardContent className="p-10 max-md:p-6 space-y-6">
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
              <span className="font-semibold">
                {t(about.list.item2.andCFD)}
              </span>
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
              </span>{" "}
              {t(about.list.item4.workingWithClients)}{" "}
              <span className="font-semibold">
                {t(about.list.item4.services)}
              </span>{" "}
              {t(about.list.item4.simulationServices)}
            </li>
          </ul>
        </CardContent>
      </Card>
    </section>
  );
}

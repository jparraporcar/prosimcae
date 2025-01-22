// JoinNetworkSection.tsx

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ResumeUploadDialog } from "./client/resume-upload-dialog";
import { joinNetworkSection } from "@/lib/content";
import { useTranslations } from "next-intl";

export default function JoinNetworkSection() {
  const t = useTranslations();

  return (
    <section className="flex flex-row justify-center">
      <Card className="bg-white shadow-2xl rounded-2xl mt-6 w-11/12">
        <CardHeader className="p-4 bg-slate-300 rounded-t-xl">
          <CardTitle className="text-black text-xl max-md:text-base text-center">
            {t(joinNetworkSection.title)}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-10 max-md:p-6 space-y-6 flex flex-col items-center">
          <p className="text-center text-gray-700 text-xl max-md:text-sm leading-relaxed">
            {t(joinNetworkSection.paragraph)}
          </p>

          {/* Standard bullet list */}
          <ul className="list-disc list-inside space-y-4 text-gray-700 text-lg max-md:text-xs">
            <li>{t(joinNetworkSection.list.item1)}</li>
            <li>{t(joinNetworkSection.list.item2)}</li>
            <li>{t(joinNetworkSection.list.item3)}</li>
          </ul>

          <div>
            <ResumeUploadDialog />
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

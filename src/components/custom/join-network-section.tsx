import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ResumeUploadDialog } from "./client/resume-upload-dialog"; // adjust the import path as needed

export default function JoinNetworkSection() {
  return (
    <section>
      <Card className="bg-white shadow-2xl rounded-2xl mt-6 mx-8">
        <CardHeader className="p-4 bg-slate-300 rounded-t-xl">
          <CardTitle className="text-black text-xl max-md:text-base text-center">
            Join our network of professionals
          </CardTitle>
        </CardHeader>
        <CardContent className="p-10 max-md:p-6 space-y-6 flex flex-col items-center">
          <p className="text-center text-gray-700 text-xl max-md:text-sm leading-relaxed">
            We invite skilled engineers and simulation experts to collaborate on
            innovative projects.
          </p>

          {/* Standard bullet list */}
          <ul className="list-disc list-inside space-y-4 text-gray-700 text-lg max-md:text-xs">
            <li>Work on diverse and exciting projects</li>
            <li>Professional growth and skill enhancement</li>
            <li>Flexible collaboration arrangements</li>
          </ul>

          <div>
            <ResumeUploadDialog />
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

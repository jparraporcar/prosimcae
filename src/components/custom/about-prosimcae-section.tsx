import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Linkedin } from "lucide-react"; // Example icon import; adjust as needed

export default function AboutProsimcaeSection() {
  return (
    <section>
      <div className="mt-6 mb-24 mx-8">
        <Card className="bg-white shadow-2xl rounded-xl">
          <CardHeader className="p-4 bg-slate-300 rounded-t-xl">
            <CardTitle>
              <p className="text-black text-xl max-md:text-base leading-relaxed text-center">
                Created by{" "}
                <span className="text-shadow ">Jordi Parra Porcar</span>,
                Mechanical Engineer specialized in CAE for over 8 years
              </p>
            </CardTitle>
          </CardHeader>

          <CardContent className="p-10 max-md:p-6 space-y-6">
            {/* Standard bullet list */}
            <ul className="list-disc list-inside space-y-4 text-gray-700 text-lg max-md:text-xs leading-relaxed">
              <li>
                Background in both the{" "}
                <span className="font-semibold">automotive</span> and{" "}
                <span className="font-semibold">industrial sectors</span>
              </li>
              <li>
                In-depth experience in{" "}
                <span className="font-semibold">
                  FEA (Finite Element Analysis)
                </span>{" "}
                and{" "}
                <span className="font-semibold">
                  CFD (Computational Fluid Mechanics)
                </span>
              </li>
              <li>
                Authored a{" "}
                <span className="font-semibold">
                  peer-reviewed CFD publication
                </span>{" "}
                and successfully oversaw projects that{" "}
                <span className="font-semibold">reduced prototyping costs</span>{" "}
                and{" "}
                <span className="font-semibold">
                  accelerated design timelines
                </span>
              </li>
              <li>
                Operating as a{" "}
                <span className="font-semibold">remote-first consultancy</span>,
                working with clients internationally for{" "}
                <span className="font-semibold">
                  fast, flexible, and cost-effective
                </span>{" "}
                simulation services
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

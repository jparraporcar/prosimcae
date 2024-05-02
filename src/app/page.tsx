import { Service } from "@/components/custom/Service";
import Link from "next/link";

const Home: React.FC = () => {
  return (
    <main className="w-full flex flex-row flex-wrap gap-y-20 justify-evenly mt-28">
      <Service sectionClass="" serviceName="Software Development" />
      <Service sectionClass="" serviceName="CAE Analysis" />
    </main>
  );
};

export default Home;

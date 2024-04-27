import Link from "next/link";

export const Logo: React.FC = () => {
  return (
    <Link href="/">
      <div className="flex flex-col items-center justify-center text-base p-1 me-4">
        <div>
          <span className="font-bold text-base">&lt;Pro/&gt;</span>engine
        </div>
        <div className="flex flex-row items-center justify-center">
          <div className="border-t border-gray-400 w-5"></div>
          <span className="px-2 font-semibold text-sm">LABS</span>
          <div className="border-t border-gray-400 w-5"></div>
        </div>
      </div>
    </Link>
  );
};

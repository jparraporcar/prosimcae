import Link from "next/link";
import { cn } from "@/lib/utils";

interface ItemsList {
  title: string;
  titleClass?: string;
  items: Item[];
  itemsClass?: string;
}

type Item = { name: string; href: string };

export const ItemsList: React.FC<ItemsList> = (props) => {
  return (
    <div className="flex flex-col">
      <Link
        href={`/${props.title.toLowerCase()}`}
        className={cn([
          "mx-auto py-2 mb-2 rounded-lg font-bold border-b-2 px-4 border-2 border-slate-300 hover:border-2 hover:bg-white hover:bg-slate-300",
          props.titleClass,
        ])}
      >
        <p>{props.title}</p>
      </Link>
      <ul className={cn(["leading-loose", props.itemsClass])}>
        {props.items.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

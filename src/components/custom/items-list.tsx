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
      <p
        className={cn([
          "mx-auto mb-2 font-bold border-b-2 px-4",
          props.titleClass,
        ])}
      >
        {props.title}
      </p>
      <ul className={cn(["leading-loose", props.itemsClass])}>
        {props.items.map((item, index) => (
          <Link key={index} href={item.href}>
            <li className="hover:shadow">{item.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

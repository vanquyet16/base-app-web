import Image from "next/image";

interface MenuSectionProps {
  title: string;
  items: {
    icon: string;
    label: string;
    path?: string;
  }[];
  onItemClick?: (path: string) => void;
}

export const MenuSection = ({
  title,
  items,
  onItemClick,
}: MenuSectionProps) => (
  <div className="select-none">
    <h3 className="font-bold mb-4 text-left">{title}</h3>
    <div className="grid grid-cols-3 gap-4">
      {items.map((item, index) => (
        <div
          key={index}
          onClick={() => item.path && onItemClick?.(item.path)}
          className="flex flex-col items-center text-center cursor-pointer 
          transition-all duration-150 
          hover:scale-105 hover:bg-gray-100 
          active:scale-95 active:bg-gray-200 
          rounded-xl p-4"
        >
          <div className="pointer-events-none">
            <Image src={item.icon} width={40} height={40} alt={item.label} />
          </div>
          <span className="text-sm mt-2 whitespace-normal max-w-[70px]">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  </div>
);

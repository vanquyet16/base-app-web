import { Dropdown, MenuProps } from "antd";
import { FileTextOutlined, BarChartOutlined } from "@ant-design/icons";
import Image from "next/image";
import { MenuSection } from "./Section/MenuSection";
import { useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
// import { useMobileOrTablet } from "@/hooks/useMobileOrTablet";

interface DropDownMenuProps {
  children: React.ReactNode;
  isMobileOrTablet: boolean;
}

const vanBanItems = [
  {
    icon: "/images/icon_menu/bao_cao_thong_ke.png",
    label: "Văn bản đến",
    path: "/vb-den",
  },
  { icon: "/images/icon_menu/bao_cao_thong_ke.png", label: "Văn bản đi" },
  {
    icon: "/images/icon_menu/bao_cao_thong_ke.png",
    label: "Dự thảo văn bản",
  },
  { icon: "/images/icon_menu/bao_cao_thong_ke.png", label: "Văn bản nội bộ" },
  {
    icon: "/images/icon_menu/bao_cao_thong_ke.png",
    label: "Tờ trình",
    path: "/totrinh",
  },
];

const congViecItems = [
  {
    icon: "/images/icon_menu/bao_cao_thong_ke.png",
    label: "Thực hiện công việc",
  },
  {
    icon: "/images/icon_menu/bao_cao_thong_ke.png",
    label: "Báo cáo tiến độ",
  },
  {
    icon: "/images/icon_menu/bao_cao_thong_ke.png",
    label: "Thống kê đánh giá",
  },
  {
    icon: "/images/icon_menu/bao_cao_thong_ke.png",
    label: "Báo cáo công việc",
  },
];

export default function DropDownMenu({
  children,
  isMobileOrTablet,
}: DropDownMenuProps) {
  const router = useRouter();

  const handleItemClick = (path: string) => {
    router.push(path);
  };

  const dropdownContent = useCallback(
    () => (
      <div className="p-4 bg-white rounded-lg shadow-lg">
        <div className="grid grid-cols-2 gap-4">
          <MenuSection
            title="VĂN BẢN"
            items={vanBanItems}
            onItemClick={handleItemClick}
          />
          <MenuSection
            title="CÔNG VIỆC"
            items={congViecItems}
            onItemClick={handleItemClick}
          />
        </div>
      </div>
    ),
    []
  );

  return (
    <Dropdown
      dropdownRender={dropdownContent}
      trigger={["click"]}
      placement="bottom"
      overlayStyle={{ marginTop: "0px" }}
    >
      {children}
    </Dropdown>
  );
}

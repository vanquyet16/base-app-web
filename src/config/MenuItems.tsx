import DynamicIcon from "@/components/Icon/DynamicIcon";
import {
  UserOutlined,
  DashboardOutlined,
  SettingOutlined,
  TeamOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import { MenuProps } from "antd";

export interface MenuItem {
  key: string;
  icon?: any;
  label: React.ReactNode; // Changed from string to ReactNode
  children?: MenuItem[];
  path?: string;
  defaultOpen?: boolean;
}

export interface PageRoute {
  title: string;
  count: number | null;
  icon: any;
  route: string;
}

export interface PageSection {
  name: string;
  routers: PageRoute[];
}

export const lstPage: PageSection[] = [
  {
    name: "Tờ trình",
    routers: [
      {
        title: "Soạn thảo",
        count: null,
        icon: "faEdit",
        route: "/totrinh/them-moi",
      },
      {
        title: "Chờ xử lý",
        count: 5,
        icon: "faClock",
        route: "/totrinh/cho-xu-ly",
      },
      {
        title: "Đang xử lý",
        count: null,
        icon: "faSpinner",
        route: "/totrinh/dang-xu-ly",
      },
      {
        title: "Đã phê duyệt",
        count: null,
        icon: "faCheckCircle",
        route: "/totrinh/da-ky-duyet",
      },
      {
        title: "Thu hồi",
        count: null,
        icon: "faUndo",
        route: "/totrinh/thu-hoi",
      },
      {
        title: "Báo cáo",
        count: null,
        icon: "faChartBar",
        route: "/totrinh/bao-cao",
      },
    ],
  },
];

// Remove defaultOpen from the menu items
export const sideMenuItems: MenuItem[] = lstPage.map((section) => ({
  key: section.name.toLowerCase().replace(/\s+/g, "-"),
  icon: <FileTextOutlined />,
  label: section.name,
  children: section.routers.map((route) => ({
    key: route.route.replace(/\//g, "-"),
    label: (
      <div className="flex items-center w-full gap-2">
        <DynamicIcon icon={route.icon} />
        <span className="flex-grow">{route.title}</span>
        {route.count !== null && (
          <span className="bg-red-500 text-white text-xs px-1.5 rounded-full ml-auto">
            {route.count}
          </span>
        )}
      </div>
    ),
    path: route.route,
  })),
}));

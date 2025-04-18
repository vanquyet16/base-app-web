import { Dropdown } from "antd";
import {
  UserOutlined,
  KeyOutlined,
  QuestionCircleOutlined,
  CustomerServiceOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { useCallback } from "react";

interface DropdownConfigProps {
  children: React.ReactNode;
  onMenuClick?: (key: string) => void;
}

export default function DropdownConfig({
  children,
  onMenuClick,
}: DropdownConfigProps) {
  const menuItems = [
    { key: "profile", icon: <UserOutlined />, label: "Hồ sơ cá nhân" },
    { key: "password", icon: <KeyOutlined />, label: "Đổi mật khẩu" },
    {
      key: "guide",
      icon: <QuestionCircleOutlined />,
      label: "Hướng dẫn sử dụng",
    },
    {
      key: "support",
      icon: <CustomerServiceOutlined />,
      label: "Phản hồi hỗ trợ",
    },
    { key: "logout", icon: <LogoutOutlined />, label: "Đăng xuất" },
  ];

  const handleItemClick = (key: string) => {
    onMenuClick?.(key);
  };

  const dropdownContent = useCallback(
    () => (
      <div className="p-2 bg-white rounded-lg shadow-lg min-w-[200px]">
        <div className="flex flex-col">
          {menuItems.map((item) => (
            <div
              key={item.key}
              className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer rounded"
              onClick={() => handleItemClick(item.key)}
            >
              <span className="text-gray-600">{item.icon}</span>
              <span className="text-sm">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    ),
    [onMenuClick]
  );

  return (
    <Dropdown
      dropdownRender={dropdownContent}
      trigger={["click"]}
      placement="bottomRight"
    >
      {children}
    </Dropdown>
  );
}

import { Dropdown, MenuProps } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useCallback } from "react";

interface DropDownNotifyProps {
  children: React.ReactNode;
}

export default function DropDownNotify({ children }: DropDownNotifyProps) {
  const notifications = [
    "Có Văn bản đến '4/BCA-TTĐLQG' cần xử lý",
    "Có Văn bản đến '127/BCA' cần xử lý",
    "Có Văn bản đến '888/BCA-TTĐLQG' cần xử lý",
    "Có Văn bản đến '898/BCA-TTĐLQG' cần xử lý",
    "Có Văn bản đến '1111111' cần xử lý",
    "Có Văn bản đến '4/BCA-TTĐLQG' cần xử lý",
    "Có Văn bản đến '127/BCA' cần xử lý",
    "Có Văn bản đến '888/BCA-TTĐLQG' cần xử lý",
    "Có Văn bản đến '898/BCA-TTĐLQG' cần xử lý",
    "Có Văn bản đến '1111111' cần xử lý",
  ];

  const dropdownContent = useCallback(
    () => (
      <div className="p-4 bg-white rounded-lg shadow-lg min-w-[400px]">
        <h3 className="font-bold mb-4">Thông báo</h3>
        <div className="flex flex-col gap-2 max-h-[300px] overflow-y-auto">
          {notifications.map((notification, index) => (
            <div
              key={index}
              className="flex justify-between items-center hover:bg-gray-100 p-2 rounded"
            >
              <span className="text-sm">{notification}</span>
              <DeleteOutlined className="text-red-500 cursor-pointer" />
            </div>
          ))}
        </div>
        <div className="text-sm text-gray-500 mt-2">40 thông báo mới</div>
      </div>
    ),
    []
  );

  return (
    <Dropdown
      dropdownRender={dropdownContent}
      trigger={["click"]}
      placement="bottomLeft"
      overlayStyle={{ marginTop: "0px", marginRight: -25 }}
    >
      {children}
    </Dropdown>
  );
}

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as fasIcons from "@fortawesome/free-solid-svg-icons"; // Lấy tất cả các icon từ free-solid-svg-icons
import { IconDefinition } from "@fortawesome/fontawesome-svg-core"; // Import IconDefinition để kiểm tra kiểu

interface DynamicIconProps {
  icon: keyof typeof fasIcons; // Sử dụng kiểu 'keyof typeof fasIcons' để nhận các tên icon hợp lệ
}

const DynamicIcon = ({ icon }: DynamicIconProps) => {
  // Lấy icon từ fasIcons bằng tên icon đã truyền vào
  const Icon = fasIcons[icon] as IconDefinition; // Chuyển đổi kiểu trả về thành IconDefinition

  if (!Icon) {
    return <div>Icon không hợp lệ</div>; // Nếu không có icon, trả về thông báo
  }

  return <FontAwesomeIcon icon={Icon} />;
};

export default DynamicIcon;

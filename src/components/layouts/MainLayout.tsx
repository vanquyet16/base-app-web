"use client";
import "../../styles/antd";
import "../../styles/globals.css";

import React, { useState } from "react";
import {
  AppstoreOutlined,
  BellOutlined,
  DownOutlined,
  HomeOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme, Grid } from "antd";
import { usePathname, useRouter } from "next/navigation";
import { sideMenuItems } from "@/config/MenuItems";
import Image from "next/image";
import DropDownMenu from "../DropDown/DropdownMenu";
import DropDownNotify from "../DropDown/DropDownNotify";
import DropdownConfig from "../DropDown/DropdownConfig";
import IconHeader from "./IconHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DynamicIcon from "../Icon/DynamicIcon";
import { useMobileOrTablet } from "@/hooks/useMobileOrTablet";

const { Header, Sider, Content } = Layout;
const noLayoutPages = ["/auth/login", "/auth/register"];

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isMobileOrTablet = useMobileOrTablet();
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  // Remove the openKeys state
  const router = useRouter();
  const {
    token: { colorBgContainer, borderRadiusSM },
  } = theme.useToken();

  // Early return for pages that don't need layout
  if (noLayoutPages.includes(pathname)) {
    return <>{children}</>;
  }

  const handleMenuClick = (path: string) => {
    router.push(path);
  };

  const findSelectedKeys = (
    items: typeof sideMenuItems,
    path: string
  ): string[] => {
    for (const item of items) {
      if (item.path === path) return [item.key];
      if (item.children) {
        const childKeys = findSelectedKeys(item.children, path);
        if (childKeys.length) return [item.key, ...childKeys];
      }
    }
    return [];
  };

  const selectedKeys = findSelectedKeys(sideMenuItems, pathname);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header
        style={{
          padding: 0,
          backgroundImage: `url(/images/banner16-01.png)`,
          backgroundPosition: isMobileOrTablet ? "center" : "null",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          position: "fixed",
          width: "100%",
          top: 0,
          zIndex: 2,
          height: 100,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center", // Giữ mọi thứ giữa dọc
        }}
      >
        <div>
          <IconHeader isMobileOrTablet={isMobileOrTablet} />
        </div>
        <div className=" flex px-4 flex-col items-end text-right gap-0 leading-tight space-y-4">
          <span className="sm:text-xl font-bold text-white">
            HỆ THỐNG QUẢN LÝ VĂN BẢN VÀ CÔNG VIỆC
          </span>
          <div className="flex flex-col sm:flex-row-reverse items-center text-white space-y-2 sm:space-y-0 sm:space-x-4 text-sm">
            <DropdownConfig>
              <div className="space-x-2 flex items-center ml-2">
                <span className="font-bold">
                  Hoàng Văn Dung - Phó trưởng phòng
                </span>
                <DownOutlined />
              </div>
            </DropdownConfig>

            <div className="flex flex-row  sm:mx-0 space-x-2 ">
              <HomeOutlined />
              <DropDownMenu isMobileOrTablet={isMobileOrTablet}>
                <AppstoreOutlined />
              </DropDownMenu>
              <div className="relative">
                <DropDownNotify>
                  <BellOutlined className="text-[18px]" />
                </DropDownNotify>
                <span className="absolute -top-2 -right-1 bg-red-500 text-white text-[10px] font-bold px-1 py-0.2 rounded-full">
                  5
                </span>
              </div>
            </div>
          </div>
        </div>
      </Header>

      <Layout style={{ marginTop: 100 }}>
        {/* Changed from 120 to 100 to match header height */}
        <Button
          className="hidden md:hidden sm:hidden "
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: "16px",
            width: 64,
            height: 64,
          }}
        />
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          breakpoint="sm"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            setCollapsed(broken);
          }}
          style={{
            position: "fixed",
            height: "calc(100vh - 100px)", // Changed from 120px to 100px
            left: 0,
            top: 100, // Changed from 120 to 100
            bottom: 0,
            zIndex: 1,
            background: "#ffff",
          }}
        >
          <Menu
            theme="light"
            mode="inline"
            selectedKeys={selectedKeys}
            defaultOpenKeys={sideMenuItems.map((item) => item.key)}
            items={sideMenuItems}
            onClick={({ key }) => {
              const item = sideMenuItems.find((item) => item.key === key);
              if (item?.path) handleMenuClick(item.path);
            }}
          />
        </Sider>
        <Layout
          style={{
            marginLeft: collapsed ? 0 : 130,
            transition: "margin-left 0.2s",
          }}
        >
          <Content
            style={{
              padding: "24px",
              minHeight: 280,
              background: "#FBFBFB",
              borderRadius: borderRadiusSM,
              overflow: "auto",
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

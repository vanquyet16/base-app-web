import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { ConfigProvider } from "antd";
import MainLayout from "@/components/layouts/MainLayout";
import ReduxProvider from "@/components/providers/ReduxProvider";
import StyledComponentsRegistry from "@/components/providers/AntdRegistry";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
// Import styles
import "antd/dist/reset.css"; // Change this line
import "../styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oute AIs",
  description: "Oute AIs Application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={geistSans.variable}>
      <body suppressHydrationWarning={true}>
        <StyledComponentsRegistry>
          <ConfigProvider>
            <MainLayout>{children}</MainLayout>
          </ConfigProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

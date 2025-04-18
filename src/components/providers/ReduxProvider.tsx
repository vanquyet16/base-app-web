"use client";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "@/redux/store";
import { ConfigProvider } from "antd";

export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <ConfigProvider>
        <PersistGate loading={<div>Đang tải...</div>} persistor={persistor}>
          {children}
        </PersistGate>
      </ConfigProvider>
    </Provider>
  );
}

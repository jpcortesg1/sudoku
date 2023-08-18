"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import { Provider } from "react-redux";
import { store } from "../store";
import useLoadCurrentTheme from "@/hooks/theme/useLoadCurrentTheme";

const inter = Inter({ subsets: ["latin"] });

function ChildComponent({ children }: { children: React.ReactNode }) {
  useLoadCurrentTheme();
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <ChildComponent>{children}</ChildComponent>
    </Provider>
  );
}

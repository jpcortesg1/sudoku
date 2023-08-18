"use client";

import "./globals.css";
import { Montserrat } from "next/font/google";
import { Provider } from "react-redux";
import { store } from "../store";
import useLoadCurrentTheme from "@/hooks/theme/useLoadCurrentTheme";
import useGetConfiguration from "@/hooks/redux/useGetConfiguration";

const montserrat = Montserrat({ subsets: ["latin"] });

function ChildComponent({ children }: { children: React.ReactNode }) {
  useLoadCurrentTheme();
  const configuration = useGetConfiguration();
  return (
    <html lang="en">
      <body
        style={{
          background: configuration?.firstColor,
          color: configuration.thirdColor,
        }}
        className={montserrat.className}
      >
        {children}
      </body>
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

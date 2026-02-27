import type { Metadata } from "next";

import type { ChildrenType } from "@types";

import { montserrat } from "@fonts";
import "@styles/globals.css";

import { MainTemplate } from "@templates";

export const metadata: Metadata = {
  title: "Galaxy Test",
  description: "Galaxy Test Application",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: ChildrenType) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased`}>
        <MainTemplate>
          {children}
        </MainTemplate>
      </body>
    </html>
  );
}

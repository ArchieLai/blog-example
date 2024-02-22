import type { Metadata } from "next";
import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { DataProvider } from "@/component/dataContext";
import Nav from "@/component/nav";

export const metadata: Metadata = {
  title: "My Blog",
  description: "My blog using Github Issues.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <Nav />
            <DataProvider><div className="mt-[100px]">{children}</div></DataProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Topbar from "@/components/Topbar/Topbar";
import Sidebar from "@/components/Sidebar/Sidebar";
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import Provider from "@/utils/providers/tanstackProvider";
import StoreProvider from "../StoreProvider";
import { getCookie, verifySession } from "@/_lib/session";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sekure Business",
  description: "Sekure provides card services for businesses.",
};

export default async function RootLayout({
  children,
  convertmodal,
  rechargemodal,
}: Readonly<{
  children: React.ReactNode;
  convertmodal: React.ReactNode;
  rechargemodal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <Provider>
            <Topbar />
            <main className="w-full overflow-hidden flex justify-between items-start mt-3">
              <Sidebar />
              {convertmodal}
              {rechargemodal}
              {children}
            </main>
            <Toaster />
          </Provider>
        </StoreProvider>
      </body>
    </html>
  );
}

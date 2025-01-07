import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "./StoreProvider";
import Provider from "@/utils/providers/tanstackProvider";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sekure Business",
  description: "Sekure provides card services for businesses.",
  icons: {
    icon: "/icon.ico",
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <Provider>
            <main className="min-h-dvh w-full bg-notif">{children}</main>
            <Toaster />
          </Provider>
        </StoreProvider>
      </body>
    </html>
  );
};

export default RootLayout;

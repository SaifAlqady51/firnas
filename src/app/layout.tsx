import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StaticComponentsProvider from "@/providers/staticComponents-provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Firnas ",
    description: "flight data API",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <StaticComponentsProvider>{children}</StaticComponentsProvider>
            </body>
        </html>
    );
}

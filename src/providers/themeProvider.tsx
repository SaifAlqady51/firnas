'use client'
import { ThemeProvider } from "next-themes";
import React from "react";

export const ThemesProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider attribute="class" defaultTheme="light">
            {children}
        </ThemeProvider>
    );
};

"use client";
import React from "react";
import NavBar from "@/components/navbar/navbar";
import { usePathname } from "next/navigation";
import Footer from "@/components/footer";

const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();
    const excludingRoutes = [
        "/login",
        "/register",
        "/register/code",
        "/register/password",
    ];

    const showComponent = !excludingRoutes.includes(pathname);

    return (
        <>
            {showComponent && <NavBar />}

            {children}
            {showComponent && <Footer />}
        </>
    );
};

export default LayoutProvider;

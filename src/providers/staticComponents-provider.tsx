"use client";
import React from "react";
import NavBar from "@/components/navbar/navbar";
import { usePathname } from "next/navigation";
import Footer from "@/components/footer";

const StaticComponentsProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
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

            <main className=" align-center dark z-0 flex h-full flex-col overscroll-x-none bg-[#e2eafc]  dark:bg-dark  dark:text-textColor  ">
                <div className="mx-40 my-40 flex flex-col items-center justify-center">
                    {children}
                </div>
            </main>
            {showComponent && <Footer />}
        </>
    );
};

export default StaticComponentsProvider;

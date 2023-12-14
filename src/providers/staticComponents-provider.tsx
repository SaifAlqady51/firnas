"use client";
import NavBar from "@/components/navbar";
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
            {children}
            {showComponent && <Footer />}
        </>
    );
};

export default StaticComponentsProvider;

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
    const excludingRoutes = ["/login"];

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

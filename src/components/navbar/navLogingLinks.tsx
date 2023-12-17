import { useLocalStorage } from "@/hooks/useLocalStorage";
import { NavLink } from "./navLink";
import React, { useEffect } from "react";

interface NavLogingLinksProps {
    user: { email: string; name: string } | {};
    setUser: React.Dispatch<
        React.SetStateAction<{ email: string; name: string } | {}>
    >;
    update: boolean;
    setUpdate: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavLogingLinks = ({
    user,
    setUser,
    update,
    setUpdate,
}: NavLogingLinksProps) => {
    const { getItem, removeItem } = useLocalStorage("user");
    useEffect(() => {
        const invokedUser = getItem();
        setUser(invokedUser);
    }, [update]);

    const logout = () => {
        removeItem();
        setUser({});
        setUpdate((prevValue) => !prevValue);
    };
    return (
        <>
            {!user ? (
                <div className="hidden w-1/5 justify-around md:flex  xl:w-2/12 2xl:w-1/12  2xl:justify-between">
                    <NavLink title="login" url="/login" />
                    <NavLink title="Register" url="register" />
                </div>
            ) : (
                <div>
                    <NavLink onClick={logout} title="logout" url="/"></NavLink>
                </div>
            )}
        </>
    );
};

export default NavLogingLinks;

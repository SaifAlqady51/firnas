import { NavLink } from "./navLink";
import React from "react";
import { LogoutLink } from "./logoutLink";

interface TopNavBarProps {
    user: { email: string; name: string } | {};
    setUser: React.Dispatch<
        React.SetStateAction<{ email: string; name: string } | {}>
    >;
}

export const TopNavbar = ({ user, setUser }: TopNavBarProps) => {
    return (
        <>
            <div className="hidden w-5/12 justify-around md:flex lg:w-4/12 xl:w-3/12 ">
                <NavLink title="Documentation" url="./" />
                <NavLink title="Pricing" url="./" />
            </div>

            {!user ? (
                <div className="hidden w-1/5 justify-around md:flex  xl:w-2/12 2xl:w-1/12  2xl:justify-between">
                    <NavLink title="login" url="/login" />
                    <NavLink title="Register" url="register" />
                </div>
            ) : (
                <div className="hidden w-1/5 justify-around md:flex  xl:w-2/12 2xl:w-1/12  2xl:justify-between">
                    <LogoutLink setUser={setUser} />
                </div>
            )}
        </>
    );
};

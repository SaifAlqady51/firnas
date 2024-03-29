import { NavLink } from "./navLink";
import React from "react";
import { ThemeToggler } from "./themeToggler";
import { ProfileTab } from "./ProfileTab";

interface TopNavBarProps {
    user: { email: string; name: string } | {};
    setUser: React.Dispatch<
        React.SetStateAction<{ email: string; name: string } | {}>
    >;
}

export const TopNavbar = ({ user, setUser }: TopNavBarProps) => {
    return (
        <>
            <div className=" absolute ml-0  h-fit w-6/12 items-center   justify-around lg:relative lg:ml-20 lg:flex  xl:w-4/12 ">
                <div className="hidden w-5/12 items-center justify-around lg:flex lg:w-4/12 xl:w-11/12  ">
                    <NavLink title="Documentation" url="./" />
                    <NavLink title="Pricing" url="./" />
                </div>

                <ThemeToggler />
            </div>

            {!user ? (
                <div className="hidden w-1/5 justify-around   lg:flex xl:w-2/12  2xl:w-1/12 2xl:justify-between">
                    <NavLink title="login" url="/login" />
                    <NavLink title="Register" url="register" />
                </div>
            ) : (
                <div className="absolute hidden w-1/5 justify-around md:flex lg:static  xl:w-2/12 2xl:w-1/12  2xl:justify-between">
                    <ProfileTab setUser={setUser} />
                </div>
            )}
        </>
    );
};

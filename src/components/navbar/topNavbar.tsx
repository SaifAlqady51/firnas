import { NavLink } from "./navLink";
import React from "react";
import { LogoutLink } from "./logoutLink";
import { useTheme } from "next-themes";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import { ThemeToggler } from "./themeToggler";

interface TopNavBarProps {
    user: { email: string; name: string } | {};
    setUser: React.Dispatch<
        React.SetStateAction<{ email: string; name: string } | {}>
    >;
}

export const TopNavbar = ({ user, setUser }: TopNavBarProps) => {
    return (
        <>
            <div className=" absolute w-5/12  items-center justify-around lg:flex  lg:w-4/12 xl:w-4/12">
                <div className="hidden w-5/12 items-center justify-around lg:flex lg:w-4/12 xl:w-11/12 ">
                    <NavLink title="Documentation" url="./" />
                    <NavLink title="Pricing" url="./" />
                </div>

                <ThemeToggler />
            </div>

            {!user ? (
                <div className="hidden w-1/5 justify-around lg:flex  xl:w-2/12 2xl:w-1/12  2xl:justify-between">
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

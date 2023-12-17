"use client";
import ReorderIcon from "@mui/icons-material/Reorder";
import { useEffect, useState } from "react";
import { NavLink } from "./navLink";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import React from "react";

interface NavToggleProps {
    user: { email: string; name: string } | {};
    setUser: React.Dispatch<
        React.SetStateAction<{ email: string; name: string } | {}>
    >;
    update: boolean;
    setUpdate: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NavToggle = ({
    user,
    setUser,
    update,
    setUpdate,
}: NavToggleProps) => {
    // menu state has three values "initail", true, false
    const [menu, setMenu] = useState<string | boolean>("initial");

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
            <ReorderIcon
                onClick={() => {
                    menu === "initial"
                        ? setMenu(true)
                        : setMenu((prevValue) => !prevValue);
                }}
                className="absolute right-16 text-4xl md:invisible"
            />

            {
                //  if menu vlaue is initail then dispaly empty div
                menu !== "initial" ? (
                    <div
                        // changing styles according to the value of menu state
                        className={`absolute flex flex-col items-center ${
                            menu ? "right-0" : "-right-55/100"
                        } top-44 h-80  w-3/6  ${
                            menu ? "animate-slide-in" : "animate-slide-out"
                        } rounded-3xl bg-blue-500/80 backdrop-blur-sm md:hidden`}
                    >
                        <NavLink title="Documentation" side={true} url="./" />
                        <NavLink title="Pricing" side={true} url="./" />
                        {!user ? (
                            <div>
                                <NavLink
                                    title="Login"
                                    side={true}
                                    url="/login"
                                />
                                <NavLink
                                    title="Register"
                                    side={true}
                                    url="register"
                                />
                            </div>
                        ) : (
                            <NavLink
                                onClick={logout}
                                title="Logout"
                                side={true}
                                url="/"
                            />
                        )}
                    </div>
                ) : (
                    <div></div>
                )
            }
        </>
    );
};

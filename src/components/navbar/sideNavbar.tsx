"use client";
import ReorderIcon from "@mui/icons-material/Reorder";
import { useState } from "react";
import { NavLink } from "./navLink";
import React from "react";
import { ProfileTab } from "./ProfileTab";

interface NavToggleProps {
    user: { email: string; name: string } | {};
    setUser: React.Dispatch<
        React.SetStateAction<{ email: string; name: string } | {}>
    >;
}

export const SideNavbar = ({ user, setUser }: NavToggleProps) => {
    // menu state has three values "initail", true, false
    const [menu, setMenu] = useState<string | boolean>("initial");

    return (
        <>
            <ReorderIcon
                onClick={() => {
                    menu === "initial"
                        ? setMenu(true)
                        : setMenu((prevValue) => !prevValue);
                }}
                className="absolute right-16 text-4xl lg:invisible"
            />

            {
                //  if menu vlaue is initail then dispaly empty div
                menu !== "initial" ? (
                    <div
                        // changing styles according to the value of menu state
                        className={`absolute flex flex-col items-center ${
                            menu ? "right-0" : "-right-55/100"
                        } top-44 h-fit w-3/6  py-6  ${
                            menu ? "animate-slide-in" : "animate-slide-out"
                        } LG:hidden visible rounded-3xl bg-nav backdrop-blur-sm lg:hidden`}
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
                            <ProfileTab side={true} setUser={setUser} />
                        )}
                    </div>
                ) : (
                    <div></div>
                )
            }
        </>
    );
};

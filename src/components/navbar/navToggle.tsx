"use client";
import ReorderIcon from "@mui/icons-material/Reorder";
import { useState } from "react";
import { NavLink } from "./navLink";

export const NavToggle = () => {
    // menu state has three values "initail", true, false
    const [menu, setMenu] = useState<string | boolean>("initial");

    // this setTimeout used to reset menu value to initial after .5s when it is false
    if (menu === false) {
        setTimeout(() => setMenu("initial"), 500);
    }

    return (
        <>
            <ReorderIcon
                // if menu === initial, then set menu to true on click
                // but if menu is a boolean toggle between true and false
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
                            menu ? "right-0" : "-right-96"
                        } top-44 h-80  w-3/6  ${
                            menu ? "animate-slide-in" : "animate-slide-out"
                        } rounded-3xl bg-blue-500/80 backdrop-blur-sm md:hidden`}
                    >
                        <NavLink title="Documentation" side={true} />

                        <NavLink title="Pricing" side={true} />
                        <NavLink title="Login" side={true} />
                        <NavLink title="Register" side={true} />
                    </div>
                ) : (
                    <div></div>
                )
            }
        </>
    );
};

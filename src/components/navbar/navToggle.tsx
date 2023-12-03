"use client";
import ReorderIcon from "@mui/icons-material/Reorder";
import { useState } from "react";

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
                className="absolute right-16 text-4xl md:hidden"
            />

            {
                //  if menu vlaue is initail then dispaly empty div
                menu !== "initial" ? (
                    <div
                        className={
                            // if menu vlaue is true display side nav with animate-slide-in
                            menu
                                ? " absolute right-0 top-44 h-96  w-3/6 animate-slide-in rounded-3xl bg-blue-500/80 backdrop-blur-sm md:hidden"
                                : // if menu value is false display side nav with animate-slide-out

                                  " animate-slide-right absolute -right-96 top-44  h-96 w-3/6 animate-slide-out rounded-3xl bg-blue-500/80 backdrop-blur-sm  md:hidden"
                        }
                    ></div>
                ) : (
                    <div></div>
                )
            }
        </>
    );
};

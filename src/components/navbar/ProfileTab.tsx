"use client";
import { Dispatch, SetStateAction, useState } from "react";
import { LogoutLink } from "./logoutLink";

type Props = {
    setUser: Dispatch<SetStateAction<{ email: string; name: string } | {}>>;
    side?: boolean;
};

export const ProfileTab = ({ setUser, side }: Props) => {
    // state for showing the profile token and logout links
    const [showProfileDetails, setShowProfileDetails] = useState(false);
    return (
        <div className="hidden flex-col items-center justify-center md:flex">
            {/* Profile title */}
            <div
                className={` ${
                    side ? "mb-3" : "hidden"
                } cursor-pointer rounded-lg px-4 py-2 text-2xl lg:flex`}
                onClick={() => setShowProfileDetails((prevState) => !prevState)}
            >
                Profile
            </div>
            {/* Token and Logout Links */}
            {showProfileDetails && (
                <div
                    className={`${
                        side
                            ? "flex bg-nav"
                            : "absolute bg-[#13293d] dark:bg-white"
                    } right-20 top-20 flex h-32 w-32 flex-col  items-center justify-center rounded-xl border-[1px] border-slate-200   dark:text-black  `}
                >
                    <p className="mb-2 w-8/12 cursor-pointer rounded-lg py-2 text-center text-lg hover:bg-black dark:hover:bg-blue-200">
                        Token
                    </p>
                    {/* manual divider */}
                    <div className="h-[1px] w-10/12 bg-white dark:bg-slate-700"></div>
                    {/* Logout Link */}
                    <p className=" mt-2 w-8/12 cursor-pointer rounded-lg py-2 text-center text-lg hover:bg-black dark:hover:bg-blue-200">
                        <LogoutLink className="" setUser={setUser} />
                    </p>
                </div>
            )}
        </div>
    );
};

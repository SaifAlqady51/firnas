"use client";
import { Dispatch, SetStateAction, useState } from "react";
import { LogoutLink } from "./logoutLink";

type Props = {
    setUser: Dispatch<SetStateAction<{ email: string; name: string } | {}>>;
};

export const ProfileTab = ({ setUser }: Props) => {
    const [showProfileDetails, setShowProfileDetails] = useState(false);
    return (
        <div className="hidden md:flex">
            <div
                className=" hidden cursor-pointer rounded-lg px-4 py-2 text-2xl lg:flex"
                onClick={() => setShowProfileDetails((prevState) => !prevState)}
            >
                Profile
            </div>
            {showProfileDetails && (
                <div className="absolute right-20 top-20 flex h-32  w-32 flex-col items-center justify-center rounded-xl  bg-[#13293d] dark:bg-white dark:text-black  ">
                    <p className="mb-2 w-8/12 cursor-pointer rounded-lg py-2 text-center text-lg hover:bg-black dark:hover:bg-blue-200">
                        Token
                    </p>
                    <div className="h-[1px] w-10/12 bg-white dark:bg-slate-700"></div>
                    <p className=" mt-2 w-8/12 cursor-pointer rounded-lg py-2 text-center text-lg hover:bg-black dark:hover:bg-blue-200">
                        <LogoutLink setUser={setUser} />
                    </p>
                </div>
            )}
        </div>
    );
};

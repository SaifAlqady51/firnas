import React, { SetStateAction, useEffect, useState } from "react";
import { NavLink } from "./navLink";
import { useLocalStorage } from "@/hooks/useLocalStorage";

interface LogoutLinkProps {
    setUser: React.Dispatch<
        SetStateAction<{ email: string; name: string } | {}>
    >;
}

export const LogoutLink = ({ setUser }: LogoutLinkProps) => {
    // this state used as a depandency for useEffect
    const [update, setUpdate] = useState(true);

    // useLocalStorage is a custom hook that invoke, save and delete items form browser local storage
    const { getItem, removeItem } = useLocalStorage("user");

    // useEffect setting local storage user to user state
    useEffect(() => {
        // invoke user form browser local storage
        const invokedUser = getItem();

        // set user to invoked user data
        setUser(invokedUser);

        // update is a toggle state execute when the user logged out
    }, [update]);

    const logout = () => {
        // delete user from local storage
        removeItem();

        // set user state to empty object
        setUser({});

        // toggle update state value
        setUpdate((prevValue) => !prevValue);
    };

    return <NavLink onClick={logout} title="Logout" url="/" />;
};

import { useLocalStorage } from "@/hooks/useLocalStorage";
import { NavLink } from "./navLink";
import { useEffect, useState } from "react";

const NavLinksContainer = () => {
    const [user, setUser] = useState({});
    const [update, setUpdate] = useState(true);

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
            {!user ? (
                <div className="hidden w-1/5 justify-around md:flex  xl:w-2/12 2xl:w-1/12  2xl:justify-between">
                    <NavLink title="login" url="/login" />
                    <NavLink title="Register" url="register" />
                </div>
            ) : (
                <div>
                    <NavLink onClick={logout} title="logout" url="/"></NavLink>
                </div>
            )}
        </>
    );
};

export default NavLinksContainer;

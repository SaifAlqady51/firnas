import { SideNavbar } from "./sideNavbar";
import { useState } from "react";
import { TopNavbar } from "./topNavbar";

const NavBar = () => {
    const [user, setUser] = useState({});

    return (
        <div
            className={`text-textColor fixed  inset-0 z-50 mx-auto mt-4 flex h-24 w-11/12 items-center justify-center rounded-full bg-nav font-bold backdrop-blur-sm dark:text-[#fefae0] lg:justify-around`}
        >
            {/* website Name */}
            <div className="text-4xl font-bold">Firnas</div>

            {/* side navbar appears only in md screen size*/}
            <SideNavbar user={user} setUser={setUser} />

            {/* top navbar shrinks when screen size is md */}
            <TopNavbar user={user} setUser={setUser} />
        </div>
    );
};

export default NavBar;

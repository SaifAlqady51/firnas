import { NavToggle } from "./navToggle";
import { NavLink } from "./navLink";
import NavLinksContainer from "./navLinksContainer";

const NavBar = () => {
    return (
        <div className="fixed inset-0  mx-auto mt-4 flex h-24 w-11/12 items-center justify-center rounded-full bg-blue-500/80 font-bold backdrop-blur-sm md:justify-around ">
            {/* website Name */}
            <div className="text-4xl font-bold">Firnas</div>
            {/* list Icon (display only in sm screens) */}
            <NavToggle />

            {/* Links */}
            <div className="hidden w-5/12 justify-around md:flex lg:w-4/12 xl:w-3/12 ">
                <NavLink title="Documentation" url="./" />
                <NavLink title="Pricing" url="./" />
            </div>
            <NavLinksContainer />
        </div>
    );
};

export default NavBar;

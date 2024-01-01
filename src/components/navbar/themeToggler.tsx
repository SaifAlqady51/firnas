"use client";
import { useTheme } from "next-themes";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness4Icon from "@mui/icons-material/Brightness4";

export const ThemeToggler = () => {
    const { theme, setTheme } = useTheme();

    return (
        <Brightness4Icon
            className="fixed right-8 top-9  sm:right-28   lg:static "
            onClick={() =>
                theme === "dark" ? setTheme("light") : setTheme("dark")
            }
        />
    );
};

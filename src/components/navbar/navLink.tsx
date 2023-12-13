import Link from "next/link";
import { MouseEventHandler } from "react";

interface NavLinkProps {
    title: string;
    side?: boolean;
    url: string;
    onClick?: MouseEventHandler<HTMLAnchorElement>;
}

export const NavLink = ({ title, url, side, onClick }: NavLinkProps) => {
    return (
        <Link
            onClick={onClick}
            className={`rounded-full ${
                side && "my-4 flex w-56 justify-center"
            }  px-4 py-2 text-xl hover:bg-blue-500`}
            href={url}
        >
            {title}
        </Link>
    );
};

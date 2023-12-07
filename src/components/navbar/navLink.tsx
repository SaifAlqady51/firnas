import Link from "next/link";

interface NavLinkProps {
    title: string;
    side?: boolean;
    url: string;
}

export const NavLink = ({ title, side, url }: NavLinkProps) => {
    return (
        <Link
            className={`rounded-full ${
                side && "my-4 flex w-56 justify-center"
            }  px-4 py-2 text-xl hover:bg-blue-500`}
            href={url}
        >
            {title}
        </Link>
    );
};

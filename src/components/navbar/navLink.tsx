import Link from "next/link";

interface NavLinkProps {
    title: string;
    side?: boolean;
}

export const NavLink = ({ title, side }: NavLinkProps) => {
    return (
        <Link
            className={`rounded-full ${
                side && "my-4 flex w-56 justify-center"
            }  px-4 py-2 text-xl hover:bg-gray-600`}
            href="./"
        >
            {title}
        </Link>
    );
};

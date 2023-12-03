import Link from "next/link";

export const NavLink = ({ title }: { title: string }) => {
    return (
        <Link
            className="rounded-full px-4 py-2 text-xl hover:bg-gray-600"
            href="./"
        >
            {title}
        </Link>
    );
};

import Link from "next/link";

export const APIBox = ({ link }: { link: string }) => {
    return (
        <Link
            className="flex h-40 w-80 cursor-pointer flex-col items-center rounded-lg bg-[#1b9aaa] p-8"
            href={link}
        >
            <h2 className="text-3xl">Firnas</h2>
            <h2 className="mt-2 text-3xl">API</h2>
        </Link>
    );
};

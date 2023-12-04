import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
    return (
        <div className="flex h-24 w-full items-center justify-center bg-blue-400 ">
            <a
                href="https://github.com/SaifAlqady51/firnas"
                target="_blank"
                className=" flex w-3/6 items-center justify-center"
            >
                <div className="mr-4 text-lg font-bold">
                    contributor with me
                </div>
                <GitHubIcon className="text-4xl" />
            </a>
        </div>
    );
};

export default Footer;

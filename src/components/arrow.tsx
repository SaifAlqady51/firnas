import { MdArrowForwardIos } from "react-icons/md";
export const Arrow = () => {
    return (
        <div className="relative bg-yellow-500">
            <div className={` h-20 w-1 md:h-1 md:w-20`}></div>
            <MdArrowForwardIos className="absolute -right-2.5 top-16 rotate-90 text-2xl text-yellow-400   md:-right-2  md:-top-2.5 md:rotate-0 " />
        </div>
    );
};

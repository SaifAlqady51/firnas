import { MdArrowForwardIos } from "react-icons/md";
type Props = {
    position: "horizontal" | "vertical";
};
export const Arrow = ({ position }: Props) => {
    return (
        <div className="relative bg-yellow-500">
            <div
                className={`  ${
                    position === "horizontal" ? "h-1 w-20" : "h-20 w-1"
                } `}
            ></div>
            <MdArrowForwardIos className="absolute -right-2 -top-2.5   float-right  text-2xl text-yellow-400 " />
        </div>
    );
};

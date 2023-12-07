import cn from "@/utils/cn";

type InputErrorProps = {
    errorMessage: string | undefined;
    className?: string;
};

const InputError = ({ errorMessage, className }: InputErrorProps) => {
    return (
        <p className={cn("absolute top-20 text-lg text-[#800f2f]", className)}>
            {errorMessage}
        </p>
    );
};

export default InputError;

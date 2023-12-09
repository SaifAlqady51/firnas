import cn from "@/utils/cn";

type InputErrorProps = {
    errorMessage: string | undefined;
    className?: string;
};

const InputError = ({ errorMessage, className }: InputErrorProps) => {
    return (
        <p className={cn("absolute top-20 text-lg text-[#a4161a]", className)}>
            {errorMessage}
        </p>
    );
};

export default InputError;

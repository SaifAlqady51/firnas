import { Inputs } from "@/types/inputs-type";
import cn from "@/utils/cn";
import { FieldErrors } from "react-hook-form";

type InputErrorProps = {
    errors: FieldErrors<Inputs>;
    className?: string;
    name: string;
};

const InputError = ({ errors, className, name }: InputErrorProps) => {
    let errorMessage: string | undefined;
    switch (name) {
        case "email":
            errorMessage = errors.email?.message;
            break;
        case "password":
            errorMessage = errors.password?.message;
            break;
        case "rePassword":
            errorMessage = errors.rePassword?.message;
            break;
        case "name":
            errorMessage = errors.name?.message;
            break;
        case "code":
            errorMessage = errors.code?.message;
            break;
    }
    return (
        <p
            className={cn(
                "absolute left-16 top-20 text-lg text-[#a4161a]",
                className,
            )}
        >
            {errorMessage}
        </p>
    );
};

export default InputError;

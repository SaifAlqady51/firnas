import React, { FC } from "react";
import cn from "../../utils/cn";
import { FieldValues, UseFormRegister } from "react-hook-form";
import { LoginInputs } from "@/app/types/loginInputs-type";

interface InputProps  extends React.InputHTMLAttributes<HTMLInputElement> {
    register: UseFormRegister<LoginInputs>,
    name: "email" | "password"
}  ;


type InputFieldProps = {
    register: any;
    className: InputProps;
};

const InputField = ({register,className,...props}: InputProps ) => {
    return (
        <>
            <input
                className={cn(
                    "my-12 h-12 w-80  rounded-full p-4 placeholder-gray-500",
                    className,
                )}
                type={props.type}
                placeholder={props.name}
                {...register(props?.name)}
            />
        </>
    );
};

export default InputField;
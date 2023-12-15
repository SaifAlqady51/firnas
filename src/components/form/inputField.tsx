"use client";
import React from "react";
import cn from "../../utils/cn";
import { UseFormRegister } from "react-hook-form";
import { Inputs } from "@/types/inputs-type";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    register: UseFormRegister<Inputs>;
    name: "email" | "password" | "name" | "code" | "rePassword";
}

const InputField = ({ register, className, ...props }: InputProps) => {
    return (
        <>
            <input
                className={cn(
                    "my-6 h-12 w-80  rounded-full p-4 placeholder-gray-500",
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

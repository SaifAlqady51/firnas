"use client";
import React, { useState } from "react";
import cn from "../../utils/cn";
import { UseFormRegister } from "react-hook-form";
import { Inputs } from "@/types/inputs-type";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    register: UseFormRegister<Inputs>;
    name: "email" | "password" | "name" | "code" | "rePassword";
}

const InputField = ({ register, className, ...props }: InputProps) => {
    // next logic used just for password: ==>
    // set state for show or hide pssword
    const [showPassword, setShowPassword] = useState(false);

    // set state for localType make the type passwor
    const [localType, setLocalType] = useState(
        props.name === "rePassword" ? "password" : props.type,
    );

    // function that make password invisible
    const passwordInvisibality = () => {
        setShowPassword(false);
        setLocalType("password");
    };

    // function that make password visible
    const passwordVisible = () => {
        setShowPassword(true);
        setLocalType("text");
    };

    return (
        <div className="relative">
            <input
                className={cn(
                    "my-6 h-12 w-80  rounded-full p-4 placeholder-gray-500",
                    className,
                )}
                type={localType}
                placeholder={props.name}
                {...register(props?.name)}
            />
            {props.name === "password" || props.name === "rePassword" ? (
                showPassword ? (
                    <VisibilityIcon
                        className="absolute right-4 top-9"
                        onClick={passwordInvisibality}
                    />
                ) : (
                    <VisibilityOffIcon
                        className="absolute right-4 top-9"
                        onClick={passwordVisible}
                    />
                )
            ) : null}
        </div>
    );
};

export default InputField;

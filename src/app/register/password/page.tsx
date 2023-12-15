"use client";
import React from "react";
import { userRegister } from "@/api";
import FormCardContainer from "@/components/form/formContainer";
import { RegisterPasswordFormSchema } from "@/schemas/registerPassword-schema";
import {
    FailedFormResponseType,
    LoginResponseType,
} from "@/types/apiRespons-types";
import { Inputs } from "@/types/inputs-type";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

interface onSubmitLogicInputs {
    data: Inputs;
    setResStatus: React.Dispatch<
        React.SetStateAction<FailedFormResponseType | LoginResponseType>
    >;
    setItem: any;
    router: AppRouterInstance;
    name: string;
    email: string;
}

const RegisterPasswordPage = () => {
    const onSubmitLogic = async ({
        data,
        setResStatus,
        setItem,
        router,
        name,
        email,
    }: onSubmitLogicInputs) => {
        if (data.password === data.rePassword) {
            const registerUser = await userRegister(
                name!,
                email!,
                data.password!,
            );
            if (registerUser.status === "success") {
                setItem({ email: email, name: name });
                router.push("/");
            } else {
                setResStatus(registerUser);
            }
        } else {
            setResStatus({
                message: "passwords are not the same",
                status: "error",
            });
        }
    };

    return (
        <FormCardContainer
            formTitle="Register now"
            onSubmitLogic={onSubmitLogic}
            formInputsType={RegisterPasswordFormSchema}
            inputsValue={["password", "rePassword"]}
        />
    );
};

export default RegisterPasswordPage;

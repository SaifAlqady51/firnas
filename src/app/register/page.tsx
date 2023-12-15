"use client";
import React from "react";
import FormCardContainer from "@/components/form/formContainer";
import { Inputs } from "@/types/inputs-type";
import { RegisterFormSchema } from "@/schemas/registerForm-schema";
import { checkEmail } from "@/api/checkEmail";
import {
    FailedFormResponseType,
    RegisterResponseType,
    ValidateEmailResponseType,
} from "@/types/apiRespons-types";
import { validateEmail } from "@/api/sendValidationEmail";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

interface onSubmitLogicInputs {
    data: Inputs;
    setResStatus: React.Dispatch<
        React.SetStateAction<FailedFormResponseType | RegisterResponseType>
    >;
    setItem: any;
    router: AppRouterInstance;
}

const RegisterPage = () => {
    // onSubmit logic for register form
    const onSubmitLogic = async ({
        data,
        setResStatus,
        setItem,
        router,
    }: onSubmitLogicInputs) => {
        if (data.email) {
            // returning register response that chech if the emial already exists
            const registerResponse = await checkEmail(data.email);
            // store register response to response status state
            setResStatus(registerResponse);
            // check if register response is success
            if (registerResponse.status === "success") {
                // send code
                setItem({ email: data.email, name: data.name });
                const emailValidation = (await validateEmail(
                    data.email,
                )) as ValidateEmailResponseType;
                router.push(
                    `register/code?code=${emailValidation.code}&email=${data.email}&name=${data.name}`,
                );
                setResStatus(emailValidation);
            }
        }
    };

    return (
        <FormCardContainer
            onSubmitLogic={onSubmitLogic}
            formTitle="Register now"
            className="h-120"
            redirectMessage="already have an account"
            redirectLink="login"
            inputsValue={["name", "email"]}
            formInputsType={RegisterFormSchema}
        />
    );
};

export default RegisterPage;

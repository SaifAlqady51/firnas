"use client";
import React from "react";
import { LoginFormSchema } from "../../schemas/loginForm-schema";
import { userLogin } from "@/api";
import {
    FailedFormResponseType,
    LoginResponseType,
} from "../../types/apiRespons-types";
import { Inputs } from "../../types/inputs-type";
import FormContainer from "@/components/form/formContainer";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

interface onSubmitLogicInputs {
    data: Inputs;
    setResStatus: React.Dispatch<
        React.SetStateAction<FailedFormResponseType | LoginResponseType>
    >;
    setItem: any;
    router: AppRouterInstance;
}

const LoginPage = () => {
    const onSubmitLogic = async ({
        data,
        setResStatus,
        setItem,
        router,
    }: onSubmitLogicInputs) => {
        if (data.email && data.password) {
            // get login response from API
            const loginResponse = await userLogin(data.email, data.password);
            // store response in ResStatus state
            setResStatus(loginResponse);
            // add email to local storage
            setItem({ email: data.email });

            if (loginResponse?.status === "success") {
                router.push("/");
            }
        }
    };

    return (
        <FormContainer
            onSubmitLogic={onSubmitLogic}
            formTitle="Log in to account"
            redirectMessage="create new account"
            redirectLink=" register"
            formInputsType={LoginFormSchema}
            inputsValue={["email", "password"]}
        />
    );
};

export default LoginPage;

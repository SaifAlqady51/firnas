"use client";
import React from "react";
import FormCardContainer from "@/components/form/formContainer";
import { Inputs } from "@/types/inputs-type";
import * as bcrypt from "bcryptjs";
import {
    FailedFormResponseType,
    ValidateEmailResponseType,
} from "@/types/apiRespons-types";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { RegisterCodeFormSchema } from "@/schemas/registerCode-schema";

interface onSubmitLogicInputs {
    data: Inputs;
    setResStatus: React.Dispatch<
        React.SetStateAction<FailedFormResponseType | ValidateEmailResponseType>
    >;
    router: AppRouterInstance;
    code: string;
    name: string;
    email: string;
}

// this page display a form with cod input to type the code sent to you by email
const CodePage = () => {
    // onSubmit logic for code form
    const onSubmitLogic = async ({
        data,
        setResStatus,
        router,
        code,
        name,
        email,
    }: onSubmitLogicInputs) => {
        if (data.code) {
            // compare passed code to hashed code
            const correctCode = await bcrypt.compare(data.code, `${code}`);
            // if code compared successfully
            if (correctCode) {
                // save email and name  to local storage
                // setItem({ email: email,name:name});
                // go to register password to set password
                router.push(`/register/password?email=${email}&name=${name}`);
            } else {
                setResStatus({
                    status: "error",
                    message: "Code is not correct",
                });
            }
        }
    };

    return (
        <FormCardContainer
            onSubmitLogic={onSubmitLogic}
            formTitle="Enter Code"
            redirectLink="register"
            redirectMessage="change email"
            className="h-108"
            inputsValue={["code"]}
            formInputsType={RegisterCodeFormSchema}
        />
    );
};
export default CodePage;

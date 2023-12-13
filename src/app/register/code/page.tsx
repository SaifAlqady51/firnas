"use client";
import FormCardContainer from "@/components/form/formContainer";
import { useSearchParams } from "next/navigation";
import InputField from "@/components/form/inputField";
import { Inputs, RegisterCodeInputs } from "@/types/inputs-type";
import { SubmitHandler, useForm } from "react-hook-form";
import * as bcrypt from "bcryptjs";
import { validateEmail } from "@/api/";
import { useState } from "react";
import {
    FailedFormResponseType,
    ValidateEmailResponseType,
} from "@/types/apiRespons-types";
import { useRouter } from "next/navigation";
import { useLocalStorage } from "@/hooks/useLocalStorage";

// this page display a form with cod input to type the code sent to you by email
const CodePage = () => {
    // get the query from url
    const searchParams = useSearchParams();

    // get code query
    const code = searchParams.get("code");

    // get email query
    const email = searchParams.get("email");

    // state for response status
    const [resStatus, setResStatus] = useState<
        FailedFormResponseType | ValidateEmailResponseType
    >();

    // route handling
    const router = useRouter();

    // customed hook
    const { setItem } = useLocalStorage("user");

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();

    const sendEmailAgain = async (email: string) => {
        const EmailValidationResponse = await validateEmail(email);
        if (EmailValidationResponse.status === "success") {
            router.push(
                `/register/code?code=${EmailValidationResponse.code}&email=${email}`,
            );
            router.refresh();

            setResStatus(EmailValidationResponse);
        }
    };

    const onSubmition: SubmitHandler<Inputs> = async (data) => {
        if (data.code) {
            const correctCode = await bcrypt.compare(data.code, `${code}`);
            if (correctCode) {
                setItem({ email: email });
                router.push("/");
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
            onSubmit={onSubmition}
            formTitle="Enter Code"
            handleSubmit={handleSubmit}
            redirectLink="register"
            redirectMessage="change email"
            resStatus={resStatus}
            className="h-108"
        >
            <InputField register={register} name="code" />
            <div
                className="mb-4 cursor-pointer text-lg"
                onClick={() => sendEmailAgain(email!)}
            >
                {" "}
                send code again{" "}
            </div>
        </FormCardContainer>
    );
};
export default CodePage;

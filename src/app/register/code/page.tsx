"use client";
import FormCardContainer from "@/components/form/formContainer";
import { useSearchParams } from "next/navigation";
import InputField from "@/components/form/inputField";
import { Inputs, RegisterCodeInputs } from "@/types/inputs-type";
import { SubmitHandler, useForm } from "react-hook-form";
import * as bcrypt from "bcryptjs";
import { validateEmail } from "@/api/sendValidationEmail";
import { useState } from "react";
import { FormResponseType } from "@/types/loginResponse-type";
import { useRouter } from "next/navigation";

// this page display a form with cod input to type the code sent to you by email
const CodePage = () => {
    const searchParams = useSearchParams();

    const [resStatus, setResStatus] = useState<FormResponseType>();

    const router = useRouter();

    const code = searchParams.get("code");
    const email = searchParams.get("email");
    console.log(email);
    console.log(code);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();

    const sendEmailAgain = async (email: string) => {
        const EmailValidationResponse = await validateEmail(email);
        router.push(
            `/register/code?code=${EmailValidationResponse.code}&email=${email}`,
        );
        router.refresh();

        setResStatus(EmailValidationResponse);
    };

    const onSubmition: SubmitHandler<Inputs> = async (data) => {
        console.log(await bcrypt.compare(`${data.code}`, `${code}`));
    };

    return (
        <FormCardContainer
            onSubmit={onSubmition}
            formTitle="Enter Code"
            handleSubmit={handleSubmit}
            redirectLink="register"
            redirectMessage="change email"
            resStatus={resStatus}
        >
            <InputField register={register} name="code" />
            <div onClick={() => sendEmailAgain(email!)}> send code again </div>
        </FormCardContainer>
    );
};
export default CodePage;

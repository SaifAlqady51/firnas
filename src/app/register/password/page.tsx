"use client";
import { userRegister } from "@/api";
import FormCardContainer from "@/components/form/formContainer";
import InputError from "@/components/form/inputError";
import InputField from "@/components/form/inputField";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { RegisterFormSchema } from "@/schemas/registerForm-schema";
import { RegisterPasswordFormSchema } from "@/schemas/registerPassword-schema";
import {
    FailedFormResponseType,
    RegisterResponseType,
} from "@/types/apiRespons-types";
import { Inputs } from "@/types/inputs-type";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

const RegisterPasswordPage = () => {
    const [resStatus, setResStatus] = useState<
        FailedFormResponseType | RegisterResponseType
    >();

    const router = useRouter();
    const searchParams = useSearchParams();
    const name = searchParams.get("name");
    const email = searchParams.get("email");

    const { setItem } = useLocalStorage("user");

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>({ resolver: zodResolver(RegisterPasswordFormSchema) });

    const onSubmit: SubmitHandler<Inputs> = async (data, event) => {
        event?.preventDefault();
        console.log(data)
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
            formTitle="Register"
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            resStatus={resStatus}
        >
            <InputField
                register={register}
                name="password"
                className="mb-1 mt-4"
            />

            <InputError errorMessage={errors.password?.message} />

            <InputField register={register} name="rePassword" />
        </FormCardContainer>
    );
};

export default RegisterPasswordPage;

"use client";
import FormCardContainer from "@/components/form/formContainer";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Inputs } from "@/types/inputs-type";
import { RegisterFormSchema } from "@/schemas/registerForm-schema";
import InputField from "@/components/form/inputField";
import InputError from "@/components/form/inputError";

const RegisterPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>({ resolver: zodResolver(RegisterFormSchema) });

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        console.log(data);
    };

    return (
        <FormCardContainer

            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            formTitle="Register now"
            className="h-132"
            redirectMessage="already have an account"
            redirectLink="login"
        >
            {/* Name input */}
            <InputField register={register} name="name" className="mb-6 mt-6" />
            
            {/* Error of name input */}
            <InputError errorMessage={errors.name?.message} className="top-20"/>

            {/* Email input */}
            <InputField register={register} name="email" className="my-6" />

            {/* Error of email input */}
            <InputError errorMessage={errors.email?.message}  className="top-44"/>

            {/* Password input */}
            <InputField register={register} name="password" className="my-6" />
            {/* Error of password input */}
            <InputError errorMessage={errors.password?.message}  className="top-60"/>
        </FormCardContainer>
    );
};

export default RegisterPage;

"use client";
import FormCardContainer from "@/components/form/formContainer";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Inputs } from "@/types/inputs-type";
import { RegisterFormSchema } from "@/schemas/registerForm-schema";
import InputField from "@/components/form/inputField";

const Register = () => {
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
        >
            <InputField register={register} name="name" className="mb-4 mt-6" />
            <InputField register={register} name="email" className="my-4" />
            <InputField register={register} name="password" className="my-4" />
        </FormCardContainer>
    );
};

export default Register;

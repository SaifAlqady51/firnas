"use client";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormSchema } from "../../schemas/loginForm-schema";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { login } from "../users/login";
import ChangableAlert from "@/components/form/alert";
import { LoginResponse } from "../../types/loginResponse-type";
import InputField from "@/components/form/inputField";
import InputError from "@/components/form/inputError";
import { useRouter } from "next/navigation";
import { Inputs } from "../../types/inputs-type";
import FormContainer from "@/components/form/formContainer";

const LoginPage = () => {
    const router = useRouter();
    // resStatus state store the Login User response values
    const [resStatus, setResStatus] = useState<LoginResponse>();

    // viewPassword toggle between true and false to dispaly or hide password
    const [viewPassword, setViewPassword] = useState<boolean>(false);

    // useForm is an react-hook-form state
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>({ resolver: zodResolver(LoginFormSchema) });

    const onSubmit: SubmitHandler<Inputs> = async (data, event) => {
        event?.preventDefault();
        // get the database response form login, and store in res variable
        const loginResponse = await login(data.email, data.password);

        // store the login response in resStatus state
        setResStatus(loginResponse);
        if (loginResponse?.status === "success") {
            router.push("/");
        }
    };

    return (
        <FormContainer
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            formTitle="Log in to account"
            resStatus={resStatus}
        >
            {/* Email field*/}
            <InputField
                register={register}
                type="text"
                name="email"
                className="mb-1 mt-4"
            />

            {/* Email error massage */}
            <InputError errorMessage={errors.email?.message} />

            {/* Password Field*/}
            <InputField
                register={register}
                type={viewPassword ? "text" : "password"}
                name="password"
            />
            {/* Password error message */}
            <InputError
                className="top-44"
                errorMessage={errors.password?.message}
            />

            {/* Password toggle visability */}
            <RemoveRedEyeIcon
                onClick={() => setViewPassword((viewPassword) => !viewPassword)}
                className="absolute right-2 top-32 "
            />

            {/* Register redirect */}
            <h3 className=" mt-4">
                already have an account{" "}
                <span className=" text-[#bde0fe] underline">
                    <Link href="/register"> register</Link>
                </span>{" "}
            </h3>
        </FormContainer>
    );
};

export default LoginPage;

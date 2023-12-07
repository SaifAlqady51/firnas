"use client";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormSchema } from "../schemas/loginForm-schema";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { login } from "../users/login";
import ChangableAlert from "@/components/form/alert";
import { LoginResponse } from "../types/loginResponse-type";
import InputField from "@/components/form/inputField";
import InputError from "@/components/form/inputError";
import { useRouter } from "next/navigation";
import { LoginInputs } from "../types/loginInputs-type";


const LoginPage = () => {
    const router = useRouter()
    // resStatus state store the Login User response values
    const [resStatus, setResStatus] = useState<LoginResponse>();

    // viewPassword toggle between true and false to dispaly or hide password
    const [viewPassword, setViewPassword] = useState<boolean>(false);

    // useForm is an react-hook-form state
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginInputs>({ resolver: zodResolver(LoginFormSchema) });

    const onSubmit: SubmitHandler<LoginInputs> = async (data,event) => {

        event?.preventDefault()
        // get the database response form login, and store in res variable
        const loginResponse = await login(data.email, data.password);

        // store the login response in resStatus state
        setResStatus(loginResponse);
        if (loginResponse?.status === "success") {
            router.push("/");
        }
    };

    return (
        // Login page container
        <div className="flex h-screen w-screen flex-col items-center justify-center bg-light ">
            {/* Alert */}
            {resStatus && (
                <ChangableAlert
                    status={resStatus?.status}
                    message={resStatus.message}
                />
            )}

            {/* Login card */}
            <div className="relative  flex h-120  w-96 flex-col items-center justify-start bg-loginCard pt-16 xsm:rounded-3xl md:mb-20 ">
                {/*  Firnas title */}
                <h2 className="absolute left-8 top-4 text-2xl font-extrabold text-light">
                    Firnas
                </h2>

                {/* Login card title */}
                <h1 className="text-4xl font-bold text-dark ">
                    Log in to account
                </h1>

                {/* Form */}
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="relative mt-4 flex flex-col items-center"
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
                        onClick={() =>
                            setViewPassword((viewPassword) => !viewPassword)
                        }
                        className="absolute right-2 top-32 "
                    />

                    {/* Register redirect */}
                    <h3 className=" mt-4">
                        already have an account{" "}
                        <span className=" text-[#bde0fe] underline">
                            <Link href="/register"> register</Link>
                        </span>{" "}
                    </h3>

                    {/* Submit Buttom */}
                    <button
                        className="mt-4 h-12 w-40 rounded-full bg-[#64dfdf] text-2xl font-bold "
                        type="submit"
                    >
                        submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;

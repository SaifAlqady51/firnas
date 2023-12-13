"use client";
import { useRouter } from "next/navigation";
import FormCardContainer from "@/components/form/formContainer";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Inputs } from "@/types/inputs-type";
import { RegisterFormSchema } from "@/schemas/registerForm-schema";
import InputField from "@/components/form/inputField";
import InputError from "@/components/form/inputError";
import { checkEmail } from "@/api/checkEmail";
import { useState } from "react";
import { FormResponseType } from "@/types/loginResponse-type";
import sendMail from "@/lib/mail";
import { validateEmail } from "@/api/sendValidationEmail";
import Link from "next/link";

const RegisterPage = () => {
    // router
    const router = useRouter();

    // password visibility
    const [viewPassword, setViewPassword] = useState(false);

    // response status
    const [resStatus, setResStatus] = useState<FormResponseType>();

    // useForm from react-hook-form
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>({ resolver: zodResolver(RegisterFormSchema) });

    // handle submition
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        console.log(data);
        if (data.email) {
            // returning register response that chech if the emial already exists
            const registerResponse = await checkEmail(data.email);
            console.log(registerResponse);
            setResStatus(registerResponse);
            if (registerResponse.status === "success") {
                const emailValidation = await validateEmail(data.email);
                router.push(
                    `register/code?code=${emailValidation.code}&email=${data.email}`,
                );
                setResStatus(emailValidation);
            }
        }
    };

    return (
        <FormCardContainer
            handleSubmit={handleSubmit}
            resStatus={resStatus}
            onSubmit={onSubmit}
            formTitle="Register now"
            className="h-120"
            redirectMessage="already have an account"
            redirectLink="login"
        >
            {/* <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="relative mt-4 flex flex-col items-center"
                > */}

            <InputField register={register} name="name" className="mb-6 mt-4" />

            {/* Error of name input */}
            <InputError
                errorMessage={errors.name?.message}
                className="top-18"
            />

            {/* Email input */}
            <InputField register={register} name="email" className="my-6" />

            {/* Error of email input */}
            <InputError
                errorMessage={errors.email?.message}
                className="top-42"
            />
            {/*  Redirect */}
            {/* <h3 className=" mt-4">
                        already have an account
                        <span className=" text-[#bde0fe] underline">
                            <Link href={`/login`}>
                                {" "}
                                login
                            </Link>
                        </span>{" "}
                    </h3> */}

            {/* Submit Buttom */}
            {/* <button 
                        className="mt-4 h-12 w-40 rounded-full bg-[#64dfdf] text-2xl font-bold "
                        type="submit"
                    >
                        submit
                    </button>
                </form>  */}
            {/* Name input */}

            {/* Password input */}
            {/* <InputField type={viewPassword? "text" : "password"} register={register} name="password" className="my-6" /> */}
            {/* Error of password input */}
            {/* <InputError errorMessage={errors.password?.message}  className="top-66"/> */}

            {/* <RemoveRedEyeIcon
                onClick={() => setViewPassword((viewPassword:boolean) => !viewPassword)}
                className="absolute right-2 top-55"
            /> */}
        </FormCardContainer>
    );
};

export default RegisterPage;

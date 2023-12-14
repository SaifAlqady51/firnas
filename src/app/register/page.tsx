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
import {
    FailedFormResponseType,
    RegisterResponseType,
    ValidateEmailResponseType,
} from "@/types/apiRespons-types";
import { validateEmail } from "@/api/sendValidationEmail";
import { useLocalStorage } from "@/hooks/useLocalStorage";

const RegisterPage = () => {
    // router
    const router = useRouter();

    // custom local storage hook

    const { setItem } = useLocalStorage("user");

    // password visibility
    const [viewPassword, setViewPassword] = useState(false);

    // response status
    const [resStatus, setResStatus] = useState<
        | FailedFormResponseType
        | RegisterResponseType
        | ValidateEmailResponseType
    >();

    // useForm from react-hook-form
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>({ resolver: zodResolver(RegisterFormSchema) });

    // handle submition
    const onSubmit: SubmitHandler<Inputs> = async (data, event) => {
        event?.preventDefault();

        if (data.email) {
            // returning register response that chech if the emial already exists
            const registerResponse = await checkEmail(data.email);
            // store register response to response status state
            setResStatus(registerResponse);
            // check if register response is success
            if (registerResponse.status === "success") {
                // send code
                setItem({ email: data.email, name: data.name });
                const emailValidation = (await validateEmail(
                    data.email,
                )) as ValidateEmailResponseType;
                router.push(
                    `register/code?code=${emailValidation.code}&email=${data.email}&name=${data.name}`,
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

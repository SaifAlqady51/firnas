"use client";
import {
    FailedFormResponseType,
    SuccessFormResponseType,
} from "@/types/apiRespons-types";
import ChangableAlert from "./alert";
import { useForm } from "react-hook-form";
import { Inputs } from "@/types/inputs-type";
import { SubmitHandler } from "react-hook-form";
import cn from "@/utils/cn";
import Link from "next/link";
import InputField from "./inputField";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import InputError from "./inputError";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useRouter, useSearchParams } from "next/navigation";

const inputs: "email" | "password" | "rePassword" | "code" | "name" = "email";

interface FormCardContainerProps {
    formTitle: string;
    onSubmitLogic: any;
    className?: string;
    redirectMessage?: string;
    redirectLink?: string;
    inputsValue: any[];
    formInputsType: any;
}

const FormCardContainer = ({
    formTitle,
    onSubmitLogic,
    className,
    redirectMessage,
    redirectLink,
    inputsValue,
    formInputsType,
}: FormCardContainerProps) => {
    // useLocalStorage is a custom hook that dealing with the local storage in browser
    const { setItem } = useLocalStorage("user");

    // get router
    const router = useRouter();

    // get search params form url
    const searchParams = useSearchParams();

    // get code, name and email from url
    const code = searchParams.get("code");
    const name = searchParams.get("name");
    const email = searchParams.get("email");

    // api response status state
    const [resStatus, setResStatus] = useState<
        FailedFormResponseType | SuccessFormResponseType
    >();

    // useForm from react-hook-form
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>({ resolver: zodResolver(formInputsType) });

    // onSubmit form function
    const onSubmit: SubmitHandler<Inputs> = async (data, event) => {
        event?.preventDefault();
        onSubmitLogic({
            data,
            setResStatus,
            setItem,
            router,
            code,
            name,
            email,
        });
    };

    return (
        <div className="flex h-screen w-screen flex-col items-center justify-center bg-light ">
            {/* Alert */}
            {resStatus && (
                <ChangableAlert
                    status={resStatus?.status}
                    message={resStatus.message}
                />
            )}
            {/* Form Card */}
            <div
                className={cn(
                    "relative  flex h-120  w-96 flex-col items-center justify-start bg-loginCard pt-16 xsm:rounded-3xl md:mb-20 ",
                    className,
                )}
            >
                {/* Firnase */}
                <h2 className="absolute left-8 top-4 text-2xl font-extrabold text-light">
                    Firnas
                </h2>
                {/* Form title */}
                <h1 className="text-4xl font-bold text-dark ">{formTitle}</h1>
                {/* Form logic */}
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="relative mt-4 flex flex-col items-center"
                >
                    {/* map over each input value in inputsValue list */}
                    {inputsValue?.map((input: typeof inputs) => (
                        <div key={inputsValue.indexOf(input)}>
                            <InputField
                                register={register}
                                name={input}
                                type={input}
                            />
                            <InputError errors={errors} name={input} />
                        </div>
                    ))}
                    {/* {children} */}

                    {/*  Redirect */}
                    <h3 className=" mt-4">
                        {redirectMessage}
                        <span className=" text-[#bde0fe] underline">
                            <Link href={`/${redirectLink}`}>
                                {redirectLink}
                            </Link>
                        </span>
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

export default FormCardContainer;

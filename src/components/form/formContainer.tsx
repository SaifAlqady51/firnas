import {
    FailedFormResponseType,
    SuccessFormResponseType,
} from "@/types/apiRespons-types";
import ChangableAlert from "./alert";
import { UseFormHandleSubmit } from "react-hook-form";
import {
    Inputs,
    LoginInputs,
    RegisterCodeInputs,
    RegisterInputs,
    RegisterPasswordInputs,
} from "@/types/inputs-type";
import { SubmitHandler } from "react-hook-form";
import cn from "@/utils/cn";
import Link from "next/link";
import { redirect } from "next/dist/server/api-utils";

interface FormCardContainerProps {
    children: React.ReactNode;
    resStatus?: FailedFormResponseType | SuccessFormResponseType | undefined;
    formTitle: string;
    handleSubmit: UseFormHandleSubmit<Inputs>;
    onSubmit: SubmitHandler<Inputs>;
    className?: string;
    redirectMessage?: string;
    redirectLink?: string;
}

const FormCardContainer = ({
    children,
    resStatus,
    formTitle,
    handleSubmit,
    onSubmit,
    className,
    redirectMessage,
    redirectLink,
}: FormCardContainerProps) => {
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
                    {children}

                    {/*  Redirect */}
                    <h3 className=" mt-4">
                        {redirectMessage}
                        <span className=" text-[#bde0fe] underline">
                            <Link href={`/${redirectLink}`}>
                                {" "}
                                {redirectLink}
                            </Link>
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

export default FormCardContainer;

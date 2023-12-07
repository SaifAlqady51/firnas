import { LoginResponse } from "@/types/loginResponse-type";
import ChangableAlert from "./alert";
import { UseFormHandleSubmit } from "react-hook-form";
import { Inputs } from "@/types/inputs-type";
import { SubmitHandler } from "react-hook-form";

interface FormCardContainerProps {
    children: React.ReactNode;
    resStatus?: LoginResponse | undefined;
    formTitle: string;
    handleSubmit: UseFormHandleSubmit<Inputs>;
    onSubmit: SubmitHandler<Inputs>;
}

const FormCardContainer = ({
    children,
    resStatus,
    formTitle,
    handleSubmit,
    onSubmit,
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
            <div className="relative  flex h-120  w-96 flex-col items-center justify-start bg-loginCard pt-16 xsm:rounded-3xl md:mb-20 ">
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

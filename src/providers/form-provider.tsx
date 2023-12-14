'use client'

import { Inputs } from "@/types/inputs-type";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { ZodType } from "zod";

type FormProviderProps =  {

    children:React.ReactNode;
    inputSchema:ZodType<any>;
}


const FormProvider = ({children, inputSchema} :FormProviderProps) => {


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>({ resolver: zodResolver(inputSchema) });

    return(
        <div>
            {children}
        </div>
    )
}

export default FormProvider
import { FailedFormResponseType } from "@/types/apiRespons-types";
import { AxiosError } from "axios";

type AxiosErrorData = {
    statusCode: number;
    message: string;
};

export const errorResponse = (e: unknown) => {
    const error = e as AxiosError;
    // get error response data from axios error
    const dataError = error?.response?.data as AxiosErrorData;
    // store error message and status in response variable
    const res: FailedFormResponseType = {
        message: dataError.message,
        status: "error",
    };
    return res;
};

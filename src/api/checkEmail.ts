import axios, { AxiosError } from "axios";
import {
    FailedFormResponseType,
    SuccessFormResponseType,
} from "../types/apiRespons-types";
import { errorResponse } from "./errorResponse";

type AxiosErrorData = {
    statusCode: number;
    message: string;
};

export const checkEmail = async (email: string) => {
    try {
        const user = await axios.post(
            `${process.env.USERS_URL}/check-email-existence`,
            { email },
        );
        const res: SuccessFormResponseType = {
            message: "Valid Email",
            status: "success",
        };
        return res;
    } catch (e) {
        const res = errorResponse(e);
        return res;
    }
};

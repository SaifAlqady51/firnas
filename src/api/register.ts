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

export const userRegister = async (
    name: string | undefined,
    email: string,
    password: string,
) => {
    try {
        const user = await axios.post(`${process.env.USERS_URL}/register`, {
            name,
            email,
            password,
        });
        const res: SuccessFormResponseType = {
            message: "Registered successfully",
            status: "success",
        };
        return res;
    } catch (e) {
        const res = errorResponse(e);
        return res;
    }
};

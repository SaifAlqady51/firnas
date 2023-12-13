import axios, { AxiosError } from "axios";
import {
    FailedFormResponseType,
    LoginResponseType,
} from "../types/apiRespons-types";
import { errorResponse } from "./errorResponse";

type AxiosErrorData = {
    statusCode: number;
    message: string;
};

export const userLogin = async (email: string, password: string) => {
    try {
        const user = await axios.post(`${process.env.USERS_URL}/login`, {
            email,
            password,
        });
        const userData = user.data;
        const res: LoginResponseType = {
            message: "Logged in successfully",
            status: "success",
            userData,
        };
        return res;
    } catch (e) {
        const res = errorResponse(e);
        return res;
    }
};

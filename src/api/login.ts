import axios, { AxiosError } from "axios";
import { LoginResponse } from "../types/loginResponse-type";

type AxiosErrorData = {
    statusCode: number;
    message: string;
};

export const login = async (email: string, password: string) => {
    try {
        const user = await axios.post(
            `${process.env.USERS_URL}/login`,
            { email, password },
        );
        // const user = await axios(config)
        const status = "success";
        const message = "logged in successfully";
        const res: LoginResponse = { message, status };
        return res;
    } catch (e) {
        const error = e as AxiosError;
        const dataError = error?.response?.data as AxiosErrorData;
        const status = "error";
        const message = dataError.message;
        const res: LoginResponse = { message, status };
        return res;
    }
};

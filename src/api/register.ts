
import axios, { AxiosError } from "axios";
import { LoginResponse } from "../types/loginResponse-type";

type AxiosErrorData = {
    statusCode: number;
    message: string;
};

export const userRegister = async (name:string | undefined,email: string, password: string) => {
    try {
        const user = await axios.post(
            `${process.env.USERS_URL}/register`,
            {name, email, password },
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
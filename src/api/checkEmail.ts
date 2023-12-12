import axios, { AxiosError } from "axios";
import { FormResponseType } from "../types/loginResponse-type";

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
        // const user = await axios(config)
        const status = "success";
        const message = "";
        const res: FormResponseType = { message, status };
        return res;
    } catch (e) {
        const error = e as AxiosError;
        const dataError = error?.response?.data as AxiosErrorData;
        const status = "error";
        const message = dataError.message;
        const res: FormResponseType = { message, status };
        return res;
    }
};

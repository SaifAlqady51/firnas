import axios, { AxiosError } from "axios";
import { FailedFormResponseType, ValidateEmailResponseType } from "../types/loginResponse-type";

type AxiosErrorData = {
    statusCode: number;
    message: string;
};

export const validateEmail = async (email: string) => {
    try {
        const user = await axios.post(
            `${process.env.USERS_URL}/send-validation-email`,
            { email },
        );
        // const user = await axios(config)
        console.log(user.data);
        const status = "success";
        const message = user.data.message;
        const code = user.data.randomNumber;
        const res: ValidateEmailResponseType = { message, status, code };
        console.log(res);
        return res;
    } catch (e) {
        const error = e as AxiosError;
        const dataError = error?.response?.data as AxiosErrorData;
        const status = "error";
        const message = dataError.message;
        const res: FailedFormResponseType = { message, status };
        return res;
    }
};

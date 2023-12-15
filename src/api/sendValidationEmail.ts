import axios from "axios";
import { ValidateEmailResponseType } from "../types/apiRespons-types";
import { errorResponse } from "./errorResponse";

export const validateEmail = async (email: string) => {
    try {
        const user = await axios.post(
            `${process.env.USERS_URL}/send-validation-email`,
            { email },
        );
        const res: ValidateEmailResponseType = {
            message: user.data.message,
            status: "success",
            code: user.data.randomNumber,
        };
        return res;
    } catch (e) {
        const res = errorResponse(e);
        return res;
    }
};

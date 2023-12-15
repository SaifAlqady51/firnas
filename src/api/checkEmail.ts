import axios from "axios";
import { SuccessFormResponseType } from "../types/apiRespons-types";
import { errorResponse } from "./errorResponse";

export const checkEmail = async (email: string) => {
    try {
        await axios.post(
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

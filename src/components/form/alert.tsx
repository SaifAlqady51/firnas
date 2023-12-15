"use client";
import {
    FailedFormResponseType,
    SuccessFormResponseType,
} from "@/types/apiRespons-types";
import Alert from "@mui/material/Alert";

const ChangableAlert = ({
    status,
    message,
}: FailedFormResponseType | SuccessFormResponseType) => {
    return (
        <>
            <Alert
                className={`absolute top-20 text-xl font-bold ${
                    status === "success" ? "bg-green-200" : "bg-red-200"
                }`}
                severity={status}
            >
                {message}
            </Alert>
        </>
    );
};
export default ChangableAlert;

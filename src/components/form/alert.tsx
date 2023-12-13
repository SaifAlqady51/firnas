"use client";
import {
    FailedFormResponseType,
    SuccessFormResponseType,
} from "@/types/apiRespons-types";
import Alert from "@mui/material/Alert";
import { useState, useEffect } from "react";

const ChangableAlert = ({
    status,
    message,
}: FailedFormResponseType | SuccessFormResponseType) => {
    console.log(status, message);
    const [viewAlert, setViewAlert] = useState(true);

    return (
        <>
            {viewAlert ? (
                <Alert
                    className={`absolute top-20 text-xl font-bold ${
                        status === "success" ? "bg-green-200" : "bg-red-200"
                    }`}
                    severity={status}
                >
                    {message}
                </Alert>
            ) : null}
        </>
    );
};
export default ChangableAlert;

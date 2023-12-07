"use client";
import { LoginResponse } from "@/app/types/loginResponse-type";
import Alert from "@mui/material/Alert";
import { useState, useEffect } from "react";

const ChangableAlert = ({ status, message }: LoginResponse) => {
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

import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Firnas | Register",
    description: "Firnase API for flight data",
};

export default function layout({ children }: { children: React.ReactNode }) {
    return <div>{children}</div>;
}

import { z } from "zod";

export const RegisterFormSchema = z.object({
    name: z
        .string()
        .trim()
        .min(4, { message: "short name min 4" })
        .max(10, { message: "long name max 10" }),
    email: z.string().trim().email({ message: "Invalid email address" }),
    password: z
        .string()
        .min(8, { message: "short password min 8" })
        .max(18, { message: "long password max 18" }),
});

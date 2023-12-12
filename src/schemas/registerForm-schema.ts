import { z } from "zod";

export const RegisterFormSchema = z.object({
    name: z
        .string()
        .trim()
        .min(4, { message: "short name min 4" })
        .max(10, { message: "long name max 10" }),
    email: z.string().trim().email({ message: "Invalid email address" }),
});

import { z } from "zod";

export const LoginFormSchema = z.object({
    email: z.string().trim().email({ message: "Invalid email address" }),
    password: z.string(),
});

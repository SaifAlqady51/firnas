import { z } from "zod";

export const GlobalFormSchema = z.object({
    email: z.string().trim().email({ message: "Invalid email address" }),
    password: z.string(),
    code: z.string(),
    name: z.string(),
});

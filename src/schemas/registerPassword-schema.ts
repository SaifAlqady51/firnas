import {z} from 'zod'




export const RegisterPasswordFormSchema = z.object({
    password: z
        .string()
        .min(8, { message: "short password min 8" })
        .max(18, { message: "long password max 18" }),
});

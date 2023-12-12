
import { z } from "zod";

export const RegisterCodeFormSchema = z.object({
    code: z.string().trim()
});

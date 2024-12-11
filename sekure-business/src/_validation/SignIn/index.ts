import { z } from "zod";

export const signinSchema = z.object({
  email: z
    .string({
      invalid_type_error: "L'email doit être une chaîne de caractères",
    })
    .email("L'email doit être valide"),
  password: z
    .string({
      invalid_type_error: "Le mot de passe doit être une chaîne de caractères",
    })
    .min(8, {
      message: "Le mot de passe doit contenir au moins 8 caractères",
    }),
});

export type signInDataType = z.infer<typeof signinSchema>;
export interface signInErrorType {
  success?: boolean;
  message?: string;
  error: {
    [key: string]: string[];
  };
}

import { z } from "zod";

//interface for user
export interface UserCompany {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  prix_card: number;
  active: number;
  updated_by: number;
  sector_activity: string;
  description_company: string;
  created_company: string;
  registry_number: string;
  matricule_number: string;
  website_link: string;
  country: string;
  zip: string;
  state: string;
  city: string;
  street: string;
  localisation: string;
  pourcentage_action: number;
  certificat_constitution: string;
  proof_address: string;
  acte_constitutif: string;
  created_at: string;
  updated_at: string;
  pivot: { id_user: number; id_company: number };
}

export interface Role {
  id: number;
  created_at: string;
  updated_at: string;
  name: string;
  active: number;
  updated_by: number | undefined;
  pivot: { id_user: number; id_role: number };
}

export interface User {
  id: number;
  full_name: string;
  poste: string;
  date_birth: string;
  pourcentage_action: number;
  email: string;
  nationality: string;
  street: string;
  localisation: string;
  city: string;
  etat: string;
  zip: string;
  document1: string;
  document2: string;
  phone: string;
  active: number;
  updated_by: number;
  image: string;
  email_verified_at: string;
  step: string;
  created_at: string;
  updated_at: string;
  roles: Role[];
  user_company: UserCompany[];
}

//schema for signin
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
export interface signInReturnType {
  success?: boolean;
  message?: string;
  errors?: {
    [key: string]: string[];
  };
  user?: Partial<User>[];
}

import { date, z } from "zod";

export const rechargeWalletSchema = z.object({
  amount: z.number().positive().min(50000, {
    message: "Le montant doit être supérieur à 50000",
  }),
  phone: z.string().length(13),
});

export const rechargeCardSchema = z.object({
  amount: z.number().positive().min(500, {
    message: "Le montant doit être supérieur à 500",
  }),
  email: z.string().min(10, {
    message: "L'email doit contenir au moins 10 caractères",
  }),
});

export const conversionSchema = z.object({
  receiveAmount: z.string(),
  convertAmount: z.string(),
});

export const cardCreateSchema = z.object({
  cardType: z.string().min(4, {
    message: "Le type de carte doit contenir au moins 4 caractères",
  }),
  email: z.string(),
});

export const userSchema = z.object({
  firstName: z.string().min(2, {
    message: "Le prénom doit contenir au moins 2 caractères",
  }),
  lastName: z.string().min(2, {
    message: "Le nom doit contenir au moins 2 caractères",
  }),
  email: z.string().email(),
});

export const businessNameSchema = z.object({
  name: z.string().min(2, {
    message: "Le prénom doit contenir au moins 2 caractères",
  }),
  number: z.number(),
  address: z.string(),
  email: z.string().email(),
  description: z.string().min(10, {
    message: "La description doit contenir au moins 10 caractères",
  }),
});

export const searchSchema = z.object({
  query: z.string().min(2, {
    message: "La recherche doit contenir au moins 2 caractères",
  }),
});

export const signupSchema = z.object({
  full_name_user: z.string(),
  name_company: z.string(),
  receive_mail: z.boolean().default(false).optional(),
  country_company: z.string(),
  email_user: z.string().email(),
  password_user: z.string().min(8, {
    message: "Le mot de passe doit contenir au moins 8 caractères",
  }),
});

export const businessFieldSchema = z.object({
  otp: z.string().min(6, {
    message: "La recherche doit contenir au moins 2 caractères",
  }),
  terms_condition: z.boolean().default(false).optional(),
  receive_mail: z.boolean().default(false).optional(),
});

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

export const recPwdSchema = z.object({
  email: z.string().email(),
});

export const OTPSchema = z.object({
  otp: z.string().min(6, {
    message: "Le code doit contenir au moins 6 caractères",
  }),
});

export const pwdSchema = z.object({
  pwd: z.string().min(10, {
    message: "Le mot de passe doit contenir au moins 10 caractères",
  }),
});

export const filterSchema = z.object({
  type: z.string({
    required_error: "Please select an email to display.",
  }),
  statut: z.string({
    required_error: "Please select an email to display.",
  }),
  pays: z.string({
    required_error: "Please select an email to display.",
  }),
  montant: z.object({
    depart: z.string(),
    fin: z.string(),
  }),
  date: z.object({
    depart: z.string(),
    fin: z.string(),
  }),
});

export const InformationSchema = z.object({
  name_company: z.string(),
  type: z.string(),
  sector_activity_company: z.string(),
  description_company: z.string(),
  created_company: z.string().date(),
  registry_number_company: z.string(),
  matricule_number_company: z.string(),
  phone_company: z.string(),
  website_link_company: z.string(),
});

export const AdresseSchema = z.object({
  poste_user: z.string(),
  country_company: z.string(),
  zip_company: z.string(),
  city_company: z.string(),
  street_company: z.string(),
  address_company: z.string(),
});

export const ActionnairesSchema = z.object({
  full_name_user: z.string(),
  email_user: z.string().email(),
  poste_user: z.string(),
  pourcentage_action_user: z.string(),
  receive_mail: z.boolean().default(false).optional(),
  director: z.enum(["non", "oui"], {
    required_error: "please select one option here...",
  }),
});

export const AdresseInfoSchema = z.object({
  full_name_user: z.string(),
  poste_user: z.string(),
  date_birth_user: z.string().date(),
  pourcentage_action_user: z.string(),
  email_user: z.string().email(),
  phone_user: z.string(),
  nationality_user: z.string(),
  rue: z.string(),
  street_user: z.string(),
  city_user: z.string(),
  etat_user: z.string(),
  zip_user: z.string(),
  document1_user: z.custom<File[]>(),
  document2_user: z.custom<File[]>(),
  receive_mail: z.boolean().default(false).optional(),
});

export const LegalSchema = z.object({
  certificate: z.custom<File[]>(),
  proof_of_address: z.custom<File[]>(),
  constitution_status: z.custom<File[]>(),
  receive_mail: z.boolean().default(false).optional(),
});

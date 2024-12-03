import { z } from "zod";

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

export const InformationSchema = z.object({
  name_company: z.string(),
  email_company: z.string().email(),
  sector_activity_company: z.string(),
  description_company: z.string(),
  created_company: z.coerce.date(),
  registry_number_company: z.coerce.number(),
  matricule_number_company: z.coerce.number(),
  phone_company: z.string(),
  website_link_company: z.string().url(),
});

export const AdresseSchema = z.object({
  localisation_company: z.string(),
  state_company: z.string(),
  zip_company: z.coerce.number(),
  city_company: z.string(),
  street_company: z.string(),
  address_company: z.string(),
});

export const StakeholdersInfoSchema = z.object({
  full_name_user: z.string(),
  poste_user: z.string(),
  date_birth_user: z.coerce.date(),
  pourcentage_action_user: z.coerce.number(),
  email_user: z.string().email(),
  phone_user: z.string(),
  nationality_user: z.string(),
  localisation_user: z.string(),
  street_user: z.string(),
  city_user: z.string(),
  etat_user: z.string(),
  zip_user: z.coerce.number(),
  document1_user: z.custom<File[]>(),
  document2_user: z.custom<File[]>(),
  receive_mail: z.boolean().default(false).optional(),
});

export const ActionnairesSchema = z.object({
  poste_user: z.string(),
  email_user: z.string().email(),
  phone_user: z.string(),
  pourcentage_action_user: z.coerce.number(),
  receive_mail: z.boolean().default(false).optional(),
  director: z.enum(["non", "oui"], {
    required_error: "please select one option here...",
  }),
});

export const LegalSchema = z.object({
  certificat_constitution_company: z.custom<File[]>(),
  proof_address_companys: z.custom<File[]>(),
  acte_constitutif_company: z.custom<File[]>(),
  receive_mail: z.boolean().default(false).optional(),
});

export const NewUserData = z.object({
  ...signupSchema.shape,
  ...InformationSchema.shape,
  ...AdresseSchema.shape,
  ...StakeholdersInfoSchema.shape,
  ...ActionnairesSchema.shape,
  ...LegalSchema.shape,
});

export const LocalStorageDatastring = z.object({
  full_name_user: z.string().optional(),
  poste_user: z.string().optional(),
  date_birth_user: z.coerce.date().optional(),
  pourcentage_action_user: z.coerce.number().optional(),
  email_user: z.string().email().optional(),
  nationality_user: z.string().optional(),
  street_user: z.string().optional(),
  localisation_user: z.string().optional(),
  city_user: z.string().optional(),
  etat_user: z.string().optional(),
  zip_user: z.coerce.number().optional(),
  document1_user: z.custom<File[]>().optional(),
  document2_user: z.custom<File[]>().optional(),
  password_user: z.string().optional(),
  phone_user: z.string().optional(),
  image_user: z.string().optional(),
  name_company: z.string().optional(),
  email_company: z.string().email().optional(),
  phone_company: z.string().optional(),
  address_company: z.string().optional(),
  sector_activity_company: z.string().optional(),
  description_company: z.string().optional(),
  created_company: z.coerce.date().optional(),
  registry_number_company: z.coerce.number().optional(),
  matricule_number_company: z.coerce.number().optional(),
  website_link_company: z.string().url().optional(),
  country_company: z.string().optional(),
  zip_company: z.coerce.number().optional(),
  state_company: z.string().optional(),
  city_company: z.string().optional(),
  street_company: z.string().optional(),
  localisation_company: z.string().optional(),
  Pourcentage_actions_company: z.coerce.number().optional(),
  certificat_constitution_company: z.custom<File[]>().optional(),
  proof_address_company: z.custom<File[]>().optional(),
  acte_constitutif_company: z.custom<File[]>().optional(),
});

export type NewUser = z.infer<typeof NewUserData>;
export type localstorageData = z.infer<typeof LocalStorageDatastring>;

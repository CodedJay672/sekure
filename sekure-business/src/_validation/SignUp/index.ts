import { z } from "zod";

export const signupSchema = z.object({
  full_name_user: z.string(),
  email_user: z.string().email(),
  password_user: z.string().min(8, {
    message: "Le mot de passe doit contenir au moins 8 caractères",
  }),
  name_company: z.string(),
  country_company: z.string(),
  email_company: z.string().email(),
});

export const InformationSchema = z.object({
  sector_activity: z.string(),
  description_company: z.string(),
  registry_number: z.string(),
  created_company: z.string(),
  matricule_number: z.string(),
  website_link: z.string().url(),
  phone: z.string(),
});

export const AdresseSchema = z.object({
  localisation: z.string(),
  street: z.string(),
  zip: z.string(),
  city: z.string(),
  appartement: z.string(),
});

export const ActionnairesSchema = z.object({
  Pourcentage_action: z.coerce.number(),
  poste: z.string(),
  date_birth: z.string(),
  nationality: z.string(),
  localisation: z.string(),
  appartement: z.string(),
  city: z.string(),
  etat: z.string(),
  zip: z.string(),
  document1_user: z.custom<File[]>(),
  document2_user: z.custom<File[]>(),
});

// export const ActionnairesSchema = z.object({
//   poste_user: z.string(),
//   email_user: z.string().email(),
//   phone_user: z.string(),
//   pourcentage_action_user: z.string(),
//   receive_mail: z.boolean().default(false).optional(),
//   director: z.enum(["non", "oui"], {
//     required_error: "please select one option here...",
//   }),
// });

export const LegalSchema = z.object({
  certifat_constitution: z.custom<File[]>(),
  proof_address: z.custom<File[]>(),
  acte_constitutif: z.custom<File[]>(),
});

export const NewUserData = z.object({
  ...signupSchema.shape,
  ...InformationSchema.shape,
  ...AdresseSchema.shape,
  ...ActionnairesSchema.shape,
  ...LegalSchema.shape,
  document1_user: z.string(),
  document2_user: z.string(),
  certifat_constitution: z.string(),
  proof_address: z.string(),
  acte_constitutif: z.string(),
});

export const LocalStorageDatastring = z.object({
  id: z.number(),
  full_name_user: z.string().optional(),
  poste: z.string().optional(),
  date_birth: z.string().optional(),
  pourcentage_action: z.number().optional(),
  email_user: z.string().email().optional(),
  nationality: z.string().optional(),
  localisation_user: z.string().optional(),
  city_user: z.string().optional(),
  etat_user: z.string().optional(),
  zip_user: z.string().optional(),
  document1_user: z.string().optional(),
  document2_user: z.string().optional(),
  password_user: z.string().optional(),
  phone_user: z.string().optional(),
  image_user: z.string().optional(),
  name_company: z.string().optional(),
  email_company: z.string().email().optional(),
  phone_company: z.string().optional(),
  address_company: z.string().optional(),
  sector_activity_company: z.string().optional(),
  description_company: z.string().optional(),
  created_company: z.string().optional(),
  registry_number_company: z.string().optional(),
  matricule_number_company: z.string().optional(),
  website_link_company: z.string().url().optional(),
  zip: z.string().optional(),
  appartment: z.string().optional(),
  city: z.string().optional(),
  street: z.string().optional(),
  localisation: z.string().optional(),
  pourcentage_actions_company: z.string().optional(),
  certifat_constitution: z.string().optional(),
  proof_address: z.string().optional(),
  acte_constitutif: z.string().optional(),
});

export type signUpDataType = z.infer<typeof signupSchema>;
export type informationDataType = z.infer<typeof InformationSchema>;
export type adressDataType = z.infer<typeof AdresseSchema>;
export type actionairesDataType = z.infer<typeof ActionnairesSchema>;
export type legalDataType = z.infer<typeof LegalSchema>;
export type NewUser = z.infer<typeof NewUserData>;
export type localstorageData = z.infer<typeof LocalStorageDatastring>;

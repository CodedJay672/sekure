// Custom types
type Email = string;
type Phone = string;
type Date = string;
type Float = string;
type Binary = string;
type Url = string;

export interface NewUser {
  full_name_user: string;
  poste_user: string;
  date_birth_user: Date;
  pourcentage_action_user: Float;
  email_user: Email;
  nationality_user: string;
  street_user: string;
  localisation_user: string;
  city_user: string;
  etat_user: string;
  zip_user: string;
  document1_user: Binary | null;
  document2_user: Binary | null;
  password_user: string | null;
  phone_user: Phone;
  image_user: Binary | null;
  name_company: string;
  email_company: Email;
  phone_company: Phone;
  address_company: string;
  sector_activity_company: string;
  description_company: string;
  created_company: Date;
  registry_number_company: string;
  matricule_number_company: string;
  website_link_company: Url;
  country_company: string;
  zip_company: string;
  state_company: string;
  city_company: string;
  street_company: string;
  localisation_company: string;
  Pourcentage_actions_company: Float;
  certificat_constitution_company: Binary | null;
  proof_address_company: Binary | null;
  acte_constitutif_company: Binary | null;
}

export interface Login {
  id: number;
  full_name: string | "";
  poste: string | "";
  date_birth: string | "";
  pourcentage_action: number | 0;
  email: string | "";
  nationality: string | "";
  street: string | "";
  localisation: string | "";
  city: string | "";
  etat: string | "";
  zip: string | "";
  document1: File | null;
  document2: File | null;
  phone: string | "";
  active: 1 | 0;
  updated_by: string | "";
  image: string | "";
  email_verified_at: string | "";
  created_at: string | "";
  updated_at: string | "";
}

interface Roles {
  id: number;
  created_at: string;
  updated_at: string;
  name: "admin" | "user";
  active: 1 | 0;
  updated_by: string | "";
  pivot: {
    id_user: number;
    id_role: number;
  };
}

export interface AuthUser {
  user: Login | {};
  isLogged?: boolean;
}

export interface NewUserResponse {
  success: boolean;
  message: string;
  company: Company;
  user: User;
}

interface Company {
  name: string;
  email: string;
  phone: string;
  address: string;
  sector_activity: string | null;
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
  proof_address: string | null;
  acte_constitutif: string | null;
  updated_at: string;
  created_at: string;
  id: number;
}

interface User {
  full_name: string | null;
  poste: string;
  date_birth: string;
  pourcentage_action: string;
  email: string;
  nationality: string;
  street: string;
  localisation: string;
  city: string;
  etat: string | null;
  zip: string;
  document1: string | null;
  document2: string | null;
  phone: string;
  image: string | null;
  updated_at: string;
  created_at: string;
  id: number;
}

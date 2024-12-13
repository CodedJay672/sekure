export interface signUpResponse {
  status: boolean;
  message: string;
  user: User;
  company: Company;
}

export interface IError {
  success?: boolean;
  message?: string;
  "error : ": {
    [key: string]: string[];
  };
}

export interface User {
  id: number;
  full_name: string;
  poste: string;
  date_birth: Date;
  pourcentage_action: number;
  email: string;
  nationality: string;
  street?: string;
  localisation: string;
  appartement: string;
  city: string;
  etat: string;
  zip: string;
  document1: string;
  document2: string;
  phone: string;
  active: number;
  updated_by?: number;
  image?: string;
  email_verified_at: Date;
  step: string;
  created_at: Date;
  updated_at: Date;
}

export interface Company {
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
  appartement: string;
  pourcentage_action: number;
  certificat_constitution: string;
  proof_address: string;
  acte_constitutif: string;
  created_at: string;
  updated_at: string;
  pivot: { id_user: number; id_company: number };
}

// Custom types
type Email = string;
type Phone = string;
type Date = string;
type Float = string;
type Binary = string;
type Url = string;

export interface NewUser {
  full_name_user?: string;
  poste_user?: string;
  date_birth_user?: Date;
  pourcentage_action_user?: Float;
  email_user?: Email;
  nationality_user?: string;
  street_user?: string;
  localisation_user?: string;
  city_user?: string;
  etat_user?: string;
  zip_user?: string;
  document1_user?: Binary | null;
  document2_user?: Binary | null;
  password_user?: string | null;
  phone_user?: Phone;
  image_user?: Binary | null;
  name_company?: string;
  email_company?: Email;
  phone_company?: Phone;
  address_company?: string;
  sector_activity_company?: string;
  description_company?: string;
  created_company?: Date;
  registry_number_company?: string;
  matricule_number_company?: string;
  website_link_company?: Url;
  country_company?: string;
  zip_company?: string;
  state_company?: string;
  city_company?: string;
  street_company?: string;
  localisation_company?: string;
  Pourcentage_actions_company?: Float;
  certificat_constitution_company?: Binary | null;
  proof_address_company?: Binary | null;
  acte_constitutif_company?: Binary | null;
}

//interface for user
export interface UserCompany {
  id: number;
  name: string | null;
  email: string | null;
  phone: string | null;
  address: string | null;
  prix_card: number | null;
  active: number;
  updated_by: number | null;
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
  pourcentage_action: number | null;
  certificat_constitution: string | null;
  proof_address: string | null;
  acte_constitutif: string | null;
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
  updated_by: number | null;
  pivot: { id_user: number; id_role: number };
}

export interface User {
  id: number;
  full_name: string | null;
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
  document1: string | null;
  document2: string | null;
  phone: string;
  active: number;
  updated_by: number | null;
  image: string | null;
  email_verified_at: string | null;
  created_at: string;
  updated_at: string;
  roles: Role[];
  user_company: UserCompany[];
}

export interface ApiResponse {
  success: boolean;
  message: string;
  company: UserCompany;
  user: User;
}

//transaction types
interface TransactionSummary {
  success: boolean;
  total_transaction: number | string;
  transaction_pending: number | string;
  transaction_success: number | string;
  total_payments: number | string;
  actifs_payments: number | string;
  inactifs_payments: number | string;
  total_collection: number | string;
  collection_failed: number | string;
  collection_successs: number | string;
  wallet_xaf: number | string;
  wallet_usa: number | string;
  wallet_civ: number | string;
  evolution_transactions: any[];
}

// Interface for the main object with success field as BooleanLike
export interface Transactions {
  transactionSummary: TransactionSummary | null;
}

export interface AllTransactions {
  success: boolean;
  data: Data;
}

interface Data {
  current_page: number;
  data: any[]; // We'll use 'any' for now, but we might want to define a more specific type later
  first_page_url: string;
  from: number | null;
  last_page: number;
  last_page_url: string;
  links: Link[];
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number | null;
  total: number;
}

interface Link {
  url: string | null;
  label: string;
  active: boolean;
}

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

interface Pagination {
  current_page: number;
  data: User[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: Array<{
    url?: string;
    label: string;
    active: boolean;
  }>;
  next_page_url?: string;
  path: string;
  per_page: number;
  prev_page_url?: string;
  to: number;
  total: number;
}

export interface AllUsers {
  success: boolean;
  data: Pagination;
}

export interface ApiResponse {
  success: boolean;
  message: string;
  user: Partial<User>[];
}

export interface APIErrors {
  "error : ": {
    [key: string]: Array<string>;
  };
}

//transaction types
export interface TransactionSummary {
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
  evolution_transactions: {
    date: string;
    total: number;
  }[];
}

// Interface for the main object with success field as BooleanLike
export interface Transactions {
  success: boolean;
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

//interface for the cards fetched from the api
export interface CardsResponse<T> {
  status: boolean;
  data: DataResponse<T>;
}

export interface DataResponse<T> {
  current_page: number;
  data: T[];
  first_page_url?: string;
  from?: number | null;
  last_page: number;
  last_page_url?: string;
  links: LinkItem[];
  next_page_url?: string | null;
  path: string;
  per_page: number;
  prev_page_url?: string | null;
  to?: number | null;
  total: number;
}

interface LinkItem {
  url?: string | null;
  label: string;
  active: "true" | "false";
}

// cards stats
export interface CardStats {
  number_card: number;
  number_card_block: number;
  number_card_active: number;
  numbe_card_type_visa: number;
  number_card_type_master: number;
  number_card_inactive: number;
  evolution_card: {
    date: string;
    total: number;
  }[];
}

// user roles
export interface RolesResponse {
  success: boolean;
  data: RolesData;
}

export interface RolesData {
  current_page: number;
  data: RoleData[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: Link[];
  next_page_url?: string;
  path: string;
  per_page: number;
  prev_page_url?: string;
  to: number;
  total: number;
}

export interface RoleData {
  id: number;
  created_at: string;
  updated_at: string;
  name: string;
  active: number;
  updated_by?: number | null;
  users: UserRole[];
}

export interface UserRole {
  id: number;
  full_name?: string;
  poste?: string;
  date_birth?: string;
  pourcentage_action?: number;
  email: string;
  nationality?: string;
  street?: string;
  localisation?: string;
  city?: string;
  etat?: string;
  zip?: string;
  document1?: any;
  document2?: any;
  phone: string;
  active: number;
  updated_by?: number | null;
  image?: any;
  email_verified_at?: string | null;
  created_at: string;
  updated_at: string;
  pivot: Pivot;
}

interface Pivot {
  id_role: number;
  id_user: number;
}

// interface for the otp verification
export interface OTPVerify {
  success?: boolean;
  message?: string;
  error?: string | { otp?: string[] };
  token?: string;
}

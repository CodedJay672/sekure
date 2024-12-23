export interface TransactionCard {
  id?: number;
  owner?: number;
  reference?: string;
  id_card_map?: number;
  name?: string;
  card_number?: string;
  masked_pan?: string;
  expiry?: string;
  expiry_date?: string;
  cvv?: string;
  status?: string;
  type?: string;
  issuer?: string;
  currency?: string;
  balance?: number;
  balance_updated_at?: string;
  street?: string;
  city?: string;
  state?: string;
  postal_code?: string;
  country?: string;
  created_by?: number;
  company?: number;
  active?: number;
  created_at?: string;
  updated_at?: string;
}

export interface Transaction {
  id?: number;
  id_map?: number;
  created_at?: string;
  updated_at?: string;
  mode_wallet_company?: string;
  mode_wallet_superadmin?: string;
  mode_card?: string;
  mode_compte?: string;
  type?: string;
  id_card?: number;
  active?: number;
  updated_by?: number;
  company?: number;
  amount?: number;
  balance_before_company?: number;
  balance_after_company?: number;
  balance_before_card?: number;
  balance_after_card?: number;
  balance_before_superadmin?: number;
  balance_after_superadmin?: number;
  balance_before_compte?: number;
  balance_after_compte?: number;
  status?: string;
  reference?: string;
  currency?: string;
  card?: TransactionCard;
}

export interface TransactionByIDResponse {
  success: boolean;
  message: string;
  transaction: Transaction[];
}

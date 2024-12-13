export interface company {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  prix_card: null;
  active: boolean;
  updated_by: string;
  sector_activity: string;
  description_company: string;
  created_company: string;
  registry_number: string;
  matricule_number: string;
  website_link: string;
  country: string;
  zip: string;
  state: null;
  city: string;
  street: string;
  localisation: string;
  appartement: string;
  pourcentage_action: null;
  certificat_constitution: string;
  proof_address: string;
  acte_constitutif: string;
  created_at: string;
  updated_at: string;
}
export interface ICompanyData {
  success: true;
  message: "Mise à jour réussie";
  company: company;
}

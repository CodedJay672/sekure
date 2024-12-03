import { localstorageData } from "@/_validation/SignUp";
import { ICardDetails, INavLinks, ITableColumn } from "./types";

export const navLinks: INavLinks[] = [
  {
    path: "/",
    name: "Accueil",
    icon: "/assets/sidebar-icons/accueil.svg",
  },
  {
    path: "/cartes",
    name: "Cartes",
    icon: "/assets/sidebar-icons/cartes.svg",
  },
  {
    path: "/transactions",
    name: "Transactions",
    icon: "/assets/sidebar-icons/transactions.svg",
  },
  {
    path: "/utilisateurs",
    name: "Utilisateurs",
    icon: "/assets/sidebar-icons/utilisateurs.svg",
  },
  {
    path: "/parametres",
    name: "Paramètres",
    icon: "/assets/sidebar-icons/parametres.svg",
  },
];

export const bottomNav: INavLinks[] = [
  {
    path: "/statut",
    name: "Statut check",
    icon: "/assets/sidebar-icons/statut.svg",
  },
  {
    path: "/sekure",
    name: "Sekure dev",
    icon: "/assets/sidebar-icons/sekure.svg",
  },
  {
    path: "/webhook",
    name: "Webhook & API",
    icon: "/assets/sidebar-icons/webhook.svg",
  },
];

export const cardDetails: ICardDetails[] = [
  {
    data1: {
      title: "Total transactions",
      value: "$54200.50",
    },
    data2: {
      title: "reussies",
      value: "1437",
    },
    data3: {
      title: "en cours",
      value: "46",
    },
  },
  {
    data1: {
      title: "Total paiements",
      value: "$54200.50",
    },
    data2: {
      title: "Actifs",
      value: "1437",
    },
    data3: {
      title: "inactifs",
      value: "46",
    },
  },
  {
    data1: {
      title: "Total collectes",
      value: "$54200.50",
    },
    data2: {
      title: "Reussis",
      value: "1437",
    },
    data3: {
      title: "Échoués",
      value: "46",
    },
  },
];

export interface IUserColumn {
  accessor: string;
  header: string;
}

export const bigTable: ITableColumn[] = [
  { id: "no", header: "No" },
  { id: "type", header: "Type" },
  { id: "Deà", header: "De / à" },
  { id: "montant", header: "Montant" },
  { id: "date", header: "Date" },
  { id: "etat", header: "Etat" },
  { id: "Nbpm", header: "Nb PM" },
  { id: "Echecpm", header: "Echec PM" },
  { id: "TotalPm", header: "Total PM" },
  { id: "MoyPm", header: "Moy PM" },
];

export const smallTable: ITableColumn[] = [
  { id: "type", header: "Type" },
  { id: "Deà", header: "De / à" },
  { id: "montant", header: "Montant" },
  { id: "date", header: "Date" },
];

export const AdminData = [
  "Steve Waga",
  "Steve Waga",
  "Steve Waga",
  "Steve Waga",
  "Steve Waga",
];

export const info = [
  {
    id: "1",
    title: "Notification 1",
    description: "This is the description of the notification",
    date: "12/12/2021",
  },
  {
    id: "2",
    title: "Notification 2",
    description: "This is the description of the notification",
    date: "12/12/2021",
  },
  {
    id: "3",
    title: "Notification 3",
    description: "This is the description of the notification",
    date: "12/12/2021",
  },
  {
    id: "4",
    title: "Notification 4",
    description: "This is the description of the notification",
    date: "12/12/2021",
  },
  {
    id: "5",
    title: "Notification 5",
    description: "This is the description of the notification",
    date: "12/12/2021",
  },
  {
    id: "6",
    title: "Notification 6",
    description: "This is the description of the notification",
    date: "12/12/2021",
  },
];

export const defaultData: localstorageData = {
  full_name_user: "",
  poste_user: "",
  date_birth_user: undefined,
  pourcentage_action_user: undefined,
  email_user: "",
  nationality_user: "",
  street_user: "",
  localisation_user: "",
  city_user: "",
  etat_user: "",
  zip_user: undefined,
  document1_user: undefined,
  document2_user: undefined,
  password_user: "",
  phone_user: "",
  image_user: "",
  name_company: "",
  email_company: "",
  phone_company: "",
  address_company: "",
  sector_activity_company: "",
  description_company: "",
  created_company: undefined,
  registry_number_company: undefined,
  matricule_number_company: undefined,
  website_link_company: "",
  country_company: "",
  zip_company: undefined,
  state_company: "",
  city_company: "",
  street_company: "",
  localisation_company: "",
  Pourcentage_actions_company: undefined,
  certificat_constitution_company: undefined,
  proof_address_company: undefined,
  acte_constitutif_company: undefined,
};

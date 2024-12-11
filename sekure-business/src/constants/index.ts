import { INavLinks } from "./types";

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

export interface IUserColumn {
  accessor: string;
  header: string;
}

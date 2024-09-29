
import {
  Data,
  ICardDetails,
  INavLinks,
  ITableColumn,
} from "./types";


export const navLinks: INavLinks[] = [
  {
    path: "/",
    name: 'Accueil',
    icon: '/assets/sidebar-icons/accueil.svg',
  },
  {
    path: "/cartes",
    name: 'Cartes',
    icon: "/assets/sidebar-icons/cartes.svg",
  },
  {
    path: "/transactions",
    name: 'Transactions',
    icon: '/assets/sidebar-icons/transactions.svg',
  },
  {
    path: "/utilisateurs",
    name: 'Utilisateurs',
    icon: '/assets/sidebar-icons/utilisateurs.svg',
  },
  {
    path: "/parametres",
    name: 'Paramètres',
    icon: '/assets/sidebar-icons/parametres.svg',
  },
]

export const bottomNav: INavLinks[] = [
  {
    path: "/statut",
    name: 'Statut check',
    icon: '/assets/sidebar-icons/statut.svg',
  },
  {
    path: "/sekure",
    name: 'Sekure dev',
    icon: '/assets/sidebar-icons/sekure.svg',
  },
  {
    path: "/webhook",
    name: 'Webhook & API',
    icon: '/assets/sidebar-icons/webhook.svg',
  },
]

export const cardDetails: ICardDetails[] = [
  {
    data1: {
      title: 'Total transactions',
      value: '$54200.50',
    },
    data2: {
      title: 'reussies',
      value: '1437',
    },
    data3: {
      title: 'en cours',
      value: '46',
    },
  },
  {
    data1: {
      title: 'Total paiements',
      value: '$54200.50',
    },
    data2: {
      title: 'Actifs',
      value: '1437',
    },
    data3: {
      title: 'inactifs',
      value: '46',
    },
  },
  {
    data1: {
      title: 'Total collectes',
      value: '$54200.50',
    },
    data2: {
      title: 'Reussis',
      value: '1437',
    },
    data3: {
      title: 'Échoués',
      value: '46',
    },
  },
]

export const bigTable: ITableColumn[] = [
  { id: 'no', header: 'No' },
  { id: 'type', header: 'Type' },
  { id: 'Deà', header: 'De / à' },
  { id: 'montant', header: 'Montant' },
  { id: 'date', header: 'Date' },
  { id: 'etat', header: 'Etat' },
  { id: 'Nbpm', header: 'Nb PM' },
  { id: 'Echecpm', header: 'Echec PM' },
  { id: 'TotalPm', header: 'Total PM' },
  { id: 'MoyPm', header: 'Moy PM' },
]

export const smallTable: ITableColumn[] = [
  { id: 'type', header: 'Type' },
  { id: 'Deà', header: 'De / à' },
  { id: 'montant', header: 'Montant' },
  { id: 'date', header: 'Date' },
]


export const data: Data[] = [
  {
    no: 1,
    type: "V",
    Deà: "XAA 125 200.50",
    montant: "125 200.50",
    date: "Talla oyono Richnel",
    etat: "$5000",
    Nbpm: "2354",
    Echecpm: "87",
    TotalPm: "$5000",
    MoyPm: "$450/sem",
  },
  {
    no: 2,
    type: "V",
    Deà: "XAA 125 200.50",
    montant: "125 200.50",
    date: "Talla oyono Richnel",
    etat: "$5000",
    Nbpm: "2354",
    Echecpm: "87",
    TotalPm: "$5000",
    MoyPm: "$450/sem",
  },
  {
    no: 3,
    type: "V",
    Deà: "XAA 125 200.50",
    montant: "125 200.50",
    date: "Talla oyono Richnel",
    etat: "$5000",
    Nbpm: "2354",
    Echecpm: "87",
    TotalPm: "$5000",
    MoyPm: "$450/sem",
  },
  {
    no: 4,
    type: "V",
    Deà: "XAA 125 200.50",
    montant: "125 200.50",
    date: "Talla oyono Richnel",
    etat: "$5000",
    Nbpm: "2354",
    Echecpm: "87",
    TotalPm: "$5000",
    MoyPm: "$450/sem",
  },
  {
    no: 5,
    type: "V",
    Deà: "XAA 125 200.50",
    montant: "125 200.50",
    date: "Talla oyono Richnel",
    etat: "$5000",
    Nbpm: "2354",
    Echecpm: "87",
    TotalPm: "$5000",
    MoyPm: "$450/sem",
  },
  {
    no: 6,
    type: "V",
    Deà: "XAA 125 200.50",
    montant: "125 200.50",
    date: "Talla oyono Richnel",
    etat: "$5000",
    Nbpm: "2354",
    Echecpm: "87",
    TotalPm: "$5000",
    MoyPm: "$450/sem",
  },
];

export const smallData: Data[] = [
  {
    type: "V",
    Deà: "XAA 125 200.50",
    montant: "125 200.50",
    date: "Talla oyono Richnel",
  },
  {
    type: "V",
    Deà: "XAA 125 200.50",
    montant: "125 200.50",
    date: "Talla oyono Richnel",
  },
  {
    type: "V",
    Deà: "XAA 125 200.50",
    montant: "125 200.50",
    date: "Talla oyono Richnel",
  },
];

export const AdminData = [
  "Steve Waga",
  "Steve Waga",
  "Steve Waga",
  "Steve Waga",
  "Steve Waga",
]

export const info = [
  {
    id: '1',
    title: 'Notification 1',
    description: 'This is the description of the notification',
    date: '12/12/2021',
  },
  {
    id: '2',
    title: 'Notification 2',
    description: 'This is the description of the notification',
    date: '12/12/2021',
  },
  {
    id: '3',
    title: 'Notification 3',
    description: 'This is the description of the notification',
    date: '12/12/2021',
  },
  {
    id: '4',
    title: 'Notification 4',
    description: 'This is the description of the notification',
    date: '12/12/2021',
  },
  {
    id: '5',
    title: 'Notification 5',
    description: 'This is the description of the notification',
    date: '12/12/2021',
  },
  {
    id: '6',
    title: 'Notification 6',
    description: 'This is the description of the notification',
    date: '12/12/2021',
  },
]


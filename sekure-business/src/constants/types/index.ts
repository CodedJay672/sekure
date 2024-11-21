import { RoleData } from "@/utils/types/types";

export interface INavLinks {
  path: string;
  name: string;
  icon: string;
}

export interface Data {
  [key: string]: string | number;
}

export interface ICardDetails {
  data1: {
    title: string;
    value: string | number;
  };
  data2: {
    title: string;
    value: string | number;
  };
  data3: {
    title: string;
    value: string | number;
  };
}

export interface ITableColumn {
  id: string;
  header: string;
}

export interface IRoleSectionData {
  role: string;
  tagline: string;
  data: RoleData[];
}

export interface NotificationItemProps {
  info: {
    id: string;
    title: string;
    description: string;
    date: string;
  };
}

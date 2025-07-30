import { ElementType } from "react";

export interface GetIndicatorStyle {
  width: number;
  left: number;
  name?: string;
}

export interface Projects {
  title: string;
  description: string;
  sector: string;
  targetFunds: number;
  status: "Approved" | "Pending" | "Rejected";
  currentFunds: number;
  votes: number;
}

export interface SectorProps {
  created_at?: string;
  id?: string;

  Projects: { name: string }[];
  Votes: { id: string }[];
  description: string;
  funds: null;
  name: string;
}

export interface DropDownProps {
  value: string;
  setter: React.Dispatch<React.SetStateAction<string>>;
}

export interface User {
  id: string;
  email: string;
  role: "admin" | "user";
}

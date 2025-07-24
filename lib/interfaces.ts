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

  description: string;
  funds: null;
  name: string;
  projects: null;
  votes: null;
}

export interface DropDownProps {
  value: string;
  setter: React.Dispatch<React.SetStateAction<string>>;
}

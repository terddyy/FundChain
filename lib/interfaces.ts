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
  currentFunds: number;
}

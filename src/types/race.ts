import { ReactNode } from "react";

export type Race = {
  id: number;
  name: string;
  shortDescription?: string;
  modal?: ReactNode;
  image: string;
};

export type RaceCulture = {
  id: number;
  description: string;
};

export type Ability = {
  id: number;
  name: string;
  description: string;
};

export type Armament = {
  id: number;
  name: string;
  description: string;
};

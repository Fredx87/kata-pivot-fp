import { IPopulation } from "./IPopulation";

// tagged union type

export type Leaf = {
  type: "Leaf";
  value: IPopulation;
};

export type Composite = {
  type: "Composite";
  pivotValue: string;
  children: Array<Composite | Leaf>;
};

export type TreeNode = Leaf | Composite;

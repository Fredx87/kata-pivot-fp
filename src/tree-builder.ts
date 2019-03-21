import { IPopulation } from "./IPopulation";
import { Composite, TreeNode, Leaf } from "./TreeNode";
import { split } from "fp-ts/lib/Array";
import groupBy from "lodash.groupby";
import { Dictionary } from "lodash";

function buildLeaf(member: IPopulation): Leaf {
  return {
    type: "Leaf",
    value: member
  };
}

function buildComposites(
  grouped: Dictionary<IPopulation[]>,
  remainingKeys: Array<keyof IPopulation>
): Composite[] {
  const res: Composite[] = [];
  for (const pivotValue in grouped) {
    const members: IPopulation[] = grouped[pivotValue];
    const composite: Composite = {
      type: "Composite",
      pivotValue,
      children: buildNodes(members, remainingKeys)
    };
    res.push(composite);
  }
  return res;
}

function buildNodes(
  members: Array<IPopulation>,
  groupingKeys: Array<keyof IPopulation>
): TreeNode[] {
  if (groupingKeys.length === 0) {
    return members.map(buildLeaf);
  } else {
    const splitted = split(1, groupingKeys);
    const groupKey = splitted[0][0];
    const grouped = groupBy(members, groupKey);
    return buildComposites(grouped, splitted[1]);
  }
}

export function buildRoot(
  members: Array<IPopulation>,
  groupingKeys: Array<keyof IPopulation>
): Composite {
  return {
    type: "Composite",
    pivotValue: "",
    children: buildNodes(members, groupingKeys)
  };
}

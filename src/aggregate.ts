import { TreeNode } from "./TreeNode";

type accumulatorFnType = (nodes: Array<TreeNode>) => number;

export function getNodeValue(
  node: TreeNode,
  accumulatorFn: accumulatorFnType
): number {
  return node.type === "Leaf" ? node.value.total : accumulatorFn(node.children);
}

export const sumAccumulator: accumulatorFnType = nodes => {
  return nodes.reduce(
    (acc, node) => acc + getNodeValue(node, sumAccumulator),
    0
  );
};

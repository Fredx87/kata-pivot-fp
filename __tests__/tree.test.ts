import { population } from "../src/IPopulation";
import { Composite } from "../src/TreeNode";
import { getNodeValue, sumAccumulator } from "../src/aggregate";

test("should sum two leafs", () => {
  const france1 = population("France", "Brown", "Blonde", 100);
  const italy2 = population("Italy", "Brown", "Red", 100);
  const composite: Composite = {
    type: "Composite",
    pivotValue: "",
    children: [
      { type: "Leaf", value: france1 },
      { type: "Leaf", value: italy2 }
    ]
  };
  const result = getNodeValue(composite, sumAccumulator);
  expect(result).toBe(200);
});

test("should sum four children", () => {
  const france1 = population("France", "Brown", "Blone", 100);
  const france2 = population("France", "Brown", "Red", 100);

  const italy1 = population("Italy", "Brown", "Red", 100);
  const italy2 = population("Italy", "Brown", "Red", 100);

  const franceComposite: Composite = {
    type: "Composite",
    pivotValue: "France",
    children: [
      { type: "Leaf", value: france1 },
      { type: "Leaf", value: france2 }
    ]
  };

  const italyComposite: Composite = {
    type: "Composite",
    pivotValue: "Italy",
    children: [{ type: "Leaf", value: italy1 }, { type: "Leaf", value: italy2 }]
  };

  const rootComposite: Composite = {
    type: "Composite",
    pivotValue: "",
    children: [franceComposite, italyComposite]
  };

  const result = getNodeValue(rootComposite, sumAccumulator);
  expect(result).toBe(400);
});

test("should sum depth children", () => {
  const france1 = population("France", "Brown", "Blone", 100);
  const france2 = population("France", "Brown", "Red", 100);
  const france3 = population("France", "Green", "Red", 100);
  const france4 = population("France", "Green", "Blue", 100);

  const italy1 = population("Italy", "Brown", "Red", 100);
  const italy2 = population("Italy", "Brown", "Red", 100);
  const italy3 = population("Italy", "Green", "Red", 100);
  const italy4 = population("Italy", "Green", "Blue", 100);

  const franceBrown: Composite = {
    type: "Composite",
    pivotValue: "Brown",
    children: [
      { type: "Leaf", value: france1 },
      { type: "Leaf", value: france2 }
    ]
  };

  const franceGreen: Composite = {
    type: "Composite",
    pivotValue: "Green",
    children: [
      { type: "Leaf", value: france3 },
      { type: "Leaf", value: france4 }
    ]
  };

  const italyBrown: Composite = {
    type: "Composite",
    pivotValue: "Brown",
    children: [{ type: "Leaf", value: italy1 }, { type: "Leaf", value: italy2 }]
  };

  const italyGreen: Composite = {
    type: "Composite",
    pivotValue: "Green",
    children: [{ type: "Leaf", value: italy3 }, { type: "Leaf", value: italy4 }]
  };

  const france: Composite = {
    type: "Composite",
    pivotValue: "France",
    children: [franceBrown, franceGreen]
  };

  const italy: Composite = {
    type: "Composite",
    pivotValue: "Italy",
    children: [italyBrown, italyGreen]
  };

  const root: Composite = {
    type: "Composite",
    pivotValue: "",
    children: [france, italy]
  };

  const result = getNodeValue(root, sumAccumulator);
  expect(result).toBe(800);
});

import { IPopulation } from "../src/IPopulation";
import { parseCsvData } from "../test-utils";
import { Composite } from "../src/TreeNode";
import { buildRoot } from "../src/tree-builder";
import { getNodeValue, sumAccumulator } from "../src/aggregate";

describe("Tree builder test", () => {
  let population: Array<IPopulation>;

  beforeEach(() => {
    population = parseCsvData();
  });

  test("should populate nation tree", () => {
    const root: Composite = buildRoot(population, ["nation"]);
    const result = getNodeValue(root, sumAccumulator);
    expect(result).toBe(8516);
  });

  test("should build nation eyes tree", () => {
    const root: Composite = buildRoot(population, ["nation", "eyes"]);
    const result = getNodeValue(root, sumAccumulator);
    expect(result).toBe(8516);
  });

  test("should build hair and eyes tree", () => {
    const root: Composite = buildRoot(population, ["hair", "eyes"]);
    const result = getNodeValue(root, sumAccumulator);
    expect(result).toBe(8516);
  });

  test("should build nation eyes and hair tree", () => {
    const root: Composite = buildRoot(population, ["nation", "eyes", "hair"]);
    const result = getNodeValue(root, sumAccumulator);
    expect(result).toBe(8516);
  });

  test("should build nation eyes and hair tree", () => {
    const root: Composite = buildRoot(population, ["nation", "hair", "eyes"]);
    const result = getNodeValue(root, sumAccumulator);
    expect(result).toBe(8516);
  });
});

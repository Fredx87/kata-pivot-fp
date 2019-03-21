import { IPopulation, population } from "./src/IPopulation";
import { readFileSync } from "fs";
import { split } from "fp-ts/lib/Array";

export function parseCsvData(): IPopulation[] {
  const res: IPopulation[] = [];
  const lines = readFileSync(__dirname + "/__tests__/test_data.csv")
    .toString()
    .split("\n");
  for (const line of lines!) {
    const fields = line.split(",");
    const member = population(fields[0], fields[1], fields[2], +fields[3]);
    res.push(member);
  }
  return split(1, res)[1];
}

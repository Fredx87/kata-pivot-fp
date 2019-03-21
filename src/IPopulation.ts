export interface IPopulation {
  nation: string;
  eyes: string;
  hair: string;
  total: number;
}

export const population = (
  nation: string,
  eyes: string,
  hair: string,
  total: number
): IPopulation => ({
  nation,
  eyes,
  hair,
  total
});

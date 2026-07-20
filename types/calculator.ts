export type Step = "academics" | "college" | "calculating" | "result";

export type University = {
  id: string;
  name: string;
  location: string;
  prestige: number;
  accent: string;
};

export type CalculatorData = {
  gpa: string;
  sat: string;
  university: University | null;
  chance: number | null;
};

export type ChanceResult = { chance: number; tier: "reach" | "target" | "likely" };

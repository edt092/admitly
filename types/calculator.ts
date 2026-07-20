export type Step = "academics" | "college" | "calculating" | "result";

export type University = {
  id: string;
  name: string;
  location: string;
  prestige: number;
  accent: string;
  acceptanceRate: number;
  avgGpa: number;
  avgSat: number;
  tuition: number;
  enrollment: string;
  type: "Private" | "Public";
  testBlind?: boolean;
};

export type CalculatorData = {
  gpa: string;
  sat: string;
  university: University | null;
  chance: number | null;
};

export type ChanceResult = { chance: number; tier: "reach" | "target" | "likely" };

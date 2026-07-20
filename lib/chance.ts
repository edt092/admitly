import type { ChanceResult, University } from "@/types/calculator";

export function calculateChance(gpa: number, sat: number, university: University): ChanceResult {
  const academicScore = university.testBlind
    ? (gpa / 4) * 100
    : (gpa / 4) * 52 + ((sat - 400) / 1200) * 48;
  const selectivityPenalty = (university.prestige - 50) * 1.2;
  let chance = Math.round(academicScore - selectivityPenalty + 20);

  if (university.prestige >= 95 && gpa < 3.8) chance = Math.min(chance, 8);
  if (!university.testBlind && university.prestige >= 95 && sat < 1450) chance = Math.min(chance, 9);
  chance = Math.max(2, Math.min(96, chance));

  return { chance, tier: chance < 30 ? "reach" : chance < 70 ? "target" : "likely" };
}

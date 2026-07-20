import { calculateChance } from "@/lib/chance";
import type { University } from "@/types/calculator";

export async function POST(request: Request) {
  try {
    const { gpa, sat, university } = (await request.json()) as { gpa: number; sat: number; university: University };
    if (!university || gpa < 0 || gpa > 4 || sat < 400 || sat > 1600) {
      return Response.json({ error: "Invalid calculator inputs" }, { status: 400 });
    }
    return Response.json(calculateChance(gpa, sat, university));
  } catch {
    return Response.json({ error: "Unable to calculate chance" }, { status: 400 });
  }
}

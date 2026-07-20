"use client";

import { createContext, useContext, useReducer, type Dispatch, type ReactNode } from "react";
import type { CalculatorData, Step, University } from "@/types/calculator";

type State = CalculatorData & { step: Step };
type Action =
  | { type: "SET_ACADEMICS"; gpa: string; sat: string }
  | { type: "SELECT_UNIVERSITY"; university: University }
  | { type: "GO_TO"; step: Step }
  | { type: "SET_RESULT"; chance: number }
  | { type: "RESET" };

const initialState: State = { step: "academics", gpa: "", sat: "", university: null, chance: null };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_ACADEMICS": return { ...state, gpa: action.gpa, sat: action.sat };
    case "SELECT_UNIVERSITY": return { ...state, university: action.university };
    case "GO_TO": return { ...state, step: action.step };
    case "SET_RESULT": return { ...state, chance: action.chance, step: "result" };
    case "RESET": return initialState;
  }
}

const CalculatorContext = createContext<{ state: State; dispatch: Dispatch<Action> } | null>(null);
export function CalculatorProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <CalculatorContext.Provider value={{ state, dispatch }}>{children}</CalculatorContext.Provider>;
}
export function useCalculator() {
  const value = useContext(CalculatorContext);
  if (!value) throw new Error("useCalculator must be used within CalculatorProvider");
  return value;
}

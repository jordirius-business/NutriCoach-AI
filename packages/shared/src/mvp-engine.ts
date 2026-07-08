export type GoalType = "lose_weight" | "gain_muscle" | "improve_health";

export interface UserProfile {
  age: number;
  weightKg: number;
  heightCm: number;
  activityLevel: "low" | "medium" | "high";
  injuries: string;
}

export interface DailyPlan {
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
  workout: string;
  waterLiters: number;
}

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

export function createDailyPlan(profile: UserProfile, goal: GoalType): DailyPlan {
  const heightMeters = profile.heightCm / 100;
  const bmr = 10 * profile.weightKg + 6.25 * profile.heightCm - 5 * profile.age + 5;
  const activityFactor =
    profile.activityLevel === "high" ? 1.6 : profile.activityLevel === "medium" ? 1.4 : 1.2;
  const maintenance = Math.round(bmr * activityFactor);

  const calories =
    goal === "lose_weight"
      ? clamp(maintenance - 350, 1400, 2800)
      : goal === "gain_muscle"
        ? clamp(maintenance + 250, 1800, 3400)
        : clamp(maintenance, 1600, 3000);

  const protein = Math.round(profile.weightKg * (goal === "gain_muscle" ? 2 : 1.8));
  const fats = Math.round((calories * 0.28) / 9);
  const carbs = Math.round((calories - protein * 4 - fats * 9) / 4);
  const bmi = profile.weightKg / (heightMeters * heightMeters);

  const workout =
    goal === "gain_muscle"
      ? "Push/Pull/Legs + core (45-60 min)"
      : goal === "lose_weight"
        ? "Full body + 20 min cardio (40-50 min)"
        : "Strength + mobility (35-45 min)";

  const waterLiters = clamp(
    Math.round((profile.weightKg * 0.033 + (bmi > 27 ? 0.4 : 0.2)) * 10) / 10,
    1.8,
    4,
  );

  return { calories, protein, carbs, fats, workout, waterLiters };
}

export function coachMessage(goal: GoalType, adherencePercent: number) {
  if (adherencePercent < 40) {
    return "Hoy simplificamos: completa solo lo esencial y vuelve al ritmo.";
  }
  if (goal === "gain_muscle") {
    return "Prioriza tecnica, sobrecarga progresiva y proteina diaria.";
  }
  if (goal === "lose_weight") {
    return "Constancia > perfeccion: deficit moderado y pasos diarios.";
  }
  return "Enfocate en equilibrio: entrenamiento, comida real y descanso.";
}

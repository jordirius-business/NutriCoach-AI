"use client";

import { useMemo, useState } from "react";
import type { GoalType, UserProfile } from "@nutricoach/shared";
import { coachMessage, createDailyPlan } from "@nutricoach/shared";

type Stage = "auth" | "onboarding" | "dashboard";

const defaultProfile: UserProfile = {
  age: 30,
  weightKg: 78,
  heightCm: 176,
  activityLevel: "medium",
  injuries: "",
};

const todayMeals = ["Desayuno proteico", "Comida alta en fibra", "Cena ligera"];

export default function Home() {
  const [email, setEmail] = useState("");
  const [goal, setGoal] = useState<GoalType>("improve_health");
  const [profile, setProfile] = useState<UserProfile>(defaultProfile);
  const [stage, setStage] = useState<Stage>("auth");
  const [adherence, setAdherence] = useState(64);
  const [loggedWorkout, setLoggedWorkout] = useState(false);
  const [loggedMeals, setLoggedMeals] = useState(1);

  const plan = useMemo(() => createDailyPlan(profile, goal), [profile, goal]);
  const aiNote = coachMessage(goal, adherence);

  const title =
    stage === "auth"
      ? "Autenticacion"
      : stage === "onboarding"
        ? "Onboarding Inteligente"
        : "Dashboard Diario";

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-10">
      <main className="mx-auto w-full max-w-5xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-10">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">NutriCoach AI</h1>
            <p className="text-slate-500">MVP funcional: auth, onboarding, coach y plan diario.</p>
          </div>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">
            {title}
          </span>
        </div>

        {stage === "auth" && (
          <section className="grid gap-4 md:grid-cols-2">
            <article className="rounded-xl border border-slate-200 p-4">
              <h2 className="mb-2 text-lg font-semibold">Iniciar sesion</h2>
              <input
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="email@nutricoach.ai"
                className="w-full rounded border border-slate-300 px-3 py-2"
              />
              <button
                className="mt-3 w-full rounded bg-slate-900 px-3 py-2 text-white"
                onClick={() => setStage("onboarding")}
              >
                Continuar
              </button>
            </article>
            <article className="rounded-xl border border-slate-200 p-4">
              <h3 className="mb-2 font-semibold">Modulos activos</h3>
              <ul className="space-y-1 text-sm text-slate-600">
                <li>- Authentication</li>
                <li>- Intelligent Onboarding</li>
                <li>- AI Coach</li>
                <li>- Workout + Nutrition Planner</li>
                <li>- Calendar + Tracking + Dashboard</li>
              </ul>
            </article>
          </section>
        )}

        {stage === "onboarding" && (
          <section className="grid gap-4 md:grid-cols-2">
            <article className="space-y-3 rounded-xl border border-slate-200 p-4">
              <h2 className="text-lg font-semibold">Perfil</h2>
              <label className="block text-sm">
                Edad
                <input
                  type="number"
                  className="mt-1 w-full rounded border border-slate-300 px-2 py-1"
                  value={profile.age}
                  onChange={(event) => setProfile({ ...profile, age: Number(event.target.value) })}
                />
              </label>
              <label className="block text-sm">
                Peso (kg)
                <input
                  type="number"
                  className="mt-1 w-full rounded border border-slate-300 px-2 py-1"
                  value={profile.weightKg}
                  onChange={(event) =>
                    setProfile({ ...profile, weightKg: Number(event.target.value) })
                  }
                />
              </label>
              <label className="block text-sm">
                Altura (cm)
                <input
                  type="number"
                  className="mt-1 w-full rounded border border-slate-300 px-2 py-1"
                  value={profile.heightCm}
                  onChange={(event) =>
                    setProfile({ ...profile, heightCm: Number(event.target.value) })
                  }
                />
              </label>
              <label className="block text-sm">
                Nivel de actividad
                <select
                  className="mt-1 w-full rounded border border-slate-300 px-2 py-1"
                  value={profile.activityLevel}
                  onChange={(event) =>
                    setProfile({
                      ...profile,
                      activityLevel: event.target.value as UserProfile["activityLevel"],
                    })
                  }
                >
                  <option value="low">Bajo</option>
                  <option value="medium">Medio</option>
                  <option value="high">Alto</option>
                </select>
              </label>
            </article>

            <article className="space-y-3 rounded-xl border border-slate-200 p-4">
              <h2 className="text-lg font-semibold">Objetivo principal</h2>
              <select
                className="w-full rounded border border-slate-300 px-2 py-1"
                value={goal}
                onChange={(event) => setGoal(event.target.value as GoalType)}
              >
                <option value="improve_health">Mejorar salud</option>
                <option value="lose_weight">Perder grasa</option>
                <option value="gain_muscle">Ganar masa muscular</option>
              </select>
              <p className="rounded bg-slate-100 p-3 text-sm text-slate-700">{aiNote}</p>
              <button
                className="w-full rounded bg-slate-900 px-3 py-2 text-white"
                onClick={() => setStage("dashboard")}
              >
                Generar plan inicial
              </button>
            </article>
          </section>
        )}

        {stage === "dashboard" && (
          <section className="grid gap-4 md:grid-cols-3">
            <article className="rounded-xl border border-slate-200 p-4 md:col-span-2">
              <h2 className="mb-2 text-lg font-semibold">Plan de hoy</h2>
              <ul className="space-y-1 text-sm text-slate-700">
                <li>- Calorias objetivo: {plan.calories} kcal</li>
                <li>
                  - Macros: {plan.protein}P / {plan.carbs}C / {plan.fats}F
                </li>
                <li>- Entrenamiento: {plan.workout}</li>
                <li>- Hidratacion: {plan.waterLiters} L</li>
              </ul>
              <div className="mt-3 grid gap-2 md:grid-cols-2">
                <button
                  className="rounded bg-emerald-600 px-3 py-2 text-white"
                  onClick={() => {
                    setLoggedWorkout(true);
                    setAdherence((value) => Math.min(100, value + 12));
                  }}
                >
                  Registrar entrenamiento
                </button>
                <button
                  className="rounded bg-blue-600 px-3 py-2 text-white"
                  onClick={() => {
                    setLoggedMeals((value) => Math.min(3, value + 1));
                    setAdherence((value) => Math.min(100, value + 8));
                  }}
                >
                  Registrar comida
                </button>
              </div>
            </article>

            <article className="rounded-xl border border-slate-200 p-4">
              <h3 className="mb-2 font-semibold">AI Coach</h3>
              <p className="text-sm text-slate-700">{coachMessage(goal, adherence)}</p>
              <p className="mt-3 text-xs text-slate-500">
                Usuario: {email || "demo@nutricoach.ai"}
              </p>
            </article>

            <article className="rounded-xl border border-slate-200 p-4">
              <h3 className="mb-2 font-semibold">Tracking</h3>
              <p className="text-sm text-slate-700">Adherencia semanal: {adherence}%</p>
              <p className="text-sm text-slate-700">
                Workout completado: {loggedWorkout ? "Si" : "No"}
              </p>
              <p className="text-sm text-slate-700">Comidas registradas: {loggedMeals}/3</p>
            </article>

            <article className="rounded-xl border border-slate-200 p-4">
              <h3 className="mb-2 font-semibold">Calendario de hoy</h3>
              <ul className="space-y-1 text-sm text-slate-700">
                <li>- 07:30 {todayMeals[0]}</li>
                <li>- 14:00 {todayMeals[1]}</li>
                <li>- 19:30 {plan.workout}</li>
                <li>- 21:00 {todayMeals[2]}</li>
              </ul>
            </article>

            <article className="rounded-xl border border-slate-200 p-4 md:col-span-2">
              <h3 className="mb-2 font-semibold">Siguiente paso recomendado</h3>
              <p className="text-slate-700">
                {loggedWorkout
                  ? "Cierra el dia con una cena alta en proteina y confirma hidratacion."
                  : "Completa el entrenamiento programado para mantener la progresion semanal."}
              </p>
            </article>
          </section>
        )}
      </main>
    </div>
  );
}

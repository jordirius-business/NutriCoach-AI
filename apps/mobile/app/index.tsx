import { StatusBar } from "expo-status-bar";
import { useMemo, useState } from "react";
import { Pressable, ScrollView, Text, TextInput, View } from "react-native";

type GoalType = "lose_weight" | "gain_muscle" | "improve_health";

function createPlan(weightKg: number, goal: GoalType) {
  const calories = goal === "lose_weight" ? 2000 : goal === "gain_muscle" ? 2700 : 2300;
  const protein = Math.round(weightKg * (goal === "gain_muscle" ? 2 : 1.8));
  return { calories, protein };
}

export default function HomeScreen() {
  const [goal, setGoal] = useState<GoalType>("improve_health");
  const [email, setEmail] = useState("demo@nutricoach.ai");
  const [weightKg, setWeightKg] = useState("78");
  const [completed, setCompleted] = useState(false);
  const plan = useMemo(() => createPlan(Number(weightKg || 78), goal), [weightKg, goal]);

  return (
    <ScrollView
      style={{
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 24,
        backgroundColor: "#f8fafc",
      }}
    >
      <Text style={{ fontSize: 30, fontWeight: "700", marginBottom: 6 }}>NutriCoach AI</Text>
      <Text style={{ fontSize: 16, color: "#475569", marginBottom: 16 }}>
        MVP operativo en mobile: auth + onboarding + plan diario.
      </Text>

      <View style={{ backgroundColor: "#fff", borderRadius: 12, padding: 14, marginBottom: 12 }}>
        <Text style={{ fontSize: 18, fontWeight: "600", marginBottom: 8 }}>Autenticacion</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="email@nutricoach.ai"
          style={{ borderWidth: 1, borderColor: "#cbd5e1", borderRadius: 8, padding: 10 }}
        />
      </View>

      <View style={{ backgroundColor: "#fff", borderRadius: 12, padding: 14, marginBottom: 12 }}>
        <Text style={{ fontSize: 18, fontWeight: "600", marginBottom: 8 }}>Onboarding</Text>
        <Text style={{ marginBottom: 6 }}>Peso actual (kg)</Text>
        <TextInput
          value={weightKg}
          onChangeText={setWeightKg}
          keyboardType="numeric"
          style={{
            borderWidth: 1,
            borderColor: "#cbd5e1",
            borderRadius: 8,
            padding: 10,
            marginBottom: 8,
          }}
        />
        <Text style={{ marginBottom: 6 }}>Objetivo</Text>
        <View style={{ flexDirection: "row", gap: 8 }}>
          {[
            ["improve_health", "Salud"],
            ["lose_weight", "Perder"],
            ["gain_muscle", "Ganar"],
          ].map(([value, label]) => (
            <Pressable
              key={value}
              onPress={() => setGoal(value as GoalType)}
              style={{
                backgroundColor: goal === value ? "#0f172a" : "#e2e8f0",
                paddingHorizontal: 10,
                paddingVertical: 8,
                borderRadius: 8,
              }}
            >
              <Text style={{ color: goal === value ? "#fff" : "#0f172a" }}>{label}</Text>
            </Pressable>
          ))}
        </View>
      </View>

      <View style={{ backgroundColor: "#fff", borderRadius: 12, padding: 14, marginBottom: 12 }}>
        <Text style={{ fontSize: 18, fontWeight: "600", marginBottom: 8 }}>Dashboard Diario</Text>
        <Text>Calorias objetivo: {plan.calories} kcal</Text>
        <Text>Proteina objetivo: {plan.protein} g</Text>
        <Text>Usuario: {email}</Text>
        <Text style={{ marginTop: 8 }}>
          Coach:{" "}
          {completed
            ? "Buen trabajo. Prioriza recuperacion y sueno."
            : "Completa hoy tu sesion principal."}
        </Text>
        <Pressable
          onPress={() => setCompleted((value) => !value)}
          style={{
            marginTop: 10,
            backgroundColor: completed ? "#2563eb" : "#16a34a",
            paddingVertical: 10,
            borderRadius: 8,
          }}
        >
          <Text style={{ color: "#fff", textAlign: "center", fontWeight: "600" }}>
            {completed ? "Marcar pendiente" : "Registrar entrenamiento"}
          </Text>
        </Pressable>
      </View>
      <StatusBar style="dark" />
    </ScrollView>
  );
}

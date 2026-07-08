import type { PlatformBootstrapStatus } from "@nutricoach/types";
export * from "./mvp-engine";

export const bootstrapStatus: PlatformBootstrapStatus = {
  appName: "NutriCoach AI",
  message: "Platform Bootstrap Successful",
  navigationReady: true,
};

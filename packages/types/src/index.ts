export type AppEnvironment = "development" | "staging" | "production";

export interface PlatformBootstrapStatus {
  readonly appName: string;
  readonly message: string;
  readonly navigationReady: boolean;
}

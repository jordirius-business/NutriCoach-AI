import type { PropsWithChildren } from "react";

export function SurfaceCard({ children }: PropsWithChildren) {
  return (
    <div
      style={{
        borderRadius: "1rem",
        border: "1px solid #e2e8f0",
        backgroundColor: "#ffffff",
        padding: "1rem",
      }}
    >
      {children}
    </div>
  );
}

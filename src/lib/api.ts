import type { MapPoint } from "@/types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

// Função auxiliar para pegar o token dos cookies no lado do cliente
const getAuthToken = () => {
  if (typeof window === "undefined") return ""; // Evita erro no servidor
  return document.cookie
    .split("; ")
    .find((row) => row.startsWith("@Codomemoria:token="))
    ?.split("=")[1];
};

export async function login(credentials: any) {
  const res = await fetch(`${API_URL}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.error || "Erro no login");
  return data; // Retorna { token, name }
}
export async function fetchApprovedPoints(): Promise<MapPoint[]> {
  const res = await fetch(`${API_URL}/api/map-points`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to load map points.");
  return res.json();
}

export async function fetchPendingPoints(): Promise<MapPoint[]> {
  const res = await fetch(`${API_URL}/api/map-points/pending`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to load pending points.");
  return res.json();
}

export async function submitPoint(
  data: FormData,
): Promise<{ success: boolean; point: MapPoint }> {
  const res = await fetch(`${API_URL}/api/map-points`, {
    method: "POST",
    body: data,
  });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error ?? "Failed to submit point.");
  }
  return res.json();
}

export async function approvePoint(id: string): Promise<void> {
  const res = await fetch(`${API_URL}/api/map-points/${id}/approve`, {
    method: "PATCH",
  });
  if (!res.ok) throw new Error("Failed to approve point.");
}

export async function rejectPoint(id: string): Promise<void> {
  const res = await fetch(`${API_URL}/api/map-points/${id}/reject`, {
    method: "PATCH",
  });
  if (!res.ok) throw new Error("Failed to reject point.");
}

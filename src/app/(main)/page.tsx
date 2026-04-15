// src/app/page.tsx
import { fetchApprovedPoints } from "@/lib/api";
import MapWrapper from "@/components/MapWrapper";
import QRCodeFloating from "@/components/QRCodeFloating"; // Importe aqui
import "../globals.css";
export default async function HomePage() {
  const points = await fetchApprovedPoints();

  return (
    <main className="w-screen h-screen overflow-hidden relative">
      <MapWrapper points={points} />

      {/* O QR Code flutuante aparece em cima do mapa */}
      <QRCodeFloating />
    </main>
  );
}

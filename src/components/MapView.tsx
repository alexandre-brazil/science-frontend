"use client";
import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Maximize2 } from "lucide-react";
import PointModal from "./PointModal";

export default function MapView({ points = [] }: { points: any[] }) {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const ESCOLA_COORD = [-4.4519, -43.8871] as [number, number];

  const createIcon = (url: string) =>
    new L.DivIcon({
      html: `<div style="background-image: url(${url}); background-size: cover; width: 45px; height: 45px; border-radius: 50%; border: 3px solid white; box-shadow: 0 4px 10px rgba(0,0,0,0.3);"></div>`,
      className: "",
      iconSize: [45, 45],
      iconAnchor: [22, 45],
    });

  const pontoAtual = currentIndex !== null ? points[currentIndex] : null;

  return (
    <div className="relative w-full h-full z-0">
      <MapContainer center={ESCOLA_COORD} zoom={15} style={{ height: "100%" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {points.map((ponto, index) => (
          <Marker
            key={ponto.id}
            position={[ponto.latitude, ponto.longitude]}
            icon={createIcon(ponto.newPhotoUrl)}
          >
            <Popup minWidth={320} className="rounded-lg overflow-hidden">
              <div className="p-2 space-y-3">
                <h3 className="text-xl font-bold">{ponto.authorName}</h3>
                <p className="text-gray-700 italic">
                  “{ponto.changeDescription}”
                </p>

                {/* Nova visualização: Fotos lado a lado (Sem Slider) */}
                <div className="flex gap-2">
                  {/* Coluna da Foto Antiga */}
                  <div className="flex-1">
                    <span className="text-xs text-gray-500 font-medium block mb-1">
                      Há{" "}
                      {new Date().getFullYear() - parseInt(ponto.oldPhotoYear)}{" "}
                      anos
                    </span>
                    <img
                      src={ponto.oldPhotoUrl}
                      alt="Foto Antiga"
                      className="w-full h-32 object-cover rounded-md border border-gray-200"
                    />
                  </div>

                  {/* Coluna da Foto Nova */}
                  <div className="flex-1">
                    <span className="text-xs text-gray-500 font-medium block mb-1">
                      Hoje em dia
                    </span>
                    <img
                      src={ponto.newPhotoUrl}
                      alt="Foto Atual"
                      className="w-full h-32 object-cover rounded-md border border-gray-200"
                    />
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setCurrentIndex(index)}
                className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-2 rounded-lg font-bold hover:bg-blue-700 transition"
              >
                <Maximize2 size={16} /> VER MODO SLIDE
              </button>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* O Modal é chamado aqui, fora do MapContainer */}
      {pontoAtual && (
        <PointModal
          ponto={pontoAtual}
          onClose={() => setCurrentIndex(null)}
          onNext={() => setCurrentIndex((currentIndex! + 1) % points.length)}
          onPrev={() =>
            setCurrentIndex((currentIndex! - 1 + points.length) % points.length)
          }
        />
      )}
    </div>
  );
}

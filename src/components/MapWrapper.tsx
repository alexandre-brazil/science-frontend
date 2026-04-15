"use client";
import dynamic from "next/dynamic";

const MapView = dynamic(() => import("./MapView"), {
  ssr: false,
  loading: () => (
    <div className="h-[600px] bg-gray-100 animate-pulse rounded-xl" />
  ),
});

export default function MapWrapper({ points }: { points: any[] }) {
  return <MapView points={points} />;
}

// src/components/SubmitForm.tsx
"use client";

import { useState, FormEvent, useRef } from "react";
import Autocomplete from "react-google-autocomplete";
import { submitPoint } from "@/lib/api";

export default function SubmitForm() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [coordinates, setCoordinates] = useState<{
    lat: number;
    lng: number;
  } | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!coordinates) {
      setStatus("error");
      setErrorMsg("Please select a location from the suggestions.");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);

    // Adiciona as coordenadas do Google no formulário
    data.set("latitude", String(coordinates.lat));
    data.set("longitude", String(coordinates.lng));

    try {
      await submitPoint(data);
      setStatus("success");
      formRef.current?.reset();
      setCoordinates(null); // Limpa as coordenadas após o sucesso
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "An unexpected error occurred.",
      );
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-sm font-medium mb-1">Nome</label>
        <input
          name="authorName"
          required
          placeholder="e.g. Maria Silva"
          className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Localização das Fotos
        </label>
        {/* O Campo do Google Autocomplete */}
        <Autocomplete
          apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
          onPlaceSelected={(place) => {
            if (place.geometry?.location) {
              setCoordinates({
                lat: place.geometry.location.lat(),
                lng: place.geometry.location.lng(),
              });
              setErrorMsg(""); // Limpa o erro se ele escolher um lugar válido
            }
          }}
          options={{
            types: ["geocode", "establishment"],
            componentRestrictions: { country: "br" }, // Restringe buscas ao Brasil
          }}
          placeholder="Search for an address or place in Codó..."
          className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {coordinates && (
          <p className="text-xs text-green-600 mt-1">Location confirmed!</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Ano da Foto Antiga{" "}
        </label>
        <input
          name="oldPhotoYear"
          required
          placeholder="e.g. 1985"
          className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Descreva as mudanças no local{" "}
          <span className="text-gray-400 font-normal">(optional)</span>
        </label>
        <textarea
          name="changeDescription"
          rows={3}
          placeholder="Describe what changed in this location…"
          className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Foto antiga</label>
          <input
            type="file"
            name="oldPhoto"
            accept="image/*"
            required
            className="w-full text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Foto atual</label>
          <input
            type="file"
            name="newPhoto"
            accept="image/*"
            required
            className="w-full text-sm"
          />
        </div>
      </div>

      {status === "error" && <p className="text-red-600 text-sm">{errorMsg}</p>}
      {status === "success" && (
        <p className="text-green-600 text-sm font-medium">
          Submitted! Your point is awaiting teacher review.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 disabled:opacity-50 transition"
      >
        {status === "loading" ? "Submitting…" : "Submit Point"}
      </button>
    </form>
  );
}

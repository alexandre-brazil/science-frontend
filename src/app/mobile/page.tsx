// src/app/mobile/page.tsx
"use client";

import SubmitForm from "@/components/SubmitForm";
import { Smartphone, Camera, MapPin, ChevronLeft } from "lucide-react";
import Link from "next/link";
import "../globals.css";

export default function MobilePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Status Bar Simulado / Header Mobile */}
      <div className="bg-white px-6 pt-12 pb-6 rounded-b-[40px] shadow-sm border-b border-slate-200">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">
              Nova Descoberta
            </h1>
            <p className="text-slate-500 text-sm flex items-center gap-1">
              <MapPin size={14} className="text-blue-600" /> Codó, Maranhão
            </p>
          </div>
          <div className="bg-blue-100 p-3 rounded-2xl">
            <Camera className="text-blue-600" size={24} />
          </div>
        </div>
      </div>

      {/* Área do Formulário */}
      <div className="px-4 -mt-4">
        <div className="bg-white rounded-3xl shadow-xl p-6 border border-slate-100">
          <SubmitForm />
        </div>
      </div>

      {/* Footer de Apoio */}
      <footer className="p-8 text-center">
        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.3em]">
          U. I. M. E. Estevam Ângelo De Sousa
        </p>
      </footer>
    </main>
  );
}

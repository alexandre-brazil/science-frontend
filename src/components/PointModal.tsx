"use client";
import { X, ChevronLeft, ChevronRight, Calendar } from "lucide-react";

interface PointModalProps {
  ponto: any;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function PointModal({
  ponto,
  onClose,
  onNext,
  onPrev,
}: PointModalProps) {
  const anoAtual = new Date().getFullYear();
  const anosAtras = anoAtual - parseInt(ponto.oldPhotoYear);

  return (
    <div className="fixed inset-0 z-[10000] bg-black/95 text-white flex flex-col md:flex-row animate-in fade-in zoom-in duration-300">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-[10001] p-3 bg-white/10 hover:bg-white/20 rounded-full transition"
      >
        <X size={32} />
      </button>

      {/* TEXTO */}
      <div className="w-full md:w-1/3 p-10 flex flex-col justify-center border-r border-white/10">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-600 rounded-full text-xs font-bold uppercase">
            <Calendar size={14} /> Memória Urbana
          </div>
          <h2 className="text-3xl font-light italic opacity-90 leading-tight">
            "{ponto.changeDescription}"
          </h2>
          <div>
            <p className="text-sm text-gray-400">Enviado por</p>
            <p className="text-xl font-medium">{ponto.authorName}</p>
          </div>
          <div className="flex gap-4 pt-6">
            <button
              onClick={onPrev}
              className="p-4 bg-white/5 hover:bg-white/10 rounded-xl transition"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={onNext}
              className="p-4 bg-white/5 hover:bg-white/10 rounded-xl transition"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col md:flex-row">
        {/* Foto Antiga */}
        <div className="relative flex-1 overflow-hidden group">
          <img
            src={ponto.oldPhotoUrl}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            alt="Antigamente"
          />

          {/* CAMADA DE PROTEÇÃO (GRADIENTE) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />

          <div className="absolute bottom-8 left-8 z-10">
            <p className="text-2xl font-bold uppercase shadow-black drop-shadow-md">
              Há {anosAtras} anos
            </p>
          </div>
        </div>

        {/* Foto Atual */}
        <div className="relative flex-1 overflow-hidden border-t md:border-t-0 md:border-l border-white/10">
          <img
            src={ponto.newPhotoUrl}
            className="w-full h-full object-cover"
            alt="Atualmente"
          />

          {/* CAMADA DE PROTEÇÃO (GRADIENTE) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />

          <div className="absolute bottom-8 left-8 z-10">
            <p className="text-2xl font-bold uppercase shadow-black drop-shadow-md">
              Hoje em dia
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

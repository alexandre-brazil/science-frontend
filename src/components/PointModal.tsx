"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

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
  // Estado para garantir que o Portal só renderize no lado do cliente (evita erros no Next.js)
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Opcional: Travar o scroll da página enquanto o modal estiver aberto
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const anoAtual = new Date().getFullYear();
  const anosAtras = anoAtual - parseInt(ponto.oldPhotoYear);

  // Se ainda não montou no cliente, não renderiza nada
  if (!mounted) return null;

  // O conteúdo do seu modal continua exatemente o mesmo
  const modalContent = (
    <div className="fixed inset-0 z-[99999] bg-black/95 text-white flex flex-col md:flex-row animate-in fade-in zoom-in duration-300">
      <button
        // ANTES ERA: onClick={onClose}
        // AGORA FICA ASSIM:
        onClick={() => window.location.reload()}
        className="absolute top-6 right-6 z-[100000] p-3 bg-white/10 hover:bg-white/20 rounded-full transition"
      >
        <X size={32} />
      </button>

      {/* TEXTO */}
      {/* PAINEL LATERAL (TEXTO) */}
      <div className="w-full md:w-1/3 p-10 flex flex-col justify-between border-r border-white/10 h-full max-h-screen">
        {/* 1. TOPO: Enviado por */}
        <div className="flex-shrink-0 text-center md:text-left">
          <p className="text-sm text-gray-400 uppercase tracking-widest font-semibold">
            Enviado por
          </p>
          <p className="text-2xl font-medium mt-1">{ponto.authorName}</p>
        </div>

        {/* 2. MEIO: Texto com área fixa/flexível */}
        {/* O flex-1 faz essa área ocupar todo o espaço central disponível. */}
        {/* O overflow-y-auto garante que o layout não quebre se o texto for gigante. */}
        <div className="flex-1 flex flex-col justify-center py-8 overflow-y-auto">
          <h2 className="text-3xl md:text-4xl font-light italic opacity-90 leading-tight text-center md:text-left">
            "{ponto.changeDescription}"
          </h2>
        </div>

        {/* 3. BASE: Botões centralizados */}
        <div className="flex-shrink-0 flex justify-center gap-6 pt-6 mt-auto">
          <button
            onClick={onPrev}
            className="p-4 bg-white/5 hover:bg-white/15 hover:scale-105 active:scale-95 rounded-2xl transition-all"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            onClick={onNext}
            className="p-4 bg-white/5 hover:bg-white/15 hover:scale-105 active:scale-95 rounded-2xl transition-all"
          >
            <ChevronRight size={28} />
          </button>
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

  // Aqui é onde a mágica acontece: Jogamos o modal direto pro <body>
  return createPortal(modalContent, document.body);
}

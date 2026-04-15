// src/components/QRCodeFloating.tsx
"use client";

import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { QrCode, X } from "lucide-react";

export default function QRCodeFloating() {
  const [isOpen, setIsOpen] = useState(false);

  // URL dinâmica: aponta para a página de envio
  // No desenvolvimento será localhost:3000/submit, no deploy será seu site.com/submit
  const deployUrl =
    typeof window !== "undefined" ? `${window.location.origin}/mobile` : "";

  return (
    <div className="fixed bottom-6 right-6 z-[1001] flex flex-col items-end gap-4">
      {isOpen && (
        <div className="bg-white p-4 rounded-2xl shadow-2xl border border-gray-200 animate-in slide-in-from-bottom-5 duration-300">
          <div className="flex justify-between items-center mb-3">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">
              Aponte a Câmera
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <X size={18} />
            </button>
          </div>
          <div className="bg-white p-2 border-4 border-blue-600 rounded-xl">
            <QRCodeSVG value={deployUrl} size={150} />
          </div>
          <p className="text-[10px] text-center mt-3 text-gray-400 font-medium leading-tight">
            Envie sua foto <br /> direto do celular
          </p>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center gap-2"
      >
        <QrCode size={24} />
        <span className="font-bold text-sm pr-1">PARTICIPAR</span>
      </button>
    </div>
  );
}

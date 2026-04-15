"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Map, PlusCircle, LayoutDashboard, LogOut } from "lucide-react";

export default function Header() {
  const pathname = usePathname();

  // Função simples para destacar o link ativo
  const isActive = (path: string) => pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-[50] bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* LOGO / TÍTULO */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-blue-600 p-1.5 rounded-lg group-hover:rotate-3 transition-transform">
            <Map className="text-white" size={20} />
          </div>
          <span className="font-bold text-xl tracking-tight text-gray-900">
            Codó<span className="text-blue-600">Memória</span>
          </span>
        </Link>

        {/* NAVEGAÇÃO CENTRAL */}
        <nav className="hidden md:flex items-center gap-1">
          <Link
            href="/"
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              isActive("/")
                ? "bg-blue-50 text-blue-600"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            Mapa
          </Link>
          <Link
            href="/submit"
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              isActive("/submit")
                ? "bg-blue-50 text-blue-600"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            Enviar Foto
          </Link>
          <Link
            href="/admin"
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              isActive("/admin")
                ? "bg-blue-50 text-blue-600"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            Painel Admin
          </Link>
          <Link
            href="/about"
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              isActive("/admin")
                ? "bg-blue-50 text-blue-600"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            Sobre
          </Link>
        </nav>

        {/* BOTÃO LOGOUT */}
        <button
          onClick={() => {
            // Aqui entra sua lógica de logout (limpar cookies/localStorage)
            console.log("Logout clicado");
            window.location.href = "/login";
          }}
          className="flex items-center gap-2 text-gray-500 hover:text-red-600 font-medium text-sm transition-colors border-l pl-6 ml-2"
        >
          <LogOut size={18} />
          <span>Sair</span>
        </button>
      </div>
    </header>
  );
}

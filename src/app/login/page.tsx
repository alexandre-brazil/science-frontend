"use client";

import { useState } from "react";
import { Lock, User, ArrowRight, Map, AlertCircle } from "lucide-react";
import { useRouter } from "next/navigation"; // Para redirecionar após o login
import "../globals.css";
import Link from "next/link";
import { login } from "@/lib/api";

export default function LoginPage() {
  const router = useRouter();

  // 1. Novos estados para capturar os dados e erros
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // USANDO A API CENTRALIZADA
      const data = await login({ email, password });

      // Salvando nos cookies (importante para o middleware que criamos antes)
      document.cookie = `@Codomemoria:token=${data.token}; path=/; max-age=${60 * 60 * 24}`;
      localStorage.setItem("@Codomemoria:user", data.name);

      router.push("/"); // Ou para /admin
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="inline-flex items-center justify-center bg-blue-600 p-4 rounded-3xl shadow-lg mb-4 rotate-3 hover:rotate-0 transition-transform duration-300">
            <Map className="text-white" size={32} />
          </div>
          <h1 className="text-3xl font-black text-gray-900 tracking-tight">
            Codó<span className="text-blue-600">Memória</span>
          </h1>
          <p className="text-gray-500 mt-2 font-medium">
            Acesso Restrito ao Painel Administrativo
          </p>
        </div>

        <div className="bg-white p-8 rounded-[40px] shadow-sm border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -z-0 opacity-50" />

          <form onSubmit={handleLogin} className="space-y-6 relative z-10">
            {/* Exibição de Erro Amigável */}
            {error && (
              <div className="bg-red-50 text-red-600 p-4 rounded-2xl text-sm font-medium flex items-center gap-2 border border-red-100 animate-shake">
                <AlertCircle size={18} />
                {error}
              </div>
            )}

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">
                E-mail Institucional
              </label>
              <div className="relative group">
                <User
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition-colors"
                  size={20}
                />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="exemplo@escola.com"
                  className="w-full bg-gray-50 border-none rounded-2xl py-4 pl-12 pr-4 text-sm focus:ring-2 focus:ring-blue-600 transition-all outline-none text-gray-900"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">
                Senha de Acesso
              </label>
              <div className="relative group">
                <Lock
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition-colors"
                  size={20}
                />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-gray-50 border-none rounded-2xl py-4 pl-12 pr-4 text-sm focus:ring-2 focus:ring-blue-600 transition-all outline-none text-gray-900"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-200 hover:shadow-blue-300 disabled:opacity-50 group"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  Entrar no Painel
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </>
              )}
            </button>
          </form>
        </div>

        <p className="text-center text-gray-400 text-xs font-medium">
          Dificuldades com o acesso? <br />
          <Link
            href="/"
            className="text-blue-600 cursor-pointer hover:underline"
          >
            Entrar como convidado
          </Link>
        </p>
      </div>
    </main>
  );
}

// src/app/about/page.tsx
import Image from "next/image";
import { User, GraduationCap, Award, Heart } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50 pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* SEÇÃO: O PROJETO */}
        <section className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
          <h1 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <GraduationCap className="text-blue-600" /> Sobre o Projeto
          </h1>
          <p className="text-gray-600 leading-relaxed text-lg">
            O <strong>CodóMemória</strong> nasceu como uma iniciativa
            educacional para conectar os alunos à história viva de Codó,
            Maranhão. Através da fotografia e da geolocalização, os estudantes
            exploram as transformações urbanas, sociais e culturais, preservando
            a memória da nossa cidade para as futuras gerações.
          </p>
        </section>

        {/* SEÇÃO: A PROFESSORA */}
        <section className="grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-1">
            <div className="relative w-64 h-64 mx-auto rounded-2xl overflow-hidden shadow-xl border-4 border-white rotate-2 transition-transform hover:rotate-0">
              {/* Substitua pelo caminho real da foto da Luana */}
              <div className="w-full h-full bg-blue-100 flex items-center justify-center">
                <User size={80} className="text-blue-300" />
                {/* <Image src="/luana.jpg" alt="Professora Luana" fill className="object-cover" /> */}
              </div>
            </div>
          </div>

          <div className="md:col-span-2 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase">
              Idealizadora
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              Profª. Luana Cristielle
            </h2>
            <p className="text-gray-600 leading-relaxed italic">
              "A educação é a ferramenta mais poderosa para preservar a
              identidade de um povo. Ver meus alunos redescobrindo Codó através
              de suas próprias lentes é o maior prêmio deste projeto."
            </p>
            <div className="flex gap-6 pt-2">
              <div className="flex flex-col">
                <span className="font-bold text-gray-900 text-xl">10+</span>
                <span className="text-xs text-gray-500 uppercase font-medium">
                  Anos de Ensino
                </span>
              </div>
              <div className="flex flex-col border-l pl-6">
                <span className="font-bold text-gray-900 text-xl">500+</span>
                <span className="text-xs text-gray-500 uppercase font-medium">
                  Fotos Catalogadas
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO: CRÉDITOS */}
        <section className="bg-blue-600 rounded-3xl p-8 text-white shadow-lg relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Award /> Créditos e Agradecimentos
            </h3>
            <div className="grid sm:grid-cols-2 gap-6 text-blue-100">
              <div>
                <h4 className="font-bold text-white mb-2">
                  Desenvolvimento Técnico
                </h4>
                <p className="text-sm">
                  Alexandre Brasil & Equipe de Tecnologia
                </p>
              </div>
              <div>
                <h4 className="font-bold text-white mb-2">Instituição</h4>
                <p className="text-sm">Escola M.João Ribeiro</p>
              </div>
              <div className="sm:col-span-2 border-t border-blue-500 pt-4 mt-2">
                <p className="text-sm flex items-center gap-2">
                  Desenvolvido com{" "}
                  <Heart size={16} className="fill-red-400 text-red-400" /> para
                  a comunidade Codoense.
                </p>
              </div>
            </div>
          </div>
          {/* Círculo decorativo de fundo */}
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-blue-500 rounded-full opacity-50" />
        </section>
      </div>
    </main>
  );
}

import Link from "next/link";
import {
  Map,
  Camera,
  History,
  ArrowRight,
  Leaf,
  Building,
  PlayCircle,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50 font-sans selection:bg-blue-500/30">
      {/* 1. HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden px-6">
        {/* Background com efeito de sobreposição (Substitua a URL pela sua imagem real) */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 grayscale mix-blend-overlay"
          style={{ backgroundImage: "url('/sua-imagem-hero-cidade.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-neutral-950" />

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium tracking-wide uppercase">
            <Map size={16} className="text-blue-400" />
            CodóMemória
          </div>

          <h1 className="text-5xl md:text-7xl font-light tracking-tight leading-tight">
            O tempo através da{" "}
            <span className="font-serif italic text-blue-400">paisagem.</span>
          </h1>

          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            Navegue pelo mapa e descubra como nossa cidade se transformou. Onde
            havia floresta, hoje há asfalto. Explore o antes e o depois através
            das lentes da memória urbana.
          </p>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/login"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-medium transition-all flex items-center gap-2 hover:scale-105"
            >
              Explorar o Mapa <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. VÍDEO DOCUMENTÁRIO / APRESENTAÇÃO */}
      <section className="py-24 px-6 bg-neutral-950 relative border-t border-white/5">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-neutral-400 font-medium mb-4 uppercase tracking-wider text-sm">
            <PlayCircle size={16} /> Entenda o Projeto
          </div>
          <h2 className="text-3xl md:text-4xl font-light mb-12">
            A transformação em{" "}
            <span className="font-serif italic text-blue-400">movimento.</span>
          </h2>

          {/* Container do Vídeo */}
          <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 bg-neutral-900 shadow-2xl group">
            {/* OPÇÃO 1: IFRAME DO YOUTUBE/VIMEO */}
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/SEU_ID_DE_VIDEO_AQUI?rel=0&showinfo=0"
              title="Vídeo de Apresentação"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

            {/* OPÇÃO 2: VÍDEO LOCAL (Se for usar local, apague o iframe acima e descomente o código abaixo) */}
            {/* <video 
              controls 
              className="absolute inset-0 w-full h-full object-cover"
              poster="/sua-thumb-do-video.jpg"
            >
              <source src="/seu-video-explicativo.mp4" type="video/mp4" />
              Seu navegador não suporta a tag de vídeo.
            </video> 
            */}
          </div>
        </div>
      </section>

      {/* 3. DESTAQUE: VEGETAÇÃO VS CASAS */}
      <section className="py-24 px-6 bg-neutral-900 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:w-2/3">
            <div className="inline-flex items-center gap-2 text-green-400 font-medium mb-4 uppercase tracking-wider text-sm">
              <Leaf size={16} /> Transformação Ambiental
            </div>
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              De pulmão verde a <br />{" "}
              <span className="font-serif italic text-neutral-400">
                selva de pedra.
              </span>
            </h2>
            <p className="text-neutral-400 text-lg leading-relaxed">
              As fronteiras da cidade não param de se expandir. Este local, que
              há poucos anos era dominado por vegetação densa e solo permeável,
              foi gradualmente substituído por um novo loteamento residencial.
              Uma mudança que traz moradia, mas que nos obriga a questionar:
              qual é o limite entre o desenvolvimento e a preservação?
            </p>
          </div>

          {/* Grid Antes e Depois */}
          <div className="grid md:grid-cols-2 gap-2 rounded-3xl overflow-hidden bg-neutral-950 border border-white/10 p-2">
            {/* FOTO ANTES */}
            <div className="relative group overflow-hidden rounded-2xl h-[400px] md:h-[500px]">
              {/* Substitua o src pela foto antiga real */}
              <img
                src="https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=1000&auto=format&fit=crop"
                alt="Floresta Antigamente"
                className="w-full h-full object-cover grayscale transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                <div>
                  <p className="text-3xl font-bold uppercase tracking-widest text-white/90">
                    2005
                  </p>
                  <p className="text-neutral-300 flex items-center gap-2 mt-1">
                    <Leaf size={14} /> Cobertura natural intacta
                  </p>
                </div>
              </div>
            </div>

            {/* FOTO DEPOIS */}
            <div className="relative group overflow-hidden rounded-2xl h-[400px] md:h-[500px]">
              {/* Substitua o src pela foto atual real */}
              <img
                src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop"
                alt="Bairro Atualmente"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                <div>
                  <p className="text-3xl font-bold uppercase tracking-widest text-white/90">
                    Hoje
                  </p>
                  <p className="text-neutral-300 flex items-center gap-2 mt-1">
                    <Building size={14} /> Loteamento residencial
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. COMO FUNCIONA */}
      <section className="py-24 px-6 bg-neutral-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-16">
            Ajude a construir nossa{" "}
            <span className="font-serif italic text-blue-400">história.</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Passo 1 */}
            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-2">
                <Map size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-medium">1. Encontre o Local</h3>
              <p className="text-neutral-400 leading-relaxed max-w-xs">
                Navegue pelo nosso mapa interativo e procure por ruas e bairros
                que você conhece.
              </p>
            </div>

            {/* Passo 2 */}
            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-2">
                <History size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-medium">2. Compare o Tempo</h3>
              <p className="text-neutral-400 leading-relaxed max-w-xs">
                Abra os registros de outros moradores e veja as fotos do "Antes"
                e "Hoje em dia".
              </p>
            </div>

            {/* Passo 3 */}
            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-green-500/10 text-green-400 flex items-center justify-center mb-2">
                <Camera size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-medium">3. Compartilhe</h3>
              <p className="text-neutral-400 leading-relaxed max-w-xs">
                Tem uma foto antiga? Envie as coordenadas, faça o upload e
                registre sua memória.
              </p>
            </div>
          </div>

          <div className="mt-16">
            <Link
              href="/cadastro-ponto"
              className="inline-flex px-8 py-4 bg-white text-black hover:bg-neutral-200 rounded-full font-medium transition-all items-center gap-2"
            >
              <Camera size={18} /> Registrar um Novo Ponto
            </Link>
          </div>
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="py-12 border-t border-white/10 text-center text-neutral-500 text-sm">
        <p className="mb-2">CodóMemória © {new Date().getFullYear()}</p>
        <p>Preservando o passado para repensar o futuro da nossa cidade.</p>
      </footer>
    </div>
  );
}

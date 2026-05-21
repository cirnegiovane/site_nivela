import { Link } from "react-router-dom";
import { PencilRuler, ScrollText, Video } from "lucide-react";

const pencil_ruler = () => {
  return (
    <div className="flex items-center justify-center w-12 h-12 bg-nivela-green-vibrant/20 rounded-full">
      <PencilRuler
        size={30}
        className="text-nivela-green-dark"
        strokeWidth={1}
      />
    </div>
  );
};

const list = () => {
  return (
    <div className="flex items-center justify-center w-12 h-12 bg-nivela-orange-vibrant/20 rounded-full">
      <ScrollText
        size={30}
        className="text-nivela-orange-dark"
        strokeWidth={1}
      />
    </div>
  );
};

const video = () => {
  return (
    <div className="flex items-center justify-center w-12 h-12 bg-nivela-green-vibrant/20 rounded-full">
      <Video size={30} className="text-nivela-green-dark" strokeWidth={1} />
    </div>
  );
};

function Home() {
  return (
    <div className="overflow-hidden">
      <section className="relative z-0 bg-nivela-green-pale/50 py-20 px-5 md:py-32">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl md:text-7xl text-nivela-green-dark mb-6 leading-tight !font-century font-bold">
              A matemática{" "}
              <span className="text-nivela-orange-dark text-5xl md:text-7xl font-alexandria-signature font-normal">
                flui
              </span>{" "}
              no Nivela UERJ
            </h1>
            <p className="text-lg md:text-xl text-nivela-green-dark/80 mb-8 max-w-xl font-century">
              Tornando o aprendizado de matemática acessível, leve e dinâmico
              para todos os estudantes da UERJ.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <Link
                to="/material"
                className="bg-nivela-green-base text-white px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform shadow-lg"
              >
                Explorar Materiais
              </Link>
              <Link
                to="/institucional"
                className="bg-white text-nivela-green-dark border-2 border-nivela-green-light px-8 py-3 rounded-full font-bold hover:bg-nivela-green-pale transition"
              >
                O Projeto
              </Link>
            </div>
          </div>

          <div className="flex-1 w-full flex justify-center">
            <div className="relative w-full max-w-lg md:max-w-xl aspect-video md:aspect-video">
              {/* Camada Laranja*/}
              <div className="absolute inset-0 bg-nivela-orange-dark rounded-[2rem] shadow-2xl rotate-5" />
              {/* Camada verde*/}
              <div className="absolute inset-0 bg-nivela-green-dark rounded-[2rem] shadow-2xl -rotate-5" />

              {/* Camada da Frente (Imagem) */}
              <div className="absolute inset-0 rounded-[2rem] overflow-hidden rotate-0 shadow-xl">
                <img
                  src="/images/img_geral.jpg"
                  alt="Nivela UERJ"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cards de Navegação Acessível */}
      <section className="py-20 px-5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link
            to=""
            className="p-8 rounded-[2.5rem] bg-nivela-green-pale/10 border-3 border-nivela-green-vibrant hover:-translate-y-2 transition-all"
          >
            <span className="text-4xl mb-4 block">{pencil_ruler()}</span>
            <h3 className="text-2xl text-nivela-green-dark mb-2 !font-century font-bold">
              Cálculo Zero
            </h3>
            <p className="font-century text-nivela-green-dark">
              A base que você precisa para encarar o primeiro período sem medo.
            </p>
          </Link>
          <Link
            to="/material"
            className="p-8 rounded-[2.5rem] bg-nivela-orange-pale/10 border-3 border-nivela-orange-vibrant hover:-translate-y-2 transition-all"
          >
            <span className="text-4xl mb-4 block">{list()}</span>
            <h3 className="text-2xl text-nivela-orange-dark mb-2 !font-century font-bold">
              Questões
            </h3>
            <p className="font-century text-nivela-orange-dark">
              Listas organizadas para praticar o raciocínio lógico de forma
              clara.
            </p>
          </Link>
          <Link
            to="/videoaulas"
            className="p-8 rounded-[2.5rem] bg-nivela-green-pale/10 border-3 border-nivela-green-vibrant hover:-translate-y-2 transition-all"
          >
            <span className="text-4xl mb-4 block">{video()}</span>
            <h3 className="text-2xl text-nivela-green-dark mb-2 !font-century font-bold">
              Aulas
            </h3>
            <p className="font-century text-nivela-green-dark">
              Vídeos dinâmicos para entender os conceitos mais complexos.
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;

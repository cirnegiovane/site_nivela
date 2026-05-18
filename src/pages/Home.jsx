import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-nivela-green-pale py-20 px-5 md:py-32">
        {/* Elemento decorativo lúdico (Círculo Laranja) */}
        <div className="absolute -top-10 -right-10 w-64 h-64 bg-nivela-orange-light/30 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl md:text-7xl text-nivela-green-dark mb-6 leading-tight">
              A matemática{" "}
              <span className="text-nivela-orange-dark italic text-5xl md:text-7xl">
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

          <div className="flex-1 relative">
            <div className="bg-nivela-orange-pale rounded-[2rem] p-4 rotate-3 shadow-2xl border-4 border-white overflow-hidden">
              <img
                src="/images/img_geral.jpg"
                alt="Nivela UERJ"
                className="w-full h-auto object-cover rounded-[2rem]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cards de Navegação Acessível */}
      <section className="py-20 px-5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-[2.5rem] bg-nivela-green-pale border-b-8 border-nivela-green-vibrant hover:-translate-y-2 transition-all">
            <span className="text-4xl mb-4 block">📐</span>
            <h3 className="text-2xl text-nivela-green-dark mb-2">
              Cálculo Zero
            </h3>
            <p className="font-century text-nivela-green-dark/70">
              A base que você precisa para encarar o primeiro período sem medo.
            </p>
          </div>
          <div className="p-8 rounded-[2.5rem] bg-nivela-orange-pale border-b-8 border-nivela-orange-vibrant hover:-translate-y-2 transition-all">
            <span className="text-4xl mb-4 block">📝</span>
            <h3 className="text-2xl text-nivela-orange-dark mb-2">Questões</h3>
            <p className="font-century text-nivela-orange-dark/70">
              Listas organizadas para praticar o raciocínio lógico de forma
              clara.
            </p>
          </div>
          <div className="p-8 rounded-[2.5rem] bg-nivela-green-pale border-b-8 border-nivela-green-light hover:-translate-y-2 transition-all">
            <span className="text-4xl mb-4 block">🎥</span>
            <h3 className="text-2xl text-nivela-green-dark mb-2">Aulas</h3>
            <p className="font-century text-nivela-green-dark/70">
              Vídeos dinâmicos para entender os conceitos mais complexos.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

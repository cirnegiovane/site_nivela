import { Link } from "react-router-dom";

function Contato() {
  const professorCoord = "Mauro Nigro Alves Junior";
  const email = "nivelauerj@gmail.com";
  const instagram = "@nivelauerj";

  return (
    <main className="min-h-screen bg-nivela-orange-pale relative overflow-hidden py-12 px-6 flex items-center justify-center">
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-nivela-orange-light opacity-30 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-nivela-green-light opacity-20 rounded-full blur-3xl" />

      <section className="relative z-10 max-w-4xl w-full">
        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border-b-8 border-nivela-orange-vibrant p-10 md:p-16">
          <div className="text-center">
            <h1 className="font-forum text-5xl text-nivela-orange-dark mb-4">
              Contato
            </h1>
            <p className="font-century text-gray-600 mb-10 text-lg italic">
              "Acessibilidade e diálogo para construir sua base matemática."
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {/* Card 1: Coordenação */}
              <a
                href="https://www.linkedin.com/in/mauronigro/"
                className="bg-nivela-green-pale/30 p-6 rounded-[2rem] border-2 border-nivela-green-light/20 flex flex-col items-center justify-center hover:bg-nivela-green-pale hover:scale-[1.02] transition-transform block"
              >
                <span className="text-3xl mb-3">🎓</span>
                <h3 className="font-forum text-xl text-nivela-green-dark leading-tight mb-2">
                  Coordenação
                </h3>
                <p className="font-century text-sm text-nivela-green-dark/80 font-bold">
                  Prof. {professorCoord}
                </p>
              </a>

              {/* Card 2: E-mail*/}
              <a
                href={`mailto:${email}`}
                className="bg-nivela-orange-pale/40 p-6 rounded-[2rem] border-2 border-nivela-orange-light/20 flex flex-col items-center justify-center hover:bg-nivela-orange-pale hover:scale-[1.02] transition-all group"
              >
                <span className="text-3xl mb-3 group-hover:scale-110 transition-transform">
                  📧
                </span>
                <h3 className="font-forum text-xl text-nivela-orange-dark mb-2">
                  E-mail
                </h3>
                <p className="font-century text-sm text-nivela-orange-dark underline font-bold break-all">
                  {email}
                </p>
              </a>

              {/* Card 3: Instagram*/}
              <a
                href="https://instagram.com/nivelauerj"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-nivela-green-pale/30 p-6 rounded-[2rem] border-2 border-nivela-green-light/20 flex flex-col items-center justify-center hover:bg-nivela-green-pale hover:scale-[1.02] transition-all group"
              >
                <span className="text-3xl mb-3 group-hover:rotate-12 transition-transform">
                  📸
                </span>
                <h3 className="font-forum text-xl text-nivela-green-dark mb-2">
                  Instagram
                </h3>
                <p className="font-century text-sm text-nivela-green-dark font-bold">
                  {instagram}
                </p>
              </a>
            </div>
          </div>

          {/* Botão Voltar */}
          <div className="mt-10 text-center md:text-left">
            <Link
              to="/"
              className="text-nivela-green-dark font-century font-bold hover:text-nivela-orange-dark transition-colors"
            >
              ← Voltar para a página inicial
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contato;

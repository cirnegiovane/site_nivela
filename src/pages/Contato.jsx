import { Link } from "react-router-dom";
import { Camera, GraduationCap, Mail } from "lucide-react";

const professorCoord = "Mauro Nigro Alves Junior";
const email = "nivelauerj@gmail.com";
const instagram = "@nivelauerj";
const opc = 55;
// configuração dos símbolos do fundo
const BACKGROUND_SYMBOLS = [
  // Quadrante Superior Esquerdo
  {
    char: "∫",
    className: "top-[5%] left-[8%] text-nivela-orange-light text-9xl rotate-12",
  },
  {
    char: "π",
    className: "top-[25%] left-[12%] text-nivela-orange-light text-8xl italic",
  },
  {
    char: "∀",
    className:
      "top-[12%] left-[28%] text-nivela-orange-light text-7xl -rotate-12",
  },
  {
    char: "∂",
    className:
      "top-[35%] left-[4%] text-nivela-orange-light text-8xl rotate-45",
  },

  // Quadrante Superior Direito
  {
    char: "∑",
    className:
      "top-[20%] right-[15%] text-nivela-orange-light text-9xl rotate-45",
  },
  {
    char: "∞",
    className:
      "top-[8%] right-[30%] text-nivela-orange-light text-8xl -rotate-12",
  },
  {
    char: "λ",
    className: "top-[28%] right-[5%] text-nivela-orange-light text-7xl italic",
  },
  {
    char: "∇",
    className:
      "top-[38%] right-[25%] text-nivela-orange-light text-8xl rotate-180",
  },

  // Centro / Meio do Ecrã
  {
    char: "√",
    className:
      "top-[50%] left-[25%] text-nivela-orange-light text-9xl -rotate-12",
  },
  {
    char: "Ω",
    className: "top-[45%] right-[22%] text-nivela-orange-light text-8xl",
  },
  {
    char: "∈",
    className:
      "top-[55%] right-[40%] text-nivela-orange-light text-7xl rotate-90",
  },

  // Quadrante Inferior Esquerdo
  {
    char: "π",
    className: "top-[25%] left-[12%] text-nivela-orange-light text-8xl italic",
  },
  {
    char: "∆",
    className: "bottom-[28%] left-[8%] text-nivela-orange-light text-8xl",
  },
  {
    char: "∫",
    className:
      "bottom-[45%] left-[5%] text-nivela-orange-light text-8xl -rotate-12",
  },
  {
    char: "∃",
    className:
      "bottom-[8%] left-[22%] text-nivela-orange-light text-7xl rotate-12",
  },

  // Quadrante Inferior Direito
  {
    char: "∑",
    className:
      "bottom-[10%] right-[5%] text-nivela-orange-light text-9xl -rotate-12",
  },
  {
    char: "∫",
    className:
      "top-[75%] left-[75%] text-nivela-orange-light text-8xl -rotate-45",
  },
  {
    char: "μ",
    className:
      "bottom-[25%] right-[28%] text-nivela-orange-light text-7xl italic -rotate-12",
  },
  {
    char: "β",
    className:
      "bottom-[5%] right-[45%] text-nivela-orange-light text-8xl italic rotate-12",
  },
  {
    char: "∭",
    className:
      "bottom-[35%] right-[12%] text-nivela-orange-light text-8xl rotate-12",
  },
];

// Ícones
const mail_icon = () => (
  <div className="flex items-center justify-center w-12 h-12 bg-nivela-orange-vibrant/20 rounded-full">
    <Mail size={30} className="text-nivela-orange-dark" strokeWidth={1} />
  </div>
);

const cap_icon = () => (
  <div className="flex items-center justify-center w-12 h-12 bg-nivela-green-vibrant/20 rounded-full">
    <GraduationCap
      size={30}
      className="text-nivela-green-dark"
      strokeWidth={1}
    />
  </div>
);

const cam_icon = () => (
  <div className="flex items-center justify-center w-12 h-12 bg-nivela-green-vibrant/20 rounded-full">
    <Camera size={30} className="text-nivela-green-dark" strokeWidth={1} />
  </div>
);

function Contato() {
  return (
    <main className="min-h-screen bg-nivela-orange-pale/50 relative overflow-hidden py-12 px-6 flex items-center justify-center">
      {/*icone de fundo */}
      {BACKGROUND_SYMBOLS.map((symbol, index) => (
        <div
          key={index}
          className={`absolute font-forum select-none pointer-events-none ${symbol.className}`}
          style={{ opacity: opc / 100 }}
        >
          {symbol.char}
        </div>
      ))}
      <section className="relative z-10 max-w-4xl w-full">
        {/* quadrado principal */}

        <div className="bg-white rounded-[3rem]  overflow-hidden border-b-10 border-r-10 border-nivela-orange-vibrant p-10 md:p-16">
          <div className="text-center">
            <h1 className="text-5xl text-nivela-orange-dark mb-4 !font-century font-bold">
              Contato
            </h1>
            <p className="font-century text-gray-600 mb-10 text-lg">
              Saiba onde nos encontrar!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {/* Card 1: Coordenação */}
              <a
                href="https://www.linkedin.com/in/mauronigro/"
                className="bg-nivela-green-pale/30 p-6 rounded-[2rem] border-2 border-nivela-green-light/20 flex flex-col items-center justify-center hover:bg-nivela-green-pale hover:scale-[1.02] transition-[transform,background-color] group"
              >
                <span className="text-3xl mb-3 group-hover:scale-110 transition-transform">
                  {cap_icon()}
                </span>
                <h3 className="text-xl text-nivela-green-dark mb-2 !font-century font-bold">
                  Coordenação
                </h3>
                <p className="font-century text-sm text-nivela-green-dark/80 font-bold">
                  Prof. {professorCoord}
                </p>
              </a>

              {/* Card 2: E-mail*/}
              <a
                href={`mailto:${email}`}
                className="bg-nivela-orange-pale/40 p-6 rounded-[2rem] border-2 border-nivela-orange-light/20 flex flex-col items-center justify-center hover:bg-nivela-orange-pale hover:scale-[1.02] transition-[transform,background-color] group"
              >
                {
                  <span className="text-3xl mb-3 group-hover:scale-110 transition-transform">
                    {mail_icon()}
                  </span>
                }
                <h3 className="text-xl text-nivela-orange-dark mb-2 !font-century font-bold">
                  E-mail
                </h3>
                <p className="font-century text-sm text-nivela-orange-dark font-bold break-all">
                  {email}
                </p>
              </a>

              {/* Card 3: Instagram*/}
              <a
                href="https://instagram.com/nivelauerj"
                className="bg-nivela-green-pale/30 p-6 rounded-[2rem] border-2 border-nivela-green-light/20 flex flex-col items-center justify-center hover:bg-nivela-green-pale hover:scale-[1.02] transition-[transform,background-color] group"
              >
                {
                  <span className="text-3xl mb-3 group-hover:scale-110 transition-transform">
                    {cam_icon()}
                  </span>
                }
                <h3 className="text-xl text-nivela-green-dark mb-2 !font-century font-bold">
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

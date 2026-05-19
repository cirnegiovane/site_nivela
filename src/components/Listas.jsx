import { Download } from "lucide-react";

const dadosListas = [
  {
    id: 1,
    titulo: "Expressões Numéricas",
    arquivo: "NIVELAUERJ___Cálculo_Zero__Lista_1__Expressões_numéricas_.pdf",
  },
  {
    id: 2,
    titulo: "Produtos Notáveis e Fatoração",
    arquivo:
      "NIVELAUERJ___Cálculo_Zero__Lista_2__Produtos_Notáveis_e_Fatoração_.pdf",
  },
  {
    id: 3,
    titulo: "Polinômios",
    arquivo: "NIVELAUERJ___Cálculo_Zero__Lista_3__Polinômios_.pdf",
  },
  {
    id: 4,
    titulo: "Função Polinomial do 1º Grau",
    arquivo:
      "NIVELAUERJ___Cálculo_Zero__Lista_4__Função_Polinomial_do_Primeiro_Grau_.pdf",
  },
  {
    id: 5,
    titulo: "Função Polinomial do 2º Grau",
    arquivo:
      "NIVELAUERJ___Cálculo_Zero__Lista_5__Função_Polinomial_do_Segundo_Grau_.pdf",
  },
  {
    id: 6,
    titulo: "Função Modular",
    arquivo: "NIVELAUERJ___Cálculo_Zero__Lista_6__Função_Modular_.pdf",
  },
  {
    id: 7,
    titulo: "Função Exponencial",
    arquivo: "NIVELAUERJ___Cálculo_Zero__Lista_7__Função_Exponencial_.pdf",
  },
  {
    id: 8,
    titulo: "Função Logarítmica",
    arquivo: "NIVELAUERJ___Cálculo_Zero__Lista_8__Função_Logarítmica_-1.pdf",
  },
  {
    id: 9,
    titulo: "Funções Trigonométricas",
    arquivo: "NIVELAUERJ___Cálculo_Zero__Lista_9__Funções_Trigonométricas_.pdf",
  },
];

function Listas() {
  const download_icon = () => {
    return <Download size={30} color="grey" strokeWidth={1} />;
  };
  return (
    <div className="max-w-7xl mx-auto py-12 px-6">
      <h2 className="font-forum text-4xl md:text-5xl text-nivela-green-dark text-center mb-12">
        Cálculo Zero: Listas de Exercícios
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {dadosListas.map((lista, index) => (
          <a
            key={lista.id}
            href={`/listas/${lista.arquivo}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group block transition-transform hover:-translate-y-2"
          >
            <div
              className={`
              h-full p-8 rounded-[2rem] border-b-8 shadow-sm flex flex-col items-center justify-center text-center transition-colors
              ${
                index % 2 === 0
                  ? "bg-nivela-green-pale border-nivela-green-base group-hover:bg-nivela-green-light/30"
                  : "bg-nivela-orange-pale border-nivela-orange-vibrant group-hover:bg-nivela-orange-light/30"
              }
            `}
            >
              <span className="font-forum text-xl text-gray-500 mb-2">
                Lista {lista.id}
              </span>
              <strong className="font-century text-xl text-nivela-green-dark leading-tight group-hover:text-nivela-orange-dark transition-colors">
                {lista.titulo}
              </strong>

              <div className="mt-6 bg-white/50 px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                <span className="text-lg">{download_icon()}</span> Baixar PDF
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Listas;

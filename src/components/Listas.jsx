function Listas() {
  return (
    <>
      <div className="bg-green-600 min-h-screen py-10 px-10 flex flex-col gap-6">
        <h1 className="text-3xl font-bold mb-4 text-center text-white">
          Listas de Exercícios
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/*primeira linha*/}
          <div className="bg-white px-5 py-5 rounded-lg">
            <a
              href="/listas/NIVELAUERJ___Cálculo_Zero__Lista_1__Expressões_numéricas_.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-blue-500"
            >
              Lista 1 - Expressões Numéricas
            </a>
          </div>
          <div className="bg-white px-5 py-5 rounded-lg">
            <a
              href="/listas/NIVELAUERJ___Cálculo_Zero__Lista_2__Produtos_Notáveis_e_Fatoração_.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-blue-500"
            >
              Lista 2 - Produtos Notáveis e Fatoração
            </a>
          </div>
          <div className="bg-white px-5 py-5 rounded-lg">
            <a
              href="/listas/NIVELAUERJ___Cálculo_Zero__Lista_3__Polinômios_.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-blue-500"
            >
              Lista 3 - Polinômios
            </a>
          </div>

          {/*segunda linha*/}
          <div className="bg-white px-5 py-5 rounded-lg">
            <a
              href="/listas/NIVELAUERJ___Cálculo_Zero__Lista_4__Função_Polinomial_do_Primeiro_Grau_.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-blue-500"
            >
              Lista 4 - Função Polinomial do Primeiro Grau
            </a>
          </div>
          <div className="bg-white px-5 py-5 rounded-lg">
            <a
              href="/listas/NIVELAUERJ___Cálculo_Zero__Lista_5__Função_Polinomial_do_Segundo_Grau_.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-blue-500"
            >
              Lista 5 - Função Polinomial do Segundo Grau
            </a>
          </div>
          <div className="bg-white px-5 py-5 rounded-lg">
            <a
              href="/listas/NIVELAUERJ___Cálculo_Zero__Lista_6__Função_Modular_.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-blue-500"
            >
              Lista 6 - Função Modular
            </a>
          </div>

          {/*terceira linha*/}

          <div className="bg-white px-5 py-5 rounded-lg">
            <a
              href="/listas/NIVELAUERJ___Cálculo_Zero__Lista_7__Função_Exponencial_.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-blue-500"
            >
              Lista 7 - Função Exponencial
            </a>
          </div>
          <div className="bg-white px-5 py-5 rounded-lg">
            <a
              href="/listas/NIVELAUERJ___Cálculo_Zero__Lista_8__Função_Logarítmica_-1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-blue-500"
            >
              Lista 8 - Função Logarítmica
            </a>
          </div>

          <div className="bg-white px-5 py-5 rounded-lg">
            <a
              href="/listas/NIVELAUERJ___Cálculo_Zero__Lista_9__Funções_Trigonométricas_.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-blue-500"
            >
              Lista 9 - Funções Trigonométricas
            </a>
          </div>
        </div>
        {/**/}
      </div>
    </>
  );
}
export default Listas;

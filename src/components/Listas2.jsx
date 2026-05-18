function Listas() {
  return (
    <>
      <div className="bg-green-600 min-h-screen py-10 px-10 flex flex-col gap-6 text-center">
        <h1 className="text-3xl font-bold mt-[35px] text-center text-white">
          Listas de Exercícios
        </h1>
        <div className="grid grid-cols-1 mt-[35px] md:grid-cols-3 gap-4">
          {/*primeira linha*/}
          <a
            href="/listas/NIVELAUERJ___Cálculo_Zero__Lista_1__Expressões_numéricas_.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-green-600"
          >
            <div className="bg-white px-5 py-5 rounded-lg">
              <strong>Lista 1</strong> - Expressões Numéricas
            </div>
          </a>
          <a
            href="/listas/NIVELAUERJ___Cálculo_Zero__Lista_2__Produtos_Notáveis_e_Fatoração_.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-green-600"
          >
            <div className="bg-white px-5 py-5 rounded-lg">
              <strong>Lista 2</strong> - Produtos Notáveis e Fatoração
            </div>
          </a>
          <a
            href="/listas/NIVELAUERJ___Cálculo_Zero__Lista_3__Polinômios_.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-green-600"
          >
            <div className="bg-white px-5 py-5 rounded-lg">
              <strong>Lista 3</strong> - Polinômios
            </div>
          </a>

          {/*segunda linha*/}
          <a
            href="/listas/NIVELAUERJ___Cálculo_Zero__Lista_4__Função_Polinomial_do_Primeiro_Grau_.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-green-600"
          >
            <div className="bg-white px-5 py-5 rounded-lg">
              <strong>Lista 4</strong> - Função Polinomial do Primeiro Grau
            </div>
          </a>
          <a
            href="/listas/NIVELAUERJ___Cálculo_Zero__Lista_5__Função_Polinomial_do_Segundo_Grau_.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-green-600"
          >
            <div className="bg-white px-5 py-5 rounded-lg">
              <strong>Lista 5</strong> - Função Polinomial do Segundo Grau
            </div>
          </a>
          <a
            href="/listas/NIVELAUERJ___Cálculo_Zero__Lista_6__Função_Modular_.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-green-600"
          >
            <div className="bg-white px-5 py-5 rounded-lg">
              <strong>Lista 6</strong> - Função Modular
            </div>
          </a>

          {/*terceira linha*/}

          <a
            href="/listas/NIVELAUERJ___Cálculo_Zero__Lista_7__Função_Exponencial_.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-green-600"
          >
            <div className="bg-white px-5 py-5 rounded-lg">
              <strong>Lista 7</strong> - Função Exponencial
            </div>
          </a>
          <a
            href="/listas/NIVELAUERJ___Cálculo_Zero__Lista_8__Função_Logarítmica_-1.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-green-600"
          >
            <div className="bg-white px-5 py-5 rounded-lg">
              <strong>Lista 8</strong> - Função Logarítmica
            </div>
          </a>

          <a
            href="/listas/NIVELAUERJ___Cálculo_Zero__Lista_9__Funções_Trigonométricas_.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-green-600"
          >
            <div className="bg-white px-5 py-5 rounded-lg">
              <strong>Lista 9</strong> - Funções Trigonométricas
            </div>
          </a>
        </div>
        {/**/}
      </div>
    </>
  );
}
export default Listas;

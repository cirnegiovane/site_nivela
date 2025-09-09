function Sobre() {
  return (
    <>
      <div className="bg-green-600 min-h-screen py-10 px-10">
        <div className="bg-white px-5 py-5 rounded-lg flex">
          {/* lado esquerdo */}
          <div className="w-1/2 pr-5">
            <p className="text-black text-3xl text-center font-bold">
              Sobre o projeto:
            </p>
            <p className="text-black text-justify mt-5 text-base leading-relaxed">
              O Nivela UERJ é um projeto de extensão da Universidade do Estado
              do Rio de Janeiro (UERJ) que visa auxiliar estudantes calouros e
              veteranos na disciplina de Cálculo I. O objetivo principal do
              projeto é proporcionar um ambiente de aprendizado colaborativo,
              onde os alunos possam fortalecer seus conhecimentos matemáticos e
              desenvolver habilidades essenciais para o sucesso acadêmico.
            </p>
          </div>

          {/* lado direito */}
          <div className="w-1/2 pl-5 flex flex-col items-center">
            <img
              src="/images/img_geral.jpg"
              alt="foto da inauguração"
              className="rounded-lg max-w-full h-auto shadow-md"
            />
            <p className="text-[13px] text-center mt-2">
              (Aula inaugural do Cálculo 0 - 2025.1)
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sobre;

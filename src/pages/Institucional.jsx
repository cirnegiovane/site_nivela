function Institucional() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-5 font-century text-nivela-green-dark">
      <h1 className="text-5xl text-nivela-orange-dark mb-10 text-center font-forum">
        Sobre o Nivela UERJ
      </h1>

      <div className="bg-nivela-green-pale/30 p-8 rounded-[2rem] mb-12 border-l-8 border-nivela-green-vibrant">
        <p className="text-xl leading-relaxed">
          O <strong>Nivela UERJ</strong> nasce com o objetivo de tornar o
          aprendizado de Cálculo mais acessível. Acreditamos que a matemática
          não precisa ser um obstáculo, mas sim uma ferramenta de transformação
          na vida acadêmica.
        </p>
      </div>

      <div className="space-y-8 text-lg">
        <p>
          Nossa identidade visual reflete o universo das exatas de forma leve.
          Combinamos a lógica e o raciocínio com uma abordagem dinâmica e
          acolhedora, fugindo do tradicional aspecto rígido das disciplinas de
          exatas.
        </p>

        <div className="grid md:grid-cols-2 gap-8 py-8">
          <div className="bg-white border-2 border-nivela-orange-pale p-6 rounded-2xl shadow-sm">
            <h4 className="font-forum text-2xl text-nivela-orange-dark mb-3">
              Dinâmico
            </h4>
            <p>Conteúdos fluidos que acompanham o ritmo dos estudantes hoje.</p>
          </div>
          <div className="bg-white border-2 border-nivela-green-pale p-6 rounded-2xl shadow-sm">
            <h4 className="font-forum text-2xl text-nivela-green-base mb-3">
              Acolhedor
            </h4>
            <p>
              Um espaço de apoio para calouros e veteranos vencerem o Cálculo I.
            </p>
          </div>
        </div>

        <p className="text-center font-forum text-2xl mt-12 bg-nivela-orange-pale py-4 rounded-full">
          Desenvolvido por Giovane Cirne | Coordenação: Mauro Nigro
        </p>
      </div>
    </div>
  );
}

export default Institucional;

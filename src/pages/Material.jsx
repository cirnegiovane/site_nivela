import Listas from "../components/Listas.jsx";

function Material() {
  return (
    <main className="min-h-screen bg-white relative overflow-hidden">
      <div className="absolute top-20 -left-20 w-80 h-80 bg-nivela-green-pale/40 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 -right-20 w-96 h-96 bg-nivela-orange-pale/40 rounded-full blur-3xl -z-10" />

      <section className="relative z-10 py-10">
        <div className="max-w-4xl mx-auto text-center px-6 mb-10">
  <blockquote className="font-century text-nivela-green-dark/70 text-lg md:text-xl italic mb-3">
    “Dividir cada uma das dificuldades em tantas partes quantas forem possíveis e necessárias para melhor resolvê-las.”
  </blockquote>
  <cite className="block font-century text-nivela-green-dark/50 text-sm md:text-base not-italic">
    — René Descartes
  </cite>
</div>

        <Listas />
      </section>
    </main>
  );
}

export default Material;

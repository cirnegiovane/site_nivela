import { Settings } from "lucide-react";
import { Link } from "react-router-dom";


function EmConstrucao({ titulo }) {
  const settings_icon = () => {
    return <Settings size={50} color="grey" strokeWidth={1} />;
  };
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6 py-20 relative overflow-hidden">
      
      <div className="absolute top-10 left-10 text-nivela-green-light/20 text-9xl font-forum select-none rotate-12">∫</div>
      <div className="absolute bottom-10 right-10 text-nivela-orange-light/20 text-9xl font-forum select-none -rotate-12">∑</div>
      <div className="absolute top-1/2 left-1/4 text-nivela-orange-light/10 text-8xl font-forum select-none italic">π</div>

      <div className="max-w-2xl w-full text-center relative z-10">
        
        <div className="relative inline-block mb-8">
          <div className="w-32 h-32 bg-nivela-green-pale rounded-[2rem] flex items-center justify-center text-6xl shadow-inner animate-bounce">
            {settings_icon()}
          </div>
          <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-nivela-orange-vibrant rounded-full flex items-center justify-center text-white text-xl shadow-lg border-4 border-white">
            +
          </div>
        </div>

        <h1 className="font-forum text-4xl md:text-5xl text-nivela-green-dark mb-4">
          {titulo}
        </h1>
        
        <p className="font-century text-xl text-gray-500 mb-10 leading-relaxed">
          Estamos em processo de <span className="text-nivela-orange-dark font-bold">construção</span> desta página.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/" 
            className="bg-nivela-green-base text-white px-8 py-3 rounded-full font-bold hover:scale-105 transition-all shadow-md"
          >
            Voltar ao Início
          </Link>
          
        </div>

        <div className="mt-12 flex justify-center gap-2">
            {[1,2,3].map(i => (
                <div key={i} className={`w-3 h-3 rounded-full bg-nivela-green-light opacity-${i*20} animate-pulse`} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default EmConstrucao;
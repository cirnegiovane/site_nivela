import { Link } from "react-router-dom";

function Navbar_antigo() {
  return (
    <>
      <nav className="bg-white shadow-md min-w-auto">
        <ul className="flex justify-evenly text-lg items-center py-3 px-auto">
          <li className="">
            <Link to="/" className="text-black hover:text-blue-600">
              <img
                src="/images/logo_completa_s_fundo.png"
                alt="Logo Nivela UERJ"
                className="my-auto mx-auto max-h-20 max-w-40 object-contain" // ajusta a altura da logo
              />
            </Link>
          </li>
          <li className="text-black text-1xl  font-">
            <Link
              to="/institucional"
              className="text-black hover:text-blue-600"
            >
              Institucional
            </Link>
          </li>
          <li className="text-black text-1xl ">
            <Link to="/atividades" className="text-black hover:text-blue-600">
              Atividades
            </Link>
          </li>
          <li className="text-black text-1xl ">
            <Link to="/material" className="text-black hover:text-blue-600">
              Material didático
            </Link>
          </li>
          <li className="text-black text-1xl ">
            <Link to="/contato" className="text-black hover:text-blue-600">
              Contato
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default Navbar_antigo;

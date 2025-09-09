import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const links = [
  { to: "/institucional", label: "Institucional" },
  { to: "/atividades", label: "Atividades" },
  { to: "/material", label: "Material didático" },
  { to: "/banco", label: "Banco de Questões" },
  { to: "/videoaulas", label: "Videoaulas" },
  { to: "/contato", label: "Contato" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const baseLink =
    "block px-3 py-2 text-gray-800 hover:text-blue-600 transition-colors";
  const activeLink = "text-blue-600 font-semibold";

  return (
    <>
      <nav className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
        <div className="mx-auto max-w-7xl h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/images/logo_completa_s_fundo.png"
              alt="Nivela UERJ"
              className="h-10 w-auto object-contain"
            />
          </Link>

          <ul className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  className={({ isActive }) =>
                    isActive ? `${baseLink} ${activeLink}` : baseLink
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <button
            type="button"
            aria-label="Abrir menu"
            aria-controls="mobile-menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden flex flex-col items-center justify-center rounded-md p-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <span className="block h-0.5 w-6 bg-gray-900" />
            <span className="block h-0.5 w-6 bg-gray-900 mt-1" />
          </button>
        </div>

        <div
          id="mobile-menu"
          className={`md:hidden border-t border-gray-200 bg-white/95 backdrop-blur transition-[max-height] duration-300 overflow-hidden ${
            open ? "max-h-96" : "max-h-0"
          }`}
        >
          <ul className="px-4 py-3 space-y-1">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  className={({ isActive }) =>
                    isActive
                      ? `${baseLink} ${activeLink} rounded-md`
                      : `${baseLink} rounded-md`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-black/20 md:hidden"
        />
      )}
    </>
  );
}

export default Navbar;

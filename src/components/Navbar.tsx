import { useEffect, useState } from "react";
import { FaBars, FaTimes, FaWhatsapp } from "react-icons/fa";
import logo from "../assets/logo-navbar.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Inicio", href: "#home" },
    { name: "Servicios", href: "#services" },
    { name: "Sobre mí", href: "#sobre-mi" },
    { name: "Portafolio", href: "#portfolio" },
    { name: "Proceso", href: "#process" },
    { name: "Contacto", href: "#contact" },
  ];

  // Evita que el fondo se mueva cuando el menú está abierto
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-[100] bg-white backdrop-blur-xl border-b border-[#C89B3C]/20">
        <nav className="max-w-7xl mx-auto px-5 sm:px-6 py-3 flex items-center justify-between">
          
          {/* LOGO */}
          <a href="#home" className="flex items-center">
            <img
              src={logo}
              alt="NatiTech Solutions"
              className="w-36 sm:w-40 md:w-44 h-14 md:h-16 object-contain"
            />
          </a>

          {/* MENÚ DESKTOP */}
          <ul className="hidden lg:flex items-center gap-10 font-medium text-sm md:text-base">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="hover:text-[#C89B3C] transition"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* BOTÓN SOLO DESKTOP */}
          <a
            href="https://wa.me/56989305299"
            target="_blank"
            rel="noreferrer"
            className="hidden lg:flex bg-[#C89B3C] text-white px-6 md:px-7 py-4 rounded-xl font-bold shadow-xl hover:bg-[#a77f2d] transition items-center justify-center gap-2"
          >
            <FaWhatsapp size={20} />
            Solicitar Cotización
          </a>

          {/* BOTÓN MENÚ MOBILE */}
          <button
            type="button"
            aria-label="Abrir menú"
            className="lg:hidden w-11 h-11 rounded-full border border-[#C89B3C]/20 flex items-center justify-center text-xl text-black hover:bg-[#FAF7EF] transition"
            onClick={() => setOpen(true)}
          >
            <FaBars />
          </button>
        </nav>
      </header>

      {/* FONDO OSCURO MOBILE */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="lg:hidden fixed inset-0 z-[90] bg-black/45 backdrop-blur-[2px]"
        />
      )}

      {/* MENÚ LATERAL MOBILE */}
      <aside
        className={`lg:hidden fixed top-0 right-0 z-[110] h-screen w-[82%] max-w-[330px] bg-white shadow-[-20px_0_60px_rgba(0,0,0,0.22)] transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Contenedor interno para separar botón abajo */}
        <div className="h-full flex flex-col">
          
          {/* Header del menú */}
          <div className="px-6 py-5 border-b border-[#C89B3C]/15 flex items-center justify-between">
            <img
              src={logo}
              alt="NatiTech Solutions"
              className="w-36 h-12 object-contain"
            />

            <button
              type="button"
              aria-label="Cerrar menú"
              onClick={() => setOpen(false)}
              className="w-10 h-10 rounded-full flex items-center justify-center text-black hover:bg-[#FAF7EF] transition"
            >
              <FaTimes size={20} />
            </button>
          </div>

          {/* Enlaces alineados a la izquierda */}
          <nav className="flex-1 px-6 py-7">
            <ul className="flex flex-col gap-3 text-left">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    onClick={() => setOpen(false)}
                    href={item.href}
                    className="group flex items-center justify-between rounded-2xl px-4 py-4 text-[15px] font-bold text-black border border-transparent hover:border-[#C89B3C]/20 hover:bg-[#FAF7EF] hover:text-[#C89B3C] transition-all duration-300"
                  >
                    <span>{item.name}</span>

                    <span className="w-2 h-2 rounded-full bg-[#C89B3C] opacity-0 group-hover:opacity-100 transition" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Botón separado abajo */}
          <div className="px-6 pb-7 pt-4 border-t border-[#C89B3C]/15">
            <a
              href="https://wa.me/56989305299"
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 w-full bg-[#C89B3C] text-white px-5 py-4 rounded-2xl font-bold shadow-[0_15px_35px_rgba(200,155,60,0.30)] hover:bg-black transition-all duration-300"
            >
              <FaWhatsapp size={18} />
              Solicitar Cotización
            </a>

          </div>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
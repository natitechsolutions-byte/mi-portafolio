import { useState } from "react";
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

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white backdrop-blur-xl border-b border-[#C89B3C]/20">
      <nav className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        
        {/* LOGO */}
        <a href="#home" className="flex items-center gap-3">
          <img
            src={logo}
            alt="NatiTech Solutions"
            className="w-40 md:w-44 h-16 object-contain"
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
          className="lg:hidden text-2xl text-black"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* MENÚ MOBILE */}
      {open && (
        <div className="lg:hidden bg-white border-t border-[#C89B3C]/20 px-6 py-5 shadow-[0_15px_40px_rgba(0,0,0,0.08)]">
          <ul className="flex flex-col gap-5 text-center font-semibold">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  onClick={() => setOpen(false)}
                  href={item.href}
                  className="block py-2 hover:text-[#C89B3C] transition"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
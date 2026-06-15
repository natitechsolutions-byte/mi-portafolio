import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo-navbar.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Inicio", href: "#home" },
    { name: "Servicios", href: "#services" },
    { name: "Portafolio", href: "#portfolio" },
    { name: "Proceso", href: "#process" },
    { name: "Contacto", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white backdrop-blur-xl border-b border-[#C89B3C]/20">
      <nav className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <img src={logo} alt="NatiTech Solutions" className="w-50 h-16 object-contain" />
        </a>

        <ul className="hidden lg:flex items-center gap-10 font-medium text-sm md:text-base">
          {navItems.map((item) => (
            <li key={item.name}>
              <a href={item.href} className="hover:text-[#C89B3C] transition">
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden lg:inline-flex bg-[#C89B3C] text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-[#a77f2d] transition"
        >
          Solicitar Cotización
        </a>

        <button className="lg:hidden text-2xl" onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-white border-t border-[#C89B3C]/20 px-6 py-5">
          <ul className="flex flex-col gap-5 text-center font-semibold">
            {navItems.map((item) => (
              <li key={item.name}>
                <a onClick={() => setOpen(false)} href={item.href}>
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
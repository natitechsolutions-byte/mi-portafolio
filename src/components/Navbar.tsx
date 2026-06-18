import { useEffect, useState } from "react";
import { FaBars, FaTimes, FaWhatsapp } from "react-icons/fa";
import logo from "../assets/logo-navbar.png";

const navItems = [
  { name: "Inicio", href: "#home" },
  { name: "Servicios", href: "#services" },
  { name: "Sobre mí", href: "#sobre-mi" },
  { name: "Proceso", href: "#process" },
  { name: "Portafolio", href: "#portfolio" },
  { name: "Contacto", href: "#footer" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("#home");

 const handleNavClick = (href: string) => {
  setActiveItem(href);
  setOpen(false);
};

  // Evita que el fondo se mueva cuando el menú está abierto
useEffect(() => {
  const updateActiveSection = (sectionId: string) => {
    setActiveItem(sectionId);

    // Actualiza la URL sin provocar otro scroll
    if (window.location.hash !== sectionId) {
      window.history.replaceState(
        null,
        "",
        `${window.location.pathname}${window.location.search}${sectionId}`
      );
    }
  };

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const maxScroll = documentHeight - windowHeight;

    // Cuando llegue casi al final, marcar Footer / Contacto
    if (scrollY >= maxScroll - 80) {
      updateActiveSection("#footer");
      return;
    }

    const checkPoint = scrollY + windowHeight * 0.55;

    let currentSection = "#home";

    navItems.forEach((item) => {
      const section = document.querySelector<HTMLElement>(item.href);

      if (!section) return;

      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (checkPoint >= sectionTop && checkPoint < sectionBottom) {
        currentSection = item.href;
      }
    });

    updateActiveSection(currentSection);
  };

  handleScroll();

  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
    window.removeEventListener("resize", handleScroll);
  };
}, []);

  // Detecta automáticamente la sección visible al hacer scroll
useEffect(() => {
  const sections: Element[] = [];

  navItems.forEach((item) => {
    const section = document.querySelector(item.href);

    if (section) {
      sections.push(section);
    }
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveItem(`#${entry.target.id}`);
        }
      });
    },
    {
      threshold: 0.25,
      rootMargin: "-35% 0px -50% 0px",
    }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });

  return () => {
    observer.disconnect();
  };
}, []);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-[100] bg-white backdrop-blur-xl border-b border-[#C89B3C]/20">
        <nav className="max-w-7xl mx-auto px-5 sm:px-6 py-3 flex items-center justify-between">
          
          {/* LOGO */}
          <a
            href="#home"
            onClick={() => handleNavClick("#home")}
            className="flex items-center"
          >
            <img
              src={logo}
              alt="NatiTech Solutions"
              className="w-36 sm:w-40 md:w-44 h-14 md:h-16 object-contain"
            />
          </a>

          {/* MENÚ DESKTOP */}
          <ul className="hidden lg:flex items-center gap-10 font-medium text-sm md:text-base">
            {navItems.map((item) => {
              const isActive = activeItem === item.href;

              return (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className={`transition ${
                      isActive
                        ? "text-[#C89B3C] font-bold"
                        : "text-black hover:text-[#C89B3C]"
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              );
            })}
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
            className="lg:hidden w-11 h-11 rounded-full border border-[#C89B3C]/20 flex items-center justify-center text-xl text-black hover:bg-[#FAF7EF] active:scale-95 transition"
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
              className="w-10 h-10 rounded-full flex items-center justify-center text-black hover:bg-[#FAF7EF] active:scale-95 transition"
            >
              <FaTimes size={20} />
            </button>
          </div>

          {/* Enlaces mobile */}
          <nav className="flex-1 px-6 py-7">
            <ul className="flex flex-col gap-3 text-left">
              {navItems.map((item) => {
                const isActive = activeItem === item.href;

                return (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      onClick={() => handleNavClick(item.href)}
                      className={`group flex items-center justify-between rounded-2xl px-4 py-4 text-[15px] font-bold border transition-all duration-300 active:scale-[0.98] ${
                        isActive
                          ? "bg-[#FAF7EF] text-[#C89B3C] border-[#C89B3C]/30 shadow-[0_12px_30px_rgba(200,155,60,0.18)]"
                          : "text-black border-transparent hover:border-[#C89B3C]/20 hover:bg-[#FAF7EF] hover:text-[#C89B3C]"
                      }`}
                    >
                      <span>{item.name}</span>

                      <span
                        className={`w-2 h-2 rounded-full bg-[#C89B3C] transition ${
                          isActive
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100"
                        }`}
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Botón separado abajo */}
          <div className="px-6 pb-7 pt-4 border-t border-[#C89B3C]/15">
            <a
              href="https://wa.me/56989305299"
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 w-full bg-[#C89B3C] text-white px-5 py-4 rounded-2xl font-bold shadow-[0_15px_35px_rgba(200,155,60,0.30)] hover:bg-black active:scale-[0.98] transition-all duration-300"
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
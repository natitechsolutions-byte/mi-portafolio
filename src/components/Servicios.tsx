import { useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaLaptopCode,
  FaPaintBrush,
  FaCog,
} from "react-icons/fa";

const services = [
  {
    icon: FaLaptopCode,
    title: "Página web profesional",
    description:
      "Sitios modernos para mostrar tu empresa, servicios, ubicación y contacto.",
  },
  {
    icon: FaPaintBrush,
    title: "Rediseño web",
    description:
      "Modernizamos páginas antiguas para que se vean actuales, rápidas y profesionales.",
  },
  {
    icon: FaCog,
    title: "Mantención web",
    description:
      "Cambios, actualizaciones y soporte para mantener tu sitio funcionando correctamente.",
  },
];

const Services = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  const CurrentIcon = services[current].icon;

  return (
    <section id="services" className="py-14 md:py-16 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 text-center">
        <p className="text-[#C89B3C] font-bold tracking-[0.25em] text-xs md:text-sm">
          SERVICIOS
        </p>

        <h2 className="font-Montserrat font-bold text-3xl md:text-5xl mt-4 leading-tight max-w-5xl mx-auto">
          Soluciones web para que tu negocio destaque en internet
        </h2>

        {/* MOBILE: CARRUSEL */}
        <div className="md:hidden mt-10 relative max-w-[360px] mx-auto">
          <button
            onClick={prevSlide}
            className="absolute left-[-10px] top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-[#071B3A]"
          >
            <FaChevronLeft size={14} />
          </button>

          <div className="bg-white rounded-3xl p-7 shadow-xl border border-[#C89B3C]/10 min-h-[300px]">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#C89B3C]/10 flex items-center justify-center">
              <CurrentIcon size={28} className="text-[#C89B3C]" />
            </div>

            <h3 className="text-xl font-bold text-[#1A1A1A] mt-5">
              {services[current].title}
            </h3>

            <div className="w-10 h-[2px] bg-[#C89B3C] mt-3 mb-4 mx-auto"></div>

            <p className="text-gray-600 leading-relaxed">
              {services[current].description}
            </p>
          </div>

          <button
            onClick={nextSlide}
            className="absolute right-[-10px] top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-[#071B3A]"
          >
            <FaChevronRight size={14} />
          </button>

          <div className="flex justify-center gap-2 mt-6">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2 rounded-full transition-all ${
                  current === index ? "w-8 bg-[#C89B3C]" : "w-2 bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* DESKTOP: 3 TARJETAS CENTRADAS */}
        <div className="hidden md:grid grid-cols-3 gap-8 mt-14 max-w-5xl mx-auto">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="bg-white rounded-3xl p-7 shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-[#C89B3C]/10 hover:-translate-y-2 transition-all duration-300 text-left h-full"
              >
                <div className="w-16 h-16 rounded-full bg-[#C89B3C]/10 flex items-center justify-center">
                  <Icon size={28} className="text-[#C89B3C]" />
                </div>

                <h3 className="text-xl font-bold text-[#1A1A1A] mt-5">
                  {service.title}
                </h3>

                <div className="w-10 h-[2px] bg-[#C89B3C] mt-3 mb-4"></div>

                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
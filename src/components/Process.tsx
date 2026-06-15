import {
  FaComments,
  FaPenNib,
  FaCode,
  FaRocket,
  FaArrowRight,
} from "react-icons/fa";
const Process = () => {
  const steps = [
    {
      number: "01",
      icon: <FaComments />,
      title: "Conversamos",
      text: "Entiendo tu idea, negocio y lo que necesitas lograr.",
    },
    {
      number: "02",
      icon: <FaPenNib />,
      title: "Diseñamos",
      text: "Creamos una propuesta visual moderna y profesional.",
    },
    {
      number: "03",
      icon: <FaCode />,
      title: "Desarrollamos",
      text: "Convertimos el diseño en una página rápida y responsive.",
    },
    {
      number: "04",
      icon: <FaRocket />,
      title: "Entregamos",
      text: "Tu web queda lista para mostrarla a tus clientes.",
    },
  ];

  return (
    <section id="process" className="py-16 bg-[#111] text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-[#C89B3C] tracking-[0.18em] text-sm sm:text-sm">
          PROCESO DE TRABAJO
        </p>

        <h2 className="font-Montserrat
                font-bold text-3xl md:text-5xl mt-4">
          Simple, claro y eficiente
        </h2>

        <div className="grid md:grid-cols-4 gap-8 mt-14 hover:scale-[1.02]
hover:shadow-[0_25px_60px_rgba(0,0,0,0.12)]">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative"
            >
              {/* Número + icono */}
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="text-[#C89B3C] text-2xl font-bold">
                  {step.number}
                </span>

                <span className="text-[#C89B3C] text-2xl">
                  {step.icon}
                </span>
              </div>

              <h3 className="font-bold uppercase text-sm mb-3">
                {step.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {step.text}
              </p>

              {/* Flecha */}
              {index < steps.length - 1 && (
                <div
                  className="
                            hidden
                            md:flex
                            absolute
                            top-4
                            -right-7
                            text-[#C89B3C]
                            text-xl
          "
                >
                  <FaArrowRight />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
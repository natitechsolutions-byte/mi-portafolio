import {
  MessageCircle,
  PenTool,
  Code2,
  Rocket,
  ArrowRight,
} from "lucide-react";

const Process = () => {
  const steps = [
    {
      number: "01",
      icon: MessageCircle,
      title: "Conversamos",
      text: "Cuéntame sobre tu negocio, tus servicios y lo que quieres lograr con tu página web.",
    },
    {
      number: "02",
      icon: PenTool,
      title: "Creamos la propuesta",
      text: "Definimos la estructura y diseñamos una propuesta visual pensada para tu negocio.",
    },
    {
      number: "03",
      icon: Code2,
      title: "Desarrollamos tu sitio",
      text: "Transformamos el diseño en una página web rápida, moderna y adaptada a computadores y celulares.",
    },
    {
      number: "04",
      icon: Rocket,
      title: "Publicamos",
      text: "Revisamos los últimos detalles y dejamos tu página lista para que puedas compartirla con tus clientes.",
    },
  ];

  return (
    <section
      id="process"
      className="relative overflow-hidden py-16 md:py-20 bg-[#111111] text-white"
    >
      {/* Decoración suave */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#C89B3C]/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <p className="text-[#C89B3C] font-bold tracking-[0.25em] text-xs md:text-sm uppercase">
          Proceso de trabajo
        </p>

        <h2 className="font-Montserrat font-bold text-3xl md:text-5xl mt-4 leading-tight">
          Así creamos tu página web
        </h2>

        <div className="grid md:grid-cols-4 gap-6 lg:gap-8 mt-14">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div key={step.number} className="relative group">
                {/* CARD */}
                <div className="h-full rounded-3xl border border-white/10 bg-white/[0.04] px-6 py-8 shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-2 hover:border-[#C89B3C]/40 hover:bg-white/[0.07]">
                  
                  {/* Número */}
                  <div className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-[#C89B3C]/10 border border-[#C89B3C]/30 text-[#C89B3C] text-sm font-bold mb-5">
                    {step.number}
                  </div>

                  {/* Icono moderno */}
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-[#C89B3C] to-[#E8C878] flex items-center justify-center shadow-[0_12px_35px_rgba(200,155,60,0.28)] mb-6">
                    <Icon size={28} strokeWidth={2.2} className="text-white" />
                  </div>

                  <h3 className="font-bold uppercase text-sm tracking-wide mb-3">
                    {step.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.text}
                  </p>
                </div>

                {/* Flecha desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-5 lg:-right-6 -translate-y-1/2 z-20">
                    <div className="w-10 h-10 rounded-full bg-[#111111] border border-[#C89B3C]/30 flex items-center justify-center text-[#C89B3C] shadow-lg">
                      <ArrowRight size={18} strokeWidth={2.4} />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
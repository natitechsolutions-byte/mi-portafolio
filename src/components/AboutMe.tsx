
import fotoNatalia from "../assets/nati.png";

const AboutMe = () => {
  return (
    <section
      id="sobre-mi"
      className="relative overflow-hidden bg-white py-14 md:py-16"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-14 items-center">

          {/* FOTO */}
          <div className="relative max-w-sm mx-auto lg:mx-0">
            <div className="absolute -inset-4 bg-gradient-to-br from-[#C89B3C]/25 via-transparent to-black/10 rounded-[2rem] blur-2xl" />

            <div className="relative rounded-[2rem] overflow-hidden bg-[#0B0B0B] shadow-[0_25px_70px_rgba(0,0,0,0.18)]">
              <img
                src={fotoNatalia}
                alt="Natalia Varela - NatiTechSolutions"
                className="w-full h-[390px] md:h-[430px] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white text-2xl md:text-3xl font-extrabold mb-2">
                  Natalia Varela
                </h3>

                <p className="text-[#E8C878] text-sm font-semibold">
                  Ingeniera de Ejecución en Informática
                </p>
              </div>
            </div>
          </div>

          {/* TEXTO */}
          <div className="text-center lg:text-left">
            <p className="text-[#C89B3C] font-bold tracking-[0.35em] text-xs uppercase mb-4">
              Sobre mí
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-4xl font-extrabold text-black leading-tight mb-6 max-w-2xl mx-auto lg:mx-0">
              Detrás de cada proyecto hay una persona comprometida con hacerlo bien
            </h2>

            <div className="space-y-4 text-gray-600 text-sm sm:text-base md:text-[17px] leading-relaxed max-w-2xl mx-auto lg:mx-0">
              <p>
                Hola, Soy{" "}
                <strong className="text-black">Natalia Varela</strong>,
                Ingeniera de Ejecución en Informática y creadora de {" "}
                <strong className="text-black">NatiTech Solutions.</strong>.
              </p>

              <p>
                Mi objetivo es ayudarte a transformar tu idea o negocio en una presencia digital profesional, clara y fácil de usar.
              </p>

              <p>
                Trabajo cada proyecto de forma personalizada, buscando crear sitios web que no solo se vean bien, sino que también ayuden a generar confianza y facilitar el contacto con tus clientes.
              </p>

              <p>✓ Atención personalizada
                 ✓ Diseño adaptado a tu negocio
                 ✓ Comunicación durante todo el proceso</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
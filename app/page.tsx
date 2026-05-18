import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const comunas = Array.from({ length: 15 }, (_, i) => ({
  name: `Comuna ${i + 1}`,
  link: [
    "https://www.google.com/maps/d/edit?mid=1570S-Ng2ew5eQWcAIRGI_rc6HptgnTA&ll=-34.60625668278807%2C-58.35315224460291&z=14",
    "https://www.google.com/maps/d/edit?mid=1oird3UsNTUD20Vm_eiA-1QexpHc27mo&ll=-34.603326153768826%2C-58.38654131454851&z=14",
    "https://www.google.com/maps/d/edit?mid=1jUrKjIXGR0-NHDse7fPaN5O2sn3ApGE&ll=-34.612792382614174%2C-58.39675516647722&z=14",
    "https://www.google.com/maps/d/edit?mid=1gJMzK59VLBdOZqT-LiQi2srws3-FPYQ&ll=-34.64167661750612%2C-58.367767779836626&z=14",
    "https://www.google.com/maps/d/edit?mid=1b0Sdl6PDgbOaSY4UsXCEwEtmFRb9h0E&ll=-34.62321105079643%2C-58.40044588608171&z=14",
    "https://www.google.com/maps/d/edit?mid=1LL1eos2_4BMq0AqEMxuJ9uG5kOWFN0c&ll=-34.64812592698393%2C-58.47702875000002&z=13",
    "https://www.google.com/maps/d/edit?mid=1F-YI8LTWAvKBHLBvUSMclIAZzwoHM48&ll=-34.64812592698393%2C-58.47702875000002&z=13",
    "https://www.google.com/maps/d/edit?mid=1MsujKyg3RVRhrNww1BgaM3k4aSMIFmA&ll=-34.64812592698393%2C-58.47702875000002&z=13",
    "https://www.google.com/maps/d/edit?mid=1StUtSnlgjeDqVyczkaiSjgygl5jhkU0&ll=-34.648095132678684%2C-58.47702875000002&z=13",
    "https://www.google.com/maps/d/edit?mid=1lVNEsGIK8MbpwekXzv8YYn3OTMYjpq8&ll=-34.63056040044627%2C-58.50105399660798&z=15",
    "https://www.google.com/maps/d/edit?mid=1CY4CBArFpD3dDxjGOMllTIQQJe20rgY&ll=-34.571967922502196%2C-58.46047360000001&z=13",
    "https://www.google.com/maps/d/edit?mid=170kjw9FQyJQZ3j7yMtISdy-yp3o6zTA&ll=-34.571967922502196%2C-58.46047360000001&z=13",
    "https://www.google.com/maps/d/edit?mid=10c-p5_gfvoXZ6XiMNu2hxzQvd6nx8xo&ll=-34.571967922502196%2C-58.46047360000001&z=13",
    "https://www.google.com/maps/d/edit?mid=1j0UNef7JdgXIeXvhy6wtnBypk8_r2HM&ll=-34.571967922502196%2C-58.46047360000001&z=13",
    "https://www.google.com/maps/d/edit?mid=1SOe0lET_vKghQCBIHOWRfvoeVxSLS18&ll=-34.571967922502196%2C-58.46047360000001&z=13",
  ][i],
}));

export default function RelevamientoUsoLanding() {
  return (
    <main
      className={`${montserrat.className} min-h-screen overflow-x-hidden bg-[#07111F] text-white px-4 py-10 md:px-6 md:py-16`}
    >
      <div className="max-w-7xl mx-auto">
        {/* HERO */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="relative text-center leading-[0.9] tracking-[-0.06em] mb-6 text-balance">
            <span
              className="
              block
              text-[3.4rem]
              sm:text-7xl
              md:text-[10rem]
              font-black
              text-white
              drop-shadow-[0_0_30px_rgba(255,255,255,0.08)]
            "
            >
              Relevamiento
            </span>

            <span
              className="
              relative
              inline-block
              text-[3rem]
              sm:text-6xl
              md:text-[8rem]
              font-black
              bg-gradient-to-r
              from-[#8DE2D6]
              via-[#FFCB00]
              to-[#8DE2D6]
              bg-clip-text
              text-transparent
              drop-shadow-[0_0_25px_rgba(141,226,214,0.25)]
            "
            >
              de Uso
            </span>

            <div
              className="
              absolute
              inset-0
              -z-10
              blur-3xl
              opacity-20
              bg-gradient-to-r
              from-[#8DE2D6]
              via-[#FFCB00]
              to-[#153244]
            "
            />
          </h1>

          <p className="text-white/60 text-base md:text-xl max-w-xl mx-auto leading-relaxed text-balance px-2">
            Accedé rápidamente a formularios, mapas y documentación del
            operativo.
          </p>
        </div>

        {/* BOTONES SECUNDARIOS */}
        <div className="grid gap-4 mb-16 max-w-xl mx-auto">
          <a
            href="/Capacitacion.pdf"
            target="_blank"
            className="rounded-3xl bg-[#FFCB00] text-[#153244] px-6 py-4 text-lg md:text-2xl font-bold text-center hover:scale-[1.01] transition-all duration-300"
          >
            Ver Capacitación
          </a>

          <a
            href="https://docs.google.com/spreadsheets/d/1aFWOo8L7iMjjwT6ui5w08kXbsG3eNHnZDdNQqOMxXJw/edit?gid=1859004877#gid=1859004877"
            target="_blank"
            className="rounded-3xl border border-white/10 bg-[#122033] px-6 py-4 text-lg md:text-2xl font-bold text-center hover:border-[#8DE2D6]/40 transition-all duration-300"
          >
            Drive Espacios Verdes
          </a>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSc8khUx2iVitzAx2WNtZMRXL1-x38k3WxxOZGlC_jXLyp_Xeg/viewform"
            target="_blank"
            className="rounded-3xl border border-[#8DE2D6]/20 bg-[#8DE2D6]/10 text-[#8DE2D6] px-6 py-4 text-lg md:text-2xl font-bold text-center hover:bg-[#8DE2D6]/20 transition-all duration-300"
          >
            Form Asignación de Polígonos
          </a>
        </div>

        {/* SECCIÓN DEL BOTÓN PRINCIPAL AL FORMULARIO ÚNICO */}
        <section className="mb-24 max-w-3xl mx-auto text-center px-4">
          <div className="relative group inline-block w-full sm:w-auto">
            {/* EFECTO DE RESPLANDOR NEÓN TRASERO */}
            <div className="absolute -inset-1 rounded-[32px] bg-[#8DE2D6] opacity-40 blur-2xl group-hover:opacity-80 transition duration-1000 group-hover:duration-200" />

            <a
              href="https://form-relevamientouso-8uzs.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                relative
                inline-flex items-center justify-center gap-4
                rounded-[32px]
                border-2 border-[#8DE2D6]/70
                bg-[#122033]
                px-10 py-7
                text-2xl md:text-4xl
                font-black
                text-white
                
                /* DEGRADADO ANIMADO DE FONDO */
                bg-gradient-to-r from-[#122033] via-[#1a3a4f] to-[#122033]
                bg-[length:200%_auto]
                animate-pulse-gradient
                
                /* TRANSICIONES Y SOMBRAS */
                transition-all duration-300
                hover:scale-[1.03]
                hover:border-[#8DE2D6]
                
                shadow-[0_0_30px_rgba(141,226,214,0.3)]
                hover:shadow-[0_0_50px_rgba(141,226,214,0.6)]
                
                w-full sm:w-auto
              "
            >
              Presiona aquí para ir al formulario de Uso
              <span className="text-[#8DE2D6] group-hover:translate-x-3 transition-transform duration-300 text-3xl md:text-5xl">
                →
              </span>
            </a>
          </div>
        </section>

        {/* MAPAS */}
        <section>
          <h2 className="text-4xl md:text-5xl font-black mb-4">My Maps</h2>

          <p className="text-white/60 text-base md:text-xl mb-8 md:mb-10">
            Accedé a los mapas organizados por comuna.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {comunas.map((item) => (
              <a
                key={item.name}
                href={item.link}
                target="_blank"
                className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-gradient-to-b from-[#122033] to-[#0B1624] p-5 md:p-7 hover:border-[#8DE2D6]/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.45)]"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-[#8DE2D6]/10 via-transparent to-[#FFCB00]/10" />

                <div className="relative flex flex-col items-center text-center">
                  <div className="inline-flex items-center rounded-full border border-[#8DE2D6]/20 bg-[#8DE2D6]/10 px-4 py-1 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-[#8DE2D6] mb-5">
                    My Maps
                  </div>

                  <h3 className="text-2xl md:text-3xl font-black tracking-[-0.04em] text-white mb-5 group-hover:text-[#8DE2D6] transition-colors duration-300">
                    {item.name}
                  </h3>

                  <div className="flex items-center gap-2">
                    <div className="w-8 h-[4px] rounded-full bg-[#8DE2D6]" />
                    <div className="w-4 h-[4px] rounded-full bg-[#FFCB00]" />
                    <div className="w-2 h-[4px] rounded-full bg-white/40" />
                  </div>
                </div>

                <div className="absolute top-4 right-4 w-8 h-8 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/40 text-sm opacity-0 group-hover:opacity-100 transition duration-300">
                  ↗
                </div>

                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#8DE2D6] via-[#FFCB00] to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
              </a>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-20 md:mt-32 border-t border-white/10 pt-10 pb-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-black tracking-[-0.04em] mb-2">
                Relevamiento de Uso
              </h3>

              <p className="text-white/50 text-sm max-w-md leading-relaxed">
                Plataforma de acceso a formularios, mapas y documentación del
                operativo de espacios verdes.
              </p>
            </div>

            <div className="flex items-center gap-5">
              <div className="w-[1px] h-12 bg-white/10 hidden md:block" />

              <img
                src="/ba-logo.png"
                alt="BA Logo"
                className="h-12 md:h-16 w-auto object-contain opacity-90 hover:opacity-100 transition duration-300"
              />
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
            <p>Gobierno de la Ciudad de Buenos Aires</p>

            <p>© 2026 · Gerencia Operativa de Guardaparques</p>
          </div>
        </footer>
      </div>
    </main>
  );
}

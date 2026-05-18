"use client";

import { useState, useEffect } from "react";
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
  const [darkMode, setDarkMode] = useState(false);

  // Carga la preferencia guardada en el navegador al montar el componente
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
    }
  }, []);

  // Guarda la preferencia cada vez que el usuario la cambia
  const toggleDarkMode = () => {
    const nextMode = !darkMode;
    setDarkMode(nextMode);
    localStorage.setItem("theme", nextMode ? "dark" : "light");
  };

  return (
    <main
      className={`${montserrat.className} min-h-screen overflow-x-hidden transition-colors duration-500 px-4 py-10 md:px-6 md:py-16 ${
        darkMode ? "bg-[#07111F] text-white" : "bg-[#EDF2F7] text-[#153244]"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        
        {/* INTERRUPTOR DE MODO CLARO / OSCURO */}
        <div className="flex justify-end mb-6">
          <button
            onClick={toggleDarkMode}
            className={`flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
              darkMode
                ? "border-white/10 bg-white/5 text-white hover:bg-white/10"
                : "border-[#153244]/10 bg-white text-[#153244] hover:bg-[#F1F5F9] shadow-sm"
            }`}
          >
            {darkMode ? "☀️ Modo Claro" : "🌙 Modo Oscuro"}
          </button>
        </div>

        {/* HERO */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-center leading-[0.95] tracking-tight mb-6 text-balance">
            <span
              className={`block text-[3.2rem] sm:text-7xl md:text-[8rem] font-black tracking-tighter ${
                darkMode ? "text-white" : "text-[#153244]"
              }`}
            >
              Relevamiento
            </span>

            <span
              className={`inline-block text-[2.8rem] sm:text-6xl md:text-[6.5rem] font-black bg-gradient-to-r ${
                darkMode 
                  ? "from-[#8DE2D6] via-white to-[#8DE2D6]" 
                  : "from-[#153244] via-[#8DE2D6] to-[#153244]"
              } bg-clip-text text-transparent`}
            >
              de Uso
            </span>
          </h1>

          <p className={`text-base md:text-xl max-w-xl mx-auto leading-relaxed text-balance px-2 ${
            darkMode ? "text-white/60" : "text-[#475569]"
          }`}>
            Accedé rápidamente a formularios, mapas y documentación oficial del operativo.
          </p>
        </div>

        {/* BOTÓN PRINCIPAL ACCESO DIRECTO */}
        <section className="mb-16 max-w-2xl mx-auto text-center">
          <div className="w-full">
            <a
              href="https://form-relevamientouso-8uzs.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className={`
                flex flex-col sm:flex-row items-center justify-between gap-4
                rounded-2xl p-6 md:p-8
                transition-all duration-300
                hover:scale-[1.01]
                w-full text-left shadow-lg
                ${
                  darkMode
                    ? "bg-[#8DE2D6] text-[#07111F] hover:bg-[#a6ebd1]"
                    : "bg-[#153244] text-white hover:bg-[#1f435c]"
                }
              `}
            >
              <div>
                <span className="block text-xs font-black tracking-widest uppercase mb-1 opacity-80">
                  Formulario de Ofertas
                </span>
                <h2 className="text-xl md:text-2xl font-black tracking-tight leading-tight">
                  Presiona aquí para ir al Formulario
                </h2>
              </div>

              <div className={`flex items-center justify-center w-12 h-12 rounded-full shrink-0 shadow-sm ${
                darkMode ? "bg-[#07111F] text-[#8DE2D6]" : "bg-white text-[#153244]"
              }`}>
                <span className="text-xl font-bold">→</span>
              </div>
            </a>
          </div>
        </section>

        {/* BOTONES SECUNDARIOS / DOCUMENTACIÓN */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-20 max-w-4xl mx-auto">
          
          {/* PRIMER BOTÓN: AMARILLO */}
          <a
            href="/Capacitacion.pdf"
            target="_blank"
            className={`rounded-2xl px-5 py-4 text-base font-bold text-center transition-all duration-300 ${
              darkMode
                ? "bg-[#FFCB00] text-[#153244] hover:bg-[#ffe366]"
                : "bg-[#FFCB00] text-[#153244] hover:bg-[#e5bc00] shadow-md hover:shadow-lg"
            }`}
          >
            Ver Capacitación
          </a>

          {/* SEGUNDO BOTÓN: AZUL 153244 */}
          <a
            href="https://docs.google.com/spreadsheets/d/1aFWOo8L7iMjjwT6ui5w08kXbsG3eNHnZDdNQqOMxXJw/edit?gid=1859004877#gid=1859004877"
            target="_blank"
            className={`rounded-2xl px-5 py-4 text-base font-bold text-center transition-all duration-300 ${
              darkMode
                ? "bg-[#153244] text-white border border-white/10 hover:bg-[#1f435c]"
                : "bg-[#153244] text-white hover:bg-[#1f435c] shadow-md hover:shadow-lg"
            }`}
          >
            Drive Espacios Verdes
          </a>

          {/* TERCER BOTÓN: VERDE AGUA 8DE2D6 */}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSc8khUx2iVitzAx2WNtZMRXL1-x38k3WxxOZGlC_jXLyp_Xeg/viewform"
            target="_blank"
            className={`rounded-2xl px-5 py-4 text-base font-bold text-center transition-all duration-300 ${
              darkMode
                ? "bg-[#8DE2D6]/20 text-[#8DE2D6] border border-[#8DE2D6]/30 hover:bg-[#8DE2D6]/30"
                : "bg-[#8DE2D6] text-[#153244] hover:bg-[#76cfc3] shadow-md hover:shadow-lg"
            }`}
          >
            Asignación de Polígonos
          </a>

        </div>

        {/* MAPAS */}
        <section className="border-t pt-14 opacity-100 transition-colors duration-500"
          style={{ borderColor: darkMode ? "rgba(255,255,255,0.08)" : "rgba(21,50,68,0.15)" }}
        >
          <div className="mb-8">
            <h2 className="text-3xl font-black tracking-tight mb-2">My Maps</h2>
            <p className={`text-sm md:text-base ${darkMode ? "text-white/60" : "text-[#475569]"}`}>
              Mapas de relevamiento organizados de forma oficial por Comuna.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {comunas.map((item) => (
              <a
                key={item.name}
                href={item.link}
                target="_blank"
                className={`group relative overflow-hidden rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 ${
                  darkMode
                    ? "border-white/5 bg-[#122033] hover:border-[#8DE2D6]/30 hover:shadow-xl"
                    : "border-transparent bg-white text-[#153244] hover:border-[#153244]/30 shadow-md hover:shadow-lg"
                }`}
              >
                <div className="flex flex-col items-center text-center">
                  <span className={`text-[10px] font-extrabold uppercase tracking-widest mb-3 ${
                    darkMode ? "text-[#8DE2D6]" : "text-[#153244]/70"
                  }`}>
                    MAPA DE USO
                  </span>

                  <h3 className="text-lg md:text-xl font-bold tracking-tight mb-3">
                    {item.name}
                  </h3>

                  {/* LÍNEAS DE DECORACIÓN */}
                  <div className="flex items-center gap-1.5">
                    <div className={`w-8 h-[4px] rounded-full transition-colors duration-500 ${
                      darkMode ? "bg-white/40" : "bg-[#153244]"
                    }`} />
                    <div className="w-4 h-[4px] rounded-full bg-[#FFCB00]" />
                  </div>
                </div>

                <div className={`absolute top-3 right-3 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  darkMode ? "text-white/40" : "text-[#153244]/40"
                }`}>
                  ↗
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className={`mt-24 border-t pt-10 pb-4 transition-colors duration-500 ${
          darkMode ? "border-white/10" : "border-[#153244]/10"
        }`}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-xl font-black tracking-tight mb-1">
                Relevamiento de Uso
              </h3>
              <p className={`text-xs max-w-md ${darkMode ? "text-white/40" : "text-[#475569]"}`}>
                Plataforma institucional para la carga de datos del operativo de espacios verdes.
              </p>
            </div>

            <div className="flex items-center gap-5">
              <img
                src="/ba-logo.png"
                alt="BA Logo"
                className={`h-11 w-auto object-contain transition duration-300 ${
                  darkMode ? "opacity-70 hover:opacity-100" : "opacity-90 hover:opacity-100"
                }`}
              />
            </div>
          </div>

          <div className={`mt-10 pt-6 border-t flex flex-col md:flex-row items-center justify-between gap-4 text-xs ${
            darkMode ? "border-white/5 text-white/30" : "border-[#153244]/10 text-[#475569]"
          }`}>
            <p>Gobierno de la Ciudad de Buenos Aires</p>
            <p>© 2026 · Gerencia Operativa de Guardaparques</p>
          </div>
        </footer>
      </div>
    </main>
  );
}

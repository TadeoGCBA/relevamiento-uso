{/* SECCIÓN DEL BOTÓN PRINCIPAL (SIN TÍTULOS DUPLICADOS) */}
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

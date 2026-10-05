function HeroSection() {
  return (
    <section className="relative z-10 flex flex-col lg:flex-row min-h-screen px-4 lg:px-12 pt-20" id="inicio">
      {/* Conteúdo */}
      <div className="flex flex-1 flex-col justify-center items-center lg:items-start text-center lg:text-left lg:pl-12 pb-12">
        <img src="./logo.png" alt="Logo" className="w-64 lg:w-96" />

        <h1 className="text-4xl lg:text-4xl leading-tight mb-6">
          <span className="font-bold">Nanno Cosmética & Tricologista Dalva Alves</span>
          <br />
          <span className="text-2xl">Workshop de Tricologia Eubiótica</span>
        </h1>

        <p className="text-base lg:text-lg text-zinc-300 leading-relaxed mb-8">No dia <b>07 de Dezembro</b>, a Especialista em Tricologia Dalva Alves em parceiria com o Instituto Nanno estará realizando um workshop exclusivo para compartilhar toda sua experiência e expertise técnica.</p>

        <a
          href="#ingresso"
          // target="_blank"
          // rel="noreferrer"
          className="
            inline-flex
            items-center
            justify-center
            rounded-md
            px-8
            py-4
            font-semibold
            text-white
            transition
            hover:scale-105
            bg-linear-to-r
            from-[#8C5C1C] via-[#c4984c] to-[#AF7727]
          "
        >
          SAIBA MAIS
        </a>
      </div>

      {/* Imagem */}
      <div className="flex flex-1 items-end justify-center mt-10 lg:mt-0 mb-8">
        <img
          src="./tec.png"
          alt="Foto da palestrante"
          className="
            w-full
            max-w-xs
            sm:max-w-sm
            lg:max-w-none
            lg:h-[85vh]
            object-contain
            object-bottom
          "
        />
      </div>
    </section>
  );
}

export default HeroSection;

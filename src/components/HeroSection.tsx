function HeroSection() {
  return (
    <section className="relative z-10 flex flex-col lg:flex-row min-h-screen px-4 lg:px-12 pt-20" id="inicio">
      {/* Conteúdo */}
      <div className="flex flex-1 flex-col justify-center items-center lg:items-start text-center lg:text-left lg:pl-12 pb-4">
        <img src="./logo.png" alt="Logo" className="w-64 lg:w-96" />

        <h1 className="text-4xl lg:text-6xl leading-tight mb-6">
          <span className="font-bold">Dominando Crespos</span>
          <br />
          <span className="text-2xl">Imersão em Remodelagem de Cachos</span>
        </h1>

        <p className="text-base lg:text-lg text-zinc-300 leading-relaxed mb-8">Transforme sua forma de realizar o Permanente Afro com uma metodologia atual, segura e altamente técnica.</p>

        <p className="text-base lg:text-lg text-zinc-300 leading-relaxed mb-8">Nos dias <b>03 e 04 de agosto de 2026</b>, a Nanno Cosmética recebe a especialista <b>Elaine Figueiredo</b> para dois dias de imersão completa em <b>Permanente Afro.</b> Um treinamento desenvolvido para profissionais que desejam dominar a técnica, entender a ciência por trás do procedimento e entregar resultados de excelência aos seus clientes.</p>

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
            from-blue-600
            via-blue-600
            to-blue-600
          "
        >
          SAIBA MAIS
        </a>
      </div>

      {/* Imagem */}
      <div className="flex flex-1 items-end justify-center mt-10 lg:mt-0">
        <img
          src="./tecnica.png"
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

import { IoMdOpen } from "react-icons/io";

const WhoSection = () => {
  return (
    <section
      className="
        relative
        z-10
        flex
        flex-col
        lg:flex-row
        min-h-screen
        px-4
        lg:px-12
        overflow-hidden
        pb-8
      "
    >
      {/* Background com flip horizontal */}
      <div
        className="
          absolute
          inset-0
          bg-[url('/bg.jpg')]
          bg-cover
          bg-center
          scale-x-[-1]
          -z-20
        "
      />

      {/* Camada escura por cima do background */}
      <div className="absolute inset-0 bg-black/70 -z-10" />

      {/* Imagem */}
      <div className="relative z-10 flex flex-1 items-center justify-center mt-10 lg:mt-0 flex-col">
        <img
          src="./who.png"
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
          id="palestrante"
        />
        <a href="https://www.instagram.com/elainelfsantos/" className="inline-flex text-white text-2xl">
          @elainelfsantos
        </a>
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 flex flex-1 flex-col justify-center items-center lg:items-start text-center lg:text-left lg:pl-12 lg:mt-0 mt-12">
        <div className="lg:max-w-4/5">
          <h1 className="text-2xl lg:text-4xl leading-tight mb-6 text-white">Quem vai te ensinar</h1>

          <p className="text-base lg:text-lg text-zinc-300 leading-relaxed mb-8 text-justify">
            <b>Elaine Figueiredo</b> é educadora, terapeuta capilar e especialista em cabelos crespos e cacheados, com mais de 30 anos de experiência no mercado da beleza. Reconhecida por sua atuação em técnicas de{" "}
            <a href="https://www.instagram.com/elainelfsantos/" target="_blank" rel="noreferrer" className="inline-flex whitespace-nowrap items-center gap-x-1 text-cyan-500">
              Permanente Afro <IoMdOpen className="shrink-0" />
            </a>
            , alia conhecimento técnico, prática e metodologia para formar profissionais capazes de oferecer resultados seguros, modernos e de alta qualidade.
          </p>

          <p className="text-base lg:text-lg text-zinc-300 leading-relaxed mb-8 text-justify">
            No <b>Workshop de Permanente Afro</b>, Elaine compartilhará sua vasta experiência, abordando desde a avaliação e o diagnóstico da fibra capilar até a execução completa da técnica, permitindo que os participantes dominem procedimentos com segurança, excelência e resultados que valorizam a beleza natural dos cabelos crespos e cacheados.
          </p>

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
              w-full
            "
          >
            QUERO DOMINAR A SOLTURA DE CACHOS
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhoSection;

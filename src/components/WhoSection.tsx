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
          alt="Foto da palestrante Dalva Alves"
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
        <a href="https://www.instagram.com/dalva_alves/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-x-2 text-blue-400 text-2xl">
          @dalva_alves <IoMdOpen className="shrink-0" />
        </a>
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 flex flex-1 flex-col justify-center items-center lg:items-start text-center lg:text-left lg:pl-12 lg:mt-0 mt-12">
        <div className="lg:max-w-4/5">
          <h1 className="text-2xl lg:text-4xl leading-tight mb-6 text-white">Quem vai te ensinar</h1>

          <p className="text-base lg:text-lg text-zinc-300 leading-relaxed mb-8 text-justify">
            <b>Dalva Alves</b> é tricologista e educadora, com mais de 26 anos de experiência na área, dedicada ao cuidado do couro cabeludo e à formação de profissionais da beleza.
          </p>

          <p className="text-base lg:text-lg text-zinc-300 leading-relaxed mb-8 text-justify">
            No <b>Workshop de Tricologia Eubiótica</b>, em parceria com a Nanno Cosmética, Dalva vai compartilhar sua experiência em um percurso que começa no microbioma do couro cabeludo e no exposoma capilar. Daí, passa pelo eixo intestino-cabelo, pela queda capilar associada às canetas emagrecedoras e pela conduta pré e pós mega hair e tranças. O curso fecha com marcadores laboratoriais, fitoterapia avançada, eletroterapia, óleos vegetais e essenciais e argiloterapia. Assim, os participantes aprendem a montar protocolos personalizados com segurança, critério técnico e resultados que fidelizam os clientes.
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
              text-black
              transition
              hover:scale-105
              bg-linear-to-r
              from-[#8C5C1C] via-[#F7C46E] to-[#AF7727]
              w-full
            "
          >
            QUERO ME INSCREVER!
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhoSection;

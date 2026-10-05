function AboutSection() {
  return (
    <section className="w-full bg-neutral-950 text-white px-4 lg:px-20 py-20" id="sobre">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <div>
          <div className="text-3xl lg:text-5xl font-bold mt-4 mb-6 leading-tight flex gap-x-8 items-center">
            <div><img src="/logonanno.png" alt="logo da nanno cosmética" className="w-44" /></div>
            <div><img src="/logoinstituto.png" alt="logo da nanno cosmética" className="w-44" /></div>
          </div>
          <span className="text-sm uppercase tracking-[0.3em] text-green-500">
            Sobre a empresa
          </span>

          <h2 className="text-3xl lg:text-5xl font-bold mt-4 mb-6 leading-tight">
            Nanno Cosmética: tecnologia, beleza e conhecimento profissional
          </h2>

          <p className="text-zinc-300 text-base lg:text-lg leading-relaxed mb-5 text-justify">
            A Nanno Cosmética é uma marca brasileira de cosméticos profissionais
            desenvolvida para cabeleireiros que buscam resultado, segurança e
            performance em seus procedimentos.
          </p>

          <p className="text-zinc-300 text-base lg:text-lg leading-relaxed mb-5 text-justify">
            Com atuação no mercado nacional, a empresa oferece soluções para
            salões de beleza, distribuidores e profissionais que desejam trabalhar
            com produtos de alta qualidade, tecnologia cosmética e suporte técnico.
          </p>

          <p className="text-zinc-300 text-base lg:text-lg leading-relaxed text-justify">
            Mais do que produtos, a Nanno acredita na valorização do profissional
            da beleza por meio do conhecimento. Por isso, o Instituto Nanno nasce
            como um espaço de formação, atualização e desenvolvimento técnico.
          </p>
        </div>

        <div className="bg-neutral-900 border border-green-500/30 rounded-3xl p-8 shadow-2xl">
          <h3 className="text-2xl font-bold mb-6 text-green-500">
            Por que aprender com a Nanno?
          </h3>

          <div className="flex flex-col gap-5">
            <div>
              <h4 className="font-semibold text-lg mb-1">Marca profissional</h4>
              <p className="text-zinc-400">
                Produtos desenvolvidos para uso em salões e procedimentos técnicos.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-1">Conhecimento aplicado</h4>
              <p className="text-zinc-400">
                Conteúdos voltados para a rotina real do cabeleireiro.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-1">Segurança química</h4>
              <p className="text-zinc-400">
                Formação com foco em diagnóstico, compatibilidade e resultado.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-1">Valorização profissional</h4>
              <p className="text-zinc-400">
                Educação para transformar técnica em autoridade e retorno financeiro.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default AboutSection;
const SubscriptionSection = () => {
  return (
    <section
      className="w-full bg-linear-to-r from-blue-600 via-blue-600 to-blue-600 h-96 flex flex-col gap-y-8 items-center justify-center px-4" id="cadastro">
      <p className="text-3xl text-white text-center">
        Garanta sua vaga agora, domine as técnicas de <br />
        Permanente Afro e <b>impulsione seu salão!</b>
      </p>
      <p className="text-3xl text-white text-center font-bold">VAGAS LIMITADAS!</p>
      <a href="#ingresso" className="text-center bg-neutral-800 text-white rounded-md py-4 px-8 font-bold hover:scale-105 transition-transform flex items-center gap-x-4">
        <span>QUERO DOMINAR O PERMANENTE AFRO!</span>
      </a>
    </section>
  );
};

export default SubscriptionSection;

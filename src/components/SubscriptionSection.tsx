const SubscriptionSection = () => {
  return (
    <section
      className="w-full bg-linear-to-r from-[#8C5C1C] via-[#F7C46E] to-[#AF7727] h-96 flex flex-col gap-y-8 items-center justify-center px-4" id="cadastro">
      <p className="text-3xl text-black text-center">
        Garanta sua vaga agora, domine técnicas avançadas <br />
       e modernas para <b>impulsionar seu salão!</b>
      </p>
      <p className="text-3xl text-black text-center font-bold">VAGAS LIMITADAS!</p>
      <a href="#ingresso" className="text-center bg-neutral-800 text-white rounded-md py-4 px-8 font-bold hover:scale-105 transition-transform flex items-center gap-x-4">
        <span>QUERO ME INSCREVER!</span>
      </a>
    </section>
  );
};

export default SubscriptionSection;

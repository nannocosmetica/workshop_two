import { FaStar } from "react-icons/fa";
import Card from "./Card";

function CardSection() {
  return (
    <section className="w-full bg-neutral-900 flex flex-col items-center justify-center p-16 px-4" id="workshop">
      <p className="text-4xl mb-16 text-white text-center">Em 9 horas de workshop, você vai aprender:</p>

      <div
        className="
          w-full
          max-w-7xl
          bg-neutral-900
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-4
          justify-items-stretch
        "
      >
        <Card name={"Microbioma do Couro Cabeludo"} text={"Conheça a comunidade de microrganismos que vive no couro cabeludo, entenda o que provoca o desequilíbrio e aprenda a escolher condutas que preservam essa barreira natural em vez de agredi-la."} icon={<FaStar size={32} />} />

        <Card name={"Exposoma Capilar"} text={"Entenda como ambiente, poluição, radiação solar, rotina e hábitos se somam ao longo do tempo e afetam os fios, e aprenda a considerar esses fatores na avaliação de cada cliente."} icon={<FaStar size={32} />} />

        <Card name={"Queda Capilar e Canetas Emagrecedoras"} text={"Entenda a queda capilar associada ao uso das canetas emagrecedoras e à perda de peso acelerada, e saia com um protocolo de atendimento estruturado para acolher e orientar esse novo perfil de cliente."} icon={<FaStar size={32} />} />

        <Card name={"Eixo Intestino-Cabelo"} text={"Descubra a relação entre saúde intestinal, absorção de nutrientes e qualidade dos fios, e por que olhar para o organismo como um todo muda o resultado do tratamento capilar."} icon={<FaStar size={32} />} />

        <Card name={"Conduta Pré e Pós Mega Hair e Tranças"} text={"Saiba como preparar o couro cabeludo antes da aplicação e como cuidar dele durante e após o uso de mega hair e tranças, prevenindo tração excessiva, irritações e queda."} icon={<FaStar size={32} />} />

        <Card name={"Marcadores Laboratoriais"} text={"Aprenda a ler os principais exames laboratoriais relacionados à saúde capilar para entender melhor o quadro do cliente e saber quando é hora de encaminhá-lo ao médico."} icon={<FaStar size={32} />} />

        <Card name={"Fitoterapia Avançada"} text={"Conheça os ativos vegetais com aplicação nos tratamentos capilares, suas indicações e como combiná-los com critério para potencializar os resultados de cada protocolo."} icon={<FaStar size={32} />} />

        <Card name={"Eletroterapia Capilar"} text={"Veja como os recursos de eletroterapia atuam no couro cabeludo, quando indicá-los e como integrá-los com segurança aos protocolos de tratamento."} icon={<FaStar size={32} />} />

        <Card name={"Óleos Vegetais e Óleos Essenciais"} text={"Entenda as diferenças entre óleos vegetais e óleos essenciais, suas indicações para cada necessidade do couro cabeludo e as regras de diluição e uso seguro."} icon={<FaStar size={32} />} />

        <Card name={"Argiloterapia no Couro Cabeludo"} text={"Aprenda a escolher e aplicar argilas no cuidado do couro cabeludo, entendendo as propriedades de cada tipo e como incluí-las nos protocolos de tratamento."} icon={<FaStar size={32} />} />

        <Card name={"Estratégia de Tratamentos"} text={"Una tudo o que foi visto para montar protocolos personalizados, partindo da causa do problema de cada cliente e não apenas do sintoma visível."} icon={<FaStar size={32} />} />

        <Card name={"Kit Argila Verde Bonificado"} text={"Todos os participantes recebem um Kit Argila Verde bonificado da Nanno Cosmética para colocar em prática, no dia a dia, o que aprenderam no workshop."} icon={<FaStar size={32} />} />
      </div>
    </section>
  );
}

export default CardSection;
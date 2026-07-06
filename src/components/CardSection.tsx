import { FaStar } from "react-icons/fa";
import Card from "./Card";

function CardSection() {
  return (
    <section className="w-full bg-neutral-900 flex flex-col items-center justify-center p-16 px-4" id="workshop">
      <p className="text-4xl mb-16 text-white text-center">Em 9 horas de treinamento completo, você vai aprender:</p>

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
        <Card name={"Tricologia e Anatomia da Fibra Capilar"} text={"Entenda a estrutura do fio, suas propriedades e como o conhecimento da anatomia capilar influencia diretamente na segurança e no sucesso da remodelagem."} icon={<FaStar size={32} />} />

        <Card name={"Tabela de Curvaturas"} text={"Aprenda a identificar corretamente cada tipo de curvatura e compreenda as características que diferenciam cabelos ondulados, cacheados e crespos."} icon={<FaStar size={32} />} />

        <Card name={"Diagnóstico Capilar"} text={"Descubra como realizar uma avaliação técnica completa para identificar a saúde da fibra e definir o procedimento mais adequado para cada cliente."} icon={<FaStar size={32} />} />

        <Card name={"Tioglicolato de Amônia e Neutralização"} text={"Compreenda a ação química do Tioglicolato de Amônia, seu mecanismo de transformação da fibra e a importância da neutralização para garantir resultados seguros e duradouros."} icon={<FaStar size={32} />} />

        <Card name={"Técnica de Remodelagem de Cachos"} text={"Conheça o passo a passo da metodologia moderna de remodelagem, desde a preparação até a finalização, com foco em definição, uniformidade e segurança."} icon={<FaStar size={32} />} />

        <Card name={"Casos Práticos com Modelos Reais"} text={"Acompanhe a aplicação da técnica em modelos reais, observando todas as etapas, correções e estratégias utilizadas em diferentes tipos de cabelo."} icon={<FaStar size={32} />} />

        <Card name={"Curvaturas Indicadas para o Permanente Afro"} text={"Saiba identificar em quais tipos de curvatura o Permanente Afro proporciona os melhores resultados e quais critérios devem ser considerados na indicação."} icon={<FaStar size={32} />} />
        
        <Card name={"Evolução do Permanente Afro"} text={"Entenda as principais diferenças entre as técnicas utilizadas no passado e os métodos modernos, com foco em tecnologia, segurança, desempenho e preservação da fibra capilar."} icon={<FaStar size={32} />} />
      </div>
    </section>
  );
}

export default CardSection;

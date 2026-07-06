interface IProps {
  icon: React.ReactNode;
  name: string;
  text: string;
}

const Card = ({ icon, name, text }: IProps) => {
  return (
    <div className="flex flex-col min-h-96 overflow-hidden rounded-lg bg-neutral-800 text-white lg:w-105">
      <div className="flex flex-1 flex-col px-8">
        <div className="flex min-h-34 w-full items-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-r from-blue-600 via-blue-600 to-blue-600">
            {icon}
          </div>
        </div>

        <div className="flex flex-1 flex-col">
          <span className="text-sm font-light uppercase tracking-[6px]">
            {name}
          </span>

          <p className="mt-8 text-justify">
            {text}
          </p>
        </div>
      </div>

      <div className="h-2 w-full bg-linear-to-r from-blue-600 via-blue-600 to-blue-600" />
    </div>
  );
};

export default Card;
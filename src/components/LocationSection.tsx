import { IoMdOpen } from "react-icons/io";

const LocationSection = () => {
  return (
    <section className="w-full bg-neutral-800 px-4 py-20" id="local">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <h2 className="text-3xl lg:text-4xl text-white mb-4">
            Local do Workshop
          </h2>

          <p className="text-zinc-300 text-base lg:text-lg">
            Instituto Nanno Cosmética
          </p>
        </div>

        <div className="w-full overflow-hidden rounded-2xl border border-zinc-800 shadow-lg">
          <iframe
            title="Localização Instituto Nanno Cosmética"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.5705858788606!2d-43.28222482389209!3d-22.81837017931734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997fe284a92c0b%3A0x575a31591aa86e5b!2sInstituto%20Nanno%20Cosm%C3%A9tica!5e0!3m2!1spt-BR!2sbr!4v1781112971185!5m2!1spt-BR!2sbr"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href="https://www.google.com/maps/place/Instituto+Nanno+Cosm%C3%A9tica/@-22.8183702,-43.2822248,17z/data=!3m1!4b1!4m6!3m5!1s0x997fe284a92c0b:0x575a31591aa86e5b!8m2!3d-22.8183702!4d-43.2796499!16s%2Fg%2F11nn2jlt_b?entry=ttu"
            target="_blank"
            rel="noreferrer"
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
              gap-x-2
            "
          >
            <span>ABRIR NO GOOGLE MAPS</span>
            <span><IoMdOpen size={22} /></span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="absolute top-0 left-0 z-20 w-full">
      <div className="flex w-full items-center justify-between p-6">
        <a href="#inicio" onClick={closeMenu}>
          <img
            src="./logonanno.png"
            alt="Logo"
            className="h-10 object-contain"
          />
        </a>

        {/* Menu desktop */}
        <nav className="hidden lg:flex items-center gap-8 text-white font-medium">
          <a href="#inicio" className="transition hover:text-pink-400">
            Início
          </a>

          <a href="#workshop" className="transition hover:text-pink-400">
            Workshop
          </a>

          <a href="#sobre" className="transition hover:text-pink-400">
            Sobre
          </a>

          {/* <a href="#cadastro" className="transition hover:text-pink-400">
            Cadastro
          </a> */}

          <a href="#palestrante" className="transition hover:text-pink-400">
            Palestrante
          </a>

          <a href="#local" className="transition hover:text-pink-400">
            Local
          </a>

          <a href="#ingresso" className="transition hover:text-pink-400">
            Inscrição
          </a>
        </nav>

        {/* Botão mobile */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-white z-30"
          aria-label="Abrir menu"
        >
          {menuOpen ? <IoClose size={34} /> : <IoMenu size={34} />}
        </button>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <nav
          className="
            lg:hidden
            absolute
            top-full
            left-0
            w-full
            bg-neutral-950/95
            backdrop-blur-md
            border-t
            border-zinc-800
            px-6
            py-6
            flex
            flex-col
            gap-5
            text-white
            font-medium
            shadow-lg
          "
        >
          <a
            href="#inicio"
            onClick={closeMenu}
            className="transition hover:text-pink-400"
          >
            Início
          </a>

          <a
            href="#workshop"
            onClick={closeMenu}
            className="transition hover:text-pink-400"
          >
            Workshop
          </a>

          <a
            href="#sobre"
            onClick={closeMenu}
            className="transition hover:text-pink-400"
          >
            Sobre
          </a>

          {/* <a
            href="#cadastro"
            onClick={closeMenu}
            className="transition hover:text-pink-400"
          >
            Cadastro
          </a> */}

          <a
            href="#palestrante"
            onClick={closeMenu}
            className="transition hover:text-pink-400"
          >
            Palestrante
          </a>

          <a
            href="#local"
            onClick={closeMenu}
            className="transition hover:text-pink-400"
          >
            Local
          </a>

          <a
            href="#ingresso"
            onClick={closeMenu}
            className="transition hover:text-pink-400"
          >
            Inscrição
          </a>
        </nav>
      )}
    </header>
  );
}

export default Header;
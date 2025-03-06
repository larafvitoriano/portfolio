import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(30, 30, 46, 0.9)] backdrop-blur-lg border-b border-[#4A5568] shadow-md">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-white">
            <img src="src\assets\icon.jpg" alt="Logo" className="w-10"/>
          </a>
          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden text-[#6B7280]"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-[#E0E0E0] hover:text-[#A0C4FF] transition-colors"
            >
              Início
            </a>
            <a
              href="#about"
              className="text-[#E0E0E0] hover:text-[#A0C4FF] transition-colors"
            >
              Sobre
            </a>
            <a
              href="#projects"
              className="text-[#E0E0E0] hover:text-[#A0C4FF] transition-colors"
            >
              Projetos
            </a>
            <a
              href="#contact"
              className="text-[#E0E0E0] hover:text-[#A0C4FF] transition-colors"
            >
              Contato
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
